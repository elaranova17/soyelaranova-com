import Image from 'next/image'
import type { ReactNode } from 'react'

type SectionBannerProps = {
  src: string
  alt: string
  children: ReactNode
  heightClass?: string
  priority?: boolean
}

/** Banner con imagen de fondo visible + velo suave (evita colapso de fill en grid). */
export function SectionBanner({
  src,
  alt,
  children,
  heightClass = 'h-[min(52vh,500px)] min-h-[280px]',
  priority = false,
}: SectionBannerProps) {
  return (
    <div className={`relative w-full overflow-hidden ${heightClass}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0E0726]/85 via-[#0E0726]/35 to-[#0E0726]/70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E0726]/75 via-[#0E0726]/15 to-[#0E0726]/40"
      />
      <div className="relative z-10 flex h-full min-h-[inherit] flex-col items-center justify-center px-6">
        {children}
      </div>
    </div>
  )
}
