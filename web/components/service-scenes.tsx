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
      screen={{ left: '54.1%', top: '28.7%', width: '18.8%', height: '33.8%' }}
      viewBox="0 0 300 675"
    >
      <path
        className="scene-flow"
        d="M150 610 C 60 520, 240 430, 150 340 S 70 190, 150 90"
        fill="none"
        stroke="#D4AF37"
        strokeWidth={7}
        strokeLinecap="round"
      />
      <circle cx={150} cy={610} r={17} fill="#D4AF37" className="scene-node" />
      <circle cx={150} cy={340} r={17} fill="#D4AF37" className="scene-node scene-node--d2" />
      <circle cx={150} cy={90} r={17} fill="#D4AF37" className="scene-node scene-node--d3" />
    </SceneFrame>
  )
}

/** 02 · Landing pages — la página se construye dentro de la tablet */
export function WebScene() {
  return (
    <SceneFrame
      src="/media/servicios/servicio-02-webs.webp"
      screen={{ left: '25%', top: '39.4%', width: '47.6%', height: '46.1%' }}
      viewBox="0 0 400 484"
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
      screen={{ left: '27.6%', top: '1.7%', width: '55.5%', height: '86.7%' }}
      viewBox="0 0 300 351"
    >
      <path
        className="scene-chart"
        d="M40 300 L 95 262 L 140 276 L 185 216 L 230 176 L 264 110"
        fill="none"
        stroke="#D4AF37"
        strokeWidth={5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={264} cy={110} r={10} fill="#D4AF37" className="scene-node" />
    </SceneFrame>
  )
}

export const serviceScenes = [AutomationScene, WebScene, AdsScene] as const
