# Plan maestro · Rediseño Elara Nova

Estado actual: el sitio publico sigue en construccion. El avance se revisa en `/preview`.

Link de revision: `https://soyelaranova.com/preview`

## Objetivo

Reconstruir `soyelaranova.com` como una casa editorial-profesional que venda:

1. **Productos Elara**: e-books, lead magnet, workbook, audios y cursos.
2. **Experiencia Elara**: oraculo, rituales, universo visual, comunidad.
3. **Servicios Evelyn**: sitios web, automatizaciones, Google Ads e impulsamiento de redes.

El sitio no debe parecer:

- Canva.
- Plantilla de agencia.
- Landing generica hecha con IA.
- Portal infantil de fantasia.
- Web espiritual saturada sin estrategia comercial.

Debe sentirse:

- Editorial.
- Mistico, pero adulto.
- Profesional, pero con alma.
- Visualmente memorable.
- Claro en su embudo.
- Mobile-first.

## Principio rector

**Elara enamora. Evelyn ordena. El sistema convierte.**

Cada seccion debe cumplir una funcion en el embudo:

| Momento | Funcion | Secciones |
| --- | --- | --- |
| Mirar | Capturar atencion | Hero, imagen, frase ancla |
| Quedarse | Entender universo | Productos, cursos, oraculo |
| Confiar | Sentir criterio | Sobre, Evelyn, prueba visual |
| Actuar | Convertir | Diagnostico, descarga, email, compra |

## Arquitectura final

### Rutas principales

| Ruta | Estado | Objetivo |
| --- | --- | --- |
| `/` | Cerrada por construccion | Home final cuando aprobemos |
| `/preview` | Activa | Revisión privada del rediseño |
| `/universo` | Existe, por refinar | Productos digitales |
| `/cursos` | Existe, base inicial | Cursos y experiencias futuras |
| `/oraculo` | Existe, por refinar | Ritual / carta / captura |
| `/sobre-elara` | Existe, por refinar | Historia, manifiesto, confianza |
| `/trabaja-conmigo` | Existe, base inicial | Servicios profesionales |
| `/descubrimiento` | Funcional | Formulario de diagnostico |
| `/legal` | Funcional | Privacidad y terminos |

### Navegacion principal

Orden recomendado:

1. Productos
2. Cursos
3. Oraculo
4. Trabaja conmigo
5. Contacto

CTA fijo: `Trabaja conmigo` o `Solicitar diagnostico`, segun contexto.

## Embudo de la home

### 1. Hero editorial

Objetivo: impacto inmediato. Debe sentirse como portada de una marca viva.

Elementos:

- Frase ancla: `Mira todo lo que siempre fuiste capaz de ser.`
- Imagen fuerte de Elara / munequita / escena editorial.
- CTA principal: `Entrar al universo`.
- CTA secundario: `Trabaja conmigo`.
- Micro-senal visual: sello, linea, marco, detalle dorado o carta.

Pendiente:

- Mejorar imagen hero. La actual funciona como placeholder, pero no es suficientemente exclusiva.
- Generar o componer una imagen hero editorial mas propia.

### 2. Embudo Elara

Objetivo: explicar sin parecer explicacion.

Secuencia actual:

1. Mirar
2. Quedarse
3. Confiar
4. Actuar

Pendiente:

- Refinar textos para que suenen mas Elara y menos estrategia visible.
- Convertir este bloque en una pieza visual mas unica: podria parecer una mesa editorial, un mapa, una carta desplegada o un sello dividido.

### 3. Productos digitales

Objetivo: que se entienda que Elara vende cosas reales, no solo atmosfera.

Productos iniciales:

- `7 Dias de Elara` · lead magnet.
- `Ciclo Nova del Regreso` · e-book principal.
- Workbook y audios · en preparacion.

Pendiente:

- Crear covers reales.
- Definir precio, estado y CTA por producto.
- Conectar Hotmart cuando este listo.
- Crear pagina de producto para `Ciclo Nova del Regreso`.

### 4. Cursos y experiencias

Objetivo: abrir la linea futura sin vender humo.

Pendiente:

- Definir 2 o 3 cursos concretos.
- No dejarlo como "pronto" plano.
- Usar esta seccion para validar interes: lista de espera o encuesta simple.

### 5. Oraculo

Objetivo: mantener el gesto magico de Elara.

Pendiente:

- Crear una carta interactiva simple.
- Capturar email y fecha si la experiencia lo justifica.
- Evitar que oraculo domine toda la web.
- Nunca usar la palabra tarot en UI.

### 6. Trabaja conmigo

Objetivo: convertir interes profesional sin romper el universo.

Servicios:

- Sitios web profesionales.
- Automatizaciones.
- Google Ads y redes.
- Landing pages como servicio derivado.

Pendiente:

- Mejorar `/trabaja-conmigo` con mas autoridad.
- Añadir proceso de trabajo.
- Añadir ejemplos / mini casos, aunque sean internos.
- Ajustar copy para sonar mas Evelyn: tecnica, clara, humana.

### 7. Sobre / confianza

Objetivo: explicar por que Evelyn puede construir esto.

Pendiente:

- Integrar mejor la foto profesional.
- Separar voz Elara y voz Evelyn sin que parezcan dos marcas distintas.
- Añadir credenciales: ingeniera, banca, Suiza, Medellin, mama, creadora.

### 8. Contacto / diagnostico

Objetivo: cierre claro.

Pendiente:

- Mantener `/descubrimiento`.
- Revisar preguntas del formulario.
- Confirmar emails de Resend y remitente final.
- Cuando Resend salga de testing, usar dominio verificado.

## Direccion visual

Paleta activa: **Ciruela editorial + cacao profesional**.

Tokens clave:

- Fondo humo: `#E7E1DC`
- Marfil: `#F8F3EA`
- Tinta: `#18131A`
- Ciruela: `#4A2D57`
- Berenjena: `#2B1735`
- Lavanda polvo: `#B9A1C8`
- Cacao: `#6B5147`
- Oro antiguo: `#B89A58`

Reglas:

- El morado debe actuar como profundidad, no como saturacion.
- El dorado debe ser detalle, no lujo falso.
- Fondos claros si, pero con tension visual.
- Oscuridad estrategica para jalar la mirada.
- Tarjetas solo cuando tengan funcion; evitar grillas planas.

## Sistema UI pendiente

Crear o estabilizar componentes:

1. `EditorialHero`
2. `FunnelMap`
3. `ProductShelf`
4. `CoursePreview`
5. `OracleMoment`
6. `WorkWithMePanel`
7. `EditorialCTA`
8. `AssetFigure`

Reglas UI:

- No cards identicas en fila si no hay jerarquia.
- Usar escalon, superposicion, marcos, recortes o tension entre columnas.
- Mobile primero.
- Tipografia grande solo en secciones hero/editoriales.
- Botones con una intencion clara.

## Assets

### Existentes a usar

- `web/public/elara/avatar/elara.jpg`
- `web/public/images/elara-journal.png`
- `web/public/images/elara-cursos.png`
- `web/public/images/oraculo-maestra.png`
- `web/public/images/ciclos-lunares-rituales.png`
- `web/public/_assets/photos/evelyn_pro_hero.jpg`
- `web/public/_assets/photos/evelyn_pro_perfil.jpg`

### Nuevos assets a crear

1. Hero editorial principal.
2. Cover `7 Dias de Elara`.
3. Cover `Ciclo Nova del Regreso`.
4. Cover workbook.
5. Imagen puente Evelyn + sistema digital.
6. Imagen oraculo / carta.
7. Miniaturas de cursos.

### Brief base para imagenes

Estilo: editorial premium, mistico adulto, ciruela/cacao/marfil, luz suave, detalle artesanal, personaje Elara integrado, no infantil, no fantasia saturada, no stock corporativo.

Negative prompt:

- no neon
- no corporate stock
- no generic SaaS dashboard
- no childish cartoon
- no tarot text
- no overloaded galaxy
- no Canva template look

## Copy pendiente

Prioridad de escritura:

1. Hero.
2. Productos.
3. Trabaja conmigo.
4. Oraculo.
5. Sobre Elara.
6. Diagnostico.

Reglas:

- Voz Elara: intima, mistica, hermana mayor, sin cliches.
- Voz Evelyn: tecnica, directa, humana.
- Evitar: girlboss, manifestar, abundancia, vibes, diosa, energia generica.
- Usar: casa, volver, sostener, sistema, criterio, detalle, claridad.

## Fases de trabajo

### Fase 1 · Refinar preview actual

Objetivo: que `/preview` deje de sentirse maqueta y empiece a sentirse marca.

Tareas:

- Mejorar hero.
- Mejorar bloque Embudo Elara.
- Romper grillas planas.
- Ajustar navegacion.
- Pulir mobile.

Resultado esperado:

- Evelyn siente: "esto ya va por ahi".

### Fase 2 · Productos y covers

Objetivo: que la web venda productos reales.

Tareas:

- Definir oferta visual de `7 Dias`.
- Definir oferta visual de `Ciclo Nova`.
- Crear covers.
- Mejorar `/universo`.
- CTA real: descargar, lista de espera o comprar.

Resultado esperado:

- La visitante entiende que hay e-books y sabe que hacer.

### Fase 3 · Trabaja conmigo

Objetivo: convertir clientes profesionales.

Tareas:

- Mejorar `/trabaja-conmigo`.
- Definir paquetes.
- Crear proceso.
- Conectar diagnostico.
- Añadir autoridad de Evelyn.

Resultado esperado:

- Una marca puede entender si Evelyn le sirve y pedir diagnostico.

### Fase 4 · Oraculo funcional

Objetivo: gesto memorable de Elara.

Tareas:

- Carta / mini experiencia.
- Mensajes iniciales.
- Captura opcional.
- Microinteraccion.

Resultado esperado:

- No es una pagina "coming soon"; es una experiencia simple.

### Fase 5 · QA y apertura

Objetivo: quitar construccion.

Tareas:

- Revisar mobile.
- Revisar links.
- Revisar formulario.
- Revisar metadata.
- Revisar performance.
- Revisar copy completo.
- Confirmar que no hay texto La Aranoa como marca principal.

Resultado esperado:

- `/` reemplaza construccion.
- `/preview` puede mantenerse o redirigir.

## Definicion de listo para abrir

No se quita construccion hasta que:

- Home tenga impacto visual real.
- Productos se entiendan.
- Trabaja conmigo convierta.
- Oraculo no este vacio.
- Mobile se vea fuerte.
- No parezca Canva.
- No parezca agencia generica.
- El formulario funcione.
- Evelyn lo sienta como propio.

## Siguiente sprint recomendado

Sprint inmediato: **Hero + primera pantalla + embudo**.

Por que:

- Es lo que mas afecta la percepcion.
- Si la primera pantalla no llama, lo demas no importa.
- Ahi se define si el sitio parece exclusivo o plantilla.

Entregables del sprint:

1. Hero con mas tension visual.
2. Mejor composicion de imagen Elara.
3. CTA mas claro.
4. Embudo mas visual, menos literal.
5. Revisión mobile.

Cuando eso este aprobado, pasamos a productos.
