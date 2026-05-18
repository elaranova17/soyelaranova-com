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
    img: '/images/herramienta-lectura-tarot.png',
    variant: 'oraculo',
    icon: 'cards',
    title: 'Lectura de Tarot',
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
    title: 'Ciclos lunares',
    text: 'Rituales y guía práctica para vivir en sincronía con la luna.',
  },
  {
    img: '/images/curso-tarot.jpg',
    title: 'Tarot intuitivo',
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
          className="scale-100 object-cover transition-transform duration-1000 group-hover:scale-110"
          sizes="(max-width: 1024px) 100vw, 33vw"
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
      <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0E0726]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <LogoBrand />
          <div className="hidden items-center gap-8 md:flex">
            {[
              { icon: 'Herramientas' as const, label: 'Herramientas', href: '#herramientas' },
              { icon: 'Recursos' as const, label: 'Recursos', href: '#productos' },
              { icon: 'Comunidad' as const, label: 'Círculo', href: '#circulo' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 text-[10px] tracking-widest text-[#C49AD4] uppercase transition-colors hover:text-[#D4AF37]"
              >
                {ElaraIcons[item.icon].render(16)}
                {item.label}
              </a>
            ))}
          </div>
          <a
            href="#email"
            className={buttonStyles.tertiary}
          >
            Unirme
          </a>
        </div>
      </nav>

      <section className="relative flex min-h-screen items-center overflow-hidden px-6 py-28 md:px-16">
        <Image
          src="/images/herramientas-astrales.jpg"
          alt="Atelier Elara Nova"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1A0F3D]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06040D]/80 via-[#1A0F3D]/55 to-[#1A0F3D]/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(212,175,55,0.18),transparent_35%)]" />

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-start"
        >
          <p className="mb-5 text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase">
            ✦ Atelier Elara Nova ✦
          </p>
          <h1 className="font-display max-w-4xl text-5xl leading-[0.98] font-semibold text-[#F5EEF8] md:text-7xl">
            Creamos magia
            <br />
            para tu{' '}
            <em className="font-serif-italic font-normal text-[#D4AF37] italic">
              evolución.
            </em>
          </h1>
          <p className="font-serif-italic mt-7 max-w-xl text-xl leading-relaxed text-[#E8D5F0]/85 md:text-2xl">
            Recursos, rituales y piezas únicas diseñadas para acompañarte en tu
            camino.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#productos"
              className={buttonStyles.secondary}
            >
              Explorar productos ✦
            </a>
            <a
              href="#circulo"
              className={buttonStyles.tertiary}
            >
              Ver el Círculo →
            </a>
          </div>

          <div className="mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
            {heroTrustBadges.map((badge, index) => (
              <motion.div
                key={badge.label}
                custom={index}
                initial="hidden"
                animate="show"
                variants={fadeUp}
                className="flex items-start gap-3 rounded-2xl border border-[#D4AF37]/15 bg-[#1A0F3D]/55 p-4 backdrop-blur"
              >
                <div className="mt-0.5 shrink-0">
                  {ElaraIcons[badge.icon].render(22)}
                </div>
                <div>
                  <p className="text-xs font-medium text-[#F5EEF8]">
                    {badge.label}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-[#C49AD4]/70">
                    {badge.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section id="herramientas" className="mx-auto max-w-6xl px-6 py-24">
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

      <section id="circulo" className="bg-[#1A0F3D]/50 py-24">
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
              <Image src="/images/circulo-juntas.png" alt="Crecemos juntas" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F3D]/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-serif-italic text-2xl text-[#F5EEF8]">
                  &quot;Crecemos juntas, brillamos siempre&quot;
                </p>
              </div>
            </motion.div>
            {[
              { src: '/images/circulo-ritual-lunar.png', alt: 'Ritual lunar grupal' },
              { src: '/images/circulo-tarot.png', alt: 'Juntas somos magia' },
            ].map((img, index) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative h-44 overflow-hidden rounded-2xl md:col-span-2"
              >
                <Image src={img.src} alt={img.alt} fill className="object-cover" />
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

      <section id="productos" className="mx-auto max-w-6xl px-6 py-24">
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
              <div className="relative h-48 overflow-hidden rounded-2xl border border-[#D4AF37]/15 bg-[#1A0F3D]">
                <Image
                  src={product.img}
                  alt={product.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 76vw, 20vw"
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
                  href="#email"
                  className="mt-4 inline-flex border-b border-[#D4AF37]/30 pb-0.5 text-[10px] tracking-widest text-[#D4AF37] uppercase hover:border-[#D4AF37]"
                >
                  Ver más →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
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

      <section className="bg-[#1A0F3D]/50 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-80 overflow-hidden rounded-2xl"
            >
              <Image src="/images/elara-escribiendo.jpg" alt="Elara escribiendo" fill className="object-cover" />
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

      <section id="email" className="bg-gradient-to-b from-[#1A0F3D] to-[#0E0726] py-24">
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
          <LogoBrand size="sm" />
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
