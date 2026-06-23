# Paletas Elara / La Aranoa

Objetivo: mantener el ADN morado de Elara, pero subirlo a una casa editorial-profesional. No queremos una agencia SaaS generica ni una web infantil de fantasia. Queremos que el sitio se sienta propio: mistico, serio, femenino, premium y util para vender productos digitales y servicios.

Direccion activa: ver `docs/REDISENO_EDITORIAL_ELARA.md`.

## Arquitectura de marca

El sitio no debe partirse en dos marcas que compiten. La estructura recomendada:

- **Elara Nova**: universo, e-books, cursos, oraculo, comunidad, munequitas, productos.
- **Trabaja conmigo**: servicios profesionales de Evelyn dentro del mismo universo, pero con una voz mas clara y ejecutiva.
- **La Aranoa Studio**: puede funcionar como el nombre del estudio/metodo, no como reemplazo total de Elara.

La home debe presentar todo lo que esta pasando, con jerarquia:

1. Hero de Elara como casa madre.
2. Bloque "Productos digitales": e-books, guias, cursos.
3. Bloque "Oraculo / recursos": experiencia y comunidad.
4. Bloque "Trabaja conmigo": web, automatizaciones, Google Ads, impulsamiento de redes.
5. Bloque editorial de Evelyn: credibilidad sin volverse corporate.

## Criterios visuales

- Morado si, pero como sombra, tinta o detalle profundo; no como pantalla completa saturada.
- Dorado solo como luz, sello o borde fino; no como lujo falso.
- Fondos mas adultos: gris humo, cafe cacao, marfil envejecido, ciruela tinta.
- Las munequitas pueden usarse como piezas editoriales o personajes de producto, no como decoracion infantil flotante.
- Menos "portal galactico"; mas "gabinete creativo", "atelier digital", "libro precioso que tambien vende".

## Paleta A · Ciruela editorial

La mas fiel a Elara, pero adulta. Sirve si queremos conservar magia, oraculo y munequitas sin que parezca fantasia infantil.

| Token | HEX | Uso |
| --- | --- | --- |
| ink | `#18131A` | Texto principal, fondos muy profundos |
| smoke | `#E7E1DC` | Fondo base claro |
| stone | `#B8AEA7` | Bordes, separadores, UI secundaria |
| plum | `#4A2D57` | Morado principal, botones secundarios |
| aubergine | `#2B1735` | Header, footer, superficies profundas |
| lavender-dust | `#B9A1C8` | Detalles suaves, tags, hover |
| cacao | `#6B5147` | Acento tierra para profesionalizar |
| antique-gold | `#B89A58` | Sellos, marcos, iconos pequenos |
| ivory | `#F8F3EA` | Tarjetas, areas de lectura |

Sensacion: revista espiritual premium, libreria bonita, marca femenina con criterio.

No usar con: fondos morados degradados full-screen, mucho brillo, muchas particulas.

## Paleta B · Cacao violeta

La mas profesional y calida. Buena si el sitio debe vender servicios sin perder Elara.

| Token | HEX | Uso |
| --- | --- | --- |
| espresso | `#201817` | Texto y footer |
| warm-gray | `#D8D0C8` | Fondo principal |
| oat | `#EEE7DD` | Secciones claras |
| cacao | `#5A4038` | Bloques de confianza, botones sobrios |
| raisin | `#3B233F` | Morado profundo, navegacion, CTA premium |
| mauve | `#927192` | Acento femenino discreto |
| lilac-gray | `#C9BBCD` | Fondos suaves, chips |
| brass | `#A9894B` | Lineas, monogramas, detalles |
| rose-milk | `#F3E8E4` | Fondos de producto / ebooks |

Sensacion: estudio boutique, cafe editorial, estrategia con alma.

No usar con: dorado brillante, sombras neon, tipografia demasiado infantil.

## Paleta C · Niebla lunar

La mas limpia y exclusiva. Morado casi como perfume, no como tema principal.

| Token | HEX | Uso |
| --- | --- | --- |
| charcoal | `#1D1C20` | Texto fuerte |
| fog | `#ECE9E5` | Fondo base |
| ash | `#C7C2BE` | Lineas y controles |
| moon-gray | `#8F8990` | Texto secundario |
| ink-purple | `#342642` | Titulos, CTA, footer |
| muted-violet | `#7A6288` | Acento principal |
| pearl-lavender | `#D8CEDF` | Fondos suaves |
| clay | `#8B6254` | Tierra, humanidad, Evelyn |
| soft-gold | `#C6AA6A` | Detalle ritual sobrio |

Sensacion: galeria, editorial, belleza tranquila, tecnologia discreta.

No usar con: demasiada ilustracion simultanea; necesita composicion limpia.

## Recomendacion

Empezaria por **Paleta A · Ciruela editorial** como base de Elara y tomaria de **Paleta B** el cacao para las secciones profesionales.

Formula:

```css
:root {
  --background: #E7E1DC;
  --surface: #F8F3EA;
  --ink: #18131A;
  --muted: #6B5147;
  --line: #B8AEA7;
  --purple: #4A2D57;
  --purple-deep: #2B1735;
  --lavender: #B9A1C8;
  --cacao: #6B5147;
  --gold: #B89A58;
}
```

## Uso de las munequitas

No eliminarlas. Reubicarlas:

- Home: una munequita/Elara como presencia principal, integrada en un marco editorial, no como sticker.
- E-books: cada libro puede tener una munequita o objeto-personaje como portada/categoria.
- Cursos: usar munequitas en escenas mas limpias, con fondos neutros y tipografia seria.
- Trabaja conmigo: usar foto profesional de Evelyn o una composicion mixta Evelyn + detalle Elara, no munequita sola.

## Imagenes nuevas a generar

Primero definir paleta. Despues generar solo lo necesario:

1. Hero editorial de Elara: personaje + escritorio/libros/oraculo + luz morada discreta.
2. Set de 4 covers para e-books con el mismo sistema.
3. Imagen puente "Trabaja conmigo": Evelyn/proceso/automatizacion con estetica atelier, no dashboard generico.
4. Miniaturas para cursos: sobrias, con un objeto protagonista por curso.

## Decision pendiente

Elegir una direccion:

- **A** si queremos que Elara siga siendo protagonista.
- **B** si queremos que servicios y venta profesional pesen mas.
- **C** si queremos un giro mas minimal, caro y silencioso.

Mi recomendacion: **A + cacao de B**.
