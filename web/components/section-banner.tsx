import Image from 'next/image'
import type { ReactNode } from 'react'
import { imageFocal } from '@/lib/image-focal'

type SectionBannerProps = {
  src: string
  alt: string
  children: ReactNode
  heightClass?: string
  priority?: boolean
}

/** Banner full-bleed · imagen Pixar visible + velo suave (no corta rostros). */
export function SectionBanner({
  src,
  alt,
  children,
  heightClass = 'h-[min(52vh,500px)] min-h-[280px]',
  priority = false,
}: SectionBannerProps) {
  const objectPosition = imageFocal(src)

  return (
    <div className={`relative w-full overflow-hidden ${heightClass}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
        style={{ objectPosition }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0E0726]/78 via-[#0E0726]/25 to-[#0E0726]/55"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E0726]/65 via-transparent to-[#0E0726]/35"
      />
      <div className="relative z-10 flex h-full min-h-[inherit] flex-col items-center justify-center px-6">
        {children}
      </div>
    </div>
  )
}
