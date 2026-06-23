/**
 * Navegación compartida · Elara Nova (landing) vs Evelyn B2B (portfolio).
 * El nav superior y el footer «Explorar» usan la misma lista.
 */

export type NavItem = {
  href: string
  label: string
  match?: readonly string[]
}

/** Secciones del index — home La Aranoa Studio */
export const ELARA_SECTIONS = [
  { id: 'servicios', label: 'Servicios' },
  { id: 'metodo', label: 'Metodo' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'productos', label: 'Productos' },
  { id: 'sobre', label: 'Sobre mi' },
  { id: 'contacto', label: 'Contacto' },
] as const

export type ElaraSectionId = (typeof ELARA_SECTIONS)[number]['id']

export function elaraSectionHref(sectionId: ElaraSectionId, pathname: string): string {
  return pathname === '/' ? `#${sectionId}` : `/#${sectionId}`
}

export function elaraSectionNav(pathname: string): readonly NavItem[] {
  return ELARA_SECTIONS.map(({ id, label }) => ({
    href: elaraSectionHref(id, pathname),
    label,
  }))
}

/** @deprecated Use elaraSectionNav */
export const elaraExploreNav = elaraSectionNav

export const ELARA_ROUTE_NAV: readonly NavItem[] = [
  { href: '/oraculo',     label: 'Oráculo',     match: ['/oraculo'] },
  { href: '/universo',    label: 'Universo',    match: ['/universo'] },
  { href: '/sobre-elara', label: 'Sobre Elara', match: ['/sobre-elara', '/manifiesto'] },
]

/** Nav header landing = secciones clave del estudio */
export function elaraLandingNav(): readonly NavItem[] {
  return [
    { href: '#servicios', label: 'Servicios' },
    { href: '#metodo', label: 'Metodo' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#productos', label: 'Productos' },
    { href: '#sobre', label: 'Sobre mi' },
    { href: '#contacto', label: 'Contacto' },
  ]
}

/** Rutas Next / rewrites que usan nav B2B (Evelyn) */
export const B2B_ROUTES = [
  '/linktree',
  '/portfolio',
  '/cv',
  '/casos-exito',
  '/portfolio-print',
  '/factura',
  '/work',
  '/propuesta-val-debarras',
] as const

/** Cotizaciones por cliente: /propuesta-{slug} — nunca la plantilla genérica. */
export function isB2bPath(pathname: string): boolean {
  if (pathname.startsWith('/propuesta-')) return true
  return B2B_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`))
}

export const B2B_NAV: readonly NavItem[] = [
  { href: '/linktree',    label: '← Enlaces',       match: ['/linktree'] },
  { href: '/portfolio',   label: 'Portfolio',        match: ['/portfolio', '/work'] },
  { href: '/cv',          label: 'CV',               match: ['/cv'] },
  { href: '/casos-exito', label: 'Clientes felices', match: ['/casos-exito'] },
]
