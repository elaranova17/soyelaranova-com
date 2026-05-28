/**
 * Mapa de imágenes del home · una sola fuente, sin repetir entre secciones.
 * Si falta asset: null → slot vacío (placeholder).
 */
import { siteImages } from '@/lib/site-images'

export const homeImages = {
  hero: siteImages.hero.elara,
  oraculoBanner: siteImages.oraculo.seccion,
  oraculoGallery: [
    siteImages.sobre.durmiendo,
    siteImages.sobre.cocinando,
    siteImages.sobre.yoga,
    siteImages.sobre.pintando,
    siteImages.sobre.aprendiendo,
  ] as const,
  circuloMosaic: [
    siteImages.circulo.juntas,
    siteImages.circulo.ritualLunar,
    siteImages.circulo.ritualInclusion,
    siteImages.circulo.oraculo,
    siteImages.circulo.estudio,
    siteImages.circulo.cartaNatal,
  ] as const,
  circuloStrip: [
    siteImages.circulo.oraculo,
    siteImages.circulo.estudio,
    siteImages.circulo.ritualInclusion,
  ] as const,
  sobrePortrait: siteImages.sobre.journal,
  contacto: siteImages.circulo.juntas,
  herramientas: [
    siteImages.herramientas.cartaNatal,
    siteImages.herramientas.ciclosLunares,
    siteImages.herramientas.oraculo,
    siteImages.herramientas.chakras,
    siteImages.herramientas.rituales,
    siteImages.herramientas.proposito,
    siteImages.herramientas.sinastria,
    siteImages.herramientas.calendarioLunar,
    '/images/chakras-v2.png',
  ] as const,
  cursos: [
    siteImages.cursos.astrologia,
    siteImages.herramientas.oraculo,
    siteImages.cursos.estudiante,
  ] as const,
  productos: [
    siteImages.cursos.astrologia,
    siteImages.tienda.planificadorLunar,
    '/images/herramienta-lectura-tarot.png',
    siteImages.tienda.kitRituales,
    siteImages.herramientas.calendarioLunar,
  ] as const,
} as const
