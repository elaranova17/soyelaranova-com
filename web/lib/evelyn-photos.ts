/**
 * Fotos Evelyn del sitio.
 * Lote nuevo (26 jul 2026): 4 renders de estudio editados, cableados abajo.
 * Prohibido para siempre (ver scripts/verify-public-assets.mjs):
 * - selfies privadas buso blanco / sin peluca (00-identidad-*, evelyn_pro_perfil, face-ref)
 * - serie desk vieja (evelyn_pro_hero, 01-hero-evelyn, 02-bio-evelyn, evelyn-estudio-profesional)
 */
const KIT = '/_assets/photos/kit-web-real'

export const evelynPhotos = {
  /** Home hero — retrato estudio ciruela, media sonrisa */
  homeHero: `${KIT}/evelyn-hero-ciruela.jpg`,
  /** Home Sobre mí — trabajando en escritorio */
  homeAbout: `${KIT}/evelyn-about-escritorio.jpg`,
  /** /sobre-elara avatar — retrato editorial */
  sobreElara: `${KIT}/evelyn-sobre-editorial.jpg`,
  /** /trabaja-conmigo hero — retrato estudio ciruela */
  trabajaConmigo: `${KIT}/evelyn-hero-ciruela.jpg`,
  /** /linktree avatar — headshot limpio */
  linktreeAvatar: `${KIT}/evelyn-headshot.jpg`,
  /** /portfolio hero — retrato estudio ciruela */
  portfolioHero: `${KIT}/evelyn-hero-ciruela.jpg`,
  /** /portfolio about — retrato editorial */
  portfolioAbout: `${KIT}/evelyn-sobre-editorial.jpg`,
  /** /cv hero — retrato editorial con aire (mejor para hero a pantalla completa) */
  cvHero: `${KIT}/evelyn-sobre-editorial.jpg`,
  /** /cv perfil — headshot limpio */
  cvAbout: `${KIT}/evelyn-headshot.jpg`,
  /** LPs / packs — retrato estudio ciruela */
  estudio: `${KIT}/evelyn-hero-ciruela.jpg`,
  atmosphere: `${KIT}/bg-editorial-humo.webp`,
  slideProceso: '/_assets/photos/slide-proceso-fondo.webp',
  ogPortfolio: '/_assets/photos/og-portfolio.jpg',
  ogCv: '/_assets/photos/og-cv.jpg',
} as const
