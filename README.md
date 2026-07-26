# CalcNest

A premium, modern, responsive calculator website built with Next.js 15, React, TypeScript, and Tailwind CSS.

## ✅ Verified

This project was `npm install`'d and `npm run build`'d successfully in a sandboxed environment
(with Google Fonts temporarily stubbed, since that sandbox has no internet access) — **43 pages**
compiled and statically generated with zero errors. On your machine, with normal internet access,
`next/font/google` will fetch Poppins automatically at build time; no changes needed.

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # serve the production build
```

Requires Node.js 18.18+ (Node 20 LTS recommended).

## Responsive / device coverage

Every layout component (header, hero, category grid, calculator cards, calculator widgets, footer)
is built mobile-first with Tailwind breakpoints (`sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px),
so the site adapts across:

- **Phones** (iPhone SE through iPhone 15 Pro Max, small/large Android phones) — single-column
  layout, hamburger nav, stacked calculator inputs, horizontally scrollable tables.
- **Tablets** (iPad, iPad Pro, Android tablets) — 2-column card grids, nav collapses at `lg` (1024px)
  since iPads in portrait are ~768–834px wide.
- **Laptops & desktops** (MacBook, Windows laptops, external monitors) — full mega-menu nav,
  3–4 column grids, sticky table-of-contents sidebar on calculator pages.
- Explicit `viewport` export in `app/layout.tsx` sets `width=device-width, initial-scale=1` so
  mobile browsers (Safari on iPhone, Chrome on Android) render at native scale instead of a
  zoomed-out desktop layout.
- Touch targets (buttons, nav links) are sized ≥40px; inputs use native `<input type="number">`
  and `<input type="range">` so mobile keyboards and sliders work correctly on iOS/Android.
- `prefers-reduced-motion` is respected globally (see `app/globals.css`).

Recommended: after `npm run dev`, check Chrome DevTools device toolbar (iPhone SE, iPhone 14 Pro,
iPad Air, Galaxy S20) and resize a real browser window down to ~320px as a final pass.

## What's fully built

- **Homepage**: hero with live search, animated stat counters, 9 category cards, Featured /
  Popular / Latest calculator sections, blog section, newsletter (React Hook Form + Zod).
- **Sticky header** with mega-menu + mobile drawer nav, **footer** with all requested link groups.
- **3 complete, interactive calculator pages** — BMI, Compound Interest, Percentage — each with:
  live calculation widget, formula, step-by-step explanation, examples table, FAQ (with FAQPage
  schema), related calculators, author card, sticky table of contents, breadcrumbs (with
  BreadcrumbList schema), copy/print/share buttons, SoftwareApplication + Article JSON-LD.
- **Dynamic category pages** (`/category/[slug]`) for all 9 categories.
- **Fallback calculator template** (`/calculators/[slug]`) so all 20 example calculators listed in
  `lib/data.ts` have a real, indexable, linkable page today — swap these for full builds using the
  BMI/Compound Interest/Percentage pages as your pattern.
- **Blog** listing + dynamic post pages with Article schema.
- **SEO plumbing**: `sitemap.ts`, `robots.ts`, canonical URLs, Open Graph + Twitter Card metadata,
  Organization + WebSite JSON-LD sitewide.
- Loading skeleton, print stylesheet, skip-to-content link, visible focus rings.

## What's intentionally out of scope here (needs a backend)

The brief also asked for an **admin dashboard** (add/edit/delete calculators, manage categories,
manage blog posts, image uploads, analytics) and a **dark mode toggle** and **contact form** with
persistence. These need a database and auth, not just a static frontend:

- **Admin CRUD + blog CMS**: pair this frontend with a headless CMS (Sanity, Payload, or a simple
  Postgres + Prisma setup) and gate `/admin` behind auth (NextAuth/Clerk). `lib/data.ts` is written
  as a single typed source of truth specifically so it's a drop-in replacement target for a real
  database query layer later.
- **Analytics dashboard**: wire up Vercel Analytics / PostHog / Plausible for real traffic data,
  then build a simple `/admin/analytics` page reading from their API.
- **Contact form persistence**: needs an API route + email service (Resend/SendGrid) or a form
  backend (Formspree) — the UI pattern already exists in `Newsletter.tsx` to copy from.
- **Dark mode**: `tailwind.config.ts` already has `darkMode: "class"`; add a toggle button that
  flips a class on `<html>` and persist the choice (cookie, not localStorage, since this frontend
  may later be server-rendered per request).
- **100+ calculators**: only 20 are seeded in `lib/data.ts` as examples. Add more entries there and
  they'll automatically get sitemap entries, category pages, and fallback pages — build out full
  interactive versions using the three live calculators as the template.

## Project structure

```
app/                      Next.js App Router pages
  calculators/[slug]/     fallback template for non-built calculators
  calculators/bmi-calculator/, compound-interest-calculator/, percentage-calculator/
  category/[slug]/        category listing pages
  blog/, blog/[slug]/     blog listing + posts
  sitemap.ts, robots.ts
components/
  ui/                     Button, Badge (shadcn-style primitives)
  calculators/            interactive calculator widgets
lib/
  data.ts                 single source of truth: categories, calculators, blog posts
  utils.ts
```
