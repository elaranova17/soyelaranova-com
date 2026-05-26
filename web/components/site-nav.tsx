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
  const shared =
    'font-sans text-[10px] tracking-[0.26em] uppercase transition-colors duration-200 underline-offset-4'
  const activeCls =
    'text-[var(--color-gold-bright)] underline decoration-[var(--color-gold)] decoration-1'
  const idleCls = 'text-[var(--color-cream)]/70 hover:text-[var(--color-gold-soft)]'

  if (item.href.includes('#')) {
    return (
      <a href={item.href} onClick={onNavigate} className={`${shared} ${idleCls} ${className}`}>
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
      className={`${shared} ${active ? activeCls : idleCls} ${className}`}
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
  const cls = [
    'inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-4 py-2.5 font-sans text-[10px] font-bold tracking-[0.24em] text-[var(--color-purple-night)] uppercase transition-opacity hover:opacity-90 sm:px-5',
    className,
  ].join(' ')

  if (href.startsWith('http') || href.startsWith('mailto:') || href.includes('#')) {
    return <a href={href} onClick={onClick} className={cls}><span aria-hidden>✦</span>{label}</a>
  }

  return (
    <Link href={href} prefetch onClick={onClick} className={cls}>
      <span aria-hidden>✦</span>{label}
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
      className={[
        'menu-btn flex h-10 w-10 flex-col items-center justify-center gap-[5px] p-2',
        alwaysVisible ? '' : 'lg:hidden',
      ].join(' ')}
    >
      <span className={['block h-px w-[22px] bg-[var(--color-cream)] transition-all duration-300 origin-center', open ? 'translate-y-[6px] rotate-45' : ''].join(' ')} />
      <span className={['block h-px w-[22px] bg-[var(--color-cream)] transition-all duration-300', open ? 'opacity-0 scale-x-0' : ''].join(' ')} />
      <span className={['block h-px w-[22px] bg-[var(--color-cream)] transition-all duration-300 origin-center', open ? '-translate-y-[6px] -rotate-45' : ''].join(' ')} />
    </button>
  )
}

export function SiteNav() {
  const pathname = usePathname() ?? '/'
  const b2b = isB2bPath(pathname)
  const onHome = pathname === '/'

  const sectionLinks = elaraSectionNav(pathname)
  const links: readonly NavItem[] = b2b
    ? B2B_NAV
    : onHome
      ? elaraLandingNav()
      : [...sectionLinks, ...ELARA_ROUTE_NAV]

  const logoHref = b2b ? '/linktree' : onHome ? '#inicio' : '/'
  const cta = b2b
    ? { href: '/', label: 'Conoce a Elara' }
    : { href: '/linktree', label: 'Conoce a Evelyn' }

  const [scrolled, setScrolled] = useState(false)
  const [openForPath, setOpenForPath] = useState<string | null>(null)
  const open = openForPath === pathname

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpenForPath(null) }, [pathname])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpenForPath(null) }
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
        className={[
          'fixed inset-x-0 top-0 z-[60] flex h-[68px] items-center justify-between gap-4 px-5 md:px-10 transition-all duration-500',
          scrolled
            ? 'border-b border-[var(--color-lavender)]/20 bg-[var(--color-purple-night)]/93 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl'
            : 'bg-gradient-to-b from-[var(--color-purple-night)]/70 to-transparent',
        ].join(' ')}
      >
        {/* Logo */}
        {b2b ? (
          <Link
            href="/linktree"
            className="min-w-0 shrink font-display text-lg italic tracking-tight text-[var(--color-cream)] transition-opacity hover:opacity-90 md:text-xl"
          >
            Evelyn Patiño
          </Link>
        ) : (
          <ElaraLogo size="md" href={logoHref} className="min-w-0 shrink" />
        )}

        <div className="flex min-w-0 items-center justify-end gap-2 sm:gap-3">
          {/* Desktop nav — solo B2B; Elara siempre hamburguesa */}
          {b2b && (
            <nav
              className="hidden items-center gap-1 lg:flex xl:gap-2"
              aria-label="Navegación Evelyn B2B"
            >
              {/* "← Enlaces" separado visualmente del resto */}
              <NavLink
                key={B2B_NAV[0].href}
                item={B2B_NAV[0]}
                pathname={pathname}
                className="mr-3 opacity-60 hover:opacity-100"
              />
              <div className="h-3.5 w-px bg-[var(--color-cream)]/15" aria-hidden />
              {B2B_NAV.slice(1).map((item) => (
                <NavLink key={item.href + item.label} item={item} pathname={pathname} className="ml-1" />
              ))}
            </nav>
          )}

          <NavCta href={cta.href} label={cta.label} className="hidden sm:inline-flex" />

          {/* Hamburguesa: siempre en Elara, solo mobile en B2B */}
          <MenuButton open={open} onClick={toggle} alwaysVisible={!b2b} />
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
              className={[
                'nav-overlay fixed inset-0 z-[70] cursor-default bg-[var(--color-void)]/55 backdrop-blur-[2px]',
                b2b ? 'lg:hidden' : '',
              ].join(' ')}
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
              transition={{ duration: 0.48, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={[
                'nav-panel fixed top-0 right-0 z-[75] flex h-full w-[min(300px,82vw)] flex-col justify-center border-l border-[var(--color-gold)]/15 bg-[var(--color-purple-night)] px-10 py-20',
                b2b ? 'lg:hidden' : '',
              ].join(' ')}
              style={{ boxShadow: 'var(--shadow-glow-purple)' }}
            >
              <nav className="flex flex-col gap-1" aria-label="Menú">
                {links.map((item, i) => (
                  <motion.div
                    key={item.href + item.label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.4 }}
                  >
                    {item.href.includes('#') ? (
                      <a
                        href={item.href}
                        onClick={close}
                        className="block border-b border-[var(--color-cream)]/10 py-3.5 font-display text-xl italic text-[var(--color-cream)] transition-colors hover:text-[var(--color-gold-bright)]"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        prefetch
                        onClick={close}
                        aria-current={isActive(pathname, item) ? 'page' : undefined}
                        className={[
                          'block border-b border-[var(--color-cream)]/10 py-3.5 font-display text-xl italic transition-colors',
                          isActive(pathname, item)
                            ? 'text-[var(--color-gold-bright)]'
                            : 'text-[var(--color-cream)]/85 hover:text-[var(--color-gold-bright)]',
                        ].join(' ')}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </nav>

              <NavCta href={cta.href} label={cta.label} onClick={close} className="mt-8 w-full justify-center" />

              <p
                className="pointer-events-none absolute bottom-8 left-10 right-10 font-serif text-[10px] italic tracking-[0.2em] text-[var(--color-gold-soft)]/50"
                aria-hidden
              >
                {b2b
                  ? 'Ingeniera de software · Suiza'
                  : 'Mira todo lo que siempre fuiste capaz de ser.'}
              </p>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
