# soyelaranova.com · Agent instructions

**Fuente de verdad:** [`../CONTEXT_CURSOR.md`](../CONTEXT_CURSOR.md)
**Estado vivo (verificado):** [`../docs/ESTADO_PROYECTO.md`](../docs/ESTADO_PROYECTO.md)
**Diseño maestro:** [`../docs/DISENO_MAESTRO.md`](../docs/DISENO_MAESTRO.md) · [`../docs/brand.md`](../docs/brand.md)

**Skills:** `elara-designer` · `elara-copywriter` · `elara-ui-master` (en `.claude/skills/`)

Si el código contradice el CONTEXT en **estrategia**, gana el doc (salvo aprobación de Evelyn).
Si lo contradice en un **hecho técnico** (ruta, dep), gana el código y se anota en `ESTADO_PROYECTO.md`.

## Repo layout

```
soyelaranova-com/
├── CONTEXT_CURSOR.md       ← brief lockeado (estrategia: stack, voces, fases)
├── docs/ESTADO_PROYECTO.md ← estado técnico real (rutas y deps verificadas)
├── .cursor/rules/          ← reglas Cursor always-on
└── web/                    ← Next.js 16 app (único deploy)
```

## Estado actual (20 julio 2026 · verificado en el código)

| Área | Hecho | Falta (v1) |
|------|-------|------------|
| Portal Elara | Home (frase ancla + sección oráculo + CTA carta), `/universo`, `/sobre-elara`, `/cursos` | Carta interactiva, captura email + **fecha de nacimiento** |
| Estudio B2B "La Aranoa" | `/servicios`, `/descubrimiento` (+ `api/discovery`), `/trabaja-conmigo` | — |
| Stack visual | framer-motion, lenis, cursor/partículas 2D custom | (three/R3F **no** se usa) |
| Monetización | `/universo` moodboard, `/cursos` | Checkout Hotmart real |
| Captura | `api/oracle/subscribe` (email) | Campo fecha nacimiento + Resend |

**Rutas reales (12):** `/` · `/oraculo` · `/universo` · `/sobre-elara` · `/cursos` · `/servicios` · `/descubrimiento` · `/trabaja-conmigo` · `/gracias` · `/legal` · `/linktree` · `/preview`
**API (2):** `POST /api/oracle/subscribe` · `POST /api/discovery`

> Nota: el CONTEXT aún dice `/work` (ruta B2B única). El código lo implementó como el estudio
> "La Aranoa" (`/servicios` + `/descubrimiento` + `/trabaja-conmigo`). Divergencia pendiente de reflejar en el brief.

**Build:** `cd web && npm run verify:assets && npm run build` ✅
**Deploy:** Vercel Root Directory = `web` · config en `web/vercel.json` · ver `docs/DEPLOY.md`

## Componentes clave (verificados en `web/components/`)

- `site-nav.tsx` — navegación
- `magic-cursor.tsx` · `magic-particles.tsx` — estela y partículas del hero (2D, no R3F)
- `lenis-provider.tsx` — smooth scroll
- `immersive-story.tsx` · `creation-timeline.tsx` — bloques narrativos del home
- `discovery-form.tsx` — formulario B2B de `/descubrimiento`
- `elara-*` — sistema de UI custom (button, logo, icons, divider, framed-image, secciones bio/clients/cursos/process/productos/tools…)

## Próximo paso sugerido (KPI del sitio)

**Cerrar la captura del oráculo:** carta interactiva + campo **fecha de nacimiento** + integrar **Resend**.
Ver checklist en `docs/ESTADO_PROYECTO.md` § "Qué hacer ahora".

## Referencias (más contexto)

- `../05_DOCS_ESTRATEGIA/ELARA_WEB_FAIRY_WORLD_BRIEF.md`
- `../02_CONTENIDO_MAESTRO/LANDING_SOYELARANOVA_COM.md`

## Next.js 16

Proyecto en Next 16 (el brief dice 15). Mantener App Router + RSC.
