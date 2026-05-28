/**
 * Mapa de imágenes del home · Pixar only + slots morados para generar.
 */
import { generate, pixar, type MediaRef } from '@/lib/media'
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
    siteImages.circulo.ritualLunar,
    siteImages.circulo.estudio,
    siteImages.circulo.cartaNatal,
  ] as const,
  sobrePortrait: siteImages.sobre.journal,
  contacto: siteImages.circulo.juntas,
  herramientas: [
    pixar(siteImages.herramientas.cartaNatal),
    pixar(siteImages.herramientas.ciclosLunares),
    pixar(siteImages.herramientas.oraculo),
    pixar(siteImages.herramientas.chakras),
    pixar(siteImages.herramientas.rituales),
    pixar(siteImages.herramientas.proposito),
    pixar(siteImages.herramientas.sinastria),
    pixar(siteImages.herramientas.calendarioLunar),
    generate('herramienta-cristales', 'Cristales & energía'),
  ] as const,
  cursos: [
    pixar(siteImages.cursos.astrologia),
    generate('curso-oraculo-cover', 'Curso · Oráculo intuitivo'),
    pixar(siteImages.cursos.estudiante),
  ] as const,
  productos: [
    pixar(siteImages.cursos.astrologia),
    generate('producto-ebook-ciclo-nova', 'Ebook · Ciclo Nova del Regreso'),
    generate('producto-oraculo-pack', 'Pack · Oráculo intuitivo'),
    pixar(siteImages.tienda.kitRituales),
    generate('producto-planificador-lunar', 'Planificador lunar · PDF'),
  ] as const,
} as const satisfies Record<string, string | readonly string[] | readonly MediaRef[]>
