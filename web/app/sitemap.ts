import type { MetadataRoute } from 'next'

const BASE = 'https://soyelaranova.com'

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
    ['/trabaja-conmigo', 0.7],
    ['/sobre-elara', 0.6],
    ['/universo', 0.5],
    ['/oraculo', 0.5],
    ['/cursos', 0.5],
  ]

  return routes.map(([path, priority]) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority,
  }))
}
