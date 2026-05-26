# 🎯 FASE 1 · HERO PORTAL — Prompts para Claude Code
### v1 · 7 mayo 2026

> Cada prompt es UNA sub-fase. Pegás uno, Claude Code lo ejecuta, volvés
> acá conmigo a revisar antes del siguiente. NO pegues todos de una vez.
> El portal se construye en capas, no de un golpe.

---

## 🗺️ RUTA FASE 1 (4 sub-fases · ~5h total)

| # | Sub-fase | Tiempo | Estado |
|---|---|---|---|
| 1.1 | Scene base + Canvas mount + Lenis | 1h | 🟡 Próximo |
| 1.2 | Starfield (estrellas con seed) | 1h | ⏸️ |
| 1.3 | Luna respirando con shader | 1.5h | ⏸️ |
| 1.4 | Cursor con estela dorada (Points) | 1.5h | ⏸️ |

Después de FASE 1 completa: postprocessing (Bloom + Vignette) +
prefers-reduced-motion fallback (ya parte de FASE 1.4 final).

---

## 📜 LEY ESTÉTICA

Cada sub-fase debe leer y respetar:
**`05_DOCS_ESTRATEGIA/HERO_PORTAL_ALGORITHMIC_PHILOSOPHY.md`**

Si tienes dudas sobre frecuencias, paleta, easings o cualquier número
mágico — la respuesta está en ese doc.

---

## 🚀 PROMPT FASE 1.1 — Scene base + Canvas + Lenis

**Cuándo correr:** ahora. **Tiempo estimado:** 45–60 min.

**Antes de empezar:**
- Ya hiciste FASE 0 (Next.js 15 + Tailwind v4 + Supabase + Resend setup
  en `/web/`)
- Vení desde `~/Documents/Claude/Projects/"Elara nova -- Fullest"/soyelaranova-com/web/`
- Variables `.env.local` rellenadas con tus claves

**Pegá esto en Claude Code:**

```
Estoy en ~/Documents/Claude/Projects/"Elara nova -- Fullest"/soyelaranova-com/web/

PRIMERO leé estos dos docs antes de tocar código:
1. ../05_DOCS_ESTRATEGIA/ELARA_WEB_FAIRY_WORLD_BRIEF.md (visión + stack)
2. ../05_DOCS_ESTRATEGIA/HERO_PORTAL_ALGORITHMIC_PHILOSOPHY.md (ley estética)

OBJETIVO FASE 1.1
==================
Montar la base del Hero Portal sin partículas/luna todavía. Solo:
- Canvas R3F a pantalla completa
- Lenis smooth scroll
- Estructura de componentes que las próximas sub-fases extenderán
- Validar que renderiza un mesh básico de prueba (cubo morado giratorio
  pequeño) para confirmar que R3F está vivo

ARCHIVOS A CREAR / MODIFICAR
=============================

1. src/lib/lenis-provider.tsx
   - Client component que envuelve children
   - Inicializa Lenis con: lerp 0.1, smoothWheel true, syncTouch false
   - useFrame de R3F debe estar coordinado: Lenis.raf en rAF nativo NO
     en useFrame para no bloquear el canvas

2. src/components/portal/scene.tsx
   - Client component "use client"
   - Canvas R3F full-screen (fixed, w-full h-screen)
   - camera position [0, 0, 5], fov 50
   - antialias true, dpr [1, 2]
   - Background color desde CSS var --color-purple-night
   - Suspense fallback null
   - Renderiza por ahora un <TestCube /> centrado

3. src/components/portal/test-cube.tsx
   - Mesh box 1x1x1, color desde CSS var --color-lavender (vía
     useMemo + getComputedStyle del root para leer la variable)
   - useFrame: rotation.y += 0.005 por frame
   - Esto se BORRA en FASE 1.2 — solo es smoke test

4. src/components/portal/portal-frame.tsx
   - Client component que combina <Scene /> con un overlay HTML
     positioned encima (zIndex 10) para títulos y CTAs futuros
   - Por ahora el overlay solo muestra centrado:
     - "soyelaranova.com" en font-display, 16pt, color cream, opacity 0.5
   - Esto será reemplazado en sub-fases siguientes

5. src/app/page.tsx
   - Server component (default) que importa <PortalFrame /> dinámico
     con ssr: false (R3F no SSR-friendly)
   - Wrap con <LenisProvider>

REGLAS NO NEGOCIABLES
======================
- Cero hex hardcoded. Toda paleta vía CSS vars (lee de globals.css con
  --color-*).
- TypeScript strict — todos los props tipados.
- Cada componente con un comentario JSDoc breve arriba (qué hace,
  qué props acepta).
- "use client" SOLO donde es estrictamente necesario (los componentes
  R3F y Lenis sí lo necesitan; el page.tsx no).
- Performance budget: el bundle de page.tsx no debe agregar más de
  ~50 KB gzipped sobre lo que ya hay (R3F + drei son ~80 KB pero
  van como dynamic import).

VALIDACIÓN AL FINAL
====================
Antes de hacer commit, ejecuta y reportá:
1. npm run build → debe pasar sin errores ni warnings de TS
2. npm run dev → http://localhost:3000 muestra el cubo morado
   girando sobre fondo purple-night, con el texto "soyelaranova.com"
   centrado y sutil
3. Lighthouse mobile (Chrome DevTools) → reporta el score Performance
4. Bundle size del page.tsx (npx @next/bundle-analyzer o lectura
   directa de .next/analyze)

COMMIT
=======
git add src/
git commit -m "feat(portal): FASE 1.1 — Scene base R3F + Lenis smooth scroll + test cube"
git push origin main

REPORTÁ
========
- ✅ Lista de archivos creados
- ✅ Build pasa
- ✅ Dev mode visible en :3000
- 📊 Bundle size después
- 📊 Lighthouse score
- ❓ Cualquier decisión que tomaste que no estaba en el prompt
- ⏭️ Listo para que Evelyn revise antes de FASE 1.2 (Starfield)

NO TOQUES
==========
- /docs/ (sitio actual con Portfolio + CV + Hub)
- .env.local
- Estructura de Tailwind v4 (los design tokens ya están)
- Headers de seguridad de next.config.ts
```

---

## 🟡 CHECKLIST PARA EVELYN ANTES DE PEGAR

- [ ] `.env.local` ya tiene las 6 claves rellenadas
- [ ] Estoy en la carpeta `web/` (no en `docs/`)
- [ ] `npm run dev` funcionó al menos una vez después de FASE 0
- [ ] Tengo Cowork abierto en otra ventana para revisar después con Claude

---

## 🔜 PROMPT FASE 1.2 — Starfield (lo verás después)

Una vez Claude Code reporte FASE 1.1 done y vos lo veas en `:3000`,
volvés a Cowork y te paso el prompt 1.2: reemplazar el cubo de prueba
por un campo de 600 estrellas con seeded randomness, parpadeo
log-uniformemente distribuido entre 0.2–1.5 Hz, tamaños variables, y
deriva sutil con noise field.

(Cuando lo veas, vamos a ir cerrando la luna respirando y la estela
dorada del cursor en sub-fases 1.3 y 1.4 con la misma metodología:
prompt → ejecutar → revisar conmigo → siguiente.)

---

*Última edición: 7 may 2026.*
*Lockeado contra HERO_PORTAL_ALGORITHMIC_PHILOSOPHY.md.*
