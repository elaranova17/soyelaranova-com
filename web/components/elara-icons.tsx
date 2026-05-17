'use client'

import { motion } from 'framer-motion'
import {
  Bell,
  BookOpen,
  Calendar,
  Compass,
  Download,
  Eye,
  FileText,
  Flower2,
  GraduationCap,
  Headphones,
  Heart,
  Mail,
  Moon,
  Palette,
  Search,
  Shield,
  ShoppingBag,
  Star,
  Sun,
  Users,
  Video,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import type { ReactNode } from 'react'

function Defs() {
  return (
    <defs>
      <linearGradient id="gPurple" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#C49AD4" />
        <stop offset="100%" stopColor="#7B4FB5" />
      </linearGradient>
      <linearGradient id="gGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F0D060" />
        <stop offset="100%" stopColor="#D4AF37" />
      </linearGradient>
      <linearGradient id="gRose" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F9A8D4" />
        <stop offset="100%" stopColor="#EC4899" />
      </linearGradient>
      <radialGradient id="gGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
      </radialGradient>
    </defs>
  )
}

export function IconEstrella({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Defs />
      <polygon
        points="16,3 19.5,12.5 29.5,12.5 21.5,18.5 24.5,28 16,22 7.5,28 10.5,18.5 2.5,12.5 12.5,12.5"
        stroke="url(#gGold)"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="16" cy="16" r="3" fill="url(#gGold)" opacity="0.6" />
    </svg>
  )
}

export function IconCrystalBall({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Defs />
      <circle cx="16" cy="14" r="10" stroke="url(#gPurple)" strokeWidth="1.5" />
      <ellipse cx="16" cy="25" rx="5" ry="2" stroke="url(#gPurple)" strokeWidth="1.5" />
      <line x1="11" y1="25" x2="11" y2="23" stroke="url(#gPurple)" strokeWidth="1.5" />
      <line x1="21" y1="25" x2="21" y2="23" stroke="url(#gPurple)" strokeWidth="1.5" />
      <circle cx="13" cy="11" r="2" fill="url(#gGlow)" />
      <path d="M12 9 Q16 6 20 10" stroke="url(#gGold)" strokeWidth="1" opacity="0.5" />
    </svg>
  )
}

export function IconTarot({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Defs />
      <rect x="8" y="3" width="16" height="24" rx="2" stroke="url(#gGold)" strokeWidth="1.5" />
      <rect x="10" y="5" width="12" height="16" rx="1" stroke="url(#gPurple)" strokeWidth="1" />
      <polygon
        points="16,7 17.5,11 22,11 18.5,13.5 19.8,18 16,15.5 12.2,18 13.5,13.5 10,11 14.5,11"
        stroke="url(#gGold)"
        strokeWidth="1"
        fill="none"
      />
      <line x1="10" y1="23" x2="22" y2="23" stroke="url(#gPurple)" strokeWidth="1" />
      <line x1="10" y1="25" x2="18" y2="25" stroke="url(#gPurple)" strokeWidth="1" />
    </svg>
  )
}

export function IconLotus({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Defs />
      <path d="M16 26 Q10 20 10 14 Q10 8 16 6 Q22 8 22 14 Q22 20 16 26Z" stroke="url(#gRose)" strokeWidth="1.5" fill="none" />
      <path d="M16 26 Q6 22 5 15 Q5 9 10 8 Q12 10 12 14" stroke="url(#gPurple)" strokeWidth="1.5" fill="none" />
      <path d="M16 26 Q26 22 27 15 Q27 9 22 8 Q20 10 20 14" stroke="url(#gPurple)" strokeWidth="1.5" fill="none" />
      <circle cx="16" cy="16" r="2" fill="url(#gGold)" />
    </svg>
  )
}

export function IconEclipse({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Defs />
      <circle cx="16" cy="16" r="12" stroke="url(#gPurple)" strokeWidth="1.5" />
      <circle cx="20" cy="16" r="9" stroke="url(#gGold)" strokeWidth="1.5" />
    </svg>
  )
}

export function IconPlaneta({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Defs />
      <circle cx="16" cy="16" r="7" stroke="url(#gPurple)" strokeWidth="1.5" />
      <ellipse cx="16" cy="16" rx="14" ry="5" stroke="url(#gGold)" strokeWidth="1.5" />
    </svg>
  )
}

export function IconLanterna({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Defs />
      <path d="M10 20 Q8 10 16 6 Q24 10 22 20Z" stroke="url(#gGold)" strokeWidth="1.5" fill="none" />
      <ellipse cx="16" cy="20" rx="6" ry="2" stroke="url(#gGold)" strokeWidth="1.5" />
      <line x1="16" y1="6" x2="16" y2="3" stroke="url(#gGold)" strokeWidth="1.5" />
      <circle cx="16" cy="13" r="3" fill="url(#gGlow)" />
    </svg>
  )
}

export function IconMeditacion({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Defs />
      <circle cx="16" cy="7" r="3" stroke="url(#gPurple)" strokeWidth="1.5" />
      <path d="M10 24 Q10 16 16 14 Q22 16 22 24" stroke="url(#gPurple)" strokeWidth="1.5" fill="none" />
      <path d="M8 20 Q10 18 13 19" stroke="url(#gGold)" strokeWidth="1.5" fill="none" />
      <path d="M24 20 Q22 18 19 19" stroke="url(#gGold)" strokeWidth="1.5" fill="none" />
      <path d="M13 24 Q16 26 19 24" stroke="url(#gPurple)" strokeWidth="1.5" fill="none" />
    </svg>
  )
}

export function IconPortal({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Defs />
      <ellipse cx="16" cy="16" rx="10" ry="13" stroke="url(#gPurple)" strokeWidth="1.5" />
      <ellipse cx="16" cy="16" rx="6" ry="9" stroke="url(#gGold)" strokeWidth="1.5" />
      <ellipse cx="16" cy="16" rx="2" ry="4" stroke="url(#gRose)" strokeWidth="1" />
    </svg>
  )
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
  const glowColor = variant === 'gold' ? '#D4AF37' : variant === 'rose' ? '#EC4899' : '#7B4FB5'

  return (
    <motion.div
      className="flex cursor-pointer flex-col items-center gap-2"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
    >
      <motion.div
        className="rounded-2xl border border-white/10 bg-[#1A0F3D]/80 p-3"
        whileHover={{
          boxShadow: `0 0 20px ${glowColor}40`,
          borderColor: `${glowColor}60`,
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

function LucideGlyph({
  icon: Icon,
  color = '#C49AD4',
  size = 24,
}: {
  icon: LucideIcon
  color?: string
  size?: number
}) {
  return <Icon size={size} color={color} strokeWidth={1.5} />
}

export const ElaraIcons = {
  Inicio: { render: (size = 24) => <LucideGlyph icon={Star} size={size} color="#D4AF37" /> },
  Herramientas: { render: (size = 24) => <LucideGlyph icon={Zap} size={size} color="#C49AD4" /> },
  Oraculo: { render: (size = 24) => <IconCrystalBall size={size} /> },
  Recursos: { render: (size = 24) => <LucideGlyph icon={BookOpen} size={size} color="#C49AD4" /> },
  Comunidad: { render: (size = 24) => <LucideGlyph icon={Users} size={size} color="#C49AD4" /> },
  Amazon: { render: (size = 24) => <LucideGlyph icon={ShoppingBag} size={size} color="#C49AD4" /> },
  Cursos: { render: (size = 24) => <LucideGlyph icon={GraduationCap} size={size} color="#C49AD4" /> },
  Atelier: { render: (size = 24) => <LucideGlyph icon={Palette} size={size} color="#C49AD4" /> },
  Buscar: { render: (size = 24) => <LucideGlyph icon={Search} size={size} color="#C49AD4" /> },
  Calendario: { render: (size = 24) => <LucideGlyph icon={Calendar} size={size} color="#C49AD4" /> },
  Favoritos: { render: (size = 24) => <LucideGlyph icon={Heart} size={size} color="#EC4899" /> },
  Descargar: { render: (size = 24) => <LucideGlyph icon={Download} size={size} color="#C49AD4" /> },
  Correo: { render: (size = 24) => <LucideGlyph icon={Mail} size={size} color="#D4AF37" /> },
  Notificaciones: { render: (size = 24) => <LucideGlyph icon={Bell} size={size} color="#C49AD4" /> },
  Luna: { render: (size = 24) => <LucideGlyph icon={Moon} size={size} color="#D4AF37" /> },
  Estrellas: { render: (size = 24) => <IconEstrella size={size} /> },
  Sol: { render: (size = 24) => <LucideGlyph icon={Sun} size={size} color="#D4AF37" /> },
  Planetas: { render: (size = 24) => <IconPlaneta size={size} /> },
  Eclipse: { render: (size = 24) => <IconEclipse size={size} /> },
  Energia: { render: (size = 24) => <LucideGlyph icon={Zap} size={size} color="#D4AF37" /> },
  Intuicion: { render: (size = 24) => <LucideGlyph icon={Eye} size={size} color="#C49AD4" /> },
  Proteccion: { render: (size = 24) => <LucideGlyph icon={Shield} size={size} color="#7B4FB5" /> },
  Corazon: { render: (size = 24) => <LucideGlyph icon={Heart} size={size} color="#EC4899" /> },
  Florecer: { render: (size = 24) => <LucideGlyph icon={Flower2} size={size} color="#C49AD4" /> },
  Guia: { render: (size = 24) => <LucideGlyph icon={Compass} size={size} color="#D4AF37" /> },
  Ebook: { render: (size = 24) => <LucideGlyph icon={BookOpen} size={size} color="#D4AF37" /> },
  Journal: { render: (size = 24) => <LucideGlyph icon={FileText} size={size} color="#C49AD4" /> },
  Meditacion: { render: (size = 24) => <IconMeditacion size={size} /> },
  Audio: { render: (size = 24) => <LucideGlyph icon={Headphones} size={size} color="#C49AD4" /> },
  Video: { render: (size = 24) => <LucideGlyph icon={Video} size={size} color="#C49AD4" /> },
  PDF: { render: (size = 24) => <LucideGlyph icon={FileText} size={size} color="#D4AF37" /> },
} as const
