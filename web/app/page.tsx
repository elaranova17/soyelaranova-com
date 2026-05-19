'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState, type FormEvent } from 'react'
import { ElaraIcons } from '@/components/elara-icons'
import { MagicParticles } from '@/components/magic-particles'

type IconKey = keyof typeof ElaraIcons

type ToolCard = {
  img: string
  variant: 'herramienta' | 'oraculo' | 'recurso'
  icon: IconKey
  title: string
  text: string
  tag: string
}

type CircleBenefit = {
  icon: IconKey
  label: string
  description: string
}

type CircleStep = {
  icon: IconKey
  title: string
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
  description: string
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
    img: '/images/curso-astrologia.png',
    icon: 'Planetas',
    title: 'Carta Natal',
    text: 'Tu mapa al nacer. Ahí están tus dones, tus sombras y el hilo que los conecta.',
    tag: 'Astrología',
    variant: 'herramienta',
  },
  {
    img: '/images/meditacion-lunar.png',
    icon: 'Luna',
    title: 'Ciclos Lunares',
    text: 'La luna no espera. Aprendé a moverte con ella — no contra vos misma.',
    tag: 'Luna',
    variant: 'herramienta',
  },
  {
    img: '/images/herramienta-oraculo.png',
    icon: 'Oraculo',
    title: 'Oráculo & Mensajes',
    text: 'No es adivinación. Es aprender a escucharte a través del símbolo.',
    tag: 'Oráculo',
    variant: 'oraculo',
  },
  {
    img: '/images/herramienta-chakras.png',
    icon: 'Vision',
    title: 'Energía & Chakras',
    text: 'Tu cuerpo habla antes que tu mente. Aprendé a leerlo sin complicarte.',
    tag: 'Energía',
    variant: 'herramienta',
  },
  {
    img: '/images/herramienta-rituales.png',
    icon: 'Estrellas',
    title: 'Rituales de Intención',
    text: 'Un gesto consciente puede cambiar más que mil pensamientos. Empezá simple.',
    tag: 'Rituales',
    variant: 'recurso',
  },
  {
    img: '/images/herramienta-proposito.png',
    icon: 'Guia',
    title: 'Tu Propósito',
    text: 'No es una fórmula. Es la pregunta que vas respondiendo con honestidad.',
    tag: 'Propósito',
    variant: 'recurso',
  },
  {
    img: '/images/herramienta-sinastria.png',
    icon: 'Corazon',
    title: 'Sinastría & Vínculos',
    text: 'Tus relaciones también tienen un mapa. Leerlo es entenderte más a vos.',
    tag: 'Vínculos',
    variant: 'herramienta',
  },
  {
    img: '/images/herramienta-calendario-lunar.png',
    icon: 'Calendario',
    title: 'Calendario Lunar',
    text: 'Cada fase tiene su energía. Seguirla es inteligencia — no casualidad.',
    tag: 'Calendario',
    variant: 'recurso',
  },
  {
    img: '/images/meditacion-cristales.jpg',
    icon: 'Energia',
    title: 'Cristales & Energía',
    text: 'Piezas que sostienen tu proceso. Sin misticismos innecesarios, con intención real.',
    tag: 'Cristales',
    variant: 'recurso',
  },
] as const

const circuloBenefits: readonly CircleBenefit[] = [
  { icon: 'Comunidad', label: 'Vivas cada mes', description: 'Charlas, talleres y círculos de estudio.' },
  { icon: 'Luna', label: 'Rituales de luna llena', description: 'Ceremonias grupales con intención.' },
  { icon: 'Ebook', label: 'Material de estudio', description: 'Contenido exclusivo para profundizar.' },
  { icon: 'Corazon', label: 'Acompañamiento real', description: 'Comunidad y apoyo genuino.' },
] as const

const circleSteps: readonly CircleStep[] = [
  {
    icon: 'Comunidad',
    title: 'Entrás',
    text: 'Un espacio sin filtros, con mujeres en tu misma búsqueda. Sin performar.',
  },
  {
    icon: 'Ebook',
    title: 'Aprendés',
    text: 'Guías, clases y material para profundizar a tu ritmo. Sin presión.',
  },
  {
    icon: 'Luna',
    title: 'Ritualizás',
    text: 'Rituales de luna llena y ciclos lunares. Juntas. Con presencia.',
  },
  {
    icon: 'Florecer',
    title: 'Integrás',
    text: 'Lo llevás a tu vida real. Paso a paso, con acompañamiento de verdad.',
  },
] as const

const circuloImagenes = [
  { src: '/images/circulo-juntas.png',          alt: 'Mujeres del Círculo juntas' },
  { src: '/images/circulo-ritual-lunar.png',    alt: 'Ritual lunar grupal' },
  { src: '/images/circulo-ritual-inclusion.png', alt: 'Ritual de apertura' },
  { src: '/images/circulo-oraculo.png',         alt: 'Lectura colectiva' },
  { src: '/images/circulo-amigas-noche.jpg',    alt: 'Conexión real' },
  { src: '/images/circulo-carta-natal.png',     alt: 'Estudio de carta natal' },
] as const

const cursos = [
  {
    img: '/images/curso-astrologia.png',
    tag: 'Online · A tu ritmo',
    badge: 'DISPONIBLE',
    badgeColor: 'text-[#D4AF37] border-[#D4AF37]/50',
    title: 'Astrología Práctica',
    text: 'Leer tu carta natal no es difícil. Acá aprendés desde cero, con herramientas que te sirven toda la vida.',
    price: '$97 USD',
    cta: 'Explorar curso',
    href: '#email',
  },
  {
    img: '/images/oraculo-maestra.png',
    tag: 'Disponible · Agosto 2026',
    badge: 'PRONTO',
    badgeColor: 'text-[#C49AD4] border-[#C49AD4]/50',
    title: 'Oráculo Intuitivo',
    text: 'No memorizás nada. Aprendés a escuchar el símbolo y tu intuición al mismo tiempo.',
    price: '$77 USD',
    cta: 'Anotarme',
    href: '#email',
  },
  {
    img: '/images/curso-estudiante.jpg',
    tag: 'Programa · En vivo',
    badge: 'EN VIVO',
    badgeColor: 'text-[#F5EEF8] border-[#F5EEF8]/30',
    title: 'Círculo de Estudio',
    text: 'Clases en vivo, preguntas reales, comunidad activa. El grupo te sostiene cuando estudiar sola cansa.',
    price: '$57 USD',
    cta: 'Ver horarios',
    href: '#email',
  },
] as const

const products: readonly ProductCard[] = [
  {
    img: '/images/curso-astrologia.png',
    title: 'Astrología Práctica',
    text: 'El curso para leer tu mapa natal. Desde cero hasta intermedio, a tu ritmo.',
  },
  {
    img: '/images/ciclos-lunares-rituales.png',
    title: 'Ciclo Nova del Regreso',
    text: 'Ebook de retorno personal. Rituales suaves para volver a vos después de lo que sea.',
    href: '#email',
  },
  {
    img: '/images/oraculo-maestra.png',
    title: 'Oráculo Intuitivo',
    text: 'Un método propio para leer el oráculo. Sin memorizar. Con intuición activa.',
  },
  {
    img: '/images/rituales-altar-cristales.jpg',
    title: 'Kit de Rituales',
    text: 'Piezas y prácticas para crear espacios de intención en casa. Con guía incluida.',
  },
  {
    img: '/images/producto-planificador-lunar.jpg',
    title: 'Planificador Lunar',
    text: 'Organizá tu mes con las fases lunares. PDF descargable, imprimible, tuyo.',
    href: '#email',
  },
] as const

const creationSteps: readonly CreationStep[] = [
  {
    icon: 'Estrellas',
    title: 'La señal',
    text: 'Algo llega — una idea, un ciclo, una necesidad. Lo abrimos.',
  },
  {
    icon: 'Atelier',
    title: 'El diseño',
    text: 'Le damos forma. Visual, energética, y con propósito claro.',
  },
  {
    icon: 'Guia',
    title: 'La creación',
    text: 'Cada pieza se hace con detalle. Sin atajos.',
  },
  {
    icon: 'Proteccion',
    title: 'El cuidado',
    text: 'El empaque, la guía, el momento de recibirlo. Todo importa.',
  },
  {
    icon: 'Corazon',
    title: 'Llegó',
    text: 'Una experiencia lista para acompañar tu proceso. En tus manos.',
  },
] as const

const serviceTrustItems: readonly ServiceTrustItem[] = [
  { icon: 'Correo',    label: 'Envíos con cuidado',  description: 'Empaques realizados con intención.' },
  { icon: 'Proteccion', label: 'Compra segura',       description: 'Tus datos y pagos protegidos.' },
  { icon: 'Comunidad', label: 'Atención real',        description: 'Siempre estamos para vos.' },
  { icon: 'Corazon',   label: 'Cambios con respeto',  description: '14 días para devoluciones sin drama.' },
] as const

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
    card: 'border-[#D4AF37]/35 bg-[#1A0A40]',
    labelText: 'text-[#D4AF37]/60',
    title: 'text-[#F5EEF8]',
    description: 'text-[#C49AD4]/70',
    cta: 'border-[#D4AF37]/25 text-[#D4AF37]/75 hover:text-[#D4AF37]',
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

type EmailFeatureItem = { icon: IconKey; label: string; description: string }

const EMAIL_FEATURES: readonly EmailFeatureItem[] = [
  { icon: 'Luna', label: 'Con propósito', description: 'Contenido que te mueve de verdad.' },
  { icon: 'Meditacion', label: 'En tu ciclo', description: 'Recursos alineados con cada fase lunar.' },
  { icon: 'Estrellas', label: 'Solo para el Círculo', description: 'Acceso anticipado a lo que viene.' },
  { icon: 'Comunidad', label: 'Comunidad real', description: 'Mujeres que se sostienen.' },
] as const

const CIRCULO_TRUST = [
  { icon: 'Proteccion' as IconKey, label: 'Espacio seguro', description: 'Un lugar para ser vos misma.' },
  { icon: 'Luna' as IconKey, label: 'Ciclos alineados', description: 'Nos movemos con la energía del mes.' },
  { icon: 'Guia' as IconKey, label: 'Herramientas reales', description: 'Para aplicar en tu día a día.' },
  { icon: 'Comunidad' as IconKey, label: 'Comunidad viva', description: 'Mujeres que se sostienen.' },
] as const

const HERO_FEATURES = [
  {
    icon: 'Oraculo' as IconKey,
    href: '#lecturas-oraculo',
    img: '/hero/tarot-elara-cartas.jpg',
    label: 'Lecturas de oráculo',
    description: 'Hacé tu pregunta. Tu mensaje en 24h.',
  },
  {
    icon: 'Luna' as IconKey,
    href: '#herramientas',
    img: '/hero/portal-lunar-bg.jpg',
    label: 'Calendario lunar',
    description: 'Conectate con la energía de cada fase.',
  },
  {
    icon: 'Comunidad' as IconKey,
    href: '#circulo',
    img: '/hero/circulo-bg.jpg',
    label: 'El Círculo',
    description: 'Comunidad de mujeres que se sostienen.',
  },
  {
    icon: 'Estrellas' as IconKey,
    href: '#herramientas',
    img: '/hero/herramientas-elara-orbe.jpg',
    label: 'Herramientas de alma',
    description: 'Calculá tu carta, leé tus ciclos, entendete.',
  },
  {
    icon: 'Ebook' as IconKey,
    href: '#productos',
    img: '/hero/archivo-astral-bg.jpg',
    label: 'Recursos digitales',
    description: 'Ebooks, journals y planificadores para vos.',
  },
  {
    icon: 'Cursos' as IconKey,
    href: '#cursos',
    img: '/hero/codice-bg.jpg',
    label: 'Cursos',
    description: 'Formaciones para aprender de verdad.',
  },
] as const

function LogoBrand({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const h = size === 'sm' ? 44 : 56
  const w = size === 'sm' ? 110 : 140

  return (
    <div
      aria-label="Elara Nova"
      className="overflow-hidden"
      style={{ width: w, height: h }}
    >
      <Image
        src="/images/logo-elara-nova.png"
        alt="Elara Nova"
        width={w}
        height={w}
        priority
        style={{ mixBlendMode: 'screen', display: 'block' }}
      />
    </div>
  )
}

/* ── NAV LANDING ─────────────────────────────────────────────────────── */
const NAV_LINKS = [
  { href: '#herramientas', label: 'Herramientas', dropdown: true },
  { href: '#circulo',      label: 'Círculo',       dropdown: false },
  { href: '#cursos',       label: 'Cursos',        dropdown: false },
  { href: '#productos',    label: 'Productos',     dropdown: false },
  { href: '#sobre',        label: 'Sobre mí',      dropdown: false },
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
        className="fixed inset-x-0 top-0 z-50 flex h-[72px] items-center justify-between px-6 md:px-10 transition-all duration-500"
        style={{
          background: scrolled
            ? 'rgba(10,6,25,0.92)'
            : 'rgba(10,6,25,0.60)',
          backdropFilter: 'blur(18px) saturate(160%)',
          WebkitBackdropFilter: 'blur(18px) saturate(160%)',
          borderBottom: '1px solid rgba(212,175,55,0.12)',
          boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.45)' : 'none',
        }}
      >
        {/* Logo */}
        <a href="#inicio" aria-label="Elara Nova · Inicio">
          <LogoBrand size="md" />
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegación">
          {NAV_LINKS.map(({ href, label, dropdown }, i) => (
            <span key={href} className="flex items-center">
              {i > 0 && (
                <span aria-hidden className="mx-1 text-[8px] text-[#D4AF37]/25 select-none">+</span>
              )}
              <a
                href={href}
                className="group relative flex items-center gap-1 px-3 py-2 text-[10px] tracking-[0.26em] uppercase text-[#C49AD4]/70 transition-colors duration-200 hover:text-[#D4AF37]"
              >
                {label}
                {dropdown && (
                  <svg aria-hidden width="8" height="5" viewBox="0 0 8 5" fill="none" className="opacity-50 group-hover:opacity-100 transition-opacity">
                    <path d="M1 1l3 3 3-3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
                <span aria-hidden className="absolute bottom-1 left-3 right-3 h-px origin-left scale-x-0 bg-gradient-to-r from-[#D4AF37]/70 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            </span>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* CTA — desktop */}
          <motion.a
            href="#email"
            whileHover={{ scale: 1.03, boxShadow: '0 0 28px rgba(212,175,55,0.30)' }}
            whileTap={{ scale: 0.97 }}
            className="hidden sm:flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/[0.07] px-5 py-2.5 text-[10px] font-semibold tracking-[0.28em] text-[#D4AF37] uppercase backdrop-blur-sm"
            style={{ boxShadow: '0 0 18px rgba(212,175,55,0.12)' }}
          >
            <span aria-hidden className="text-[8px]">✦</span>
            Unirme
          </motion.a>

          {/* Hamburger — visible en todos los breakpoints como en mockup */}
          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={open}
            className="flex flex-col items-center justify-center gap-[5px] rounded-lg p-2.5 transition-colors duration-200 hover:bg-[#D4AF37]/10 group"
          >
            <span className="block h-[1.5px] w-[18px] bg-[#C49AD4]/70 transition-all duration-300 group-hover:bg-[#D4AF37]" />
            <span className="block h-[1.5px] w-[13px] bg-[#C49AD4]/70 transition-all duration-300 group-hover:w-[18px] group-hover:bg-[#D4AF37]" />
            <span className="block h-[1.5px] w-[18px] bg-[#C49AD4]/70 transition-all duration-300 group-hover:bg-[#D4AF37]" />
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

function ToolProductCard({
  item,
  index,
}: {
  item: typeof herramientas[number]
  index: number
}) {
  const styles = toolCardStyles[item.variant]
  return (
    <motion.article
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      whileHover={{ y: -8, transition: { type: 'spring', stiffness: 260, damping: 20 } }}
      className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-[#7B4FB5]/15 transition-all duration-500 hover:border-[#D4AF37]/40 ${styles.card}`}
    >
      {/* Image */}
      <div className="relative h-72 overflow-hidden">
        <Image
          src={item.img}
          alt={item.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        {/* Depth gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0726] via-[#0E0726]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E0726]/20 via-transparent to-transparent" />
        {/* Shimmer sweep */}
        <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.07] to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
        {/* Tag */}
        <span className={`absolute top-3 right-3 rounded-full border border-[#D4AF37]/40 bg-[#0E0726]/75 px-2.5 py-1 text-[9px] tracking-[0.25em] uppercase backdrop-blur-sm ${styles.labelText}`}>
          {item.tag}
        </span>
        {/* Icon overlay — bottom left, pulsing gold glow */}
        <div className="absolute bottom-4 left-4">
          <motion.div
            className="flex h-[60px] w-[60px] items-center justify-center rounded-2xl border border-[#D4AF37]/35 bg-[#0E0726]/85 shadow-2xl backdrop-blur-md"
            animate={{ boxShadow: ['0 0 0px rgba(212,175,55,0)', '0 0 22px rgba(212,175,55,0.4)', '0 0 0px rgba(212,175,55,0)'] }}
            transition={{ repeat: Infinity, duration: 2.8, delay: index * 0.18, ease: 'easeInOut' }}
            whileHover={{ scale: 1.12, transition: { type: 'spring', stiffness: 300 } }}
          >
            {ElaraIcons[item.icon].render(38)}
          </motion.div>
        </div>
      </div>
      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className={`font-display text-[16px] leading-snug tracking-tight ${styles.title}`}>
          {item.title}
        </h3>
        <p className={`font-serif-italic text-sm leading-relaxed italic ${styles.description}`}>
          {item.text}
        </p>
        <div className={`mt-auto flex items-center gap-2 pt-2 text-[10px] tracking-[0.28em] uppercase transition-colors duration-300 group-hover:text-[#D4AF37] ${styles.cta}`}>
          <span>Explorar</span>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      {/* Inner glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{ boxShadow: 'inset 0 0 60px rgba(212,175,55,0.07), inset 0 0 1px rgba(212,175,55,0.25)' }}
      />
    </motion.article>
  )
}

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [sent, setSent] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    try {
      await fetch('/api/oracle/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email, name }),
        headers: { 'Content-Type': 'application/json' },
      })
    } finally {
      setSent(true)
    }
  }

  return (
    <div className="min-h-screen bg-[#0E0726] text-[#F5EEF8]">
      <MagicParticles density="normal" zone="full" />
      <NavLanding />

      <section id="inicio" className="relative overflow-hidden bg-[#0A0010]" style={{ minHeight: '100svh' }}>

        {/* ── IMAGEN PERSONAJE — posicionada a la derecha ───────── */}
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/images/hero-elara-escritorio.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-right"
          />
          {/* Gradiente izquierda: cubre el área de texto, desvanece hacia el personaje */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, #0A0010 0%, #0A0010 38%, rgba(10,0,16,0.80) 52%, rgba(10,0,16,0.30) 70%, rgba(10,0,16,0.08) 100%)' }}
          />
          {/* Degradado superior */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0010]/70 via-transparent to-transparent" />
          {/* Degradado inferior */}
          <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0A0010] to-transparent" />
          {/* Bloom lila detrás del texto */}
          <div className="pointer-events-none absolute top-1/3 left-0 h-[500px] w-[500px] -translate-x-1/3 rounded-full bg-[#6F42C1]/[0.18] blur-[120px]" />
        </div>

        {/* Partículas */}
        <MagicParticles density="high" zone="hero" />

        {/* Estrellas flotantes */}
        {[
          { mark: '✦', top: '20%', left: '8%',  size: '7px',  op: '0.22', dur: 3.2, del: 0 },
          { mark: '·', top: '32%', left: '32%', size: '9px',  op: '0.18', dur: 4.4, del: 0.4 },
          { mark: '✦', top: '14%', left: '52%', size: '5px',  op: '0.15', dur: 5.2, del: 1.1 },
          { mark: '·', top: '55%', left: '6%',  size: '8px',  op: '0.12', dur: 3.8, del: 1.6 },
          { mark: '✦', top: '62%', left: '42%', size: '9px',  op: '0.14', dur: 5.8, del: 0.8 },
        ].map((s) => (
          <motion.span key={s.left + s.top} aria-hidden
            className="pointer-events-none absolute"
            style={{ top: s.top, left: s.left, fontSize: s.size, color: `rgba(212,175,55,${s.op})` }}
            animate={{ opacity: [+s.op * 0.4, +s.op * 1.8, +s.op * 0.4] }}
            transition={{ repeat: Infinity, duration: s.dur, delay: s.del }}
          >{s.mark}</motion.span>
        ))}

        {/* "Tu magia." — texto sobre la imagen (esquina superior derecha) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          aria-hidden
          className="pointer-events-none absolute top-[22%] right-[6%] hidden text-right lg:block"
        >
          {['Tu magia.', 'Tu camino.', 'Tu nueva vida.'].map((line) => (
            <p key={line}
              className="font-serif leading-snug text-[#F5EEF8]/25"
              style={{ fontSize: 'clamp(14px, 1.4vw, 20px)', fontStyle: 'italic', letterSpacing: '0.04em' }}
            >{line}</p>
          ))}
        </motion.div>

        {/* ── CONTENIDO PRINCIPAL ───────────────────────────────── */}
        <div className="relative z-10 flex min-h-[100svh] flex-col pt-[88px]">

          {/* Texto + CTAs — columna izquierda */}
          <div className="flex flex-1 flex-col justify-center px-6 py-16 md:px-14 lg:max-w-[55%] xl:max-w-[48%]">

            {/* Eyebrow pill */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="mb-7 inline-flex items-center gap-2 self-start rounded-full border border-[#D4AF37]/35 bg-[#D4AF37]/[0.07] px-4 py-2"
            >
              <span className="text-[9px] tracking-[0.38em] text-[#D4AF37]/80 uppercase select-none">
                ✦ &nbsp;Lo que siempre pudiste hacer&nbsp; ✦
              </span>
            </motion.div>

            {/* H1 — grande como en el mockup */}
            <h1 className="font-display mb-7 tracking-[-0.02em] text-[#F5EEF8]"
              style={{ fontSize: 'clamp(2.8rem, 5.8vw, 5.2rem)', lineHeight: 1.02 }}
            >
              {[
                { text: 'Tu alma ya sabe.',  em: false },
                { text: 'Vos solo aprendés', em: true  },
                { text: 'a escucharla.',     em: false },
              ].map(({ text, em }, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.div
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.70, delay: 0.06 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {em
                      ? <em className="not-italic" style={{ color: '#B58CFF', fontFamily: 'var(--font-cormorant)', fontStyle: 'italic', fontWeight: 400 }}>{text}</em>
                      : text
                    }
                  </motion.div>
                </div>
              ))}
            </h1>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
              className="mb-10 max-w-[400px] leading-relaxed text-[#C8B6E6]/65"
              style={{ fontSize: 'clamp(1rem, 1.3vw, 1.2rem)', fontStyle: 'italic', fontFamily: 'var(--font-cormorant)' }}
            >
              Herramientas de autoconocimiento para mujeres que eligen vivirse desde adentro.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.58, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-3.5"
            >
              {/* Primario — velvet purple */}
              <motion.a
                href="#herramientas"
                whileHover={{ scale: 1.03, boxShadow: '0 0 44px rgba(111,66,193,0.65)' }}
                whileTap={{ scale: 0.97 }}
                className="group relative flex items-center gap-2.5 overflow-hidden rounded-full px-8 py-[15px] text-[10px] font-bold tracking-[0.28em] text-[#F5EEF8] uppercase"
                style={{ background: 'linear-gradient(135deg,#6F42C1 0%,#9B5FE8 60%,#B58CFF 100%)', boxShadow: '0 0 36px rgba(181,140,255,0.28)' }}
              >
                <span aria-hidden className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span aria-hidden style={{ color: '#F2D578', fontSize: 9 }}>✦</span>
                Descubrí tu camino
              </motion.a>

              {/* Secundario — glass dark */}
              <motion.a
                href="#circulo"
                whileHover={{ scale: 1.02, borderColor: 'rgba(212,175,55,0.50)' }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2.5 rounded-full border border-[#D4AF37]/22 px-8 py-[15px] text-[10px] tracking-[0.28em] text-[#C8B6E6]/80 uppercase transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}
              >
                <svg aria-hidden width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M10.5 8.5A5 5 0 1 1 3.5 1.5a3.5 3.5 0 0 0 7 7z" fill="currentColor" opacity="0.75"/>
                </svg>
                Entrar al Círculo
              </motion.a>
            </motion.div>
          </div>

          {/* ── 6 FEATURE CARDS ───────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="px-4 pb-8 md:px-8"
          >
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
              {HERO_FEATURES.map(({ icon, href, img, label, description }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  custom={i}
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  whileHover={{ y: -7, transition: { type: 'spring', stiffness: 280, damping: 20 } }}
                  className="group relative flex flex-col overflow-hidden rounded-[20px] border border-[#D4AF37]/18 transition-all duration-500 hover:border-[#D4AF37]/45 hover:shadow-[0_0_28px_rgba(212,175,55,0.14)]"
                  style={{ background: 'rgba(14,7,38,0.82)', backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)' }}
                >
                  {/* Imagen */}
                  <div className="relative h-[160px] overflow-hidden">
                    <Image
                      src={img}
                      alt={label}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-106"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0010]/85 via-[#0A0010]/15 to-transparent" />
                    {/* Shimmer */}
                    <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.05] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                    {/* Ícono — top right */}
                    <div
                      className="absolute top-2.5 right-2.5 flex h-[30px] w-[30px] items-center justify-center rounded-full border border-[#D4AF37]/30 transition-all duration-300 group-hover:border-[#D4AF37]/65"
                      style={{ background: 'rgba(10,0,16,0.82)', backdropFilter: 'blur(8px)' }}
                    >
                      {ElaraIcons[icon].render(16)}
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="flex flex-1 flex-col gap-1.5 px-3.5 py-3.5">
                    <p className="text-[9px] font-bold leading-tight tracking-[0.22em] text-[#F5EEF8]/88 uppercase transition-colors duration-300 group-hover:text-[#D4AF37]">
                      {label}
                    </p>
                    <p className="text-[9px] leading-[1.5] text-[#C8B6E6]/50 line-clamp-2">
                      {description}
                    </p>
                    <div className="mt-auto pt-2.5">
                      <span
                        className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full border border-[#D4AF37]/28 text-[10px] text-[#D4AF37]/55 transition-all duration-300 group-hover:border-[#D4AF37]/75 group-hover:text-[#D4AF37] group-hover:shadow-[0_0_12px_rgba(212,175,55,0.38)]"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.5 }}
              className="mt-5 text-center text-[11px] italic tracking-[0.2em] text-[#D4AF37]/38"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              ✦ &nbsp; Este es tu lugar. Volvé siempre a vos. &nbsp; ✦
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section id="herramientas" className="relative overflow-hidden px-6 pb-24 pt-20">
        {/* Degradado entrada */}
        <div aria-hidden className="pointer-events-none absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0E0726] via-[#0E0726]/60 to-transparent" />
        <div aria-hidden className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

        <div className="mx-auto max-w-6xl">
          {/* Section label + title */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16 text-center"
          >
            <p className="mb-4 text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase">✦ Herramientas de alma</p>
            <h2 className="font-display text-[2.8rem] leading-[1.06] tracking-tight text-[#F5EEF8] lg:text-[3.6rem]">
              Lo que siempre pudiste
              <br />
              <em className="font-serif-italic font-light text-[#C49AD4] italic">hacer.</em>
            </h2>
            <p className="font-serif-italic mx-auto mt-5 max-w-lg text-lg leading-relaxed text-[#C49AD4]/60 italic">
              Nueve formas de volverte a encontrar. Sin afán, sin drama. Con precisión.
            </p>
          </motion.div>

          {/* Grid 3 cols */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {herramientas.map((item, index) => (
              <ToolProductCard key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FRANJA VISUAL ────────────────────────────────────────────── */}
      <div className="relative overflow-hidden">
        {/* Degradado suave desde la sección anterior */}
        <div aria-hidden className="pointer-events-none absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#0E0726] to-transparent z-10" />

        {/* Cinematic quote banner */}
        <div className="relative mx-0 h-[500px] overflow-hidden">
          <div className="relative h-full w-full">
            <Image
              src="/images/herramientas-astrales.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
              style={{ objectPosition: 'center 18%' }}
            />
            <div className="absolute inset-0 bg-[#0E0726]/52" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0E0726] via-transparent to-[#0E0726]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0E0726]/40 via-transparent to-[#0E0726]/60" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
          >
            <p className="mb-6 text-[10px] tracking-[0.5em] text-[#D4AF37]/70 uppercase">✦ Elara Nova</p>
            <blockquote className="font-display max-w-3xl text-[2rem] leading-[1.08] tracking-tight text-[#F5EEF8] italic sm:text-[2.8rem] lg:text-[3.4rem]">
              &quot;Rituales de lujo silencioso.
              <br />
              <em className="font-serif-italic font-light text-[#C49AD4] italic">Lo que siempre pudiste hacer.</em>&quot;
            </blockquote>
          </motion.div>
        </div>

        {/* Galería Elara — 5 ilustraciones del personaje */}
        <div className="scrollbar-none mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 lg:grid lg:grid-cols-5 lg:overflow-visible lg:px-6">
          {[
            { src: '/images/elara-durmiendo.png',  alt: 'Elara descansando',   pos: 'object-top'    },
            { src: '/images/elara-meditando.png',  alt: 'Elara meditando',     pos: 'object-top'    },
            { src: '/images/elara-cocinando.png',  alt: 'Elara en la cocina',  pos: 'object-top'    },
            { src: '/images/elara-yoga.png',       alt: 'Elara haciendo yoga', pos: 'object-center' },
            { src: '/images/elara-pintando.png',   alt: 'Elara pintando',      pos: 'object-top'    },
          ].map(({ src, alt, pos }, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.03, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
              className="relative h-[320px] w-[220px] shrink-0 snap-start overflow-hidden rounded-2xl lg:w-auto"
              style={{ boxShadow: '0 8px 32px rgba(14,7,38,0.7)' }}
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 1024px) 220px, 20vw"
                className={`object-cover transition-transform duration-700 hover:scale-105 ${pos}`}
              />
              {/* Velo inferior suave */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0726]/55 via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>

        {/* Degradado suave hacia la sección siguiente */}
        <div aria-hidden className="pointer-events-none absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-[#1A0F3D]/60 to-transparent" />
      </div>

      <section id="circulo" className="relative overflow-hidden py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#1A0F3D]/40" />
        {/* Degradado entrada desde galería */}
        <div aria-hidden className="pointer-events-none absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#1A0F3D]/80 to-transparent" />

        <div className="mx-auto max-w-6xl px-6">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16 text-center"
          >
            <p className="mb-4 text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase">
              ✦ El Círculo
            </p>
            <h2 className="font-display text-[2.8rem] leading-[1.06] tracking-tight text-[#F5EEF8] lg:text-[3.6rem]">
              No caminás sola
            </h2>
            <p className="font-serif-italic mx-auto mt-5 max-w-xl text-xl leading-relaxed text-[#C49AD4]/65 italic">
              Un espacio real. Mujeres que estudian, ritualizan y se sostienen. De verdad.
            </p>
          </motion.div>

          {/* Main layout: big image left + content right */}
          <div className="mb-16 grid items-stretch gap-12 lg:grid-cols-[1fr_480px]">
            {/* Left: stacked image mosaic */}
            <div className="grid h-[520px] grid-cols-2 gap-3">
              {/* Main tall image */}
              <motion.div
                initial={{ opacity: 0, scale: 1.04 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative col-span-1 row-span-2 overflow-hidden rounded-3xl"
              >
                <Image
                  src={circuloImagenes[4].src}
                  alt="Mujeres del Círculo"
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0726]/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5">
                  <span className="text-[9px] font-semibold tracking-[0.3em] text-[#D4AF37] uppercase">
                    ✦ Conexión real
                  </span>
                </div>
              </motion.div>
              {/* 2 small images stacked right */}
              {[
                { ...circuloImagenes[1], label: 'Rituales lunares' },
                { ...circuloImagenes[2], label: 'Intención' },
              ].map(({ src, alt, label }, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                  className="relative overflow-hidden rounded-2xl"
                >
                  <Image src={src} alt={alt} fill sizes="25vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F3D]/70 to-transparent" />
                  <p className="absolute bottom-3 left-3 text-[8px] tracking-[0.25em] text-[#D4AF37]/80 uppercase">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Right: benefits + CTA */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex flex-col justify-center gap-6"
            >
              <div className="grid grid-cols-2 gap-4">
                {circuloBenefits.map(({ icon, label, description }) => (
                  <div
                    key={label}
                    className="flex items-start gap-3 rounded-2xl border border-[#7B4FB5]/20 bg-[#1A0F3D]/60 p-4 backdrop-blur-sm"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#D4AF37]/35 bg-gradient-to-br from-[#2D1870] to-[#1A0F3D] shadow-[0_0_14px_rgba(212,175,55,0.12)]">
                      {ElaraIcons[icon].render(26)}
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.2em] text-[#C49AD4]/80 uppercase">{label}</p>
                      <p className="mt-1 text-[11px] leading-relaxed text-[#C49AD4]/50">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-px bg-gradient-to-r from-[#D4AF37]/20 to-transparent" />
              {circleSteps.map(({ icon, title, text }, i) => (
                <motion.div
                  key={title}
                  custom={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-gradient-to-br from-[#2D1870] to-[#1A0F3D] shadow-[0_0_18px_rgba(212,175,55,0.18)]">
                    {ElaraIcons[icon].render(26)}
                  </div>
                  <div>
                    <p className="font-display text-[15px] text-[#F5EEF8]">{title}</p>
                    <p className="font-serif-italic mt-0.5 text-sm leading-relaxed text-[#C49AD4]/60 italic">
                      {text}
                    </p>
                  </div>
                </motion.div>
              ))}
              <motion.a
                href="#email"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-2 flex items-center gap-2.5 self-start rounded-2xl bg-[#7B4FB5] px-7 py-4 text-[10px] font-semibold tracking-[0.3em] text-[#F5EEF8] uppercase transition-colors hover:bg-[#8B5FC5]"
              >
                Unite al Círculo <span aria-hidden>✦</span>
              </motion.a>
            </motion.div>
          </div>

          {/* Bottom image strip — 3 more circulo images */}
          <div className="grid h-[180px] grid-cols-3 gap-4">
            {[
              circuloImagenes[3],
              { src: '/images/circulo-estudio.png', alt: '' },
              circuloImagenes[5],
            ].map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative overflow-hidden rounded-2xl"
              >
                <Image src={img.src} alt={img.alt} fill sizes="33vw" className="object-cover transition-transform duration-700 hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F3D]/60 to-transparent" />
              </motion.div>
            ))}
          </div>

          {/* Trust bar */}
          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#7B4FB5]/15 pt-8 md:grid-cols-4">
            {CIRCULO_TRUST.map(({ icon, label, description }) => (
              <div key={label} className="flex flex-col items-center gap-3 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-gradient-to-br from-[#2D1870]/80 to-[#1A0F3D] shadow-[0_0_12px_rgba(212,175,55,0.10)]">
                  {ElaraIcons[icon].render(28)}
                </div>
                <p className="text-[9px] font-semibold tracking-[0.22em] text-[#C49AD4]/55 uppercase">{label}</p>
                <p className="text-[11px] leading-relaxed text-[#C49AD4]/38">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cursos" className="relative overflow-hidden px-6 py-24">
        <div aria-hidden className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

        <div className="mx-auto max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16 text-center"
          >
            <p className="mb-4 text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase">✦ Formación</p>
            <h2 className="font-display text-[2.8rem] leading-[1.06] tracking-tight text-[#F5EEF8] lg:text-[3.6rem]">
              Aprender también
              <br />
              <em className="font-serif-italic font-light text-[#C49AD4] italic">es un ritual.</em>
            </h2>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-3">
            {cursos.map(({ img, tag, badge, badgeColor, title, text, price, cta, href }, index) => (
              <motion.article
                key={title}
                custom={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 260, damping: 20 } }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#7B4FB5]/15 bg-[#1A0F3D]/60 backdrop-blur-sm transition-all duration-500 hover:border-[#D4AF37]/35"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={img}
                    alt={title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0726]/80 via-[#0E0726]/20 to-transparent" />
                  {/* Shimmer */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                  {/* Tag + badge */}
                  <div className="absolute top-4 inset-x-4 flex items-start justify-between">
                    <span className="rounded-full border border-[#7B4FB5]/20 bg-[#0E0726]/70 px-2.5 py-1 text-[8px] tracking-[0.3em] text-[#C49AD4]/70 uppercase backdrop-blur-sm">
                      {tag}
                    </span>
                    <span className={`rounded-full border bg-[#0E0726]/70 px-2.5 py-1 text-[8px] tracking-[0.3em] uppercase backdrop-blur-sm ${badgeColor}`}>
                      {badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div>
                    <h3 className="font-display text-xl tracking-tight text-[#F5EEF8]">{title}</h3>
                    <p className="font-serif-italic mt-2 text-sm leading-relaxed text-[#C49AD4]/65 italic">{text}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between border-t border-[#7B4FB5]/10 pt-3">
                    <span className="font-serif-italic text-lg text-[#D4AF37] italic">{price}</span>
                    <a
                      href={href}
                      className="flex items-center gap-2 text-[10px] tracking-[0.28em] text-[#D4AF37]/50 uppercase transition-colors duration-300 group-hover:text-[#D4AF37]"
                    >
                      {cta}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
                {/* Inner glow */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{ boxShadow: 'inset 0 0 60px rgba(212,175,55,0.06), inset 0 0 1px rgba(212,175,55,0.2)' }}
                />
              </motion.article>
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

      <section id="atelier" className="relative overflow-hidden bg-[#0E0726] py-28">
        {/* Decorative atmosphere */}
        <div aria-hidden className="pointer-events-none absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#08051A] to-transparent" />
        <div aria-hidden className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#08051A] to-transparent" />
        <div aria-hidden className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />
        <div aria-hidden className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7B4FB5]/[0.06] blur-[100px]" />
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[400px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.04] blur-[80px]" />

        <div className="mx-auto max-w-6xl px-6">
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
          <h2 className="font-display text-[2.8rem] leading-[1.05] tracking-tight text-[#F5EEF8] lg:text-[3.6rem]">
            De la intención a tus manos
          </h2>
          <p className="font-serif-italic mt-3 text-base text-[#C49AD4]/60 italic">
            Cada pieza que creamos nace de una intención real.
          </p>
        </motion.div>

        <div className="relative grid gap-10 md:grid-cols-5 md:gap-6">
          {/* Connector lines — centered on 112px circles (top-14 = 56px) */}
          <div
            className="pointer-events-none absolute top-14 right-[8%] left-[8%] hidden h-px bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent md:block"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute top-[57px] right-[8%] left-[8%] hidden h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent md:block"
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
              <motion.div
                className="relative flex h-28 w-28 items-center justify-center rounded-full border border-[#D4AF37]/80 bg-gradient-to-br from-[#3D2080] to-[#1A0F3D]"
                animate={{
                  boxShadow: [
                    '0 0 18px rgba(212,175,55,0.15), inset 0 1px 0 rgba(255,255,255,0.08)',
                    '0 0 36px rgba(212,175,55,0.38), inset 0 1px 0 rgba(255,255,255,0.12)',
                    '0 0 18px rgba(212,175,55,0.15), inset 0 1px 0 rgba(255,255,255,0.08)',
                  ],
                }}
                transition={{ duration: 2.8 + index * 0.4, repeat: Infinity, ease: 'easeInOut', delay: index * 0.35 }}
                whileHover={{ scale: 1.08, transition: { type: 'spring', stiffness: 260, damping: 18 } }}
              >
                {ElaraIcons[step.icon].render(48)}
                <span className="absolute -bottom-2.5 flex h-6 w-6 items-center justify-center rounded-full border border-[#D4AF37]/70 bg-[#0E0726] text-[10px] font-bold text-[#D4AF37]">
                  {index + 1}
                </span>
              </motion.div>
              <h3 className="font-display mt-8 text-xl text-[#F5EEF8]">
                {step.title}
              </h3>
              <p className="font-serif-italic mt-2 max-w-[10rem] text-sm leading-relaxed text-[#C49AD4]/70 italic">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 border-t border-[#D4AF37]/15 pt-10 md:grid-cols-4">
          {serviceTrustItems.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -3, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="flex flex-col items-center gap-3 rounded-2xl border border-[#7B4FB5]/20 bg-[#1A0F3D]/50 px-4 py-5 text-center backdrop-blur-sm"
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0 }}
              >
                {ElaraIcons[item.icon].render(32)}
              </motion.div>
              <p className="text-[10px] font-semibold leading-snug tracking-[0.2em] text-[#D4AF37]/75 uppercase">{item.label}</p>
              <p className="text-[11px] leading-relaxed text-[#C49AD4]/55">{item.description}</p>
            </motion.div>
          ))}
        </div>
        </div>
      </section>

      <section id="sobre" className="relative overflow-hidden py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#1A0F3D]/40" />
        {/* Degradado entrada */}
        <div aria-hidden className="pointer-events-none absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#0E0726] to-transparent" />
        {/* Degradado salida hacia email */}
        <div aria-hidden className="pointer-events-none absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#08051A] to-transparent" />
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/4 rounded-full bg-[#7B4FB5]/[0.07] blur-[120px]" />
        <MagicParticles density="low" zone="full" />

        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_500px]">
            {/* Left: content */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="order-2 flex flex-col gap-6 lg:order-1"
            >
              {/* Label con icono */}
              <div className="flex items-center gap-2">
                {ElaraIcons.Estrellas.render(14)}
                <p className="text-[10px] tracking-[0.45em] text-[#D4AF37] uppercase">Quién soy</p>
                {ElaraIcons.Estrellas.render(14)}
              </div>

              <h2 className="font-display text-[2.6rem] leading-[1.06] tracking-tight text-[#F5EEF8] lg:text-[3.4rem]">
                Hola, soy<br />
                <em className="font-serif-italic font-light text-[#C49AD4] italic">Elara Nova.</em>
              </h2>

              <p className="font-serif-italic text-xl leading-[1.75] text-[#C49AD4]/70 italic">
                Empecé estudiando astrología para entenderme a mí misma.
                No porque todo estuviera mal — sino porque sentía que había algo
                más profundo esperando adentro. Y lo había.
              </p>
              <p className="font-serif-italic text-lg leading-[1.75] text-[#C49AD4]/55 italic">
                Todo lo que creé nació de esa pregunta: ¿qué hubiera necesitado
                yo al principio? Eso es lo que encontrás acá. Sin vueltas.
              </p>

              <div className="mt-2 flex flex-wrap gap-2">
                {([
                  { icon: 'Intuicion' as IconKey, label: 'Autoconocimiento' },
                  { icon: 'Luna'      as IconKey, label: 'Ciclos lunares' },
                  { icon: 'Estrellas' as IconKey, label: 'Rituales cotidianos' },
                  { icon: 'Planetas'  as IconKey, label: 'Carta natal' },
                ] as const).map(({ icon, label }) => (
                  <motion.span
                    key={label}
                    whileHover={{ scale: 1.04 }}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/[0.05] px-3.5 py-1.5 text-[10px] tracking-[0.22em] text-[#D4AF37]/75 uppercase"
                  >
                    <span className="opacity-80">{ElaraIcons[icon].render(14)}</span>
                    {label}
                  </motion.span>
                ))}
              </div>

              <motion.a
                href="#email"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-2 flex items-center gap-2.5 self-start rounded-2xl border border-[#D4AF37]/40 px-7 py-3.5 text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase transition-all duration-300 hover:border-[#D4AF37]/70 hover:bg-[#D4AF37]/[0.08]"
              >
                <span className="opacity-70">{ElaraIcons.Guia.render(16)}</span>
                Conocé mi historia <span aria-hidden>→</span>
              </motion.a>
            </motion.div>

            {/* Right: character illustration */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative order-1 lg:order-2"
            >
              {/* Marco exterior con glow */}
              <div
                className="relative h-[580px] overflow-hidden rounded-3xl"
                style={{ boxShadow: '0 0 60px rgba(123,79,181,0.22), 0 40px 80px rgba(14,7,38,0.9)' }}
              >
                <Image
                  src="/images/hero-elara-escritorio.jpg"
                  alt="Elara Nova en su estudio"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                  style={{ objectPosition: 'center 15%' }}
                />
                {/* Gradiente bottom — fusiona con el fondo de página */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0726]/70 via-[#0E0726]/10 to-transparent" />
                {/* Velo izquierdo — funde con el contenido */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A0F3D]/40 via-transparent to-transparent" />

                {/* Quote card — bottom right, flotante */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="absolute right-4 bottom-4 w-56 rounded-2xl border border-[#D4AF37]/28 bg-[#0E0726]/93 p-5 backdrop-blur-md"
                  style={{ boxShadow: '0 0 28px rgba(212,175,55,0.12), 0 20px 40px rgba(14,7,38,0.8)' }}
                >
                  <div className="mb-2.5 flex items-center gap-2">
                    {ElaraIcons.Estrellas.render(16)}
                    <span className="text-[8px] tracking-[0.38em] text-[#D4AF37]/50 uppercase">Elara Nova</span>
                  </div>
                  <p className="font-serif-italic text-[11.5px] leading-relaxed text-[#C49AD4]/82 italic">
                    Mi propósito es recordarte todo lo que siempre fuiste capaz de ser.
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-px flex-1 bg-[#D4AF37]/18" />
                    <span className="text-[9px] text-[#D4AF37]/35">✦</span>
                    <div className="h-px flex-1 bg-[#D4AF37]/18" />
                  </div>
                </motion.div>

                {/* Chip de herramienta — top right */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="absolute top-4 right-4 flex items-center gap-1.5 rounded-full border border-[#7B4FB5]/40 bg-[#0E0726]/75 px-3 py-1.5 backdrop-blur-sm"
                >
                  {ElaraIcons.Luna.render(14)}
                  <span className="text-[8px] tracking-[0.28em] text-[#C49AD4]/65 uppercase">Ciclos · Rituales</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="email" className="relative overflow-hidden bg-[#08051A]">
        {/* Blooms */}
        <div aria-hidden className="pointer-events-none absolute top-0 left-0 h-[500px] w-[500px] -translate-x-1/4 rounded-full bg-[#D4AF37]/[0.05] blur-[100px]" />
        <div aria-hidden className="pointer-events-none absolute right-0 bottom-0 h-[400px] w-[400px] translate-x-1/3 rounded-full bg-[#7B4FB5]/[0.07] blur-[80px]" />

        {/* 2-col grid */}
        <div className="relative grid min-h-[600px] lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_560px]">
          {/* LEFT — form */}
          <div className="relative z-10 flex flex-col justify-center px-8 py-24 md:px-16">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex max-w-md flex-col gap-6"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="self-start"
              >
                {ElaraIcons.Correo.render(40)}
              </motion.div>

              <p className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase">✦ El Círculo íntimo</p>

              <h2 className="font-display text-[2.8rem] leading-[1.05] tracking-tight text-[#F5EEF8] lg:text-[3.4rem]">
                Recibí tu guía
                <br />
                <em className="font-serif-italic font-light text-[#C49AD4] italic">cada luna nueva.</em>
              </h2>

              <p className="font-serif-italic text-lg leading-relaxed text-[#C49AD4]/65 italic">
                Guía lunar mensual · Rituales de intención · Lo nuevo del Círculo.
              </p>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col gap-3"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10">
                    <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden>
                      <path d="M6 14 L11 19 L22 9" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="font-serif-italic text-2xl text-[#D4AF37] italic">✦ ¡Bienvenida al Círculo!</p>
                  <p className="font-serif-italic text-sm text-[#C49AD4]/60 italic">
                    Revisá tu bandeja — llegó tu primera guía.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    className="font-serif-italic w-full rounded-2xl border border-[#D4AF37]/25 bg-[#1A0F3D]/70 px-6 py-4 text-base text-[#F5EEF8] italic backdrop-blur-sm transition-colors placeholder:text-[#C49AD4]/40 focus:border-[#D4AF37]/60 focus:outline-none"
                  />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre (opcional)"
                    className="font-serif-italic w-full rounded-2xl border border-[#D4AF37]/15 bg-[#1A0F3D]/50 px-6 py-4 text-base text-[#F5EEF8] italic backdrop-blur-sm transition-colors placeholder:text-[#C49AD4]/35 focus:border-[#D4AF37]/40 focus:outline-none"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: '0 10px 35px rgba(212,175,55,0.35)' }}
                    whileTap={{ scale: 0.97 }}
                    className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#D4AF37] py-4 text-[10px] font-bold tracking-[0.3em] text-[#0E0726] uppercase"
                  >
                    <span className="opacity-70">{ElaraIcons.Correo.render(16)}</span> Quiero recibirlos
                  </motion.button>
                  <p className="text-center text-[9px] tracking-[0.2em] text-[#C49AD4]/30 uppercase">
                    Sin spam · Podés salir cuando quieras · Solo para el Círculo ✦
                  </p>
                </form>
              )}
            </motion.div>
          </div>

          {/* RIGHT — image */}
          <div className="relative hidden lg:block">
            <Image
              src="/images/circulo-amigas-noche.jpg"
              alt="El Círculo íntimo de Elara Nova"
              fill
              sizes="560px"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08051A] via-[#08051A]/25 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#08051A]/40 via-transparent to-[#08051A]/70" />
          </div>
        </div>

        {/* Bottom features strip */}
        <div className="relative border-t border-[#7B4FB5]/15 px-6 py-10 md:px-16">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
            {EMAIL_FEATURES.map(({ icon, label, description }) => (
              <div key={label} className="flex flex-col items-center gap-3 text-center">
                <div className="opacity-50">{ElaraIcons[icon].render(28)}</div>
                <p className="text-[9px] font-semibold tracking-[0.22em] text-[#C49AD4]/60 uppercase">{label}</p>
                <p className="text-[11px] leading-relaxed text-[#C49AD4]/40">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="relative overflow-hidden border-t border-white/5 bg-[#08051A]">
        {/* Bloom dorado fondo */}
        <div aria-hidden className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#D4AF37]/[0.04] blur-[80px]" />

        <div className="relative mx-auto max-w-6xl px-6 py-16">
          {/* Grid principal 3 columnas */}
          <div className="grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-16">
            {/* Col 1: Sello + tagline */}
            <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
              <div className="relative h-[110px] w-[110px] shrink-0">
                <Image
                  src="/images/sello-elara-nova-oscuro.png"
                  alt="Sello Elara Nova"
                  fill
                  sizes="110px"
                  className="object-contain"
                />
              </div>
              <p className="font-serif-italic text-sm leading-relaxed text-[#C49AD4]/50 italic">
                Inspira · Transforma · Conecta
              </p>
              <div className="flex items-center gap-3 pt-1">
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
                    <rect x="2" y="2" width="20" height="20" rx="5" />
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
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.75a8.27 8.27 0 0 0 4.84 1.55V6.85a4.85 4.85 0 0 1-1.07-.16z" />
                  </svg>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/evelynpatino"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn de Evelyn Patiño"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.93 }}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#7B4FB5]/25 text-[#C49AD4]/50 transition-all duration-300 hover:border-[#D4AF37]/40 hover:text-[#D4AF37]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </motion.a>
              </div>
            </div>

            {/* Col 2: Navegación */}
            <div className="flex flex-col items-center gap-6 md:items-start">
              <p className="text-[9px] font-semibold tracking-[0.35em] text-[#D4AF37]/50 uppercase">Explorar</p>
              <nav className="flex flex-col gap-3" aria-label="Footer nav">
                {[
                  { href: '#herramientas', label: 'Herramientas' },
                  { href: '#circulo', label: 'El Círculo' },
                  { href: '#cursos', label: 'Cursos' },
                  { href: '#productos', label: 'Productos' },
                  { href: '#sobre', label: 'Sobre Elara' },
                ].map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="text-[11px] tracking-[0.15em] text-[#C49AD4]/45 uppercase transition-colors duration-200 hover:text-[#D4AF37]/70"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Col 3: CTA + frase */}
            <div className="flex flex-col items-center gap-5 text-center md:items-start md:text-left">
              <p className="text-[9px] font-semibold tracking-[0.35em] text-[#D4AF37]/50 uppercase">Empezá</p>
              <p className="font-serif-italic text-base leading-relaxed text-[#C49AD4]/55 italic">
                Tu alma ya sabe.<br />
                Solo necesita el espacio para recordar.
              </p>
              <a
                href="#email"
                className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/35 px-6 py-2.5 text-[10px] tracking-[0.28em] text-[#D4AF37]/75 uppercase transition-all duration-300 hover:border-[#D4AF37]/65 hover:bg-[#D4AF37]/[0.06]"
              >
                <span aria-hidden>✦</span> Unite al Círculo
              </a>
            </div>
          </div>

          {/* Bottom: línea + copyright */}
          <div className="mt-14 flex flex-col items-center gap-3 border-t border-white/5 pt-8 md:flex-row md:justify-between">
            <p className="text-[9px] tracking-[0.22em] text-[#C49AD4]/55 uppercase">
              © 2026 Elara Nova
            </p>
            <p className="font-serif-italic text-[10px] text-[#C49AD4]/45 italic">
              Hecho con alma ✦
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
