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
    ]
  },

  async redirects() {
    return [
      // /comunidad y /circulo son la misma cosa — consolidamos en /circulo
      { source: '/comunidad', destination: '/circulo', permanent: true },
    ]
  },
}

export default nextConfig
