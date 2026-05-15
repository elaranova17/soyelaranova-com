/**
 * Ornate Cartouche — placa dorada con corchetes grabados a los lados,
 * en el espíritu de los chips "+10k almas manifestando" y los CTA
 * "[ DESCIFRAR MI FASE LUNAR HOY ]" del moodboard.
 *
 * Variantes:
 *   - chip  → ornamento informativo flotante (texto chico, padding ajustado)
 *   - cta   → botón de llamada a acción (texto grande, glow fuerte, hover scale)
 *
 * Implementación: un wrapper con borde dorado + 2 SVG brackets ornados
 * a izquierda y derecha. El relleno gold gradient se ve grabado en piedra
 * gracias al doble inset shadow y al drop-shadow exterior.
 */
import type { ReactNode } from 'react'

type Variant = 'chip' | 'cta'

const SIZES: Record<Variant, { padX: number; padY: number; fontSize: number; bracket: number }> = {
  chip: { padX: 20, padY: 8,  fontSize: 11, bracket: 22 },
  cta:  { padX: 36, padY: 16, fontSize: 14, bracket: 32 },
}

function Bracket({ side, size }: { side: 'left' | 'right'; size: number }) {
  // El bracket es una L ornamentada con un punto al final, replicada y
  // espejada para el lado derecho.
  const transform = side === 'right' ? 'scale(-1,1)' : undefined
  return (
    <svg
      width={size * 0.6}
      height={size}
      viewBox="0 0 30 50"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      style={{ flexShrink: 0, transform }}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 4 L8 4 L8 46 L22 46" />
        <path d="M12 4 L12 46" opacity={0.5} />
        <circle cx={8} cy={4} r={2} fill="currentColor" />
        <circle cx={8} cy={46} r={2} fill="currentColor" />
        <path d="M16 25 L26 25" opacity={0.6} />
        <circle cx={26} cy={25} r={1.5} fill="currentColor" />
      </g>
    </svg>
  )
}

type Props = {
  children: ReactNode
  variant?: Variant
  href?: string
  onClick?: () => void
  /** Override del color de texto/brackets, default es gold-dark sobre fondo gold. */
  textClass?: string
}

export function OrnateCartouche({
  children,
  variant = 'chip',
  href,
  onClick,
  textClass = 'text-[var(--color-purple-night)]',
}: Props) {
  const s = SIZES[variant]
  const isCta = variant === 'cta'

  const inner = (
    <span
      className={`relative inline-flex items-center gap-3 ${textClass}`}
      style={{
        padding: `${s.padY}px ${s.padX}px`,
        background:
          'linear-gradient(180deg, var(--color-gold-bright) 0%, var(--color-gold) 50%, var(--color-gold-dark) 100%)',
        border: '1px solid rgba(255, 230, 150, 0.6)',
        borderRadius: 6,
        fontFamily: 'var(--font-sans)',
        fontSize: s.fontSize,
        fontWeight: 700,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        boxShadow: isCta
          ? '0 0 0 1px rgba(212,175,55,0.4), 0 6px 28px rgba(242,213,120,0.45), inset 0 1px 0 rgba(255,255,255,0.55), inset 0 -2px 0 rgba(139,105,20,0.4)'
          : '0 0 0 1px rgba(212,175,55,0.3), 0 3px 14px rgba(212,175,55,0.3), inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -1px 0 rgba(139,105,20,0.3)',
      }}
    >
      <Bracket side="left" size={s.bracket} />
      <span style={{ whiteSpace: 'nowrap' }}>{children}</span>
      <Bracket side="right" size={s.bracket} />
    </span>
  )

  if (href) {
    return (
      <a
        href={href}
        className="inline-block transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
      >
        {inner}
      </a>
    )
  }
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className="inline-block transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-gold)]"
      >
        {inner}
      </button>
    )
  }
  return inner
}
