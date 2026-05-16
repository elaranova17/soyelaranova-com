'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

type Variant = 'primary' | 'secondary' | 'cartouche'

type SharedProps = {
  children: ReactNode
  variant?: Variant
  className?: string
  external?: boolean
}

type LinkProps = SharedProps & {
  href: string
  onClick?: never
  type?: never
  disabled?: never
}

type ButtonProps = SharedProps & {
  href?: never
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
}

type Props = LinkProps | ButtonProps

function Sparkle({ size = 12 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" aria-hidden style={{ flexShrink: 0 }}>
      <path
        d="M8 0 L9.5 6.5 L16 8 L9.5 9.5 L8 16 L6.5 9.5 L0 8 L6.5 6.5 Z"
        fill="currentColor"
      />
    </svg>
  )
}

function PrimaryShell({
  children,
  className,
  disabled,
}: {
  children: ReactNode
  className: string
  disabled?: boolean
}) {
  return (
    <motion.span
      whileHover={disabled ? undefined : { scale: 1.04 }}
      whileTap={disabled ? undefined : { scale: 0.98 }}
      className={`group relative inline-flex items-center justify-center gap-3 transition-transform focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold-bright)] rounded-full px-8 py-3.5 ${className}`}
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
        opacity: disabled ? 0.65 : 1,
      }}
    >
      <span aria-hidden className="opacity-80 transition-opacity group-hover:opacity-100">
        <Sparkle size={11} />
      </span>
      <span>{children}</span>
      <span aria-hidden className="opacity-80 transition-opacity group-hover:opacity-100">
        <Sparkle size={11} />
      </span>
    </motion.span>
  )
}

export function ElaraButton(props: Props) {
  const { children, variant = 'primary', className = '', external = false } = props
  const baseClass =
    'group relative inline-flex items-center justify-center gap-3 transition-transform focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold-bright)]'

  if ('href' in props && props.href) {
    const href = props.href
    const isExternal = external || /^https?:\/\//.test(href)

    if (variant === 'primary') {
      const content = <PrimaryShell className={className}>{children}</PrimaryShell>
      return isExternal ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        <Link href={href} prefetch>
          {content}
        </Link>
      )
    }

    if (variant === 'secondary') {
      const content = (
        <motion.span
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className={`${baseClass} rounded-full px-7 py-3.5 ${className}`}
          style={{
            background: 'linear-gradient(180deg, rgba(212,175,55,0.10), rgba(212,175,55,0.04))',
            color: 'var(--color-cream)',
            border: '1px solid rgba(212,175,55,0.6)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 12px rgba(0,0,0,0.4)',
            fontFamily: 'var(--font-sans)',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
          }}
        >
          <span>{children}</span>
          <svg aria-hidden width={14} height={14} viewBox="0 0 14 14" style={{ color: 'var(--color-gold-bright)' }}>
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
        <a href={href} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      ) : (
        <Link href={href} prefetch>
          {content}
        </Link>
      )
    }

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
        <span aria-hidden style={{ fontSize: 16, opacity: 0.9 }}>
          [
        </span>
        <Sparkle size={10} />
        <span>{children}</span>
        <Sparkle size={10} />
        <span aria-hidden style={{ fontSize: 16, opacity: 0.9 }}>
          ]
        </span>
      </motion.span>
    )
    return isExternal ? (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    ) : (
      <Link href={href} prefetch>
        {content}
      </Link>
    )
  }

  const { onClick, type = 'button', disabled } = props

  if (variant === 'primary') {
    return (
      <button type={type} onClick={onClick} disabled={disabled} className="border-0 bg-transparent p-0">
        <PrimaryShell className={className} disabled={disabled}>
          {children}
        </PrimaryShell>
      </button>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} rounded-full border border-[var(--color-gold)]/60 px-7 py-3.5 ${className}`}
      style={{
        background: 'rgba(26,15,61,0.5)',
        color: 'var(--color-cream)',
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
      }}
    >
      {children}
    </button>
  )
}
