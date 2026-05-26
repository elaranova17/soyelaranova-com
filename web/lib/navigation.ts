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

/** Nav header landing = secciones clave + rutas */
export function elaraLandingNav(): readonly NavItem[] {
  return [
    { href: '#herramientas', label: 'Herramientas' },
    { href: '#circulo',      label: 'El Círculo'   },
    { href: '#cursos',       label: 'Cursos'       },
    { href: '#productos',    label: 'Productos'    },
    { href: '#sobre',        label: 'Sobre Elara'  },
    { href: '/oraculo',      label: 'Oráculo',     match: ['/oraculo'] },
    { href: '/universo',     label: 'Universo',    match: ['/universo'] },
  ]
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
  { href: '/linktree',   label: '← Enlaces',  match: ['/linktree'] },
  { href: '/portfolio',  label: 'Portfolio',   match: ['/portfolio', '/work'] },
  { href: '/cv',         label: 'CV',          match: ['/cv'] },
  { href: '/propuesta',  label: 'Propuesta',   match: ['/propuesta'] },
]
