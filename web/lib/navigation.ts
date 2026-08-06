/**
 * Navegación compartida · menú canónico del sitio (Scrapboard C3 profesional).
 * El panel hamburguesa usa SIEMPRE la misma lista (STUDIO_NAV).
 */

import { studioServices } from '@/lib/studio-services'

export type NavItem = {
  href: string
  label: string
  match?: readonly string[]
  children?: readonly NavItem[]
  /** Full document navigation (rewrites HTML estático: /portfolio, /cv) */
  hard?: boolean
}

/**
 * Menú único — Series · Plantillas gratis · Servicios · Sobre mí
 * Anclas del home: #recursos (series), #preanalisis (plantillas), #trabaja (sobre mí)
 */
export const STUDIO_NAV: readonly NavItem[] = [
  { href: '/#recursos', label: 'series' },
  { href: '/#preanalisis', label: 'plantillas gratis' },
  {
    href: '/servicios',
    label: 'servicios',
    match: ['/servicios', ...studioServices.map((s) => `/servicios/${s.slug}`)],
    children: studioServices.map((service) => ({
      href: `/servicios/${service.slug}`,
      label: service.shortTitle,
      match: [`/servicios/${service.slug}`],
    })),
  },
  {
    href: '/#trabaja',
    label: 'sobre mí',
    match: ['/trabaja-conmigo', '/sobre-elara'],
  },
]

/** @deprecated Prefer STUDIO_NAV */
export const ELARA_SECTIONS = [
  { id: 'recursos', label: 'Series' },
  { id: 'preanalisis', label: 'Plantillas' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'trabaja', label: 'Sobre mí' },
] as const

export type ElaraSectionId = (typeof ELARA_SECTIONS)[number]['id']

export function elaraSectionHref(sectionId: ElaraSectionId, pathname: string): string {
  return pathname === '/' ? `#${sectionId}` : `/#${sectionId}`
}

/** @deprecated Use STUDIO_NAV */
export function elaraSectionNav(_pathname?: string): readonly NavItem[] {
  void _pathname
  return STUDIO_NAV
}

/** @deprecated Use STUDIO_NAV */
export const elaraExploreNav = elaraSectionNav

/** @deprecated Use STUDIO_NAV */
export const ELARA_ROUTE_NAV: readonly NavItem[] = STUDIO_NAV

/** @deprecated Use STUDIO_NAV */
export function elaraLandingNav(): readonly NavItem[] {
  return STUDIO_NAV
}

export const B2B_ROUTES = [
  '/portfolio-print',
  '/factura',
  '/propuesta-val-debarras',
] as const

export function isB2bPath(pathname: string): boolean {
  if (pathname.startsWith('/propuesta-')) return true
  return B2B_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`))
}

export const B2B_NAV: readonly NavItem[] = [
  { href: '/', label: '← Inicio' },
  { href: '/linktree', label: 'Enlaces', match: ['/linktree'] },
  { href: '/portfolio', label: 'Portfolio', match: ['/portfolio', '/work'] },
  { href: '/cv', label: 'CV', match: ['/cv'] },
]
