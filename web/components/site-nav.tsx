'use client'

/**
 * SiteNav — UNICA navegacion del sitio Elara Nova.
 *
 * Patron: minimal bar arriba (logo + menu button) → fullscreen overlay
 * cinematografico con stagger entrance.
 *
 * Closed state:
 *   - Bar top transparente con logo constelacion + "Elara Nova" italic (izq)
 *   - Boton "Menú" cartouche (der)
 *   - Sin links horizontales visibles
 *
 * Open state:
 *   - Backdrop full-screen con blur + tinte purple + dark vignette
 *   - 5 links large italic Playfair centrados verticalmente con stagger
 *   - Active link en gold-bright con star marker
 *   - CTA "Entrar" abajo
 *   - Boton X cerrar arriba derecha
 *   - Polvo dorado de fondo (estatico atmosfera)
 *   - ESC cierra · click en backdrop cierra · click en link navega + cierra
 *   - Body scroll lock cuando esta abierto
 */

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

type NavLink = { href: string; label: string; num: string }
const NAV: readonly NavLink[] = [
  { href: '/',              label: 'Inicio',        num: '00' },
  { href: '/herramientas',  label: 'Herramientas',  num: '01' },
  { href: '/herramientas',  label: 'Astrología',    num: '02' },
  { href: '/herramientas',  label: 'Oráculo',       num: '03' },
  { href: '/recursos',      label: 'Recursos',      num: '04' },
  { href: '/comunidad',     label: 'Comunidad',     num: '05' },
  { href: '/atelier',       label: 'Atelier',       num: '06' },
  { href: '/recursos',      label: 'Cursos',        num: '07' },
]

type TopNavLink = { href: string; label: string; activePaths: readonly string[] }
const TOP_NAV: readonly TopNavLink[] = [
  { href: '/herramientas', label: 'Herramientas', activePaths: ['/herramientas'] },
  { href: '/recursos', label: 'Recursos', activePaths: ['/recursos'] },
  { href: '/comunidad', label: 'Círculo', activePaths: ['/comunidad', '/circulo'] },
]

function TopLogo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg
        width={20}
        height={20}
        viewBox="0 0 20 20"
        aria-hidden
        style={{ color: 'var(--color-gold-bright)' }}
      >
        <path
          d="M10 1.5 11.75 7.9 18.5 10 11.75 12.1 10 18.5 8.25 12.1 1.5 10 8.25 7.9 10 1.5Z"
          fill="currentColor"
        />
        <path
          d="M10 5.4 10.9 9.1 14.6 10 10.9 10.9 10 14.6 9.1 10.9 5.4 10 9.1 9.1 10 5.4Z"
          fill="rgba(245,238,248,0.42)"
        />
      </svg>
      <span className="font-sans text-[11px] font-medium tracking-[0.3em] text-[var(--color-cream)] uppercase">
        Elara Nova
      </span>
    </div>
  )
}

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <svg width={26} height={20} viewBox="0 0 26 20" aria-hidden style={{ color: 'var(--color-gold-bright)' }}>
        <g fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx={3} cy={10} r={1.5} fill="currentColor" />
          <circle cx={9} cy={4}  r={1.5} fill="currentColor" />
          <circle cx={13} cy={12} r={1.5} fill="currentColor" />
          <circle cx={19} cy={6}  r={1.5} fill="currentColor" />
          <circle cx={23} cy={14} r={1.5} fill="currentColor" />
          <path d="M3 10 L9 4 L13 12 L19 6 L23 14" />
        </g>
      </svg>
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          color: 'var(--color-cream)',
          fontSize: 18,
          letterSpacing: '0.1em',
        }}
      >
        Elara Nova
      </span>
    </div>
  )
}

export function SiteNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname() ?? '/'

  // ESC cierra · body scroll lock cuando esta abierto
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      {/* === MINIMAL BAR TOP === */}
      <motion.header
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 right-0 left-0 z-[60] grid grid-cols-[1fr_auto] items-center px-6 py-5 md:grid-cols-[1fr_auto_1fr] md:px-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,0,16,0.55) 0%, rgba(10,0,16,0.20) 60%, transparent 100%)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
        }}
      >
        <Link href="/" prefetch aria-label="Elara Nova · Inicio">
          <TopLogo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegación principal">
          {TOP_NAV.map((link) => {
            const active = link.activePaths.includes(pathname)
            return (
              <Link
                key={link.label}
                href={link.href}
                className={[
                  'font-sans text-[10px] tracking-[0.28em] uppercase transition-colors duration-200 underline-offset-4',
                  active
                    ? 'text-[var(--color-gold-bright)] underline decoration-[var(--color-gold)] decoration-1'
                    : 'text-[var(--color-cream)]/75 hover:text-[var(--color-gold-soft)] hover:opacity-100',
                ].join(' ')}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir menú"
          aria-expanded={open}
          className="group justify-self-end flex items-center gap-3 rounded-full border border-[var(--color-gold)]/50 px-5 py-2.5 transition-all hover:border-[var(--color-gold)]/80 hover:bg-[var(--color-gold)]/10"
          style={{
            background: 'rgba(26,15,61,0.45)',
            backdropFilter: 'blur(12px) saturate(160%)',
            WebkitBackdropFilter: 'blur(12px) saturate(160%)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              color: 'var(--color-cream)',
              fontSize: 11,
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            Entrar
          </span>
        </button>
      </motion.header>

      {/* === FULLSCREEN OVERLAY === */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[80]"
          >
            {/* Backdrop blur + tinte */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className="absolute inset-0 h-full w-full cursor-default"
              style={{
                background: 'rgba(10,0,16,0.88)',
                backdropFilter: 'blur(24px) saturate(160%)',
                WebkitBackdropFilter: 'blur(24px) saturate(160%)',
              }}
            />

            {/* Bloom dorado top */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-[60vh]"
              style={{
                background:
                  'radial-gradient(60% 80% at 50% 0%, rgba(242,213,120,0.18), transparent 70%)',
              }}
            />
            {/* Bloom morado bottom */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 h-[40vh]"
              style={{
                background:
                  'radial-gradient(60% 80% at 50% 100%, rgba(94,28,177,0.25), transparent 70%)',
              }}
            />

            {/* Polvo dorado decorativo */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                backgroundImage: `
                  radial-gradient(1.5px 1.5px at 18% 28%, rgba(242,213,120,0.85) 50%, transparent 100%),
                  radial-gradient(1.5px 1.5px at 82% 64%, rgba(242,213,120,0.7) 50%, transparent 100%),
                  radial-gradient(1px 1px at 38% 78%, rgba(242,213,120,0.8) 50%, transparent 100%),
                  radial-gradient(1.5px 1.5px at 88% 22%, rgba(242,213,120,0.7) 50%, transparent 100%),
                  radial-gradient(1px 1px at 22% 62%, rgba(242,213,120,0.85) 50%, transparent 100%),
                  radial-gradient(1.5px 1.5px at 62% 14%, rgba(242,213,120,0.65) 50%, transparent 100%),
                  radial-gradient(1px 1px at 8% 90%, rgba(242,213,120,0.85) 50%, transparent 100%),
                  radial-gradient(1px 1px at 95% 85%, rgba(242,213,120,0.7) 50%, transparent 100%)
                `,
              }}
            />

            {/* Frame dorado interior */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-6 rounded-md border border-[var(--color-gold)]/25"
            />

            {/* Logo top-left dentro del overlay */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="absolute left-6 top-6 md:left-10 md:top-8"
            >
              <Logo />
            </motion.div>

            {/* Boton X cerrar top-right */}
            <motion.button
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ scale: 1.08, rotate: 90 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className="absolute right-6 top-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border md:right-10 md:top-8"
              style={{
                background: 'rgba(26,15,61,0.55)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderColor: 'rgba(212,175,55,0.55)',
                boxShadow: '0 4px 24px rgba(0,0,0,0.45)',
                color: 'var(--color-gold-bright)',
              }}
            >
              <svg width={18} height={18} viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round">
                <path d="M3 3 L15 15 M15 3 L3 15" />
              </svg>
            </motion.button>

            {/* === NAV LINKS centrados === */}
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-1.5 px-6">
              {NAV.map((link, i) => {
                const isActive = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{
                      opacity: 0,
                      y: 20,
                      transition: { duration: 0.2, delay: (NAV.length - 1 - i) * 0.03 },
                    }}
                    transition={{
                      duration: 0.7,
                      delay: 0.25 + i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      prefetch
                      onClick={() => setOpen(false)}
                      className="group relative flex items-baseline gap-5 py-2 transition-all md:gap-7"
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-sans)',
                          color: isActive
                            ? 'var(--color-gold-bright)'
                            : 'var(--color-gold-soft)',
                          fontSize: 11,
                          letterSpacing: '0.4em',
                          textTransform: 'uppercase',
                          opacity: 0.85,
                          minWidth: 32,
                        }}
                      >
                        {link.num}
                      </span>
                      <span
                        className="relative"
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontStyle: 'italic',
                          color: isActive
                            ? 'var(--color-gold-bright)'
                            : 'var(--color-cream)',
                          fontSize: 'clamp(34px, 5vw, 56px)',
                          lineHeight: 1.05,
                          fontWeight: 400,
                          textShadow: isActive
                            ? '0 0 32px rgba(242,213,120,0.55)'
                            : 'none',
                          transition: 'color 250ms, text-shadow 250ms',
                        }}
                      >
                        {link.label}
                        {/* Underline gold que aparece on hover */}
                        <span
                          aria-hidden
                          className="absolute bottom-1 left-0 h-px transition-all duration-500"
                          style={{
                            width: isActive ? '100%' : 0,
                            background:
                              'linear-gradient(90deg, transparent, var(--color-gold-bright), transparent)',
                            boxShadow: '0 0 8px rgba(242,213,120,0.7)',
                          }}
                        />
                      </span>
                      {/* Star marker active */}
                      {isActive && (
                        <motion.span
                          aria-hidden
                          initial={{ opacity: 0, scale: 0, rotate: -90 }}
                          animate={{ opacity: 1, scale: 1, rotate: 0 }}
                          transition={{ duration: 0.5, delay: 0.4 }}
                          style={{
                            color: 'var(--color-gold-bright)',
                            filter:
                              'drop-shadow(0 0 6px rgba(242,213,120,0.9))',
                          }}
                        >
                          <svg width={14} height={14} viewBox="0 0 16 16" aria-hidden>
                            <path
                              d="M8 0 L9.5 6.5 L16 8 L9.5 9.5 L8 16 L6.5 9.5 L0 8 L6.5 6.5 Z"
                              fill="currentColor"
                            />
                          </svg>
                        </motion.span>
                      )}
                    </Link>
                  </motion.div>
                )
              })}
            </div>

            {/* CTA Entrar bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 md:bottom-14"
            >
              <Link
                href="/login"
                prefetch
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-full border border-[var(--color-gold)]/50 px-7 py-3 transition-all hover:bg-[var(--color-gold)]/10 hover:border-[var(--color-gold)]/90"
                style={{
                  background: 'rgba(26,15,61,0.4)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              >
                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth={1.4} aria-hidden style={{ color: 'var(--color-gold-bright)' }}>
                  <circle cx={7} cy={5} r={2.4} />
                  <path d="M2 13 Q2 8 7 8 Q12 8 12 13" />
                </svg>
                <span
                  style={{
                    fontFamily: 'var(--font-sans)',
                    color: 'var(--color-cream)',
                    fontSize: 11,
                    letterSpacing: '0.36em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  Entrar a mi cuenta
                </span>
              </Link>
            </motion.div>

            {/* Pie firma */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.55 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2"
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                color: 'var(--color-gold-soft)',
                fontSize: 11,
                letterSpacing: '0.18em',
                whiteSpace: 'nowrap',
              }}
            >
              Mirá todo lo que siempre fuiste capaz de ser.
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
