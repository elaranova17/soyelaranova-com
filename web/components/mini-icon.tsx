/**
 * MiniIcon — SVG iconos refinados para el bottom row y sidebar del hero.
 * Cada kind tiene un diseño rico (multipath, gradients inline cuando hace
 * falta, detalles mágicos). currentColor se respeta para tintar desde CSS.
 */

export type IconKind =
  | 'tarot-cards'   // Oráculo: 3 cartas + estrella + chispas
  | 'open-book'     // Lecturas: libro abierto con rayo de luz
  | 'astrolabe'     // Herramientas Astrales: astrolabio medieval
  | 'crystal-cluster' // Comunidad: cluster facetado
  | 'prism'         // Atelier: prisma con destello arcoíris
  | 'grimoire'      // Códice Sagrado: libro con sello + cierre
  | 'mandala-astral'// Archivo Astral: mandala con 12 puntos zodiacales
  | 'bonfire'       // El Círculo: llama + 3 cristales-piedras alrededor
  | 'rainbow-crystal' // Atelier Creativo: cristal multifacetado

export function MiniIcon({ kind }: { kind: IconKind }) {
  const stroke = 1.4

  if (kind === 'tarot-cards') {
    return (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
        {/* Carta trasera izquierda */}
        <rect x={9} y={11} width={14} height={22} rx={1.5} transform="rotate(-12 16 22)" />
        <rect x={11} y={13} width={10} height={18} rx={1} transform="rotate(-12 16 22)" fill="currentColor" opacity={0.08} />
        {/* Carta trasera derecha */}
        <rect x={25} y={11} width={14} height={22} rx={1.5} transform="rotate(12 32 22)" />
        <rect x={27} y={13} width={10} height={18} rx={1} transform="rotate(12 32 22)" fill="currentColor" opacity={0.08} />
        {/* Carta central enfrente */}
        <rect x={17} y={10} width={14} height={24} rx={1.5} />
        <rect x={19} y={12} width={10} height={20} rx={1} stroke="currentColor" strokeWidth={0.5} opacity={0.55} />
        {/* Estrella en la carta central */}
        <path d="M24 17 L25.2 20 L28.3 20.2 L25.9 22.2 L26.8 25.2 L24 23.6 L21.2 25.2 L22.1 22.2 L19.7 20.2 L22.8 20 Z" fill="currentColor" stroke="none" />
        {/* Chispas */}
        <circle cx={14} cy={6}  r={0.8} fill="currentColor" />
        <circle cx={34} cy={7}  r={0.8} fill="currentColor" />
        <circle cx={42} cy={20} r={0.8} fill="currentColor" />
        <circle cx={6}  cy={24} r={0.8} fill="currentColor" />
      </svg>
    )
  }

  if (kind === 'open-book') {
    return (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
        {/* Páginas izquierda */}
        <path d="M5 12 Q5 10 7 10 L23 8 Q24 8 24 10 L24 36 Q24 34 23 34 L7 36 Q5 36 5 34 Z" />
        <path d="M9 14 L21 13 M9 18 L21 17 M9 22 L21 21 M9 26 L18 25" opacity={0.5} />
        {/* Páginas derecha */}
        <path d="M43 12 Q43 10 41 10 L25 8 Q24 8 24 10 L24 36 Q24 34 25 34 L41 36 Q43 36 43 34 Z" />
        <path d="M27 13 L39 14 M27 17 L39 18 M27 21 L39 22 M30 25 L39 26" opacity={0.5} />
        {/* Lomo + cinta marcadora */}
        <path d="M24 10 L24 36" strokeWidth={stroke * 0.7} />
        <path d="M24 22 L26 28 L24 27 L22 28 Z" fill="currentColor" stroke="none" opacity={0.85} />
        {/* Rayo de luz emanando */}
        <path d="M24 8 L21 3 M24 8 L24 2 M24 8 L27 3" opacity={0.7} />
        <circle cx={24} cy={8} r={2.2} fill="currentColor" opacity={0.45} stroke="none" />
      </svg>
    )
  }

  if (kind === 'astrolabe') {
    return (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
        {/* Anillo exterior con marcas */}
        <circle cx={24} cy={24} r={19} />
        <circle cx={24} cy={24} r={16} strokeDasharray="1 2.5" opacity={0.7} />
        {/* Marcas cardinales */}
        <path d="M24 5 L24 8 M24 40 L24 43 M5 24 L8 24 M40 24 L43 24" />
        <path d="M10 10 L12 12 M36 10 L38 12 M10 38 L12 36 M36 38 L34 36" opacity={0.6} />
        {/* Anillo medio rotado */}
        <circle cx={24} cy={24} r={11} strokeDasharray="3 2" opacity={0.6} />
        {/* Alidada (regla central rotada) */}
        <path d="M24 8 L24 40" strokeWidth={stroke * 0.9} />
        <path d="M10 24 L38 24" strokeWidth={stroke * 0.9} opacity={0.55} />
        {/* Estrella central */}
        <path d="M24 19 L25.3 23 L29 23.3 L26.2 25.7 L27.2 29.5 L24 27.4 L20.8 29.5 L21.8 25.7 L19 23.3 L22.7 23 Z" fill="currentColor" stroke="none" />
        {/* Anclas en los 4 puntos */}
        <circle cx={24} cy={5}  r={1.2} fill="currentColor" stroke="none" />
        <circle cx={24} cy={43} r={1.2} fill="currentColor" stroke="none" />
        <circle cx={5}  cy={24} r={1.2} fill="currentColor" stroke="none" />
        <circle cx={43} cy={24} r={1.2} fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (kind === 'crystal-cluster') {
    return (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
        {/* Base de cluster */}
        <path d="M6 42 Q24 38 42 42" opacity={0.4} />
        {/* Cristal central alto */}
        <path d="M24 8 L30 18 L28 38 L24 42 L20 38 L18 18 Z" />
        <path d="M24 8 L24 42 M18 18 L24 14 L30 18" opacity={0.5} />
        {/* Cristal izquierdo más bajo */}
        <path d="M12 16 L17 22 L16 38 L12 42 L8 38 L7 22 Z" />
        <path d="M12 16 L12 42 M7 22 L12 19 L17 22" opacity={0.5} />
        {/* Cristal derecho con punta */}
        <path d="M36 14 L41 20 L40 38 L36 42 L32 38 L31 20 Z" />
        <path d="M36 14 L36 42 M31 20 L36 17 L41 20" opacity={0.5} />
        {/* Brillo interno */}
        <path d="M24 12 L26 22 M12 19 L13 28 M36 18 L37 27" opacity={0.4} strokeWidth={stroke * 0.7} />
      </svg>
    )
  }

  if (kind === 'prism') {
    return (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
        {/* Cubo isométrico facetado */}
        <path d="M24 5 L40 14 L40 34 L24 43 L8 34 L8 14 Z" />
        <path d="M24 5 L24 43" />
        <path d="M8 14 L40 14" />
        <path d="M8 34 L40 34" />
        <path d="M8 14 L40 34" opacity={0.55} />
        <path d="M40 14 L8 34" opacity={0.55} />
        {/* Brillo en la cara superior */}
        <path d="M16 12 L24 8 L32 12" opacity={0.7} strokeWidth={stroke * 0.7} />
        {/* Destello arcoíris emanando (radial lines) */}
        <path d="M24 5 L20 1 M24 5 L24 -1 M24 5 L28 1" opacity={0.6} strokeWidth={stroke * 0.7} />
        <circle cx={24} cy={24} r={2.5} fill="currentColor" opacity={0.4} stroke="none" />
      </svg>
    )
  }

  if (kind === 'grimoire') {
    return (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
        {/* Tapa del libro */}
        <rect x={8} y={6} width={32} height={36} rx={2} />
        <rect x={11} y={9} width={26} height={30} rx={1} opacity={0.4} />
        {/* Esquineros tallados */}
        <path d="M11 9 L11 13 L13 13 M37 9 L37 13 L35 13 M11 39 L11 35 L13 35 M37 39 L37 35 L35 35" strokeWidth={stroke * 0.7} />
        {/* Sello central — pentagrama */}
        <circle cx={24} cy={24} r={7} opacity={0.7} />
        <path d="M24 18 L25.5 22 L30 22.5 L26.5 25.3 L27.6 29.5 L24 27.2 L20.4 29.5 L21.5 25.3 L18 22.5 L22.5 22 Z" fill="currentColor" stroke="none" />
        {/* Cierre/clasp */}
        <path d="M38 22 L42 22 L42 26 L38 26" opacity={0.65} />
        <circle cx={40} cy={24} r={1.2} fill="currentColor" stroke="none" />
      </svg>
    )
  }

  if (kind === 'mandala-astral') {
    return (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
        {/* Anillo exterior + 12 puntos zodiacales */}
        <circle cx={24} cy={24} r={20} />
        {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg) => {
          const a = (deg - 90) * Math.PI / 180
          const x = 24 + Math.cos(a) * 20
          const y = 24 + Math.sin(a) * 20
          return <circle key={deg} cx={x} cy={y} r={1.2} fill="currentColor" stroke="none" />
        })}
        {/* Anillo intermedio dashed */}
        <circle cx={24} cy={24} r={15} strokeDasharray="2 3" opacity={0.55} />
        {/* Hexagrama central */}
        <path d="M24 11 L33 26 L15 26 Z" opacity={0.7} />
        <path d="M24 37 L15 22 L33 22 Z" opacity={0.7} />
        {/* Nodo central */}
        <circle cx={24} cy={24} r={3} fill="currentColor" stroke="none" opacity={0.85} />
      </svg>
    )
  }

  if (kind === 'bonfire') {
    return (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
        {/* Llama principal */}
        <path d="M24 9 C20 14 18 19 20 24 C18 27 19 31 24 32 C29 31 30 27 28 24 C30 19 28 14 24 9 Z" />
        <path d="M24 14 C22 18 22 22 24 25 C26 22 26 18 24 14 Z" fill="currentColor" stroke="none" opacity={0.75} />
        {/* Leños */}
        <path d="M10 36 L22 33 L26 33 L38 36 L34 39 L14 39 Z" />
        <path d="M14 36 L34 36" opacity={0.5} />
        {/* 3 silhouettes-piedras alrededor */}
        <ellipse cx={8}  cy={41} rx={4} ry={2} fill="currentColor" stroke="none" opacity={0.7} />
        <ellipse cx={40} cy={41} rx={4} ry={2} fill="currentColor" stroke="none" opacity={0.7} />
        <ellipse cx={24} cy={43} rx={5} ry={2} fill="currentColor" stroke="none" opacity={0.7} />
        {/* Chispas que suben */}
        <circle cx={18} cy={6}  r={0.8} fill="currentColor" />
        <circle cx={30} cy={4}  r={0.8} fill="currentColor" />
        <circle cx={24} cy={2}  r={0.8} fill="currentColor" />
      </svg>
    )
  }

  // rainbow-crystal
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      {/* Cristal octaédrico facetado */}
      <path d="M24 4 L36 14 L40 24 L36 34 L24 44 L12 34 L8 24 L12 14 Z" />
      <path d="M24 4 L24 44 M8 24 L40 24" />
      <path d="M12 14 L36 34 M36 14 L12 34" opacity={0.55} />
      <path d="M24 4 L8 24 L24 44 L40 24 Z" opacity={0.4} />
      {/* Núcleo de luz */}
      <circle cx={24} cy={24} r={3.5} fill="currentColor" stroke="none" opacity={0.65} />
      {/* Destellos radiales */}
      <path d="M24 0 L24 -3 M48 24 L51 24 M24 48 L24 51 M0 24 L-3 24" opacity={0.6} />
    </svg>
  )
}
