import type { MediaRef } from '@/lib/media'
import { resolveImageSrc } from '@/lib/resolve-image-src'

export function mediaImageSrc(media: MediaRef): string | null {
  if (media.type !== 'pixar') return null
  return resolveImageSrc(media.src)
}
