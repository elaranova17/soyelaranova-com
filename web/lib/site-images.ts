/**
 * Rutas de imágenes del sitio · /public/images/
 * Symlinks a assets en /public/hero/ donde aplica.
 */
export const siteImages = {
  hero: {
    escritorio: '/images/hero-elara-escritorio.jpg',
  },
  sobre: {
    elara: '/images/sobre-elara.jpg',
  },
  herramientas: {
    principal: '/images/herramientas-astrales.jpg',
  },
  tarot: {
    seccion: '/images/tarot-seccion.jpg',
  },
  comunidad: {
    mujeres: '/images/comunidad-mujeres.jpg',
  },
  atelier: {
    escribiendo: '/images/elara-escribiendo.jpg',
  },
  cursos: {
    header: '/images/herramientas-astrales.jpg',
    astrologia: '/images/curso-astrologia.jpg',
    tarot: '/images/curso-tarot.jpg',
    ciclos: '/images/curso-ciclos.jpg',
    sanar: '/images/curso-sanar.jpg',
  },
  tienda: {
    kitRituales: '/images/producto-kit-rituales.jpg',
    planificadorLunar: '/images/producto-planificador-lunar.jpg',
  },
} as const
