# Elara Nova · Marca 2026

> **Fuente de verdad visual y de voz de la marca.**
> Actualizado: **6 ago 2026 (brand board C3 scrapbook)**.
> Si otro brief o skill antiguo contradice este archivo, **gana este archivo**.

---

## 🚀 DIRECCIÓN VIGENTE (6 ago 2026) — Scrapboard profesional C3

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

### Identidad visual VIGENTE (6 ago 2026 — brand board C3)

**Estética: tech-lifestyle scrapbook** — crema rosada, lilac, lavender, soft pink, deep purple,
warm grey, gold muted. Collage: Polaroids + tape + sticky + ventanas UI. Brand board:
`docs/brand-board.html`.

**Paleta C3 (hex del board · tokens `--editorial-*`):**

| Color | HEX | Token | Uso |
|-------|-----|-------|-----|
| Cream | `#FFF6F8` | `--editorial-smoke` | Base papel (~60%) |
| Lilac | `#CDB4F2` | `--editorial-lavender` | Bandas, tags, UI chrome |
| Lavender | `#9A66D9` | `--editorial-lila` | Acento UI / script |
| Soft pink | `#F5A7C4` | `--editorial-rosa-bebe` | Sticky / girl culture |
| Deep purple | `#1C1B1F` | `--editorial-ink` | Titulares + CTA |
| Warm grey | `#E7E3DF` | `--editorial-stone` | Hairlines |
| Gold | `#C9A86A` | `--editorial-gold` | Lujo puntual |

**Tipografías (board · pairing moodboard bold+script):**
**Satoshi** ExtraBold (impact) · **Great Vibes** (script grande en heroes/lockups) ·
**Instrument Serif** italic (acentos chicos / h2) · **IBM Plex Mono** (code/UI) · **Inter** (cuerpo).

**CTA:** charcoal/deep purple. **No** rosa chicle neón como fill principal.

**Logo (aprobado 30 jul): isotipo "corazón-click"** — corazón rosa chicle + cursor haciendo click (*"menos a mano = un click"*). Familia completa en `docs/brand-assets/logo/` (logo-v2-*, isotipo.svg, perfil.svg). Doodles propios (17 SVGs) en `docs/brand-assets/doodles/` — **nunca usar packs de terceros ni assets de Pinterest** (solo inspiración).

**Composición: scrapboard profesional** — Polaroid + tape, ventanas UI (`workflow.exe`), sticky notes, bandas lilac, tipografía Satoshi + Great Vibes (grande) / Instrument (chico). **Sin** stickers kawaii ni chrome Y2K.

**Fotos de Evelyn: NUNCA 100% IA.** Ella se fotografía (brief de pose con boceto de figura verde previo) → IA solo refina (ver `memory reference_fotos_pipeline` + `docs/prompts/`). Avatar 3D Elara = **mascota-acento**, nunca protagonista (refs en `docs/brand-assets/avatar/`).

**Plan de ejecución vigente:** `docs/PLAN_SPRINTS.md` (tablero por sprints, lanzamiento ~3 sep 2026).

> ✅ **Dirección vigente (6 ago 2026):** scrapboard profesional C3 (cream/lilac/lavender/deep).
> **Y2K girly queda RETIRADO** del chrome web (chips 2000s, Bagel bubble, stickers kawaii, chat MSN).
> Figma canónico: https://www.figma.com/design/im5h3TanW9XR2MMwwF2FAx
> CapCut glow (julio) = archivo histórico.

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

### Paleta (tokens `--editorial-*` en `web/app/globals.css`) — C3 board 6 ago

| Token | HEX | Uso |
|-------|-----|-----|
| `--editorial-smoke` | `#FFF6F8` | Cream base |
| `--editorial-ivory` | `#FFFBFC` | Paneles |
| `--editorial-ink` | `#1C1B1F` | Deep purple / CTA |
| `--editorial-plum` | `#2A2830` | Texto serio |
| `--editorial-aubergine` | `#1C1B1F` | Oscuro |
| `--editorial-lavender` | `#CDB4F2` | Lilac bands |
| `--editorial-cacao` | `#6E6A66` | Secundario |
| `--editorial-stone` | `#E7E3DF` | Warm grey |
| `--editorial-gold` | `#C9A86A` | Gold muted |
| `--editorial-lila` | `#9A66D9` | Lavender acento |
| `--editorial-lila-deep` | `#7A4FB8` | Lavender deep |
| `--editorial-rosa-bebe` | `#F5A7C4` | Soft pink |
| `--editorial-rose` | `#F5A7C4` | Soft pink alias |

> **Dirección C3:** scrapbook tech-lifestyle. CTA = deep purple. Acento UI = lavender/lilac.
> Gold solo lujo puntual. Tipografía Satoshi + Great Vibes (hero) + Instrument + Plex + Inter.


Usar `--editorial-*` en código nuevo. **No inventar colores.**

### Tipografía (lockeada · C3 pairing moodboard)

Fórmula de referencia: **sans negra bold + script delicada** (tipo Inter-Blk×script / MODERN×serif, adaptada a nuestra stack).

| Rol | Fuente | Variable | Uso |
|-----|--------|----------|-----|
| Impact | **Satoshi** ExtraBold | `--font-display` | Titulares display, línea superior del lockup |
| Script grande | **Great Vibes** | `--font-script` | **Solo grande**: logo nav, firma, lockups de hero (h1). NO en títulos chicos. |
| Serif acento | **Instrument Serif** italic | `--font-serif` | Acentos chicos, h2 lockups, notas, sticky legible |
| Sans UI | **Inter** | `--font-sans` | Cuerpo, labels, CTAs, FAQ |
| Mono | **IBM Plex Mono** | `--font-mono` | Code / ventanas UI |

**Lockup obligatorio en heroes y cierres de sección:**

```html
<h2 class="type-lockup type-lockup--glow"> <!-- o --glow-soft en claro -->
  <span class="type-lockup__impact">Tu negocio</span>
  <em class="type-lockup__script">todavía a mano?</em>
</h2>
```

**Reglas de presentación**
- Impact: Satoshi ExtraBold, tracking negativo, Title Case o caps según sección.
- Script grande: Great Vibes ~0.52em del impact, `font-style: normal`, **nunca** párrafos largos.
- **Great Vibes solo grande**: en títulos chicos (pasos de método, tarjetas, h2) usar **Instrument Serif italic**.
- Oscuro: clase `--glow` → cream + glow suave lavender.
- Claro: clase `--glow-soft` → ink + script lilac.
- CTA primary: `home-button--primary` = deep (`--editorial-ink`).
- CTA gold: `home-button--gold` con `--btn-glow-gold`.
- Eyebrow: Inter uppercase + línea gold (`.home-eyebrow`).

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
- Sans negra brutal tipo Inter Black / Archivo Black como display del sistema (Satoshi ExtraBold es el display canónico; Great Vibes solo en acentos grandes).
- Playfair/Fraunces/Manrope/Bebas/Outfit como sistema tipográfico actual.
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
