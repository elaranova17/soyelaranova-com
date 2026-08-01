'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

/** Rutas sin footer: LP de Ads (autónomas), previews internas y el linktree (hub minimal). */
const HIDE_PREFIXES = ['/lp/', '/preview', '/linktree']

function TaskClock() {
  const [time, setTime] = useState('12:00')

  useEffect(() => {
    const tick = () => {
      const d = new Date()
      setTime(
        d.toLocaleTimeString('es-ES', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }),
      )
    }
    tick()
    const id = window.setInterval(tick, 30_000)
    return () => window.clearInterval(id)
  }, [])

  return <span className="site-footer__clock">{time}</span>
}

export function SiteFooter() {
  const pathname = usePathname() ?? '/'
  if (HIDE_PREFIXES.some((prefix) => pathname.startsWith(prefix))) return null

  return (
    <footer className="site-footer site-footer--y2k" aria-label="Pie de página">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <p className="site-footer__logo">elara nova</p>
          <p className="site-footer__by">by Evelyn Patiño</p>
          <p className="site-footer__tagline">
            IA, automatización y sistemas con estética y sentido común.
          </p>
        </div>

        <nav className="site-footer__col" aria-label="Secciones">
          <span className="site-footer__col-title">Explorar</span>
          <Link href="/#series">Series</Link>
          <Link href="/#plantillas">Plantillas</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/#sobre-mi">Sobre mí</Link>
          <a href="mailto:elaranova.17@gmail.com">Contacto</a>
        </nav>

        <nav className="site-footer__col" aria-label="Redes">
          <span className="site-footer__col-title">Redes</span>
          <a href="https://www.instagram.com/elaranova/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://www.tiktok.com/@elaranova" target="_blank" rel="noopener noreferrer">
            TikTok
          </a>
          <a href="https://www.youtube.com/@elaranova" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
          <a href="https://www.pinterest.com/" target="_blank" rel="noopener noreferrer">
            Pinterest
          </a>
        </nav>
      </div>

      <div className="site-footer__taskbar">
        <Link href="/#inicio" className="site-footer__start">
          inicio
        </Link>
        <span className="site-footer__online">
          <i aria-hidden="true" />
          Evelyn online
        </span>
        <span className="site-footer__taskbar-spacer" aria-hidden="true" />
        <a href="mailto:elaranova.17@gmail.com" className="site-footer__mail" aria-label="Email">
          ✉
        </a>
        <span className="site-footer__vol" aria-hidden="true">
          ♪
        </span>
        <TaskClock />
        <p className="site-footer__copy">© 2026 Elara Nova</p>
        <Link href="/legal" className="site-footer__legal">
          Privacidad
        </Link>
      </div>
    </footer>
  )
}
