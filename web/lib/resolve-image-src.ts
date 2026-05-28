/**
 * Mapea rutas WordPress (/wp-content/uploads/) → /public/images/
 * Ver web/reference/elara-nova-estructura.html
 */
const WP_TO_PUBLIC: Record<string, string> = {
  '/wp-content/uploads/hero-elara-noche.png': '/images/hero-elara-noche.png',
  '/wp-content/uploads/oraculo-maestra.png': '/images/oraculo-maestra.png',
  '/wp-content/uploads/oraculo.jpg': '/images/oraculo-maestra.png',
  '/wp-content/uploads/astrologia.jpg': '/images/curso-astrologia.png',
  '/wp-content/uploads/circulo.jpg': '/images/circulo-estudio.png',
  '/wp-content/uploads/planner-lunar.jpg': '/images/ciclos-lunares-rituales.png',
  '/wp-content/uploads/journal-luna.jpg': '/images/elara-journal.png',
  '/wp-content/uploads/ebook-astro.jpg': '/images/curso-astrologia.png',
  '/wp-content/uploads/calendario.jpg': '/images/ciclos-lunares-rituales.png',
  '/wp-content/uploads/guia-rituales.jpg': '/images/herramienta-rituales.png',
  '/wp-content/uploads/ofelia-preview.jpg': '/images/circulo-juntas.png',
  '/wp-content/uploads/sama-preview.jpg': '/images/circulo-estudio.png',
  '/wp-content/uploads/evelyn.jpg': '/images/elara-journal.png',
  '/wp-content/uploads/herramienta-carta-natal.png': '/images/herramienta-carta-natal.png',
  '/wp-content/uploads/herramienta-ciclos-lunares.png': '/images/herramienta-ciclos-lunares.png',
  '/wp-content/uploads/herramienta-oraculo.png': '/images/herramienta-oraculo.png',
  '/wp-content/uploads/herramienta-chakras.png': '/images/herramienta-chakras.png',
  '/wp-content/uploads/herramienta-rituales.png': '/images/herramienta-rituales.png',
  '/wp-content/uploads/herramienta-proposito.png': '/images/herramienta-proposito.png',
  '/wp-content/uploads/herramienta-sinastria.png': '/images/herramienta-sinastria.png',
  '/wp-content/uploads/herramienta-calendario-lunar.png': '/images/herramienta-calendario-lunar.png',
  '/wp-content/uploads/curso-astrologia.png': '/images/curso-astrologia.png',
  '/wp-content/uploads/circulo-juntas.png': '/images/circulo-juntas.png',
  '/wp-content/uploads/circulo-estudio.png': '/images/circulo-estudio.png',
  '/wp-content/uploads/elara-journal.png': '/images/elara-journal.png',
}

export function resolveImageSrc(src: string): string {
  if (src.startsWith('/wp-content/uploads/')) {
    return WP_TO_PUBLIC[src] ?? src.replace('/wp-content/uploads/', '/images/')
  }
  return src
}
