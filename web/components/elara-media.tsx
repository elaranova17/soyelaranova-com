import type { ReactNode } from 'react'
import { ElaraFramedImage, type ElaraVeil } from '@/components/elara-framed-image'
import { ElaraGenerateSlot } from '@/components/elara-generate-slot'
import { SectionBanner } from '@/components/section-banner'
import { SectionCoverImage } from '@/components/section-cover-image'
import type { MediaRef } from '@/lib/media'

type ElaraMediaBannerProps = {
  media: MediaRef
  alt: string
  children: ReactNode
  heightClass?: string
  priority?: boolean
}

export function ElaraMediaBanner({
  media,
  alt,
  children,
  heightClass,
  priority,
}: ElaraMediaBannerProps) {
  if (media.type === 'generate') {
    return (
      <div className={`relative w-full overflow-hidden ${heightClass ?? 'h-[min(52vh,500px)] min-h-[280px]'}`}>
        <ElaraGenerateSlot id={media.id} label={media.label} aspect="banner" />
        <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center px-6">
          {children}
        </div>
      </div>
    )
  }

  return (
    <SectionBanner src={media.src} alt={alt} heightClass={heightClass} priority={priority}>
      {children}
    </SectionBanner>
  )
}

type ElaraMediaCardProps = {
  media: MediaRef
  alt: string
  veil?: ElaraVeil
  aspect?: 'card' | 'course' | 'product'
  frameClassName?: string
  sizes?: string
}

export function ElaraMediaCard({
  media,
  alt,
  veil = 'card',
  aspect = 'card',
  frameClassName,
  sizes,
}: ElaraMediaCardProps) {
  if (media.type === 'generate') {
    return (
      <ElaraGenerateSlot
        id={media.id}
        label={media.label}
        aspect="card"
        className={frameClassName}
      />
    )
  }

  return (
    <ElaraFramedImage
      src={media.src}
      alt={alt}
      veil={veil}
      aspect={aspect}
      sizes={sizes}
      frameClassName={frameClassName}
    />
  )
}

type ElaraMediaCoverProps = {
  media: MediaRef
  alt: string
  sizes?: string
  priority?: boolean
  className?: string
}

export function ElaraMediaCover({ media, alt, sizes, priority, className }: ElaraMediaCoverProps) {
  if (media.type === 'generate') {
    return <ElaraGenerateSlot id={media.id} label={media.label} aspect="cover" className={className} />
  }

  return (
    <SectionCoverImage
      src={media.src}
      alt={alt}
      sizes={sizes}
      priority={priority}
      className={className}
    />
  )
}
