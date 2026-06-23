# Rediseño maestro · La Aranoa Studio / soyelaranova.com

**Fecha:** 23 junio 2026  
**Fuente:** brief Kimi `brief_rediseno_elaranova.pdf/json` + auditoria del repo actual  
**Estado:** direccion aprobada para convertir el sitio de portal Elara a estudio digital profesional

---

## Veredicto

El diagnostico de Kimi es correcto: la home actual se siente demasiado espiritual/infantil para vender automatizacion, Google Ads, redes y desarrollo web profesional.

La solucion de Kimi no debe aplicarse literal. Azul SaaS, Inter, cards genericas, logos y secciones de agencia clasica resolverian la claridad, pero destruirian lo mas valioso que ya existe: una firma visual memorable.

La direccion correcta es un puente:

> **Un estudio digital profesional, con sensibilidad editorial y una firma visual propia.**

No "portal mistico".  
No "agencia tech generica".  
Si: Evelyn como ingeniera/estratega que construye sistemas digitales bonitos, medibles y vendibles.

---

## Nuevo posicionamiento

### Marca principal del sitio

**La Aranoa Studio** o **Evelyn / La Aranoa**.

El dominio puede seguir siendo `soyelaranova.com` durante la transicion, pero la primera pantalla debe comunicar negocio digital, no espiritualidad.

### Oferta central

Construccion y optimizacion de presencia digital para emprendedores, marcas personales y pequenos negocios:

- Sitios web profesionales y landing pages de conversion.
- Automatizaciones de procesos, leads, ventas y seguimiento.
- Impulsamiento de redes con sistema de contenido.
- Google Ads y landing pages listas para medir conversion.
- Productos digitales: libros, guias, cursos y recursos descargables.

### Promesa

Te ayudo a convertir tu conocimiento, servicio o negocio en un sistema digital que se vea profesional, venda mejor y no dependa de hacerlo todo manualmente.

### Taglines posibles

- **Diseno, automatizacion y anuncios para vender mejor en digital.**
- **Tu negocio digital, construido con estrategia y detalle.**
- **Automatiza. Lanza. Mide. Vende mejor.**
- **Sistemas digitales para marcas que ya quieren tomarse en serio.**

Evitar por ahora: "imperio digital", "ingreso pasivo", "mientras duermes". Suenan demasiado infoproducto generico.

---

## Arquitectura de marca

### Evelyn / La Aranoa

Rol: capa profesional y comercial.

Voz:

- Directa, clara, humana.
- Ingeniera con criterio de negocio.
- Cercana, pero no coach.
- Puede decir "te ayudo", "lo medimos", "lo automatizamos", "lo lanzamos".

Visual:

- Foto real de Evelyn.
- Interfaces, diagramas, dashboards, mapas de proceso.
- Editorial premium: detalle, ritmo, contraste, aire.

### Elara Nova

Rol: linea editorial/productos.

Uso:

- Libros, ebooks, recursos, lead magnets y universo creativo.
- Puede vivir como seccion "Biblioteca" o "Productos".
- No debe dominar la home comercial.

Visual:

- Dorado, serif, detalles ornamentales.
- Ilustraciones existentes solo como producto/editorial, no como prueba principal de profesionalismo B2B.

---

## Que conservar

- Stack actual: Next.js, Tailwind v4, framer-motion, Lenis.
- Fotos reales en `web/public/_assets/photos/`.
- Assets B2B existentes:
  - `assets/b2b/Portfolio_Evelyn_Patino_Laverde_v3.pdf`
  - `assets/b2b/Brochure_Evelyn_Patino_Laverde.pdf`
  - `web/public/evelyn-b2b/portfolio.html`
  - `web/public/evelyn-b2b/descubrimiento.html`
  - `web/public/evelyn-b2b/propuesta.html`
- Firma visual dorada, marcos finos y atmosfera profunda, pero usados con control.
- Productos digitales documentados en `docs/products.md`.

---

## Que apagar o mover a segundo plano

- Personajes IA como senal principal de marca.
- Copy centrado en oraculo, astrologia, rituales, circulo, luna y herramientas del alma.
- Morado/dorado como paleta dominante de toda la web.
- Rutas espirituales en navegacion principal.
- CTA tipo "Descubri tu camino", "Entrar al Circulo", "Saca tu carta" como accion primaria de negocio.
- Estetica Pixar/Encanto como lenguaje del estudio.

Esto no significa borrar todo. Significa reubicarlo:

- Elara Nova pasa a biblioteca/productos.
- Oraculo puede quedar como experiencia gratuita o pieza editorial, no como hero comercial.
- Los recursos misticos pueden convertirse en una linea de contenido separada.

---

## Sistema visual recomendado

### Paleta puente

```css
--studio-ink: #0B1020;        /* fondo principal */
--studio-night: #10131D;      /* panels oscuros */
--studio-paper: #F7F2EA;      /* fondo claro editorial */
--studio-mist: #E7E1D7;       /* divisores/cards suaves */
--studio-text: #1E293B;       /* texto sobre claro */
--studio-muted: #8A8194;      /* subtitulos */
--studio-gold: #C8A24A;       /* firma premium */
--studio-indigo: #5B5FE8;     /* acento digital */
--studio-green: #0FAF7A;      /* exito/metricas */
```

### Uso de color

- 70% neutros profundos y claros.
- 20% dorado editorial.
- 10% indigo/verde para tecnologia, datos y conversion.

El morado actual puede sobrevivir en gradientes muy sutiles o secciones Elara, pero no debe mandar.

### Tipografia

Mantener las fuentes actuales evita una migracion innecesaria:

- Playfair Display: marca/editorial, titulares puntuales.
- Lato: UI/cuerpo.
- Cormorant: citas o pequenos acentos.

Para una fase posterior se puede evaluar una sans mas contemporanea, pero no es bloqueo para empezar.

### UI

- Bordes entre 8px y 12px.
- Botones claros, con iconos cuando aplique.
- Menos brillo, mas precision.
- Menos "tarjeta magica", mas modulo editorial/producto.
- Motion sutil: reveal, hover, counters, transiciones suaves.
- Nada de confeti, destellos excesivos o fondos genericos de SaaS.

---

## Nueva home propuesta

### 1. Hero

Objetivo: que en 3 segundos se entienda que Evelyn vende soluciones digitales profesionales.

Contenido:

- Eyebrow: `La Aranoa Studio · Web · Automatizacion · Ads`
- H1: `Construyo sistemas digitales que se ven bien, venden mejor y te ahorran trabajo.`
- Subcopy: `Soy Evelyn Patino, ingeniera de software. Diseno y construyo sitios, automatizaciones y landing pages para marcas que quieren crecer con orden, datos y una presencia profesional.`
- CTA primario: `Cotizar mi proyecto`
- CTA secundario: `Ver servicios`
- Prueba corta: `6 anos en banca · Software engineer · Suiza / LATAM · Multistack`
- Visual: foto real de Evelyn + overlay de sistema/proceso, no personaje IA.

### 2. Servicios

Cuatro o cinco bloques, claros y orientados a resultado:

- Sitios web profesionales.
- Landing pages para campanas.
- Automatizaciones de negocio.
- Google Ads + medicion.
- Contenido/redes con sistema.
- Productos digitales y ebooks.

Cada bloque debe responder: problema, solucion, entregable.

### 3. Metodo

Narrativa de proceso:

1. Diagnostico
2. Mapa del sistema
3. Construccion
4. Lanzamiento
5. Medicion y mejora

Este modulo vende confianza mejor que promesas exageradas.

### 4. Casos / Portfolio

Reutilizar B2B existente. Mientras no haya muchos casos reales, mostrar:

- Proyectos propios como caso de estudio.
- Plantillas/propuestas reales.
- Antes/despues de arquitectura digital.
- Experiencia tecnica y materiales descargables.

### 5. Biblioteca / Productos

Nueva casa para Elara Nova y libros:

- Ebooks.
- Guias.
- Recursos gratuitos.
- Cursos futuros.

Tono: editorial, no misticismo dominante.

### 6. Sobre Evelyn

Debe construir autoridad:

- Ingeniera de software.
- 6 anos en banca.
- Medellin / Suiza.
- Mama, creadora, constructora de sistemas.
- Frase posible: `Pienso como disenadora, construyo como ingeniera y mido como negocio.`

### 7. CTA final

Simple:

- `Cuéntame que quieres construir`
- `Agenda un diagnostico`
- `Cotizar mi proyecto`

---

## Navegacion propuesta

Primaria:

- Inicio
- Servicios
- Portfolio
- Productos
- Sobre mi
- Recursos
- Contacto

Fase 1 puede mantenerlo todo en una sola home con anchors:

- `#servicios`
- `#metodo`
- `#portfolio`
- `#productos`
- `#sobre`
- `#contacto`

Rutas futuras:

- `/servicios`
- `/portfolio`
- `/productos` o `/biblioteca`
- `/sobre-mi`
- `/recursos`
- `/contacto`
- `/legal`

Rutas Elara actuales:

- `/oraculo`, `/universo`, `/sobre-elara` deben pasar a secundarias o archivarse cuando la nueva home este lista.

---

## Google Ads y conversion

Para poder correr Ads sin quemar presupuesto, la web necesita antes:

- Una landing por servicio o intencion.
- CTA unico por landing.
- Politica de privacidad y terminos.
- Evento de conversion para clic CTA, envio formulario y contacto WhatsApp/email.
- Pagina de gracias.
- Velocidad mobile cuidada.
- Copy especifico por busqueda, no home generica para todo.

Primeras landings recomendadas:

1. `/servicios/landing-pages`
2. `/servicios/automatizaciones`
3. `/servicios/google-ads`
4. `/servicios/sitios-web`

---

## Inspiracion de referencia

Usar referencias por principio, no por plantilla:

- Awwwards: interacciones, memoria visual, composicion no generica.
- Landingfolio: claridad de propuesta y jerarquia de conversion.
- Unbounce/landing pages de Ads: estructura de objeciones, CTA, prueba, FAQ.

Regla:

> Si parece template de agencia de marketing, no sirve. Si parece experimento artistico que no vende, tampoco.

---

## Fase 1 de implementacion

Objetivo: nueva home profesional sin romper rutas ni borrar trabajo existente.

1. Cambiar metadata global hacia estudio digital.
2. Crear tokens visuales `studio-*` en `globals.css` manteniendo tokens Elara.
3. Reescribir home con nueva arquitectura:
   - hero profesional
   - servicios
   - metodo
   - portfolio
   - productos
   - sobre
   - contacto
4. Cambiar nav principal a anchors del estudio.
5. Reubicar Elara como productos/biblioteca.
6. Mantener B2B estatico accesible.
7. Probar `npm run verify:assets` y `npm run build`.

No hacer en Fase 1:

- No instalar dependencias nuevas.
- No crear ecommerce real aun.
- No borrar paginas legacy.
- No rehacer todos los assets.
- No mezclar el oraculo como CTA principal.

---

## Decisiones abiertas

1. Nombre visible definitivo: `La Aranoa Studio`, `Aranoa Studio`, `Evelyn Patino Studio` o `Elara Nova Studio`.
2. CTA principal: diagnostico, cotizacion o WhatsApp.
3. Que productos van primero en biblioteca.
4. Si el dominio se mantiene como `soyelaranova.com` o luego migra.
5. Si se conserva Elara Nova como marca editorial separada o como submarca dentro del estudio.

---

## Norte

El sitio debe hacer sentir:

> "Esta persona tiene gusto, criterio tecnico y sabe convertir ideas en sistemas digitales reales."

No:

> "Esta persona hizo una pagina bonita de espiritualidad."

Y tampoco:

> "Esta es otra agencia generica con cards de servicios."

