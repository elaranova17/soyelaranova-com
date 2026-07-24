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
        d="M50 300 C 90 260, 110 220, 150 190 S 230 130, 250 84"
        fill="none"
        stroke="#D4AF37"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <circle cx={50} cy={300} r={6} fill="#D4AF37" className="scene-node" />
      <circle cx={150} cy={190} r={6} fill="#D4AF37" className="scene-node scene-node--d2" />
      <circle cx={250} cy={84} r={6} fill="#D4AF37" className="scene-node scene-node--d3" />
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
        d="M40 180 L 95 158 L 140 166 L 190 130 L 235 108 L 268 74"
        fill="none"
        stroke="#D4AF37"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx={268} cy={74} r={6} fill="#D4AF37" className="scene-node" />
    </SceneFrame>
  )
}

export const serviceScenes = [AutomationScene, WebScene, AdsScene] as const
