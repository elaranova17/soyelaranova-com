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
      { source: '/cv',                destination: '/cv.html' },
      { source: '/portfolio',         destination: '/portfolio.html' },
      { source: '/portfolio-print',   destination: '/portfolio-print.html' },
      { source: '/linktree',          destination: '/linktree.html' },
      { source: '/propuesta',         destination: '/propuesta-template.html' },
    ]
  },
}

export default nextConfig
