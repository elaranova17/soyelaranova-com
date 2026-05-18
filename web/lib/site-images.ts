/**
 * Rutas de imágenes del sitio · /public/images/
 * Imágenes fantasy/tarot eliminadas del repo (mayo 2026).
 * Hero usa gradiente + foto real de Elara.
 */
export const siteImages = {
  hero: {
    elara: '/images/sobre-elara.jpg',
    escritorio: '/images/hero-elara-escritorio.jpg',
  },
  sobre: {
    elara: '/images/sobre-elara.jpg',
    escribiendo: '/images/elara-escribiendo.jpg',
  },
  herramientas: {
    principal: '/images/herramientas-astrales.jpg',
    astrologia: '/images/herramienta-astrologia.png',
    cartaNatal: '/images/herramienta-carta-natal.png',
    ciclosLunares: '/images/herramienta-ciclos-lunares.png',
    calendarioLunar: '/images/herramienta-calendario-lunar.png',
    chakras: '/images/herramienta-chakras.png',
    rituales: '/images/herramienta-rituales.png',
    sinastria: '/images/herramienta-sinastria.png',
    proposito: '/images/herramienta-proposito.png',
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
  circulo: {
    juntas: '/images/circulo-juntas.png',
    cartaNatal: '/images/circulo-carta-natal.png',
    ritualInclusion: '/images/circulo-ritual-inclusion.png',
    ritualLunar: '/images/circulo-ritual-lunar.png',
    estudio: '/images/circulo-estudio.png',
  },
} as const
