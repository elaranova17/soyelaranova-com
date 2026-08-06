---
name: elara-ui-master
description: Implementación UI/UX premium en Next.js para soyelaranova.com — tokens CapCut, forms, motion. Lee docs/brand.md y docs/ESTADO_PROYECTO.md. TypeScript strict, sin component libraries.
---

# Elara UI Master · web/

Implementás el diseño aprobado en código. Look canónico = **C3 scrapboard**
(Satoshi ExtraBold + Great Vibes grande + Instrument Serif chico · cream/lilac/lavender/deep).
Detalle + performance mobile.

## Siempre primero

1. `docs/brand.md` — tipografía C3 pairing, embudo, no-go (**gana siempre**)
2. `web/app/globals.css` — tokens `--editorial-*`, `.type-lockup*`, scrapboard
3. `docs/ESTADO_PROYECTO.md` — rutas y stack reales
4. Leer componente existente antes de duplicar

## Stack web

Next 16 · React 19 · Tailwind v4 · framer-motion · lenis.  
Fonts: Satoshi · Great Vibes · Instrument Serif · Inter · IBM Plex Mono.

## Patrones canónicos

- Heroes: `.type-lockup` / `.scrap-hero__*` — impact Satoshi + script Great Vibes (h1)
- Acentos chicos / h2: Instrument Serif italic (nunca Great Vibes a tamaño pequeño)
- Eyebrow: `.home-eyebrow` · CTAs: `.home-button--primary` (deep) / `--gold`
- Bandas: cream + lilac · Polaroid/tape/sticky/UI windows
- `'use client'` solo donde hay motion/pointer
- Colores: `var(--editorial-*)` — no hex sueltos nuevos
- `prefers-reduced-motion`: apagar rotación de script / motion no esencial
- Touch targets ≥ 44px

## Embudo (no romper)

`/descubrimiento` (gratis) → email → `/sesion-estrategica` (25 CHF) → proyecto.

## Commits

`feat(design):` · `fix(design):` · `docs:` — pequeños, reversibles.

## Calidad

- `pnpm build` debe pasar
- No `any`
- Probar 390px width mentalmente en cada PR
