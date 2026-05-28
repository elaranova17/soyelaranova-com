/**
 * Solo assets Pixar/Encanto (.png en /images/).
 * Slots morados = pendientes de generar (ver docs/ASSETS_INVENTARIO.md).
 */
export const GENERATE_SLOTS = [
  'curso-oraculo-cover',
  'producto-ebook-ciclo-nova',
  'producto-oraculo-pack',
  'producto-planificador-lunar',
  'herramienta-cristales',
] as const

export type GenerateSlotId = (typeof GENERATE_SLOTS)[number]

export type MediaRef =
  | { type: 'pixar'; src: string }
  | { type: 'generate'; id: GenerateSlotId; label: string }

export function isPixarMedia(media: MediaRef): media is { type: 'pixar'; src: string } {
  return media.type === 'pixar'
}

export function pixar(src: string): MediaRef {
  return { type: 'pixar', src }
}

export function generate(id: GenerateSlotId, label: string): MediaRef {
  return { type: 'generate', id, label }
}
