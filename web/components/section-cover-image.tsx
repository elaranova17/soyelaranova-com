import Image from 'next/image'
import { imageFocal } from '@/lib/image-focal'

type SectionCoverImageProps = {
  src: string
  alt: string
  className?: string
  sizes?: string
  priority?: boolean
}

/** Imagen en contenedor relative con altura definida · encuadre por rostro. */
export function SectionCoverImage({
  src,
  alt,
  className = '',
  sizes = '50vw',
  priority = false,
}: SectionCoverImageProps) {
  const objectPosition = imageFocal(src)

  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover ${className}`.trim()}
        style={{ objectPosition }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E0726]/55 via-[#0E0726]/8 to-transparent"
      />
    </>
  )
}
