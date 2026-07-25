# soyelaranova.com · Agent instructions

**Fuente de verdad de marca:** [`../docs/brand.md`](../docs/brand.md) (CapCut glow chic · julio 2026)
**Estado vivo:** [`../docs/ESTADO_PROYECTO.md`](../docs/ESTADO_PROYECTO.md)
**Oferta / embudo:** [`../docs/OFERTA_SERVICIOS.md`](../docs/OFERTA_SERVICIOS.md) · [`../docs/PLAN_CIERRE_EMBUDO.md`](../docs/PLAN_CIERRE_EMBUDO.md)

> `CONTEXT_CURSOR.md` (mayo 2026, "portal sagrado") quedó superado en producto y look.
> Si chocan, **gana `docs/brand.md`**.

## Qué es el sitio (2026)

Estudio **Evelyn Patiño / Elara Nova**: automatizaciones, webs/landings que venden y
Google Ads con medición. Look canónico = **CapCut glow chic** (`app/page.tsx` + tokens
`--editorial-*` en `app/globals.css`): cream/aubergine/gold, **Bebas Neue + Great Vibes +
Cormorant + Outfit**, lockups `.type-lockup`, navbar `.site-nav` aubergine única.

**Embudo:** pre-análisis gratis (`/descubrimiento`) → lectura email → sesión 25 CHF
(`/sesion-estrategica`) → proyecto (Arranque / Pro / A medida).

## Reglas duras

- **No estilos nuevos por página**: reutilizar `.type-lockup*`, `.home-eyebrow`,
  `.home-button--*`, tokens `--editorial-*`, bandas aubergine / `.page-band-dark`.
- **Una sola navbar** (`components/site-nav.tsx` + `lib/navigation.ts`).
- **Voz Evelyn** (directa, ingeniera) en home/servicios/descubrimiento/sesión/LPs/B2B.
  **Voz Elara** (mística) solo en `/oraculo`, `/universo`, `/cursos`, `/sobre-elara`.
  Nunca mezclarlas. Nunca "tarot" — siempre "oráculo".
- **Prohibido**: muñequitos/avatar Elara como UI del estudio, heroes Midjourney fantasy,
  purple-night ritual como chrome principal, hex prohibidos `#7B4FB5` / `#C49AD4`
  (usar tokens `--color-purple-amethyst` / `--color-pale-lav`), menús distintos por página,
  CSS/JS suelto en `public/` que estile el app.
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

## Stack real (verificado)

- Next 16 · React 19 · TS strict · Tailwind v4
- framer-motion · lenis
- **No instalados:** gsap, three/R3F, tone, Sanity, paquete `resend` (APIs usan fetch a Resend)
- Analytics: GA4 opcional (`NEXT_PUBLIC_GA_MEASUREMENT_ID`) + `@vercel/analytics`

## Build y deploy

**Build:** `cd web && npm run build` (corre `verify:assets` en prebuild) — debe pasar siempre.
**Deploy:** Vercel Root Directory = `web` · ver `docs/DEPLOY.md`.

## Componentes clave (reales)

- `components/site-nav.tsx` — navbar única (+ `lib/navigation.ts`)
- `components/immersive-story.tsx` + `service-scenes.tsx` — scroll home
- `components/discovery-form.tsx` — wizard pre-análisis
- `components/lp-offer-page.tsx` · `lp-book-page.tsx` — LPs
- `components/tracked-link.tsx` · `analytics.tsx` · `conversion-beacon.tsx`
- `lib/studio-services.ts` · `lib/lp-offers.ts` · `lib/book-offers.ts` · `lib/session-booking.ts`

## Skills

`.claude/skills/elara-designer` · `elara-copywriter` · `elara-ui-master` · growth/marketing/FBA según tarea.
