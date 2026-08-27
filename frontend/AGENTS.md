# Agent notes

Next.js 15 App Router project. Key conventions:

- **Routes**: `src/app/` — file-based routing; dynamic segments use `[slug]`
- **Client components**: mark with `"use client"` when using hooks, browser APIs, or event handlers
- **Site chrome**: `SiteChrome` wraps all pages via root `layout.tsx`
- **Forms**: submit via `sendInquiry()` → `/api/inquiry` (see `src/lib/contact.ts`)
- **SEO**: metadata in page files; JSON-LD via `JsonLd` component; sitemap at `src/app/sitemap.ts`
- **Pillar service URLs**: root-level paths like `/medical-billing-services` (dedicated pages) plus rewrites in `next.config.ts` for legacy marketing URLs

Do not reintroduce TanStack Start, Vite, or Vinxi tooling.
