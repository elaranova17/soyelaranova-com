# soyelaranova.com · Monorepo

Portal Elara Nova + assets de marca + docs de lanzamiento. **Deploy activo:** app Next.js en `web/`.

## Estructura (mayo 2026)

```
soyelaranova-com/
├── web/                    ← 🚀 App Next.js 16 (Vercel root)
├── api/                    ← Hono API opcional (no en deploy Vercel)
├── docs/                   ← Docs técnicos, marca, deploy
├── assets/b2b/             ← PDFs y plantillas Evelyn B2B
├── 01_LANZAMIENTO/         ← Checklists y planes de lanzamiento
├── 02_CONTENIDO_MAESTRO/     ← Copy, ebooks, lead magnets (fuente)
├── 03_VISUAL_KIT/          ← Imágenes, logos, stickers (canónico)
├── 04_PRODUCCION_REEL/     ← Assets CapCut / reels
├── 05_DOCS_ESTRATEGIA/     ← Briefs estratégicos largos
├── 06_ARCHIVO/             ← Legacy / copias no usadas en código
├── ebooks/                 ← Manuscritos ebook (Ciclo Nova)
├── CONTEXT_CURSOR.md       ← Brief lockeado (fuente de verdad)
├── vercel.json             ← Build desde web/
└── README.md               ← Este archivo
```

## Desarrollo rápido

```bash
cd web
npm ci          # o: pnpm install
npm run dev     # http://localhost:3000
npm run build   # debe pasar antes de deploy
npm run lint
```

## Fuentes de verdad

| Qué | Dónde |
|-----|-------|
| Brief producto + stack | `CONTEXT_CURSOR.md` |
| Estado técnico vivo | `docs/ESTADO_PROYECTO.md` |
| Deploy + env vars | `docs/DEPLOY.md` |
| Mapa del repo | `docs/REPO_STRUCTURE.md` |
| Copy landing | `02_CONTENIDO_MAESTRO/LANDING_SOYELARANOVA_COM.md` |
| Assets visuales | `03_VISUAL_KIT/` → copiados a `web/public/` al deploy |

## Deploy

Vercel apunta a `web/` vía `vercel.json`. Solo la rama `main` despliega automáticamente.

Ver `docs/DEPLOY.md` para variables de entorno y pasos manuales.

## Duplicados intencionales

- **`03_VISUAL_KIT/` → `web/public/`:** el visual kit es la fuente; `public/` son copias de producción (avatar, firma, lead magnet PDF).
- **`Los_7_Dias_de_Elara.pdf`** (1.1 MB) ≠ **`web/public/lead-magnet/7-cartas.pdf`** (58 KB) — son versiones distintas; no deduplicar.

## Qué NO es este repo

- `Documents/elara-nova/` — ops Amazon / ebooks (otro monorepo)
- Rutas v2 (`/luna`, login miembros, Sanity 40 cartas) — ver CONTEXT §9

---

*"Mira todo lo que siempre fuiste capaz de ser." — Elara Nova*
