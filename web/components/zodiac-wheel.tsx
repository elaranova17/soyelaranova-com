'use client'

/**
 * Zodiac Wheel — anillo de los 12 signos con sus glyphs Unicode, líneas
 * radiales, anillos internos, constelación de puntos titilando y luna
 * llena central pulsando. Diseñado para vivir DENTRO del iPhone mockup,
 * pero también funciona standalone como ornamento de fondo.
 *
 * Movimiento:
 *   - Wheel exterior rota lentamente (60s por vuelta).
 *   - Anillo intermedio rota en sentido inverso (90s).
 *   - 24 puntos de constelación titilan en stagger.
 *   - Luna central pulsa glow.
 */

const SIGNS = [
  { glyph: '♈', name: 'Aries' },
  { glyph: '♉', name: 'Taurus' },
  { glyph: '♊', name: 'Gemini' },
  { glyph: '♋', name: 'Cancer' },
  { glyph: '♌', name: 'Leo' },
  { glyph: '♍', name: 'Virgo' },
  { glyph: '♎', name: 'Libra' },
  { glyph: '♏', name: 'Scorpio' },
  { glyph: '♐', name: 'Sagittarius' },
  { glyph: '♑', name: 'Capricorn' },
  { glyph: '♒', name: 'Aquarius' },
  { glyph: '♓', name: 'Pisces' },
] as const

// Anillo de puntos titilantes — repartidos como constelación irregular.
const TWINKLE_DOTS = [
  { x: 80, y: 60 }, { x: 320, y: 90 }, { x: 350, y: 200 }, { x: 280, y: 320 },
  { x: 200, y: 360 }, { x: 110, y: 320 }, { x: 50, y: 230 }, { x: 75, y: 140 },
  { x: 160, y: 70 }, { x: 240, y: 50 }, { x: 360, y: 150 }, { x: 330, y: 270 },
  { x: 240, y: 350 }, { x: 140, y: 340 }, { x: 55, y: 290 }, { x: 40, y: 170 },
  { x: 130, y: 90 }, { x: 290, y: 100 }, { x: 365, y: 230 }, { x: 250, y: 330 },
  { x: 110, y: 60 }, { x: 320, y: 350 }, { x: 60, y: 380 }, { x: 380, y: 380 },
] as const

export function ZodiacWheel({ size = 360 }: { size?: number }) {
  return (
    <svg
      viewBox="0 0 400 400"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <style>{`
          @keyframes elara-zodiac-rotate { to { transform: rotate(360deg); } }
          @keyframes elara-zodiac-rotate-rev { to { transform: rotate(-360deg); } }
          @keyframes elara-moon-glow {
            0%, 100% { filter: drop-shadow(0 0 6px var(--color-gold)); }
            50%      { filter: drop-shadow(0 0 18px var(--color-gold-bright)); }
          }
          @keyframes elara-twinkle {
            0%, 100% { opacity: 0.15; }
            50%      { opacity: 1; }
          }
        `}</style>

        <radialGradient id="zodiac-moon" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#FAF4E2" />
          <stop offset="0.65" stopColor="#E5C770" />
          <stop offset="1" stopColor="#8B6914" />
        </radialGradient>

        <radialGradient id="zodiac-bg-glow" cx="0.5" cy="0.5" r="0.55">
          <stop offset="0" stopColor="#5A2E8C" stopOpacity="0.45" />
          <stop offset="0.55" stopColor="#2D1B69" stopOpacity="0.15" />
          <stop offset="1" stopColor="#0A0010" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Halo de fondo */}
      <rect x={0} y={0} width={400} height={400} fill="url(#zodiac-bg-glow)" />

      {/* Puntos titilantes — constelación */}
      {TWINKLE_DOTS.map((dot, i) => (
        <circle
          key={`${dot.x}-${dot.y}`}
          cx={dot.x}
          cy={dot.y}
          r={1.2}
          fill="var(--color-gold-bright, #F2D578)"
          style={{
            animation: `elara-twinkle ${2 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${(i * 0.15) % 3}s`,
          }}
        />
      ))}

      {/* Líneas radiales finas (constelación al iPhone visual) */}
      <g
        stroke="var(--color-lavender, #9B6BC4)"
        strokeWidth={0.5}
        opacity={0.35}
        fill="none"
      >
        <path d="M50 100 L200 200 L350 90" />
        <path d="M80 320 L200 200 L320 330" />
        <path d="M60 200 L200 200 L340 200" />
        <path d="M200 50 L200 200 L200 360" />
      </g>

      {/* Anillo exterior — rotando lento, contiene los 12 signos */}
      <g
        style={{
          transformOrigin: '200px 200px',
          animation: 'elara-zodiac-rotate 60s linear infinite',
        }}
      >
        {/* Círculo guía */}
        <circle
          cx={200}
          cy={200}
          r={170}
          fill="none"
          stroke="var(--color-gold-soft, #E5C770)"
          strokeWidth={1.2}
          opacity={0.55}
        />
        <circle
          cx={200}
          cy={200}
          r={150}
          fill="none"
          stroke="var(--color-gold-soft, #E5C770)"
          strokeWidth={0.6}
          opacity={0.4}
          strokeDasharray="2 6"
        />

        {/* 12 signos zodiacales distribuidos a 30° */}
        {SIGNS.map((sign, i) => {
          const angle = (i * 30 - 90) * (Math.PI / 180)
          const x = 200 + Math.cos(angle) * 160
          const y = 200 + Math.sin(angle) * 160
          return (
            <g key={sign.name} transform={`translate(${x},${y})`}>
              <circle r={13} fill="rgba(212,175,55,0.10)" stroke="var(--color-gold, #D4AF37)" strokeWidth={0.6} />
              <text
                x={0}
                y={6}
                textAnchor="middle"
                fontSize={18}
                fontFamily="serif"
                fill="var(--color-gold-bright, #F2D578)"
              >
                {sign.glyph}
              </text>
            </g>
          )
        })}

        {/* Marcas radiales entre signos */}
        {SIGNS.map((_, i) => {
          const angle = (i * 30 + 15 - 90) * (Math.PI / 180)
          const x1 = 200 + Math.cos(angle) * 145
          const y1 = 200 + Math.sin(angle) * 145
          const x2 = 200 + Math.cos(angle) * 158
          const y2 = 200 + Math.sin(angle) * 158
          return (
            <line
              key={`tick-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="var(--color-gold-soft, #E5C770)"
              strokeWidth={0.7}
              opacity={0.6}
            />
          )
        })}
      </g>

      {/* Anillo intermedio — gira en sentido contrario */}
      <g
        style={{
          transformOrigin: '200px 200px',
          animation: 'elara-zodiac-rotate-rev 90s linear infinite',
        }}
      >
        <circle
          cx={200}
          cy={200}
          r={120}
          fill="none"
          stroke="var(--color-gold, #D4AF37)"
          strokeWidth={0.8}
          strokeDasharray="4 8"
          opacity={0.5}
        />
        <circle
          cx={200}
          cy={200}
          r={95}
          fill="none"
          stroke="var(--color-lavender, #9B6BC4)"
          strokeWidth={0.6}
          opacity={0.45}
        />
      </g>

      {/* Luna llena central con pulso de glow */}
      <g
        style={{
          transformOrigin: '200px 200px',
          animation: 'elara-moon-glow 4s ease-in-out infinite',
        }}
      >
        <circle cx={200} cy={200} r={55} fill="url(#zodiac-moon)" />
        {/* Cráteres sutiles */}
        <circle cx={185} cy={185} r={6} fill="rgba(139,105,20,0.3)" />
        <circle cx={215} cy={200} r={4} fill="rgba(139,105,20,0.25)" />
        <circle cx={200} cy={220} r={7} fill="rgba(139,105,20,0.3)" />
        <circle cx={195} cy={210} r={3} fill="rgba(139,105,20,0.2)" />
      </g>

      {/* Etiqueta "TU ORÁCULO MÍSTICO" en la parte superior */}
      <text
        x={200}
        y={90}
        textAnchor="middle"
        fontSize={11}
        letterSpacing="0.35em"
        fontFamily="var(--font-sans)"
        fill="var(--color-gold-bright, #F2D578)"
        opacity={0.85}
      >
        TU ORÁCULO MÍSTICO
      </text>
    </svg>
  )
}
