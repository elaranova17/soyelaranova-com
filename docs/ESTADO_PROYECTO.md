# Estado del proyecto · soyelaranova.com

**Actualizado:** 25 julio 2026
**Fuente de verdad de marca:** [`brand.md`](brand.md) (marca estudio 2026)
**Repo:** `github.com/elaranova17/soyelaranova-com` · rama `main`
**Deploy:** [`DEPLOY.md`](DEPLOY.md) · Vercel Root Directory = `web`

---

## Resumen en una línea

El sitio es el **estudio de Evelyn Patiño / Elara Nova** (automatizaciones, webs/landings,
Google Ads). Look canónico: **CapCut glow chic** (cream/aubergine/gold + Bebas + Great Vibes
con glow dorado). Embudo: pre-análisis → sesión 25 CHF → proyecto.

> Nota: `CONTEXT_CURSOR.md` (mayo 2026, "portal sagrado") quedó **superado** en lo visual y
> de producto por `docs/brand.md`. Sigue siendo útil como historia y para las rutas espirituales.

---

## Stack real

- Next.js 16 App Router · React 19 · TS strict · Tailwind v4
- Fonts: **Bebas Neue** (impact) · **Great Vibes** (script) · Cormorant Garamond (serif) · **Outfit** (sans)
- Lockups: `.type-lockup` + `--glow` / `--glow-soft` en `web/app/globals.css`
- framer-motion, gsap, lenis (`lenis-provider.tsx`)
- Resend opcional vía `POST /api/discovery` y `POST /api/oracle/subscribe`
- three/R3F, tone.js, ElevenLabs, Sanity: **no instalados**

**Build:** `cd web && npm run build` (con `verify:assets` en prebuild).

---

## Rutas

### Estudio (voz Evelyn · CapCut glow chic)

| Ruta | Uso |
|------|-----|
| `/` | Home — hero, tesis, scroll inmersivo, servicios, recursos, pre-análisis |
| `/servicios` | Índice de servicios |
| `/servicios/[slug]` | Detalle (automatizaciones, landing-pages, google-ads, …) |
| `/trabaja-conmigo` | Presentación B2B |
| `/descubrimiento` | Wizard pre-análisis (lead gratis) |
| `/gracias` | Confirmación post pre-análisis |
| `/sesion-estrategica` | Producto de entrada 20 min · 25 CHF |
| `/sesion-estrategica/gracias` | Post-pago → agenda |
| `/legal` | Privacidad y términos |
| `/lp/*` | LPs madre/hija + libros (mismo look CapCut) |
| `/linktree` | Hub de enlaces |

### Espirituales legacy (voz Elara · no definen el chrome)

`/oraculo` · `/universo` · `/cursos` · `/sobre-elara` (+ `/preview/*` re-exports)

---

## Sistema de diseño

- Tokens `--editorial-*` en `web/app/globals.css` — **ley**.
- Clases compartidas: `.home-eyebrow`, `.home-button--{primary,gold,quiet,light}`,
  `.asset-photo`, secciones aubergine (`home-impact`, `home-close`).
- Navbar única `.site-nav` (aubergine) en `components/site-nav.tsx` + `lib/navigation.ts`.
- Formularios: `.studio-input` (alias `--studio-*` → `--editorial-*`).

---

## Limpieza julio 2026 (hecho)

- Eliminado el subárbol muerto de UI ritual: 16 componentes `elara-*`/section-* sin uso,
  libs `site-images`, `image-focal`, `media`, `media-src`, `resolve-image-src`,
  `home-images`, `oracle-messages` y los 3 hooks legacy.
- Eliminados de `web/public/`: `elara/` (avatar+stickers), `site-nav-ritual.css/js`,
  `elara-nova-rediseno.css`, `elara-nova-animations.js`, `elara-cursos-productos.css`
  y ~30 PNG fantasy sin referencia en `images/`.
- `web/public/images/` conserva solo las ilustraciones usadas por `/cursos`, `/oraculo`, `/universo`.
- `verify-public-assets.mjs` ahora también bloquea la reaparición de esos archivos legacy.

---

## Embudo comercial (julio 2026)

Fuente: [`PLAN_CIERRE_EMBUDO.md`](PLAN_CIERRE_EMBUDO.md)

- LPs madre: `/lp/automatizaciones|paginas-web|landing-pages|google-ads`
- LPs hija (paquetes): `/lp/[service]/[pack]` (Arranque, Pro, Sitio+Ads, etc.)
- Pre-análisis: `/descubrimiento` → lectura async → sesión `/sesion-estrategica` (25 CHF)
- CTA canónico: **Hacer mi pre-análisis** (ya no “diagnóstico gratis 20 min” como call)

## Pendientes / siguiente

1. Pegar en Vercel `NEXT_PUBLIC_STRIPE_PAYMENT_LINK_SESION` + `NEXT_PUBLIC_CALENDLY_URL_SESION` (hasta entonces WhatsApp fallback)
2. Hotmart live para Ciclo Nova
3. Decidir el futuro de las rutas espirituales (`/oraculo`, `/universo`, `/cursos`,
   `/sobre-elara`): rediseñarlas al sistema editorial o retirarlas.
2. Hotmart links reales en productos digitales.
3. Resend en producción (env vars) para `/api/discovery`.

---

## Regla para agentes

- Leer `docs/brand.md` + este archivo antes de codear.
- Look canónico = home editorial. No crear estilos nuevos por página.
- Una sola navbar. Voces Evelyn/Elara nunca mezcladas. Nunca "tarot".
- Commits pequeños y claros; `npm run build` debe pasar antes de push.
