# React Router Demo App

A modern React application demonstrating routing with React Router DOM, built with Vite and TypeScript. This app showcases navigation, protected routes, and dynamic routing.

## 🚀 Features

- **React Router DOM v7**: Client-side routing with nested routes
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and development server
- **Semantic UI**: Clean and responsive UI components
- **Protected Routes**: Authentication-based access control
- **Dynamic Routing**: Product detail pages with URL parameters
- **Local Storage**: Simple user session management

## 📋 Pages

- **Home**: Welcome page with introductory content
- **About**: Information about the application
- **Contact**: Product catalog with clickable product cards
- **Login**: User authentication form
- **Dashboard**: Protected user dashboard (requires login)
- **Product Details**: Individual product pages (e.g., `/contact/:id`)

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Language**: TypeScript 5
- **Routing**: React Router DOM 7
- **Styling**: Semantic UI CSS
- **State Management**: React Hooks + Local Storage

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

- `npm run dev` - Start development server
- `npm run build` - Build for production (runs prerendering afterwards)
- `npm run preview` - Preview production build locally

## 🔍 SEO & prerendering

Metadata (title, description, canonical, Open Graph, Twitter Card and JSON-LD) is managed per route by `react-helmet-async` via the reusable `Seo` component (`src/components/seo/Seo.tsx`). Config lives in `src/config/seo.ts` — replace the `gloria.example.com` placeholder with the production domain (also referenced in `public/robots.txt`, `public/sitemap.xml` and `public/llms.txt`).

`npm run build` prerenders every public route to static HTML (`scripts/prerender.mjs`, powered by `puppeteer-core` + your installed Chrome). Social-media scrapers and non-JS crawlers therefore see the full metadata and content without executing JavaScript. Prerendered pages are served as `dist/<route>/index.html`, which static hosts resolve automatically.

> **Local preview note:** `vite preview` only serves the prerendered pages with a trailing slash (`/about/`). Use `npx serve dist` if you want clean URLs locally. Requires Chrome (override with `CHROME_PATH`).

## 🏗️ Project Structure

```text
src/
├── components/
│   ├── About.tsx          # About page
│   ├── Card.tsx           # Product detail component
│   ├── Contact.tsx        # Product listing page
│   ├── Dashboard.tsx      # Protected dashboard
│   ├── ErrorPage.tsx      # 404 error page
│   ├── Footer.tsx         # Footer component
│   ├── Home.tsx           # Home page
│   ├── Login.tsx          # Login form
│   ├── Navbar.tsx         # Navigation bar
│   ├── ProtectedRoute.tsx # Route protection wrapper
│   └── SharedLayout.tsx   # Layout with navbar
├── models/
│   └── Data.ts            # Product data
├── App.tsx                # Main app component with routing
├── index.tsx              # App entry point
└── index.css              # Global styles
```

## 🎯 Usage

1. **Navigation**: Use the navbar to navigate between pages
2. **Products**: Click on product cards in Contact page to view details
3. **Login**: Use the login form to authenticate (stores name in localStorage)
4. **Dashboard**: Access protected dashboard after login

## 🔐 Authentication

The app uses a simple localStorage-based authentication:

- Login stores the username in localStorage
- Dashboard displays the stored username
- ProtectedRoute component wraps dashboard (currently allows all access)

## 📱 Responsive Design

Built with Semantic UI for responsive design that works on desktop and mobile devices.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational purposes. Feel free to use and modify as needed.

---

Built with ❤️ using React, TypeScript, and Vite
