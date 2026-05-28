/**
 * Punto focal por asset — evita recortes raros con object-cover.
 * Valores CSS object-position (ej. "center 28%").
 */
export const IMAGE_FOCAL: Record<string, string> = {
  '/images/curso-astrologia.png': 'center 22%',
  '/images/meditacion-lunar.png': 'center 30%',
  '/images/herramienta-oraculo.png': 'center 35%',
  '/images/herramienta-chakras.png': 'center 40%',
  '/images/herramienta-rituales.png': 'center 35%',
  '/images/herramienta-proposito.png': 'center 30%',
  '/images/herramienta-sinastria.png': 'center 32%',
  '/images/herramienta-calendario-lunar.png': 'center 28%',
  '/images/herramienta-carta-natal.png': 'center 25%',
  '/images/herramienta-ciclos-lunares.png': 'center 30%',
  '/images/herramienta-astrologia.png': 'center 28%',
  '/images/oraculo-maestra.png': 'center 40%',
  '/images/ciclos-lunares-rituales.png': 'center 32%',
  '/images/circulo-juntas.png': 'center 35%',
  '/images/circulo-ritual-lunar.png': 'center 38%',
  '/images/circulo-ritual-inclusion.png': 'center 40%',
  '/images/circulo-oraculo.png': 'center 42%',
  '/images/circulo-estudio.png': 'center 38%',
  '/images/circulo-carta-natal.png': 'center 35%',
  '/images/elara-durmiendo.png': 'center 20%',
  '/images/elara-meditando.png': 'center 18%',
  '/images/elara-cocinando.png': 'center 22%',
  '/images/elara-yoga.png': 'center 30%',
  '/images/elara-pintando.png': 'center 20%',
  '/images/hero-elara-noche.png': 'center 15%',
}

export function imageFocal(src: string): string {
  return IMAGE_FOCAL[src] ?? 'center center'
}
