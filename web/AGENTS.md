# soyelaranova.com · Agent instructions

**Fuente de verdad:** [`../CONTEXT_CURSOR.md`](../CONTEXT_CURSOR.md)  
**Estado vivo:** [`../docs/ESTADO_PROYECTO.md`](../docs/ESTADO_PROYECTO.md)  
**Diseño maestro:** [`../docs/DISENO_MAESTRO.md`](../docs/DISENO_MAESTRO.md) · [`../docs/brand.md`](../docs/brand.md)

**Skills:** `elara-designer` · `elara-copywriter` · `elara-ui-master` (en `.claude/skills/`)

Si el código contradice `CONTEXT_CURSOR.md`, gana el doc (salvo aprobación explícita de Evelyn).

## Repo layout

```
soyelaranova-com/
├── CONTEXT_CURSOR.md       ← brief lockeado (stack, rutas v1, fases)
├── docs/ESTADO_PROYECTO.md ← snapshot técnico actual
├── .cursor/rules/          ← reglas Cursor always-on
└── web/                    ← Next.js 16 app
```

## Estado actual (16 mayo 2026)

| Área | Hecho | Falta (v1) |
|------|-------|------------|
| Visual / inmersión | Home `HeroPortal` + 6× `ImmersiveScene` + `/universo` moodboard | — |
| Stack 3D/audio | framer-motion, gsap en deps | three, R3F, lenis, tone, Resend |
| Producto | — | Carta oráculo en `/`, 5 mensajes, email + fecha nacimiento |
| Rutas CONTEXT | `/`, `/universo`, `/oraculo` (stub), `/manifiesto` | `/sobre-elara`, `/work` |
| Monetización | PDF lead magnet en `public/` | Hotmart en tienda, checkout links |
| B2B | `public/portfolio.html`, `cv.html` | `/work` en App Router |

**Build:** `cd web && pnpm build` ✅

## Componentes clave

- `components/hero-portal.tsx` — home
- `components/immersive-scene.tsx` — plantilla secciones 01–06
- `components/coming-soon-section.tsx` — stubs (oráculo, login, etc.)
- `components/section-card-3d.tsx` — tarjetas `/universo`

## Próximo paso sugerido (CONTEXT)

**Fase 3 en home:** carta del día + captura Resend — antes de más páginas visuales.

Ver checklist detallada en `docs/ESTADO_PROYECTO.md` § "Qué hacer ahora".

## Referencias (carpeta Fullest)

- `05_DOCS_ESTRATEGIA/ELARA_WEB_FAIRY_WORLD_BRIEF.md`
- `02_CONTENIDO_MAESTRO/LANDING_SOYELARANOVA_COM.md`

## Next.js 16

Proyecto en Next 16 (brief dice 15). Mantener App Router + RSC.
