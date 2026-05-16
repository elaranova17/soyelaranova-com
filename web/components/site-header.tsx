'use client'

/**
 * SiteHeader — versión "ligera" del header del HeroPortal para las
 * páginas internas. Sin parallax ni mariposas; mantiene el logo
 * constelación + nav + botón Entrar. Aparece en todas las páginas
 * que NO sean el home.
 */
import Link from 'next/link'
import { motion } from 'framer-motion'

type NavLink = { href: string; label: string }
const NAV: readonly NavLink[] = [
  { href: '/',         label: 'Inicio' },
  { href: '/universo', label: 'Universo' },
  { href: '/codice',   label: 'Códice' },
  { href: '/circulo',  label: 'Círculo' },
  { href: '/atelier',  label: 'Atelier' },
]

export function SiteHeader({ active }: { active?: string }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="absolute left-1/2 top-7 z-50 -translate-x-1/2 flex w-[calc(100%-72px)] max-w-[1280px] items-center justify-between gap-6 rounded-full border border-[var(--color-gold)]/40 px-6 py-3"
      style={{
        background: 'rgba(26,15,61,0.55)',
        backdropFilter: 'blur(14px) saturate(180%)',
        WebkitBackdropFilter: 'blur(14px) saturate(180%)',
      }}
    >
      <Link href="/" prefetch className="flex items-center gap-3">
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
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {NAV.map((link) => {
          const isActive = active === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              prefetch
              style={{
                fontFamily: 'var(--font-sans)',
                color: isActive ? 'var(--color-gold-bright)' : 'var(--color-cream)',
                fontSize: 12,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                opacity: isActive ? 1 : 0.85,
                textShadow: isActive ? '0 0 12px rgba(242,213,120,0.6)' : 'none',
              }}
              className="hover:opacity-100"
            >
              {link.label}
            </Link>
          )
        })}
      </nav>

      <Link
        href="/login"
        prefetch
        className="flex items-center gap-2 rounded-full border border-[var(--color-gold)]/60 px-5 py-2 transition-all hover:bg-[var(--color-gold)]/15"
        style={{
          fontFamily: 'var(--font-sans)',
          color: 'var(--color-cream)',
          fontSize: 11,
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
        }}
      >
        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth={1.4} aria-hidden>
          <circle cx={6} cy={4} r={2} />
          <path d="M2 11 Q2 7 6 7 Q10 7 10 11" />
        </svg>
        Entrar
      </Link>
    </motion.header>
  )
}
