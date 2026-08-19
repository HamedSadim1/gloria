#!/usr/bin/env node
/**
 * Prerenders every public SPA route to static HTML so social-media scrapers
 * (Facebook, LinkedIn, X, …) and non-JS crawlers see the full metadata and
 * content without executing JavaScript.
 *
 * Runs automatically after `vite build` (see the "postbuild" script in
 * package.json). Requires Google Chrome / Chromium — override the location
 * with the CHROME_PATH environment variable if it is not auto-detected.
 */
import { spawn } from "node:child_process";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer-core";

import { products } from "../src/models/Data.ts";
import { ROUTES, productUrl } from "../src/config/routes.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const DIST = path.join(ROOT, "dist");
const PORT = Number(process.env.PRERENDER_PORT || 4173);
const BASE_URL = `http://localhost:${PORT}`;

/** All public routes. /dashboard is private (auth) and stays SPA-only. */
const routes = [
  ROUTES.HOME,
  ROUTES.ABOUT,
  ROUTES.PRODUCTS,
  ...products.map((p) => productUrl(p.id)),
  ROUTES.LOGIN,
];

const chromeCandidates = [
  process.env.CHROME_PATH,
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
  "/usr/bin/google-chrome",
  "/usr/bin/google-chrome-stable",
  "/usr/bin/chromium",
  "/usr/bin/chromium-browser",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
].filter(Boolean);

function findChrome() {
  return chromeCandidates.find((candidate) => existsSync(candidate));
}

function startPreviewServer() {
  const viteBin = path.join(ROOT, "node_modules", "vite", "bin", "vite.js");
  if (!existsSync(viteBin)) {
    throw new Error("vite not found — run `npm install` first");
  }
  return spawn(
    process.execPath,
    [viteBin, "preview", "--port", String(PORT), "--strictPort"],
    { cwd: ROOT, stdio: "ignore", windowsHide: true },
  );
}

async function waitForServer(timeoutMs = 30000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(BASE_URL);
      if (res.ok) return;
    } catch {
      // server not ready yet
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error(`Preview server did not start on ${BASE_URL}`);
}

if (!existsSync(path.join(DIST, "index.html"))) {
  console.error("✖ dist/index.html not found — run `npm run build` first.");
  process.exit(1);
}

const chromePath = findChrome();
if (!chromePath) {
  console.error(
    "✖ No Chrome/Chromium found. Install Chrome or set the CHROME_PATH environment variable.",
  );
  process.exit(1);
}

const server = startPreviewServer();
let browser;
try {
  await waitForServer();

  // The pristine SPA shell produced by `vite build`. Every route must be
  // rendered against this shell — once the home page has been written to
  // dist/index.html, serving it as the SPA fallback would bake duplicate
  // (home) meta tags into every other route.
  const shellHtml = readFileSync(path.join(DIST, "index.html"), "utf8");

  browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: true,
    args: ["--no-sandbox"],
  });

  console.log(`Prerendering ${routes.length} routes…`);
  let homeHtml = null;
  for (const route of routes) {
    // Restore the clean shell before each render
    writeFileSync(path.join(DIST, "index.html"), shellHtml);

    const page = await browser.newPage();
    try {
      await page.goto(BASE_URL + route, {
        waitUntil: "networkidle0",
        timeout: 60000,
      });
      // Wait for the app (and Helmet metadata) to render
      await page.waitForSelector("#root > *", { timeout: 15000 });

      const html = await page.content();
      if (route === ROUTES.HOME) {
        // Written last — it doubles as the SPA fallback
        homeHtml = html;
      } else {
        const outputPath = path.join(DIST, route, "index.html");
        mkdirSync(path.dirname(outputPath), { recursive: true });
        writeFileSync(outputPath, html);
        const size = (statSync(outputPath).size / 1024).toFixed(1);
        console.log(
          `  ✓ ${route} → ${path.relative(ROOT, outputPath)} (${size} kB)`,
        );
      }
    } finally {
      await page.close();
    }
  }

  // Home last, so the SPA fallback is the rendered home page
  if (homeHtml !== null) {
    writeFileSync(path.join(DIST, "index.html"), homeHtml);
    const size = (statSync(path.join(DIST, "index.html")).size / 1024).toFixed(
      1,
    );
    console.log(`  ✓ / → dist/index.html (${size} kB)`);
  }
  console.log(
    `Done — ${routes.length} static pages written to ${path.relative(ROOT, DIST)}.`,
  );
} finally {
  if (browser) {
    await browser.close().catch(() => {});
  }
  server.kill();
}
