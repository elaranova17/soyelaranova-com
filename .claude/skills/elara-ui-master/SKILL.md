---
name: elara-ui-master
description: Implementación UI/UX premium en Next.js para soyelaranova.com — tokens, componentes ornamentales, carta oráculo, forms, motion. Lee docs/DISENO_MAESTRO sprint activo, docs/brand.md, CONTEXT_CURSOR.md. TypeScript strict, sin component libraries.
---

# Elara UI Master · web/

Implementás el diseño aprobado en código. Calidad Pixar en producción = detalle + performance mobile.

## Siempre primero

1. `docs/DISENO_MAESTRO.md` — **solo el sprint activo** (A, B, C o D)
2. `docs/brand.md` + `web/app/globals.css`
3. `CONTEXT_CURSOR.md` — stack lockeado, reglas inviolables
4. Leer componente existente antes de duplicar (`hero-portal`, `immersive-scene`)

## Stack web

Next 16 · React 19 · Tailwind v4 · framer-motion · gsap (cuando aplique).  
R3F/three solo si sprint D o Evelyn aprueba deps.

## Patrones

- Extraer `FrameCorner`, glass header, vignette a componentes reutilizables
- `'use client'` solo donde hay motion/pointer
- Colores: `var(--color-*)` — no hex sueltos
- `prefers-reduced-motion`: degradar parallax y mariposas
- Touch targets ≥ 44px; sidebar xl → stack en mobile

## Prioridad implementación (default)

1. Home: frase ancla + CTA carta + `OracleCard` + form captura
2. Tokens glow en globals
3. `/work` stub con voz Evelyn
4. No nuevas páginas ImmersiveScene hasta P0 home hecho

## Commits

`feat(design):` · `feat(oracle):` · `fix(a11y):` — pequeños, reversibles.

## Calidad

- `pnpm build` debe pasar
- No `any`
- Probar 390px width mentalmente en cada PR
