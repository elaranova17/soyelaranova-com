'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState, type FormEvent } from 'react'
import { ElaraIcons } from '@/components/elara-icons'

type IconKey = keyof typeof ElaraIcons

type ToolCard = {
  img: string
  variant: 'herramienta' | 'oraculo' | 'recurso'
  icon: 'planet' | 'cards' | 'journal' | 'moon' | 'energy' | 'compass'
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
    icon: 'planet',
    title: 'Carta Natal',
    text: 'Tu mapa al nacer. Ahí están tus dones, tus sombras y el hilo que los conecta.',
    tag: 'Astrología',
    variant: 'herramienta',
  },
  {
    img: '/images/ciclos-lunares-rituales.png',
    icon: 'moon',
    title: 'Ciclos Lunares',
    text: 'La luna no espera. Aprendé a moverte con ella — no contra vos misma.',
    tag: 'Luna',
    variant: 'herramienta',
  },
  {
    img: '/images/herramienta-oraculo.png',
    icon: 'cards',
    title: 'Oráculo & Mensajes',
    text: 'No es adivinación. Es aprender a escucharte a través del símbolo.',
    tag: 'Oráculo',
    variant: 'oraculo',
  },
  {
    img: '/images/herramienta-chakras.png',
    icon: 'energy',
    title: 'Energía & Chakras',
    text: 'Tu cuerpo habla antes que tu mente. Aprendé a leerlo sin complicarte.',
    tag: 'Energía',
    variant: 'herramienta',
  },
  {
    img: '/images/herramienta-rituales.png',
    icon: 'compass',
    title: 'Rituales de Intención',
    text: 'Un gesto consciente puede cambiar más que mil pensamientos. Empezá simple.',
    tag: 'Rituales',
    variant: 'recurso',
  },
  {
    img: '/images/herramienta-proposito.png',
    icon: 'journal',
    title: 'Tu Propósito',
    text: 'No es una fórmula. Es la pregunta que vas respondiendo con honestidad.',
    tag: 'Propósito',
    variant: 'recurso',
  },
  {
    img: '/images/herramienta-sinastria.png',
    icon: 'cards',
    title: 'Sinastría & Vínculos',
    text: 'Tus relaciones también tienen un mapa. Leerlo es entenderte más a vos.',
    tag: 'Vínculos',
    variant: 'herramienta',
  },
  {
    img: '/images/herramienta-calendario-lunar.png',
    icon: 'moon',
    title: 'Calendario Lunar',
    text: 'Cada fase tiene su energía. Usarla bien no es magia — es inteligencia.',
    tag: 'Calendario',
    variant: 'recurso',
  },
  {
    img: '/images/meditacion-cristales.jpg',
    icon: 'energy',
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
    href: 'https://pay.hotmart.com/REPLACE_WITH_REAL_HOTMART_PRODUCT_ID',
    target: '_blank',
    rel: 'noopener noreferrer',
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
    href: 'https://soyelaranova.ck.page/REPLACE_WITH_REAL_CONVERTKIT_FORM',
    target: '_blank',
    rel: 'noopener noreferrer',
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
  { icon: 'Descargar', label: 'Envíos con cuidado', description: 'Empaques realizados con intención.' },
  { icon: 'Proteccion', label: 'Compra segura', description: 'Tus datos y pagos protegidos.' },
  { icon: 'Comunidad', label: 'Atención real', description: 'Estamos para acompañarte siempre.' },
  { icon: 'Corazon', label: 'Cambios con respeto', description: '14 días para devoluciones sin drama.' },
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
    icon: 'Estrellas' as IconKey,
    href: '#herramientas',
    label: 'Herramientas de alma',
    description: 'Calculá tu carta, leé tus ciclos, entendete.',
  },
  {
    icon: 'Oraculo' as IconKey,
    href: '#lecturas-oraculo',
    label: 'Lecturas de oráculo',
    description: 'Hacé tu pregunta. Tu mensaje en 24h.',
  },
  {
    icon: 'Luna' as IconKey,
    href: '#herramientas',
    label: 'Calendario lunar',
    description: 'Conectate con la energía de cada fase.',
  },
  {
    icon: 'Ebook' as IconKey,
    href: '#productos',
    label: 'Recursos digitales',
    description: 'Ebooks, journals y planificadores para vos.',
  },
  {
    icon: 'Comunidad' as IconKey,
    href: '#circulo',
    label: 'El Círculo',
    description: 'Comunidad de mujeres que se sostienen.',
  },
  {
    icon: 'Cursos' as IconKey,
    href: '#cursos',
    label: 'Cursos',
    description: 'Formaciones para aprender de verdad.',
  },
] as const

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
  { href: '#circulo',      label: 'Círculo'       },
  { href: '#cursos',       label: 'Cursos'        },
  { href: '#productos',    label: 'Productos'     },
  { href: '#sobre',        label: 'Sobre mí'      },
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
            className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl border border-[#D4AF37]/30 bg-[#0E0726]/80 text-[#D4AF37] shadow-2xl backdrop-blur-md"
            animate={{ boxShadow: ['0 0 0px rgba(212,175,55,0)', '0 0 18px rgba(212,175,55,0.35)', '0 0 0px rgba(212,175,55,0)'] }}
            transition={{ repeat: Infinity, duration: 2.8, delay: index * 0.18, ease: 'easeInOut' }}
            whileHover={{ scale: 1.12, transition: { type: 'spring', stiffness: 300 } }}
          >
            <ToolGlyph kind={item.icon} />
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
      <NavLanding />

      <section id="inicio" className="relative min-h-[100svh] overflow-hidden">
        {/* ── BACKGROUND full-bleed ────────────────────────────── */}
        <div className="absolute inset-0" aria-hidden>
          <Image
            src="/images/hero-elara-escritorio.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Gradient izquierda — contenido legible (escritorio centrado, más cobertura) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E0726] via-[#0E0726]/92 lg:via-[#0E0726]/80 to-[#0E0726]/30" />
          {/* Gradient arriba + abajo */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E0726]/60 via-transparent to-[#0E0726]/92" />
          {/* Bloom izquierda */}
          <div className="pointer-events-none absolute top-1/4 left-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#7B4FB5]/[0.09] blur-[130px]" />
          <div className="pointer-events-none absolute top-1/2 left-1/3 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-[#D4AF37]/[0.03] blur-[80px]" />
        </div>

        {/* ── ESTRELLAS flotantes ───────────────────────────────── */}
        {[
          { mark: '✦', className: 'top-[18%] left-[12%] text-[8px] text-[#D4AF37]/25', duration: 3.2, delay: 0 },
          { mark: '·', className: 'top-[28%] left-[36%] text-[10px] text-[#D4AF37]/20', duration: 4.4, delay: 0.4 },
          { mark: '✦', className: 'top-[16%] left-[55%] text-[6px] text-[#D4AF37]/20', duration: 5.2, delay: 1.1 },
          { mark: '·', className: 'top-[52%] left-[8%] text-[9px] text-[#D4AF37]/15', duration: 3.8, delay: 1.6 },
          { mark: '✦', className: 'left-[45%] bottom-[38%] text-[10px] text-[#D4AF37]/18', duration: 5.8, delay: 0.8 },
          { mark: '·', className: 'bottom-[28%] left-[24%] text-[8px] text-[#D4AF37]/22', duration: 4.8, delay: 1.3 },
        ].map((star) => (
          <motion.span
            key={star.className}
            aria-hidden
            className={`pointer-events-none absolute ${star.className}`}
            animate={{ opacity: [0.2, 0.7, 0.2] }}
            transition={{ repeat: Infinity, duration: star.duration, delay: star.delay }}
          >
            {star.mark}
          </motion.span>
        ))}

        {/* ── CONTENIDO ─────────────────────────────────────────── */}
        <div className="relative z-10 flex min-h-[100svh] flex-col pt-[88px]">
          {/* Área principal — izquierda */}
          <div className="flex flex-1 flex-col justify-center px-8 py-16 md:px-16 lg:max-w-[58%] xl:max-w-[52%]">
            {/* Chip badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 inline-flex items-center gap-2.5 self-start rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/[0.06] px-4 py-2"
            >
              <motion.span
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
              >
                {ElaraIcons.Estrellas.render(11)}
              </motion.span>
              <span className="text-[9px] tracking-[0.42em] text-[#D4AF37]/75 uppercase">
                Lo que siempre pudiste hacer ✦
              </span>
            </motion.div>

            {/* H1 */}
            <h1 className="font-display mb-6 text-[2.6rem] leading-[1.04] tracking-[-0.022em] text-[#F5EEF8] sm:text-[3.2rem] lg:text-[4.1rem]">
              {[
                { content: 'Tu alma ya sabe.' },
                { content: <em key="em" className="font-serif-italic font-light text-[#C49AD4] italic">Vos solo aprendés</em> },
                { content: 'a escucharla.' },
              ].map((line, index) => (
                <div key={index} className="overflow-hidden">
                  <motion.div
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.72, delay: 0.08 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {line.content}
                  </motion.div>
                </div>
              ))}
            </h1>

            {/* Subtítulo */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif-italic mb-10 max-w-[380px] text-[1.05rem] leading-[1.8] text-[#C49AD4]/60 italic"
            >
              Herramientas de autoconocimiento para mujeres que eligen vivirse desde adentro.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.56, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-3.5 sm:flex-row"
            >
              <motion.a
                href="#herramientas"
                whileHover={{ scale: 1.03, boxShadow: '0 12px 40px rgba(123,79,181,0.55)' }}
                whileTap={{ scale: 0.97 }}
                className="group relative flex items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-[#7B4FB5] px-8 py-4 text-[10px] font-semibold tracking-[0.32em] text-[#F5EEF8] uppercase"
              >
                <span aria-hidden className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.12] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                Descubrí tu camino
              </motion.a>
              <motion.a
                href="#circulo"
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2.5 rounded-2xl border border-[#7B4FB5]/40 px-8 py-4 text-[10px] tracking-[0.32em] text-[#C49AD4] uppercase transition-all duration-300 hover:border-[#D4AF37]/55 hover:bg-[#D4AF37]/[0.04] hover:text-[#D4AF37]"
              >
                Entrar al Círculo
              </motion.a>
            </motion.div>
          </div>

          {/* ── FEATURE STRIP — fondo del hero ───────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="px-4 pb-6 md:px-8"
          >
            <div className="overflow-hidden rounded-2xl border border-[#D4AF37]/10 bg-[#0E0726]/90 backdrop-blur-md">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:divide-x lg:divide-[#7B4FB5]/10">
                {HERO_FEATURES.map(({ icon, href, label, description }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    custom={i}
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="group flex flex-col items-center gap-3 border-b border-[#7B4FB5]/10 px-4 py-6 text-center transition-colors duration-300 hover:bg-[#1A0F3D]/70 lg:border-b-0"
                  >
                    {/* Icono grande con glow pulsante */}
                    <motion.div
                      className="flex h-[60px] w-[60px] items-center justify-center rounded-2xl border border-[#7B4FB5]/30 bg-[#1A0F3D]/90 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:border-[#D4AF37]/50 group-hover:shadow-[0_0_22px_rgba(212,175,55,0.25)]"
                      animate={{
                        boxShadow: [
                          '0 0 0px rgba(212,175,55,0)',
                          '0 0 14px rgba(212,175,55,0.22)',
                          '0 0 0px rgba(212,175,55,0)',
                        ],
                      }}
                      transition={{ repeat: Infinity, duration: 3 + i * 0.3, delay: i * 0.2, ease: 'easeInOut' }}
                      whileHover={{ scale: 1.08, transition: { type: 'spring', stiffness: 300, damping: 18 } }}
                    >
                      {ElaraIcons[icon].render(30)}
                    </motion.div>

                    <p className="text-[10px] font-semibold leading-snug tracking-[0.18em] text-[#C49AD4]/75 uppercase transition-colors duration-300 group-hover:text-[#D4AF37]/90">
                      {label}
                    </p>
                    <p className="text-[10px] leading-relaxed text-[#C49AD4]/45">
                      {description}
                    </p>
                    <span className="text-[11px] text-[#D4AF37]/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#D4AF37]/80">→</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="herramientas" className="relative overflow-hidden px-6 py-24">
        {/* Background accent */}
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
      <div className="relative overflow-hidden py-20" aria-hidden>
        {/* Cinematic quote banner — herramientas-astrales.jpg background */}
        <div className="relative mx-0 h-[420px] overflow-hidden">
          <div className="relative h-full w-full">
            <Image
              src="/images/herramientas-astrales.jpg"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#0E0726]/65" />
            {/* Gold vignette edges */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0E0726] via-transparent to-[#0E0726]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0E0726]/30 via-transparent to-[#0E0726]/50" />
          </div>
          {/* Quote centered */}
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

        {/* Horizontal image strip — 6 images, auto-scroll feel */}
        <div className="scrollbar-none mt-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 lg:grid lg:grid-cols-6 lg:overflow-visible">
          {[
            { src: '/images/herramienta-carta-natal.png', alt: 'Carta natal' },
            { src: '/images/rituales-altar-cristales.jpg', alt: 'Rituales' },
            { src: '/images/meditacion-cristales.jpg', alt: 'Cristales' },
            { src: '/images/herramienta-chakras.png', alt: 'Chakras' },
            { src: '/images/circulo-juntas.png', alt: 'Círculo' },
            { src: '/images/oraculo-tres-cartas.jpg', alt: 'Oráculo' },
          ].map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 1.04 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative h-[240px] w-[200px] shrink-0 snap-start overflow-hidden rounded-2xl lg:w-auto"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 1024px) 200px, 17vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0726]/50 to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>

      <section id="circulo" className="relative overflow-hidden py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#1A0F3D]/40" />
        <div aria-hidden className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#7B4FB5]/40 to-transparent" />

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
                    <div className="mt-0.5 shrink-0 opacity-75">{ElaraIcons[icon].render(20)}</div>
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
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#7B4FB5]/30 bg-[#2D1870] text-[#D4AF37]">
                    {ElaraIcons[icon].render(20)}
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
                <div className="opacity-50">{ElaraIcons[icon].render(22)}</div>
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
            De la intención a tus manos
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
              <p className="text-[10px] font-semibold leading-snug tracking-widest text-[#C49AD4]/50 uppercase">{item.label}</p>
              <p className="text-[11px] leading-relaxed text-[#C49AD4]/35">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="sobre" className="relative overflow-hidden py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#1A0F3D]/40" />

        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-[1fr_460px]">
            {/* Left: content */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="order-2 flex flex-col gap-6 lg:order-1"
            >
              <p className="text-[10px] tracking-[0.4em] text-[#D4AF37] uppercase">
                ✦ Quién soy
              </p>
              <h2 className="font-display text-[2.6rem] leading-[1.06] tracking-tight text-[#F5EEF8] lg:text-[3.2rem]">
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
                {['Autoconocimiento', 'Ciclos lunares', 'Rituales cotidianos', 'Carta natal'].map((value) => (
                  <span
                    key={value}
                    className="rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/[0.05] px-4 py-1.5 text-[10px] tracking-[0.25em] text-[#D4AF37]/75 uppercase"
                  >
                    ✦ {value}
                  </span>
                ))}
              </div>
              <motion.a
                href="#email"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-2 flex items-center gap-2.5 self-start rounded-2xl border border-[#D4AF37]/40 px-7 py-3.5 text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase transition-all duration-300 hover:border-[#D4AF37]/70 hover:bg-[#D4AF37]/[0.08]"
              >
                Conocer más <span aria-hidden>→</span>
              </motion.a>
            </motion.div>

            {/* Right: 3-image editorial layout */}
            <div className="relative order-1 lg:order-2">
              {/* Main large portrait */}
              <motion.div
                initial={{ opacity: 0, scale: 1.04 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative h-[480px] overflow-hidden rounded-3xl shadow-2xl shadow-[#0E0726]/80"
              >
                <Image
                  src="/images/sobre-elara.jpg"
                  alt="Elara Nova"
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0726]/50 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#7B4FB5]/10 to-transparent" />

                {/* Quote card flotante */}
                <motion.div
                  initial={{ opacity: 0, x: 20, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.65 }}
                  className="absolute right-5 bottom-5 w-44 rounded-2xl border border-[#D4AF37]/25 bg-[#0E0726]/90 p-4 shadow-2xl shadow-[#0E0726]/70 backdrop-blur-md"
                >
                  <div className="mb-2 opacity-70">{ElaraIcons.Estrellas.render(14)}</div>
                  <p className="font-serif-italic text-[11px] leading-relaxed text-[#C49AD4]/80 italic">
                    Mi propósito es recordarte todo lo que siempre fuiste capaz de ser. ✦
                  </p>
                </motion.div>
              </motion.div>

              {/* Small image — bottom left overlap */}
              <motion.div
                initial={{ opacity: 0, x: -20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="absolute -bottom-5 -left-5 h-44 w-36 overflow-hidden rounded-2xl border-2 border-[#0E0726] shadow-xl shadow-[#0E0726]/60"
              >
                <Image
                  src="/images/elara-escribiendo.jpg"
                  alt="Elara escribiendo"
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </motion.div>

              {/* Small image — top right overlap */}
              <motion.div
                initial={{ opacity: 0, x: 20, y: -20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="absolute -top-5 -right-5 h-40 w-32 overflow-hidden rounded-2xl border-2 border-[#0E0726] shadow-xl shadow-[#0E0726]/60"
              >
                <Image
                  src="/images/elara-journal.png"
                  alt="Elara con journal"
                  fill
                  sizes="128px"
                  className="object-cover object-top"
                />
              </motion.div>
            </div>
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
                    <span aria-hidden>✦</span> Quiero recibirlos
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
              src="/images/sobre-elara.jpg"
              alt="Elara Nova"
              fill
              sizes="560px"
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08051A] via-[#08051A]/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#08051A]/40 via-transparent to-[#08051A]/70" />
          </div>
        </div>

        {/* Bottom features strip */}
        <div className="relative border-t border-[#7B4FB5]/15 px-6 py-10 md:px-16">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 md:grid-cols-4">
            {EMAIL_FEATURES.map(({ icon, label, description }) => (
              <div key={label} className="flex flex-col items-center gap-3 text-center">
                <div className="opacity-50">{ElaraIcons[icon].render(24)}</div>
                <p className="text-[9px] font-semibold tracking-[0.22em] text-[#C49AD4]/60 uppercase">{label}</p>
                <p className="text-[11px] leading-relaxed text-[#C49AD4]/40">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-[#08051A] px-6 py-12">
        <div className="mx-auto max-w-6xl">
          {/* Top row */}
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
            {/* Logo + social */}
            <div className="flex flex-col items-center gap-4 md:items-start">
              <LogoBrand size="sm" />
              <div className="flex items-center gap-3">
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
              </div>
            </div>

            {/* Nav links */}
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3 md:justify-end" aria-label="Footer">
              {[
                { href: '#herramientas', label: 'Herramientas' },
                { href: '#circulo', label: 'Círculo' },
                { href: '#productos', label: 'Productos' },
                { href: '/contact', label: 'Contacto' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="text-[10px] tracking-[0.22em] text-[#C49AD4]/40 uppercase transition-colors duration-200 hover:text-[#D4AF37]/70"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Bottom row */}
          <div className="mt-8 border-t border-white/5 pt-6 text-center">
            <p className="text-[9px] tracking-[0.22em] text-[#C49AD4]/25 uppercase">
              © 2026 Elara Nova · Hecho con alma ✦
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
