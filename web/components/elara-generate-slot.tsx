import type { GenerateSlotId } from '@/lib/media'

type ElaraGenerateSlotProps = {
  id: GenerateSlotId
  label: string
  className?: string
  aspect?: 'banner' | 'card' | 'cover' | 'gallery'
}

const ASPECT_CLASS = {
  banner: 'min-h-[280px] h-full w-full',
  card: 'aspect-[4/5] w-full',
  cover: 'absolute inset-0',
  gallery: 'aspect-[3/4] w-full min-h-[280px]',
} as const

/** Espacio morado · asset Pixar pendiente de generar */
export function ElaraGenerateSlot({
  id,
  label,
  className = '',
  aspect = 'card',
}: ElaraGenerateSlotProps) {
  const positionClass = aspect === 'cover' ? 'absolute inset-0' : ASPECT_CLASS[aspect]

  return (
    <div
      className={`elara-generate-slot flex flex-col items-center justify-center gap-3 border border-dashed border-[#7B4FB5]/50 bg-gradient-to-br from-[#2D1B69] via-[#1A0F3D] to-[#0E0726] p-6 text-center ${positionClass} ${className}`.trim()}
      data-generate-slot={id}
    >
      <span className="text-[9px] tracking-[0.45em] text-[#D4AF37]/70 uppercase">✦ Generar imagen</span>
      <p className="font-display max-w-[14rem] text-lg leading-snug text-[#F5EEF8]/90">{label}</p>
      <code className="rounded-md border border-[#7B4FB5]/30 bg-[#0E0726]/60 px-2 py-1 text-[9px] tracking-wide text-[#C49AD4]/55">
        {id}.png
      </code>
    </div>
  )
}
