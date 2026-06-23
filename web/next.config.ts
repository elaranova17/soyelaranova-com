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
      // /linktree → app/linktree/page.tsx (Next.js + iconografía Elara)

      // Páginas B2B de Evelyn — HTML estático en evelyn-b2b/
      { source: '/cv',                destination: '/evelyn-b2b/cv.html' },
      { source: '/portfolio',         destination: '/evelyn-b2b/portfolio.html' },
      { source: '/portfolio-print',   destination: '/evelyn-b2b/portfolio-print.html' },
      { source: '/casos-exito',       destination: '/evelyn-b2b/propuesta.html' },
      { source: '/factura',           destination: '/evelyn-b2b/factura-template.html' },
      { source: '/propuesta-val-debarras', destination: '/evelyn-b2b/propuesta-val-debarras.html' },
    ]
  },

  async redirects() {
    return [
      // Rutas legacy → secciones de la landing fusionada
      { source: '/comunidad', destination: '/#productos', permanent: false },
      { source: '/circulo', destination: '/#productos', permanent: false },
      { source: '/herramientas', destination: '/#oraculo', permanent: false },
      { source: '/contacto', destination: '/#contacto', permanent: false },
      { source: '/atelier', destination: '/trabaja-conmigo', permanent: false },
      { source: '/recursos', destination: '/#productos', permanent: false },
      { source: '/amazon', destination: '/universo', permanent: false },
      { source: '/login', destination: '/', permanent: false },
      { source: '/signup', destination: '/#contacto', permanent: false },
      { source: '/cuenta', destination: '/#contacto', permanent: false },
      { source: '/manifiesto', destination: '/sobre-elara', permanent: false },
      { source: '/lecturas', destination: '/oraculo', permanent: false },
      // B2B Evelyn — URLs legacy (carpeta evelyn-b2b o GitHub Pages)
      { source: '/evelyn-b2b/portfolio.html', destination: '/portfolio', permanent: true },
      { source: '/evelyn-b2b/cv.html', destination: '/cv', permanent: true },
      { source: '/evelyn-b2b/linktree.html', destination: '/linktree', permanent: true },
      { source: '/propuesta', destination: '/descubrimiento', permanent: true },
      { source: '/evelyn-b2b/propuesta-template.html', destination: '/descubrimiento', permanent: true },
      { source: '/evelyn-b2b/propuesta.html', destination: '/casos-exito', permanent: true },
      { source: '/evelyn-b2b/descubrimiento.html', destination: '/descubrimiento', permanent: true },
      { source: '/evelyn-b2b/portfolio-print.html', destination: '/portfolio-print', permanent: true },
      { source: '/evelyn-b2b/factura-template.html', destination: '/factura', permanent: true },
      { source: '/evelyn-b2b/propuesta-val-debarras.html', destination: '/propuesta-val-debarras', permanent: true },
      { source: '/work', destination: '/trabaja-conmigo', permanent: false },
    ]
  },
}

export default nextConfig
