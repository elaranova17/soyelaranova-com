/**
 * Punto focal por asset Pixar — prioriza rostro visible (object-position).
 */
export const IMAGE_FOCAL: Record<string, string> = {
  '/images/hero-elara-noche.png': '50% 18%',
  '/images/oraculo-maestra.png': '50% 28%',
  '/images/herramienta-oraculo.png': '50% 30%',
  '/images/herramienta-carta-natal.png': '50% 25%',
  '/images/herramienta-ciclos-lunares.png': '50% 28%',
  '/images/herramienta-astrologia.png': '50% 26%',
  '/images/herramienta-chakras.png': '50% 30%',
  '/images/herramienta-rituales.png': '50% 28%',
  '/images/herramienta-proposito.png': '50% 26%',
  '/images/herramienta-sinastria.png': '50% 28%',
  '/images/herramienta-calendario-lunar.png': '50% 24%',
  '/images/herramienta-lectura-tarot.png': '50% 30%',
  '/images/curso-astrologia.png': '50% 22%',
  '/images/meditacion-lunar.png': '50% 28%',
  '/images/ciclos-lunares-rituales.png': '50% 30%',
  '/images/circulo-juntas.png': '50% 32%',
  '/images/circulo-ritual-lunar.png': '50% 30%',
  '/images/circulo-ritual-inclusion.png': '50% 32%',
  '/images/circulo-oraculo.png': '50% 30%',
  '/images/circulo-estudio.png': '50% 28%',
  '/images/circulo-carta-natal.png': '50% 30%',
  '/images/elara-durmiendo.png': '50% 20%',
  '/images/elara-meditando.png': '50% 18%',
  '/images/elara-cocinando.png': '50% 22%',
  '/images/elara-yoga.png': '50% 26%',
  '/images/elara-pintando.png': '50% 20%',
  '/images/elara-aprendiendo.png': '50% 22%',
  '/images/elara-journal.png': '50% 24%',
  '/images/elara-cursos.png': '50% 26%',
  '/images/chakras-v2.png': '50% 30%',
  '/images/carta-natal-v2.png': '50% 25%',
}

export function imageFocal(src: string): string {
  return IMAGE_FOCAL[src] ?? '50% 28%'
}
