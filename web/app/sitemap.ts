import type { MetadataRoute } from 'next'

const BASE = 'https://soyelaranova.com'

/**
 * Solo rutas canónicas que responden 200 sin redirect intermedio.
 * Excluye: /lp/* (ads), /preview/*, stubs legacy (/login…), rewrites HTML B2B
 * que no son App Router pages (se listan las URLs limpias públicas útiles).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const routes: Array<[path: string, priority: number]> = [
    ['/', 1],
    ['/servicios', 0.9],
    ['/servicios/automatizaciones', 0.9],
    ['/servicios/landing-pages', 0.9],
    ['/servicios/sitios-web', 0.9],
    ['/servicios/google-ads', 0.9],
    ['/descubrimiento', 0.8],
    ['/sesion-estrategica', 0.75],
    ['/sobre-elara', 0.7],
    ['/trabaja-conmigo', 0.7],
    ['/universo', 0.5],
    ['/oraculo', 0.5],
    ['/cursos', 0.5],
    ['/legal', 0.3],
    ['/linktree', 0.4],
    ['/portfolio', 0.4],
    ['/cv', 0.4],
  ]

  return routes.map(([path, priority]) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority,
  }))
}
