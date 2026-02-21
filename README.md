# Buchwald & May Website

Produktions-Setup mit Next.js (App Router), Tailwind CSS, Bun und Lucide.

## Stack

- Next.js (App Router)
- React 19
- Tailwind CSS
- Bun als Package Manager
- Lucide Icons

## Start

```bash
bun install
bun run dev
```

## Build

```bash
bun run lint
bun run typecheck
bun run build
bun run start
```

## Quality Gates

- `bun run lint` mit Next Core Web Vitals Regeln
- `bun run typecheck` mit strict TypeScript
- CI Workflow in `.github/workflows/ci.yml` (Lint + Build)
- automatisierte Dependency-Updates via `.github/dependabot.yml`

## Tooling-Notiz

- `eslint@10` ist mit der aktuellen Next-Toolchain noch nicht stabil. Das Projekt ist deshalb auf `eslint@9.39.3` gepinnt.
- Dependabot ignoriert fuer `eslint` nur Major-Updates, damit keine unbrauchbaren Upgrade-PRs entstehen.

## SEO-Grundgeruest

- zentrale Metadata in `app/layout.tsx`
- strukturierte Daten (JSON-LD) in `app/page.tsx`
- `app/robots.ts`
- `app/sitemap.ts`

## Environment

Optional:

- `SITE_URL` (z.B. `https://mbws.vercel.app`, später `https://mbws.dev`)
- `RESEND_API_KEY` fuer den Versand ueber Resend
- `CONTACT_TO_EMAIL` als Empfaenger-Adresse (Default-Fallback: `contact@mbws.dev`)
- `CONTACT_FROM_EMAIL` als verifizierte Absender-Adresse (z.B. `MBWS Kontakt <kontakt@mbws.dev>`)
- `KV_REST_API_URL` und `KV_REST_API_TOKEN` fuer verteiltes Rate-Limiting des Kontaktformulars

Vorlage: `.env.example`
