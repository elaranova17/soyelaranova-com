'use client'

/**
 * SiteNav — navegación única Elara Nova (v1).
 *
 * Patrón: barra fija · logo centro · enlaces laterales (desktop)
 * · móvil: panel desliza desde la derecha + overlay + hamburger → X
 *
 * En `/` usa anclas de la landing; en el resto, rutas v1 del CONTEXT.
 */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { ElaraLogo } from '@/components/elara-logo'

type NavItem = { href: string; label: string; match?: readonly string[] }

const ROUTE_NAV: readonly NavItem[] = [
  { href: '/', label: 'Inicio', match: ['/'] },
  { href: '/oraculo', label: 'Oráculo', match: ['/oraculo'] },
  { href: '/universo', label: 'Universo', match: ['/universo'] },
  { href: '/sobre-elara', label: 'Sobre Elara', match: ['/sobre-elara', '/manifiesto'] },
]

const LANDING_NAV: readonly NavItem[] = [
  { href: '#herramientas', label: 'Herramientas' },
  { href: '#circulo', label: 'Círculo' },
  { href: '#cursos', label: 'Cursos' },
  { href: '#productos', label: 'Productos' },
  { href: '#sobre', label: 'Sobre mí' },
]

function isActive(pathname: string, item: NavItem): boolean {
  if (item.match) return item.match.includes(pathname)
  if (item.href.startsWith('#')) return false
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
  const activeCls = 'text-[var(--color-gold-bright)] underline decoration-[var(--color-gold)] decoration-1'
  const idleCls =
    'text-[var(--color-cream)]/70 hover:text-[var(--color-gold-soft)]'

  if (item.href.startsWith('#')) {
    return (
      <a
        href={item.href}
        onClick={onNavigate}
        className={`${shared} ${idleCls} ${className}`}
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
      className={`${shared} ${active ? activeCls : idleCls} ${className}`}
    >
      {item.label}
    </Link>
  )
}

function MenuButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      id="site-menu-btn"
      onClick={onClick}
      aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
      aria-expanded={open}
      aria-controls="site-nav-panel"
      className="menu-btn flex h-10 w-10 flex-col items-center justify-center gap-[5px] p-2 lg:hidden"
    >
      <span
        className={[
          'block h-px w-[22px] bg-[var(--color-cream)] transition-all duration-300 origin-center',
          open ? 'translate-y-[6px] rotate-45' : '',
        ].join(' ')}
      />
      <span
        className={[
          'block h-px w-[22px] bg-[var(--color-cream)] transition-all duration-300',
          open ? 'opacity-0 scale-x-0' : '',
        ].join(' ')}
      />
      <span
        className={[
          'block h-px w-[22px] bg-[var(--color-cream)] transition-all duration-300 origin-center',
          open ? '-translate-y-[6px] -rotate-45' : '',
        ].join(' ')}
      />
    </button>
  )
}

export function SiteNav() {
  const pathname = usePathname() ?? '/'
  const isLanding = pathname === '/'
  const links = isLanding ? LANDING_NAV : ROUTE_NAV
  const leftLinks = links.slice(0, Math.ceil(links.length / 2))
  const rightLinks = links.slice(Math.ceil(links.length / 2))

  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const close = () => setOpen(false)
  const toggle = () => setOpen((v) => !v)

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
        className={[
          'fixed inset-x-0 top-0 z-[60] grid h-[68px] grid-cols-[1fr_auto_1fr] items-center px-5 md:px-10 transition-all duration-500',
          scrolled
            ? 'border-b border-[var(--color-lavender)]/20 bg-[var(--color-purple-night)]/93 shadow-[0_8px_40px_rgba(0,0,0,0.45)] backdrop-blur-2xl'
            : 'bg-gradient-to-b from-[var(--color-purple-night)]/70 to-transparent',
        ].join(' ')}
      >
        <nav
          className="hidden items-center gap-5 justify-self-start lg:flex"
          aria-label="Navegación principal"
        >
          {leftLinks.map((item) => (
            <NavLink key={item.href + item.label} item={item} pathname={pathname} />
          ))}
        </nav>

        <div className="justify-self-center">
          <ElaraLogo size="md" href={isLanding ? '#inicio' : '/'} />
        </div>

        <div className="flex items-center justify-end gap-4 justify-self-end">
          <nav className="hidden items-center gap-5 lg:flex" aria-label="Navegación secundaria">
            {rightLinks.map((item) => (
              <NavLink key={item.href + item.label} item={item} pathname={pathname} />
            ))}
          </nav>

          {isLanding && (
            <a
              href="#email"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-5 py-2.5 font-sans text-[10px] font-bold tracking-[0.28em] text-[var(--color-purple-night)] uppercase transition-opacity hover:opacity-90"
            >
              <span aria-hidden>✦</span>
              Unirme
            </a>
          )}

          <MenuButton open={open} onClick={toggle} />
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
              className="nav-overlay fixed inset-0 z-[70] cursor-default bg-[var(--color-void)]/55 backdrop-blur-[2px] lg:hidden"
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
              className="nav-panel fixed top-0 right-0 z-[75] flex h-full w-[min(300px,82vw)] flex-col justify-center border-l border-[var(--color-gold)]/15 bg-[var(--color-purple-night)] px-10 py-20 lg:hidden"
              style={{ boxShadow: 'var(--shadow-glow-purple)' }}
            >
              <nav className="flex flex-col gap-1" aria-label="Menú móvil">
                {links.map((item, i) => (
                  <motion.div
                    key={item.href + item.label}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.4 }}
                  >
                    {item.href.startsWith('#') ? (
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

              {isLanding && (
                <a
                  href="#email"
                  onClick={close}
                  className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-gold)] px-6 py-3 font-sans text-[10px] font-bold tracking-[0.28em] text-[var(--color-purple-night)] uppercase"
                >
                  Unirme al Círculo
                </a>
              )}

              <p
                className="pointer-events-none absolute bottom-8 left-10 right-10 font-serif text-[10px] italic tracking-[0.2em] text-[var(--color-gold-soft)]/50"
                aria-hidden
              >
                Mira todo lo que siempre fuiste capaz de ser.
              </p>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
