# Plan maestro · Marketing, Google Ads, SEO y estructura

> Creado 2026-07-24. Fuente de verdad del embudo y las landings de Elara Nova.
> Objetivo: convertir soyelaranova.com en una máquina de leads con Ads rentable.

---

## 1 · Auditoría de lo que TENEMOS

### Páginas live
| Ruta | Rol actual | Rol en el embudo |
|---|---|---|
| `/` | Home agencia (hero, proceso, servicios, caso, diagnóstico, sobre) | Branding + orgánico. NO destino de Ads |
| `/servicios` + `/servicios/[slug]` ×4 | Informativas por servicio | SEO orgánico. NO para Ads (tienen nav, fugas) |
| `/descubrimiento` | Formulario diagnóstico (API + rate-limit ✅) | **Conversión** — destino final de todo |
| `/trabaja-conmigo` | B2B personal | Apoyo credibilidad |
| `/sobre-elara`, `/universo`, `/oraculo`, `/cursos` | Universo Elara | Marca / futuro productos |
| `/linktree`, `/gracias`, `/legal` | Utilitarias | — |

### Assets visuales
**Tenemos:** hero wide Evelyn ✅ · OG 1200×630 ✅ · místico ✅ · estudio ✅ · de-pie blazer ✅ · slide atelier (pantalla limpia) ✅ · tarjetas 01/02 chroma ✅ · (sin selfies privadas identidad/perfil)
**Falta:** tarjeta 03 caballete chroma · foto candid café (V2) · covers de productos · escenas Evelyn+Elara (fase productos)

### Tracking ya montado
`TrackedLink` con eventos `cta_click` (category/label) ✅ — falta conectarlo a GA4 + conversiones de Google Ads.

---

## 2 · Tipografía nueva (decisión)

> ⚠️ **SECCIÓN DESACTUALIZADA (26 jul 2026).** Esta propuesta (Fraunces + Manrope) **NO se aplicó**
> y **contradice la fuente de verdad** `docs/brand.md`. El sistema tipográfico REAL y vigente es:
> **Bebas Neue** (impact) · **Great Vibes** (script) · **Cormorant Garamond** (serif) · **Outfit** (sans).
> Fraunces/Manrope/Playfair están hoy en la lista de anti-patrones de `brand.md`. Se conserva esta
> sección solo como historia de decisión. Para tipografía, mandá siempre a `docs/brand.md`.

Las actuales (Playfair + Cormorant + Lato) se sienten genéricas y compiten entre sí (2 serifas).

**Par elegido — llamativa + discreta:**
- **Display / títulos: `Fraunces`** (Google Fonts, variable). Serifa con carácter, ojos grandes, curvas con alma — llama la atención sin ser infantil. Usar en Black/ExtraBold para H1/H2, con óptica grande (`opsz`).
- **Texto / UI: `Manrope`** (Google Fonts). Sans geométrica limpia, discreta, moderna. Body, botones, labels, precios.

**Reglas de juego entre ambas:**
- Fraunces SOLO en titulares (H1–H3), números grandes y frases-gancho. Nunca en párrafos.
- Manrope para todo lo demás. Eyebrows/kickers en Manrope 700 con tracking amplio.
- Contraste de escala agresivo: H1 clamp(3.2rem→7rem) vs body 1rem — ese salto es lo que "llama la atención".
- Itálica de Fraunces para la palabra emocional del titular (1 palabra, no frases enteras).

Implementación: `next/font/google` en `layout.tsx`, swap de variables `--font-display` y `--font-sans` en `globals.css` (Cormorant se retira o queda solo en citas del universo Elara).

---

## 3 · Landing pages dedicadas para Google Ads

**Regla de oro (Quality Score → CPC más barato):** el anuncio, la URL, el H1 y el CTA dicen LO MISMO. Cada campaña → su landing. Sin menú completo, sin fugas, un solo objetivo.

### Nuevas rutas `/lp/*` (separadas de /servicios, que siguen para SEO)
| Landing | Keyword madre (ES) | H1 borrador |
|---|---|---|
| `/lp/automatizaciones` | automatizar negocio / automatización de procesos para pymes | "Automatizá tu negocio: menos trabajo manual, cero clientes perdidos" |
| `/lp/paginas-web` | diseño de páginas web que venden / landing page para negocio | "Tu página web lista para vender, no solo para verse bonita" |
| `/lp/google-ads` | agencia google ads / campañas google ads para pymes | "Campañas de Google Ads que se pagan solas" |

### Anatomía de cada landing (misma plantilla)
1. **Hero:** H1 = promesa con keyword · subtítulo con dolor concreto · CTA único ("Pedir diagnóstico gratis") · foto Evelyn (confianza humana)
2. **3 dolores → 3 soluciones** (bullets escaneables, Manrope)
3. **Cómo funciona** (3 pasos, versión mini del Ver/Analizar/Crear/Lanzar)
4. **Prueba:** caso val-débarras con resultado + foto
5. **Precio ancla:** "Desde 450 €" (filtra curiosos, ahorra clics malos)
6. **FAQ corto** (4 preguntas — también alimenta SEO)
7. **CTA final + formulario embebido** (el de /descubrimiento, mismo API)
- **Sin nav superior** (solo logo → home) · footer mínimo legal
- Velocidad: imágenes AVIF/WebP, sin slide inmersivo aquí (peso)

### Convención de links y medición
- Ads SIEMPRE → `/lp/*` con UTM: `?utm_source=google&utm_medium=cpc&utm_campaign={campaña}`
- Home y orgánico → `/servicios/*`
- Conversión = submit del formulario → página `/gracias` (allí dispara el tag de conversión)
- Google Ads: 1 campaña por servicio, grupos de anuncios por intención, concordancia de frase, negativas compartidas ("gratis", "curso", "empleo", "plantilla")

---

## 4 · SEO técnico y on-page (checklist)

- [ ] `title` + `meta description` únicos por página (hoy el layout global manda)
- [ ] H1 único por página con keyword (hoy algunos duplican jerarquías)
- [ ] `sitemap.xml` + `robots.txt` (Next: `app/sitemap.ts`, `app/robots.ts`)
- [ ] Schema.org `ProfessionalService` (nombre, área: España/Suiza/LATAM, servicios, fundadora) en JSON-LD
- [ ] Canonical en todas; `noindex` en `/lp/*` (son para Ads, evitan duplicado con /servicios)
- [ ] OG image por página clave (tenemos la base 1200×630)
- [ ] `alt` descriptivos en todas las fotos (revisar los actuales)
- [ ] Core Web Vitals: `next/image` en fotos que aún usan `<img>`, `priority` solo en hero
- [ ] Google Search Console + GA4 conectados; eventos `cta_click` → conversiones

---

## 5 · Embudo completo (funnel)

```
ATENCIÓN     Google Ads (/lp/*) · SEO (/servicios/*) · IG/linktree
   ↓
INTERÉS      Landing: dolor → solución → prueba (caso real) → precio ancla
   ↓
DECISIÓN     Diagnóstico GRATIS 20 min (fricción casi cero, alto valor percibido)
   ↓
ACCIÓN       Formulario /descubrimiento → email automático → llamada
   ↓
POSTVENTA    Caso de estudio + testimonio → alimenta la siguiente campaña
```

Lead magnet futuro (MOFU): mini-guía "5 automatizaciones que ahorran 10 h/semana a un negocio pequeño" → captura email → secuencia Resend.

---

## 6 · Plan de trabajo por fases

| Fase | Qué | Resultado |
|---|---|---|
| **F1** | Tipografía Fraunces + Manrope en todo el sitio | El sitio "llama la atención" ya |
| **F2** | Plantilla `/lp/` + landing **automatizaciones** (la fuerte) | Primera campaña lista |
| **F3** | SEO técnico completo (checklist §4) | Base orgánica sólida |
| **F4** | Landings **paginas-web** y **google-ads** | Las 3 campañas cubiertas |
| **F5** | GA4 + conversiones Ads + Search Console | Medición real de CPA |
| **F6** | Campañas en Google Ads (estructura §3) | Tráfico pagado ON |
| **F7** | Assets faltantes (tarjeta 03, covers) + lead magnet | Embudo completo |

Orden pensado para que cada fase deje algo usable YA sin esperar la siguiente.
