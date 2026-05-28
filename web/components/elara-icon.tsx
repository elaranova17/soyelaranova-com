import { ElaraIcons } from '@/components/elara-icons'

export type ElaraIconName = keyof typeof ElaraIcons

const SIZE_PX = {
  sm: 28,
  md: 40,
  lg: 48,
} as const

type ElaraIconProps = {
  name: ElaraIconName
  size?: keyof typeof SIZE_PX
  className?: string
  /** Icono universal con círculo dorado (nav, chips, etc.) */
  variant?: 'universal' | 'plain'
}

/**
 * universal → .elara-icon (círculo, hover del CSS maestro)
 * plain → solo SVG, para cajones .tool-icon (sin círculo)
 */
export function ElaraIcon({
  name,
  size = 'md',
  className = '',
  variant = 'universal',
}: ElaraIconProps) {
  const px = SIZE_PX[size]

  if (variant === 'plain') {
    return (
      <span className={className} aria-hidden>
        {ElaraIcons[name].render(px)}
      </span>
    )
  }

  const cls = ['elara-icon', className].filter(Boolean).join(' ')

  return (
    <span className={cls} aria-hidden>
      {ElaraIcons[name].render(Math.round(px * 0.55))}
    </span>
  )
}
