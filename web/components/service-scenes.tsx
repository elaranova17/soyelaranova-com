/**
 * Escenas animadas de las tarjetas de servicios (home).
 * Fondo: recortes de la foto real del atelier (mismo mundo que ImmersiveStory).
 * Overlay: SVG animado por CSS — se aviva al hacer hover en la tarjeta.
 */

function SceneFrame({
  src,
  viewBox = '0 0 300 375',
  children,
}: {
  src: string
  viewBox?: string
  children: React.ReactNode
}) {
  return (
    <div className="service-scene">
      <img src={src} alt="" loading="lazy" />
      <svg viewBox={viewBox} aria-hidden="true" className="service-scene__overlay">
        {children}
      </svg>
    </div>
  )
}

/** 01 · Automatizaciones — hilo dorado que fluye entre nodos */
export function AutomationScene() {
  return (
    <SceneFrame src="/media/servicios/servicio-01-automatizaciones.webp">
      <path
        className="scene-flow"
        d="M55 252 C 95 208, 140 256, 190 238 S 250 224, 264 246"
        fill="none"
        stroke="#D4AF37"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle cx={55} cy={252} r={6} fill="#D4AF37" className="scene-node" />
      <circle cx={190} cy={238} r={6} fill="#D4AF37" className="scene-node scene-node--d2" />
      <circle cx={264} cy={246} r={6} fill="#D4AF37" className="scene-node scene-node--d3" />
    </SceneFrame>
  )
}

/** 02 · Landing pages — página que se construye bloque a bloque */
export function WebScene() {
  return (
    <SceneFrame src="/media/servicios/servicio-02-webs.webp">
      <g className="scene-build">
        <rect x={78} y={96} width={144} height={92} rx={8} fill="rgba(123,63,160,0.5)" className="scene-block" />
        <rect x={78} y={200} width={104} height={10} rx={5} fill="rgba(248,243,234,0.7)" className="scene-block scene-block--d2" />
        <rect x={78} y={218} width={78} height={10} rx={5} fill="rgba(248,243,234,0.45)" className="scene-block scene-block--d3" />
        <rect x={78} y={242} width={70} height={22} rx={11} fill="#D4AF37" className="scene-block scene-block--d4" />
      </g>
    </SceneFrame>
  )
}

/** 03 · Google Ads — gráfica dorada que sube + conversión */
export function AdsScene() {
  return (
    <SceneFrame src="/media/servicios/servicio-03-google-ads.webp" viewBox="0 0 300 225">
      <path
        className="scene-chart"
        d="M78 148 L 112 130 L 142 138 L 172 112 L 200 96 L 222 68"
        fill="none"
        stroke="#D4AF37"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={222} cy={68} r={6} fill="#D4AF37" className="scene-node" />
    </SceneFrame>
  )
}

export const serviceScenes = [AutomationScene, WebScene, AdsScene] as const
