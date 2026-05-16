'use client'

/**
 * ElaraButton — el botón premium del portal. Tres variantes:
 *
 *   - primary   → pill gold gradient con sparkles ✦ flanqueando el texto,
 *                 glow fuerte, hover scale 1.04. El CTA principal.
 *   - secondary → outline gold semi-transparente con flecha →, hover
 *                 ilumina el fondo. Para acción secundaria.
 *   - cartouche → placa rectangular grabada con corchetes [ ] a los
 *                 lados, gold gradient cremoso. Para "ver más", "explorar".
 *
 * Internamente usa next/link para navegación instantánea + preload.
 * Si href empieza con http:// o https:// (o `external` prop), abre
 * en nueva pestaña con rel correcto.
 */
import type { ReactNode } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

type Variant = 'primary' | 'secondary' | 'cartouche'

type Props = {
  href: string
  children: ReactNode
  variant?: Variant
  external?: boolean
  className?: string
}

/** Diamond-shaped sparkle (4-point star). */
function Sparkle({ size = 12 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      aria-hidden
      style={{ flexShrink: 0 }}
    >
      <path
        d="M8 0 L9.5 6.5 L16 8 L9.5 9.5 L8 16 L6.5 9.5 L0 8 L6.5 6.5 Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function ElaraButton({
  href,
  children,
  variant = 'primary',
  external = false,
  className = '',
}: Props) {
  const isExternal = external || /^https?:\/\//.test(href)

  const baseClass =
    'group relative inline-flex items-center justify-center gap-3 transition-transform focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold-bright)]'

  if (variant === 'primary') {
    const content = (
      <motion.span
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseClass} rounded-full px-8 py-3.5 ${className}`}
        style={{
          background:
            'linear-gradient(180deg, #FFEAA0 0%, var(--color-gold-bright) 20%, var(--color-gold) 50%, var(--color-gold-dark) 100%)',
          color: 'var(--color-purple-night)',
          border: '1px solid rgba(255, 234, 160, 0.75)',
          boxShadow:
            '0 0 0 1px rgba(212,175,55,0.4), 0 6px 32px rgba(242,213,120,0.55), 0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.65), inset 0 -2px 0 rgba(139,105,20,0.4)',
          fontFamily: 'var(--font-sans)',
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        <span
          aria-hidden
          className="opacity-80 transition-opacity group-hover:opacity-100"
          style={{ color: 'var(--color-purple-night)' }}
        >
          <Sparkle size={11} />
        </span>
        <span>{children}</span>
        <span
          aria-hidden
          className="opacity-80 transition-opacity group-hover:opacity-100"
          style={{ color: 'var(--color-purple-night)' }}
        >
          <Sparkle size={11} />
        </span>
      </motion.span>
    )
    return isExternal ? (
      <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>
    ) : (
      <Link href={href} prefetch>{content}</Link>
    )
  }

  if (variant === 'secondary') {
    const content = (
      <motion.span
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseClass} rounded-full px-7 py-3.5 ${className}`}
        style={{
          background:
            'linear-gradient(180deg, rgba(212,175,55,0.10), rgba(212,175,55,0.04))',
          color: 'var(--color-cream)',
          border: '1px solid rgba(212,175,55,0.6)',
          boxShadow:
            'inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 12px rgba(0,0,0,0.4)',
          fontFamily: 'var(--font-sans)',
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}
      >
        <span>{children}</span>
        <svg
          aria-hidden
          width={14}
          height={14}
          viewBox="0 0 14 14"
          style={{ color: 'var(--color-gold-bright)' }}
        >
          <path
            d="M2 7 L11 7 M7 3 L11 7 L7 11"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.span>
    )
    return isExternal ? (
      <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>
    ) : (
      <Link href={href} prefetch>{content}</Link>
    )
  }

  // cartouche
  const content = (
    <motion.span
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClass} px-9 py-3.5 ${className}`}
      style={{
        background:
          'linear-gradient(180deg, var(--color-gold-bright) 0%, var(--color-gold) 50%, var(--color-gold-dark) 100%)',
        color: 'var(--color-purple-night)',
        border: '1px solid rgba(255,234,160,0.65)',
        borderRadius: 6,
        boxShadow:
          '0 0 0 1px rgba(212,175,55,0.45), 0 6px 28px rgba(242,213,120,0.5), inset 0 1px 0 rgba(255,255,255,0.55), inset 0 -2px 0 rgba(139,105,20,0.4)',
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        fontWeight: 700,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        whiteSpace: 'nowrap',
      }}
    >
      <span aria-hidden style={{ color: 'var(--color-purple-night)', fontSize: 16, opacity: 0.9 }}>[</span>
      <Sparkle size={10} />
      <span>{children}</span>
      <Sparkle size={10} />
      <span aria-hidden style={{ color: 'var(--color-purple-night)', fontSize: 16, opacity: 0.9 }}>]</span>
    </motion.span>
  )
  return isExternal ? (
    <a href={href} target="_blank" rel="noopener noreferrer">{content}</a>
  ) : (
    <Link href={href} prefetch>{content}</Link>
  )
}
