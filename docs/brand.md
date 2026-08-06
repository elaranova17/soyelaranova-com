# Elara Nova · Marca 2026

> **Fuente de verdad visual y de voz de la marca.**
> Actualizado: **6 ago 2026 (paleta scrapbook cream/lavender)**.
> Si otro brief o skill antiguo contradice este archivo, **gana este archivo**.

---

## 🚀 DIRECCIÓN VIGENTE (6 ago 2026) — Scrapbook cream + lavender · "IT Girly"

**La marca es Evelyn.** El negocio principal es **enseñar automatización con IA en redes**
(TikTok + Instagram; se agregan plataformas al crecer) al nicho **IT Girly**: tecnología,
IA y automatización **para mujeres** — que han sido excluidas de este mundo, el mundo en el
que Evelyn ha estado toda la vida. Lema de convergencia de las dos frases ancla: *las chicas
siempre pudieron crear con tecnología; "Menos a mano" es cómo, "Mirá todo lo que siempre
fuiste capaz de ser" es por qué.*

**Jerarquía del negocio:**
1. Contenido en redes (reels/TikToks) → construye audiencia
2. **Plantillas/agentes n8n descargables** (gratis → premium → packages) vía embudo DM automatizado
3. Infoproductos (ebooks, cursos pequeños) — fase 2
4. Servicios freelance/estudio — **siguen en la web pero SIN promoción activa** mientras dure TPC; si la demanda desborda, tercerizar con amigos
5. UGC para marcas — línea de ingreso paralela de Evelyn

**Nombre completo de marca:** *Elara Nova by Evelyn Patiño* · Intro de video: *"Bienvenidas a un capítulo más de Menos a Mano…"*

### Identidad visual VIGENTE (6 ago 2026 — scrapbook; reemplaza rosa chicle + CapCut)

**Estética: digital scrapbook / collage chic** — crema papel, lavanda muted, charcoal,
rosa soft. Girly + profesional, **sin hot pink neón**. Brand board: `docs/brand-board.html`
(actualizar swatches a esta paleta).

**Paleta C2 "Scrapbook cream · lavender" (tokens `--editorial-*`):**

| Color | HEX | Token | Uso |
|-------|-----|-------|-----|
| Crema papel | `#F4EFE6` | `--editorial-smoke` | Base (~60%) |
| Ivory | `#FAF7F2` | `--editorial-ivory` | Paneles / Polaroid |
| Lavanda muted | `#B8A0C8` | `--editorial-gold` | Acento principal, líneas, highlights |
| Lilac band | `#C9B5D8` | `--editorial-lavender` | Bandas, stats, UI windows |
| Rosa soft | `#F0D8E0` / `#D4A0B0` | `--editorial-rosa-bebe` / `--editorial-rose` | Clips, sticky, mangas |
| Charcoal | `#2A2428` | `--editorial-ink` | Titulares + CTA principal |
| Mauve | `#4F3F55` | `--editorial-plum` | Texto serio |

Proporción **60 crema / 25 lavanda+rosa soft / 15 charcoal**.  
**Retirados:** dorado `#B89A58`, rosa chicle `#E85D9F`, lila neón `#9A66D9`.
**Regla del brillo:** glow suave lilac/cream — nunca hot pink ni oro metálico.

**Tipografías:** Bagel Fat One (display, solo títulos gordos) · Great Vibes (script, guiños, máx 1 por pieza) · Outfit (cuerpo). Todas Google Fonts.

**Logo (aprobado 30 jul): isotipo "corazón-click"** — corazón rosa chicle + cursor haciendo click (*"menos a mano = un click"*). Familia completa en `docs/brand-assets/logo/` (logo-v2-*, isotipo.svg, perfil.svg). Doodles propios (17 SVGs) en `docs/brand-assets/doodles/` — **nunca usar packs de terceros ni assets de Pinterest** (solo inspiración).

**Composición: collage y recortes** — cutout sticker con borde blanco, tipografía gigante entrelazada con la persona, script cruzado, doodles encima, scrapbook (clips/cinta/papel cuadriculado). NO planos centrales.

**Fotos de Evelyn: NUNCA 100% IA.** Ella se fotografía (brief de pose con boceto de figura verde previo) → IA solo refina (ver `memory reference_fotos_pipeline` + `docs/prompts/`). Avatar 3D Elara = **mascota-acento**, nunca protagonista (refs en `docs/brand-assets/avatar/`).

**Plan de ejecución vigente:** `docs/PLAN_SPRINTS.md` (tablero por sprints, lanzamiento ~3 sep 2026).

> ✅ **Reposicionamiento web en producción (1 ago 2026):** `soyelaranova.com` ya sirve el home
> Y2K / IT Girly (rama `web-y2k` mergeada a `main`). La identidad Y2K girly de arriba manda
> para la web desplegada y para todo lo nuevo. Las secciones CapCut de abajo quedan como
> archivo histórico de la etapa estudio (julio 2026).

---

## Qué es el sitio (realidad 2026)

**Producto principal del sitio público:** el estudio **Evelyn Patiño / Elara Nova** —
automatizaciones de procesos, webs y landing pages que venden, y Google Ads con medición.

- La home (`web/app/page.tsx`) es el escaparate del estudio y **el look canónico de toda la web**.
- La capa espiritual de Elara (oráculo, ebooks, cursos) queda como rutas secundarias
  (`/oraculo`, `/universo`, `/cursos`, `/sobre-elara`) mientras existan; no definen el chrome del sitio.

**Slogan principal de marca (lockeado 26 jul 2026):** *Menos a mano.*
**Descriptor Evelyn:** *Pienso en el detalle, construyo como ingeniera.*
> ⚠️ Evelyn es **ingeniera, NO diseñadora de profesión.** Nunca llamarla "diseñadora" ni "ojo de diseñadora". Sí es fashionista/girly y le importan la estética y la calidad → usar "ojo estético", "cuido el detalle". Números canónicos: **8 años automatizando, 6 de ellos en banca** (Sophos/Bancolombia).
**Cita ancla:** *Mirá todo lo que siempre fuiste capaz de ser.* / *Mirá lo que siempre pudiste hacer.*
(Perfil humano completo y reglas de privacidad: `docs/PERFIL_EVELYN.md`. Voz: `docs/VOZ.md`.)

---

## Look canónico = CapCut glow chic editorial

Referencia visual aprobada: lockup **sans condensada cream + script solapado + glow dorado**
sobre aubergine (sección pre-análisis / banda impact). Ese look se replica en **toda** la web
con variantes claras (`--glow-soft`) y oscuras (`--glow`).

### Paleta (tokens `--editorial-*` en `web/app/globals.css`) — C2 scrapbook 6 ago

| Token | HEX | Uso |
|-------|-----|-----|
| `--editorial-smoke` | `#F4EFE6` | Fondo base crema papel |
| `--editorial-ivory` | `#FAF7F2` | Paneles claros |
| `--editorial-ink` | `#2A2428` | Texto + CTA charcoal |
| `--editorial-plum` | `#4F3F55` | Mauve serio |
| `--editorial-aubergine` | `#2C2830` | Bandas oscuras soft |
| `--editorial-lavender` | `#C9B5D8` | Lilac bands / secundario oscuro |
| `--editorial-cacao` | `#7A6E78` | Texto secundario claro |
| `--editorial-stone` | `#D8D0C8` | Hairlines |
| `--editorial-gold` | `#B8A0C8` | Acento lavanda muted (ex-oro / ex-rosa chicle) |
| `--editorial-champan` | `#F1EAF0` | Wash crema+lilac |
| `--editorial-lino` | `#EDE6EA` | Wash crema+rose |
| `--editorial-lila` | `#A890BC` | Links / UI |
| `--editorial-lila-deep` | `#7E6A94` | Texto lavanda accesible |
| `--editorial-rosa-bebe` | `#F0D8E0` | Fondos soft |
| `--editorial-rose` | `#D4A0B0` | Rosa soft detalle |

> **Dirección (6 ago 2026 · C2):** scrapbook cream + lavender. CTA primary = charcoal
> (`--editorial-ink`). Acento = lavanda muted (`--editorial-gold`). Rosa soft solo en
> detalles collage. Sin hot pink ni oro.

Usar `--editorial-*` en código nuevo. **No inventar colores.**

### Tipografía (lockeada · Opción A)

| Rol | Fuente | Variable | Uso |
|-----|--------|----------|-----|
| Impact | **Bebas Neue** | `--font-display` | Titulares caps, línea superior del lockup |
| Script | **Great Vibes** | `--font-script` | **Solo grande**: logo nav, firma, lockups de hero/sección. NO en títulos chicos. |
| Serif | **Cormorant Garamond** | `--font-serif` | Notas, tesis auxiliares, case titles, **script itálico de títulos chicos** (método) |
| Sans UI | **Outfit** | `--font-sans` | Cuerpo, labels, CTAs, FAQ |

**Lockup obligatorio en heroes y cierres de sección:**

```html
<h2 class="type-lockup type-lockup--glow"> <!-- o --glow-soft en claro -->
  <span class="type-lockup__impact">Tu negocio</span>
  <em class="type-lockup__script">todavía a mano?</em>
</h2>
```

**Reglas de presentación**
- Impact: caps, tracking ~0.06em, Bebas.
- Script: ~0.52em del impact, `margin-top: -0.4em`, leve rotación (−1.4°), **nunca** párrafos largos.
- **Great Vibes solo grande**: en títulos chicos (pasos de método, tarjetas) usar **Cormorant itálica** —
  Great Vibes se vuelve ilegible a tamaño pequeño (ej. `.method__title-script`).
- Oscuro: clase `--glow` → cream + `--text-glow-gold`.
- Claro: clase `--glow-soft` → ink/plum + glow suave.
- CTA primary: `home-button--primary` = **ciruela** (`--editorial-plum`), sin glow morado.
- CTA gold: `home-button--gold` con `--btn-glow-gold`.
- Eyebrow: Outfit uppercase + línea gold (`.home-eyebrow`).

### Componentes canónicos

- `.type-lockup` / `__impact` / `__script` / `--glow` / `--glow-soft` / `--center`
- `.home-eyebrow` (+ `--light`)
- `.home-button` (`--primary` · `--gold` · `--quiet` · `--light`)
- Secciones claras smoke/ivory ↔ bandas aubergine con radial gold
- Navbar única `.site-nav` aubergine en **todas** las páginas
- Fotos reales Evelyn + velo aubergine (`.asset-photo`)

---

## Voces

- **Voz Evelyn** (directa, ingeniera, Medellín/Suiza, 6 años banca):
  home, `/servicios`, `/servicios/[slug]`, `/trabaja-conmigo`, `/descubrimiento`,
  `/gracias`, `/legal`, `/lp/*`, `/sesion-estrategica`, `/linktree`, todo lo B2B.
- **Voz Elara** (mística, hermana mayor paisa): **solo** rutas espirituales
  (`/oraculo`, `/universo`, `/cursos`, `/sobre-elara`). Nunca "tarot", siempre **oráculo**.
- Nunca mezclar las dos voces en la misma página.

---

## Embudo comercial (orden de negocio)

1. **LP / home CTA** → “Hacer mi pre-análisis”
2. **Wizard** `/descubrimiento` (gratis, didáctico)
3. **Lectura por email** (`docs/EMAIL_PREANALISIS.md`)
4. **Sesión estratégica** 20 min · **25 CHF** (`/sesion-estrategica`)
5. **Proyecto** Arranque / Pro / A medida / packs web-ads (`docs/OFERTA_SERVICIOS.md`)

Go-live ops: `docs/GO_LIVE.md` (Stripe, Calendly, GA4, Hotmart).  
Outreach: `docs/KIT_OUTREACH.md`.

---

## Prohibido (no-go 2026)

- Menús distintos por página.
- Muñequitos / avatar Elara como UI del estudio.
- Heroes Midjourney fantasy como chrome.
- Purple-night ritual (`--color-purple-*`, `btn-ritual`) fuera de rutas espirituales.
- Sans negra brutal tipo Inter Black / Archivo Black como display (reemplazada por Bebas + glow).
- Playfair/Fraunces/Manrope como sistema tipográfico actual.
- Hex prohibidos `#7B4FB5` / `#C49AD4` — usar `--color-purple-amethyst` / `--color-pale-lav` (SVG: `#5A2E8C` / `#E5DBF0`).
- `#000`/`#FFF` puros, neón, arcoíris, shadcn/MUI/Chakra.
- Stock corporativo genérico.
- Call gratis larga como promesa (reemplazada por pre-análisis + sesión 25 CHF).

---

## Reglas de código

- TypeScript estricto, sin `any`. UI custom, mobile-first.
- Design tokens solo en `web/app/globals.css`.
- Lighthouse >85 perf / >95 a11y.
- Commits: `feat:`, `fix:`, `chore:`, `refactor:`, `docs:`.

---

## Assets

- Fotos Evelyn permitidas hoy: `kit-web-real/evelyn-editorial-mistico.jpg`, `evelyn-de-pie.jpg`. Nuevos renders: `docs/prompts/evelyn-home-hero-about.json`.
- Producto home Recursos: `web/public/media/recursos/recurso-{ebook,pantallas,valor}.webp` (sin caras).
- Prohibido: selfies privadas (`00-identidad-*`, `evelyn_pro_perfil`, `face-ref`, buso blanco sin peluca); serie desk blusa crema (`evelyn_pro_hero`, `01-hero-evelyn`, `02-bio-evelyn`, `evelyn-estudio-profesional`); `higgs-out`; `media/cursos/`.
- Producto/servicios: `web/public/media/servicios/` + `slide-proceso-fondo.webp`.
- Escala tipográfica: tokens `--type-hero|section|band|card|immersive|word` en `globals.css`.
- Firma: `web/public/brand/firma-elara*.png`
- Verify: `npm run verify:assets` en `web/`
