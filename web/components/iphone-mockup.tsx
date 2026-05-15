/**
 * iPhone 15 Pro mockup en SVG puro. Marco titanio, Dynamic Island,
 * status bar 9:41 con iconos de señal/wifi/batería, tab bar inferior y
 * home indicator. El interior de la pantalla se renderea vía
 * `<foreignObject>` aceptando children — pensado para meter ahí el
 * <ZodiacWheel /> o cualquier vista de la app.
 *
 * Aspect ratio fiel: 390x844 (iPhone 15 Pro lógico). Escalá el wrapper
 * con CSS width/height para fitear el layout del hero.
 */
import type { ReactNode, SVGProps } from 'react'

type Props = SVGProps<SVGSVGElement> & {
  /** Lo que se renderea dentro de la pantalla del iPhone. */
  children?: ReactNode
  /** Texto del status bar superior, default "9:41". */
  timeLabel?: string
  /** Título de la app debajo del status bar. */
  appTitle?: string
}

export function IPhoneMockup({
  children,
  timeLabel = '9:41',
  appTitle = 'Fases Lunares',
  ...svgProps
}: Props) {
  return (
    <svg viewBox="0 0 390 844" xmlns="http://www.w3.org/2000/svg" aria-hidden {...svgProps}>
      <defs>
        {/* Marco titanio: gradiente lineal frío */}
        <linearGradient id="iphone-frame" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E5C770" />
          <stop offset="0.3" stopColor="#8B7355" />
          <stop offset="0.6" stopColor="#3E2F22" />
          <stop offset="1" stopColor="#8B7355" />
        </linearGradient>

        {/* Bezel oscuro interior */}
        <linearGradient id="iphone-bezel" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1A0F3D" />
          <stop offset="1" stopColor="#0A0010" />
        </linearGradient>

        {/* Reflejo de cristal de la pantalla — overlay top-right */}
        <linearGradient id="iphone-glass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="white" stopOpacity="0.08" />
          <stop offset="0.3" stopColor="white" stopOpacity="0" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>

        {/* Clip de la pantalla para que el contenido se recorte limpio */}
        <clipPath id="iphone-screen-clip">
          <rect x={14} y={14} width={362} height={816} rx={48} />
        </clipPath>
      </defs>

      {/* Marco exterior titanio */}
      <rect x={0} y={0} width={390} height={844} rx={58} fill="url(#iphone-frame)" />
      <rect
        x={2}
        y={2}
        width={386}
        height={840}
        rx={56}
        fill="none"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth={1}
      />

      {/* Bezel interior */}
      <rect x={8} y={8} width={374} height={828} rx={52} fill="url(#iphone-bezel)" />

      {/* Pantalla (fondo oscuro debajo del contenido) */}
      <rect x={14} y={14} width={362} height={816} rx={48} fill="#0A0010" />

      {/* Contenido inyectado dentro del clip de pantalla */}
      <g clipPath="url(#iphone-screen-clip)">
        <foreignObject x={14} y={14} width={362} height={816}>
          <div
            // @ts-expect-error: xmlns is valid on foreignObject children for HTML
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              color: '#FAF4E2',
              fontFamily: 'var(--font-sans)',
            }}
          >
            {/* Status bar */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '14px 28px 0',
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: '-0.02em',
              }}
            >
              <span>{timeLabel}</span>
              <span style={{ display: 'inline-flex', gap: 5, alignItems: 'center' }}>
                {/* Signal */}
                <svg width={16} height={10} viewBox="0 0 16 10" aria-hidden>
                  <rect x={0} y={6} width={3} height={4} rx={0.5} fill="currentColor" />
                  <rect x={4} y={4} width={3} height={6} rx={0.5} fill="currentColor" />
                  <rect x={8} y={2} width={3} height={8} rx={0.5} fill="currentColor" />
                  <rect x={12} y={0} width={3} height={10} rx={0.5} fill="currentColor" />
                </svg>
                {/* Wifi */}
                <svg width={15} height={11} viewBox="0 0 15 11" aria-hidden>
                  <path
                    d="M7.5 1C4 1 1 3 0 5l2 1.5C3 5 5 4 7.5 4S12 5 13 6.5L15 5c-1-2-4-4-7.5-4Z"
                    fill="currentColor"
                  />
                  <circle cx={7.5} cy={9} r={1.4} fill="currentColor" />
                </svg>
                {/* Battery */}
                <svg width={24} height={11} viewBox="0 0 24 11" aria-hidden>
                  <rect
                    x={0.5}
                    y={0.5}
                    width={21}
                    height={10}
                    rx={2.5}
                    fill="none"
                    stroke="currentColor"
                    strokeOpacity={0.5}
                  />
                  <rect x={22} y={3.5} width={1.5} height={4} rx={0.5} fill="currentColor" opacity={0.5} />
                  <rect x={2} y={2} width={18} height={7} rx={1.5} fill="currentColor" />
                </svg>
              </span>
            </div>

            {/* App nav bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '24px 24px 16px',
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              <svg width={11} height={18} viewBox="0 0 11 18" aria-hidden>
                <path
                  d="M9 1L1 9l8 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span style={{ flex: 1, textAlign: 'center', fontWeight: 500, opacity: 0.95 }}>
                {appTitle}
              </span>
              <svg width={20} height={20} viewBox="0 0 20 20" aria-hidden>
                <circle cx={10} cy={10} r={9} stroke="currentColor" strokeOpacity={0.6} fill="none" />
                <circle cx={10} cy={6.5} r={1} fill="currentColor" />
                <rect x={9.25} y={9} width={1.5} height={6} rx={0.75} fill="currentColor" />
              </svg>
            </div>

            {/* Slot principal — children */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              {children}
            </div>

            {/* Tab bar inferior */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                padding: '14px 16px 30px',
                borderTop: '1px solid rgba(212,175,55,0.18)',
                fontSize: 10,
                letterSpacing: '0.04em',
                color: '#E5C770',
              }}
            >
              {['Resumen', 'Fases', 'Tarot', 'Rituales', 'Astros'].map((label, i) => (
                <span
                  key={label}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 4,
                    opacity: i === 1 ? 1 : 0.55,
                  }}
                >
                  <svg width={16} height={16} viewBox="0 0 16 16" aria-hidden>
                    <circle cx={8} cy={8} r={6} fill="none" stroke="currentColor" strokeWidth={1.2} />
                    {i === 1 && <circle cx={8} cy={8} r={2} fill="currentColor" />}
                  </svg>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </foreignObject>

        {/* Dynamic Island encima del contenido */}
        <rect x={131} y={22} width={128} height={37} rx={18.5} fill="#000" />

        {/* Reflejo de cristal — sutil overlay */}
        <rect x={14} y={14} width={362} height={816} rx={48} fill="url(#iphone-glass)" />
      </g>

      {/* Home indicator */}
      <rect x={132} y={822} width={126} height={5} rx={2.5} fill="white" opacity={0.55} />

      {/* Botones laterales (volumen + lock) — detalle realista */}
      <rect x={-1} y={172} width={3} height={32} rx={1} fill="rgba(0,0,0,0.4)" />
      <rect x={-1} y={222} width={3} height={64} rx={1} fill="rgba(0,0,0,0.4)" />
      <rect x={-1} y={302} width={3} height={64} rx={1} fill="rgba(0,0,0,0.4)" />
      <rect x={388} y={232} width={3} height={104} rx={1} fill="rgba(0,0,0,0.4)" />
    </svg>
  )
}
