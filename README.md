# GLORIA — React Router Demo App

A modern React application demonstrating routing with React Router DOM, built with Vite, TypeScript, and Tailwind CSS. The app showcases nested routes, protected routes, dynamic routing, SEO metadata, and static prerendering.

## <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' width='18' height='18'%3E%3Cpath d='M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z'/%3E%3Cpath d='M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z'/%3E%3Cpath d='M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0'/%3E%3Cpath d='M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5'/%3E%3C/svg%3E" width="18" height="18" style="vertical-align: middle" alt="" /> Features

- **React Router DOM v7**: Client-side routing with nested routes
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and development server
- **Tailwind CSS v4**: Custom neon theme defined via `@theme` in `src/index.css`
- **Framer Motion**: Scroll/mount animations with centralized timing constants
- **Protected Routes**: `/dashboard` redirects to `/login` when not authenticated
- **Dynamic Routing**: Product detail pages with URL parameters (`/contact/:id`)
- **Local Storage**: Simple user session management via `AuthContext`
- **SEO & Prerendering**: Per-route metadata plus static HTML prerendering for scrapers
- **Path Aliases**: All imports use the `@/` alias (maps to `src/`)
- **Class Merging**: `cn()` utility built on `clsx` + `tailwind-merge`

## <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' width='18' height='18'%3E%3Cpath d='M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01'/%3E%3C/svg%3E" width="18" height="18" style="vertical-align: middle" alt="" /> Pages

- **Home** (`/`): Welcome page with hero, features, and stats
- **About** (`/about`): Developer profile and tech stack
- **Products** (`/contact`): Product catalog with clickable cards
- **Product Details** (`/contact/:id`): Individual product page with specs
- **Login** (`/login`): Username-based authentication
- **Dashboard** (`/dashboard`): Protected user dashboard (requires login)
- **404** (`*`): Error page for unknown routes

## <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' width='18' height='18'%3E%3Cpath d='M16 18l6-6-6-6M8 6l-6 6 6 6'/%3E%3C/svg%3E" width="18" height="18" style="vertical-align: middle" alt="" /> Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 8
- **Language**: TypeScript 5
- **Routing**: React Router DOM 7
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion
- **SEO**: react-helmet-async
- **State Management**: React Context + Local Storage
- **Utilities**: clsx + tailwind-merge

## <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' width='18' height='18'%3E%3Cpath d='M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3'/%3E%3C/svg%3E" width="18" height="18" style="vertical-align: middle" alt="" /> Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/HamedSadim1/react-router.git
   cd react-router
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' width='18' height='18'%3E%3Cpath d='M4 17l6-6-6-6M12 19h8'/%3E%3C/svg%3E" width="18" height="18" style="vertical-align: middle" alt="" /> Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production (runs prerendering afterwards)
- `npm run preview` — Preview production build locally
- `npm run lint` — Lint with ESLint
- `npm run lint:fix` — Lint and auto-fix
- `npm run format` — Format all files with Prettier
- `npm run format:check` — Verify formatting

Commits are checked by Husky hooks: `lint-staged` (Prettier + ESLint on staged files) and `commitlint` (Conventional Commits).

## <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' width='18' height='18'%3E%3Cpath d='M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM21 21l-4.35-4.35'/%3E%3C/svg%3E" width="18" height="18" style="vertical-align: middle" alt="" /> SEO & prerendering

Metadata (title, description, canonical, Open Graph, Twitter Card and JSON-LD) is managed per route by `react-helmet-async` via the reusable `Seo` component (`src/components/seo/Seo.tsx`). Config lives in `src/config/seo.ts` — replace the `gloria.example.com` placeholder with the production domain (also referenced in `public/robots.txt`, `public/sitemap.xml` and `public/llms.txt`).

`npm run build` prerenders every public route to static HTML (`scripts/prerender.mjs`, powered by `puppeteer-core` + your installed Chrome/Chromium/Edge). Social-media scrapers and non-JS crawlers therefore see the full metadata and content without executing JavaScript. Prerendered pages are served as `dist/<route>/index.html`, which static hosts resolve automatically.

> **Browser requirement:** any Chromium-based browser (Chrome, Edge, Chromium) is auto-detected. If none is found, prerendering is skipped with a warning and the build still succeeds (without per-route static pages). Override the location with the `CHROME_PATH` environment variable.

> **Local preview note:** `vite preview` only serves the prerendered pages with a trailing slash (`/about/`). Use `npx serve dist` if you want clean URLs locally.

## <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' width='18' height='18'%3E%3Cpath d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'/%3E%3C/svg%3E" width="18" height="18" style="vertical-align: middle" alt="" /> Project Structure

```text
src/
├── components/
│   ├── error/          # ErrorBoundary, ErrorPage
│   ├── layout/         # SharedLayout, Navbar, Footer, ProtectedRoute, navbar/*
│   ├── pages/          # Home, About, Products, Card, Login, Dashboard (+ sub-components)
│   ├── seo/            # Seo (react-helmet-async metadata)
│   └── ui/             # Shared UI primitives (Button, FadeIn, Badge, StatCard, …)
├── config/             # Centralized routes, constants (brand, animations), SEO
├── contexts/           # AuthContext (localStorage session)
├── hooks/              # useAuth
├── models/             # Product data & types
├── utils/              # cn, storage, validation, format, async, seo helpers
├── App.tsx             # Main app component with routing
├── index.tsx           # App entry point
└── index.css           # Tailwind v4 theme + global styles
```

## <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' width='18' height='18'%3E%3Cpath d='M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z'/%3E%3C/svg%3E" width="18" height="18" style="vertical-align: middle" alt="" /> Code Conventions

- **Path aliases**: Imports use `@/` (e.g. `@/components/ui`, `@/config/constants`) — mapped to `src/` in `tsconfig.json` and `vite.config.mts`.
- **`cn()` helper**: Dynamic class names go through `cn()` (`src/utils/cn.ts`), built on `clsx` + `tailwind-merge`. It accepts strings, arrays, and conditional objects: `cn("base", { "text-center": centered })`.
- **Centralized config**: Route paths live in `src/config/routes.ts`, brand/animation/layout constants in `src/config/constants.ts`, SEO in `src/config/seo.ts`.
- **Animation timing**: Framer Motion transitions use the `ANIM`, `STAGGER`, and `DELAY` constants instead of hardcoded durations.
- **Shared UI**: Reusable components (buttons, badges, fade-ins, stat cards) live in `src/components/ui` and are re-exported through the `@/components/ui` barrel.

## <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' width='18' height='18'%3E%3Cpath d='M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'/%3E%3C/svg%3E" width="18" height="18" style="vertical-align: middle" alt="" /> Usage

1. **Navigation**: Use the navbar to navigate between pages
2. **Products**: Click on product cards on the Products page to view details
3. **Login**: Use the login form to authenticate (stores name in localStorage)
4. **Dashboard**: Access the protected dashboard after login — unauthenticated visitors are redirected to `/login`

## <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' width='18' height='18'%3E%3Cpath d='M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2zM7 11V7a5 5 0 0 1 10 0v4'/%3E%3C/svg%3E" width="18" height="18" style="vertical-align: middle" alt="" /> Authentication

The app uses a simple localStorage-based authentication via `AuthContext`:

- `login(name)` stores the username under the `name` key in localStorage
- `logout()` removes it and resets the session
- `ProtectedRoute` redirects unauthenticated users from `/dashboard` to `/login`
- `useAuth()` exposes `userName`, `isLoggedIn`, `login`, and `logout`

## <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' width='18' height='18'%3E%3Cpath d='M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z'/%3E%3C/svg%3E" width="18" height="18" style="vertical-align: middle" alt="" /> Responsive Design

Built with Tailwind CSS (mobile-first, `sm:`/`md:` breakpoints) and Framer Motion, with a custom neon theme (`neon-cyan`, `neon-purple`, `neon-pink`) and reduced-motion support.

## <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7280' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' width='18' height='18'%3E%3Cpath d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'/%3E%3Cpath d='M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z'/%3E%3Cpath d='M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75'/%3E%3C/svg%3E" width="18" height="18" style="vertical-align: middle" alt="" /> Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes (conventional commit messages)
4. Test thoroughly
5. Submit a pull request

Built with <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23ef4444' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' width='14' height='14' style='vertical-align: middle'%3E%3Cpath d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'/%3E%3C/svg%3E" width="14" height="14" alt="" /> using React, TypeScript, Vite, and Tailwind CSS
