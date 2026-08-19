# GLORIA — React Router Demo App

A modern React application demonstrating routing with React Router DOM, built with Vite, TypeScript, and Tailwind CSS. The app showcases nested routes, protected routes, dynamic routing, SEO metadata, and static prerendering.

## 🚀 Features

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

## 📋 Pages

- **Home** (`/`): Welcome page with hero, features, and stats
- **About** (`/about`): Developer profile and tech stack
- **Products** (`/contact`): Product catalog with clickable cards
- **Product Details** (`/contact/:id`): Individual product page with specs
- **Login** (`/login`): Username-based authentication
- **Dashboard** (`/dashboard`): Protected user dashboard (requires login)
- **404** (`*`): Error page for unknown routes

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 8
- **Language**: TypeScript 5
- **Routing**: React Router DOM 7
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion
- **SEO**: react-helmet-async
- **State Management**: React Context + Local Storage
- **Utilities**: clsx + tailwind-merge

## 📦 Installation

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

## 🔧 Available Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production (runs prerendering afterwards)
- `npm run preview` — Preview production build locally
- `npm run lint` — Lint with ESLint
- `npm run lint:fix` — Lint and auto-fix
- `npm run format` — Format all files with Prettier
- `npm run format:check` — Verify formatting

Commits are checked by Husky hooks: `lint-staged` (Prettier + ESLint on staged files) and `commitlint` (Conventional Commits).

## 🔍 SEO & prerendering

Metadata (title, description, canonical, Open Graph, Twitter Card and JSON-LD) is managed per route by `react-helmet-async` via the reusable `Seo` component (`src/components/seo/Seo.tsx`). Config lives in `src/config/seo.ts` — replace the `gloria.example.com` placeholder with the production domain (also referenced in `public/robots.txt`, `public/sitemap.xml` and `public/llms.txt`).

`npm run build` prerenders every public route to static HTML (`scripts/prerender.mjs`, powered by `puppeteer-core` + your installed Chrome). Social-media scrapers and non-JS crawlers therefore see the full metadata and content without executing JavaScript. Prerendered pages are served as `dist/<route>/index.html`, which static hosts resolve automatically.

> **Local preview note:** `vite preview` only serves the prerendered pages with a trailing slash (`/about/`). Use `npx serve dist` if you want clean URLs locally. Requires Chrome (override with `CHROME_PATH`).

## 🏗️ Project Structure

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

## ✨ Code Conventions

- **Path aliases**: Imports use `@/` (e.g. `@/components/ui`, `@/config/constants`) — mapped to `src/` in `tsconfig.json` and `vite.config.mts`.
- **`cn()` helper**: Dynamic class names go through `cn()` (`src/utils/cn.ts`), built on `clsx` + `tailwind-merge`. It accepts strings, arrays, and conditional objects: `cn("base", { "text-center": centered })`.
- **Centralized config**: Route paths live in `src/config/routes.ts`, brand/animation/layout constants in `src/config/constants.ts`, SEO in `src/config/seo.ts`.
- **Animation timing**: Framer Motion transitions use the `ANIM`, `STAGGER`, and `DELAY` constants instead of hardcoded durations.
- **Shared UI**: Reusable components (buttons, badges, fade-ins, stat cards) live in `src/components/ui` and are re-exported through the `@/components/ui` barrel.

## 🎯 Usage

1. **Navigation**: Use the navbar to navigate between pages
2. **Products**: Click on product cards on the Products page to view details
3. **Login**: Use the login form to authenticate (stores name in localStorage)
4. **Dashboard**: Access the protected dashboard after login — unauthenticated visitors are redirected to `/login`

## 🔐 Authentication

The app uses a simple localStorage-based authentication via `AuthContext`:

- `login(name)` stores the username under the `name` key in localStorage
- `logout()` removes it and resets the session
- `ProtectedRoute` redirects unauthenticated users from `/dashboard` to `/login`
- `useAuth()` exposes `userName`, `isLoggedIn`, `login`, and `logout`

## 📱 Responsive Design

Built with Tailwind CSS (mobile-first, `sm:`/`md:` breakpoints) and Framer Motion, with a custom neon theme (`neon-cyan`, `neon-purple`, `neon-pink`) and reduced-motion support.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes (conventional commit messages)
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational purposes. Feel free to use and modify as needed.

---

Built with ❤️ using React, TypeScript, Vite, and Tailwind CSS
