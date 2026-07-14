# ZMR Fabrications

Business website for ZMR Fabrications, a scaffolding and construction-component fabrication company based in Nandigama, Andhra Pradesh. Single-page marketing site — no backend, no client-side routing, no state library.

## Tech Stack

- **Vue 3** (Composition API, `<script setup>`)
- **Vite** — dev server and build tooling
- **Tailwind CSS** — utility-first styling, custom `primary`/`steel` palette in `tailwind.config.js`
- **@lucide/vue** — icons

## Prerequisites

- Node.js 18+ and npm

## Development

```bash
npm install
npm run dev
```

The app runs at `http://localhost:3000`.

## Build for Production

```bash
npm run build      # outputs to dist/
npm run preview    # serve the production build locally
```

## Linting

```bash
npm run lint
```

## Project Structure

```
vue-app/
├── index.html                # HTML shell, fonts, theme-init script
├── public/                   # Static assets served as-is (logos, product/gallery photos)
├── src/
│   ├── main.js                # App entry point
│   ├── App.vue                 # Root layout — assembles all page sections
│   ├── assets/main.css          # Tailwind entrypoint + shared component classes
│   ├── components/
│   │   ├── layout/              # Navbar, Footer, ScrollProgress, BackToTop
│   │   ├── sections/             # One component per page section (Hero, About, Products, ...)
│   │   └── ui/                    # Reusable primitives (BaseButton, BaseCard, Accordion, Counter)
│   ├── composables/               # useDarkMode, useScrollY, useScrollReveal, useSectionRouter, useCounter
│   └── data/                       # All page content/config — one file per section
```

## Content & Configuration

All business content — copy, phone numbers, address, image paths, headings — lives in `src/data/*.js`, not in the components. To update site content (e.g. a new product, a changed phone number), edit the relevant file in `src/data/` rather than the `.vue` files. Section components are purely presentational and import their content from there.

## Navigation

The site is a single scrolling page with no router. `src/composables/useSectionRouter.js` intercepts in-page anchor clicks, smooth-scrolls to the target section, and syncs the URL to a clean path (`/contact`) via the History API — so it behaves like a multi-page site without actually being one. Because of this, any static host must be configured to fall back to `index.html` for unmatched paths (e.g. Netlify `_redirects` with `/* /index.html 200`, or the equivalent nginx `try_files` rule) so that direct loads of `/contact` etc. don't 404.

## Dark Mode

Theme state is managed by `src/composables/useDarkMode.js` (class-based, persisted to `localStorage` under `zmr-color-scheme`, defaults to OS preference). An inline script in `index.html` applies the `dark` class before Vue mounts to avoid a flash of the wrong theme on load.
