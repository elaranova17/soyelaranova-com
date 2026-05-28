import Link from 'next/link'

type ElaraLogoProps = {
  size?: 'sm' | 'md'
  href?: string
  className?: string
  linkClassName?: string
}

/** Wordmark tipográfico — sin imagen ni fondo (estilo editorial). */
export function ElaraLogo({ size = 'md', href = '/', className = '', linkClassName = '' }: ElaraLogoProps) {
  const linkCls = ['inline-flex shrink-0 transition-opacity hover:opacity-90', linkClassName]
    .filter(Boolean)
    .join(' ')
  const wordmark = (
    <span
      className={[
        'font-display font-semibold italic leading-none tracking-[-0.02em] text-[var(--color-gold-bright)]',
        'drop-shadow-[0_0_20px_rgba(242,213,120,0.25)]',
        size === 'sm' ? 'text-xl md:text-[1.35rem]' : 'text-2xl md:text-[1.65rem]',
        className,
      ].join(' ')}
    >
      Elara Nova
    </span>
  )

  const label = 'Elara Nova · Inicio'

  if (!href) {
    return (
      <span aria-label={label} className="inline-flex shrink-0">
        {wordmark}
      </span>
    )
  }

  if (href.startsWith('#')) {
    return (
      <a href={href} aria-label={label} className={linkCls}>
        {wordmark}
      </a>
    )
  }

  return (
    <Link href={href} prefetch aria-label={label} className={linkCls}>
      {wordmark}
    </Link>
  )
}
