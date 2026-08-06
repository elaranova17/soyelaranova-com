'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
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
  withArrow = false,
}: {
  href: string
  label: string
  onClick?: () => void
  className?: string
  withArrow?: boolean
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
  const content = (
    <>
      <span>{label}</span>
      {withArrow ? <ArrowRight size={16} strokeWidth={1.75} aria-hidden /> : null}
    </>
  )

  if (href.startsWith('http') || href.startsWith('mailto:') || href.includes('#')) {
    return (
      <a href={href} onClick={handleClick} className={cls}>
        {content}
      </a>
    )
  }

  return (
    <Link href={href} prefetch onClick={handleClick} className={cls}>
      {content}
    </Link>
  )
}

function MenuButton({
  open,
  onClick,
}: {
  open: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      id="site-menu-btn"
      onClick={onClick}
      aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
      aria-expanded={open}
      aria-controls="site-nav-panel"
      className={['site-nav__burger', open ? 'is-open' : ''].filter(Boolean).join(' ')}
    >
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

function EditorialWordmark({ href }: { href: string }) {
  return (
    <Link href={href} className="editorial-header__wordmark" aria-label="Elara Nova">
      <span>elara</span>
      <span>nova.</span>
    </Link>
  )
}

/**
 * EditorialHeader — header canónico studio (warm paper scrapboard).
 * Exportado como SiteNav para el layout.
 */
export function SiteNav() {
  const pathname = usePathname() ?? '/'
  const b2b = isB2bPath(pathname)
  const onHome = pathname === '/'

  const links: readonly NavItem[] = b2b ? B2B_NAV : STUDIO_NAV

  const logoHref = b2b ? '/linktree' : onHome ? '#inicio' : '/'
  const cta = b2b
    ? { href: '/descubrimiento', label: 'Pre-análisis' }
    : { href: '/descubrimiento', label: 'Hablemos' }

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
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenForPath(null)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.dispatchEvent(new Event('lenis:start'))
      document.body.style.overflow = prev
    }
  }, [open])

  const close = () => setOpenForPath(null)
  const toggle = () => setOpenForPath(open ? null : pathname)

  if (pathname.startsWith('/lp/')) return null

  /* ── B2B: layout compacto legacy ── */
  if (b2b) {
    return (
      <>
        <header
          className={['site-nav', 'site-nav--b2b', scrolled ? 'is-scrolled' : '', open ? 'is-menu-open' : '']
            .filter(Boolean)
            .join(' ')}
        >
          <div className="site-nav__inner">
            <div className="site-nav__brand">
              <a href={logoHref} className="site-nav__logo">
                Evelyn Patiño
              </a>
            </div>
            <div className="site-nav__actions">
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
              <NavCta href={cta.href} label={cta.label} className="site-nav__cta--bar" />
              <MenuButton open={open} onClick={toggle} />
            </div>
          </div>
        </header>
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
                className="site-nav__overlay site-nav__overlay--mobile-only"
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
                className="site-nav__panel site-nav__panel--mobile-only"
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
                    <PanelLink
                      key={item.href + item.label}
                      item={item}
                      pathname={pathname}
                      index={i}
                      onClose={close}
                    />
                  ))}
                </nav>
                <NavCta href={cta.href} label={cta.label} onClick={close} className="site-nav__cta--panel" />
              </motion.aside>
            </>
          )}
        </AnimatePresence>
      </>
    )
  }

  /* ── EditorialHeader (studio) ── */
  return (
    <>
      <header
        className={[
          'site-nav',
          'site-nav--studio',
          'editorial-header',
          scrolled ? 'is-scrolled' : '',
          open ? 'is-menu-open' : '',
        ]
          .filter(Boolean)
          .join(' ')}
      >
        <div className="editorial-header__grid">
          <div className="editorial-header__brand">
            <EditorialWordmark href={logoHref} />
          </div>

          <nav className="editorial-header__nav" aria-label="Navegación Elara Nova">
            {STUDIO_NAV.map((item) => (
              <NavLink key={item.href + item.label} item={item} pathname={pathname} />
            ))}
          </nav>

          <div className="editorial-header__cta">
            <NavCta
              href={cta.href}
              label={cta.label}
              className="site-nav__cta--bar"
              withArrow
            />
          </div>

          <div className="editorial-header__menu">
            <MenuButton open={open} onClick={toggle} />
          </div>
        </div>
      </header>

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
              className="site-nav__overlay"
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
              className="site-nav__panel site-nav__panel--studio"
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
                withArrow
              />

              <p className="site-nav__panel-tagline" aria-hidden>
                Menos a mano · más libertad.
              </p>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export { SiteNav as EditorialHeader }
