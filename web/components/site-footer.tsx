'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

/** Rutas sin footer: LP de Ads (autónomas), previews internas y el linktree (hub minimal). */
const HIDE_PREFIXES = ['/lp/', '/preview', '/linktree']

export function SiteFooter() {
  const pathname = usePathname() ?? '/'
  if (HIDE_PREFIXES.some((prefix) => pathname.startsWith(prefix))) return null

  return (
    <footer className="site-footer" aria-label="Pie de página">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__logo">Elara Nova</p>
          <p className="site-footer__tagline">Menos a mano.</p>
          <p className="site-footer__by">Evelyn Patiño · Ingeniera · Europa</p>
        </div>

        <nav className="site-footer__col" aria-label="Secciones">
          <span className="site-footer__col-title">Estudio</span>
          <Link href="/servicios">Servicios</Link>
          <Link href="/#recursos">Recursos</Link>
          <Link href="/trabaja-conmigo">Sobre nosotras</Link>
          <Link href="/descubrimiento">Pre-análisis</Link>
        </nav>

        <div className="site-footer__col">
          <span className="site-footer__col-title">Contacto</span>
          <a href="mailto:elaranova.17@gmail.com">elaranova.17@gmail.com</a>
          <a href="https://wa.me/34613308585" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
          <a
            href="https://www.linkedin.com/in/evelyn-patino-laverde/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="site-footer__bar">
        <p>© 2026 Elara Nova · Evelyn Patiño</p>
        <Link href="/legal">Privacidad y términos</Link>
      </div>
    </footer>
  )
}
