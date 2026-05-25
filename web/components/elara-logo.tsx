import Image from 'next/image'
import Link from 'next/link'

type ElaraLogoProps = {
  size?: 'sm' | 'md'
  href?: string
  className?: string
}

export function ElaraLogo({ size = 'md', href = '/', className = '' }: ElaraLogoProps) {
  const h = size === 'sm' ? 44 : 56
  const w = size === 'sm' ? 110 : 140

  const img = (
    <div
      aria-label="Elara Nova"
      className={`overflow-hidden ${className}`}
      style={{ width: w, height: h }}
    >
      <Image
        src="/images/logo-elara-nova.png"
        alt="Elara Nova"
        width={w}
        height={h}
        priority={size === 'md'}
        style={{ mixBlendMode: 'screen', display: 'block', width: '100%', height: 'auto' }}
      />
    </div>
  )

  if (!href) return img

  if (href.startsWith('#')) {
    return (
      <a href={href} aria-label="Elara Nova · Inicio" className={`inline-flex shrink-0 ${className}`}>
        {img}
      </a>
    )
  }

  return (
    <Link href={href} prefetch aria-label="Elara Nova · Inicio" className={`inline-flex shrink-0 ${className}`}>
      {img}
    </Link>
  )
}
