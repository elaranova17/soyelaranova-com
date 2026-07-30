# Plan maestro por sprints — Elara Nova by Evelyn Patiño

> **Actualizado:** 30 julio 2026 · **Fuente de contexto:** sesión de descubrimiento 30 jul (pivot marca personal creadora)
> **Cómo se usa:** este es el tablero de tareas chuleables. Evelyn chulea diciéndole a Claude "chulea X" o editando el archivo. Claude lo actualiza al final de cada sesión de trabajo.
> **Regla de oro:** UNA prioridad por sprint. Lo que no cabe, va al sprint siguiente — no se mete a la fuerza.

---

## El norte (para no perderse)

**La marca es Evelyn.** Enseñamos automatización con IA en redes (TikTok/IG/reels) al nicho **IT Girly** — tecnología para mujeres que fueron excluidas de este mundo. Vendemos **plantillas/agentes n8n** (gratis → premium → packages), luego ebooks y cursos pequeños. Los servicios freelance/agencia **no mueren**: quedan en la web, pero NO se promocionan activamente mientras TPC Aviation ocupe la capacidad (~hasta ago-sep 2026). Cuando la demanda por DM supere lo que podemos atender → tercerizar con amigos de confianza.

**Cómo converge todo:**
```
TPC (paga las cuentas hoy)
   └─→ tiempo libre limitado → por eso: contenido ADELANTADO 1 mes
Marca personal (videos) → audiencia → DMs → plantillas gratis (email) → premium/packages
   └─→ los que quieren que se lo hagan → servicios freelance (ya montados en la web)
   └─→ marcas que ven los videos → UGC (línea de ingreso paralela de Evelyn)
El proceso mismo de crear esta marca = materia prima de contenido
   └─→ candidata a plantilla: "Branding y descubrimiento de tu marca" (meta-plantilla)
```

**Frases ancla:** "Menos a mano." + "Mirá todo lo que siempre fuiste capaz de ser." · Intro de video: *"Bienvenidas a un capítulo más de Menos a Mano, con Elara Nova by Evelyn Patiño."*

---

## ⚠️ Crítica honesta (los nudos que hay que desatar — pedida por Evelyn)

1. **Sobrecarga simultánea.** TPC + identidad nueva + plantillas + web + grabar 1 mes de contenido + portafolio UGC + 2 contrataciones = quemarse (lo que dijiste que NO querés). Solución: sprints secuenciales abajo. La "semana de grabación" SOLO funciona si identidad, guiones y plantillas están cerradas antes.
2. **La "persona de marketing" se contradice con tu propio plan.** Dijiste que la estrategia de contenido la armás con Claude. Contratar marketing ahora = gasto fijo sin datos. → Primera contratación: **solo la editora, por paquete de videos (por proyecto), NO salario mensual**. Marketing/CM: después del lanzamiento, con datos reales.
3. **UGC puede volverse la tercera empresa.** Portafolio UGC sí (esta semana, cámara caliente). Venta activa de UGC a marcas: **después del lanzamiento**. Si no, es TPC + Elara + UGC a la vez.
4. **El embudo técnico está roto HOY:** Resend sin dominio verificado → el auto-reply al prospecto falla. Si lanzamos el email-gate así, regalamos las plantillas sin capturar el email o el email nunca llega. **P0 antes del lanzamiento.**
5. **El avatar 3D fue borrado del repo** en la limpieza de julio (`web/public/elara/`). Rescatar del historial de git o regenerar antes de usarlo como brandmark.
6. **No hay plataforma de pago activa** (Stripe payment link y Hotmart quedaron en TODO). Sin eso no existe "versión premium". Decisión en Sprint 2: Stripe payment links (ya hay env vars preparadas) vs Gumroad/Lemon Squeezy.
7. **Decisión de paleta bloquea todo lo visual:** ¿entra el rosa Y2K a la paleta oficial o el mundo girly se construye desde lila/ciruela/oro? Nada de logo/íconos/web se puede cerrar antes de esto.
8. **Nicho "para mujeres" como ángulo editorial, no como exclusión comercial:** la web debe gritar IT girl y seguir cerrando clientes B2B (vos misma lo dijiste: girly SIN dejar de vender).

---

## Sprint 0 · "Fundaciones" — esta semana (30 jul → 5 ago)

**Meta del sprint:** identidad decidida + casa ordenada. Nada de grabar contenido de marca todavía (excepto portafolio UGC ya agendado).

### Identidad de marca (con skill `elara-designer` + Figma/claude-banana)
- [x] **Decisión de paleta — CERRADA 30 jul: "C1 · Híbrida Y2K ciruela, sin dorado" (5 colores)**
  - Crema `#F6EFE3` (base, ~60%) · Rosa bebé `#FFD9E8` · Rosa chicle `#E85D9F` (impacto) · Lila `#9A66D9` (impacto) · Ciruela `#4A2D57` (texto/profesional) — proporción 60 crema / 30 rosa+lila / 10 ciruela
  - El dorado `#B89A58` SALE de la paleta. El brillo Y2K (glitter, chrome, destellos) vive como **textura** en stickers/subtítulos/transiciones de video — nunca como color oficial de paleta
- [x] **Brand board v3 FINAL (30 jul noche)** — `docs/brand-board.html` (autocontenido, ~675 KB): header = logo final, familia final completa (primario/nocturna/algodón/sticker/perfil con amor), paleta con proporción, tipografías, sección doodles, mascota, voz express, reglas + regla de tamaño mínimo. **ES el documento que recibe la editora.** ✅ IDENTIDAD DE MARCA CERRADA.
  - **Tipografías CERRADAS 30 jul:** display/wordmark = **Bagel Fat One** (bubble Y2K, un solo peso, solo display) · script/guiño = **Great Vibes** (continuidad) · cuerpo = **Outfit** (ya en la web). Pendiente micro-decisión: fuente de apoyo con pesos para títulos de video/subtítulos (candidata: Baloo 2). Todas Google Fonts (gratis, sin líos de licencia para editora/Canva/CapCut).
  - **Familia de lockups CERRADA 30 jul:** V2 apilada (elara rosa / nova lila / script ciruela) = **logo primario** · V3 firma cruzada (script rotado rosa) = hero web · V4 nocturna (sobre ciruela) y V5 algodón (sobre rosa bebé) = versiones de fondo · **submark**: círculo rosa chicle con "en" en Bagel Fat One crema (perfil IG/TikTok + marca de agua videos)
  - ⚠️ **LOGO v1 = TEMPORAL, NO aprobado** (Evelyn 30 jul: "no me gusta, lo dejamos como temporal"). Sirve de placeholder para no bloquear. **Feedback de Evelyn (30 jul): quiere ISOTIPO/símbolo propio, no solo tipografía.** → 3 conceptos generados en `docs/brand-assets/logo/isotipos/` (+preview.html): A `isotipo-nova.svg` (destello doble rosa+lila = la estrella que explota de brillo) · B `isotipo-corazon-click.svg` (corazón + cursor = "menos a mano, un click") · C `isotipo-e-nova.svg` (monograma "e" bubble lila con chispas sobre círculo rosa bebé). **CORRECCIÓN Evelyn (30 jul noche): el corazón-click le gusta como ASSET, NO como logo** ("me gustaba como asset pero no como logo"). → corazón-click queda como **sticker/asset oficial** (marca de agua, animaciones, doodle estrella) pero se **desmonta como isotipo del logo**. La familia v2 (`logo-v2-*.svg`, `perfil.svg`) = provisional/asset. **LOGO = ABIERTO otra vez** → v3 GENERADO (30 jul noche) en `docs/brand-assets/logo/v3/`: **A** `v3A-corazon-en-la-o.svg` (cirugía: el corazón ES la "o" de nova — el símbolo vive DENTRO de la palabra) · **B** `v3B-emblema.svg` (parche/badge oval Y2K con arcos, corazón central y destellos) · **C** `v3C-ondulado.svg` (wordmark en línea con baseline ondulada + flor). **LOGO FINAL (30 jul, "me encanta" de Evelyn): v3A4 → familia v4 en `docs/brand-assets/logo/final/`** — wordmark apilado apretado estilo sticker (contorno ciruela + sombra desplazada), **corazón-click como la "o" de nova**, flor sticker pegada a la "a" de elara, firma "by Evelyn Patiño" en diagonal abajo-derecha con halo. Archivos: logo-{primario,nocturna,algodon,sticker}.svg + isotipo.svg (favicon) + isotipo-sticker.svg + perfil.svg + familia-sheet.svg + PNGs + **logo-ilustrado.png (30 jul: versión hero generada por Evelyn en Gemini, letras verificadas, recortada transparente — para portadas/miniaturas/banners; el SVG sigue de master)**. Generador: scratchpad `gen_logo_v4.py`. **Reglas de uso:** en tamaños < ~120px usar logo SIN firma o el isotipo solo (la firma script se pierde); sticker con borde blanco = para collages sobre foto. Iteraciones previas (v1 plano, v2 isotipo encima, v3A/B/C) en `logo/` y `logo/v3/` como historia. Historia: v1 (solo letras) rechazado por simple · v2 (isotipo encima) rechazado por sentirse sticker (corazón-click queda como ASSET). Detalle de lo generado: SVGs reales generados desde las curvas de las fuentes (HarfBuzz + fontTools) en `docs/brand-assets/logo/`: `logo-primario.svg` (crema) · `logo-nocturna.svg` (ciruela) · `logo-algodon.svg` (rosa bebé) · `logo-sticker.svg` (borde blanco para collages) · `submark.svg` (círculo rosa "en" + destello) · `preview.html`. Toques custom v1: florecita 5 pétalos + destello + tracking ajustado. Script generador: scratchpad `gen_logo.py` (regenerable). Iterar con feedback de Evelyn (más custom lettering si pide).
  - **Sistema de composición COLLAGE (regla 30 jul, refs Canva de Evelyn):** técnicas canónicas → (1) cutout sticker: persona recortada con borde blanco grueso, (2) tipografía gigante entrelazada con la persona (letras delante/detrás), (3) script cruzado sobre título bold, (4) doodles/squiggles/estrellitas/coronas dibujadas, (5) scrapbook: clips, cinta, papel cuadriculado, badges de stats (para media kit UGC). NO planos centrales. Definir 3-4 plantillas de composición para posts/portadas/miniaturas — construibles en Canva (MCP conectado)
  - **Workflow de fotos CERRADO (regla 30 jul):** nunca 100% IA ("se ve falso y feo") → Claude da brief de pose con boceto de figura verde → Evelyn se fotografía (buena cámara) → refinado con Nano Banana Pro (solo edición) → cutout para collage. Pendiente: lista de poses/brief de la primera sesión de fotos Y2K
- [x] Rescatar avatar 3D Elara del historial git → HECHO 30 jul. Referencias oficiales de identidad en `docs/brand-assets/avatar/` (elara-ref-retrato.png = la mejor para cara, elara-ref-cuerpo.png, elara-avatar.jpg). Rol: mascota-acento.
- [ ] **Re-renders Y2K del avatar** — prompt pack LISTO en `docs/prompts/avatar-y2k-renders.json` (6 shots: vanity, laptop, celebrando, guiño-CTA, celular tapita, pensando — 4 con fondo limpio para cutout). ⚠️ Estado API (30 jul): key válida pegada ✓ y script edit.py parcheado ✓, PERO Google quitó imágenes del free tier de la API (`limit: 0` en todos los modelos *-image). **Decisión: generar manual en la app de Gemini con la suscripción Pro que ya se paga** → prompts copy-paste listos en `docs/prompts/avatar-y2k-PEGAR.md` (Evelyn adjunta elara-ref-retrato.png + pega bloque). Si algún día se necesita volumen: activar billing pay-as-you-go. Guardar finales en `docs/brand-assets/avatar/y2k/`.
- [x] **Sistema de íconos/doodles — HECHO 30 jul, PROPIOS (decisión Evelyn: originales, no pack comprado):** **25 SVGs** originales en la paleta oficial → `docs/brand-assets/doodles/` (planos) + **`doodles/sticker/` (versión oficial: contorno ciruela + sombra, mismo lenguaje del logo)**. Ola 2 Y2K/Legally Blonde agregada (25 total). ⚠️ **VEREDICTO EVELYN (30 jul noche): el concepto sí, la ejecución NO** ("la tienes pero no me gusta de verdad") — los SVG a código tienen techo de calidad "arte de programadora". **✅ PACK FINAL HECHO Y AUDITADO (30 jul noche): 41 stickers vía pipeline Gemini** — Evelyn generó las 3 láminas, Claude recortó con `cut_stickers_v2.py` (cajas precisas + satélites asignados a su sticker + sin intrusos) y **auditó 41/41: cero arte cortado en bordes, calidad 1:1 sin reescalar** (la v1 del recorte cortaba destellos — corregido). Copia para Evelyn en `~/Downloads/Stickers Elara Nova/`. Catalogados con nombres → **`docs/brand-assets/stickers-pack/`** (+ `catalogo.png` + láminas originales en `laminas/`). Incluye: celular tapita, chihuahua, botas plataforma, diario, tiaras, tacones, labios, gafas corazón, diamantes, cursor-pixel, anillo de caramelo, luna, cafecito, hibiscos y más. Board sección 05 actualizada. SVGs a código = histórico en `doodles/`. Prompt bonus para logo en este estilo agregado a `stickers-pack-PEGAR.md` (Evelyn quiere probar el logo generado — revisar letra por letra al elegir).
- [x] **VOZ enriquecida con el ADN verbal REAL de Evelyn (30 jul):** nueva sección en `docs/VOZ.md` capturada de las sesiones de hoy — muletillas ("siento que", "¿me entendés?", "súper", diminutivos, "de una", "darle amor", "que de verdad funcione"), regla del **"NOSOTRAS"** (marca en femenino plural; "yo" solo B2B; audiencia "Bienvenidas/¿listas?"), creencias-tema para hooks, y estilo de feedback. Sección 06 del brand board actualizada con esto + CTA "comentá PLANTILLA" + guía de subtítulos.
- [x] Actualizar `docs/brand.md` — HECHO 30 jul: sección "Dirección vigente" al inicio (negocio, paleta C1, tipos, isotipo, collage, reglas fotos); look CapCut viejo queda solo para mantener la web desplegada hasta Sprint 2

### Organización y finanzas
- [x] Plan maestro por sprints creado (este archivo)
- [ ] **Auditoría de gastos**: export de tarjeta/banco últimos 90 días → llenar `docs/finanzas.md` §2 (qué se usa, qué se cancela, total mensual real)
- [ ] Decidir dónde chulear interactivamente: este archivo (fuente de verdad) + ¿espejo en Notion? (Evelyn decide)

### UGC (ya agendado por Evelyn)
- [ ] Grabar videos del portafolio UGC "esta semanita"

### TPC (continuo, prioridad de ingreso)
- [ ] Seguir facturación/handover según cerebro TPC (no se detiene por Elara)

---

## Sprint 1 · "Identidad final + guiones" (≈ 6 → 12 ago)

**Meta:** guía de marca entregable a la editora + el mes de contenido escrito en papel.

- [ ] Brand board FINAL aprobado por Evelyn (logo, paleta, tipos, íconos, avatar, usos)
- [ ] Guía para editora (PDF/Notion): paleta, logos, fuentes, estilo de subtítulos, ejemplos de ritmo
- [x] `docs/ESTRATEGIA_REDES.md` — HECHO 30 jul: plataformas (solo IG+TikTok), pilares reciclados al nicho, formatos ancla, mix edición 70/30, embudo DM completo, sistema "1 mes adelantada", cadencia, rutina post-lanzamiento, lista de NO
- [ ] **Definir cantidad de videos del mes + mix de edición** (sencilla vs premium) → esto define el presupuesto y el brief de la editora
- [ ] **Hooks + guiones del mes completo** (≈20-30 videos): tutoriales "te automatizo X en 5 min", antes/después, storytimes, intro "Menos a Mano" (skills `elara-copywriter` + `elara-marketing`). Investigación de contenido viral + hooks = SIEMPRE Evelyn + Claude, nunca se delega.
- [ ] Validar con datos qué plantillas buscan más (skill `elara-market-research`) → elegir las 2-3 primeras (candidatas: finanzas personales, correo, Excel, branding-de-tu-marca)
- [ ] **Búsqueda editora Colombia**: shortlist 3-5 candidatas (las que Evelyn ya vio + búsqueda), brief + prueba pagada con material del portafolio UGC
- [x] `docs/EQUIPO.md` — HECHO 30 jul: perfil editora colombiana, señales de alerta, rangos COP por video (validar con cotizaciones reales), prueba pagada de 2 videos, brief de arranque, roles futuros condicionados a hitos. **Scope BLINDADO de la editora: SOLO edita** (videos UGC + contenido de redes; cortes sencillos y premium según mix definido). Colombiana para que entienda el habla/expresión de Evelyn y clave los sonidos/trends. NO hace: marketing, hooks, estrategia, investigación de virales — eso es Evelyn + Claude. La guía de marca (paleta, logos, estilo) se le entrega UNA vez al inicio; luego ya la tiene interiorizada.

## Sprint 2 · "Producto + web lista para recibir" (≈ 13 → 19 ago)

**Meta:** que cuando alguien comente en un video, haya adónde mandarla.

- [ ] Construir plantillas n8n elegidas: versión **gratis** + versión **premium** de cada una (probadas de verdad)
- [ ] Página `/plantillas` en la web (reemplaza el escaparate vacío de "Recursos") con email-gate
- [ ] **Fix Resend**: verificar dominio soyelaranova.com → auto-reply y entrega de plantillas funcionando (P0)
- [ ] Plataforma de pago premium: decidir y activar (Stripe payment links vs Gumroad) — precio de entrada + package/bundle definidos (skill `elara-ebooks` para pricing)
- [ ] Contratar editora elegida (por paquete de videos del mes)
- [~] **Reposicionamiento web EN CURSO (30 jul noche, rama `web-y2k` — prod intacta):**
  - [x] **Fase 1 · Trasplante de identidad (commit d20c5277):** paleta C1 en tokens `--editorial-*` (gold→rosa chicle #E85D9F, crema base, bordes rosados), Bagel Fat One display en MINÚSCULAS (antes Bebas caps), 51 glows dorados→rosa, favicon corazón-click (`app/icon.svg`), logos en `public/brand/`. Build verde. TODO el sitio se re-vistió vía tokens (verificado: home, /servicios, /descubrimiento con headless Chrome — el preview pane congela Lenis/rAF, usar headless para verificar).
  - [x] **Fase 2 · Home de creadora (commit d5298240, push → Vercel preview READY):** hero "menos a mano / más para ti" con voz nosotras y CTAs series/delegar · tesis enseñamos-creamos-construimos · sección porqué IT girly ("siempre pudiste / ahora tienes cómo" + 3 dolores de audiencia) · **LAS SERIES en el home** (Menos a Mano / Lo Que Siempre Pudiste Hacer / Pastoreando, "muy pronto") · servicios demoted ("para cuando prefieres delegar / hecho por nosotras") · isotipo en navbar · title/description SEO nuevos. **Preview: soyelaranova-com-git-web-y2k-elaranova17-2950s-projects.vercel.app** — esperando revisión de Evelyn. Nota verificación: copy verificado por innerText (Lenis+IntersectionObserver congelan visuales en pane oculto; usar headless o preview real).
  - [ ] Fase 3 · `/plantillas` con email-gate (próximamente hasta que existan las n8n) + retiro rutas espirituales legacy
  - [ ] Al aprobar Evelyn: merge a main → deploy prod (antes: fix Resend P0 si el email-gate va a estar activo)

## Sprint 3 · "Semana de grabación" (≈ 20 → 26 ago)

**Meta:** TODO el contenido del primer mes grabado y entregado a la editora.

- [ ] Preparar set/looks/props (estética Y2K girly: elementos, ropa, escenario)
- [ ] Grabar los 20-30 videos según guiones (batch por pilar/look)
- [ ] Entregar material + guía de marca a la editora, con calendario de entregas
- [ ] En paralelo (editora edita): montar embudo DM — keyword en comentarios → DM auto → link /plantillas (ManyChat vs n8n propio = decidir; si es n8n propio, ES contenido meta)

## Sprint 4 · "Programación + control de calidad" (≈ 27 ago → 2 sep)

**Meta:** un mes completo programado y el embudo probado de punta a punta.

- [ ] Revisar/aprobar ediciones (2 rondas máx por video — regla anti-perfeccionismo)
- [ ] Activar Metricool (free) → programar el mes completo en TikTok + IG
- [ ] Test end-to-end del embudo: comentario → DM → web → email → descarga → oferta premium ✅
- [ ] Auditoría de seguridad pre-lanzamiento (cyber-neo) + build/lint verdes
- [ ] Definir métricas a mirar (views, saves, CTR a web, emails, ventas) — dashboard simple

## Sprint 5 · "Lanzamiento" (≈ semana del 3 sep)

- [ ] LANZAR 🚀 (orgánico primero; ads DESPUÉS de ver qué contenido funciona — skill `elara-ads-analyst`)
- [ ] Rutina diaria: responder comentarios primeros 60 min (Evelyn) — los DMs los atiende la automatización
- [ ] Retro semanal: qué funcionó, ajustar calendario del mes 2

## Backlog (después del lanzamiento — NO tocar antes)

- [ ] Venta activa de UGC a marcas (con portafolio ya rodando)
- [ ] Persona de marketing / CM (cuando los datos lo pidan)
- [ ] Ebooks y cursos pequeños (skill `elara-ebooks`)
- [ ] Tercerizar servicios freelance con amigos (cuando la demanda por DM desborde)
- [ ] Estrategia paga (ads) sobre el contenido ganador
- [ ] Retiro definitivo rutas espirituales legacy (/oraculo, /universo, /cursos, /sobre-elara)
- [ ] i18n FR/EN (la marca personal arranca en español)
- [ ] Contenido de viaje/storytime Marruecos (cuando esté allá)

---

## Partidita de gastos — estado actual

**Fuente de verdad:** `docs/finanzas.md` (espejo del Notion Finanzas). Hoy está casi vacío (`_TODO_`) → la **auditoría de tarjeta de 90 días es tarea de Sprint 0** y se hace juntas: Evelyn pasa el export, Claude clasifica y propone mantener/cancelar.

Lo que sabemos que existe (a confirmar costo y uso en la auditoría):

| Servicio | Para qué | Sospecha |
|---|---|---|
| Namecheap (soyelaranova.com) | dominio | mantener |
| Vercel | hosting web | mantener (free tier probable) |
| Supabase | DB suscriptoras | mantener (free tier probable) |
| Resend | emails | mantener + **verificar dominio (P0)** |
| Gemini Pro | imagen/video/texto | mantener |
| ElevenLabs | voz Elara | revisar uso real |
| Higgsfield (Nano Banana Pro) | fotos Evelyn | revisar plan vs uso |
| Notion | operación | mantener |
| Metricool | scheduler redes | free — activar (Sprint 4) |
| Mailchimp | email marketing | free — ¿duplicado con Resend? decidir UNO |
| Linktree | link in bio | candidato a cancelar (ya existe `/linktree` propio en la web) |
| Hotmart | venta digital | nunca activado — decidir vs Stripe/Gumroad (Sprint 2) |
| **Nuevos a evaluar** | ManyChat (embudo DM) · pack Creator Girls Club $25 · CapCut Pro editora | solo cuando su sprint llegue |

**Reglas que ya existen y se respetan** (`finanzas.md` §5): trial antes de pagar · revisión mensual · nada duplicado · gasto >50 € pasa por caja.

---

## Skills asignadas por frente

| Frente | Skill/herramienta |
|---|---|
| Identidad visual | `elara-designer` + claude-banana + Figma (lectura) |
| Copy web y plantillas | `elara-copywriter` (lee brand.md — actualizarlo primero) |
| Estrategia contenido/hooks | `elara-marketing` |
| Validación plantillas/nicho | `elara-market-research` |
| Pricing premium/packages | `elara-ebooks` |
| Ads (post-lanzamiento) | `elara-ads-analyst` |
| Carruseles IG | open-carrusel |
| Seguridad pre-launch | cyber-neo |
| UI web | `elara-ui-master` |
