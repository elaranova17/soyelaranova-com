'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type IconProps = {
  size?: number
}

type IconKind =
  | 'star'
  | 'crystal'
  | 'book'
  | 'users'
  | 'bag'
  | 'graduation'
  | 'palette'
  | 'search'
  | 'calendar'
  | 'heart'
  | 'download'
  | 'mail'
  | 'bell'
  | 'moon'
  | 'sun'
  | 'planet'
  | 'eclipse'
  | 'zap'
  | 'eye'
  | 'shield'
  | 'flower'
  | 'compass'
  | 'file'
  | 'meditation'
  | 'headphones'
  | 'video'
  | 'tarot'

function Defs() {
  return (
    <defs>
      {/* Fondos */}
      <radialGradient id="gBgDeep" cx="38%" cy="32%" r="65%">
        <stop offset="0%" stopColor="#3D1A78" />
        <stop offset="55%" stopColor="#261055" />
        <stop offset="100%" stopColor="#120828" />
      </radialGradient>

      {/* Púrpura principal — cuerpo de iconos */}
      <linearGradient id="gPurple" x1="20%" y1="0%" x2="80%" y2="100%">
        <stop offset="0%" stopColor="#8B55C8" />
        <stop offset="45%" stopColor="#6B3AB5" />
        <stop offset="100%" stopColor="#3D1A78" />
      </linearGradient>
      <linearGradient id="gPurpleDark" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4D2490" />
        <stop offset="100%" stopColor="#1E0A45" />
      </linearGradient>
      <radialGradient id="gPurpleShine" cx="35%" cy="25%" r="55%">
        <stop offset="0%" stopColor="#B48FE0" stopOpacity="0.55" />
        <stop offset="100%" stopColor="#5A2E8C" stopOpacity="0" />
      </radialGradient>

      {/* Gold metálico — bordes, detalles */}
      <linearGradient id="gGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFF0A8" />
        <stop offset="30%" stopColor="#E8C540" />
        <stop offset="65%" stopColor="#C9980A" />
        <stop offset="100%" stopColor="#E8C540" />
      </linearGradient>
      <linearGradient id="gGoldV" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF4B0" />
        <stop offset="25%" stopColor="#E8C540" />
        <stop offset="55%" stopColor="#D4AF37" />
        <stop offset="80%" stopColor="#A88200" />
        <stop offset="100%" stopColor="#D4AF37" />
      </linearGradient>
      <linearGradient id="gGoldRing" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF8C0" />
        <stop offset="20%" stopColor="#F0D060" />
        <stop offset="50%" stopColor="#C9980A" />
        <stop offset="80%" stopColor="#F0D060" />
        <stop offset="100%" stopColor="#FFF8C0" />
      </linearGradient>
      <linearGradient id="gGoldMetalic" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF8C0" />
        <stop offset="20%" stopColor="#F0D060" />
        <stop offset="50%" stopColor="#C9980A" />
        <stop offset="80%" stopColor="#F0D060" />
        <stop offset="100%" stopColor="#FFF8C0" />
      </linearGradient>

      {/* Crema / highlight */}
      <linearGradient id="gCream" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFAF5" />
        <stop offset="100%" stopColor="#F0D8FF" />
      </linearGradient>
      <radialGradient id="gHighlight" cx="30%" cy="20%" r="50%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.28" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="gShine" cx="30%" cy="20%" r="50%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.28" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </radialGradient>

      {/* Rosa lavanda */}
      <linearGradient id="gRose" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E8B8F0" />
        <stop offset="100%" stopColor="#B480D8" />
      </linearGradient>
      <linearGradient id="gDeep" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3D1A78" />
        <stop offset="100%" stopColor="#120828" />
      </linearGradient>

      {/* Glows */}
      <radialGradient id="gGoldGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#F0D060" stopOpacity="0.45" />
        <stop offset="60%" stopColor="#D4AF37" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#C9980A" />
      </radialGradient>
      <radialGradient id="gGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#F0D060" stopOpacity="0.45" />
        <stop offset="60%" stopColor="#D4AF37" stopOpacity="0.18" />
        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="gPurpleGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#9B6EC8" stopOpacity="0.5" />
        <stop offset="100%" stopColor="#5A2E8C" stopOpacity="0" />
      </radialGradient>

      {/* Filtros */}
      <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#06040D" floodOpacity="0.6" />
      </filter>
      <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
        <feDropShadow dx="0" dy="2" stdDeviation="2.5" floodColor="#06040D" floodOpacity="0.6" />
      </filter>
      <filter id="goldGlow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1.8" result="blur" />
        <feColorMatrix
          in="blur"
          type="matrix"
          values="2 0.5 0 0 0.05  1.2 1 0 0 0  0 0 0.1 0 0  0 0 0 1.4 0"
          result="gold"
        />
        <feMerge>
          <feMergeNode in="gold" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="softGlow" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <filter id="purpleGlow" x="-40%" y="-40%" width="180%" height="180%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  )
}

function IconShell({ size, children }: { size: number; children: ReactNode }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden>
      <Defs />
      {/* Outer glow ring */}
      <circle cx="16" cy="16" r="15.8" fill="url(#gPurpleGlow)" />
      {/* Gold border — metálico */}
      <circle cx="16" cy="16" r="15" stroke="url(#gGoldRing)" strokeWidth="1.6" fill="none" />
      {/* Inner gold ring subtle */}
      <circle cx="16" cy="16" r="13.8" stroke="url(#gGold)" strokeWidth="0.5" fill="none" opacity="0.4" />
      {/* Deep bg */}
      <circle cx="16" cy="16" r="13.5" fill="url(#gBgDeep)" />
      {/* Highlight top-left */}
      <circle cx="16" cy="16" r="13.5" fill="url(#gHighlight)" />
      {/* Content */}
      {children}
      {/* Top shine arc */}
      <path
        d="M7.8 9C9.6 6.8 12.5 5.4 16 5.4"
        stroke="#FFFAF0"
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity="0.35"
      />
    </svg>
  )
}

function Sparkles({ positions = [[24.5, 9], [7.5, 10.5], [23, 23.5]] as [number, number][] }) {
  return (
    <g>
      {positions.map(([x, y], i) => (
        <path
          key={i}
          d={`M${x} ${y - 1.4}l.5 1.4 1.4.5-1.4.5-.5 1.4-.5-1.4-1.4-.5 1.4-.5.5-1.4z`}
          fill="url(#gGold)"
          opacity={i === 0 ? 0.9 : 0.65}
        />
      ))}
    </g>
  )
}

// ── INICIO: Brújula/estrella con compass rose ──────────────────
export function IconInicio({ size = 32 }: IconProps) {
  return (
    <IconShell size={size}>
      {/* Compass circle exterior */}
      <circle cx="16" cy="16" r="9" stroke="url(#gGold)" strokeWidth="1.2" fill="url(#gPurpleDark)" />
      {/* North-South spike (gold) */}
      <path d="M16 7.5l1.4 5.2L16 16l-1.4-3.3L16 7.5z" fill="url(#gGold)" filter="url(#shadow)" />
      <path d="M16 24.5l-1.4-5.2L16 16l1.4 3.3L16 24.5z" fill="url(#gPurple)" opacity="0.85" />
      {/* East-West spike */}
      <path d="M24.5 16l-5.2 1.4L16 16l3.3-1.4L24.5 16z" fill="url(#gCream)" opacity="0.7" />
      <path d="M7.5 16l5.2-1.4L16 16l-3.3 1.4L7.5 16z" fill="url(#gCream)" opacity="0.5" />
      {/* Center circle */}
      <circle cx="16" cy="16" r="1.8" fill="url(#gGold)" />
      <circle cx="16" cy="16" r="0.8" fill="url(#gCream)" />
      {/* 4 diamond tips at 45° */}
      <path
        d="M21.4 10.6l-1.6 1.6M10.6 21.4l1.6-1.6M21.4 21.4l-1.6-1.6M10.6 10.6l1.6 1.6"
        stroke="url(#gGold)"
        strokeWidth="0.8"
        strokeLinecap="round"
        opacity="0.6"
      />
      <Sparkles />
    </IconShell>
  )
}

// ── LUNA: Luna creciente con hojas ───────────────────────────
function IconLunaHD({ size = 32 }: IconProps) {
  return (
    <IconShell size={size}>
      {/* Luna creciente */}
      <circle cx="15" cy="16" r="9.5" fill="url(#gCream)" filter="url(#shadow)" />
      <circle cx="19.5" cy="14" r="9" fill="url(#gBgDeep)" />
      {/* Gold edge on crescent */}
      <path d="M9.5 10.5C10.5 8 13 6.5 15.5 6.5" stroke="url(#gGold)" strokeWidth="1.2" strokeLinecap="round" opacity="0.7" />
      <path d="M7.5 16c0 4.5 3.2 8.2 7.5 9" stroke="url(#gGold)" strokeWidth="0.9" strokeLinecap="round" opacity="0.45" />
      {/* Hoja izquierda inferior */}
      <path d="M7 23c-1.5.6-2.5 1.8-2 3 1.8-.1 3.2-1 3.8-2.5L7 23z" fill="url(#gPurple)" opacity="0.8" />
      <path d="M7 23.5c-.6 1.6-.4 2.8.8 3.3.4-1.4.3-2.6-.8-3.3z" fill="url(#gGold)" opacity="0.45" />
      {/* Hoja derecha inferior */}
      <path d="M25 23c1.5.6 2.5 1.8 2 3-1.8-.1-3.2-1-3.8-2.5L25 23z" fill="url(#gPurple)" opacity="0.8" />
      <path d="M25 23.5c.6 1.6.4 2.8-.8 3.3-.4-1.4-.3-2.6.8-3.3z" fill="url(#gGold)" opacity="0.45" />
      <Sparkles positions={[[24, 9.5], [7.5, 10.5], [23.5, 23]]} />
    </IconShell>
  )
}

// ── ESTRELLAS: Cluster de 4 estrellas ─────────────────────────
export function IconEstrella({ size = 32 }: IconProps) {
  return (
    <IconShell size={size}>
      {/* Estrella grande central */}
      <path
        d="M16 5.5L17.8 12.2 24.5 12.5 19.2 16.8 21.2 23.5 16 19.8 10.8 23.5 12.8 16.8 7.5 12.5 14.2 12.2 16 5.5z"
        fill="url(#gGold)"
        filter="url(#goldGlow)"
      />
      <path
        d="M16 8.5L17.2 13.2 21.5 13.4 18.2 16 19.4 20.3 16 18.2 12.6 20.3 13.8 16 10.5 13.4 14.8 13.2 16 8.5z"
        fill="url(#gCream)"
        opacity="0.38"
      />
      {/* Estrella pequeña izquierda */}
      <path
        d="M8 9.5l.7 2 2.1.08-1.7 1.3.65 2.1-1.75-1.16-1.75 1.16.65-2.1L5.25 11.58l2.1-.08L8 9.5z"
        fill="url(#gGold)"
        opacity="0.8"
      />
      {/* Estrella pequeña derecha arriba */}
      <path
        d="M24 8l.5 1.5 1.6.06-1.28 1 .5 1.6-1.32-.88-1.32.88.5-1.6-1.28-1 1.6-.06L24 8z"
        fill="url(#gCream)"
        opacity="0.7"
      />
      {/* Punto brillante */}
      <circle cx="16" cy="14" r="1.8" fill="#FFF8E0" opacity="0.35" />
    </IconShell>
  )
}

// ── SOL: Sol con rostro sereno ────────────────────────────────
function IconSolHD({ size = 32 }: IconProps) {
  return (
    <IconShell size={size}>
      {/* Rayos solares */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI) / 4
        return (
          <line
            key={i}
            x1={16 + Math.cos(angle) * 9.5}
            y1={16 + Math.sin(angle) * 9.5}
            x2={16 + Math.cos(angle) * 12.8}
            y2={16 + Math.sin(angle) * 12.8}
            stroke="url(#gGold)"
            strokeWidth="1.8"
            strokeLinecap="round"
            filter="url(#goldGlow)"
          />
        )
      })}
      {/* Cuerpo sol */}
      <circle cx="16" cy="16" r="7.5" fill="url(#gGold)" filter="url(#shadow)" />
      <circle cx="16" cy="16" r="7.5" fill="url(#gGoldGlow)" />
      {/* Highlight */}
      <ellipse cx="13.5" cy="13" rx="2.2" ry="1.5" fill="#FFFAF0" opacity="0.38" transform="rotate(-20 13.5 13)" />
      {/* Rostro sereno */}
      <path d="M13.5 16.8 Q16 18.5 18.5 16.8" stroke="url(#gPurpleDark)" strokeWidth="1.1" strokeLinecap="round" fill="none" />
      <circle cx="13.5" cy="15" r="1" fill="url(#gPurpleDark)" />
      <circle cx="18.5" cy="15" r="1" fill="url(#gPurpleDark)" />
      {/* Arco cejas */}
      <path d="M12.5 13.5 Q13.5 13 14.5 13.5" stroke="url(#gPurpleDark)" strokeWidth="0.9" strokeLinecap="round" fill="none" />
      <path d="M17.5 13.5 Q18.5 13 19.5 13.5" stroke="url(#gPurpleDark)" strokeWidth="0.9" strokeLinecap="round" fill="none" />
      <Sparkles positions={[[25.5, 9], [6.5, 10], [25, 23]]} />
    </IconShell>
  )
}

export function IconCrystalBall({ size = 32 }: IconProps) {
  return (
    <IconShell size={size}>
      {/* Shadow base */}
      <ellipse cx="16" cy="25.5" rx="6.5" ry="2" fill="#06040D" opacity="0.5" />
      {/* Pedestal */}
      <path d="M11.5 23.5h9l1.2 3H10.3l1.2-3z" fill="url(#gGoldV)" filter="url(#shadow)" />
      <path d="M11.5 23.5h9" stroke="url(#gCream)" strokeWidth="0.6" opacity="0.5" />
      {/* Sphere — radial gradient for 3D */}
      <circle cx="16" cy="14.5" r="8.5" fill="url(#gPurple)" filter="url(#shadow)" />
      <circle cx="16" cy="14.5" r="8.5" fill="url(#gPurpleShine)" />
      {/* Inner glow */}
      <circle cx="14" cy="12" r="4" fill="url(#gGoldGlow)" opacity="0.7" />
      {/* Highlight top-left */}
      <ellipse cx="12.5" cy="10.5" rx="2.8" ry="2" fill="url(#gHighlight)" transform="rotate(-25 12.5 10.5)" />
      {/* Inner star */}
      <path
        d="M16 11l1 2.8 2.8.1-2.2 1.7.8 2.8L16 16.9l-2.4 1.5.8-2.8-2.2-1.7 2.8-.1L16 11z"
        fill="url(#gGold)"
        filter="url(#goldGlow)"
      />
      {/* Leaf left */}
      <path d="M7.5 22c-1.4 0-2.5-.8-2.5-1.8s1.2-1.5 2.8-.8c.5.2.9.5 1.1.9L7.5 22z" fill="url(#gPurple)" opacity="0.75" />
      {/* Leaf right */}
      <path d="M24.5 22c1.4 0 2.5-.8 2.5-1.8s-1.2-1.5-2.8-.8c-.5.2-.9.5-1.1.9L24.5 22z" fill="url(#gPurple)" opacity="0.75" />
      <Sparkles positions={[[25, 8], [7, 10], [24, 22]]} />
    </IconShell>
  )
}

export function IconAtelier({ size = 32 }: IconProps) {
  return (
    <IconShell size={size}>
      {/* Arco exterior gold */}
      <path
        d="M8.5 27V16C8.5 10.2 11.8 6.5 16 6.5S23.5 10.2 23.5 16V27"
        stroke="url(#gGoldV)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
        filter="url(#goldGlow)"
      />
      {/* Arco interior sutil */}
      <path
        d="M10.5 27V16.5C10.5 11.8 12.8 9 16 9S21.5 11.8 21.5 16.5V27"
        stroke="url(#gGold)"
        strokeWidth="0.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.35"
      />
      {/* Fondo interior arco */}
      <path d="M10.5 27V16.5C10.5 11.8 12.8 9 16 9S21.5 11.8 21.5 16.5V27H10.5z" fill="url(#gPurpleDark)" opacity="0.6" />
      {/* Luna creciente */}
      <circle cx="16" cy="16" r="4.5" fill="url(#gCream)" opacity="0.85" />
      <circle cx="18" cy="14.8" r="4" fill="url(#gPurpleDark)" />
      {/* Estrella arriba del arco */}
      <path
        d="M16 4.5l.65 1.8 1.9.07-1.52 1.15.58 1.9-1.61-1.07-1.61 1.07.58-1.9L13.45 6.37l1.9-.07L16 4.5z"
        fill="url(#gGold)"
        filter="url(#goldGlow)"
      />
      {/* Hoja izquierda */}
      <path d="M8.5 21.5c-2.5 1-3.8 2.6-3 4 2-.2 3.8-1.3 4.5-3l-1.5-1z" fill="url(#gPurple)" opacity="0.8" />
      <path d="M8.5 22c-1.2 2-.9 3.5.5 4.2.6-1.5.5-3-.5-4.2z" fill="url(#gGold)" opacity="0.4" />
      {/* Hoja derecha */}
      <path d="M23.5 21.5c2.5 1 3.8 2.6 3 4-2-.2-3.8-1.3-4.5-3l1.5-1z" fill="url(#gPurple)" opacity="0.8" />
      <path d="M23.5 22c1.2 2 .9 3.5-.5 4.2-.6-1.5-.5-3 .5-4.2z" fill="url(#gGold)" opacity="0.4" />
      {/* Estrellas internas */}
      <circle cx="12.5" cy="20" r="0.7" fill="url(#gGold)" opacity="0.7" />
      <circle cx="19.5" cy="19" r="0.55" fill="url(#gCream)" opacity="0.6" />
      <Sparkles positions={[[25, 9], [7, 11], [24, 23.5]]} />
    </IconShell>
  )
}

export function IconTarot({ size = 32 }: IconProps) {
  return (
    <IconShell size={size}>
      {/* Carta izquierda (girada -18°) */}
      <g transform="rotate(-18 10 16)" filter="url(#shadow)">
        <rect x="6" y="6.5" width="8" height="12" rx="1.4" fill="url(#gPurpleDark)" />
        <rect x="6.6" y="7.1" width="6.8" height="10.8" rx="0.9" stroke="url(#gGold)" strokeWidth="0.7" fill="none" />
        <path d="M10 10l.6 1.6 1.7.05-1.35 1 .5 1.65L10 13.5l-1.45.8.5-1.65L7.7 11.65l1.7-.05L10 10z" fill="url(#gGold)" opacity="0.9" />
      </g>
      {/* Carta derecha (girada +18°) */}
      <g transform="rotate(18 22 16)" filter="url(#shadow)">
        <rect x="18" y="6.5" width="8" height="12" rx="1.4" fill="url(#gPurpleDark)" />
        <rect x="18.6" y="7.1" width="6.8" height="10.8" rx="0.9" stroke="url(#gGold)" strokeWidth="0.7" fill="none" />
        <path d="M22 10l.6 1.6 1.7.05-1.35 1 .5 1.65L22 13.5l-1.45.8.5-1.65-1.35-1.02 1.7-.05L22 10z" fill="url(#gGold)" opacity="0.9" />
      </g>
      {/* Carta central — frontal */}
      <rect x="10.5" y="5" width="11" height="17" rx="1.8" fill="url(#gPurpleDark)" filter="url(#shadow)" />
      <rect x="11.2" y="5.7" width="9.6" height="15.6" rx="1.2" stroke="url(#gGold)" strokeWidth="0.9" fill="none" />
      {/* Luna en carta central */}
      <circle cx="17.5" cy="11" r="3.2" fill="url(#gCream)" opacity="0.85" />
      <circle cx="19.2" cy="10" r="2.8" fill="url(#gPurpleDark)" />
      {/* Estrellas en carta */}
      <path d="M13.5 15.5l.45 1.2 1.3.05-1.05.78.38 1.25-1.08-.72-1.08.72.38-1.25-1.05-.78 1.3-.05.45-1.2z" fill="url(#gGold)" opacity="0.8" />
      <circle cx="18" cy="16" r="0.6" fill="url(#gGold)" opacity="0.7" />
      <circle cx="20" cy="17.5" r="0.5" fill="url(#gCream)" opacity="0.6" />
      <Sparkles positions={[[25.5, 7.5], [6.5, 9], [25, 23]]} />
    </IconShell>
  )
}

// ── RECURSOS: Libro abierto con constelación ───────────────────
export function IconLibro({ size = 32 }: IconProps) {
  return (
    <IconShell size={size}>
      {/* Sombra */}
      <ellipse cx="16" cy="26" rx="8" ry="1.5" fill="#06040D" opacity="0.4" />
      {/* Página izquierda */}
      <path d="M7.5 8.5C10 7.5 13 7.3 15.5 8.5v15.5C13 22.8 10 23 7.5 24V8.5z" fill="url(#gPurpleDark)" filter="url(#shadow)" />
      {/* Página derecha */}
      <path d="M24.5 8.5C22 7.5 19 7.3 16.5 8.5v15.5C19 22.8 22 23 24.5 24V8.5z" fill="url(#gPurple)" filter="url(#shadow)" />
      {/* Spine gold */}
      <path d="M15.5 8.5v15.5" stroke="url(#gGoldV)" strokeWidth="2" />
      {/* Constelación — página derecha */}
      <circle cx="20" cy="12" r="0.9" fill="url(#gGold)" />
      <circle cx="23" cy="14" r="0.7" fill="url(#gGold)" />
      <circle cx="21" cy="16" r="0.9" fill="url(#gGold)" />
      <circle cx="19" cy="15" r="0.6" fill="url(#gCream)" opacity="0.8" />
      <path d="M20 12L23 14L21 16L19 15" stroke="url(#gGold)" strokeWidth="0.6" strokeLinecap="round" opacity="0.6" />
      {/* Star on left page */}
      <path d="M11.5 15.5l.6 1.7 1.8.07-1.45 1.1.52 1.75-1.47-.98-1.47.98.52-1.75L9.1 17.27l1.8-.07.6-1.7z" fill="url(#gGold)" opacity="0.85" />
      {/* Highlight top right page */}
      <path d="M18 10c2.2-.4 4.5-.2 6 .5" stroke="url(#gCream)" strokeWidth="0.8" strokeLinecap="round" opacity="0.25" />
      <Sparkles positions={[[25, 8], [7, 9.5], [23.5, 23]]} />
    </IconShell>
  )
}

// ── COMUNIDAD: Siluetas con arco y estrella ────────────────────
export function IconUsuarios({ size = 32 }: IconProps) {
  return (
    <IconShell size={size}>
      {/* Arco dorado encima */}
      <path d="M8.5 13.5C8.5 8.5 11.8 6 16 6s7.5 2.5 7.5 7.5" stroke="url(#gGold)" strokeWidth="1.4" strokeLinecap="round" fill="none" filter="url(#goldGlow)" />
      {/* Estrella en arco */}
      <path d="M16 5l.55 1.5 1.6.06L16.9 7.6l.48 1.6-1.38-.92-1.38.92.48-1.6-1.25-.94 1.6-.06L16 5z" fill="url(#gGold)" />
      {/* Silueta central */}
      <circle cx="16" cy="14.5" r="3" fill="url(#gRose)" />
      <path d="M10.5 25c.7-5 3-7.2 5.5-7.2s4.8 2.2 5.5 7.2H10.5z" fill="url(#gPurple)" filter="url(#shadow)" />
      {/* Silueta izquierda */}
      <circle cx="10" cy="15.5" r="2.3" fill="url(#gPurple)" />
      <path d="M5.5 25c.6-3.8 2.4-5.5 4.5-5.5 1.4 0 2.5.8 3.2 2.5" fill="url(#gPurpleDark)" opacity="0.85" />
      {/* Silueta derecha */}
      <circle cx="22" cy="15.5" r="2.3" fill="url(#gPurple)" />
      <path d="M26.5 25c-.6-3.8-2.4-5.5-4.5-5.5-1.4 0-2.5.8-3.2 2.5" fill="url(#gPurpleDark)" opacity="0.85" />
      <Sparkles positions={[[25, 9.5], [7, 11], [24, 23]]} />
    </IconShell>
  )
}

// ── AMAZON: Bolsa de compras con estrella ─────────────────────
export function IconBolsa({ size = 32 }: IconProps) {
  return (
    <IconShell size={size}>
      {/* Sombra */}
      <ellipse cx="16" cy="26.5" rx="7" ry="1.5" fill="#06040D" opacity="0.45" />
      {/* Cuerpo bolsa */}
      <path d="M9 12.5h14l1.5 13H7.5L9 12.5z" fill="url(#gPurple)" filter="url(#shadow)" />
      {/* Franja gold top */}
      <path d="M9 12.5h14v2H9v-2z" fill="url(#gGold)" opacity="0.35" />
      {/* Manijas */}
      <path d="M12 12.5c0-3.5 1.6-5.5 4-5.5s4 2 4 5.5" stroke="url(#gGoldV)" strokeWidth="2" strokeLinecap="round" fill="none" />
      {/* Estrella central */}
      <path d="M16 17l.9 2.5 2.65.1-2.15 1.62.8 2.6-2.2-1.46-2.2 1.46.8-2.6-2.15-1.62 2.65-.1L16 17z" fill="url(#gGold)" filter="url(#goldGlow)" />
      {/* Hoja decorativa */}
      <path d="M8 22.5c-1 .6-1.8 1.5-1.5 2.2.8 0 1.8-.4 2.4-1.2L8 22.5z" fill="url(#gPurple)" opacity="0.7" />
      <path d="M24 22.5c1 .6 1.8 1.5 1.5 2.2-.8 0-1.8-.4-2.4-1.2L24 22.5z" fill="url(#gPurple)" opacity="0.7" />
      <Sparkles positions={[[25, 9], [7, 10], [25.5, 22]]} />
    </IconShell>
  )
}

// ── CURSOS: Birrete de graduación ─────────────────────────────
export function IconGraduacion({ size = 32 }: IconProps) {
  return (
    <IconShell size={size}>
      {/* Sombra */}
      <ellipse cx="16" cy="26" rx="7.5" ry="1.8" fill="#06040D" opacity="0.4" />
      {/* Cuerpo del birrete */}
      <path d="M6 15.5l10-4.5 10 4.5-10 4.5L6 15.5z" fill="url(#gPurple)" filter="url(#shadow)" />
      {/* Top cuadrado */}
      <path d="M6 15.5l10-4.5 10 4.5v.5L16 20.5l-10-4.5v-.5z" fill="url(#gPurpleDark)" />
      {/* Gold band */}
      <path d="M6 15.5l10-4.5 10 4.5" stroke="url(#gGold)" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
      {/* Correa graduation */}
      <path d="M10 16v5.5c2.8 1.8 7.2 1.8 10 0V16" fill="url(#gPurple)" />
      {/* Tassel — lado derecho */}
      <line x1="26" y1="15.5" x2="26" y2="22" stroke="url(#gGoldV)" strokeWidth="1.2" strokeLinecap="round" />
      {/* Bola del tassel */}
      <circle cx="26" cy="23" r="1.5" fill="url(#gGold)" filter="url(#goldGlow)" />
      {/* Star top */}
      <path d="M16 9l.55 1.5 1.6.07-1.25.95.48 1.6-1.38-.93-1.38.93.48-1.6-1.25-.95 1.6-.07L16 9z" fill="url(#gGold)" />
      <Sparkles positions={[[24.5, 9], [7.5, 10], [23, 24]]} />
    </IconShell>
  )
}

export function IconLotus({ size = 32 }: IconProps) {
  return (
    <IconShell size={size}>
      {/* Pétalo central */}
      <path
        d="M16 25C12 21.5 10.5 18 11 14c.4-2.8 2.5-5.2 5-6.8 2.5 1.6 4.6 4 5 6.8.5 4-1 7.5-5 11z"
        fill="url(#gPurple)"
        filter="url(#shadow)"
      />
      {/* Pétalo izquierdo */}
      <path
        d="M16 25C10.5 23.2 7 20 6.5 16c-.35-2.6.8-5.2 3.3-7.2 2 1.5 3.4 3.8 3.8 6.5"
        fill="url(#gPurpleDark)"
        opacity="0.88"
      />
      {/* Pétalo derecho */}
      <path
        d="M16 25C21.5 23.2 25 20 25.5 16c.35-2.6-.8-5.2-3.3-7.2-2 1.5-3.4 3.8-3.8 6.5"
        fill="url(#gPurpleDark)"
        opacity="0.88"
      />
      {/* Pétalo trasero izquierdo */}
      <path
        d="M16 25C9 23 5 19 5.5 15c.3-2.5 2.2-4.5 5-5.5 1.2 2 1.5 4.5.8 7"
        fill="url(#gPurple)"
        opacity="0.55"
      />
      {/* Pétalo trasero derecho */}
      <path
        d="M16 25C23 23 27 19 26.5 15c-.3-2.5-2.2-4.5-5-5.5-1.2 2-1.5 4.5-.8 7"
        fill="url(#gPurple)"
        opacity="0.55"
      />
      {/* Centro gold */}
      <circle cx="16" cy="18" r="2.5" fill="url(#gGold)" filter="url(#goldGlow)" />
      <circle cx="16" cy="18" r="1.2" fill="url(#gCream)" opacity="0.65" />
      {/* Línea agua */}
      <path d="M8 26c5.3 1.6 10.7 1.6 16 0" stroke="url(#gGold)" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
      <Sparkles positions={[[25, 9], [7.5, 10], [25, 23.5]]} />
    </IconShell>
  )
}

// ── ENERGÍA: Cristales/cuarzo ─────────────────────────────────
function IconCristales({ size = 32 }: IconProps) {
  return (
    <IconShell size={size}>
      {/* Cristal central grande */}
      <path d="M16 5.5l3 5v10.5l-3 5.5-3-5.5V10.5L16 5.5z" fill="url(#gPurple)" filter="url(#shadow)" />
      <path d="M16 5.5l3 5L16 13l-3-2.5 3-5z" fill="url(#gRose)" opacity="0.8" />
      <path d="M16 5.5l-3 5-1.5 1 3 2.5 1.5-8.5z" fill="url(#gHighlight)" />
      <path d="M13 10.5l3 2.5v13.5l-3-5.5V10.5z" fill="url(#gPurpleDark)" opacity="0.7" />
      {/* Cristal izquierdo */}
      <path d="M9.5 10l2.2 3.5v7l-2.2 4-2.2-4v-7L9.5 10z" fill="url(#gPurple)" opacity="0.85" />
      <path d="M9.5 10l2.2 3.5-2.2 1.5-2.2-1.5 2.2-3.5z" fill="url(#gRose)" opacity="0.7" />
      {/* Cristal derecho */}
      <path d="M22.5 10l2.2 3.5v7l-2.2 4-2.2-4v-7L22.5 10z" fill="url(#gPurple)" opacity="0.85" />
      <path d="M22.5 10l2.2 3.5-2.2 1.5-2.2-1.5 2.2-3.5z" fill="url(#gRose)" opacity="0.7" />
      {/* Gold glow en puntas */}
      <path d="M16 5.5l.5 1.5-.5.5-.5-.5L16 5.5z" fill="url(#gGold)" opacity="0.9" />
      <path d="M9.5 10l.4 1.2-.4.4-.4-.4L9.5 10z" fill="url(#gGold)" opacity="0.7" />
      <path d="M22.5 10l.4 1.2-.4.4-.4-.4L22.5 10z" fill="url(#gGold)" opacity="0.7" />
      {/* Hojas base */}
      <path d="M10 25.5c-2 .8-3.2 2-2.8 3.2 1.6-.1 3-1 3.6-2.3L10 25.5z" fill="url(#gPurple)" opacity="0.7" />
      <path d="M22 25.5c2 .8 3.2 2 2.8 3.2-1.6-.1-3-1-3.6-2.3L22 25.5z" fill="url(#gPurple)" opacity="0.7" />
      <Sparkles positions={[[25, 9], [6.5, 11], [25, 23]]} />
    </IconShell>
  )
}

export function IconEclipse({ size = 32 }: IconProps) {
  return (
    <IconShell size={size}>
      <circle cx="15" cy="16" r="9.5" fill="url(#gGold)" filter="url(#softShadow)" />
      <circle cx="19" cy="16" r="8.8" fill="url(#gDeep)" />
      <path d="M22.5 8.5a10 10 0 0 1 0 15" stroke="url(#gPurple)" strokeWidth="1.4" strokeLinecap="round" />
      <Sparkles />
    </IconShell>
  )
}

export function IconPlaneta({ size = 32 }: IconProps) {
  return (
    <IconShell size={size}>
      <circle cx="16" cy="16" r="6.6" fill="url(#gPurple)" filter="url(#softShadow)" />
      <path d="M10 14.2c3.7 2.4 8.4 2.8 12.7 1" stroke="url(#gCream)" strokeWidth="1" opacity="0.32" />
      <ellipse cx="16" cy="16" rx="12.2" ry="4.2" stroke="url(#gGold)" strokeWidth="2" />
      <ellipse cx="16" cy="16" rx="12.2" ry="4.2" stroke="url(#gCream)" strokeWidth="0.7" opacity="0.45" />
      <circle cx="14" cy="13" r="1.4" fill="url(#gGold)" opacity="0.8" />
    </IconShell>
  )
}

export function IconLanterna({ size = 32 }: IconProps) {
  return (
    <IconShell size={size}>
      {/* Base/pie */}
      <path d="M12.5 26.5h7l.8 1.2H11.7l.8-1.2z" fill="url(#gGoldV)" />
      {/* Cuerpo linterna */}
      <path d="M11 13c-1.2 4.8.3 9.5 5 13.5 4.7-4 6.2-8.7 5-13.5H11z" fill="url(#gGold)" filter="url(#shadow)" />
      <path d="M12.2 13.8c-.8 4 .4 7.8 3.8 11 3.4-3.2 4.6-7 3.8-11H12.2z" fill="url(#gPurpleDark)" />
      {/* Llama central */}
      <radialGradient id="gFlame" cx="50%" cy="80%" r="50%">
        <stop offset="0%" stopColor="#FFF0A0" />
        <stop offset="50%" stopColor="#F0A030" />
        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
      </radialGradient>
      <path d="M16 15.5c-1.5 1.5-2 3.5-1 5s2.5 2 2.5 2-1-.5-1.5-2 .5-4 0-5z" fill="url(#gFlame)" />
      <path d="M16 15.5c1.5 1.5 2 3.5 1 5s-2.5 2-2.5 2 1-.5 1.5-2-.5-4 0-5z" fill="url(#gGold)" opacity="0.7" />
      <circle cx="16" cy="20" r="1.5" fill="#FFF8A0" opacity="0.65" />
      {/* Asa superior */}
      <path d="M13 13c0-3.5 1.4-6 3-7.5 1.6 1.5 3 4 3 7.5" stroke="url(#gGoldV)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Barras laterales */}
      <line x1="11" y1="15" x2="21" y2="15" stroke="url(#gGold)" strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />
      <line x1="11" y1="22" x2="21" y2="22" stroke="url(#gGold)" strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />
      {/* Estrella top handle */}
      <path d="M16 4.5l.5 1.4 1.5.06-1.2.9.45 1.5L16 7.5l-1.25.84.45-1.5-1.2-.9 1.5-.06L16 4.5z" fill="url(#gGold)" filter="url(#goldGlow)" />
      <Sparkles positions={[[24.5, 9], [7.5, 10.5], [24, 23]]} />
    </IconShell>
  )
}

// ── CORAZÓN: Corazón purple con estrella ─────────────────────
function IconCorazonHD({ size = 32 }: IconProps) {
  return (
    <IconShell size={size}>
      {/* Sombra */}
      <ellipse cx="16" cy="26" rx="6.5" ry="1.5" fill="#06040D" opacity="0.4" />
      {/* Corazón */}
      <path
        d="M16 25.5S6 20 6 12.5C6 9 8.4 6.5 11.5 6.5c2.2 0 3.8 1.4 4.5 3.2.7-1.8 2.3-3.2 4.5-3.2C23.6 6.5 26 9 26 12.5 26 20 16 25.5 16 25.5z"
        fill="url(#gPurple)"
        filter="url(#shadow)"
      />
      {/* Brillo interior */}
      <path
        d="M16 25.5S6 20 6 12.5C6 9 8.4 6.5 11.5 6.5c2.2 0 3.8 1.4 4.5 3.2.7-1.8 2.3-3.2 4.5-3.2C23.6 6.5 26 9 26 12.5 26 20 16 25.5 16 25.5z"
        fill="url(#gPurpleShine)"
      />
      {/* Highlight top-left */}
      <path d="M10.5 9.5C12.2 8.3 14 8 15 9" stroke="url(#gCream)" strokeWidth="1.5" strokeLinecap="round" opacity="0.45" />
      {/* Estrella central */}
      <path
        d="M16 13l.75 2.1 2.2.08-1.75 1.35.65 2.2-1.85-1.23-1.85 1.23.65-2.2-1.75-1.35 2.2-.08L16 13z"
        fill="url(#gGold)"
        filter="url(#goldGlow)"
      />
      <Sparkles positions={[[24.5, 9.5], [7.5, 11], [25, 23]]} />
    </IconShell>
  )
}

// ── PROTECCIÓN: Escudo con estrella ──────────────────────────
function IconEscudo({ size = 32 }: IconProps) {
  return (
    <IconShell size={size}>
      {/* Sombra */}
      <ellipse cx="16" cy="27" rx="5" ry="1.2" fill="#06040D" opacity="0.4" />
      {/* Escudo principal */}
      <path
        d="M16 4.5L25 8.5v7C25 21.5 21 26 16 28 11 26 7 21.5 7 15.5v-7L16 4.5z"
        fill="url(#gPurple)"
        filter="url(#shadow)"
      />
      <path
        d="M16 4.5L25 8.5v7C25 21.5 21 26 16 28 11 26 7 21.5 7 15.5v-7L16 4.5z"
        fill="url(#gPurpleShine)"
      />
      {/* Borde gold del escudo */}
      <path
        d="M16 6.5L23.5 10v6.5C23.5 21 20 24.5 16 26.5 12 24.5 8.5 21 8.5 16.5V10L16 6.5z"
        stroke="url(#gGold)"
        strokeWidth="0.8"
        fill="none"
        opacity="0.5"
      />
      {/* Estrella central */}
      <path
        d="M16 10.5l1.1 3.2 3.4.12-2.75 2.1 1 3.35-2.75-1.83-2.75 1.83 1-3.35L11.5 13.82l3.4-.12L16 10.5z"
        fill="url(#gGold)"
        filter="url(#goldGlow)"
      />
      {/* Vertical line escudo */}
      <line x1="16" y1="6.5" x2="16" y2="26.5" stroke="url(#gGoldV)" strokeWidth="0.6" opacity="0.2" />
      <Sparkles positions={[[24, 9.5], [8, 11], [24.5, 23]]} />
    </IconShell>
  )
}

export function IconMeditacion({ size = 32 }: IconProps) {
  return (
    <IconShell size={size}>
      {/* Aureola/halo */}
      <circle cx="16" cy="9.5" r="5.5" stroke="url(#gGold)" strokeWidth="0.9" fill="none" opacity="0.45" filter="url(#goldGlow)" />
      {/* Cabeza */}
      <circle cx="16" cy="9" r="3.2" fill="url(#gRose)" />
      {/* Cuerpo meditando */}
      <path d="M10 23C10.3 17.5 12.8 14.5 16 14.5S21.7 17.5 22 23H10z" fill="url(#gPurple)" filter="url(#shadow)" />
      <path d="M10 23C10.3 17.5 12.8 14.5 16 14.5S21.7 17.5 22 23H10z" fill="url(#gPurpleShine)" />
      {/* Piernas cruzadas */}
      <path d="M8.5 21c2.2-2.2 5-2.5 7.5-.6 2.5-1.9 5.3-1.6 7.5.6" stroke="url(#gGold)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      {/* Manos en mudra */}
      <path d="M12 21.5c2.6 1.8 6.4 1.8 9 0" stroke="url(#gCream)" strokeWidth="0.9" strokeLinecap="round" opacity="0.4" />
      {/* Estrella en pecho/chakra */}
      <path d="M16 17.5l.55 1.5 1.6.06-1.28 1 .5 1.6-1.37-.92-1.37.92.5-1.6-1.28-1 1.6-.06L16 17.5z" fill="url(#gGold)" filter="url(#goldGlow)" />
      <Sparkles positions={[[24.5, 9], [7.5, 10.5], [24, 23]]} />
    </IconShell>
  )
}

// ── CORREO: Sobre con estrella ────────────────────────────────
function IconCorreoHD({ size = 32 }: IconProps) {
  return (
    <IconShell size={size}>
      {/* Sombra */}
      <ellipse cx="16" cy="26.5" rx="7.5" ry="1.5" fill="#06040D" opacity="0.4" />
      {/* Cuerpo sobre */}
      <rect x="6" y="10" width="20" height="14" rx="2.5" fill="url(#gCream)" filter="url(#shadow)" />
      {/* Pliegue V */}
      <path d="M6 11.5l10 7.5 10-7.5" stroke="url(#gPurple)" strokeWidth="1.5" strokeLinejoin="round" fill="none" />
      {/* Esquinas inferiores */}
      <path d="M6 24l7.2-5.5M26 24l-7.2-5.5" stroke="url(#gGold)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
      {/* Estrella central */}
      <path
        d="M16 14l.75 2.1 2.2.08-1.75 1.35.65 2.2-1.85-1.23-1.85 1.23.65-2.2-1.75-1.35 2.2-.08L16 14z"
        fill="url(#gGold)"
        filter="url(#goldGlow)"
      />
      {/* Sello gold */}
      <circle cx="16" cy="16" r="3.5" stroke="url(#gGold)" strokeWidth="0.7" fill="none" opacity="0.35" />
      <Sparkles positions={[[25, 9], [7, 10], [25, 23.5]]} />
    </IconShell>
  )
}

export function IconPortal({ size = 32 }: IconProps) {
  return (
    <IconShell size={size}>
      <ellipse cx="16" cy="16" rx="10" ry="12.5" fill="url(#gPurple)" opacity="0.8" filter="url(#softShadow)" />
      <ellipse cx="16" cy="16" rx="6.4" ry="9" fill="url(#gGold)" opacity="0.65" />
      <ellipse cx="16" cy="16" rx="3.3" ry="5.2" fill="url(#gRose)" />
      <path d="M16 8c2.2 3.2 2.2 12.8 0 16M9.5 16h13" stroke="url(#gCream)" strokeWidth="0.9" opacity="0.45" />
      <Sparkles />
    </IconShell>
  )
}

function IconEyeHD({ size = 32 }: IconProps) {
  return <IllustratedIcon kind="eye" size={size} />
}

function IllustratedIcon({ kind, size = 32 }: { kind: IconKind; size?: number }) {
  switch (kind) {
    case 'star':
      return <IconEstrella size={size} />
    case 'crystal':
      return <IconCrystalBall size={size} />
    case 'moon':
      return (
        <IconShell size={size}>
          <circle cx="15" cy="16" r="9.5" fill="url(#gCream)" filter="url(#softShadow)" />
          <circle cx="19.5" cy="13.8" r="9" fill="url(#gDeep)" />
          <path d="M9 20.8c3.2 1.7 7.5.7 10-2.2" stroke="url(#gGold)" strokeWidth="1" strokeLinecap="round" opacity="0.65" />
          <Sparkles />
        </IconShell>
      )
    case 'sun':
      return (
        <IconShell size={size}>
          <circle cx="16" cy="16" r="6.5" fill="url(#gGold)" filter="url(#softShadow)" />
          <circle cx="16" cy="16" r="3" fill="url(#gCream)" opacity="0.42" />
          {Array.from({ length: 8 }).map((_, index) => {
            const angle = (index * Math.PI) / 4
            const x1 = 16 + Math.cos(angle) * 9
            const y1 = 16 + Math.sin(angle) * 9
            const x2 = 16 + Math.cos(angle) * 12
            const y2 = 16 + Math.sin(angle) * 12
            return (
              <line
                key={index}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="url(#gGold)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )
          })}
        </IconShell>
      )
    case 'planet':
      return <IconPlaneta size={size} />
    case 'eclipse':
      return <IconEclipse size={size} />
    case 'zap':
      return (
        <IconShell size={size}>
          <path d="M17.8 4.8 7.5 17.2h7.3L13.6 27l10.6-13.4h-7.6l1.2-8.8z" fill="url(#gGold)" filter="url(#softShadow)" />
          <path d="M15.8 10.2 11 15.8h4.8l-.5 4.5 4.8-6.2h-4.5l.2-3.9z" fill="url(#gCream)" opacity="0.42" />
        </IconShell>
      )
    case 'heart':
      return (
        <IconShell size={size}>
          <path d="M16 25.5S6.5 20.1 6.5 12.8c0-3.3 2.2-5.6 5-5.6 2.1 0 3.7 1.3 4.5 3 0.8-1.7 2.4-3 4.5-3 2.8 0 5 2.3 5 5.6 0 7.3-9.5 12.7-9.5 12.7z" fill="url(#gRose)" filter="url(#softShadow)" />
          <path d="M10.8 10.4c1.5-1.1 3.2-.5 4.1 1.1" stroke="url(#gCream)" strokeWidth="1" strokeLinecap="round" opacity="0.55" />
        </IconShell>
      )
    case 'shield':
      return (
        <IconShell size={size}>
          <path d="M16 4.6 24 7.7v6.8c0 5.4-3.2 9.5-8 12.6-4.8-3.1-8-7.2-8-12.6V7.7l8-3.1z" fill="url(#gPurple)" filter="url(#softShadow)" />
          <path d="m12.4 15.8 2.3 2.3 5-5" stroke="url(#gGold)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 7.2v16" stroke="url(#gCream)" strokeWidth="0.8" opacity="0.25" />
        </IconShell>
      )
    case 'eye':
      return (
        <IconShell size={size}>
          <path d="M5.8 16s3.6-6.6 10.2-6.6S26.2 16 26.2 16 22.6 22.6 16 22.6 5.8 16 5.8 16z" fill="url(#gPurple)" filter="url(#softShadow)" />
          <circle cx="16" cy="16" r="4.2" fill="url(#gGold)" />
          <circle cx="16" cy="16" r="2.1" fill="url(#gDeep)" />
          <circle cx="14.7" cy="14.8" r="0.8" fill="url(#gCream)" />
        </IconShell>
      )
    case 'compass':
      return (
        <IconShell size={size}>
          <circle cx="16" cy="16" r="9.2" fill="url(#gCream)" filter="url(#softShadow)" />
          <circle cx="16" cy="16" r="7.4" fill="url(#gDeep)" />
          <path d="m16 7.8 2.6 8.1L16 24.2l-2.6-8.3L16 7.8z" fill="url(#gGold)" />
          <path d="m7.8 16 8.2-2.6 8.2 2.6-8.2 2.6L7.8 16z" fill="url(#gRose)" opacity="0.72" />
          <circle cx="16" cy="16" r="1.5" fill="url(#gCream)" />
        </IconShell>
      )
    case 'flower':
      return <IconLotus size={size} />
    case 'book':
      return (
        <IconShell size={size}>
          <path d="M7 8.2c3-1.4 5.9-1.2 9 0v16c-3.1-1.2-6-1.4-9 0v-16z" fill="url(#gPurple)" />
          <path d="M16 8.2c3.1-1.2 6-1.4 9 0v16c-3-1.4-5.9-1.2-9 0v-16z" fill="url(#gRose)" />
          <path d="M16 8.2v16" stroke="url(#gGold)" strokeWidth="1.2" />
          <path d="M9.5 12h3.8M18.8 12h3.7M9.5 15h4M18.8 15h4" stroke="url(#gCream)" strokeWidth="0.9" strokeLinecap="round" opacity="0.55" />
        </IconShell>
      )
    case 'file':
      return (
        <IconShell size={size}>
          <path d="M10 5h8l5 5v17H10V5z" fill="url(#gCream)" filter="url(#softShadow)" />
          <path d="M18 5v6h5" fill="url(#gGold)" />
          <path d="M13 15h7M13 18h7M13 21h4" stroke="url(#gPurple)" strokeWidth="1" strokeLinecap="round" />
        </IconShell>
      )
    case 'mail':
      return (
        <IconShell size={size}>
          <rect x="6" y="10" width="20" height="13" rx="2.3" fill="url(#gCream)" filter="url(#softShadow)" />
          <path d="m7 11.2 9 7.1 9-7.1" stroke="url(#gPurple)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="m9 22 5.2-5M23 22l-5.2-5" stroke="url(#gGold)" strokeWidth="1" strokeLinecap="round" />
        </IconShell>
      )
    case 'bell':
      return (
        <IconShell size={size}>
          <path d="M10 21h12c-1.5-1.8-2-4-2-7 0-3.2-1.7-5.4-4-5.8-2.3.4-4 2.6-4 5.8 0 3-.5 5.2-2 7z" fill="url(#gGold)" filter="url(#softShadow)" />
          <path d="M14 23.4c.8 1.2 3.2 1.2 4 0" stroke="url(#gCream)" strokeWidth="1.2" strokeLinecap="round" />
          <circle cx="16" cy="7.2" r="1.4" fill="url(#gRose)" />
        </IconShell>
      )
    case 'download':
      return (
        <IconShell size={size}>
          <path d="M9 22h14v3H9v-3z" fill="url(#gGold)" />
          <path d="M16 6v13" stroke="url(#gCream)" strokeWidth="2.2" strokeLinecap="round" />
          <path d="m11 14 5 5 5-5" fill="url(#gPurple)" stroke="url(#gGold)" strokeWidth="1.5" strokeLinejoin="round" />
        </IconShell>
      )
    case 'search':
      return (
        <IconShell size={size}>
          <circle cx="14" cy="14" r="6.6" fill="url(#gCream)" filter="url(#softShadow)" />
          <circle cx="14" cy="14" r="4.2" fill="url(#gDeep)" />
          <path d="m19 19 5 5" stroke="url(#gGold)" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="12.6" cy="12.3" r="1" fill="url(#gGold)" />
        </IconShell>
      )
    case 'calendar':
      return (
        <IconShell size={size}>
          <rect x="7" y="8" width="18" height="16" rx="2.2" fill="url(#gCream)" filter="url(#softShadow)" />
          <path d="M7 12h18" stroke="url(#gPurple)" strokeWidth="1.2" />
          <path d="M11 6v4M21 6v4" stroke="url(#gGold)" strokeWidth="1.7" strokeLinecap="round" />
          <circle cx="12" cy="16" r="1.2" fill="url(#gPurple)" />
          <circle cx="16" cy="16" r="1.2" fill="url(#gGold)" />
          <circle cx="20" cy="19.5" r="1.2" fill="url(#gRose)" />
        </IconShell>
      )
    case 'users':
      return (
        <IconShell size={size}>
          <circle cx="13" cy="11" r="3.2" fill="url(#gRose)" />
          <circle cx="20" cy="12.2" r="2.6" fill="url(#gGold)" />
          <path d="M7 24c.8-5.2 3-7.4 6-7.4s5.2 2.2 6 7.4H7z" fill="url(#gPurple)" />
          <path d="M17 24c.7-3.9 2.5-5.7 5-5.7 2.1 0 3.5 1.5 4 5.7h-9z" fill="url(#gGold)" opacity="0.72" />
        </IconShell>
      )
    case 'bag':
      return (
        <IconShell size={size}>
          <path d="M9 11h14l1.2 14H7.8L9 11z" fill="url(#gPurple)" filter="url(#softShadow)" />
          <path d="M12 11c0-3 1.6-5 4-5s4 2 4 5" stroke="url(#gGold)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M11.5 16h9M12 20h6" stroke="url(#gCream)" strokeWidth="1" strokeLinecap="round" opacity="0.45" />
        </IconShell>
      )
    case 'graduation':
      return (
        <IconShell size={size}>
          <path d="m16 7 11 5-11 5-11-5 11-5z" fill="url(#gGold)" filter="url(#softShadow)" />
          <path d="M10 15v5c3.7 2.2 8.3 2.2 12 0v-5" fill="url(#gPurple)" />
          <path d="M25 13v6" stroke="url(#gCream)" strokeWidth="1" strokeLinecap="round" opacity="0.6" />
          <circle cx="25" cy="20.5" r="1.2" fill="url(#gRose)" />
        </IconShell>
      )
    case 'palette':
      return (
        <IconShell size={size}>
          <path d="M16 6.5c-5.7 0-10 3.8-10 9.1 0 4.9 3.8 8.4 8.5 8.4h1.6c1.3 0 1.9-1.4 1.1-2.4-.8-1-.2-2.4 1.1-2.4h2.2c3.1 0 5.5-2.3 5.5-5.3 0-4.3-4.2-7.4-10-7.4z" fill="url(#gCream)" filter="url(#softShadow)" />
          <circle cx="11.5" cy="14" r="1.5" fill="url(#gRose)" />
          <circle cx="15.2" cy="11.2" r="1.5" fill="url(#gGold)" />
          <circle cx="19.5" cy="13.2" r="1.5" fill="url(#gPurple)" />
          <circle cx="14" cy="18.2" r="1.3" fill="url(#gDeep)" />
        </IconShell>
      )
    case 'headphones':
      return (
        <IconShell size={size}>
          <path d="M7.5 18c0-6.2 3.5-10.2 8.5-10.2s8.5 4 8.5 10.2" stroke="url(#gGold)" strokeWidth="2" strokeLinecap="round" />
          <rect x="6" y="17" width="5" height="7" rx="2" fill="url(#gPurple)" />
          <rect x="21" y="17" width="5" height="7" rx="2" fill="url(#gPurple)" />
          <circle cx="16" cy="16" r="3.2" fill="url(#gGlow)" />
        </IconShell>
      )
    case 'video':
      return (
        <IconShell size={size}>
          <rect x="7" y="10" width="14" height="12" rx="2" fill="url(#gPurple)" filter="url(#softShadow)" />
          <path d="m21 14 5-3v10l-5-3v-4z" fill="url(#gGold)" />
          <circle cx="13.5" cy="16" r="2.2" fill="url(#gCream)" opacity="0.45" />
        </IconShell>
      )
    case 'tarot':
      return <IconTarot size={size} />
  }
}

export function IconCard({
  icon,
  label,
  variant = 'default',
}: {
  icon: ReactNode
  label?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'default' | 'gold' | 'rose'
}) {
  const glowColor =
    variant === 'gold' ? '#D4AF37' : variant === 'rose' ? '#E5DBF0' : '#5A2E8C'

  return (
    <motion.div
      className="flex cursor-pointer flex-col items-center gap-2"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
    >
      <motion.div
        className="rounded-2xl border border-white/10 bg-[#1A0F3D]/80 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
        whileHover={{
          boxShadow: `0 0 24px ${glowColor}45, inset 0 1px 0 rgba(255,255,255,0.12)`,
          borderColor: `${glowColor}70`,
        }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>
      {label && (
        <span className="font-sans text-[10px] tracking-widest text-[var(--color-pale-lav)] uppercase">
          {label}
        </span>
      )}
    </motion.div>
  )
}

export const ElaraIcons = {
  // Navegación — mapeos correctos según lámina 1
  Inicio:         { render: (size = 24) => <IconInicio        size={size} /> },
  Herramientas:   { render: (size = 24) => <IconCrystalBall   size={size} /> },
  Oraculo:        { render: (size = 24) => <IconTarot         size={size} /> },
  Recursos:       { render: (size = 24) => <IconLibro         size={size} /> },
  Comunidad:      { render: (size = 24) => <IconUsuarios      size={size} /> },
  Amazon:         { render: (size = 24) => <IconBolsa         size={size} /> },
  Cursos:         { render: (size = 24) => <IconGraduacion    size={size} /> },
  Atelier:        { render: (size = 24) => <IconAtelier       size={size} /> },
  // Celestiales — lámina 2
  Luna:           { render: (size = 24) => <IconLunaHD        size={size} /> },
  Estrellas:      { render: (size = 24) => <IconEstrella      size={size} /> },
  Sol:            { render: (size = 24) => <IconSolHD         size={size} /> },
  Planetas:       { render: (size = 24) => <IconPlaneta       size={size} /> },
  Eclipse:        { render: (size = 24) => <IconEclipse       size={size} /> },
  Destino:        { render: (size = 24) => <IconPortal        size={size} /> },
  Corazon:        { render: (size = 24) => <IconCorazonHD     size={size} /> },
  Intuicion:      { render: (size = 24) => <IconLotus         size={size} /> },
  Vision:         { render: (size = 24) => <IconEyeHD         size={size} /> },
  Proteccion:     { render: (size = 24) => <IconEscudo        size={size} /> },
  Energia:        { render: (size = 24) => <IconCristales     size={size} /> },
  Guia:           { render: (size = 24) => <IconLanterna      size={size} /> },
  // Contenido — lámina 3
  Ebook:          { render: (size = 24) => <IconLibro         size={size} /> },
  Journal:        { render: (size = 24) => <IconMeditacion    size={size} /> },
  Meditacion:     { render: (size = 24) => <IconMeditacion    size={size} /> },
  Audio:          { render: (size = 24) => <IllustratedIcon kind="headphones" size={size} /> },
  Video:          { render: (size = 24) => <IllustratedIcon kind="video"      size={size} /> },
  PDF:            { render: (size = 24) => <IconLibro         size={size} /> },
  // Acciones
  Buscar:         { render: (size = 24) => <IllustratedIcon kind="search"     size={size} /> },
  Calendario:     { render: (size = 24) => <IllustratedIcon kind="calendar"   size={size} /> },
  Favoritos:      { render: (size = 24) => <IconCorazonHD     size={size} /> },
  Descargar:      { render: (size = 24) => <IllustratedIcon kind="download"   size={size} /> },
  Correo:         { render: (size = 24) => <IconCorreoHD      size={size} /> },
  Notificaciones: { render: (size = 24) => <IllustratedIcon kind="bell"       size={size} /> },
  Florecer:       { render: (size = 24) => <IconLotus         size={size} /> },
} as const
