# Plan de cierre · Embudo completo (estudio + FL)

> Actualizado: 25 julio 2026. Objetivo: dejar el sitio listo para captar clientes
> (Ads, orgánico y plataformas freelance) con un gancho de **pre-análisis didáctico →
> sesión estratégica paga (20–25 CHF)**.

---

## 0 · Embudo canónico (nuevo)

```
ATENCIÓN
  Google Ads /lp/*  ·  SEO /servicios/*  ·  FL (Upwork/Malt/…)  ·  IG/linktree
        ↓
INTERÉS
  Landing madre (servicio) o hija (paquete) o libro
  → CTA único: “Hacer mi pre-análisis”
        ↓
PRE-ANÁLISIS (gratis, didáctico)
  /descubrimiento  — wizard por pasos
  Evelyn recibe respuestas + URL + contexto
        ↓
ENTREGA DE VALOR (async)
  Evelyn manda breve lectura: qué ve, fugas, 2–3 movimientos posibles
        ↓
SESIÓN ESTRATÉGICA (paga)
  15–20 min · 20–25 CHF
  Comparte resultados + mini-estrategia
        ↓
PROYECTO
  Si hay fit → cotización Arranque / Pro / A medida
```

**Regla de precio del gancho:** la sesión no es “diagnóstico gratis de 20 min”.
Es un **producto de entrada con valor** (pre-análisis gratis + sesión 20–25 CHF).
El gratis captura; el pago filtra y paga tu tiempo.

---

## 1 · Mapa de landings a construir

### A · Madres (Ads + FL) — `/lp/*` sin nav, un solo CTA

| Ruta | Estado | Keyword madre |
|---|---|---|
| `/lp/automatizaciones` | ✅ existe | automatizar negocio |
| `/lp/paginas-web` | ❌ falta | diseño páginas web que venden |
| `/lp/landing-pages` | ❌ falta | landing page para campañas |
| `/lp/google-ads` | ❌ falta | google ads para pymes |

### B · Hijas (paquetes de OFERTA_SERVICIOS) — `/lp/[servicio]/[paquete]`

**Automatizaciones**
| Ruta | Paquete | Ancla |
|---|---|---|
| `/lp/automatizaciones/arranque` | Arranque · 1 flujo | 450 € |
| `/lp/automatizaciones/pro` | Pro · hasta 4 flujos + IA | 1.400 € |
| `/lp/automatizaciones/a-medida` | A medida | desde 3.200 € |

**Webs**
| Ruta | Paquete | Ancla |
|---|---|---|
| `/lp/paginas-web/landing-unica` | Landing Única | 650 € |
| `/lp/paginas-web/sitio-negocio` | Sitio Negocio | 1.900 € |
| `/lp/paginas-web/sitio-ads` | Sitio + Ads | 3.400 € |

**Google Ads**
| Ruta | Paquete | Ancla |
|---|---|---|
| `/lp/google-ads/setup` | Setup inicial | 450 € |
| `/lp/google-ads/gestion` | Gestión mensual | 350 €/mes |

> `/servicios` y `/servicios/[slug]` siguen para SEO/orgánico. Las `/lp/*` son
> para Ads + FL (noindex, sin fugas de menú).

### C · Libros / productos digitales — `/lp/libros/[slug]`

| Ruta | Producto | Estado producto |
|---|---|---|
| `/lp/libros/7-dias-de-elara` | Lead magnet gratis | ✅ PDF existe |
| `/lp/libros/ciclo-nova-del-regreso` | Ebook pago 27–37 € | en producción |

Mientras Hotmart no esté, el CTA del pago apunta a waitlist / pre-análisis
“quiero el ebook + sistema”.

---

## 2 · Pre-análisis didáctico (`/descubrimiento`)

Sustituir el form “todo en una página” por **wizard de 5 pasos**:

| Paso | Título | Qué captura | Por qué es didáctico |
|---|---|---|---|
| 1 | Vos y tu negocio | nombre, email, qué vendés, dónde (web/IG) | contexto |
| 2 | Cómo llegan hoy los clientes | canal principal, volumen, si se pierden leads | detecta fuga |
| 3 | Qué pasa después del primer contacto | respuesta manual? CRM? Excel? WhatsApp? | detecta caos operativo |
| 4 | Tu sitio / presencia | URL + qué creés que falla (checklist) | material para pre-análisis |
| 5 | Objetivo y ritmo | qué querés en 90 días + presupuesto banda | califica |

Al enviar:
1. Guarda lead (API actual `/api/discovery` + email Resend).
2. Página `/gracias` explica: “Reviso tu caso → te mando el pre-análisis → si te sirve, agendamos sesión 20–25 CHF”.
3. Evelyn responde con plantilla de pre-análisis (ver §4).

CTA en todo el sitio: **“Hacer mi pre-análisis”** (no “diagnóstico gratis 20 min”).

---

## 3 · Sesión estratégica paga (20–25 CHF)

Producto de entrada:

- **Nombre:** Sesión estratégica · 20 min  
- **Precio:** 25 CHF (Suiza) / equivalente ~25 € si el lead es ES/LATAM  
- **Incluye:** revisión de lo que mandaron + 2–3 movimientos concretos + siguiente paso claro  
- **No incluye:** implementación del proyecto  

Pago: Stripe Payment Link o Calendly+pago (mínimo viable hoy: link Stripe + Calendly).
URL canónica sugerida: `/sesion-estrategica` (landing corta) → pago → agenda.

---

## 4 · Plantilla de pre-análisis (Evelyn → cliente)

Asunto: `Tu pre-análisis · [negocio]`

```
Hola [nombre],

Revisé lo que me contaste de [negocio] y tu presencia ([url/IG]).

LO QUE VEO
1. …
2. …
3. …

LA FUGA PRINCIPAL
…

2–3 MOVIMIENTOS QUE HARÍA YO
1. …
2. …
3. …

SI QUERÉS SEGUIR
Podemos hacer una sesión estratégica de 20 min (25 CHF) donde te muestro
esto en vivo y te dejo una mini-ruta. Si después querés que lo construya,
cotizamos el paquete (Arranque / Pro / A medida).

Agenda aquí: [link]
```

---

## 5 · Plataformas FL (clientes)

Perfil + propuesta corta apuntan siempre al mismo gancho:

1. Portfolio `/portfolio` + caso val-débarras  
2. Link fijo: `soyelaranova.com/lp/automatizaciones?utm_source=upwork&utm_medium=fl`  
   (o la LP del servicio del brief)  
3. En la propuesta FL: “Antes de call larga, te hago un pre-análisis con lo que me pases
   de tu flujo/web. Si hay fit, sesión 20 min.”  

Kit de copy: `docs/KIT_OUTREACH.md` (actualizar con UTMs y nuevo CTA).

Plataformas objetivo (orden):
1. Malt / Malt.fr (Suiza/FR/ES)  
2. Upwork (automatizaciones + Next.js)  
3. LinkedIn outreach (no es FL, pero mismo gancho)

---

## 6 · Orden de ejecución (bloques técnicos)

No es un calendario: es el orden en que el código desbloquea el embudo.

### Bloque 1 — Fundación LP (P0)
- Extraer plantilla reutilizable `LpServicePage` desde `/lp/automatizaciones`
- Datos de madres + hijas en `lib/lp-offers.ts` (precios de OFERTA_SERVICIOS)
- Crear madres faltantes: `paginas-web`, `landing-pages`, `google-ads`
- Sitemap + noindex en `/lp/*`

### Bloque 2 — Hijas (P0)
- Rutas dinámicas `/lp/[service]/[pack]` o páginas estáticas por paquete
- CTA → `/descubrimiento?servicio=&paquete=`

### Bloque 3 — Wizard pre-análisis (P0) ✅
- Rehacer `discovery-form` como pasos didácticos ✅ (5 pasos)
- Actualizar copy home/nav/LP: “Hacer mi pre-análisis” ✅
- `/gracias` con siguiente paso → sesión 25 CHF ✅
- Landing `/sesion-estrategica` (pago + agenda) ✅ (pago Stripe pendiente)

### Bloque 4 — Libros (P1) ✅ rutas
- `/lp/libros/7-dias-de-elara` (opt-in vía pre-análisis) ✅
- `/lp/libros/ciclo-nova-del-regreso` (waitlist) ✅
- Hotmart live: pendiente

### Bloque 5 — FL + medición (P1) ✅ docs
- UTMs en KIT_OUTREACH ✅
- Eventos CTA: `sesion_pago`, `sesion_calendly`, `preanalisis_step`
- Stripe/Calendly: env vars + fallback WhatsApp ✅ (activar links en Vercel)

### Bloque 6 — Pulido (P2)
- Fotos LP únicas (sin repetir hero)
- Covers libros
- Stripe/Calendly live

---

## 7 · Definición de “página completa”

Checklist de done:

- [x] 4 LPs madre live  
- [x] 8 LPs hija (paquetes) live  
- [x] Wizard pre-análisis didáctico live  
- [x] `/sesion-estrategica` con precio 25 CHF y CTA de agenda/pago  
- [x] Home + nav + LPs apuntan al nuevo embudo (ya no “diagnóstico gratis 20 min” como promesa de call)  
- [x] 2 LPs de libros (aunque sea waitlist)  
- [x] Kit FL con links UTM + propuestas Upwork/Malt  
- [x] Build verde + deploy main  
- [ ] Stripe Payment Link + Calendly en Vercel (acción tuya)  
- [ ] Hotmart Ciclo Nova (cuando el ebook esté listo)  

---

## 8 · Decisiones lockeadas

| Tema | Decisión |
|---|---|
| Moneda sesión | **25 CHF** (lead CH) · mostrar ~25 € para ES/LATAM en copy |
| Duración | 15–20 min |
| Pre-análisis | gratis, async, didáctico |
| Call larga gratis | **no** — reemplazada por sesión paga |
| SEO vs Ads | `/servicios/*` SEO · `/lp/*` Ads/FL |
| Voz | Evelyn en todo el embudo comercial |
