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

      // Páginas legacy aún servidas como HTML estático hasta tener su diseño nuevo
      { source: '/cv',                destination: '/cv.html' },
      { source: '/portfolio',         destination: '/portfolio.html' },
      { source: '/portfolio-print',   destination: '/portfolio-print.html' },
      { source: '/propuesta',         destination: '/propuesta-template.html' },
    ]
  },
}

export default nextConfig
