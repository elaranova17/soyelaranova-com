/**
 * Navegación compartida · menú canónico del sitio (Y2K IT Girly).
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
 * Menú único — idéntico en todas las páginas (excepto /lp/* sin nav).
 * Brief home: Series · Plantillas gratis · Servicios · Sobre mí
 */
export const STUDIO_NAV: readonly NavItem[] = [
  { href: '/#series', label: 'Series', match: ['/'] },
  { href: '/#plantillas', label: 'Plantillas gratis' },
  {
    href: '/servicios',
    label: 'Servicios',
    match: ['/servicios', ...studioServices.map((s) => `/servicios/${s.slug}`)],
    children: studioServices.map((service) => ({
      href: `/servicios/${service.slug}`,
      label: service.shortTitle,
      match: [`/servicios/${service.slug}`],
    })),
  },
  {
    href: '/#sobre-mi',
    label: 'Sobre mí',
    match: ['/trabaja-conmigo', '/sobre-elara'],
  },
]

/** @deprecated Prefer STUDIO_NAV */
export const ELARA_SECTIONS = [
  { id: 'series', label: 'Series' },
  { id: 'plantillas', label: 'Plantillas' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'sobre-mi', label: 'Sobre mí' },
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

/**
 * Solo HTML estático restante (factura / propuestas).
 */
export const B2B_ROUTES = [
  '/portfolio-print',
  '/factura',
  '/propuesta-val-debarras',
] as const

/** Cotizaciones por cliente: /propuesta-{slug} */
export function isB2bPath(pathname: string): boolean {
  if (pathname.startsWith('/propuesta-')) return true
  return B2B_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`))
}

/** @deprecated Hub Evelyn ya usa STUDIO_NAV */
export const B2B_NAV: readonly NavItem[] = [
  { href: '/', label: '← Inicio' },
  { href: '/linktree', label: 'Enlaces', match: ['/linktree'] },
  { href: '/portfolio', label: 'Portfolio', match: ['/portfolio', '/work'] },
  { href: '/cv', label: 'CV', match: ['/cv'] },
]
