# Estado del proyecto · soyelaranova.com

**Actualizado:** 26 mayo 2026  
**Fuente de verdad estratégica:** [`../CONTEXT_CURSOR.md`](../CONTEXT_CURSOR.md)  
**Repo:** `github.com/elaranova17/soyelaranova-com` · rama `main`  
**Deploy:** [`DEPLOY.md`](DEPLOY.md) · mapa repo: [`REPO_STRUCTURE.md`](REPO_STRUCTURE.md)

---

## Resumen en una línea

Portal visual **muy avanzado** (Midjourney full-bleed + inmersión en 6 secciones), pero **sin el corazón del producto v1**: carta del oráculo interactiva, captura email + fecha de nacimiento, ni rutas `/work` / `/sobre-elara` del brief.

---

## Stack instalado vs. lockeado

| Dependencia (CONTEXT) | Estado |
|----------------------|--------|
| Next.js 15+ App Router | ✅ Next **16.2.6** |
| React 19 | ✅ |
| TypeScript strict | ✅ |
| Tailwind v4 + tokens | ✅ `web/app/globals.css` |
| Fonts Playfair / Cormorant / Lato | ✅ |
| framer-motion | ✅ |
| gsap | ✅ en `package.json` (uso limitado en código) |
| three + R3F + drei + postprocessing | ❌ no instalado |
| lenis | ❌ |
| tone.js | ❌ |
| Resend / ElevenLabs / Sanity | ❌ no integrado |
| Hotmart | ❌ solo copy; links pendientes |

**Build:** `npm run build` en `web/` pasa (16 rutas estáticas, mayo 2026).

---

## Estructura del monorepo (26 mayo 2026)

Ver detalle completo en [`REPO_STRUCTURE.md`](REPO_STRUCTURE.md).

| Carpeta | Rol |
|---------|-----|
| `web/` | App Next.js — **único deploy Vercel** |
| `docs/` | Marca, estado, deploy |
| `01_LANZAMIENTO/` … `06_ARCHIVO/` | Ops, contenido, visual, reels, estrategia, archivo |
| `assets/b2b/` | PDFs portfolio Evelyn |
| `CONTEXT_CURSOR.md` | Brief lockeado (raíz) |

---

## Rutas actuales (16)

### Landing + secciones home

`/` → landing completa (hero, herramientas, círculo, cursos, email)

### Rutas v1 CONTEXT

`/oraculo` · `/universo` · `/sobre-elara`

### API

`POST /api/oracle/subscribe` — captura email (Resend si configurado)

### Stubs / fuera de scope v1 (existen, no invertir)

`/login` · `/signup` · `/cuenta` · `/amazon` · `/atelier` · `/comunidad` · `/herramientas` · `/recursos`

### Faltan según CONTEXT v1

`/work` (B2B Evelyn, solo footer)

---

## Assets en `web/public/`

- **Hero:** `hero-bg.jpg`, fondos por sección (portal-lunar, codice, circulo, atelier, manifiesto, archivo-astral…)
- **Marca:** `brand/firma-elara.png`, avatar `elara/avatar/elara.jpg`
- **B2B estático:** `portfolio.html`, `cv.html`, `propuesta-template.html`
- **Lead magnet:** `lead-magnet/7-cartas.pdf`

---

## Fases CONTEXT vs. realidad

| Fase | Plan CONTEXT | Realidad mayo 2026 |
|------|--------------|---------------------|
| **1** Setup + tokens | Base mínima | ✅ tokens, fonts, Next; ❌ deps 3D/audio |
| **2** Hero R3F + estela + CTA carta | Escena Three.js | ⚠️ Hero **2D inmersivo** muy pulido; CTA = "Iniciar viaje" → `/portal`, **no** carta |
| **3** Carta 3D + 5 mensajes + Resend | Core producto | ❌ `/oraculo` = coming soon |
| **4** Sound + ElevenLabs | | ❌ |
| **5** Tienda Hotmart + `/work` | | ⚠️ `/universo` existe pero no es tienda 4 ebooks; sin `/work` |

**Conclusión:** el equipo avanzó por el **eje visual/navegación** (universo + 6 escenas). El brief pide priorizar el **eje conversión** (carta + email + fecha nacimiento).

---

## Brechas críticas vs. objetivo home (CONTEXT §7)

1. No hay CTA **"Saca tu carta del día"** en `/`
2. No está la frase ancla: *"Mira todo lo que siempre fuiste capaz de ser."*
3. `/oraculo` sin funcionalidad
4. Sin formulario email + **fecha de nacimiento** → Resend
5. Nav expone `/login` (fuera de scope v1)

---

## Commits recientes (referencia)

```
392b56b feat(immersion): layout home replicado en las 6 secciones + cleanup
5d05a74 feat(immersion): 6 paginas internas escenas Midjourney full-bleed
58205d6 feat(universo): fondos Midjourney + portal-lago
c7f2e4c feat(universo): 10 fondos + tarjetas 3D mouse-tilt
```

---

## Sistema diseño (16 mayo 2026)

- `docs/brand.md` — marca web (Pixar+Encanto, no Amazon)
- `docs/DISENO_MAESTRO.md` — sprints A–D + checklist
- `.claude/skills/` — designer, copywriter, ui-master
- Canvas: `canvases/diseno-roadmap.canvas.tsx` en Cursor

**Diagnóstico:** Sprint A home implementado (16 mayo). Siguiente: Sprint B (tokens/componentes) o Sprint C (rutas v1).

---

## Qué hacer ahora (orden recomendado)

### Opción A — Seguir CONTEXT al pie (recomendado para negocio)

1. **Completar Fase 1 técnica** (1 sesión): instalar `three`, `@react-three/fiber`, `@react-three/drei`, `lenis` — pedir luz verde si el bundle pesa en mobile.
2. **Fase 3 primero en home** (sin esperar R3F completo): carta 2D/GSAP en `/` con 5 mensajes hardcoded + modal + form Resend (email + fecha nacimiento). Es el KPI del sitio.
3. **Alinear copy home** con CONTEXT: frase ancla + CTA carta.
4. **Fase 5 mínima**: `/work` desde footer (puede enlazar `portfolio.html` al inicio) + `/universo` con 4 ebooks → Hotmart.
5. **Refactor rutas** (después): `/manifiesto` → `/sobre-elara`; reducir rutas legacy cuando v1 convierta.

### Opción B — Solo pulir lo visual (no recomendado ahora)

Más fondos / más páginas inmersivas sin oráculo = sitio hermoso que no captura ni vende.

---

## Regla para agentes

- Antes de codear: leer `CONTEXT_CURSOR.md` + este archivo.
- Si código y CONTEXT chocan: **gana CONTEXT** salvo que Evelyn apruebe cambio explícito al brief.
- **Una fase / un objetivo por sesión.** Parar y confirmar con Evelyn entre fases.
- No mezclar voz Elara y Evelyn en la misma página.
- Nunca la palabra **"tarot"** — solo **oráculo**.

---

## Otros repos (no confundir)

| Ruta | Qué es |
|------|--------|
| `Documents/elara-nova/` | Monorepo ops (ebook Ciclo Nova, brand Amazon, skills) — **no** es el sitio activo |
| `Elara nova -- Fullest/02_CONTENIDO...` | Copy, reels, lead magnet PDF fuente |
| `Elara nova -- Fullest/05_DOCS_ESTRATEGIA/` | Briefs estratégicos |

**Sitio activo = este repo (`soyelaranova-com/web`).**
