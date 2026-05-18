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
      <linearGradient id="gPurple" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C49AD4" />
        <stop offset="100%" stopColor="#7B4FB5" />
      </linearGradient>
      <linearGradient id="gGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F0D070" />
        <stop offset="100%" stopColor="#D4AF37" />
      </linearGradient>
      <linearGradient id="gRose" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F9A8D4" />
        <stop offset="100%" stopColor="#C49AD4" />
      </linearGradient>
      <linearGradient id="gDeep" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#2D1870" />
        <stop offset="100%" stopColor="#1A0F3D" />
      </linearGradient>
      <linearGradient id="gCream" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F5EEF8" />
        <stop offset="100%" stopColor="#E8D5F0" />
      </linearGradient>
      <radialGradient id="gGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="gPurpleGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#7B4FB5" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#7B4FB5" stopOpacity="0" />
      </radialGradient>
      <filter id="softShadow" x="-40%" y="-40%" width="180%" height="180%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#06040D" floodOpacity="0.45" />
      </filter>
    </defs>
  )
}

function IconShell({
  size,
  children,
}: {
  size: number
  children: ReactNode
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden
    >
      <Defs />
      <circle cx="16" cy="16" r="15" fill="url(#gPurpleGlow)" />
      <circle cx="16" cy="16" r="13.5" fill="url(#gDeep)" opacity="0.92" />
      {children}
      <path
        d="M8 6.8C10.4 5.1 13 4.3 16 4.3"
        stroke="url(#gCream)"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.32"
      />
    </svg>
  )
}

function Sparkles() {
  return (
    <g opacity="0.9">
      <circle cx="7.2" cy="10.2" r="0.9" fill="url(#gGold)" />
      <circle cx="24.2" cy="9.6" r="0.75" fill="url(#gCream)" />
      <path
        d="M23.4 22.2l.6 1.3 1.3.6-1.3.6-.6 1.3-.6-1.3-1.3-.6 1.3-.6.6-1.3z"
        fill="url(#gGold)"
      />
    </g>
  )
}

export function IconEstrella({ size = 32 }: IconProps) {
  return (
    <IconShell size={size}>
      <path
        d="M16 5.2l2.55 7.1 7.55.2-6 4.6 2.15 7.25L16 20.05l-6.25 4.3 2.15-7.25-6-4.6 7.55-.2L16 5.2z"
        fill="url(#gGold)"
        filter="url(#softShadow)"
      />
      <path
        d="M16 8.2l1.45 4 4.25.12-3.4 2.58 1.2 4.05L16 16.55l-3.5 2.4 1.2-4.05-3.4-2.58 4.25-.12L16 8.2z"
        fill="url(#gCream)"
        opacity="0.5"
      />
      <circle cx="16" cy="15.3" r="2" fill="#F0D070" opacity="0.75" />
      <Sparkles />
    </IconShell>
  )
}

export function IconCrystalBall({ size = 32 }: IconProps) {
  return (
    <IconShell size={size}>
      <ellipse cx="16" cy="24.2" rx="7" ry="2.6" fill="#0B0618" opacity="0.55" />
      <path d="M11 23h10l1.4 3.2H9.6L11 23z" fill="url(#gGold)" />
      <circle cx="16" cy="14" r="9" fill="url(#gPurple)" filter="url(#softShadow)" />
      <circle cx="13" cy="10.5" r="3.4" fill="url(#gCream)" opacity="0.42" />
      <path
        d="M10.5 16.5c2.2-3.2 6.5-4.4 10.9-2.9"
        stroke="url(#gGold)"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.65"
      />
      <path d="M18 9.2l.7 1.4 1.45.7-1.45.7L18 13.4l-.7-1.4-1.45-.7 1.45-.7.7-1.4z" fill="url(#gGold)" />
      <Sparkles />
    </IconShell>
  )
}

export function IconTarot({ size = 32 }: IconProps) {
  return (
    <IconShell size={size}>
      <rect x="9" y="5" width="14" height="21" rx="2.2" fill="url(#gCream)" filter="url(#softShadow)" />
      <rect x="10.5" y="6.5" width="11" height="18" rx="1.4" fill="url(#gDeep)" />
      <path
        d="M16 8.5l1.6 4.2 4.45.15-3.55 2.7 1.28 4.3L16 17.35l-3.78 2.5 1.28-4.3-3.55-2.7 4.45-.15L16 8.5z"
        fill="url(#gGold)"
      />
      <circle cx="16" cy="15" r="2.2" fill="url(#gRose)" opacity="0.68" />
      <path d="M12.4 22.4h7.2" stroke="url(#gGold)" strokeWidth="1.1" strokeLinecap="round" />
    </IconShell>
  )
}

export function IconLotus({ size = 32 }: IconProps) {
  return (
    <IconShell size={size}>
      <path d="M16 25c-4-3.4-5.7-6.8-5-10.4.5-2.8 2.4-5 5-6.4 2.6 1.4 4.5 3.6 5 6.4.7 3.6-1 7-5 10.4z" fill="url(#gRose)" />
      <path d="M16 25c-5.3-1.7-8.5-4.7-9-8.5-.35-2.6.8-5 3.2-6.9 2 1.4 3.4 3.6 3.9 6.2" fill="url(#gPurple)" opacity="0.84" />
      <path d="M16 25c5.3-1.7 8.5-4.7 9-8.5.35-2.6-.8-5-3.2-6.9-2 1.4-3.4 3.6-3.9 6.2" fill="url(#gPurple)" opacity="0.84" />
      <circle cx="16" cy="17" r="2.2" fill="url(#gGold)" />
      <path d="M9 24c3.7 1.4 10.3 1.4 14 0" stroke="url(#gGold)" strokeWidth="1.1" strokeLinecap="round" opacity="0.7" />
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
      <path d="M11 20.5c-1.2-5.8.5-10.7 5-14.3 4.5 3.6 6.2 8.5 5 14.3H11z" fill="url(#gGold)" filter="url(#softShadow)" />
      <path d="M13 20.2c-.65-4 .3-7.5 3-10.2 2.7 2.7 3.65 6.2 3 10.2H13z" fill="url(#gDeep)" opacity="0.86" />
      <circle cx="16" cy="15.7" r="3.3" fill="url(#gGlow)" />
      <circle cx="16" cy="15.7" r="1.8" fill="url(#gCream)" opacity="0.72" />
      <ellipse cx="16" cy="21.2" rx="6.6" ry="2.1" fill="url(#gPurple)" />
    </IconShell>
  )
}

export function IconMeditacion({ size = 32 }: IconProps) {
  return (
    <IconShell size={size}>
      <circle cx="16" cy="8.2" r="3.3" fill="url(#gRose)" />
      <path d="M10.2 23.6c.4-5.9 2.3-9.4 5.8-10.5 3.5 1.1 5.4 4.6 5.8 10.5H10.2z" fill="url(#gPurple)" filter="url(#softShadow)" />
      <path d="M8 20.7c2.4-2.4 5.2-2.6 8-.5 2.8-2.1 5.6-1.9 8 .5" stroke="url(#gGold)" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 25c3.3 1.5 6.7 1.5 10 0" stroke="url(#gCream)" strokeWidth="1" strokeLinecap="round" opacity="0.45" />
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
    variant === 'gold' ? '#D4AF37' : variant === 'rose' ? '#C49AD4' : '#7B4FB5'

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
        <span className="font-sans text-[10px] tracking-widest text-[#C49AD4] uppercase">
          {label}
        </span>
      )}
    </motion.div>
  )
}

export const ElaraIcons = {
  Inicio: { render: (size = 24) => <IllustratedIcon kind="star" size={size} /> },
  Herramientas: { render: (size = 24) => <IllustratedIcon kind="zap" size={size} /> },
  Oraculo: { render: (size = 24) => <IconCrystalBall size={size} /> },
  Recursos: { render: (size = 24) => <IllustratedIcon kind="book" size={size} /> },
  Comunidad: { render: (size = 24) => <IllustratedIcon kind="users" size={size} /> },
  Amazon: { render: (size = 24) => <IllustratedIcon kind="bag" size={size} /> },
  Cursos: { render: (size = 24) => <IllustratedIcon kind="graduation" size={size} /> },
  Atelier: { render: (size = 24) => <IllustratedIcon kind="palette" size={size} /> },
  Buscar: { render: (size = 24) => <IllustratedIcon kind="search" size={size} /> },
  Calendario: { render: (size = 24) => <IllustratedIcon kind="calendar" size={size} /> },
  Favoritos: { render: (size = 24) => <IllustratedIcon kind="heart" size={size} /> },
  Descargar: { render: (size = 24) => <IllustratedIcon kind="download" size={size} /> },
  Correo: { render: (size = 24) => <IllustratedIcon kind="mail" size={size} /> },
  Notificaciones: { render: (size = 24) => <IllustratedIcon kind="bell" size={size} /> },
  Luna: { render: (size = 24) => <IllustratedIcon kind="moon" size={size} /> },
  Estrellas: { render: (size = 24) => <IconEstrella size={size} /> },
  Sol: { render: (size = 24) => <IllustratedIcon kind="sun" size={size} /> },
  Planetas: { render: (size = 24) => <IconPlaneta size={size} /> },
  Eclipse: { render: (size = 24) => <IconEclipse size={size} /> },
  Energia: { render: (size = 24) => <IllustratedIcon kind="zap" size={size} /> },
  Intuicion: { render: (size = 24) => <IllustratedIcon kind="eye" size={size} /> },
  Proteccion: { render: (size = 24) => <IllustratedIcon kind="shield" size={size} /> },
  Corazon: { render: (size = 24) => <IllustratedIcon kind="heart" size={size} /> },
  Florecer: { render: (size = 24) => <IllustratedIcon kind="flower" size={size} /> },
  Guia: { render: (size = 24) => <IllustratedIcon kind="compass" size={size} /> },
  Ebook: { render: (size = 24) => <IllustratedIcon kind="book" size={size} /> },
  Journal: { render: (size = 24) => <IllustratedIcon kind="file" size={size} /> },
  Meditacion: { render: (size = 24) => <IconMeditacion size={size} /> },
  Audio: { render: (size = 24) => <IllustratedIcon kind="headphones" size={size} /> },
  Video: { render: (size = 24) => <IllustratedIcon kind="video" size={size} /> },
  PDF: { render: (size = 24) => <IllustratedIcon kind="file" size={size} /> },
} as const
