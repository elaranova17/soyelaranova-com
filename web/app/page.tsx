'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, type FormEvent } from 'react'
import { CreationTimeline } from '@/components/creation-timeline'
import { ElaraFramedImage, ElaraSectionBridge } from '@/components/elara-framed-image'
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
    img: '/images/oraculo-maestra.png',
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
    img: '/images/herramienta-chakras.png',
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
  { src: '/images/circulo-juntas.png', alt: 'Mujeres del Círculo juntas' },
  { src: '/images/circulo-ritual-lunar.png', alt: 'Ritual lunar grupal' },
  { src: '/images/circulo-ritual-inclusion.png', alt: 'Ritual de apertura' },
  { src: '/images/circulo-oraculo.png', alt: 'Lectura colectiva' },
  { src: '/images/circulo-estudio.png', alt: 'Conexión real' },
  { src: '/images/circulo-carta-natal.png', alt: 'Estudio de carta natal' },
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
    href: '#contacto',
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
    href: '#contacto',
  },
  {
    img: '/images/circulo-estudio.png',
    tag: 'Programa · En vivo',
    badge: 'EN VIVO',
    badgeColor: 'text-[#F5EEF8] border-[#F5EEF8]/30',
    title: 'Círculo de Estudio',
    text: 'Clases en vivo, preguntas reales, comunidad activa. El grupo te sostiene cuando estudiar sola cansa.',
    price: '$57 USD',
    cta: 'Ver horarios',
    href: '#contacto',
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
    img: '/images/herramienta-rituales.png',
    title: 'Kit de Rituales',
    text: 'Piezas y prácticas para crear espacios de intención en casa. Con guía incluida.',
  },
  {
    img: '/images/ciclos-lunares-rituales.png',
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

const HERO_FEATURES_ICON = [
  {
    icon: 'Estrellas' as IconKey,
    href: '#herramientas',
    label: 'Herramientas de alma',
    description: 'Calculá tu carta, leé tus ciclos, entendete.',
  },
  {
    icon: 'Oraculo' as IconKey,
    href: '#oraculo',
    label: 'Lecturas de oráculo',
    description: 'Hacé tu pregunta. Tu mensaje en 24h.',
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

const HERO_FEATURES_TEXT = [
  {
    href: '#herramientas',
    label: 'Calendario lunar',
    description: 'Conectate con la energía de cada fase.',
  },
  {
    href: '#productos',
    label: 'Recursos digitales',
    description: 'Ebooks, journals y planificadores para vos.',
  },
] as const

function toolCardHref(variant: ToolCard['variant']): string {
  if (variant === 'oraculo') return '#oraculo'
  return '#contacto'
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
    <motion.a
      href={toolCardHref(item.variant)}
      custom={index}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      className={`elara-card group relative flex flex-col rounded-3xl border border-[#7B4FB5]/15 ${styles.card}`}
    >
      <div className="relative">
        <ElaraFramedImage
          src={item.img}
          alt={item.title}
          veil="card"
          aspect="card"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          frameClassName="rounded-t-3xl"
        />
        <div className="pointer-events-none absolute inset-0 z-[2] -translate-x-full bg-gradient-to-r from-transparent via-white/[0.07] to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
        <span className={`absolute top-3 right-3 z-[3] rounded-full border border-[#D4AF37]/40 bg-[#0E0726]/75 px-2.5 py-1 text-[9px] tracking-[0.25em] uppercase backdrop-blur-sm ${styles.labelText}`}>
          {item.tag}
        </span>
        <div className="absolute bottom-4 left-4 z-[3]">
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
        <h3 className={`elara-card__title font-display text-[16px] leading-snug tracking-tight ${styles.title}`}>
          {item.title}
        </h3>
        <p className={`font-serif-italic text-sm leading-relaxed italic ${styles.description}`}>
          {item.text}
        </p>
        <div className={`elara-card__cta btn-explorar btn-arrow mt-auto flex items-center gap-2 pt-2 text-[10px] tracking-[0.28em] uppercase ${styles.cta}`}>
          <span className="btn-explorar__label">Explorar</span>
          <span className="btn-arrow__icon" aria-hidden>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>
      {/* Inner glow on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        style={{ boxShadow: 'inset 0 0 60px rgba(212,175,55,0.07), inset 0 0 1px rgba(212,175,55,0.25)' }}
      />
    </motion.a>
  )
}

export default function HomePage() {
  const [email, setEmail] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [sent, setSent] = useState(false)

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitError(null)

    try {
      const res = await fetch('/api/oracle/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email, birthDate }),
        headers: { 'Content-Type': 'application/json' },
      })
      const data = (await res.json()) as { ok?: boolean; error?: string }
      if (!res.ok || !data.ok) {
        setSubmitError(data.error ?? 'No pudimos registrarte. Intentá de nuevo.')
        return
      }
      setSent(true)
    } catch {
      setSubmitError('Error de conexión. Intentá de nuevo.')
    }
  }

  return (
    <div className="min-h-screen bg-[#0E0726] text-[#F5EEF8]">
      <section id="inicio" className="relative min-h-[100svh] overflow-hidden">
        {/* ── BACKGROUND full-bleed ────────────────────────────── */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Image
            src="/images/hero-portal-lago.png"
            alt=""
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0010] via-[#0E0726]/88 to-[#0E0726]/24" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0010]/35 via-transparent to-[#0E0726]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.10),transparent_38%)]" />
        </div>

        {/* Hero particles — confinadas a esta sección */}
        <MagicParticles density="high" zone="hero" scope="section" />

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
          <div className="flex flex-1 flex-col justify-center px-8 py-16 md:px-16 lg:max-w-[58%] xl:max-w-[50%]">
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
                Oráculo diario · universo Elara Nova
              </span>
            </motion.div>

            {/* H1 */}
            <h1 className="font-display mb-6 text-[2.65rem] leading-[1.04] text-[#F5EEF8] sm:text-[3.25rem] lg:text-[4.15rem]">
              {[
                { content: 'Mira todo lo que' },
                { content: <em key="em" className="font-serif-italic font-light text-[#C49AD4] italic">siempre fuiste</em> },
                { content: 'capaz de ser.' },
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
              className="font-serif-italic mb-8 max-w-[430px] text-[1.08rem] leading-[1.8] text-[#E5DBF0]/72 italic"
            >
              Un portal de autoconocimiento creado para sentirse como ritual, convertir como estrategia y mostrar lo que una web premium puede hacer por una marca.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.56, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-3.5 sm:flex-row sm:items-center"
            >
              <a
                href="#herramientas"
                className="btn-ritual btn-ritual--lavender group relative flex w-full items-center justify-center gap-2.5 rounded-2xl px-8 py-4 text-[10px] font-semibold tracking-[0.32em] text-[#F5EEF8] uppercase sm:w-auto"
              >
                <span aria-hidden className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.12] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                Descubrí tu camino
              </a>
              <a
                href="#circulo"
                className="btn-ritual btn-ritual--ghost flex w-full items-center justify-center gap-2.5 rounded-2xl px-8 py-4 text-[10px] tracking-[0.32em] uppercase sm:w-auto"
              >
                Entrar al Círculo
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.58, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 flex max-w-[480px] flex-col gap-3 rounded-2xl border border-[#D4AF37]/18 bg-[#1A0F3D]/45 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="max-w-[260px] text-[11px] leading-relaxed tracking-[0.12em] text-[#E5DBF0]/65 uppercase">
                También es un caso real de diseño, estrategia y desarrollo web.
              </p>
              <Link
                href="/portfolio"
                className="nav-link-ritual text-[10px] font-semibold tracking-[0.24em] text-[#D4AF37] uppercase"
              >
                Work by Evelyn →
              </Link>
            </motion.div>
          </div>

          {/* ── FEATURE STRIP — fondo del hero ───────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="px-4 pb-6 md:px-8"
          >
            <div className="soul-feature-strip overflow-hidden rounded-2xl border border-[#D4AF37]/10 bg-[#0a0a1a]/95 backdrop-blur-md">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:divide-x lg:divide-[#7B4FB5]/10">
                {HERO_FEATURES_ICON.map(({ icon, href, label, description }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    custom={i}
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="soul-feature soul-feature--icon group flex cursor-pointer flex-col items-center gap-3 border-b border-[#7B4FB5]/10 px-4 py-6 text-center lg:border-b-0"
                  >
                    <div className="soul-feature__icon-wrap flex h-[60px] w-[60px] items-center justify-center rounded-2xl border border-[#7B4FB5]/30 bg-[#1A0F3D]/90">
                      {ElaraIcons[icon].render(36)}
                    </div>
                    <p className="soul-feature__label text-[10px] font-semibold leading-snug tracking-[0.18em] text-[#C49AD4]/75 uppercase">
                      {label}
                    </p>
                    <p className="text-[10px] leading-relaxed text-[#C49AD4]/45">{description}</p>
                    <span className="soul-feature__arrow btn-arrow__icon text-[11px] text-[#C9A96E]/40">→</span>
                  </motion.a>
                ))}
                {HERO_FEATURES_TEXT.map(({ href, label, description }, i) => (
                  <motion.a
                    key={label}
                    href={href}
                    custom={i + HERO_FEATURES_ICON.length}
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="soul-feature soul-feature--text group flex cursor-pointer flex-col items-center justify-center gap-2 border-b border-[#7B4FB5]/10 px-4 py-6 text-center lg:border-b-0"
                  >
                    <p className="soul-feature__label mt-2 text-[10px] font-semibold leading-snug tracking-[0.18em] text-[#C49AD4]/65 uppercase">
                      {label}
                    </p>
                    <p className="text-[10px] leading-relaxed text-[#C49AD4]/40">{description}</p>
                    <span className="soul-feature__arrow btn-arrow__icon text-[11px] text-[#C9A96E]/35">→</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="herramientas" className="elara-section relative overflow-hidden px-6 pb-24 pt-20 scroll-mt-[5.5rem]">
        <ElaraSectionBridge position="top" />
        <div aria-hidden className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

        <div className="elara-section__content mx-auto max-w-6xl">
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

      {/* ── ORÁCULO · franja visual ───────────────────────────────────── */}
      <section id="oraculo" className="relative overflow-hidden scroll-mt-[5.5rem]">
        <ElaraSectionBridge position="top" />

        <div className="relative mx-0 h-[min(52vh,500px)] overflow-hidden">
          <ElaraFramedImage
            src="/images/oraculo-maestra.png"
            alt="Elara Nova — oráculo y rituales"
            fill
            veil="banner"
            sizes="100vw"
            imageClassName="opacity-85"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
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
        <div className="scrollbar-none mt-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 lg:grid lg:grid-cols-5 lg:gap-3 lg:overflow-visible lg:px-6">
          {[
            { src: '/images/elara-durmiendo.png', alt: 'Elara descansando' },
            { src: '/images/elara-meditando.png', alt: 'Elara meditando' },
            { src: '/images/elara-cocinando.png', alt: 'Elara en la cocina' },
            { src: '/images/elara-yoga.png', alt: 'Elara haciendo yoga' },
            { src: '/images/elara-pintando.png', alt: 'Elara pintando' },
          ].map(({ src, alt }, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.65, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 280, damping: 22 } }}
              className="elara-media-tile relative w-[min(220px,72vw)] shrink-0 snap-start overflow-hidden rounded-2xl lg:w-auto"
              style={{ boxShadow: '0 8px 32px rgba(14,7,38,0.7)' }}
            >
              <ElaraFramedImage
                src={src}
                alt={alt}
                veil="gallery"
                aspect="gallery"
                sizes="(max-width: 1024px) 220px, 20vw"
                frameClassName="rounded-2xl"
              />
            </motion.div>
          ))}
        </div>

        <ElaraSectionBridge position="bottom" />
      </section>

      <section id="circulo" className="elara-section relative overflow-hidden py-24 scroll-mt-[5.5rem]">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#1A0F3D]/40" />
        <ElaraSectionBridge position="top" />

        <div className="elara-section__content mx-auto max-w-6xl px-6">
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
            <div className="grid h-[min(520px,68vh)] grid-cols-2 grid-rows-2 gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 1.04 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative col-start-1 row-span-2 row-start-1 min-h-0 overflow-hidden rounded-3xl"
              >
                <ElaraFramedImage
                  src={circuloImagenes[4].src}
                  alt="Mujeres del Círculo"
                  fill
                  veil="mosaic"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute bottom-5 left-5 z-[3]">
                  <span className="text-[9px] font-semibold tracking-[0.3em] text-[#D4AF37] uppercase">
                    ✦ Conexión real
                  </span>
                </div>
              </motion.div>
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
                  className="relative col-start-2 min-h-0 overflow-hidden rounded-2xl"
                  style={{ gridRow: i + 1 }}
                >
                  <ElaraFramedImage src={src} alt={alt} fill veil="mosaic" sizes="25vw" />
                  <p className="absolute bottom-3 left-3 z-[3] text-[8px] tracking-[0.25em] text-[#D4AF37]/80 uppercase">
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
                  <a
                    key={label}
                    href="#contacto"
                    className="elara-chip flex items-start gap-3 rounded-2xl border border-[#7B4FB5]/20 bg-[#1A0F3D]/60 p-4 backdrop-blur-sm"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#D4AF37]/35 bg-gradient-to-br from-[#2D1870] to-[#1A0F3D] shadow-[0_0_14px_rgba(212,175,55,0.12)]">
                      {ElaraIcons[icon].render(26)}
                    </div>
                    <div>
                      <p className="elara-chip__label text-[10px] font-semibold tracking-[0.2em] text-[#C49AD4]/80 uppercase">{label}</p>
                      <p className="mt-1 text-[11px] leading-relaxed text-[#C49AD4]/50">{description}</p>
                    </div>
                  </a>
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
              <a
                href="#contacto"
                className="btn-ritual btn-ritual--lavender mt-2 inline-flex items-center gap-2.5 self-start rounded-2xl px-7 py-4 text-[10px] font-semibold tracking-[0.3em] text-[#F5EEF8] uppercase"
              >
                Unite al Círculo <span aria-hidden>✦</span>
              </a>
            </motion.div>
          </div>

          {/* Bottom image strip — 3 more circulo images */}
          <div className="grid grid-cols-3 gap-4">
            {[
              circuloImagenes[3],
              { src: '/images/circulo-estudio.png', alt: 'Círculo de estudio' },
              circuloImagenes[5],
            ].map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative aspect-[16/10] overflow-hidden rounded-2xl"
              >
                <ElaraFramedImage src={img.src} alt={img.alt} fill veil="mosaic" sizes="33vw" />
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
        <ElaraSectionBridge position="bottom" />
      </section>

      <section id="cursos" className="elara-section relative overflow-hidden px-6 py-24 scroll-mt-[5.5rem]">
        <ElaraSectionBridge position="top" />
        <div aria-hidden className="pointer-events-none absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/25 to-transparent" />

        <div className="elara-section__content mx-auto max-w-6xl">
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
              <motion.a
                key={title}
                href={href}
                custom={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                className="elara-card group relative flex flex-col rounded-3xl border border-[#7B4FB5]/15 bg-[#1A0F3D]/60 backdrop-blur-sm"
              >
                <div className="relative">
                  <ElaraFramedImage
                    src={img}
                    alt={title}
                    veil="card"
                    aspect="course"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    frameClassName="rounded-t-3xl"
                  />
                  <div className="pointer-events-none absolute inset-0 z-[2] -translate-x-full bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-1000 group-hover:translate-x-full" />
                  <div className="absolute top-4 inset-x-4 z-[3] flex items-start justify-between">
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
                    <h3 className="elara-card__title font-display text-xl tracking-tight text-[#F5EEF8]">{title}</h3>
                    <p className="font-serif-italic mt-2 text-sm leading-relaxed text-[#C49AD4]/65 italic">{text}</p>
                  </div>
                  <div className="mt-auto flex items-center justify-between border-t border-[#7B4FB5]/10 pt-3">
                    <span className="font-serif-italic text-lg text-[#D4AF37] italic">{price}</span>
                    <span className="elara-card__cta btn-arrow btn-explorar flex items-center gap-2 text-[10px] tracking-[0.28em] text-[#D4AF37]/50 uppercase">
                      <span className="btn-explorar__label">{cta}</span>
                      <span className="btn-arrow__icon" aria-hidden>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
                {/* Inner glow */}
                <div
                  className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  style={{ boxShadow: 'inset 0 0 60px rgba(212,175,55,0.06), inset 0 0 1px rgba(212,175,55,0.2)' }}
                />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      <section id="productos" className="elara-section section-fade-edge-top relative scroll-mt-[5.5rem] overflow-hidden py-24">
        <ElaraSectionBridge position="top" />
        <div className="elara-section__content mx-auto max-w-6xl px-6">
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
            <motion.a
              key={product.title}
              href={product.href ?? '#contacto'}
              target={product.target}
              rel={product.rel}
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="elara-card group w-[min(76vw,280px)] shrink-0 snap-start overflow-hidden rounded-2xl border border-[#D4AF37]/15 bg-[#1A0F3D]/80 md:w-auto"
            >
                <ElaraFramedImage
                  src={product.img}
                  alt={product.title}
                  veil="soft"
                  aspect="product"
                  sizes="(max-width: 768px) 76vw, 20vw"
                  frameClassName="rounded-t-2xl"
                />
              <div className="p-5">
                <h3 className="elara-card__title font-display text-2xl text-[#F5EEF8]">
                  {product.title}
                </h3>
                <p className="font-serif-italic mt-2 text-sm leading-relaxed text-[#C49AD4]/75">
                  {product.text}
                </p>
                <span className="elara-card__cta btn-arrow mt-4 inline-flex items-center gap-1.5 border-b border-[#D4AF37]/30 pb-0.5 text-[10px] tracking-widest text-[#D4AF37] uppercase">
                  Ver más <span className="btn-arrow__icon" aria-hidden>→</span>
                </span>
              </div>
            </motion.a>
          ))}
        </div>
        </div>
        <ElaraSectionBridge position="bottom" />
      </section>

      <section id="sobre" className="elara-section relative overflow-hidden py-24 scroll-mt-[5.5rem]">
        <div aria-hidden className="pointer-events-none absolute inset-0 bg-[#1A0F3D]/40" />
        <ElaraSectionBridge position="top" />
        <ElaraSectionBridge position="bottom" />
        <div aria-hidden className="pointer-events-none absolute top-0 right-0 h-[600px] w-[600px] translate-x-1/3 -translate-y-1/4 rounded-full bg-[#7B4FB5]/[0.07] blur-[120px]" />
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <MagicParticles density="low" zone="full" scope="section" />
        </div>

        <div className="elara-section__content mx-auto max-w-6xl px-6">
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
                  <motion.a
                    key={label}
                    href="#herramientas"
                    whileHover={{ scale: 1.04 }}
                    className="elara-chip inline-flex items-center gap-1.5 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/[0.05] px-3.5 py-1.5 text-[10px] tracking-[0.22em] text-[#D4AF37]/75 uppercase"
                  >
                    <span className="opacity-80">{ElaraIcons[icon].render(14)}</span>
                    <span className="elara-chip__label">{label}</span>
                  </motion.a>
                ))}
              </div>

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
                className="relative aspect-[4/5] max-h-[580px] min-h-[420px] overflow-hidden rounded-3xl lg:aspect-[3/4]"
                style={{ boxShadow: '0 0 60px rgba(123,79,181,0.22), 0 40px 80px rgba(14,7,38,0.9)' }}
              >
                <ElaraFramedImage
                  src="/images/elara-meditando.png"
                  alt="Elara Nova"
                  fill
                  veil="card"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />

                {/* Quote card — bottom right, flotante */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="absolute right-4 bottom-4 z-[3] w-56 rounded-2xl border border-[#D4AF37]/28 bg-[#0E0726]/93 p-5 backdrop-blur-md"
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

          {/* ── Timeline: así crea Evelyn ── */}
          <div id="atelier" className="mt-24 scroll-mt-[5.5rem]">
            <div aria-hidden className="pointer-events-none absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/20 to-transparent" />
            <div aria-hidden className="pointer-events-none my-4 left-1/2 h-[300px] w-[500px] -translate-x-1/2 rounded-full bg-[#7B4FB5]/[0.05] blur-[80px]" />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-14 text-center"
          >
            <p className="mb-4 text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase">
              ✦ Así crea Evelyn
            </p>
            <h2 className="font-display text-[2.8rem] leading-[1.05] tracking-tight text-[#F5EEF8] lg:text-[3.6rem]">
              De la intención a tus manos
            </h2>
            <p className="font-serif-italic mt-3 text-base text-[#C49AD4]/60 italic">
              Cada pieza que creamos nace de una intención real.
            </p>
          </motion.div>

          <CreationTimeline steps={creationSteps} />

          </div>{/* close #atelier */}

          {/* ── La mujer detrás: cajoncito Evelyn ── */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mt-16 rounded-3xl border border-[#7B4FB5]/25 bg-[#1A0F3D]/50 p-8 backdrop-blur-sm lg:p-10"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-[#D4AF37]/30 to-transparent" />
              <span className="text-[9px] tracking-[0.42em] text-[#D4AF37]/60 uppercase">✦ La mujer detrás</span>
              <div className="h-px flex-1 bg-gradient-to-l from-[#D4AF37]/30 to-transparent" />
            </div>

            <p className="font-serif-italic mb-5 text-[1.1rem] leading-[1.8] text-[#C49AD4]/85 italic">
              Detrás de mí hay una mujer real:{' '}
              <strong className="not-italic font-semibold text-[#F5EEF8]/90">Evelyn Patiño</strong>.
            </p>

            <div className="grid gap-5 lg:grid-cols-2">
              <p className="text-[13px] leading-[1.9] text-[#C49AD4]/65">
                Una madre colombiana que vive en Suiza, que un día me encontró —
                no como una marca, sino como su manera de tender la mano hacia otras mujeres.
                Para caminar juntas. Para crecer juntas.{' '}
                <em className="italic text-[#C49AD4]/80">Desde lo más íntimo hasta lo más profesional.</em>
              </p>
              <p className="text-[13px] leading-[1.9] text-[#C49AD4]/55">
                Evelyn es ingeniera de software. Toda su vida adentro de fábricas de software —
                construyendo soluciones, automatizando lo que parecía imposible, trabajando con datos
                donde otros veían caos. Crea cada rincón de este espacio con amor y dedicación,
                porque sabe que lo que vos traés acá es real.
              </p>
            </div>

            <Link
              href="/linktree"
              className="btn-ritual btn-ritual--ghost btn-arrow mt-7 inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-[10px] tracking-[0.28em] text-[#D4AF37]/75 uppercase hover:text-[#D4AF37]"
            >
              <span className="opacity-70">{ElaraIcons.Guia.render(14)}</span>
              Conoce más de Evelyn <span className="btn-arrow__icon" aria-hidden>→</span>
            </Link>
          </motion.div>
        </div>{/* close mx-auto */}
      </section>

      <section id="contacto" className="relative overflow-hidden scroll-mt-[5.5rem] bg-[#08051A]">
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
                  <label className="sr-only" htmlFor="birth-date">
                    Fecha de nacimiento
                  </label>
                  <input
                    id="birth-date"
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    required
                    className="font-serif-italic w-full rounded-2xl border border-[#D4AF37]/15 bg-[#1A0F3D]/50 px-6 py-4 text-base text-[#F5EEF8] italic backdrop-blur-sm transition-colors focus:border-[#D4AF37]/40 focus:outline-none"
                  />
                  {submitError ? (
                    <p className="text-center text-sm text-red-300/90" role="alert">
                      {submitError}
                    </p>
                  ) : null}
                  <button
                    type="submit"
                    className="btn-ritual btn-ritual--gold flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-[10px] font-bold tracking-[0.3em] uppercase"
                  >
                    <span className="opacity-70">{ElaraIcons.Correo.render(16)}</span> Quiero recibirlos
                  </button>
                  <p className="text-center text-[9px] tracking-[0.2em] text-[#C49AD4]/30 uppercase">
                    Sin spam · Podés salir cuando quieras · Solo para el Círculo ✦
                  </p>
                </form>
              )}
            </motion.div>
          </div>

          {/* RIGHT — image */}
          <div className="relative hidden h-full min-h-[600px] lg:block">
            <ElaraFramedImage
              src="/images/circulo-juntas.png"
              alt="El Círculo íntimo de Elara Nova"
              fill
              veil="panel"
              sizes="560px"
            />
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
                {([
                  { href: '#herramientas', label: 'Herramientas' },
                  { href: '#circulo',      label: 'El Círculo'   },
                  { href: '#cursos',       label: 'Cursos'       },
                  { href: '#productos',    label: 'Productos'    },
                  { href: '#sobre',        label: 'Sobre Elara'  },
                  { href: '#atelier',      label: 'Cómo creamos' },
                  { href: '#contacto',     label: 'Únete al Círculo' },
                  { href: '/oraculo',      label: 'Oráculo'      },
                  { href: '/universo',     label: 'Universo'     },
                ] as const).map(({ href, label }) => (
                  <a
                    key={href}
                    href={href}
                    className="nav-link-ritual text-[11px] tracking-[0.15em] text-[#C49AD4]/45 uppercase"
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
                href="#contacto"
                className="btn-ritual btn-ritual--ghost inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[10px] tracking-[0.28em] text-[#D4AF37]/75 uppercase hover:text-[#D4AF37]"
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
