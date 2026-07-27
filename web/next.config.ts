import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    // Mejor calidad de imagen: AVIF/WebP modernos + permite quality alto (90)
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 90],
  },

  /**
   * Rewrites para URLs limpias (sin .html) de los assets estáticos
   * recuperados del repo viejo. Estos son los que Evelyn linkea desde
   * LinkedIn, propuestas B2B, etc. Manteniendo paths estables aunque
   * cambiemos repos o stack.
   */
  async rewrites() {
    return [
      // /linktree → app/linktree/page.tsx (Next.js + iconografía Elara)

      // /cv y /portfolio son App Router (look CapCut editorial).
      // HTML estático restante (print / factura / propuestas):
      { source: '/portfolio-print',   destination: '/evelyn-b2b/portfolio-print.html' },
      { source: '/factura',           destination: '/evelyn-b2b/factura-template.html' },
      { source: '/propuesta-val-debarras', destination: '/evelyn-b2b/propuesta-val-debarras.html' },
    ]
  },

  async redirects() {
    return [
      // Rutas legacy → destinos canónicos actuales (sin anchors muertos)
      { source: '/comunidad', destination: '/#recursos', permanent: false },
      { source: '/circulo', destination: '/universo', permanent: false },
      { source: '/herramientas', destination: '/servicios', permanent: false },
      { source: '/contacto', destination: '/descubrimiento', permanent: false },
      { source: '/atelier', destination: '/trabaja-conmigo', permanent: false },
      { source: '/recursos', destination: '/#recursos', permanent: false },
      { source: '/amazon', destination: '/universo', permanent: false },
      { source: '/login', destination: '/', permanent: false },
      { source: '/signup', destination: '/descubrimiento', permanent: false },
      { source: '/cuenta', destination: '/descubrimiento', permanent: false },
      { source: '/manifiesto', destination: '/sobre-elara', permanent: false },
      { source: '/lecturas', destination: '/oraculo', permanent: false },
      // “Clientes felices” retirado del hub — redirige a portfolio
      { source: '/casos-exito', destination: '/portfolio', permanent: true },
      // B2B Evelyn — URLs legacy (carpeta evelyn-b2b o GitHub Pages)
      { source: '/evelyn-b2b/portfolio.html', destination: '/portfolio', permanent: true },
      { source: '/evelyn-b2b/cv.html', destination: '/cv', permanent: true },
      { source: '/evelyn-b2b/linktree.html', destination: '/linktree', permanent: true },
      { source: '/propuesta', destination: '/descubrimiento', permanent: true },
      { source: '/evelyn-b2b/propuesta-template.html', destination: '/descubrimiento', permanent: true },
      { source: '/evelyn-b2b/propuesta.html', destination: '/portfolio', permanent: true },
      { source: '/evelyn-b2b/descubrimiento.html', destination: '/descubrimiento', permanent: true },
      { source: '/evelyn-b2b/portfolio-print.html', destination: '/portfolio-print', permanent: true },
      { source: '/evelyn-b2b/factura-template.html', destination: '/factura', permanent: true },
      { source: '/evelyn-b2b/propuesta-val-debarras.html', destination: '/propuesta-val-debarras', permanent: true },
      { source: '/work', destination: '/trabaja-conmigo', permanent: false },
    ]
  },
}

export default nextConfig
