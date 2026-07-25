/**
 * Navegación compartida · menú canónico del estudio vs Evelyn B2B.
 * El panel hamburguesa del sitio Elara usa SIEMPRE la misma lista (STUDIO_NAV),
 * con URLs estables desde cualquier página. B2B conserva su propio menú.
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
 * Menú único del estudio — idéntico en todas las páginas (excepto /lp/* sin nav).
 * Cada label apunta siempre a la misma URL exacta (sin concatenar listas).
 */
export const STUDIO_NAV: readonly NavItem[] = [
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
  { href: '/#recursos', label: 'Recursos' },
  {
    href: '/trabaja-conmigo',
    label: 'Sobre nosotras',
    match: ['/trabaja-conmigo', '/sobre-elara', '/manifiesto'],
  },
  {
    href: '/descubrimiento',
    label: 'Contacto',
    match: ['/descubrimiento'],
  },
]

/** @deprecated Prefer STUDIO_NAV — se mantiene por compatibilidad de imports legacy */
export const ELARA_SECTIONS = [
  { id: 'recursos', label: 'Recursos' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'trabaja', label: 'Sobre nosotras' },
  { id: 'contacto', label: 'Contacto' },
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

/** Rutas Next / rewrites que usan nav B2B (Evelyn) — sin “clientes felices” */
export const B2B_ROUTES = [
  '/linktree',
  '/portfolio',
  '/cv',
  '/portfolio-print',
  '/factura',
  '/propuesta-val-debarras',
] as const

/** Cotizaciones por cliente: /propuesta-{slug} — nunca la plantilla genérica. */
export function isB2bPath(pathname: string): boolean {
  if (pathname.startsWith('/propuesta-')) return true
  return B2B_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`))
}

export const B2B_NAV: readonly NavItem[] = [
  { href: '/', label: '← Inicio', hard: true },
  { href: '/linktree', label: 'Enlaces', match: ['/linktree'] },
  { href: '/portfolio', label: 'Portfolio', match: ['/portfolio', '/work'], hard: true },
  { href: '/cv', label: 'CV', match: ['/cv'], hard: true },
]
