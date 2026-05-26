/**
 * Navegación compartida · Elara Nova (landing) vs Evelyn B2B (portfolio).
 * El nav superior y el footer «Explorar» usan la misma lista.
 */

export type NavItem = {
  href: string
  label: string
  match?: readonly string[]
}

/** Secciones del index — footer Explorar + nav Elara */
export const ELARA_SECTIONS = [
  { id: 'herramientas', label: 'Herramientas' },
  { id: 'circulo', label: 'El Círculo' },
  { id: 'cursos', label: 'Cursos' },
  { id: 'productos', label: 'Productos' },
  { id: 'sobre', label: 'Sobre Elara' },
] as const

export type ElaraSectionId = (typeof ELARA_SECTIONS)[number]['id']

export function elaraExploreNav(pathname: string): readonly NavItem[] {
  return ELARA_SECTIONS.map(({ id, label }) => ({
    href: pathname === '/' ? `#${id}` : `/#${id}`,
    label,
  }))
}

/** Rutas Next / rewrites que usan nav B2B (Evelyn) */
export const B2B_ROUTES = [
  '/linktree',
  '/portfolio',
  '/cv',
  '/propuesta',
  '/descubrimiento',
  '/casos-exito',
  '/portfolio-print',
  '/factura',
  '/work',
] as const

export function isB2bPath(pathname: string): boolean {
  return B2B_ROUTES.some((route) => pathname === route || pathname.startsWith(`${route}/`))
}

export const B2B_NAV: readonly NavItem[] = [
  { href: '/linktree', label: '← Enlaces', match: ['/linktree'] },
  { href: '/portfolio', label: 'Portfolio', match: ['/portfolio', '/work'] },
  { href: '/cv', label: 'CV', match: ['/cv'] },
  { href: '/propuesta', label: 'Propuesta', match: ['/propuesta'] },
]
