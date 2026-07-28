# Mapa del repositorio · soyelaranova.com

**Actualizado:** 25 julio 2026

## Propósito

| Path | Rol |
|------|-----|
| `web/` | App Next.js — **única** app en Vercel |
| `docs/` | Docs activos de producto (marca, embudo, deploy) |
| `ops/b2b/` | Portfolio PDF / brochure / plantillas (no deploy) |
| `.claude/skills/` | Skills agentes |
| `.cursor/` | Reglas + memoria Cursor |
| `.github/workflows/` | CI |

## Dentro de `web/`

| Path | Rol |
|------|-----|
| `app/` | Páginas + `api/discovery` + `api/oracle` |
| `components/` | Nav, forms, immersive, escenas |
| `lib/` | Ofertas LP, fotos, navegación |
| `public/` | Assets servidos (ver `public/README.md`) |
| `templates/evelyn-b2b/` | Plantillas HTML internas |
| `public/evelyn-b2b/` | HTML B2B autónomos servidos por URL directa (cv, portfolio, propuestas, linktree) — no importados por la app |
| `scripts/verify-public-assets.mjs` | Guardrails de assets |

## Deploy

| Regla | Detalle |
|-------|---------|
| Root Directory | `web` |
| Config | `web/vercel.json` |
| Rama prod | `main` |
| Pre-build | `npm run verify:assets` |
| CI | `.github/workflows/web.yml` |

## Qué se eliminó (julio 2026)

Carpetas de contenido/producción de abr–may 2026 que **no** alimentaban el deploy:

`01_LANZAMIENTO/`, `02_CONTENIDO_MAESTRO/`, `03_VISUAL_KIT/`, `04_PRODUCCION_REEL/`,
`05_DOCS_ESTRATEGIA/`, `06_ARCHIVO/`, `api/` (stub Hono), `ebooks/`, `assets/` (movido a `ops/b2b/`),
`CONTEXT_CURSOR.md`, `netlify.toml`.

## Regla para agentes

1. Marca / tipografía / embudo → `docs/brand.md`.
2. Fotos Evelyn → `web/public/_assets/photos/kit-web-real/` (solo editorial/de-pie + nuevos renders; sin selfies/serie desk crema/higgs).
3. Material freelance PDF → `ops/b2b/`.
4. Antes de push a `main`: `cd web && npm run verify:assets && npm run build`.
