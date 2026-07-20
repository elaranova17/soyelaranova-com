# soyelaranova.com · Agent instructions

**Estrategia vigente (rediseño comercial):** [`../docs/PLAN_MAESTRO_REDISENO_ELARA.md`](../docs/PLAN_MAESTRO_REDISENO_ELARA.md)
**Estado vivo (verificado):** [`../docs/ESTADO_PROYECTO.md`](../docs/ESTADO_PROYECTO.md)
**Brief original (parcialmente superado):** [`../CONTEXT_CURSOR.md`](../CONTEXT_CURSOR.md)
**Diseño:** [`../docs/DISENO_MAESTRO.md`](../docs/DISENO_MAESTRO.md) · [`../docs/brand.md`](../docs/brand.md)

**Skills:** `elara-designer` · `elara-copywriter` · `elara-ui-master` (en `.claude/skills/`)

**Reestructuración comercial (jul 2026):** el sitio es una **casa editorial-profesional que vende 3 líneas**
(Productos Elara · Experiencia/Oráculo · Servicios Evelyn). Principio: *"Elara enamora. Evelyn ordena. El
sistema convierte."* Embudo: Mirar → Quedarse → Confiar → Actuar. El oráculo es **una** sección, no el KPI único.

Prioridad de docs: **rediseño > estado real > brief original**. En hechos técnicos (ruta, dep) gana el código.

## Repo layout

```
soyelaranova-com/
├── CONTEXT_CURSOR.md       ← brief lockeado (estrategia: stack, voces, fases)
├── docs/ESTADO_PROYECTO.md ← estado técnico real (rutas y deps verificadas)
├── .cursor/rules/          ← reglas Cursor always-on
└── web/                    ← Next.js 16 app (único deploy)
```

## Estado actual (20 julio 2026 · verificado en el código)

| Línea | Rutas | Estado |
|-------|-------|--------|
| Productos Elara | `/universo`, `/cursos` | ⚠️ falta covers, precio/CTA, checkout Hotmart |
| Experiencia (oráculo) | `/oraculo`, sección `#oraculo` del home | ⚠️ carta interactiva + captura email/fecha pendiente |
| Servicios Evelyn | `/trabaja-conmigo`, `/servicios` (+ `[slug]`), `/descubrimiento` (+ `api/discovery`) | ⚠️ falta autoridad, proceso, mini-casos |
| Home comercial | `/` landing fusionada (hero + embudo + productos + oráculo + contacto) | ✅ en vivo; ⚠️ hero placeholder |

**Rutas reales:** 12 públicas — `/` · `/universo` · `/cursos` · `/oraculo` · `/sobre-elara` · `/trabaja-conmigo` · `/servicios` (`/servicios/[slug]`) · `/descubrimiento` · `/gracias` · `/legal` · `/linktree` — + 5 en `/preview` (staging) + 2 API.
**Stack:** Next 16 · framer-motion + lenis + cursor/partículas 2D. **Sin** three/R3F/gsap/tone/resend.
**Paleta:** en transición a **editorial ciruela/cacao** (`--editorial-*`); la "sagrada" (`--color-purple/gold`) se retira.

**Build:** `cd web && npm run verify:assets && npm run build` ✅
**Deploy:** Vercel Root Directory = `web` · config en `web/vercel.json` · ver `docs/DEPLOY.md`

## Componentes clave (verificados en `web/components/`)

- `site-nav.tsx` — navegación
- `magic-cursor.tsx` · `magic-particles.tsx` — estela y partículas del hero (2D, no R3F)
- `lenis-provider.tsx` — smooth scroll
- `immersive-story.tsx` · `creation-timeline.tsx` — bloques narrativos del home
- `discovery-form.tsx` — formulario B2B de `/descubrimiento`
- `elara-*` — sistema de UI custom (button, logo, icons, divider, framed-image, secciones bio/clients/cursos/process/productos/tools…)

## Próximo paso sugerido (sprint del rediseño)

**Hero + primera pantalla + embudo:** más tensión visual, mejor imagen Elara, CTA claro, embudo más visual.
Es lo que más afecta la percepción. Luego → productos/covers → trabaja-conmigo → oráculo funcional → QA.
Ver `docs/PLAN_MAESTRO_REDISENO_ELARA.md` § "Fases de trabajo" y `docs/ESTADO_PROYECTO.md` § "Qué hacer ahora".

## Referencias (más contexto)

- `../05_DOCS_ESTRATEGIA/ELARA_WEB_FAIRY_WORLD_BRIEF.md`
- `../02_CONTENIDO_MAESTRO/LANDING_SOYELARANOVA_COM.md`

## Next.js 16

Proyecto en Next 16 (el brief dice 15). Mantener App Router + RSC.
