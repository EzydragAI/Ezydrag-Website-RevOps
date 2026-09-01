# Ezydrag — AI Production Readiness for RevOps

Marketing site for Ezydrag, the specialist that takes RevOps AI — forecasting, lead scoring, AI-generated reporting, and agent workflows — from unreliable pilot to governed, monitored production.

## Stack

- Next.js (App Router, React Compiler, Turbopack)
- GSAP + Lenis for scroll-synced motion
- Tailwind CSS v4
- Zustand (UI state), TanStack Query, React Hook Form + Zod (partner form)

## Run locally

```bash
npm install
npm run dev
```

The dev server runs on port **3001** (`npm run dev`). Build with `npm run build`, serve with `npm run start`.

## Email (channel partner form)

The partner request form posts to `/api/contact`, which forwards the message by email via Resend. Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY` — Resend API key. Without it, submissions are logged to the server console instead of mailed (useful for local development).
- `CONTACT_FROM` — the From address, e.g. `Ezydrag Website <onboarding@resend.dev>`.

The "Schedule via Gmail" call-to-action needs no configuration — it opens a prefilled Gmail compose window addressed to the team.

## Content

All copy lives in `src/content/` (site, manifesto, services, story, products, nav, photos). Products are intentionally unnamed and marked "coming soon" until they ship. The default theme is light; visitors can switch to dark with the header toggle.
