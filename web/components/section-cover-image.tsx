import Image from 'next/image'

type SectionCoverImageProps = {
  src: string
  alt: string
  className?: string
  sizes?: string
  priority?: boolean
}

/** Imagen que llena su contenedor relative con altura explícita (mosaico, paneles). */
export function SectionCoverImage({
  src,
  alt,
  className = '',
  sizes = '50vw',
  priority = false,
}: SectionCoverImageProps) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`object-cover object-center ${className}`.trim()}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E0726]/65 via-[#0E0726]/10 to-transparent"
      />
    </>
  )
}
