# Inventario de Assets · Relanzamiento Agencia

> Fotos y assets visuales para relanzar **Elara Nova** como agencia dev/automatización.
> Voz líder: **Evelyn** (ingeniera, foto real). **Elara** (3D Pixar) = solo acento creativo.
> Creado: 2026-07-09 · Objetivo: sitio que VENDE el lunes 2026-07-13.
>
> **Leyenda de prioridad:**
> - **P0** = imprescindible para tener un sitio que venda el lunes. Sin esto no se lanza.
> - **P1** = lo pule y sube conversión; se puede hacer lunes/martes.
> - **P2** = nice-to-have; después del lunes.
>
> Herramienta de generación IA: **claude-banana** (Gemini). Fotos reales: móvil de Evelyn.

---

## 1 · Assets que YA existen (reutilizar, NO recrear)

### Fotos reales de Evelyn — ✅ **ya las tiene**
| Archivo | Ruta | Dimensiones | Uso propuesto |
|---|---|---|---|
| `evelyn_pro_hero.jpg` | `web/public/_assets/photos/` | 896 × 1200 (retrato) | Foto profesional de Evelyn — candidata a hero/about |
| `evelyn_pro_perfil.jpg` | `web/public/_assets/photos/` | 896 × 1200 (retrato) | Retrato de perfil — bio / "sobre mí" |

> ⚠️ Ambas son **retrato vertical**. El slot hero de la home (`hero-evelyn-elara.webp`) está diseñado horizontal (2400×1500) y el bloque "Trabaja conmigo" pide horizontal (2000×1600). Ver §2: puede que Evelyn necesite **una toma horizontal** o recomponer el layout. Revisar antes de decidir si hace falta foto nueva.

### Logos y marca — ✅ existen
| Archivo | Ruta | Dimensiones | Notas |
|---|---|---|---|
| `logo-elara-nova.png` | `web/public/images/` | 512 × 512 | Logo principal |
| `sello-elara-nova.png` | `web/public/images/` | 1254 × 1254 | Sello/emblema |
| `sello-elara-nova-oscuro.png` | `web/public/images/` | — | Variante oscura |
| `firma-elara.png` | `web/public/brand/` | 3600 × 3600 | Firma (alta res) |
| `firma-elara-morada.png` | `web/public/brand/` | — | Firma morada |
| Sistema de logo V1 | `03_VISUAL_KIT/Logo_V1_Refinado/` | varios | `01_v1_refinado_PRINCIPAL.png`, invertido crema, avatar compacto, cover FB, separador |

### Avatar Elara (3D) — ✅ existe
| Archivo | Ruta | Dimensiones | Notas |
|---|---|---|---|
| `elara.jpg` | `web/public/elara/avatar/` | 1024 × 1024 | Avatar Elara 3D — usable como acento |
| `mariposa.png` | `web/public/elara/stickers/` | — | Sticker mariposa |
| Stickers Pixar 3D | `03_VISUAL_KIT/Stickers/` | 88 stickers | Incluye `G04_luna_pixar_3d.png`, zorro/búho cósmico, etc. Estética mística vieja — usar con MUCHA moderación como acento. |

### OG / social — ✅ existen (pero del branding viejo)
| Archivo | Ruta | Notas |
|---|---|---|
| `og-portfolio.jpg` | `web/public/_assets/photos/` | OG del portfolio B2B viejo — revisar si sirve o rehacer |
| `og-cv.jpg` | `web/public/_assets/photos/` | OG del CV — probablemente rehacer para agencia |

### ❄️ Existen pero son del branding MÍSTICO viejo (NO usar en la agencia)
Toda la carpeta `web/public/images/` con `hero-elara-noche.png`, `herramienta-*`, `oraculo-*`, `carta-natal-*`, `chakras-*`, `elara-durmiendo/meditando/yoga/pintando/cocinando`, `circulo-*`, etc. Son de la marca mística. **No reciclar** en la web de agencia salvo Elara como acento puntual.

---

## 2 · Fotos REALES que Evelyn tiene que tomar/conseguir

> Se toman con el móvil. Luz natural de ventana, fondo limpio y ordenado. Ropa profesional pero cercana. Evitar filtros pesados.

### ☐ FOTO-01 · Hero horizontal — Evelyn trabajando · **P0**
- **Propósito:** protagonista del hero de la home. La cara de la agencia.
- **Dónde se usa:** slot `hero-evelyn-elara.webp` en `web/app/page.tsx` (home-hero__visual).
- **Encuadre/orientación:** **horizontal (landscape)**, plano medio. Evelyn frente al portátil, mirada a cámara o al trabajo, con espacio negativo a un lado para el texto del hero.
- **Resolución:** exportar ≥ 2400 × 1500 px (ideal 3000 px de ancho para recortes).
- **Cómo tomarla:** móvil en horizontal sobre libros/trípode a la altura de los ojos. Ventana a un lado (luz suave). Escritorio ordenado: portátil, libreta, café. Regla de tercios: Evelyn a un lado, deja el otro tercio "vacío" para el titular. Toma 15–20 fotos, elige la de postura más natural.
- **Nota:** si `evelyn_pro_hero.jpg` (vertical) sirve recomponiendo el hero a dos columnas, esta foto baja a **P1**. Decisión de la sesión de código.

### ☐ FOTO-02 · Retrato bio "Trabaja conmigo / Sobre mí" · **P0**
- **Propósito:** dar cara y confianza en el bloque de autoridad ("pienso como diseñadora, construyo como ingeniera").
- **Dónde se usa:** slot `evelyn-estudio-profesional.webp` (home-work) y página `sobre-elara` / `trabaja-conmigo`.
- **Encuadre:** puede ser **vertical** (retrato editorial) — aquí **`evelyn_pro_perfil.jpg` ya sirve**. Solo tomar nueva si quiere una más "de ingeniera en acción" (frente a pantalla con código/diagrama).
- **Resolución:** ≥ 1600 × 2000 px.
- **Cómo tomarla:** medio cuerpo, manos visibles (transmite cercanía), sonrisa natural. Fondo neutro o escritorio de trabajo.
- **Estado:** cubierta por asset existente → esta línea es **P1** (opcional mejorar).

### ☐ FOTO-03 · Prueba de trabajo / "en acción" (opcional) · **P2**
- **Propósito:** foto de contexto para reforzar autoridad (pantalla con un flujo n8n/Make, o diagrama de automatización real de fondo).
- **Dónde se usa:** sección de proceso / caso de éxito, como textura de fondo o detalle.
- **Encuadre:** horizontal, detalle de manos + teclado + pantalla con un flujo visible (no legible, solo evocador).
- **Resolución:** ≥ 2000 × 1200 px.
- **Cómo tomarla:** cenital o de lado, enfocando pantalla/manos. Puede recrearse en 2 minutos abriendo un flujo real.

---

## 3 · Assets a GENERAR (con claude-banana / IA)

> Formato preferido: **SVG** para iconos/diagramas simples (nítidos, ligeros); **PNG con transparencia** para el acento Elara 3D; **WebP** para imágenes ricas; **PNG** para OG (compatibilidad social).

### ☐ IA-01 · OG / social share image (agencia) · **P0**
- **Descripción/brief:** imagen de compartir para WhatsApp/LinkedIn/Twitter al enviar el link a prospectos. Fondo claro de marca (paleta refrescada), logo Elara Nova, titular corto **"Automatizo y construyo lo que tu negocio necesita para vender más"**, foto o silueta de Evelyn a un lado, acento sutil 3D (luna/estrella). Limpio, profesional, legible en miniatura.
- **Dimensiones:** 1200 × 630 px.
- **Formato:** PNG (o JPG).
- **Dónde va:** `web/public/_assets/photos/og-home.png` + `<meta property="og:image">` en `app/layout.tsx`. Crítico porque el sitio se venderá enviando el link.

### ☐ IA-02 · Favicon / app icon · **P0**
- **Descripción:** derivar del `logo-elara-nova.png` / sello existente. Marca "E" o luna simplificada, legible a 32px.
- **Dimensiones:** 512 × 512 master → exportar 32×32, 180×180 (apple), `favicon.ico`.
- **Formato:** PNG + ICO (Next: `app/icon.png` y `app/apple-icon.png`).
- **Dónde va:** `web/app/` (ya existe `favicon.ico` viejo — validar que sea la marca correcta, si no regenerar). **Barato:** probablemente ya se puede derivar del logo existente, casi P1.

### ☐ IA-03 · Iconos de las 3 líneas de servicio · **P1**
- **Descripción:** set de 3 iconos coherentes para Automatizaciones (nodos conectados / engranaje con flechas), Webs/Landing (ventana de navegador + cursor), Google Ads (diana/gráfico ascendente). Estilo línea fina, un solo color de acento, consistentes entre sí. NO místico.
- **Dimensiones:** 128 × 128 (viewBox 24×24).
- **Formato:** **SVG**.
- **Dónde va:** sección `#servicios` de la home / página `servicios`. Nota: ya existe `components/elara-icons.tsx` (48KB de iconos) — **revisar primero si ya hay iconos usables** antes de generar.

### ☐ IA-04 · Diagrama de flujo de automatización · **P1**
- **Descripción:** ilustración simple del flujo estrella: **Formulario web → CRM/hoja → WhatsApp/email automático → aviso a ti**. Cajas + flechas, limpio, estilo diagrama de ingeniería (no infantil). Refuerza el "producto estrella".
- **Dimensiones:** 1600 × 900 px (o SVG responsive).
- **Formato:** **SVG** (ideal) o WebP.
- **Dónde va:** sección de automatizaciones / cómo funciona.

### ☐ IA-05 · Elara 3D — acento creativo · **P2**
- **Descripción:** 1–2 renders del avatar Elara (Pixar 3D) en pose ligera para guiños de marca (footer, 404, sección de productos pequeños). Reutilizar `elara.jpg` existente si alcanza. Generar nuevo solo si se quiere pose específica (ej. Elara señalando un CTA).
- **Dimensiones:** 800 × 800 px, fondo transparente.
- **Formato:** PNG.
- **Dónde va:** acentos puntuales. **No protagoniza.**

### ☐ IA-06 · Textura/patrón de fondo de marca · **P2**
- **Descripción:** patrón sutil (constelación fina / grid suave) en paleta clara para secciones. Opcional; el CSS actual ya tiene tratamientos.
- **Formato:** SVG/WebP tileable.

---

## 4 · Screenshots del caso de éxito val-débarras

> Repo local: `/Users/evelynpatino/Documents/elara-nova/val-debarras` · **Sitio LIVE:** `https://www.val-debarras.ch/`
> Es una web multi-cantón (VD, GE, JU, NE, VS, FR) con formulario de presupuesto (`#devis`), testimonios y logos de prensa (RTS, 20min). Tomar los screenshots del **sitio en producción** para que se vean reales y con datos.

| # | Screenshot | Qué capturar | Orientación / tamaño | Prioridad |
|---|---|---|---|---|
| SC-01 | **Hero desktop** | Home `index.html` arriba: hero con van + titular + CTA. La "cara" del caso. | Desktop 1440 × 900 (o full-page 1440 ancho) | **P0** |
| SC-02 | **Vista móvil** | La misma home en viewport móvil (390 × 844). Demuestra responsive. | Móvil vertical 390 × 844 | **P0** |
| SC-03 | **Landing por cantón** | Una landing de cantón, ej. `ge-maison.html` o `vd-succession.html` — muestra el sistema multi-zona (el argumento de venta "landing por ciudad/servicio"). | Desktop 1440 ancho | **P1** |
| SC-04 | **Formulario de captura** | Sección `#devis` (formulario de presupuesto) — prueba la captura de leads automatizada. | Desktop o recorte 1200 ancho | **P1** |
| SC-05 | **Prueba social / prensa** | Franja de logos de medios (RTS, 20min) + testimonios. Refuerza credibilidad. | Recorte horizontal | **P2** |
| SC-06 | **Framing de resultados** | Mockup/collage "antes-después" o marco con métrica ("landings por 6 cantones + Ads + captura automática"). Se compone, no es screenshot puro. | 1600 × 1000 | **P2** |

- **Dónde van:** sección de caso de éxito de la home / `servicios`. Guardar en `web/public/_assets/casos/val-debarras/`.
- **Formato:** WebP (o PNG) optimizado.
- **Tip:** usar el sitio live para SC-01–05; para SC-02 usar modo responsive del navegador. Ya existen imágenes propias del proyecto (`images/van-*.jpg`, `images/*-hero.jpg`) por si se quiere un collage sin screenshot.

---

## 5 · Tabla resumen

| Asset | Tipo | Dimensiones | Formato | Prioridad | Dónde se usa |
|---|---|---|---|---|---|
| `evelyn_pro_hero.jpg` | ya existe | 896 × 1200 | JPG | — | Home hero / bio (retrato) |
| `evelyn_pro_perfil.jpg` | ya existe | 896 × 1200 | JPG | — | Bio / sobre mí |
| `logo-elara-nova.png` | ya existe | 512 × 512 | PNG | — | Nav / marca |
| `sello-elara-nova.png` | ya existe | 1254 × 1254 | PNG | — | Sello / footer |
| `elara.jpg` (avatar 3D) | ya existe | 1024 × 1024 | JPG | — | Acento Elara |
| **FOTO-01 · Hero horizontal Evelyn** | foto real | ≥ 2400 × 1500 | JPG→WebP | **P0** | Home hero |
| FOTO-02 · Retrato bio | foto real | ≥ 1600 × 2000 | JPG→WebP | P1 (cubierta) | Trabaja conmigo / sobre |
| FOTO-03 · En acción | foto real | ≥ 2000 × 1200 | JPG→WebP | P2 | Proceso / textura |
| **IA-01 · OG home agencia** | IA | 1200 × 630 | PNG | **P0** | og:image (layout) |
| IA-02 · Favicon/app icon | IA (derivado) | 512 → 32/180 | PNG/ICO | P0/P1 | `app/icon.png`, favicon |
| IA-03 · Iconos de servicios (×3) | IA | 128 × 128 | SVG | P1 | Sección servicios |
| IA-04 · Diagrama de flujo | IA | 1600 × 900 | SVG | P1 | Sección automatizaciones |
| IA-05 · Elara 3D acento | IA | 800 × 800 | PNG (alpha) | P2 | Footer / 404 |
| IA-06 · Textura de marca | IA | tileable | SVG/WebP | P2 | Fondos |
| **SC-01 · val-débarras hero desktop** | screenshot | 1440 × 900 | WebP | **P0** | Caso de éxito |
| **SC-02 · val-débarras móvil** | screenshot | 390 × 844 | WebP | **P0** | Caso de éxito |
| SC-03 · Landing por cantón | screenshot | 1440 ancho | WebP | P1 | Caso de éxito |
| SC-04 · Formulario `#devis` | screenshot | 1200 ancho | WebP | P1 | Caso de éxito |
| SC-05 · Prueba social/prensa | screenshot | recorte | WebP | P2 | Caso de éxito |
| SC-06 · Framing resultados | screenshot/collage | 1600 × 1000 | WebP | P2 | Caso de éxito |

### Recuento P0 (imprescindible para vender el lunes): **4 assets**
1. **FOTO-01** — hero horizontal de Evelyn (o confirmar que la vertical existente sirve recomponiendo el hero).
2. **IA-01** — OG/social share image (el sitio se vende enviando el link → tiene que verse pro en WhatsApp/LinkedIn).
3. **SC-01 + SC-02** — screenshots hero desktop + móvil de val-débarras (la única prueba de trabajo real).

> Nota: IA-02 (favicon) es P0 técnico pero probablemente **ya derivable** del logo existente sin generar nada nuevo.

---

## Notas operativas
- Guardar los assets nuevos en: fotos → `web/public/_assets/photos/`; caso val-débarras → `web/public/_assets/casos/val-debarras/`; iconos/diagramas → `web/public/_assets/` o como componentes SVG.
- Convertir fotos finales a **WebP** para peso (el proyecto ya usa `.webp` en los slots).
- El sitio está en **modo mantenimiento** (`web/proxy.ts`); estos assets alimentan la home nueva antes de quitarlo (Sprint 2–3).
- Revisar `components/elara-icons.tsx` antes de generar IA-03 (puede que ya existan iconos).
