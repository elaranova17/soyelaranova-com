# Rediseño editorial Elara

Documento de orden para reconstruir `soyelaranova.com` sin perder Elara y sin convertirlo en una landing generica de agencia.

## Norte

El sitio debe sentirse como una casa editorial-profesional: mistica, femenina, seria y vendible. Elara sigue siendo la marca principal. La parte profesional de Evelyn vive dentro de esa casa como una linea clara: "Trabaja conmigo".

La web debe vender tres cosas:

1. **Productos Elara**: e-books, lead magnet, workbook, audios, futuros cursos.
2. **Experiencia Elara**: oraculo, rituales, comunidad, universo visual.
3. **Servicios Evelyn**: sitios web, automatizaciones, Google Ads e impulsamiento de redes.

## Paleta elegida

Base: **Ciruela editorial + cacao profesional**.

| Rol | HEX | Uso |
| --- | --- | --- |
| Fondo humo | `#E7E1DC` | Fondo principal del sitio |
| Superficie marfil | `#F8F3EA` | Tarjetas, bloques de producto, formularios |
| Tinta | `#18131A` | Texto principal |
| Ciruela | `#4A2D57` | Identidad Elara, CTA secundarios, detalles |
| Berenjena | `#2B1735` | Hero profundo, footer, bloques de oraculo |
| Lavanda polvo | `#B9A1C8` | Chips, hover, pequenos acentos |
| Cacao | `#6B5147` | Secciones profesionales y confianza |
| Piedra | `#B8AEA7` | Bordes y separadores |
| Oro antiguo | `#B89A58` | Sellos, iconos pequenos, lineas finas |

Regla: morado como tinta y profundidad, no como fondo saturado en toda la pantalla.

## Arquitectura recomendada

### Home

La home debe mostrar todo el universo sin parecer inventario.

1. **Hero editorial**
   - Marca: Elara Nova.
   - Frase: "Mira todo lo que siempre fuiste capaz de ser."
   - Imagen: Elara/personaje o composicion editorial con libros, carta-oraculo y luz ciruela.
   - CTA principal: "Descubre el universo Elara".
   - CTA secundario: "Trabaja conmigo".

2. **Productos digitales**
   - `7 Dias de Elara` como entrada gratuita.
   - `Ciclo Nova del Regreso` como producto principal.
   - Workbook / audios como proximos o bundle.
   - Visual: covers editoriales, no cards SaaS.

3. **Cursos y experiencias**
   - Bloque preparado para cursos.
   - Puede estar como "En preparacion" si aun no hay producto final.
   - Usar objetos/personajes de Elara con composicion sobria.

4. **Oraculo y recursos**
   - Mantener la carta del dia como gesto de marca.
   - No debe dominar todo si el objetivo ahora es tambien vender productos y servicios.

5. **Trabaja conmigo**
   - Voz Evelyn, mas profesional.
   - Servicios: sitios web, automatizaciones, Google Ads, impulsamiento de redes.
   - Debe sentirse premium y humano, no agencia inflada.
   - Imagen ideal: Evelyn profesional + detalle del universo Elara, o escritorio/proceso.

6. **Cierre**
   - Email / diagnostico.
   - Link a productos.
   - Footer con rutas claras.

### Rutas

| Ruta | Proposito |
| --- | --- |
| `/` | Home editorial: todo el universo |
| `/productos` o `/universo` | E-books, lead magnet, workbook, audios |
| `/cursos` | Cursos y experiencias futuras |
| `/oraculo` | Carta del dia / ritual de entrada |
| `/sobre-elara` | Historia, manifiesto, identidad |
| `/trabaja-conmigo` | Servicios profesionales |
| `/descubrimiento` | Formulario de diagnostico |

Decision recomendada: usar `/trabaja-conmigo` como ruta publica y dejar `/work` como alias/legacy.

## Uso de imagenes existentes

### Mantener

- `03_VISUAL_KIT/Imagenes/00_Elara_Avatar_Canon.jpg`
- `03_VISUAL_KIT/Imagenes/Elara_avatar_real/elara_real_avatar_v1.jpg`
- `03_VISUAL_KIT/Imagenes/Evelyn_pro/evelyn_pro_hero.jpg`
- `03_VISUAL_KIT/Imagenes/Evelyn_pro/evelyn_pro_perfil.jpg`
- Objetos: vela, celular, tapete, olla, carta.

### Reubicar

- Las munequitas van en productos, cursos y hero editorial.
- Los objetos sirven como iconografia de categorias, pero deben ir con fondos neutros y bordes finos.
- Fotos de Evelyn se usan solo en la parte profesional.

### Evitar

- Fondos galacticos saturados.
- Personajes flotando sin contexto.
- Cartas y marcos con exceso de brillo.
- Layout de agencia con cards repetidas y gradientes obvios.

## Sistema visual

### Componentes base

1. **EditorialHero**
   - Imagen grande o composicion.
   - H1 serif.
   - Texto corto.
   - Dos CTAs.

2. **ProductShelf**
   - Productos como estanteria/editorial.
   - Cada item con portada, promesa, precio/estado y CTA.

3. **ServicePanel**
   - Servicios profesionales sobrios.
   - Cacao/ciruela, menos magia, mas claridad.

4. **OracleMoment**
   - Carta del dia pequena o mediana.
   - No debe tapar todo el modelo de negocio.

5. **AssetFigure**
   - Componente para munequitas/objetos con marco editorial.

## Copy base

### Hero

**Elara Nova**

Mira todo lo que siempre fuiste capaz de ser.

Una casa digital para volver a ti: e-books, cursos, oraculo y herramientas creadas con belleza, estrategia y una obsesion suave por los detalles.

CTA principal: `Entrar al universo`

CTA secundario: `Trabaja conmigo`

### Trabaja conmigo

Construyo sistemas digitales para marcas que necesitan verse mejor, vender con mas claridad y dejar de hacer todo manual.

Sitios web, automatizaciones, Google Ads e impulsamiento de redes con una mezcla rara pero util: criterio visual, pensamiento tecnico y cuidado por el negocio real.

CTA: `Solicitar diagnostico`

## Orden de implementacion

### Fase 0 · Sitio en construccion

Estado actual. Mantener hasta que haya home coherente.

### Fase 1 · Sistema visual

- Pasar tokens a `globals.css`.
- Crear componentes base sin contenido final.
- Probar paleta con secciones reales.
- No generar aun 20 imagenes.

### Fase 2 · Home editorial

- Hero.
- Productos.
- Trabaja conmigo.
- Footer.
- Mobile primero.

### Fase 3 · Productos

- `/universo` o `/productos`.
- Lead magnet.
- Ciclo Nova.
- Workbook/audios.

### Fase 4 · Servicios

- `/trabaja-conmigo`.
- Servicios.
- Formulario `/descubrimiento`.

### Fase 5 · Imagenes nuevas

Generar solo despues de ver la maqueta con la paleta:

1. Hero editorial.
2. Covers de productos.
3. Imagen puente Evelyn / studio.
4. Miniaturas de cursos.

## Checklist antes de quitar construccion

- [ ] Home no parece agencia generica.
- [ ] Elara sigue siendo protagonista.
- [ ] E-books y cursos se entienden en menos de 10 segundos.
- [ ] Servicios profesionales aparecen sin romper el universo.
- [ ] Morado esta presente, pero discreto.
- [ ] Las munequitas se ven editoriales, no infantiles.
- [ ] Mobile se ve mejor que desktop.
- [ ] Formulario de diagnostico sigue funcionando.
