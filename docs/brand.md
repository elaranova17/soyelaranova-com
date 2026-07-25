# Elara Nova · Marca estudio 2026 (sitio web)

> **Fuente de verdad visual y de voz para `soyelaranova.com`.**
> Actualizado: julio 2026 (tipografía Opción A CapCut glow chic lockeada).
> Si `CONTEXT_CURSOR.md` u otro brief antiguo contradice este archivo, **gana este archivo**.

---

## Qué es el sitio (realidad 2026)

**Producto principal del sitio público:** el estudio **Evelyn Patiño / Elara Nova** —
automatizaciones de procesos, webs y landing pages que venden, y Google Ads con medición.

- La home (`web/app/page.tsx`) es el escaparate del estudio y **el look canónico de toda la web**.
- La capa espiritual de Elara (oráculo, ebooks, cursos) queda como rutas secundarias
  (`/oraculo`, `/universo`, `/cursos`, `/sobre-elara`) mientras existan; no definen el chrome del sitio.

**Tagline Evelyn:** *Pienso como diseñadora, construyo como ingeniera.*

---

## Look canónico = CapCut glow chic editorial

Referencia visual aprobada: lockup **sans condensada cream + script solapado + glow dorado**
sobre aubergine (sección pre-análisis / banda impact). Ese look se replica en **toda** la web
con variantes claras (`--glow-soft`) y oscuras (`--glow`).

### Paleta (tokens `--editorial-*` en `web/app/globals.css`)

| Token | HEX | Uso |
|-------|-----|-----|
| `--editorial-smoke` | `#E7E1DC` | Fondo base claro (body) |
| `--editorial-ivory` | `#F8F3EA` | Fondos claros / texto cream en oscuro |
| `--editorial-ink` | `#18131A` | Texto principal en claro |
| `--editorial-plum` | `#4A2D57` | Acentos, botones primary, script en claro |
| `--editorial-aubergine` | `#2B1735` | Secciones oscuras, navbar, LP heroes |
| `--editorial-lavender` | `#B9A1C8` | Texto secundario sobre oscuro |
| `--editorial-cacao` | `#6B5147` | Texto secundario sobre claro, eyebrows |
| `--editorial-stone` | `#B8AEA7` | Bordes hairline |
| `--editorial-gold` | `#B89A58` | Líneas, CTA gold, glow |

Usar `--editorial-*` en código nuevo. **No inventar colores.**

### Tipografía (lockeada · Opción A)

| Rol | Fuente | Variable | Uso |
|-----|--------|----------|-----|
| Impact | **Bebas Neue** | `--font-display` | Titulares caps, línea superior del lockup |
| Script | **Great Vibes** | `--font-script` | Firma solapada, logo nav, nombre Evelyn |
| Serif | **Cormorant Garamond** | `--font-serif` | Notas, tesis auxiliares, case titles |
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
- Oscuro: clase `--glow` → cream + `--text-glow-gold`.
- Claro: clase `--glow-soft` → ink/plum + glow suave.
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

- Sin fotos de Evelyn en web: prohibido kit IA / Higgs / `evelyn_pro_*` / selfies `evelyn-real/`. Usar `media/servicios/`, `media/recursos/`, `brand/`.
- Escenas servicios: `web/public/media/servicios/`
- Recursos: `web/public/media/recursos/`
- Firma: `web/public/brand/firma-elara*.png`
- Verify: `npm run verify:assets` en `web/`
