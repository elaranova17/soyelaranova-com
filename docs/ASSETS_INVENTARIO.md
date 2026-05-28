# Inventario de assets · soyelaranova.com

> Generá en Midjourney/Gemini estilo **Pixar 3D + Encanto**, fondo transparente o ambiente nocturno púrpura/dorado.  
> Formato: **PNG**, mínimo 1200px lado largo. Sin fotos realistas.

## Ya existen en `web/public/images/` (no regenerar salvo mejora)

| Archivo | Uso |
|---------|-----|
| `hero-portal-lago.png` | Hero home (fondo portal) |
| `oraculo-maestra.png` | Banner oráculo, herramienta oráculo |
| `elara-meditando.png` | Reserva · avatar |
| `elara-journal.png` | Sobre Elara |
| `elara-durmiendo.png` … `elara-pintando.png` | Galería lifestyle |
| `circulo-*.png` (6) | Sección Círculo |
| `herramienta-*.png` | Cards herramientas |
| `curso-astrologia.png` | Curso / producto astrología |
| `ciclos-lunares-rituales.png` | Ciclos / planificador |
| `sello-elara-nova.png` | Footer / marca |

## Prioridad alta (coherencia visual pendiente)

| ID | Descripción para generar | Sección | Ratio sugerido |
|----|--------------------------|---------|----------------|
| `producto-ebook-ciclo-nova.png` | Portada ebook “Ciclo Nova del Regreso”, luna y journal Encanto | Productos | 4:5 |
| `producto-planificador-lunar.png` | Planificador lunar imprimible, estética dorada | Productos | 4:5 |
| `curso-oraculo-cover.png` | Portada curso Oráculo Intuitivo (no reutilizar oraculo-maestra) | Cursos | 5:4 |
| `herramienta-cristales.png` | Cristales y energía, manos con cristales estilo Encanto | Herramientas | 4:5 |

## Prioridad media

| ID | Descripción | Sección |
|----|-------------|---------|
| `banner-universo.png` | Tienda / ebooks, estantería mágica | `/universo` |
| `banner-sobre-manifiesto.png` | Elara en atelier con grimorio suave | `/sobre-elara` |
| `og-elara-home.jpg` | Open Graph 1200×630 (puede ser export del hero) | Meta |

## B2B Evelyn (carpeta `web/public/_assets/` o `evelyn-b2b/`)

| ID | Descripción |
|----|-------------|
| `og-portfolio.jpg` | OG linktree / portfolio (ya referenciado) |
| `avatar-evelyn-b2b.png` | Retrato profesional estilizado (no stock) |
| `caso-ofelia-mockup.png` | Mockup web cliente Ofelia |
| `caso-sama-mockup.png` | Mockup web cliente Sama |

## Iconografía

Los iconos de sección usan **SVG inline** en `web/components/elara-icons.tsx`.  
No hace falta generar PNG salvo que quieras set decorativo extra para redes.

## Reglas al generar

1. **No repetir** la misma escena en dos secciones del home.
2. Cada imagen debe **corresponder al texto** del card (carta natal → mapa natal, etc.).
3. Sin texto legible en la imagen (títulos van en UI).
4. Personaje Elara: misma identidad visual en todas (cabello, tono piel, vestuario paisa-mágico).

Cuando tengas un PNG nuevo: subilo a `web/public/images/` con el nombre de la tabla y avisame para enlazarlo en código.
