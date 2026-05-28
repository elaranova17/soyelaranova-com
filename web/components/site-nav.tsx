'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ElaraLogo } from '@/components/elara-logo'
import {
  B2B_NAV,
  ELARA_ROUTE_NAV,
  elaraSectionNav,
  elaraLandingNav,
  isB2bPath,
  type NavItem,
} from '@/lib/navigation'

function isActive(pathname: string, item: NavItem): boolean {
  if (item.match) return item.match.includes(pathname)
  if (item.href.includes('#')) return false
  return pathname === item.href
}

function PanelLink({
  item,
  pathname,
  index,
  onNavigate,
}: {
  item: NavItem
  pathname: string
  index: number
  onNavigate: () => void
}) {
  const active = isActive(pathname, item)
  const cls = [
    'site-nav-ritual__panel-item group',
    active ? 'is-active' : '',
  ].join(' ')

  const inner = (
    <>
      <span>{item.label}</span>
      <span className="site-nav-ritual__panel-num transition-transform group-hover:translate-x-1">
        {String(index + 1).padStart(2, '0')}
      </span>
    </>
  )

  if (item.href.includes('#')) {
    return (
      <a href={item.href} onClick={onNavigate} className={cls}>
        {inner}
      </a>
    )
  }

  return (
    <Link
      href={item.href}
      prefetch
      onClick={onNavigate}
      aria-current={active ? 'page' : undefined}
      className={cls}
    >
      {inner}
    </Link>
  )
}

function NavCta({
  href,
  label,
  onClick,
  className = '',
}: {
  href: string
  label: string
  onClick?: () => void
  className?: string
}) {
  const cls = ['nav-cta-ritual nav-cta-ritual--gold', className].filter(Boolean).join(' ')

  if (href.startsWith('http') || href.startsWith('mailto:') || href.includes('#')) {
    return (
      <a href={href} onClick={onClick} className={cls}>
        <span aria-hidden>✦</span>
        {label}
      </a>
    )
  }

  return (
    <Link href={href} prefetch onClick={onClick} className={cls}>
      <span aria-hidden>✦</span>
      {label}
    </Link>
  )
}

export function SiteNav() {
  const pathname = usePathname() ?? '/'
  const b2b = isB2bPath(pathname)
  const onHome = pathname === '/'

  const links: readonly NavItem[] = b2b
    ? [...B2B_NAV, { href: '/', label: 'Elara Nova' }]
    : onHome
      ? elaraLandingNav()
      : [...elaraSectionNav(pathname), ...ELARA_ROUTE_NAV]

  const logoHref = b2b ? '/linktree' : onHome ? '#inicio' : '/'
  const cta = b2b
    ? { href: '/descubrimiento', label: 'Cotizar proyecto' }
    : { href: '/portfolio', label: 'Work by Evelyn' }

  const [scrolled, setScrolled] = useState(false)
  const [openForPath, setOpenForPath] = useState<string | null>(null)
  const open = openForPath === pathname

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    queueMicrotask(() => setOpenForPath(null))
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenForPath(null)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const close = () => setOpenForPath(null)
  const toggle = () => setOpenForPath(open ? null : pathname)

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        className={['site-nav-ritual', scrolled ? 'is-scrolled' : ''].filter(Boolean).join(' ')}
      >
        {b2b ? (
          <Link href="/linktree" className="site-nav-ritual__logo">
            Evelyn Patiño
          </Link>
        ) : (
          <ElaraLogo
            size="md"
            href={logoHref}
            linkClassName="site-nav-ritual__logo site-nav-ritual__logo--elara min-w-0 shrink"
          />
        )}

        <div className="site-nav-ritual__actions">
          <NavCta href={cta.href} label={cta.label} />
          <button
            type="button"
            id="site-menu-btn"
            onClick={toggle}
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            aria-controls="site-nav-panel"
            className="site-nav-ritual__menu-btn"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              key="nav-overlay"
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              aria-label="Cerrar menú"
              className="site-nav-ritual__overlay is-open"
              onClick={close}
            />

            <motion.aside
              id="site-nav-panel"
              key="nav-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Menú de navegación"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="site-nav-ritual__panel is-open"
            >
              <div className="site-nav-ritual__panel-bg" aria-hidden />
              <div className="site-nav-ritual__panel-veil" aria-hidden />

              <nav className="site-nav-ritual__panel-nav" aria-label="Menú">
                {links.map((item, i) => (
                  <motion.div
                    key={item.href + item.label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.04, duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <PanelLink item={item} pathname={pathname} index={i} onNavigate={close} />
                  </motion.div>
                ))}
              </nav>

              <NavCta
                href={cta.href}
                label={cta.label}
                onClick={close}
                className="site-nav-ritual__panel-cta"
              />

              <p className="site-nav-ritual__panel-tagline" aria-hidden>
                {b2b
                  ? 'Ingeniera de software · Suiza'
                  : 'Mira todo lo que siempre fuiste capaz de hacer.'}
              </p>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
