import Image from 'next/image'
import { imageFocal } from '@/lib/image-focal'

export type ElaraVeil =
  | 'card'
  | 'soft'
  | 'banner'
  | 'banner-light'
  | 'mosaic'
  | 'gallery'
  | 'hero'
  | 'panel'
  | 'none'

const VEIL_CLASS: Record<Exclude<ElaraVeil, 'none'>, string> = {
  card: 'elara-frame__veil--card',
  soft: 'elara-frame__veil--soft',
  banner: 'elara-frame__veil--banner',
  'banner-light': 'elara-frame__veil--banner-light',
  mosaic: 'elara-frame__veil--mosaic',
  gallery: 'elara-frame__veil--gallery',
  hero: 'elara-frame__veil--hero',
  panel: 'elara-frame__veil--panel',
}

const ASPECT_CLASS = {
  card: 'aspect-[4/5] w-full',
  course: 'aspect-[5/4] w-full',
  product: 'aspect-[4/5] w-full',
  gallery: 'aspect-[3/4] w-full min-h-[280px]',
} as const

type ElaraFramedImageProps = {
  src: string
  alt: string
  veil: ElaraVeil
  /** Contenedor con tamaño fijo (fill) */
  fill?: boolean
  priority?: boolean
  sizes?: string
  aspect?: keyof typeof ASPECT_CLASS
  frameClassName?: string
  imageClassName?: string
  focal?: string
}

export function ElaraFramedImage({
  src,
  alt,
  veil,
  fill = false,
  priority = false,
  sizes,
  aspect,
  frameClassName = '',
  imageClassName = '',
  focal,
}: ElaraFramedImageProps) {
  const objectPosition = focal ?? imageFocal(src)
  const veilCls = veil === 'none' ? '' : VEIL_CLASS[veil]

  const imageCls = ['elara-frame__img', imageClassName].filter(Boolean).join(' ')

  if (fill) {
    return (
      <div className={`elara-frame relative h-full w-full min-h-[1px] ${frameClassName}`.trim()}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className={imageCls}
          style={{ objectPosition }}
        />
        {veilCls ? <div className={`elara-frame__veil ${veilCls}`} aria-hidden /> : null}
      </div>
    )
  }

  const aspectCls = aspect ? ASPECT_CLASS[aspect] : 'w-full min-h-[240px]'

  return (
    <div className={`elara-frame ${aspectCls} ${frameClassName}`.trim()}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={imageCls}
        style={{ objectPosition }}
      />
      {veilCls ? <div className={`elara-frame__veil ${veilCls}`} aria-hidden /> : null}
    </div>
  )
}

export function ElaraSectionBridge({ position }: { position: 'top' | 'bottom' }) {
  return (
    <div
      aria-hidden
      className={position === 'top' ? 'elara-section-bridge-top' : 'elara-section-bridge-bottom'}
    />
  )
}
