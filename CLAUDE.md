# Mitrox Gym Oy – Project Context

## What this is
A gym website boilerplate built with Next.js (App Router). The business is **Mitrox Gym Oy**, a fitness gym based in Helsinki, Finland.

## Stack
- **Next.js** 16.1.6 (App Router, no `src/` directory)
- **React** 19.2.3
- **Tailwind CSS** v4 (via `@tailwindcss/postcss`)
- **Framer Motion** – animations throughout (`fadeUp` variant is the standard pattern)
- **next-themes** – dark/light mode (`defaultTheme: "light"`, `enableSystem: false`)
- **ESLint** 9 with `eslint-config-next`

## Project structure
```
app/
  layout.js         – Root layout: Navbar + Footer + ThemeProvider wrapper
  page.js           – Home: Hero, Stats bar, Features grid, Testimonials, CTA
  about/page.js
  contact/page.js
  membership/page.js – Pricing plans with monthly/annual toggle
  pt-services/page.js
  schedule/page.js
  services/page.js
components/
  Navbar.jsx        – Fixed top nav, scroll shadow, mobile menu, dark mode toggle
  Footer.jsx        – 4-column footer with brand, pages, contact, hours
  ThemeProvider.jsx – Wraps next-themes provider
```

## Brand & design system
- **Brand name:** Mitrox Gym Oy | **Logo initials:** MG
- **Accent color:** `orange-500` (buttons, highlights, active nav, stats bar)
- **Dark bg:** `gray-900` | **Darker:** `gray-800`
- **Font:** Geist (Google Fonts via Next.js, CSS var `--font-geist-sans`)
- Dark mode uses Tailwind `dark:` classes; toggled via `next-themes`

## Conventions
- All animation uses Framer Motion with the shared `fadeUp` variant (`hidden: {opacity:0, y:30}`, `visible: {opacity:1, y:0}`)
- `'use client'` at the top of any file using hooks or Framer Motion
- Path alias `@/` maps to project root (configured in `jsconfig.json`)
- No TypeScript – plain `.js` / `.jsx`
- Contact info: 123 Fitness Street, Helsinki · +358 40 123 4567 · info@mitroxgym.fi
- Opening hours: Mon–Fri 6–22, Sat 8–20, Sun 9–18

## Key details
- `ThemeProvider` defaults to light, no system preference (`enableSystem: false`)
- Navbar is fixed (`pt-16` on `<main>` to compensate), shows backdrop blur on scroll
- Membership page has a monthly/annual billing toggle (state: `annual` boolean)
- All pages use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` for content width
