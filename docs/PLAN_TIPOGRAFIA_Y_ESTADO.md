# Plan · Tipografía + estado del proyecto

**Fecha:** 25 julio 2026  
**Objetivo:** dejar claro qué está bien, qué no, qué falta — y una escala tipográfica única para que títulos grandes/pequeños dejen de pelearse por el espacio.

---

## 1. Deploy / CI (bloqueante)

| Item | Estado | Nota |
|------|--------|------|
| `npm run build` | ✅ OK | Compila 45 rutas |
| `verify:assets` | ✅ OK | Bloquea selfies + serie desk crema |
| `npm run lint` (GitHub Actions) | ✅ OK | Linktree ya usa `<Link>` |
| Vercel Root Directory | ✅ `web` | Ver `docs/DEPLOY.md` |
| Escala tipográfica tokens | ✅ | `--type-hero|section|band|card|immersive|word` en home + LPs |
| Recursos home 01/02/03 | ✅ | `media/recursos/recurso-*.webp` cableados |

---

## 2. Tipografía — diagnóstico

### Qué está bien
- Familias lockeadas: **Bebas** (impact) · **Great Vibes** (script) · Cormorant · **Outfit**
- Sistema CapCut glow: `.type-lockup` + `--glow` / `--glow-soft`
- Tokens de color `--editorial-*` coherentes
- Home / LPs / bandas aubergine ya usan lockup en la mayoría de h1/h2

### Qué no está bien (el dolor que ves)
Hay **demasiados clamps sueltos** por sección. No hay una escala única: cada bloque inventa su tamaño.

| Rol | Tamaños actuales (ejemplos) | Problema |
|-----|-----------------------------|----------|
| Hero home h1 | `clamp(4.4rem … 8.6rem)` · mobile `17vw` | En mobile se come el viewport; script se desborda |
| Secciones home h2 | `clamp(3.1–5.4rem)` · mobile fijo `3.2rem` | Mobile fijo pelea con desktop clamp |
| Impact / close h2 | `clamp(3.4–6.8rem)` | Casi tan grande como el hero |
| Immersive h3 | `clamp(2.6–4.2rem)` | Compite con h2 de sección |
| Product / recurso h3 | `1.65–3rem` mezclado | Cards con títulos de distinta “altura visual” |
| LP hero h1 | `clamp(3–5.4rem)` | OK, pero script a `0.48em` vs home `~0.52em` |
| `.type-title` lg/xl | `1.85–4.2rem` | Poco usado; h3 beige a veces no lo usan |
| Word-banner slide | hasta `8.5rem` / mobile `14vw` | Muy agresivo en pantallas chicas |

**Síntomas en UI**
- Script Great Vibes se sale del contenedor o choca con el impact (margen overlap + `max-content`)
- En beige, unos títulos tienen glow-soft y otros no → “unos gritan, otros susurran”
- Mobile: `17vw` / `14vw` hacen tipografía que no cabe en el primer viewport junto a CTA + foto

---

## 3. Escala propuesta (única · a implementar)

Definir **tokens de tipo** en `:root` (globals.css) y que las secciones solo elijan rol:

| Token | Uso | Desktop (max) | Mobile (min) |
|-------|-----|---------------|--------------|
| `--type-hero` | Solo h1 home / h1 LP | ~5.6rem | ~2.85rem |
| `--type-section` | h2 de sección (intro, servicios, work, LP sections) | ~4.2rem | ~2.4rem |
| `--type-band` | Bandas aubergine (impact, close) | ~4.8rem | ~2.6rem |
| `--type-card` | h3 cards / recursos / pains | ~2.1rem | ~1.55rem |
| `--type- Immersive` | h3 capítulos scroll | ~3.2rem | ~2.1rem |
| `--type-display-sm` | Labels Bebas secundarios | ~1.5rem | ~1.15rem |

Reglas:
1. **Un solo clamp por rol** — las secciones heredan, no redefinen `font-size` salvo excepciones documentadas.
2. Script siempre `0.50–0.55em`, `max-width: 100%`, en mobile `margin-top: -0.28em` (menos solape).
3. Lockup en contenedores estrechos: `overflow-wrap` + script puede pasar a `width: auto; max-width: 100%`.
4. Beige: siempre `--glow-soft` o `.type-title`; aubergine: siempre `--glow`.
5. Mobile primero: hero + 1 CTA deben caber sin scroll horizontal ni tipografía cortada.

**Orden de trabajo tipográfico (siguiente sprint)**
1. P0 — Escala tokens + aplicar a **home** (hero, sections, impact, close, recursos h3)
2. P0 — Mobile pass 390px: hero + Sobre mí + immersive word-banner
3. P1 — LPs (hero + h2 sections + h3 pains/steps) a la misma escala
4. P1 — `/servicios`, `/trabaja-conmigo`, `/descubrimiento`, `/linktree`
5. P2 — Rutas espirituales (o decidir retirarlas del chrome)

---

## 4. Estado general del producto

### Bien / listo
- [x] Look CapCut glow chic como canónico (`docs/brand.md`)
- [x] Embudo: home/LP → `/descubrimiento` → sesión 25 CHF
- [x] LPs madre + hija + libros
- [x] Navbar única estudio
- [x] Repo limpio (`web/` + `docs/` + `ops/b2b/`)
- [x] Selfies privadas + serie desk crema **purgadas** del historial
- [x] Verify bloquea reintroducción de assets prohibidos

### Mal / a corregir ya
- [ ] **Tipografía descontrolada** (este plan §3) — siguiente foco de diseño
- [ ] Home hero / Sobre mí con fotos **temporales** (editorial + de-pie) hasta generar renders del JSON
- [ ] CI lint (fix linktree en esta tanda)

### Falta (backlog priorizado)

| Prioridad | Qué | Detalle |
|-----------|-----|---------|
| **P0** | Fotos home nuevas | Generar con `docs/prompts/evelyn-home-hero-about.json` (**son mías / cara Evelyn**) → `home-hero-evelyn.webp` + `home-about-evelyn.webp` |
| **P0** | Env Vercel sesión | `NEXT_PUBLIC_STRIPE_PAYMENT_LINK_SESION` + `NEXT_PUBLIC_CALENDLY_URL_SESION` (solo vos en el dashboard) |
| ~~P0 tipografía~~ | ~~Escala tokens~~ | ✅ hecho |
| ~~P1 recursos~~ | ~~01/02/03~~ | ✅ hecho (producto, sin cara) |
| **P1** | Portfolio fotos | JSON follow-up en el mismo archivo Evelyn (también **cara mía**) |
| **P1** | Resend prod | Emails de `/api/discovery` (API key en Vercel) |
| **P2** | Rutas espirituales | Quedan secundarias; no definen chrome. Rediseño CapCut o archivo más adelante. |
| **P2** | Hotmart Ciclo Nova | Links reales (cuenta Hotmart) |
| **P2** | OG / social | Ya sin selfies; revisar si cambia oferta |

---

## 5. Fotos — recordatorio rápido

| Asset | ¿Es de Evelyn? | Estado |
|-------|----------------|--------|
| `evelyn-editorial-mistico.jpg` | Sí (permitida) | En uso temporal |
| `evelyn-de-pie.jpg` | Sí (permitida) | En uso temporal |
| `home-hero-evelyn.webp` | **Sí — mía** | Falta generar (JSON listo) |
| `home-about-evelyn.webp` | **Sí — mía** | Falta generar (JSON listo) |
| `recurso-*.webp` | No (producto) | Falta generar |
| Serie desk crema / selfies buso blanco | — | **Borradas para siempre** |

---

## 6. Cómo seguimos (sesión actual)

1. ✅ Desbloquear CI (lint linktree)
2. ⏭ Implementar tokens `--type-*` y recalibrar **home** (tamaños + script en espacios)
3. ⏭ Pass mobile 390px de las secciones que “no caben”
4. Cuando subas los WebP del JSON → cablear y quitar temporales

Si querés, el siguiente commit de código es **solo tipografía home** (sin tocar copy ni embudo).
