# Shraddha Gautam — Portfolio (React)

A React + Vite + Tailwind CSS portfolio site: dark theme with violet/coral
accents, glassmorphism cards, and an aurora gradient hero.

## Structure
- `src/data/portfolio.js` — **all site content lives here**: projects, tech
  stack, about copy, contact links, and the CivicIndia case study. Edit this
  file to update anything without touching components.
- `src/components/` — Navbar, Hero, SelectedWork, TechStack, About, Contact,
  Footer.
- `src/pages/Home.jsx` — assembles the single-page scroll experience.
- `src/pages/CivicIndiaCaseStudy.jsx` — the `/civicindia` case study route.

## Before you deploy
1. **Photo**: drop your photo at `public/photo.jpg` (or similar) and set
   `profile.photoUrl` in `src/data/portfolio.js` to that path. Until then, the
   About section shows your "SG" initials on a gradient.
2. **Resume**: add `public/resume.pdf`. The `profile.resumeUrl` field already
   points to `/resume.pdf`.
3. **Project links**: several `demoUrl` / `githubUrl` / `url` fields in
   `src/data/portfolio.js` are still `"#"` placeholders — swap in your real
   GitHub repos and live demo links.

## Local development
```bash
npm install
npm run dev
```

## Build for production
```bash
npm run build
```
Outputs to `dist/`.

## Deploy to Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- A `public/_redirects` file is already included so the `/civicindia` route
  works correctly on Netlify (client-side routing via React Router).
