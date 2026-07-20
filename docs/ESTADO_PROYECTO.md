# Estado del proyecto · soyelaranova.com

**Actualizado:** 20 julio 2026 (refleja el código a fecha del último commit, 24 junio 2026)
**Fuente de verdad estratégica:** [`../CONTEXT_CURSOR.md`](../CONTEXT_CURSOR.md)
**Repo:** `github.com/elaranova17/soyelaranova-com` · rama `main`
**Deploy:** [`DEPLOY.md`](DEPLOY.md) · mapa repo: [`REPO_STRUCTURE.md`](REPO_STRUCTURE.md)

> Este archivo es el **estado vivo verificado contra el código**. Si algo aquí choca con
> lo que ves en `web/`, gana el código y hay que actualizar este archivo. La estrategia
> (visión, voces, reglas) vive en `CONTEXT_CURSOR.md`.

---

## Resumen en una línea

Sitio con **dos capas ya construidas**: portal Elara (home con frase ancla + sección oráculo + tienda/cursos)
y **estudio B2B "La Aranoa"** (servicios + formulario de descubrimiento). El corazón v1 del portal
—carta del oráculo interactiva y captura email + **fecha de nacimiento**— sigue siendo la brecha principal.

---

## Stack instalado vs. lockeado (verificado en `web/package.json`)

| Dependencia (CONTEXT) | Estado real |
|----------------------|-------------|
| Next.js 15+ App Router | ✅ Next **16.2.6** (el brief dice 15; divergencia aceptada) |
| React 19 | ✅ 19.2.4 |
| TypeScript strict | ✅ (`^5`) |
| Tailwind v4 + tokens | ✅ `web/app/globals.css` |
| Fonts Playfair / Cormorant / Lato | ✅ |
| framer-motion | ✅ `^12` |
| lenis (smooth scroll) | ✅ instalado + `components/lenis-provider.tsx` |
| gsap | ❌ **no instalado** (animación va con framer-motion + CSS) |
| three + R3F + drei + postprocessing | ❌ no instalado — el "3D" del hero es **2D custom** (`magic-cursor`, `magic-particles`) |
| tone.js | ❌ |
| Resend | ❌ no instalado (la API de captura existe pero sin envío real) |
| ElevenLabs / Sanity / Hotmart SDK | ❌ no integrados |

**Build:** `cd web && npm run verify:assets && npm run build`. **Deploy:** Vercel, Root Directory `web`,
config en `web/vercel.json`, CI `.github/workflows/web.yml`.

---

## Rutas reales (verificadas en `web/app/`)

**12 páginas + 2 API.**

### Portal Elara (voz Elara)

| Ruta | Estado |
|------|--------|
| `/` | Home completa: hero, frase ancla ✅, sección oráculo con CTA "Sacar mi carta", cursos, tienda, email |
| `/oraculo` | Página existe (falta verificar si la carta ya es interactiva o sigue siendo landing) |
| `/universo` | Tienda / moodboard de productos digitales |
| `/sobre-elara` | Manifiesto + identidad |
| `/cursos` | Cursos |

### Estudio B2B "La Aranoa" (voz Evelyn)

| Ruta | Estado |
|------|--------|
| `/servicios` | Servicios del estudio (`lib/studio-services`) |
| `/descubrimiento` | Formulario de descubrimiento → `POST /api/discovery` |
| `/trabaja-conmigo` | Cierre B2B (esto **reemplaza** el `/work` que planeaba el CONTEXT) |

### Utilitarias

`/gracias` · `/legal` · `/linktree` (Evelyn) · `/preview` (borrador de rediseño)

### API

| Endpoint | Qué hace |
|----------|----------|
| `POST /api/oracle/subscribe` | Captura email del portal (Resend cuando haya env) |
| `POST /api/discovery` | Recibe el formulario B2B de `/descubrimiento` |

---

## Divergencias con el CONTEXT (para que Evelyn decida)

El código evolucionó más allá del brief lockeado. Estas diferencias **no están reflejadas en
`CONTEXT_CURSOR.md`** todavía; requieren tu visto bueno antes de tocar el brief:

1. **`/work` → `/trabaja-conmigo`** + estudio "La Aranoa" con `/servicios` y `/descubrimiento`.
   El CONTEXT sigue diciendo `/work` como ruta única B2B desde el footer.
2. **Next 16** en vez de 15 (ya en producción, sin problemas).
3. **Sin stack 3D real** (three/R3F): el brief planeaba hero R3F; se resolvió con 2D custom.
   Cumple el objetivo visual sin el peso de Three.js en mobile.
4. Rutas que el CONTEXT/ESTADO viejo listaba (`/login`, `/amazon`, `/atelier`, `/comunidad`,
   `/cuenta`, `/manifiesto`, `/portal`) **ya no existen** — limpiadas del árbol de rutas.

---

## Brechas críticas vs. objetivo home (CONTEXT §7)

| # | Brecha | Estado |
|---|--------|--------|
| 1 | Frase ancla *"Mira todo lo que siempre fuiste capaz de ser."* | ✅ presente en `/` |
| 2 | CTA para sacar carta | ✅ "Sacar mi carta" en la sección oráculo del home |
| 3 | Carta del oráculo **interactiva** (voltear + mensaje) | ⚠️ pendiente de verificar/construir |
| 4 | Captura email **+ fecha de nacimiento** | ⚠️ falta el campo fecha y el envío real (Resend) |
| 5 | 5 mensajes hardcoded del oráculo | ⚠️ pendiente |

**El KPI del sitio sigue siendo la brecha 3–4:** sacar carta → dejar email + fecha de nacimiento.

---

## Fases CONTEXT vs. realidad

| Fase | Plan CONTEXT | Realidad julio 2026 |
|------|--------------|---------------------|
| **1** Setup + tokens | Base mínima | ✅ tokens, fonts, Next 16, Tailwind v4 |
| **2** Hero + estela + CTA carta | Escena R3F | ✅ Hero 2D custom (magic-cursor/particles) + frase ancla + CTA carta |
| **3** Carta interactiva + 5 mensajes + captura | Core producto | ⚠️ sección existe; falta carta interactiva + fecha nacimiento + Resend |
| **4** Sound + ElevenLabs | | ❌ no iniciado |
| **5** Tienda + B2B + polish | | ✅ B2B (estudio La Aranoa) construido; ⚠️ tienda `/universo` sin checkout Hotmart real |

**Conclusión:** el eje visual y el eje B2B están **muy avanzados**. Lo que falta para cerrar v1 del
portal es el **eje conversión del oráculo** (fase 3): carta interactiva + captura email/fecha → Resend.

---

## Qué hacer ahora (orden recomendado)

1. **Verificar `/oraculo` y la sección oráculo del home**: ¿la carta ya voltea? ¿hay mensajes?
   (una sesión de auditoría antes de construir, para no duplicar).
2. **Cerrar la captura** (KPI): añadir campo **fecha de nacimiento** al form + integrar **Resend**
   (instalar `resend`, env `RESEND_API_KEY`). Es el dato que la plataforma 2028 necesita desde el día uno.
3. **5 mensajes hardcoded** del oráculo + interacción de voltear la carta (framer-motion, sin R3F).
4. **Reflejar en el CONTEXT** las divergencias aprobadas (rutas B2B, Next 16) para que el brief
   deje de contradecir el código.
5. **Tienda `/universo`**: enlazar checkout real (Hotmart) cuando los productos estén listos.

---

## Sistema de diseño

- `docs/brand.md` — marca web (Pixar + Encanto, no Amazon)
- `docs/DISENO_MAESTRO.md` — sprints A–D + checklist
- `docs/PALETAS_ELARA_ARANOA.md` — paletas Elara (portal) + Aranoa (estudio B2B)
- `.claude/skills/` — `elara-designer`, `elara-copywriter`, `elara-ui-master` (+ marketing, growth, fba, ebooks, ads-analyst, market-research)

---

## Regla para agentes

- Antes de codear: leer `CONTEXT_CURSOR.md` (estrategia) + este archivo (estado real).
- Si el **código** y el **CONTEXT** chocan en un hecho técnico (ruta, dep, versión): manda el código,
  y se anota la divergencia aquí. Si chocan en **estrategia/visión**: manda el CONTEXT salvo que Evelyn apruebe el cambio.
- **Una fase / un objetivo por sesión.** Parar y confirmar con Evelyn entre fases (TDAH: no saturar).
- No mezclar voz Elara y voz Evelyn en la misma página.
- Nunca la palabra **"tarot"** — solo **oráculo**.

---

## Otros repos / carpetas (no confundir)

| Ruta | Qué es |
|------|--------|
| `01_LANZAMIENTO/` … `06_ARCHIVO/` | Ops, contenido, visual, reels, estrategia, archivo (no despliegan) |
| `assets/b2b/` | PDFs portfolio Evelyn |
| `ebooks/` | Manuscritos fuente (Ciclo Nova) |

**Único deploy = este repo, carpeta `web/`.**
