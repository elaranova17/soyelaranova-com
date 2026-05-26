import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /**
   * Rewrites para URLs limpias (sin .html) de los assets estáticos
   * recuperados del repo viejo. Estos son los que Evelyn linkea desde
   * LinkedIn, propuestas B2B, etc. Manteniendo paths estables aunque
   * cambiemos repos o stack.
   */
  async rewrites() {
    return [
      // Páginas rediseñadas en Next.js NO tienen rewrite (se sirven desde app/<route>/page.tsx)
      // /linktree → app/linktree/page.tsx (rediseñado)

      // Páginas B2B de Evelyn — carpeta evelyn-b2b para no mezclar con Elara
      { source: '/linktree',          destination: '/evelyn-b2b/linktree.html' },
      { source: '/cv',                destination: '/evelyn-b2b/cv.html' },
      { source: '/portfolio',         destination: '/evelyn-b2b/portfolio.html' },
      { source: '/portfolio-print',   destination: '/evelyn-b2b/portfolio-print.html' },
      { source: '/propuesta',         destination: '/evelyn-b2b/propuesta-template.html' },
      { source: '/factura',           destination: '/evelyn-b2b/factura-template.html' },
      { source: '/descubrimiento',    destination: '/evelyn-b2b/descubrimiento.html' },
    ]
  },

  async redirects() {
    return [
      // /comunidad y /circulo son la misma cosa — consolidamos en /circulo
      { source: '/comunidad', destination: '/circulo', permanent: true },
      // B2B Evelyn — URLs legacy (carpeta evelyn-b2b o GitHub Pages)
      { source: '/evelyn-b2b/portfolio.html', destination: '/portfolio', permanent: true },
      { source: '/evelyn-b2b/cv.html', destination: '/cv', permanent: true },
      { source: '/evelyn-b2b/linktree.html', destination: '/linktree', permanent: true },
      { source: '/evelyn-b2b/propuesta-template.html', destination: '/propuesta', permanent: true },
      { source: '/evelyn-b2b/descubrimiento.html', destination: '/descubrimiento', permanent: true },
      { source: '/evelyn-b2b/portfolio-print.html', destination: '/portfolio-print', permanent: true },
      { source: '/evelyn-b2b/factura-template.html', destination: '/factura', permanent: true },
      { source: '/work', destination: '/portfolio', permanent: false },
    ]
  },
}

export default nextConfig
