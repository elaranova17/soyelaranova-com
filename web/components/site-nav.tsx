'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { B2B_NAV, STUDIO_NAV, isB2bPath, type NavItem } from '@/lib/navigation'

function isActive(pathname: string, item: NavItem): boolean {
  if (item.match) {
    return item.match.some(
      (route) => pathname === route || pathname.startsWith(`${route}/`),
    )
  }
  if (item.href.includes('#')) return false
  return pathname === item.href
}

function NavLink({
  item,
  pathname,
  onNavigate,
  className = '',
}: {
  item: NavItem
  pathname: string
  onNavigate?: () => void
  className?: string
}) {
  const active = isActive(pathname, item)
  const shared = 'site-nav__link'
  const state = active ? 'is-active' : ''

  // Anchors y rewrites HTML estáticos (/portfolio, /cv): full load, no client nav.
  if (item.href.includes('#') || item.hard) {
    return (
      <a
        href={item.href}
        onClick={onNavigate}
        aria-current={active ? 'page' : undefined}
        className={`${shared} ${state} ${className}`}
      >
        {item.label}
      </a>
    )
  }

  return (
    <Link
      href={item.href}
      prefetch
      onClick={onNavigate}
      aria-current={active ? 'page' : undefined}
      className={`${shared} ${state} ${className}`}
    >
      {item.label}
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
  const trackClick = () => {
    const win = window as Window & {
      dataLayer?: Array<Record<string, unknown>>
      gtag?: (command: 'event', eventName: string, params?: Record<string, unknown>) => void
      plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void
    }
    const payload = {
      event: 'cta_click',
      event_category: 'lead',
      event_label: 'site_nav_cta',
      href,
    }

    win.dataLayer?.push(payload)
    win.gtag?.('event', 'cta_click', payload)
    win.plausible?.('cta_click', { props: { category: 'lead', label: 'site_nav_cta', href } })
  }

  const handleClick = () => {
    trackClick()
    onClick?.()
  }

  const cls = ['site-nav__cta', className].filter(Boolean).join(' ')

  if (href.startsWith('http') || href.startsWith('mailto:') || href.includes('#')) {
    return (
      <a href={href} onClick={handleClick} className={cls}>
        <span aria-hidden>+</span>
        {label}
      </a>
    )
  }

  return (
    <Link href={href} prefetch onClick={handleClick} className={cls}>
      <span aria-hidden>+</span>
      {label}
    </Link>
  )
}

function MenuButton({
  open,
  onClick,
  alwaysVisible = false,
}: {
  open: boolean
  onClick: () => void
  alwaysVisible?: boolean
}) {
  return (
    <button
      type="button"
      id="site-menu-btn"
      onClick={onClick}
      aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
      aria-expanded={open}
      aria-controls="site-nav-panel"
      className={['site-nav__burger', alwaysVisible ? '' : 'site-nav__burger--mobile-only', open ? 'is-open' : '']
        .filter(Boolean)
        .join(' ')}
    >
      <span />
      <span />
      <span />
    </button>
  )
}

function PanelLink({
  item,
  pathname,
  index,
  onClose,
  nested = false,
}: {
  item: NavItem
  pathname: string
  index: number
  onClose: () => void
  nested?: boolean
}) {
  const active = isActive(pathname, item)
  const num = nested ? '' : String(index + 1).padStart(2, '0')
  const itemCls = [
    'site-nav__panel-item',
    nested ? 'site-nav__panel-item--nested' : '',
    active ? 'is-active' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const handleClick = () => {
    onClose()
    window.dispatchEvent(new Event('lenis:start'))
  }

  const content = (
    <>
      {!nested && <span className="site-nav__panel-num">{num}</span>}
      <span className="site-nav__panel-label">{item.label}</span>
    </>
  )

  if (item.href.includes('#') || item.hard) {
    return (
      <a
        href={item.href}
        onClick={handleClick}
        aria-current={active ? 'page' : undefined}
        className={itemCls}
      >
        {content}
      </a>
    )
  }

  return (
    <Link
      href={item.href}
      prefetch
      onClick={handleClick}
      aria-current={active ? 'page' : undefined}
      className={itemCls}
    >
      {content}
    </Link>
  )
}

export function SiteNav() {
  const pathname = usePathname() ?? '/'
  const b2b = isB2bPath(pathname)
  const onHome = pathname === '/'

  // Menú canónico único en todo el sitio Elara; B2B conserva el suyo.
  const links: readonly NavItem[] = b2b ? B2B_NAV : STUDIO_NAV

  // En B2B el logo vuelve al hub Evelyn; “← Inicio” del menú regresa al sitio.
  const logoHref = b2b ? '/linktree' : onHome ? '#inicio' : '/'
  const logoHard = b2b
  const cta = { href: '/descubrimiento', label: 'Pre-análisis' }

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
    window.dispatchEvent(new Event('lenis:stop'))
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenForPath(null)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.dispatchEvent(new Event('lenis:start'))
    }
  }, [open])

  const close = () => setOpenForPath(null)
  const toggle = () => setOpenForPath(open ? null : pathname)

  // Landings de Ads (/lp/*): sin navegación para evitar fugas (Quality Score).
  if (pathname.startsWith('/lp/')) return null

  return (
    <>
      {/* 1 · BARRA */}
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.04, ease: [0.22, 1, 0.36, 1] }}
        className={['site-nav', scrolled ? 'is-scrolled' : '', open ? 'is-menu-open' : '']
          .filter(Boolean)
          .join(' ')}
      >
        {logoHard ? (
          <a href={logoHref} className="site-nav__logo">
            Evelyn Patiño
          </a>
        ) : (
          <Link href={logoHref} className="site-nav__logo">
            <img
              src="/brand/isotipo.svg"
              alt=""
              aria-hidden="true"
              style={{ height: '1.35em', width: 'auto', marginRight: '0.4em', verticalAlign: '-0.28em', display: 'inline-block' }}
            />
            Elara Nova
          </Link>
        )}

        <div className="site-nav__actions">
          {b2b && (
            <nav className="site-nav__desktop" aria-label="Navegación Evelyn B2B">
              <NavLink
                key={B2B_NAV[0].href}
                item={B2B_NAV[0]}
                pathname={pathname}
                className="site-nav__link--muted"
              />
              <span className="site-nav__divider" aria-hidden />
              {B2B_NAV.slice(1).map((item) => (
                <NavLink key={item.href + item.label} item={item} pathname={pathname} />
              ))}
            </nav>
          )}

          <NavCta href={cta.href} label={cta.label} className="site-nav__cta--bar" />

          {/* 2 · HAMBURGUESA */}
          <MenuButton open={open} onClick={toggle} alwaysVisible={!b2b} />
        </div>
      </motion.header>

      {/* 3 · PANEL */}
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              key="nav-overlay"
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              aria-label="Cerrar menú"
              className={['site-nav__overlay', b2b ? 'site-nav__overlay--mobile-only' : '']
                .filter(Boolean)
                .join(' ')}
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
              transition={{ duration: 0.32, ease: [0.22, 0.61, 0.36, 1] }}
              className={['site-nav__panel', b2b ? 'site-nav__panel--mobile-only' : '']
                .filter(Boolean)
                .join(' ')}
            >
              <div className="site-nav__panel-top">
                <p className="site-nav__panel-eyebrow">Menú</p>
                <button
                  type="button"
                  className="site-nav__panel-close"
                  onClick={close}
                  aria-label="Cerrar menú"
                >
                  <span aria-hidden>×</span>
                </button>
              </div>

              <nav className="site-nav__panel-nav" aria-label="Menú">
                {links.map((item, i) => (
                  <motion.div
                    key={item.href + item.label}
                    initial={{ opacity: 0, x: 18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.06 + i * 0.045,
                      duration: 0.35,
                      ease: [0.22, 0.61, 0.36, 1],
                    }}
                    className={item.children?.length ? 'site-nav__panel-group' : undefined}
                  >
                    <PanelLink item={item} pathname={pathname} index={i} onClose={close} />
                    {item.children?.map((child) => (
                      <PanelLink
                        key={child.href + child.label}
                        item={child}
                        pathname={pathname}
                        index={i}
                        onClose={close}
                        nested
                      />
                    ))}
                  </motion.div>
                ))}
              </nav>

              <NavCta
                href={cta.href}
                label={cta.label}
                onClick={close}
                className="site-nav__cta--panel"
              />

              <p className="site-nav__panel-tagline" aria-hidden>
                {b2b
                  ? 'Ingeniera de software · Europa'
                  : 'Mira todo lo que siempre fuiste capaz de ser.'}
              </p>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
