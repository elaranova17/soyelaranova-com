/**
 * Escenas animadas de las tarjetas de servicios (home).
 * Fondo: fotos quiet-luxury con pantallas chroma ya oscurecidas (Python).
 * El SVG se posiciona EXACTO sobre cada pantalla (bbox del chroma, en %),
 * por lo que escala responsive junto con la foto.
 *
 * Mapa actual: 01 automatizaciones = marco+podio · 02 webs = tablet
 * · 03 google ads = dominó+teléfono.
 */

type ScreenBox = {
  left: string
  top: string
  width: string
  height: string
}

function SceneFrame({
  src,
  screen,
  viewBox,
  children,
}: {
  src: string
  screen: ScreenBox
  viewBox: string
  children: React.ReactNode
}) {
  return (
    <div className="service-scene">
      <img src={src} alt="" loading="lazy" />
      <div className="service-scene__screen" style={screen}>
        <svg viewBox={viewBox} aria-hidden="true" className="service-scene__overlay" preserveAspectRatio="none">
          {children}
        </svg>
      </div>
    </div>
  )
}

/**
 * 01 · Automatizaciones — dentro del marco: pipeline que se enciende solo
 * (mensaje entra → proceso automático → hecho).
 */
export function AutomationScene() {
  // Marco interior ≈ left 24–76%, top 10–58%. Inset ~2.5% para que el pipeline
  // quede centrado dentro de la ventana y la tarjeta superior no se corte.
  return (
    <SceneFrame
      src="/media/servicios/servicio-01-automatizaciones.webp"
      screen={{ left: '26.5%', top: '12.5%', width: '47%', height: '43%' }}
      viewBox="0 0 300 360"
    >
      <path
        className="scene-flow"
        d="M150 318 V 262 M150 210 V 154 M150 102 V 58"
        fill="none"
        stroke="#D4AF37"
        strokeWidth={3.5}
        strokeLinecap="round"
        opacity={0.85}
      />

      <g className="scene-pop">
        <rect x={60} y={212} width={180} height={50} rx={14} fill="rgba(248,243,234,0.1)" stroke="rgba(212,175,55,0.5)" strokeWidth={1.4} />
        <rect x={80} y={227} width={70} height={7} rx={3.5} fill="rgba(248,243,234,0.55)" />
        <rect x={80} y={241} width={104} height={7} rx={3.5} fill="rgba(248,243,234,0.28)" />
        <circle cx={214} cy={237} r={9} fill="#D4AF37" className="scene-node" />
      </g>

      <g className="scene-pop scene-pop--d2">
        <rect x={60} y={104} width={180} height={50} rx={14} fill="rgba(123,63,160,0.28)" stroke="rgba(212,175,55,0.5)" strokeWidth={1.4} />
        <path d="M150 114 l -9 17 h 8 l -4 16 13 -20 h -8 l 5 -13 z" fill="#F2D578" />
        <rect x={112} y={138} width={76} height={6} rx={3} fill="rgba(248,243,234,0.4)" />
      </g>

      <g className="scene-pop scene-pop--d3">
        <rect x={60} y={18} width={180} height={40} rx={14} fill="rgba(248,243,234,0.1)" stroke="rgba(212,175,55,0.5)" strokeWidth={1.4} />
        <circle cx={110} cy={38} r={11} fill="none" stroke="#D4AF37" strokeWidth={2} />
        <path d="M104 38 l 4 5 9 -10" fill="none" stroke="#D4AF37" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
        <rect x={132} y={34} width={76} height={7} rx={3.5} fill="rgba(248,243,234,0.4)" />
      </g>
    </SceneFrame>
  )
}

/**
 * 02 · Landing pages — la página se construye por capas dentro de la tablet
 * y un brillo la recorre al final.
 */
export function WebScene() {
  return (
    <SceneFrame
      src="/media/servicios/servicio-02-webs.webp"
      screen={{ left: '25%', top: '18.2%', width: '47.6%', height: '46.1%' }}
      viewBox="0 0 400 484"
    >
      <g className="scene-block">
        <rect x={28} y={26} width={344} height={30} rx={10} fill="rgba(248,243,234,0.12)" />
        <circle cx={48} cy={41} r={4.5} fill="rgba(248,243,234,0.4)" />
        <circle cx={64} cy={41} r={4.5} fill="rgba(248,243,234,0.28)" />
        <circle cx={80} cy={41} r={4.5} fill="rgba(248,243,234,0.18)" />
        <rect x={104} y={33} width={180} height={16} rx={8} fill="rgba(248,243,234,0.08)" />
      </g>

      <g className="scene-block scene-block--d2">
        <rect x={28} y={72} width={230} height={148} rx={14} fill="url(#eln-hero)" />
        <rect x={48} y={98} width={120} height={13} rx={6.5} fill="rgba(248,243,234,0.75)" />
        <rect x={48} y={120} width={168} height={10} rx={5} fill="rgba(248,243,234,0.35)" />
        <rect x={48} y={172} width={88} height={26} rx={13} fill="#D4AF37" />
      </g>

      <g className="scene-block scene-block--d2">
        <rect x={272} y={72} width={100} height={220} rx={14} fill="rgba(248,243,234,0.07)" />
        <circle cx={322} cy={112} r={22} fill="rgba(212,175,55,0.35)" />
        <rect x={290} y={148} width={64} height={8} rx={4} fill="rgba(248,243,234,0.3)" />
        <rect x={290} y={164} width={48} height={8} rx={4} fill="rgba(248,243,234,0.18)" />
      </g>

      <g className="scene-block scene-block--d3">
        <rect x={28} y={240} width={196} height={11} rx={5.5} fill="rgba(248,243,234,0.28)" />
        <rect x={28} y={260} width={152} height={11} rx={5.5} fill="rgba(248,243,234,0.16)" />
        <rect x={28} y={280} width={176} height={11} rx={5.5} fill="rgba(248,243,234,0.16)" />
      </g>

      <g className="scene-block scene-block--d4">
        <rect x={28} y={322} width={130} height={36} rx={18} fill="#D4AF37" />
        <rect x={48} y={336} width={90} height={9} rx={4.5} fill="rgba(24,19,26,0.6)" />
        <circle cx={172} cy={340} r={7} fill="rgba(248,243,234,0.85)" className="scene-node" />
      </g>

      <rect x={-140} y={0} width={110} height={484} fill="url(#eln-sweep)" className="scene-sweep" />

      <defs>
        <linearGradient id="eln-hero" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgba(123,63,160,0.62)" />
          <stop offset="1" stopColor="rgba(212,175,55,0.42)" />
        </linearGradient>
        <linearGradient id="eln-sweep" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="rgba(248,243,234,0)" />
          <stop offset="0.5" stopColor="rgba(248,243,234,0.14)" />
          <stop offset="1" stopColor="rgba(248,243,234,0)" />
        </linearGradient>
      </defs>
    </SceneFrame>
  )
}

/**
 * 03 · Google Ads — en el teléfono del dominó: dashboard vertical,
 * cada ficha que cae se vuelve resultado (barras + línea al pico).
 */
export function AdsScene() {
  return (
    <SceneFrame
      src="/media/servicios/servicio-03-google-ads.webp"
      screen={{ left: '54.1%', top: '10.8%', width: '18.8%', height: '56.4%' }}
      viewBox="0 0 300 675"
    >
      <g stroke="rgba(248,243,234,0.1)" strokeWidth={1.5}>
        <path d="M40 620 H 260" />
        <path d="M40 500 H 260" />
        <path d="M40 380 H 260" />
        <path d="M40 260 H 260" />
      </g>

      <g fill="rgba(212,175,55,0.4)">
        <rect x={58} y={540} width={44} height={80} rx={7} className="scene-bar" />
        <rect x={128} y={480} width={44} height={140} rx={7} className="scene-bar scene-bar--d2" />
        <rect x={198} y={400} width={44} height={220} rx={7} className="scene-bar scene-bar--d3" />
      </g>

      <path
        className="scene-chart"
        pathLength={340}
        d="M52 560 L 120 470 L 190 350 L 245 180"
        fill="none"
        stroke="#D4AF37"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g fill="#F2D578">
        <circle cx={120} cy={470} r={9} className="scene-pop" />
        <circle cx={190} cy={350} r={9} className="scene-pop scene-pop--d2" />
      </g>
      <circle cx={245} cy={180} r={13} fill="#D4AF37" className="scene-node" />
      <circle cx={245} cy={180} r={24} fill="none" stroke="rgba(212,175,55,0.5)" strokeWidth={2} className="scene-node scene-node--d2" />
    </SceneFrame>
  )
}

export const serviceScenes = [AutomationScene, WebScene, AdsScene] as const
