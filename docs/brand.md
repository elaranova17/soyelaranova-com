# Elara Nova · Marca estudio 2026 (sitio web)

> **Fuente de verdad visual y de voz para `soyelaranova.com`.**
> Actualizado: julio 2026. Este documento reemplaza la versión "portal sagrado" de mayo 2026.
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

## Look canónico = home editorial

El estilo "quiet luxury editorial" implementado en `web/app/page.tsx` + tokens `--editorial-*`
de `web/app/globals.css` es **ley para todas las páginas**:

### Paleta (tokens `--editorial-*` en `web/app/globals.css`)

| Token | HEX | Uso |
|-------|-----|-----|
| `--editorial-smoke` | `#E7E1DC` | Fondo base claro (body) |
| `--editorial-ivory` | `#F8F3EA` | Fondos de secciones/cards claras |
| `--editorial-ink` | `#18131A` | Texto principal |
| `--editorial-plum` | `#4A2D57` | Acentos, botones primarios, títulos em |
| `--editorial-aubergine` | `#2B1735` | Secciones oscuras, navbar `.site-nav` |
| `--editorial-lavender` | `#B9A1C8` | Texto secundario sobre oscuro |
| `--editorial-cacao` | `#6B5147` | Texto secundario sobre claro, eyebrows |
| `--editorial-stone` | `#B8AEA7` | Bordes hairline |
| `--editorial-gold` | `#B89A58` | Detalles, líneas, CTA gold |

Los alias `--studio-*` existen solo para formularios/páginas ya construidas; para código nuevo
usar `--editorial-*` directamente. **No inventar colores.**

### Tipografía

- **Display:** Fraunces (`--font-display`) — titulares, peso 400, `opsz` alto, WONK.
- **Serif:** Cormorant Garamond itálica (`--font-serif`) — citas, frases em.
- **Sans:** Manrope (`--font-sans`) — cuerpo, labels, tracking amplio en uppercase.

(Playfair Display y Lato pertenecen a la era anterior — no reintroducir.)

### Componentes/clases canónicos

- `.home-eyebrow` (+ `--light` sobre oscuro) — labels de sección.
- `.home-button` con variantes `--primary` (plum), `--gold`, `--quiet`, `--light`.
- Secciones claras smoke/ivory alternadas con bandas oscuras aubergine
  (patrón `home-impact` / `home-oracle` / `home-close`).
- Navbar única: `.site-nav` aubergine (componente `site-nav.tsx`) en **todas** las páginas.
- Fotos reales de Evelyn (`/_assets/photos/`) con velo aubergine (`.asset-photo`).

---

## Voces

- **Voz Evelyn** (directa, ingeniera, Medellín/Suiza, 6 años banca):
  home, `/servicios`, `/servicios/[slug]`, `/trabaja-conmigo`, `/descubrimiento`,
  `/gracias`, `/legal`, `/lp/*`, `/linktree`, todo lo B2B.
- **Voz Elara** (mística, hermana mayor paisa): **solo** en rutas espirituales que sigan vivas
  (`/oraculo`, `/universo`, `/cursos`, `/sobre-elara`). Nunca "tarot", siempre **oráculo**.
- Nunca mezclar las dos voces en la misma página.

---

## Prohibido (no-go 2026)

- **Menús distintos por página** — una sola navbar `.site-nav` para todo el sitio.
- **Muñequitos / avatar Elara / stickers como UI del estudio** — las ilustraciones
  Pixar/Encanto no representan al estudio; solo fotos reales de Evelyn.
- **Heroes Midjourney fantasy** — nada de fondos de lagos, portales, noches estrelladas
  como chrome de página (archivados en `06_ARCHIVO/`).
- **Purple-night ritual como chrome principal** — la paleta morado-profundo/void
  (`--color-purple-*`, `--color-void`) y las clases `btn-ritual`, `elara-card`, etc.
  quedan limitadas a las rutas espirituales legacy; no usarlas en páginas del estudio.
- CSS/JS suelto en `public/` que duplique estilos del app (ya eliminado; no reintroducir).
- `#000`/`#FFF` puros, neón, gradientes arcoíris, shadcn/MUI/Chakra, estética coach/TikTok.
- Stock corporativo genérico.

---

## Reglas de código (sin cambios)

- TypeScript estricto, sin `any`. UI custom, mobile-first.
- Design tokens solo en `web/app/globals.css`.
- Lighthouse >85 perf / >95 a11y.
- Commits: `feat:`, `fix:`, `chore:`, `refactor:`, `docs:`.

---

## Assets

- **Fotos reales Evelyn:** `web/public/_assets/photos/` — corazón visual del estudio.
- **Escenas servicios:** `web/public/media/servicios/`.
- **Firma:** `web/public/brand/firma-elara*.png`.
- **Lead magnet:** `web/public/lead-magnet/7-cartas.pdf`.
- **B2B estático:** `web/public/evelyn-b2b/` (+ `elara-ritual.css` que esos HTML aún cargan).
- **Ilustraciones espirituales restantes:** solo las que usan `/cursos`, `/oraculo`, `/universo`.
- Verificación automática: `web/scripts/verify-public-assets.mjs` (`npm run verify:assets`).
