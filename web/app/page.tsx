'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, type FormEvent } from 'react'
import { ElaraIcons, IconCard } from '@/components/elara-icons'

type IconKey = keyof typeof ElaraIcons

type ToolCard = {
  img: string
  variant: 'herramienta' | 'oraculo' | 'recurso'
  icon: 'planet' | 'cards' | 'journal' | 'moon' | 'energy' | 'compass'
  title: string
  text: string
  cta: string
}

type CircleBenefit = {
  icon: IconKey
  label: string
}

type CircleStep = {
  icon: IconKey
  title: string
  text: string
}

type HeroTrustBadge = {
  icon: IconKey
  label: string
  text: string
}

type ProductCard = {
  img: string
  title: string
  text: string
  href?: string
  target?: string
  rel?: string
}

type CreationStep = {
  icon: IconKey
  title: string
  text: string
}

type ServiceTrustItem = {
  icon: IconKey
  label: string
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      delay: index * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
}

const herramientas: readonly ToolCard[] = [
  {
    img: '/images/herramienta-astrologia.png',
    variant: 'herramienta',
    icon: 'planet',
    title: 'Carta Natal',
    text: 'Conoce tu mapa energético y tu propósito de vida.',
    cta: 'Explorar →',
  },
  {
    img: '/images/herramienta-oraculo.png',
    variant: 'oraculo',
    icon: 'cards',
    title: 'Lectura de Oráculo',
    text: 'Recibe guía intuitiva para tu momento actual.',
    cta: 'Pedir mensaje →',
  },
  {
    img: '/images/herramienta-calendario-lunar.png',
    variant: 'recurso',
    icon: 'journal',
    title: 'Journal Lunar',
    text: 'Conecta contigo cada día y escribe tu magia.',
    cta: 'Ver recurso →',
  },
  {
    img: '/images/herramienta-ciclos-lunares.png',
    variant: 'herramienta',
    icon: 'moon',
    title: 'Ciclos Lunares',
    text: 'Sincronizate con la luna para planificar, soltar y florecer cada mes.',
    cta: 'Explorar →',
  },
  {
    img: '/images/herramienta-chakras.png',
    variant: 'oraculo',
    icon: 'energy',
    title: 'Energía & Chakras',
    text: 'Aprendé a leer y equilibrar tu campo energético con herramientas simples.',
    cta: 'Pedir mensaje →',
  },
  {
    img: '/images/herramienta-proposito.png',
    variant: 'recurso',
    icon: 'compass',
    title: 'Tu Propósito',
    text: 'Claridad sobre quién sos, qué querés crear y cómo servir desde el alma.',
    cta: 'Ver recurso →',
  },
] as const

const circuloBenefits: readonly CircleBenefit[] = [
  { icon: 'Comunidad', label: 'Encuentros en vivo' },
  { icon: 'Luna', label: 'Rituales lunares grupales' },
  { icon: 'Ebook', label: 'Recursos exclusivos' },
  { icon: 'Corazon', label: 'Contención real' },
] as const

const circleSteps: readonly CircleStep[] = [
  {
    icon: 'Comunidad',
    title: 'Encontrarte',
    text: 'Entrás a un espacio íntimo con mujeres en tu misma búsqueda.',
  },
  {
    icon: 'Ebook',
    title: 'Aprender',
    text: 'Recibís guías, clases y recursos para profundizar sin prisa.',
  },
  {
    icon: 'Luna',
    title: 'Rituales',
    text: 'Nos reunimos alrededor de ciclos lunares, intención y cuidado.',
  },
  {
    icon: 'Florecer',
    title: 'Crecer',
    text: 'Integrás lo aprendido en tu vida real, paso a paso.',
  },
] as const

const heroTrustBadges: readonly HeroTrustBadge[] = [
  {
    icon: 'Florecer',
    label: 'Hecho con intención',
    text: 'Cada pieza nace con cuidado.',
  },
  {
    icon: 'Proteccion',
    label: 'Materiales conscientes',
    text: 'Recursos suaves para tu proceso.',
  },
  {
    icon: 'Corazon',
    label: 'Energía que acompaña',
    text: 'Rituales para sostenerte.',
  },
] as const

const products: readonly ProductCard[] = [
  {
    img: '/images/curso-astrologia.jpg',
    title: 'Astrología esencial',
    text: 'Aprende a leer tu mapa natal y reconocer tus patrones internos.',
  },
  {
    img: '/images/curso-ciclos.jpg',
    title: 'Ciclo Nova del Regreso',
    text: 'Ebook de retorno personal para sostener tu proceso con rituales suaves.',
    href: 'https://pay.hotmart.com/REPLACE_WITH_REAL_HOTMART_PRODUCT_ID',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    img: '/images/oraculo-maestra.png',
    title: 'Oráculo intuitivo',
    text: 'Un recorrido suave para escuchar el símbolo y tu voz interior.',
  },
  {
    img: '/images/producto-kit-rituales.jpg',
    title: 'Kit de rituales',
    text: 'Piezas y prácticas para crear espacios de intención en casa.',
  },
  {
    img: '/images/producto-planificador-lunar.jpg',
    title: 'Planificador lunar',
    text: 'Organiza tu mes con fases, energía disponible y pequeñas acciones.',
    href: 'https://soyelaranova.ck.page/REPLACE_WITH_REAL_CONVERTKIT_FORM',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
] as const

const creationSteps: readonly CreationStep[] = [
  {
    icon: 'Estrellas',
    title: 'Inspiración',
    text: 'Escuchamos la señal y abrimos la intención.',
  },
  {
    icon: 'Atelier',
    title: 'Diseño',
    text: 'Damos forma visual a la energía del ritual.',
  },
  {
    icon: 'Guia',
    title: 'Elaboración',
    text: 'Creamos cada pieza con detalle y propósito.',
  },
  {
    icon: 'Proteccion',
    title: 'Preparación',
    text: 'Cuidamos el empaque, la guía y el momento.',
  },
  {
    icon: 'Corazon',
    title: 'Llega a ti',
    text: 'Recibís una experiencia lista para acompañarte.',
  },
] as const

const serviceTrustItems: readonly ServiceTrustItem[] = [
  { icon: 'Descargar', label: 'Envíos conscientes' },
  { icon: 'Proteccion', label: 'Pago seguro' },
  { icon: 'Comunidad', label: 'Atención personalizada' },
  { icon: 'Corazon', label: 'Devoluciones con amor' },
] as const

const buttonStyles = {
  primary:
    'inline-flex items-center gap-2 rounded-full bg-[#D4AF37] px-6 py-3 text-[11px] font-bold tracking-[0.3em] text-[#0E0726] uppercase hover:bg-[#E5C145]',
  secondary:
    'inline-flex items-center rounded-full bg-[#7B4FB5] px-6 py-3 text-[11px] font-semibold tracking-[0.3em] text-[#F5EEF8] uppercase hover:bg-[#8B5FC5]',
  tertiary:
    'inline-flex items-center rounded-full border border-[#7B4FB5]/50 px-6 py-3 text-[11px] tracking-[0.3em] text-[#C49AD4] uppercase hover:border-[#7B4FB5] hover:text-[#F5EEF8]',
} as const

const toolCardStyles = {
  herramienta: {
    label: 'Herramienta',
    card: 'border-[#7B4FB5]/20 bg-[#1A0F3D]',
    labelText: 'text-[#D4AF37]/50',
    title: 'text-[#F5EEF8]',
    description: 'text-[#C49AD4]/60',
    cta: 'border-white/10 text-[#F5EEF8]/70 hover:text-[#D4AF37]',
  },
  oraculo: {
    label: 'Oráculo',
    card: 'border-[#D4AF37]/30 bg-[#F5EEF8]',
    labelText: 'text-[#7B4FB5]/60',
    title: 'text-[#1A0F3D]',
    description: 'text-[#2D1870]/60',
    cta: 'border-[#1A0F3D]/15 text-[#1A0F3D]/70 hover:text-[#7B4FB5]',
  },
  recurso: {
    label: 'Recurso',
    card: 'border-[#7B4FB5]/30 bg-[#2D1870]',
    labelText: 'text-[#C49AD4]/60',
    title: 'text-[#F5EEF8]',
    description: 'text-[#C49AD4]/70',
    cta: 'border-[#D4AF37]/20 text-[#D4AF37]/70 hover:text-[#D4AF37]',
  },
} satisfies Record<
  ToolCard['variant'],
  {
    label: string
    card: string
    labelText: string
    title: string
    description: string
    cta: string
  }
>

function LogoBrand({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const elaraSize = size === 'md' ? 'text-[1.7rem]' : 'text-[1.35rem]'
  const novaTracking = size === 'md' ? 'tracking-[0.55em]' : 'tracking-[0.45em]'

  return (
    <div className="flex flex-col leading-none" aria-label="Elara Nova">
      <span className={`font-serif-italic italic text-[#D4AF37] ${elaraSize}`}>
        Elara
      </span>
      <div className="mt-1 flex items-center gap-2">
        <span className={`font-serif-italic text-[10px] text-[#D4AF37]/75 uppercase italic ${novaTracking}`}>
          nova
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-[#D4AF37]/80 via-[#D4AF37]/30 to-transparent" />
      </div>
    </div>
  )
}

/* ── NAV LANDING ─────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { href: '#herramientas', label: 'Herramientas' },
  { href: '#circulo',      label: 'Círculo' },
  { href: '#cursos',       label: 'Cursos' },
  { href: '#sobre',        label: 'Sobre mí' },
] as const

function NavLanding() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      {/* ── BAR ─────────────────────────────────────────────────────── */}
      <motion.header
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        className={[
          'fixed inset-x-0 top-0 z-50 flex h-[68px] items-center justify-between px-6 md:px-10 transition-all duration-500',
          scrolled
            ? 'bg-[#0E0726]/93 backdrop-blur-2xl border-b border-[#7B4FB5]/18 shadow-[0_8px_40px_rgba(0,0,0,0.5)]'
            : 'bg-gradient-to-b from-[#0E0726]/65 to-transparent',
        ].join(' ')}
      >
        {/* Logo */}
        <a href="#inicio" aria-label="Elara Nova · Inicio">
          <LogoBrand size="md" />
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación">
          {NAV_LINKS.map(({ href, label }, i) => (
            <a
              key={href}
              href={href}
              className="group relative px-4 py-2 text-[10px] tracking-[0.26em] uppercase text-[#C49AD4]/60 transition-colors duration-200 hover:text-[#D4AF37]"
            >
              {i > 0 && (
                <span aria-hidden className="absolute left-0 top-1/2 -translate-y-1/2 text-[8px] text-[#7B4FB5]/30">✦</span>
              )}
              {label}
              {/* hover underline */}
              <span className="absolute bottom-1 left-4 right-4 h-px origin-left scale-x-0 bg-gradient-to-r from-[#D4AF37]/70 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* CTA — desktop */}
          <motion.a
            href="#email"
            whileHover={{ scale: 1.04, boxShadow: '0 8px 28px rgba(212,175,55,0.35)' }}
            whileTap={{ scale: 0.97 }}
            className="hidden sm:flex items-center gap-2 rounded-full bg-[#D4AF37] px-5 py-2.5 text-[10px] font-bold tracking-[0.28em] text-[#0E0726] uppercase"
          >
            <span aria-hidden className="text-[8px]">✦</span>
            Unirme
          </motion.a>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={open}
            className="flex lg:hidden flex-col items-end gap-[6px] p-2 group"
          >
            <span className="block h-px w-5 bg-[#C49AD4] transition-all duration-300 group-hover:bg-[#D4AF37]" />
            <span className="block h-px w-3.5 bg-[#C49AD4] transition-all duration-300 group-hover:w-5 group-hover:bg-[#D4AF37]" />
          </button>
        </div>
      </motion.header>

      {/* ── FULLSCREEN OVERLAY (mobile) ──────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="nav-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[80] lg:hidden"
          >
            {/* Backdrop */}
            <motion.button
              className="absolute inset-0 h-full w-full cursor-default"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                background: 'rgba(10,0,22,0.92)',
                backdropFilter: 'blur(28px) saturate(160%)',
                WebkitBackdropFilter: 'blur(28px) saturate(160%)',
              }}
            />

            {/* Bloom top */}
            <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[55vh]"
              style={{ background: 'radial-gradient(55% 70% at 50% 0%, rgba(212,175,55,0.14), transparent 70%)' }} />
            {/* Bloom bottom */}
            <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-[40vh]"
              style={{ background: 'radial-gradient(55% 70% at 50% 100%, rgba(123,79,181,0.22), transparent 70%)' }} />

            {/* Polvo dorado */}
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-50"
              style={{
                backgroundImage: `
                  radial-gradient(1.5px 1.5px at 15% 25%, rgba(212,175,55,0.8) 50%, transparent),
                  radial-gradient(1px 1px at 80% 60%, rgba(212,175,55,0.7) 50%, transparent),
                  radial-gradient(1.5px 1.5px at 40% 80%, rgba(212,175,55,0.75) 50%, transparent),
                  radial-gradient(1px 1px at 88% 20%, rgba(212,175,55,0.65) 50%, transparent),
                  radial-gradient(1.5px 1.5px at 25% 65%, rgba(212,175,55,0.8) 50%, transparent),
                  radial-gradient(1px 1px at 60% 15%, rgba(212,175,55,0.6) 50%, transparent),
                  radial-gradient(1px 1px at 92% 88%, rgba(212,175,55,0.7) 50%, transparent),
                  radial-gradient(1.5px 1.5px at 8% 90%, rgba(212,175,55,0.75) 50%, transparent)
                `,
              }} />

            {/* Frame dorado */}
            <div aria-hidden className="pointer-events-none absolute inset-5 rounded-lg border border-[#D4AF37]/20" />

            {/* Logo overlay */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="absolute left-6 top-5"
            >
              <LogoBrand size="md" />
            </motion.div>

            {/* Cerrar X */}
            <motion.button
              initial={{ opacity: 0, rotate: -45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: 45 }}
              transition={{ duration: 0.45, delay: 0.12 }}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.92 }}
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              className="absolute right-6 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#D4AF37]/40"
              style={{ background: 'rgba(26,15,61,0.6)', backdropFilter: 'blur(10px)', color: '#D4AF37' }}
            >
              <svg width={16} height={16} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" aria-hidden>
                <path d="M2 2 L14 14 M14 2 L2 14" />
              </svg>
            </motion.button>

            {/* Links centrados */}
            <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-1 px-8">
              {NAV_LINKS.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 18, transition: { duration: 0.18, delay: (NAV_LINKS.length - 1 - i) * 0.04 } }}
                  transition={{ duration: 0.65, delay: 0.22 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={href}
                    onClick={() => setOpen(false)}
                    className="group relative flex items-baseline gap-5 py-2"
                  >
                    <span className="font-serif-italic italic text-[#D4AF37]/40 text-[11px] tracking-[0.4em] min-w-[28px]">
                      0{i + 1}
                    </span>
                    <span
                      className="font-display italic text-[#F5EEF8] transition-colors duration-200 group-hover:text-[#D4AF37]"
                      style={{ fontSize: 'clamp(32px, 8vw, 52px)', lineHeight: 1.05, fontWeight: 400 }}
                    >
                      {label}
                      <span aria-hidden className="absolute bottom-1.5 left-[52px] right-0 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                        style={{ background: 'linear-gradient(90deg, transparent, #D4AF37, transparent)' }} />
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* CTA bottom */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 18 }}
              transition={{ duration: 0.55, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-12 left-1/2 z-10 -translate-x-1/2"
            >
              <a
                href="#email"
                onClick={() => setOpen(false)}
                className="flex items-center gap-2.5 rounded-full bg-[#D4AF37] px-7 py-3.5 text-[10px] font-bold tracking-[0.3em] text-[#0E0726] uppercase shadow-xl shadow-[#D4AF37]/30"
              >
                <span aria-hidden>✦</span> Unirme al Círculo
              </a>
            </motion.div>

            {/* Firma pie */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 font-serif-italic italic text-[#D4AF37]/50 text-[10px] tracking-[0.18em] whitespace-nowrap"
            >
              Tu alma ya sabe. ✦
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function ToolGlyph({ kind }: { kind: ToolCard['icon'] }) {
  const props = {
    className: 'h-7 w-7',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }

  switch (kind) {
    case 'planet':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="4.5" />
          <ellipse cx="12" cy="12" rx="9" ry="3.2" />
          <circle cx="9.8" cy="10.3" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'cards':
      return (
        <svg {...props}>
          <rect x="7" y="4" width="10" height="15" rx="1.5" />
          <path d="M11 7.5h2M10 16h4" />
          <path d="m12 9 1 2.2 2.2.2-1.7 1.4.5 2.1-2-1.1-2 1.1.5-2.1-1.7-1.4 2.2-.2L12 9z" />
          <path d="M17 7.2 19 8v12H9.5" />
        </svg>
      )
    case 'journal':
      return (
        <svg {...props}>
          <path d="M6 5.5A2.5 2.5 0 0 1 8.5 3H19v18H8.5A2.5 2.5 0 0 1 6 18.5v-13z" />
          <path d="M9 7h6M9 10h5M9 14h7" />
          <path d="M6 18.5A2.5 2.5 0 0 1 8.5 16H19" />
        </svg>
      )
    case 'moon':
      return (
        <svg {...props}>
          <path d="M20 14.3A8 8 0 1 1 9.7 4 9.5 9.5 0 0 0 20 14.3z" />
          <path d="m5 5 1 2 2 .6-2 .8-1 2-1-2-2-.8 2-.6 1-2z" />
        </svg>
      )
    case 'energy':
      return (
        <svg {...props}>
          <path d="M13 2 5 13h6l-1 9 9-12h-6l1-8z" />
          <path d="M4 20c2-1.5 4-1.5 6 0s4 1.5 6 0 3.3-1.4 5 0" />
        </svg>
      )
    case 'compass':
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="m15.5 8.5-2.2 5-4.8 2 2.2-5 4.8-2z" />
          <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
        </svg>
      )
  }
}

function ToolProductCard({
  item,
  index,
}: {
  item: ToolCard
  index: number
}) {
  const styles = toolCardStyles[item.variant]

  return (
    <motion.article
      className={`group relative overflow-hidden rounded-2xl border ${styles.card}`}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
      whileHover={{ y: -4 }}
    >
      <div className="relative h-72 overflow-hidden">
        <Image
          src={item.img}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0726] via-[#0E0726]/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E0726]/20 via-transparent to-transparent" />
        <div className="absolute inset-y-0 -left-1/2 w-1/2 -translate-x-full bg-gradient-to-r from-transparent via-white/7 to-transparent transition-transform duration-1000 group-hover:translate-x-[300%]" />
        <span className={`absolute top-4 right-4 rounded-full border border-white/10 bg-[#0E0726]/70 px-3 py-1 text-[9px] tracking-[0.35em] uppercase backdrop-blur ${styles.labelText}`}>
          {styles.label}
        </span>
        <motion.div
          className="absolute bottom-5 left-5 flex h-[52px] w-[52px] items-center justify-center rounded-2xl border border-[#D4AF37]/50 bg-[#0E0726]/80 text-[#D4AF37] backdrop-blur-md"
          animate={{
            boxShadow: [
              '0 0 0px rgba(212,175,55,0)',
              '0 0 18px rgba(212,175,55,0.35)',
              '0 0 0px rgba(212,175,55,0)',
            ],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.8,
            delay: index * 0.18,
          }}
          whileHover={{ scale: 1.12 }}
        >
          <ToolGlyph kind={item.icon} />
        </motion.div>
      </div>
      <div className="relative z-10 p-6">
        <h3 className={`font-display mt-3 text-2xl ${styles.title}`}>
          {item.title}
        </h3>
        <p className={`font-serif-italic mt-2 text-sm italic ${styles.description}`}>
          {item.text}
        </p>
        <a
          href="#email"
          className={`mt-5 inline-flex items-center gap-2 border-b pb-0.5 text-[10px] tracking-widest uppercase ${styles.cta}`}
        >
          {item.cta}
        </a>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 shadow-[inset_0_0_60px_rgba(212,175,55,0.07),inset_0_0_1px_rgba(212,175,55,0.25)] transition-opacity duration-500 group-hover:opacity-100" />
    </motion.article>
  )
}

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [sent, setSent] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      await fetch('/api/oracle/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email, birthDate }),
        headers: { 'Content-Type': 'application/json' },
      })
    } finally {
      setSent(true)
    }
  }

  return (
    <div className="min-h-screen bg-[#0E0726] text-[#F5EEF8]">
      <NavLanding />

      <section id="inicio" className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-[88px] pb-20">
        <div aria-hidden className="pointer-events-none absolute top-1/4 left-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#7B4FB5]/[0.09] blur-[140px]" />
        <div aria-hidden className="pointer-events-none absolute right-0 bottom-0 h-[500px] w-[500px] translate-x-1/4 rounded-full bg-[#1A0F3D]/60 blur-[100px]" />
        <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.03] blur-[80px]" />

        {[
          { mark: '✦', className: 'top-[18%] left-[12%] text-[8px] text-[#D4AF37]/25', duration: 3.2, delay: 0 },
          { mark: '·', className: 'top-[28%] left-[46%] text-[10px] text-[#D4AF37]/20', duration: 4.4, delay: 0.4 },
          { mark: '✦', className: 'top-[16%] right-[18%] text-[6px] text-[#D4AF37]/30', duration: 5.2, delay: 1.1 },
          { mark: '·', className: 'top-[52%] left-[8%] text-[9px] text-[#D4AF37]/15', duration: 3.8, delay: 1.6 },
          { mark: '✦', className: 'right-[9%] bottom-[28%] text-[10px] text-[#D4AF37]/20', duration: 5.8, delay: 0.8 },
          { mark: '·', className: 'bottom-[18%] left-[34%] text-[8px] text-[#D4AF37]/25', duration: 4.8, delay: 1.3 },
          { mark: '✦', className: 'right-[38%] bottom-[12%] text-[7px] text-[#D4AF37]/30', duration: 3.6, delay: 0.2 },
          { mark: '·', className: 'top-[40%] right-[48%] text-[6px] text-[#D4AF37]/20', duration: 6, delay: 2 },
        ].map((star) => (
          <motion.span
            key={`${star.className}-${star.mark}`}
            aria-hidden
            className={`pointer-events-none absolute ${star.className}`}
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            transition={{ repeat: Infinity, duration: star.duration, delay: star.delay }}
          >
            {star.mark}
          </motion.span>
        ))}

        <div className="mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1fr_460px] lg:gap-24">
          <div className="flex flex-col items-center lg:items-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }}
              className="mb-8 inline-flex items-center gap-2.5 self-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/[0.06] px-4 py-2 lg:self-start"
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              >
                {ElaraIcons.Estrellas.render(11)}
              </motion.span>
              <span className="text-[9px] tracking-[0.42em] text-[#D4AF37]/75 uppercase">
                Tu universo ✦ Tu camino
              </span>
              <span className="hidden h-px w-8 bg-gradient-to-r from-[#D4AF37]/40 to-transparent sm:block" />
            </motion.div>

            <h1 className="font-display mb-6 text-center text-[2.6rem] leading-[1.04] tracking-[-0.022em] text-[#F5EEF8] sm:text-[3.2rem] lg:text-left lg:text-[4.1rem]">
              {[
                { content: 'Tu alma ya sabe.' },
                { content: <em className="font-serif-italic font-light text-[#C49AD4] italic">Vos solo aprendés</em> },
                { content: 'a escucharla.' },
              ].map((line, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.div
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.72, delay: 0.08 + index * 0.12, ease: [0.22, 1, 0.36, 1] as const }}
                  >
                    {line.content}
                  </motion.div>
                </div>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42, ease: [0.22, 1, 0.36, 1] as const }}
              className="font-serif-italic mb-10 max-w-[380px] self-center text-center text-[1.05rem] leading-[1.8] text-[#C49AD4]/60 italic lg:self-start lg:text-left"
            >
              Herramientas de autoconocimiento para mujeres que eligen vivir de adentro hacia afuera.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.56, ease: [0.22, 1, 0.36, 1] as const }}
              className="mb-12 flex w-full flex-col gap-3.5 sm:w-auto sm:flex-row"
            >
              <motion.a
                href="#herramientas"
                whileHover={{ scale: 1.03, boxShadow: '0 12px 40px rgba(123,79,181,0.55)' }}
                whileTap={{ scale: 0.97 }}
                className="group relative flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-[#7B4FB5] px-8 py-4 text-[10px] font-semibold tracking-[0.32em] text-[#F5EEF8] uppercase sm:w-auto"
              >
                <span aria-hidden className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.12] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                Explorar herramientas
              </motion.a>
              <motion.a
                href="#circulo"
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.97 }}
                className="flex w-full items-center justify-center gap-2.5 rounded-2xl border border-[#7B4FB5]/40 px-8 py-4 text-[10px] tracking-[0.32em] text-[#C49AD4] uppercase transition-all duration-300 hover:border-[#D4AF37]/55 hover:bg-[#D4AF37]/[0.04] hover:text-[#D4AF37] sm:w-auto"
              >
                Entrar al Círculo
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mb-12 flex flex-wrap items-center justify-center gap-4 self-center text-[9px] tracking-[0.25em] text-[#C49AD4]/35 uppercase lg:self-start lg:justify-start"
            >
              {['✦ Rituales compartidos', '✦ Ciclos lunares', '✦ Comunidad viva'].map((item, index) => (
                <span key={item} className="contents">
                  {index > 0 ? <span className="text-[#7B4FB5]/30">·</span> : null}
                  <span>{item}</span>
                </span>
              ))}
            </motion.div>

            <div className="flex flex-wrap justify-center gap-2 lg:justify-start">
              {['✦ Astrología', '✦ Oráculo', '✦ Rituales', '✦ Ciclos lunares', '✦ Autoconocimiento'].map((label, index) => (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, scale: 0.8, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.85 + index * 0.08 }}
                >
                  <motion.span
                    animate={{ y: [0, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 3 + index * 0.5, delay: index * 0.35, ease: 'easeInOut' }}
                    className="inline-block cursor-default rounded-full border border-[#D4AF37]/25 bg-[#D4AF37]/[0.07] px-3.5 py-1.5 text-[10px] tracking-[0.22em] text-[#D4AF37]/65 uppercase"
                  >
                    {label}
                  </motion.span>
                </motion.span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[320px] justify-center lg:max-w-none lg:justify-end">
            <div className="relative w-full max-w-[460px]">
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -inset-8 rounded-[50%] bg-[#7B4FB5]/20 blur-[90px]"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div aria-hidden className="pointer-events-none absolute inset-4 rounded-full bg-[#D4AF37]/[0.04] blur-[50px]" />

              <motion.div
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.3, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                className="group relative overflow-hidden rounded-[1.75rem] shadow-2xl shadow-[#0E0726]/90"
              >
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src="/images/hero-elara-noche.png"
                    alt="Elara Nova — autoconocimiento para mujeres"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 460px"
                    className="object-cover object-top transition-transform duration-[2000ms] group-hover:scale-[1.04]"
                  />
                </div>
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0E0726]/65 via-[#0E0726]/15 to-transparent" />
                <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0E0726]/25 via-transparent to-transparent" />
                <div aria-hidden className="pointer-events-none absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-[#7B4FB5]/15 to-transparent" />
              </motion.div>

              <motion.div
                className="absolute -bottom-3 -left-4 sm:-left-8"
                initial={{ opacity: 0, x: -16, y: 16 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6, ease: 'easeOut' }}
              >
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut' }}
                  className="whitespace-nowrap rounded-full bg-gradient-to-r from-[#D4AF37] to-[#E5C14A] px-5 py-2.5 text-[9px] font-bold tracking-[0.28em] text-[#0E0726] uppercase shadow-xl shadow-[#D4AF37]/35"
                >
                  Tu magia. Tu camino. ✦
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute -top-4 -right-4 sm:-right-8"
                initial={{ opacity: 0, x: 16, y: -16 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1, duration: 0.6, ease: 'easeOut' }}
              >
                <motion.div
                  animate={{ y: [0, 7, 0] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
                  className="flex h-[60px] w-[60px] flex-col items-center justify-center gap-1 rounded-2xl border border-[#7B4FB5]/35 bg-[#1A0F3D]/95 shadow-2xl shadow-[#0E0726]/60 backdrop-blur-md"
                >
                  {ElaraIcons.Meditacion.render(26)}
                  <span className="text-[6px] tracking-widest text-[#D4AF37]/55 uppercase">Rituales</span>
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute top-1/3 -left-3 sm:-left-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.15, duration: 0.6 }}
              >
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className="flex items-center gap-2 rounded-xl border border-[#D4AF37]/20 bg-[#0E0726]/90 px-3 py-2 shadow-lg shadow-[#0E0726]/40 backdrop-blur-md"
                >
                  {ElaraIcons.Luna.render(14)}
                  <span className="whitespace-nowrap text-[7px] tracking-[0.3em] text-[#D4AF37]/65 uppercase">
                    Luna llena
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        <motion.a
          href="#herramientas"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="group absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[#C49AD4]/25 transition-colors duration-300 hover:text-[#C49AD4]/60"
          aria-label="Explorar herramientas"
        >
          <span className="text-[8px] tracking-[0.4em] uppercase">Explorar</span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.a>
      </section>

      <section id="herramientas" className="section-fade-edge-top mx-auto max-w-6xl px-6 py-24">
        <div className="mb-10 flex items-center justify-between gap-6">
          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase"
          >
            ✦ Nuestras herramientas
          </motion.p>
          <a
            href="#productos"
            className="text-[10px] tracking-widest text-[#D4AF37] uppercase hover:text-[#F0D070]"
          >
            Ver todas →
          </a>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {herramientas.map((item, index) => (
            <ToolProductCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </section>

      <section id="circulo" className="section-fade-edge section-fade-edge-top bg-[#1A0F3D]/50 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-14 text-center"
          >
            <p className="mb-4 text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase">
              ✦ El Círculo
            </p>
            <h2 className="font-display text-4xl text-[#F5EEF8] xl:text-5xl">
              No caminás sola
            </h2>
            <p className="font-serif-italic mx-auto mt-4 max-w-xl text-xl text-[#C49AD4]">
              Un espacio donde mujeres como vos se encuentran, estudian y crecen
              juntas.
            </p>
          </motion.div>

          <div className="mb-20 grid gap-6 md:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 overflow-hidden rounded-3xl md:col-span-2 md:row-span-2 md:h-full"
            >
              <Image src="/images/circulo-juntas.png" alt="Crecemos juntas" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F3D]/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-serif-italic text-2xl text-[#F5EEF8]">
                  &quot;Crecemos juntas, brillamos siempre&quot;
                </p>
              </div>
            </motion.div>
            {[
              { src: '/images/circulo-ritual-lunar.png', alt: 'Ritual lunar grupal' },
              { src: '/images/circulo-oraculo.png', alt: 'Juntas somos magia' },
            ].map((img, index) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative h-44 overflow-hidden rounded-2xl md:col-span-2"
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F3D]/45 to-transparent" />
              </motion.div>
            ))}
          </div>

          <div className="mb-16">
            <p className="mb-10 text-center text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase">
              Así funciona el Círculo
            </p>
            <div className="relative grid gap-8 md:grid-cols-4">
              <div
                className="pointer-events-none absolute top-10 right-[12%] left-[12%] hidden border-t border-dashed border-[#D4AF37]/40 md:block"
                aria-hidden
              />
              {circleSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  custom={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  <div className="rounded-3xl border border-[#D4AF37]/25 bg-[#0E0726] p-3 shadow-[0_0_30px_rgba(212,175,55,0.10)]">
                    {ElaraIcons[step.icon].render(36)}
                  </div>
                  <h3 className="font-display mt-5 text-xl text-[#F5EEF8]">
                    {step.title}
                  </h3>
                  <p className="font-serif-italic mt-2 max-w-[14rem] text-sm leading-relaxed text-[#C49AD4]/75">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-2xl border border-[#D4AF37]/35 bg-[#1A0F3D] p-8"
            >
              <span className="text-[9px] tracking-[0.35em] text-[#D4AF37]/60 uppercase">
                Ediciones especiales
              </span>
              <h3 className="font-display mt-3 text-3xl text-[#F5EEF8]">
                Rituales, guías y encuentros de temporada.
              </h3>
              <p className="font-serif-italic mt-4 text-[#C49AD4]/75">
                Cada luna trae una puerta. En el Círculo recibís piezas creadas
                para acompañar tu momento, no para llenarte de ruido.
              </p>
              <a
                href="#productos"
                className={`mt-6 ${buttonStyles.tertiary}`}
              >
                Ver ediciones →
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-2xl border border-[#7B4FB5]/40 bg-[#2D1870] p-8"
            >
              <span className="text-[9px] tracking-[0.35em] text-[#C49AD4]/70 uppercase">
                Únete al Círculo
              </span>
              <h3 className="font-display mt-3 text-3xl text-[#F5EEF8]">
                Entrá por la puerta suave.
              </h3>
              <p className="font-serif-italic mt-4 text-[#C49AD4]/75">
                Dejame tu correo y te envío la próxima invitación.
              </p>
              <form
                onSubmit={(event) => event.preventDefault()}
                className="mt-6 flex flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="font-serif-italic min-w-0 flex-1 rounded-full border border-[#D4AF37]/25 bg-[#1A0F3D]/70 px-5 py-3 text-[#F5EEF8] placeholder:text-[#C49AD4]/50 focus:border-[#D4AF37]/70 focus:outline-none"
                />
                <button
                  type="submit"
                  className={buttonStyles.primary}
                >
                  Unirme <span>✦</span>
                </button>
              </form>
            </motion.div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
            {circuloBenefits.map((benefit, index) => (
              <motion.div
                key={benefit.label}
                custom={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col items-center gap-3 text-center"
              >
                <IconCard icon={ElaraIcons[benefit.icon].render(28)} size="md" />
                <span className="text-[11px] tracking-widest text-[#C49AD4] uppercase">
                  {benefit.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="productos" className="section-fade-edge-top mx-auto max-w-6xl px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase">
            ✦ Productos
          </p>
          <h2 className="font-display text-4xl text-[#F5EEF8] xl:text-5xl">
            Lo que Elara creó para vos
          </h2>
        </motion.div>
        <div className="-mx-6 flex snap-x gap-5 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-5 md:overflow-visible md:px-0 md:pb-0">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="w-[76vw] shrink-0 snap-start md:w-auto"
            >
              <div className="relative h-64 overflow-hidden rounded-2xl border border-[#D4AF37]/15 bg-[#1A0F3D]">
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F3D]/35 to-transparent" />
              </div>
              <div className="pt-5">
                <h3 className="font-display text-2xl text-[#F5EEF8]">
                  {product.title}
                </h3>
                <p className="font-serif-italic mt-2 text-sm leading-relaxed text-[#C49AD4]/75">
                  {product.text}
                </p>
                <a
                  href={product.href ?? '#email'}
                  target={product.target}
                  rel={product.rel}
                  className="mt-4 inline-flex border-b border-[#D4AF37]/30 pb-0.5 text-[10px] tracking-widest text-[#D4AF37] uppercase hover:border-[#D4AF37]"
                >
                  Ver más →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-fade-edge-top mx-auto max-w-6xl px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase">
            ✦ Proceso del Atelier
          </p>
          <h2 className="font-display text-4xl text-[#F5EEF8] xl:text-5xl">
            De la inspiración a tus manos
          </h2>
        </motion.div>

        <div className="relative grid gap-10 md:grid-cols-5 md:gap-6">
          <div
            className="pointer-events-none absolute top-10 right-[8%] left-[8%] hidden h-px bg-[#D4AF37]/30 md:block"
            aria-hidden
          />
          {creationSteps.map((step, index) => (
            <motion.div
              key={step.title}
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative z-10 flex flex-col items-center text-center"
            >
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full border border-[#D4AF37] bg-[#2D1870] shadow-[0_0_30px_rgba(212,175,55,0.12)]">
                {ElaraIcons[step.icon].render(34)}
                <span className="absolute -bottom-2 flex h-6 w-6 items-center justify-center rounded-full border border-[#D4AF37]/60 bg-[#1A0F3D] text-[10px] font-semibold text-[#D4AF37]">
                  {index + 1}
                </span>
              </div>
              <h3 className="font-display mt-7 text-xl text-[#F5EEF8]">
                {step.title}
              </h3>
              <p className="font-serif-italic mt-2 max-w-[11rem] text-sm leading-relaxed text-[#C49AD4]/75">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-[#D4AF37]/10 pt-10 md:grid-cols-4">
          {serviceTrustItems.map((item) => (
            <div key={item.label} className="flex flex-col items-center gap-3 text-center">
              <div className="opacity-55">{ElaraIcons[item.icon].render(24)}</div>
              <p className="text-[10px] leading-snug tracking-widest text-[#C49AD4]/40 uppercase">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-fade-edge section-fade-edge-top bg-[#1A0F3D]/50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-80 overflow-hidden rounded-2xl"
            >
              <Image src="/images/elara-escribiendo.jpg" alt="Elara escribiendo" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-col gap-5"
            >
              <p className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase">
                ✦ Quién soy
              </p>
              <h2 className="font-display text-4xl text-[#F5EEF8]">Hola, soy Elara</h2>
              <p className="font-serif-italic text-xl leading-relaxed text-[#C49AD4]">
                Empecé a estudiar astrología buscando entenderme a mí misma. Hoy
                acompaño a mujeres que sienten que hay algo más, algo más profundo
                esperándolas adentro.
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {['Autoconocimiento', 'Ciclos', 'Magia cotidiana'].map((value) => (
                  <span
                    key={value}
                    className="rounded-full border border-[#D4AF37]/30 px-3 py-1.5 text-[10px] tracking-widest text-[#D4AF37] uppercase"
                  >
                    ✦ {value}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="email" className="section-fade-edge-top bg-gradient-to-b from-[#1A0F3D] to-[#0E0726] py-24">
        <div className="mx-auto max-w-xl px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex flex-col items-center gap-6"
          >
            <div className="mb-2">{ElaraIcons.Correo.render(48)}</div>
            <p className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase">
              ✦ Newsletter
            </p>
            <h2 className="font-display text-4xl text-[#F5EEF8]">
              Recibí magia en tu bandeja
            </h2>
            <p className="font-serif-italic text-xl text-[#C49AD4]">
              Guía lunar mensual + rituales + novedades. Solo para el Círculo íntimo.
            </p>
            {sent ? (
              <p className="font-serif-italic text-2xl text-[#D4AF37]">
                ✦ ¡Bienvenida al Círculo!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="font-serif-italic flex-1 rounded-full border border-[#D4AF37]/30 bg-[#1A0F3D] px-5 py-3 text-lg text-[#F5EEF8] placeholder:text-[#C49AD4]/50 focus:border-[#D4AF37]/70 focus:outline-none"
                />
                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(event) => setBirthDate(event.target.value)}
                    required
                    className="font-serif-italic flex-1 rounded-full border border-[#D4AF37]/30 bg-[#1A0F3D] px-5 py-3 text-lg text-[#F5EEF8] placeholder:text-[#C49AD4]/50 focus:border-[#D4AF37]/70 focus:outline-none"
                    aria-label="Fecha de nacimiento"
                  />
                  <button
                    type="submit"
                    className={`whitespace-nowrap ${buttonStyles.primary}`}
                  >
                    Quiero recibirlos <span>✦</span>
                  </button>
                </div>
              </form>
            )}
            <p className="text-[10px] tracking-widest text-[#C49AD4]/50 uppercase">
              Sin spam. Podés salir cuando quieras. ✦
            </p>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div className="flex flex-col items-center">
            <LogoBrand size="sm" />
            <div className="mt-4 flex items-center gap-4">
              <motion.a
                href="https://instagram.com/soyelaranova"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Elara Nova"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.93 }}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#7B4FB5]/25 text-[#C49AD4]/50 transition-all duration-300 hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                </svg>
              </motion.a>
              <motion.a
                href="https://tiktok.com/@soyelaranova"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok de Elara Nova"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.93 }}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#7B4FB5]/25 text-[#C49AD4]/50 transition-all duration-300 hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M14 3v10.2a4.2 4.2 0 1 1-4.2-4.2" />
                  <path d="M14 5.5c1.2 2.5 3 4 5.5 4.2" />
                </svg>
              </motion.a>
            </div>
          </div>
          <div className="flex gap-8">
            {['Herramientas', 'Círculo', 'Productos', 'Contacto'].map((label) => (
              <a
                key={label}
                href="#"
                className="text-[10px] tracking-widest text-[#C49AD4] uppercase transition-colors hover:text-[#D4AF37]"
              >
                {label}
              </a>
            ))}
          </div>
          <p className="text-[10px] tracking-widest text-[#C49AD4]/40 uppercase">
            © 2026 Elara Nova · Hecho con alma ✦
          </p>
        </div>
      </footer>
    </div>
  )
}
