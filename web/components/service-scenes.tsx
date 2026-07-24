/**
 * Escenas animadas de las tarjetas de servicios (home).
 * Fondo: fotos del atelier con pantallas en chroma verde ya reemplazadas por
 * pantalla oscura (Python). El SVG animado se posiciona EXACTO sobre cada
 * pantalla usando el bounding box del chroma.
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

/** 01 · Automatizaciones — flujo dorado corriendo por la pantalla del teléfono */
export function AutomationScene() {
  return (
    <SceneFrame
      src="/media/servicios/servicio-01-automatizaciones.webp"
      screen={{ left: '23.9%', top: '57.6%', width: '54.6%', height: '22.3%' }}
      viewBox="0 0 400 205"
    >
      <path
        className="scene-flow"
        d="M40 130 C 90 80, 130 150, 200 105 S 320 80, 360 110"
        fill="none"
        stroke="#D4AF37"
        strokeWidth={4}
        strokeLinecap="round"
      />
      <circle cx={40} cy={130} r={11} fill="#D4AF37" className="scene-node" />
      <circle cx={200} cy={105} r={11} fill="#D4AF37" className="scene-node scene-node--d2" />
      <circle cx={360} cy={110} r={11} fill="#D4AF37" className="scene-node scene-node--d3" />
    </SceneFrame>
  )
}

/** 02 · Landing pages — la página se construye dentro de la tablet */
export function WebScene() {
  return (
    <SceneFrame
      src="/media/servicios/servicio-02-webs.webp"
      screen={{ left: '7.2%', top: '12.8%', width: '79.2%', height: '66.5%' }}
      viewBox="0 0 400 420"
    >
      <rect x={36} y={34} width={328} height={26} rx={8} fill="rgba(248,243,234,0.14)" className="scene-block" />
      <rect x={36} y={76} width={200} height={128} rx={12} fill="url(#eln-hero)" className="scene-block scene-block--d2" />
      <rect x={250} y={76} width={114} height={190} rx={12} fill="rgba(248,243,234,0.07)" className="scene-block scene-block--d2" />
      <rect x={36} y={222} width={172} height={11} rx={5.5} fill="rgba(248,243,234,0.2)" className="scene-block scene-block--d3" />
      <rect x={36} y={242} width={124} height={11} rx={5.5} fill="rgba(248,243,234,0.12)" className="scene-block scene-block--d3" />
      <rect x={36} y={272} width={104} height={30} rx={15} fill="#D4AF37" className="scene-block scene-block--d4" />
      <defs>
        <linearGradient id="eln-hero" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="rgba(123,63,160,0.62)" />
          <stop offset="1" stopColor="rgba(212,175,55,0.42)" />
        </linearGradient>
      </defs>
    </SceneFrame>
  )
}

/** 03 · Google Ads — gráfica dorada sobre el tablero (pendiente foto chroma) */
export function AdsScene() {
  return (
    <SceneFrame
      src="/media/servicios/servicio-03-google-ads.webp"
      screen={{ left: '22%', top: '19%', width: '55%', height: '50%' }}
      viewBox="0 0 400 300"
    >
      <path
        className="scene-chart"
        d="M40 250 L 110 210 L 170 226 L 235 160 L 300 120 L 356 60"
        fill="none"
        stroke="#D4AF37"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={356} cy={60} r={11} fill="#D4AF37" className="scene-node" />
    </SceneFrame>
  )
}

export const serviceScenes = [AutomationScene, WebScene, AdsScene] as const
