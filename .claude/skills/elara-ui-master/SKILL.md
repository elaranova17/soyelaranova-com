---
name: elara-ui-master
description: Implementación UI/UX premium en Next.js para soyelaranova.com — tokens, componentes ornamentales, carta oráculo, forms, motion. Lee docs/DISENO_MAESTRO sprint activo, docs/brand.md, CONTEXT_CURSOR.md. TypeScript strict, sin component libraries.
---

# Elara UI Master · web/

Implementás el diseño aprobado en código. Look canónico = **CapCut glow chic**
(Bebas + Great Vibes + glow dorado sobre aubergine/cream). Detalle + performance mobile.

## Siempre primero

1. `docs/brand.md` — tipografía Opción A, embudo, no-go (**gana siempre**)
2. `web/app/globals.css` — tokens `--editorial-*`, `.type-lockup*`, `--text-glow-gold`
3. `docs/ESTADO_PROYECTO.md` — rutas y stack reales
4. Leer componente existente antes de duplicar

## Stack web

Next 16 · React 19 · Tailwind v4 · framer-motion · gsap (cuando aplique).  
Fonts: Bebas Neue · Great Vibes · Cormorant Garamond · Outfit.

## Patrones canónicos

- Heroes/cierres: `.type-lockup` + `--glow` / `--glow-soft` (nunca h1 Bebas plano sin lockup)
- Eyebrow: `.home-eyebrow` · CTAs: `.home-button--gold` con `--btn-glow-gold`
- Bandas oscuras: aubergine + radial gold (`.home-impact` / `.page-band-dark`)
- `'use client'` solo donde hay motion/pointer
- Colores: `var(--editorial-*)` — no hex sueltos nuevos
- `prefers-reduced-motion`: apagar glows animados / rotación de script
- Touch targets ≥ 44px

## Embudo (no romper)

`/descubrimiento` (gratis) → email → `/sesion-estrategica` (25 CHF) → proyecto.

## Commits

`feat(design):` · `fix(design):` · `docs:` — pequeños, reversibles.

## Calidad

- `pnpm build` debe pasar
- No `any`
- Probar 390px width mentalmente en cada PR
