# Estado del proyecto · soyelaranova.com

**Actualizado:** 20 julio 2026 (verificado contra el código, último commit 24 junio 2026)
**Dirección estratégica actual:** [`PLAN_MAESTRO_REDISENO_ELARA.md`](PLAN_MAESTRO_REDISENO_ELARA.md) ← manda
**Brief original (parcialmente superado):** [`../CONTEXT_CURSOR.md`](../CONTEXT_CURSOR.md)
**Repo:** `github.com/elaranova17/soyelaranova-com` · rama `main` · **Deploy:** Vercel ([`DEPLOY.md`](DEPLOY.md)) · mapa: [`REPO_STRUCTURE.md`](REPO_STRUCTURE.md)

> **Lee esto primero.** El sitio pasó por una **reestructuración comercial** (mayo–junio 2026): dejó de ser
> un "portal sagrado con el oráculo como objetivo único" y se convirtió en una **casa editorial-profesional
> que vende**. La estrategia vigente vive en `PLAN_MAESTRO_REDISENO_ELARA.md`. Donde el `CONTEXT_CURSOR.md`
> original contradiga esa dirección (oráculo como KPI único, paleta "sagrada" como ley, `/work`), **manda el plan de rediseño**.

---

## Qué es el sitio ahora (dirección comercial)

Una **casa editorial-profesional** que monetiza **tres líneas**:

1. **Productos Elara** — ebooks, lead magnet, workbook, audios, cursos (`/universo`, `/cursos`).
2. **Experiencia Elara** — oráculo, rituales, universo visual (`/oraculo`, sección `#oraculo` del home).
3. **Servicios Evelyn** — sitios web, automatizaciones, Google Ads, redes (`/trabaja-conmigo`, `/servicios`, `/descubrimiento`).

**Principio rector:** *"Elara enamora. Evelyn ordena. El sistema convierte."*
**Embudo (cada sección cumple una función):** Mirar → Quedarse → Confiar → Actuar.
**Debe sentirse:** editorial, místico pero adulto, profesional con alma. **No** debe parecer Canva, plantilla
de agencia, landing genérica de IA, ni portal infantil de fantasía.

> El oráculo **ya no domina** la web: es un gesto memorable, una sección del embudo, no el objetivo único.
> "La Aranoa" **no** es la marca principal (solo aparece como etiqueta interna del formulario de descubrimiento).

---

## Rutas reales (verificadas en `web/app/`)

**12 páginas públicas + 5 en el namespace `/preview` + 2 API.**

### Home = landing comercial fusionada

`/` está **en vivo con el rediseño** (ya no en construcción). Es una landing única con secciones-ancla:
hero (`Entrar al universo` + `Trabaja conmigo`), `#productos`, `#oraculo` (`Sacar mi carta`), `#contacto`.
Frase ancla presente: *"Mira todo lo que siempre fuiste capaz de ser."*

### Públicas

| Ruta | Rol en el embudo |
|------|------------------|
| `/` | Landing comercial (hero + embudo Elara + productos + oráculo + contacto) |
| `/universo` | Productos digitales (ebooks) — falta checkout Hotmart real |
| `/cursos` | Cursos / experiencias (base inicial) |
| `/oraculo` | Ritual / carta (por refinar; carta interactiva pendiente) |
| `/sobre-elara` | Historia, manifiesto, confianza (voz Elara + credenciales Evelyn) |
| `/trabaja-conmigo` | Servicios profesionales (voz Evelyn) |
| `/servicios` · `/servicios/[slug]` | Detalle de servicios del estudio (`lib/studio-services`) |
| `/descubrimiento` | Formulario de diagnóstico → `POST /api/discovery` |
| `/gracias` · `/legal` · `/linktree` | Cierre / legal / linktree Evelyn |

### Preview (staging del rediseño)

`/preview` + `/preview/{cursos,oraculo,trabaja-conmigo,universo}` — revisión privada de iteraciones.

### API

`POST /api/oracle/subscribe` (email portal) · `POST /api/discovery` (formulario B2B).

> Nota: `next.config.ts` redirige rutas legacy (`/comunidad`, `/work`, `/manifiesto`, `/atelier`, `/amazon`…)
> a las secciones fusionadas o a sus equivalentes. Algunos destinos de redirect (`/portfolio`, `/cv`,
> `/casos-exito`, `/factura`, `/portfolio-print`, `/propuesta-val-debarras`) **aún no existen como página** → revisar.

---

## Stack real (verificado en `web/package.json`)

| Dependencia | Estado |
|-------------|--------|
| Next.js | ✅ **16.2.6** (el brief decía 15) |
| React 19 · TypeScript strict · Tailwind v4 | ✅ |
| framer-motion · lenis | ✅ instalados |
| gsap · three / R3F / drei · tone · resend | ❌ **no instalados** |

El "3D/inmersión" es **2D custom** (`magic-cursor`, `magic-particles`); no hay Three.js.
**Build:** `cd web && npm run verify:assets && npm run build`. **Deploy:** Vercel, Root Directory `web`.

---

## Paleta (en transición)

Tokens en `web/app/globals.css` (1985 líneas). Conviven dos sistemas:

- **Editorial (dirección actual):** ciruela `#4A2D57`, berenjena `#2B1735`, cacao `#6B5147`, oro antiguo `#B89A58`, marfil `#F8F3EA`, humo `#E7E1DC`, tinta `#18131A`. → `--editorial-*` / `--studio-*`.
- **Sagrada (legado, en retirada):** `--color-purple-deep #2D1B69`, `--color-gold #D4AF37`. Aún referenciada en ~6 archivos.

**Regla del plan:** el morado como profundidad (no saturación), el dorado como detalle (no lujo falso).
Meta: migrar todo a la paleta editorial y retirar la sagrada.

---

## Estado del embudo (plan de rediseño vs. realidad)

| Sección | Objetivo | Estado |
|---------|----------|--------|
| Hero editorial | Impacto inmediato | ✅ en vivo; ⚠️ imagen hero es placeholder (falta una más exclusiva) |
| Embudo Elara (Mirar→Actuar) | Explicar sin parecer explicación | ⚠️ existe; refinar copy + hacerlo más visual |
| Productos digitales | Vender cosas reales | ⚠️ falta covers reales, precio/CTA por producto, checkout Hotmart |
| Cursos | Abrir línea futura | ⚠️ base; falta definir 2–3 cursos + lista de espera |
| Oráculo | Gesto mágico | ⚠️ carta interactiva simple pendiente; captura email/fecha opcional |
| Trabaja conmigo | Convertir clientes pro | ⚠️ falta autoridad, proceso, mini-casos |
| Sobre / confianza | Por qué Evelyn puede | ⚠️ integrar foto pro + credenciales |
| Contacto / diagnóstico | Cierre claro | ✅ `/descubrimiento` funcional; ⚠️ confirmar Resend + dominio verificado |

---

## Qué hacer ahora (sprint recomendado por el plan)

**Sprint inmediato: Hero + primera pantalla + embudo** (es lo que más afecta la percepción).
Entregables: hero con más tensión visual · mejor composición de imagen Elara · CTA más claro ·
embudo más visual y menos literal · revisión mobile. Luego → productos/covers → trabaja-conmigo → oráculo funcional → QA.

**Deudas técnicas transversales:** integrar **Resend** (instalar dep + `RESEND_API_KEY`); migrar paleta a editorial;
crear las páginas destino de los redirects o corregir los redirects.

---

## Reglas para agentes

- Leer **primero** `PLAN_MAESTRO_REDISENO_ELARA.md` (estrategia comercial vigente) + este archivo (estado real).
- Si el plan de rediseño y el `CONTEXT_CURSOR.md` original chocan en estrategia → **manda el rediseño**.
- Si el código y un doc chocan en un hecho técnico (ruta, dep, versión) → manda el código; anótalo aquí.
- **Una fase / un objetivo por sesión.** Parar y confirmar con Evelyn entre fases (TDAH: no saturar).
- No mezclar **voz Elara** (portal) y **voz Evelyn** (servicios) en la misma sección.
- Nunca la palabra **"tarot"** en UI — solo **oráculo**.
- **"La Aranoa" no es la marca principal**; no ponerla como headline.

---

## Sistema de diseño y contenido

- `PLAN_MAESTRO_REDISENO_ELARA.md` — plan comercial (embudo, rutas, paleta, componentes UI, copy, assets)
- `docs/brand.md` · `docs/DISENO_MAESTRO.md` · `docs/PALETAS_ELARA_ARANOA.md`
- `docs/REDISENO_EDITORIAL_ELARA.md` · `docs/REDISENO_ARANOA_STUDIO.md`
- `.claude/skills/` — designer, copywriter, ui-master (+ marketing, growth, fba, ebooks, ads-analyst, market-research)

**Único deploy = este repo, carpeta `web/`.**
