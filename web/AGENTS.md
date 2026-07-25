# soyelaranova.com · Agent instructions

**Fuente de verdad de marca:** [`../docs/brand.md`](../docs/brand.md) (marca estudio 2026)
**Estado vivo:** [`../docs/ESTADO_PROYECTO.md`](../docs/ESTADO_PROYECTO.md)

> `CONTEXT_CURSOR.md` (mayo 2026, "portal sagrado") quedó superado en producto y look por
> `docs/brand.md`. Si chocan, **gana `docs/brand.md`**.

## Qué es el sitio (2026)

Estudio **Evelyn Patiño / Elara Nova**: automatizaciones, webs/landings que venden y
Google Ads con medición. La home editorial (`app/page.tsx` + tokens `--editorial-*` en
`app/globals.css`) es **el look canónico de todo el sitio**: cream/aubergine/gold,
Fraunces + Manrope + Cormorant, navbar `.site-nav` aubergine única.

## Reglas duras

- **No estilos nuevos por página**: reutilizar `.home-eyebrow`, `.home-button--*`,
  tokens `--editorial-*`, bandas aubergine.
- **Una sola navbar** (`components/site-nav.tsx` + `lib/navigation.ts`).
- **Voz Evelyn** (directa, ingeniera) en home/servicios/descubrimiento/B2B.
  **Voz Elara** (mística) solo en `/oraculo`, `/universo`, `/cursos`, `/sobre-elara`.
  Nunca mezclarlas. Nunca "tarot" — siempre "oráculo".
- **Prohibido**: muñequitos/avatar Elara como UI del estudio, heroes Midjourney fantasy,
  purple-night ritual como chrome principal, menús distintos por página, CSS/JS suelto
  en `public/` que estile el app.
- TS estricto, sin `any`. Sin shadcn/MUI/Chakra. Mobile-first.
- `/lp/*` son landings de campaña autónomas — no tocar su estilo desde fuera.

## Repo layout

```
soyelaranova-com/
├── docs/brand.md           ← marca estudio 2026 (fuente de verdad)
├── docs/ESTADO_PROYECTO.md ← snapshot técnico actual
├── CONTEXT_CURSOR.md       ← brief histórico (superado en look/producto)
├── .cursor/rules/          ← reglas Cursor always-on
└── web/                    ← Next.js 16 app (único deploy Vercel)
```

## Build y deploy

**Build:** `cd web && npm run build` (corre `verify:assets` en prebuild) — debe pasar siempre.
**Deploy:** Vercel Root Directory = `web` · ver `docs/DEPLOY.md`.

## Componentes clave

- `components/site-nav.tsx` — navbar única (+ `lib/navigation.ts`)
- `components/immersive-story.tsx` + `service-scenes.tsx` — scroll home
- `components/discovery-form.tsx` — formulario de diagnóstico (lead)
- `components/tracked-link.tsx` — CTAs con tracking
- `lib/studio-services.ts` — datos de servicios
