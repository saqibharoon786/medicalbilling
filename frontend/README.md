# American Billing Solutions

Next.js 15 marketing website for medical billing and revenue cycle management services.

## Stack

- **Next.js 15** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Radix UI** + shadcn/ui components

## Getting started

```bash
cd frontend
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Start development server |
| `npm run build`| Production build         |
| `npm run start`| Serve production build   |
| `npm run lint` | Run ESLint               |

## Environment

Copy `.env.example` to `.env.local` and set:

- `NEXT_PUBLIC_SITE_URL` — public site URL (e.g. `https://americanbillingsolutions.com`)
- `WEB3FORMS_ACCESS_KEY` — optional; primary form delivery via Web3Forms
- `FORMSUBMIT_ENDPOINT` — optional; FormSubmit.co fallback for `/api/inquiry`

## Project structure

```
src/
  app/           # Next.js App Router pages & API routes
  components/    # UI and site components
  lib/           # Config, schemas, utilities
  hooks/         # React hooks
public/          # Static assets
```

## Deployment

Production deploys via GitHub Actions to VPS with PM2 (`americanbilling` process). See `.github/workflows/deploy.yaml`.
