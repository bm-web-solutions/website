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
bun run build
bun run start
```

## Quality Gates

- `bun run lint` mit Next Core Web Vitals Regeln
- CI Workflow in `.github/workflows/ci.yml` (Lint + Build)
- automatisierte Dependency-Updates via `.github/dependabot.yml`

## Audit-Notiz

- Aktuell sind 2 transitive Dev-Tooling Findings aus `bun audit` offen (`minimatch`, `ajv`) ueber die ESLint/Next-Lint-Chain.
- `eslint@10` ist in diesem Setup derzeit nicht lauffaehig (`scopeManager.addGlobals` Fehler), lint ist deshalb aktuell kein harter Gate bis die Toolchain wieder stabil ist.

## SEO-Grundgeruest

- zentrale Metadata in `app/layout.jsx`
- strukturierte Daten (JSON-LD) in `app/page.jsx`
- `app/robots.js`
- `app/sitemap.js`

## Environment

Optional:

- `SITE_URL` (z.B. `https://mbws.vercel.app`, später `https://mbws.dev`)
- `RESEND_API_KEY` fuer den Versand ueber Resend
- `CONTACT_TO_EMAIL` als Empfaenger-Adresse (Default-Fallback: `contact@mbws.dev`)
- `CONTACT_FROM_EMAIL` als verifizierte Absender-Adresse (z.B. `MBWS Kontakt <kontakt@mbws.dev>`)
- `KV_REST_API_URL` und `KV_REST_API_TOKEN` fuer verteiltes Rate-Limiting des Kontaktformulars

Vorlage: `.env.example`
