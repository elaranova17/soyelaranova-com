'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, type FormEvent } from 'react'
import { ElaraIcons, IconCard } from '@/components/elara-icons'

type IconKey = keyof typeof ElaraIcons

type ToolCard = {
  img: string
  icon: IconKey
  title: string
  text: string
}

type CircleBenefit = {
  icon: IconKey
  label: string
}

type ProductCard = {
  img: string
  badge: string
  badgeColor: string
  title: string
  text: string
  cta: string
  price: string | null
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
    icon: 'Planetas',
    title: 'Carta Natal',
    text: 'Tu mapa del cielo al nacer. Descubrí tus dones, desafíos y propósito.',
  },
  {
    img: '/images/herramienta-ciclos-lunares.png',
    icon: 'Luna',
    title: 'Ciclos Lunares',
    text: 'Sincronizate con la luna para planificar, soltar y florecer cada mes.',
  },
  {
    img: '/images/herramienta-lectura-tarot.png',
    icon: 'Oraculo',
    title: 'Tarot Intuitivo',
    text: 'El tarot como espejo del alma. Sin predicciones, solo claridad interior.',
  },
  {
    img: '/images/herramienta-chakras.png',
    icon: 'Energia',
    title: 'Energía & Chakras',
    text: 'Aprendé a leer y equilibrar tu campo energético con herramientas simples.',
  },
  {
    img: '/images/herramienta-rituales.png',
    icon: 'Proteccion',
    title: 'Rituales de Intención',
    text: 'Rituales lunares y de soltar para marcar tus ciclos con consciencia.',
  },
  {
    img: '/images/herramienta-proposito.png',
    icon: 'Guia',
    title: 'Tu Propósito',
    text: 'Claridad sobre quién sos, qué querés crear y cómo servir desde el alma.',
  },
] as const

const circuloBenefits: readonly CircleBenefit[] = [
  { icon: 'Comunidad', label: 'Encuentros en vivo' },
  { icon: 'Luna', label: 'Rituales lunares grupales' },
  { icon: 'Ebook', label: 'Recursos exclusivos' },
  { icon: 'Corazon', label: 'Contención real' },
] as const

const heroChips = ['✦ Astrología', '✦ Tarot', '✦ Rituales', '✦ Círculo'] as const

const products: readonly ProductCard[] = [
  {
    img: '/images/curso-ciclos.jpg',
    badge: 'VOL. 01',
    badgeColor: 'border-[#D4AF37]/40 text-[#D4AF37]',
    title: 'Ciclo Nova del Regreso',
    text: 'El ebook que te guía a través de tus ciclos interiores para regresar a vos.',
    cta: 'Quiero el ebook →',
    price: '$27 USD',
  },
  {
    img: '/images/producto-planificador-lunar.jpg',
    badge: 'GRATIS',
    badgeColor: 'border-[#C49AD4]/40 text-[#C49AD4]',
    title: 'Planificador Lunar Mayo',
    text: 'Organizá tu mes con la energía de cada fase lunar. Descarga gratuita.',
    cta: 'Descargar gratis →',
    price: null,
  },
] as const

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
          <span className="font-display text-xl tracking-wide text-[#D4AF37]">
            ✦ Elara Nova
          </span>
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
            className="rounded-full border border-[#D4AF37]/60 px-4 py-2 text-[11px] tracking-widest text-[#D4AF37] uppercase transition-colors hover:bg-[#D4AF37]/10"
          >
            Unirme
          </a>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 pt-20 pb-24">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-[0_0_60px_#7B4FB520]">
              <Image
                src="/images/sobre-elara.jpg"
                alt="Elara en su estudio"
                width={600}
                height={700}
                priority
                className="h-[520px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0726]/40 to-transparent" />
            </div>
            <div className="absolute right-4 -bottom-4 left-4 flex flex-wrap justify-center gap-2">
              {heroChips.map((chip, index) => (
                <motion.span
                  key={chip}
                  className="rounded-full border border-[#D4AF37]/30 bg-[#1A0F3D]/90 px-3 py-1.5 text-[10px] tracking-widest text-[#D4AF37] uppercase backdrop-blur"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 3 + index * 0.4,
                    delay: index * 0.3,
                  }}
                >
                  {chip}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex flex-col gap-6"
          >
            <p className="text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase">
              ✦ Bienvenida
            </p>
            <h1 className="font-display text-5xl leading-tight text-[#F5EEF8] xl:text-6xl">
              Tu alma ya sabe.
              <br />
              <span className="text-[#D4AF37]">Vos solo aprendés</span>
              <br />
              a escucharla.
            </h1>
            <p className="font-serif-italic text-xl leading-relaxed text-[#C49AD4]">
              Herramientas de autoconocimiento para mujeres que eligen vivir de
              adentro hacia afuera.
            </p>
            <div className="mt-2 flex flex-wrap gap-4">
              <a
                href="#herramientas"
                className="rounded-full bg-[#D4AF37] px-6 py-3 font-sans text-[11px] tracking-widest text-[#0E0726] uppercase transition-colors hover:bg-[#F0D060]"
              >
                Explorar herramientas
              </a>
              <a
                href="#circulo"
                className="rounded-full border border-[#D4AF37]/40 px-6 py-3 font-sans text-[11px] tracking-widest text-[#D4AF37] uppercase transition-colors hover:bg-[#D4AF37]/10"
              >
                Ver el Círculo
              </a>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-4 flex flex-wrap gap-4"
            >
              {(['Luna', 'Estrellas', 'Eclipse', 'Energia', 'Intuicion', 'Proteccion'] as const).map((key) => (
                <IconCard key={key} icon={ElaraIcons[key].render(22)} size="sm" />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="herramientas" className="mx-auto max-w-6xl px-6 py-24">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase">
            ✦ Las herramientas
          </p>
          <h2 className="font-display text-4xl text-[#F5EEF8] xl:text-5xl">
            Las herramientas que te acompañan
          </h2>
          <p className="font-serif-italic mt-4 text-xl text-[#C49AD4]">
            Cada una diseñada para que te conozcas más profundo.
          </p>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {herramientas.map((item, index) => (
            <motion.div
              key={item.title}
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              whileHover={{ scale: 1.02, boxShadow: '0 0 30px #D4AF3720' }}
              transition={{ duration: 0.2 }}
              className="cursor-pointer overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-[#1A0F3D]/60"
            >
              <div className="relative h-52 w-full">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F3D] via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <div className="mb-3">{ElaraIcons[item.icon].render(28)}</div>
                <h3 className="font-display mb-2 text-xl text-[#F5EEF8]">
                  {item.title}
                </h3>
                <p className="font-serif-italic leading-relaxed text-[#C49AD4]">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="circulo" className="bg-[#1A0F3D] py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={fadeUp}
            className="mb-16 text-center"
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

          <div className="mb-16 grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-96 overflow-hidden rounded-3xl"
            >
              <Image src="/images/circulo-juntas.png" alt="Crecemos juntas" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F3D]/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="font-serif-italic text-2xl text-[#F5EEF8]">
                  &quot;Crecemos juntas, brillamos siempre&quot;
                </p>
              </div>
            </motion.div>
            <div className="flex flex-col gap-6">
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
                  className="relative h-44 overflow-hidden rounded-2xl"
                >
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F3D]/40 to-transparent" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4">
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

          <div className="text-center">
            <a
              href="#email"
              className="inline-block rounded-full bg-[#D4AF37] px-8 py-4 font-sans text-[11px] tracking-widest text-[#0E0726] uppercase transition-colors hover:bg-[#F0D060]"
            >
              Quiero unirme al Círculo
            </a>
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
        <div className="grid gap-8 md:grid-cols-2">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              custom={index}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="overflow-hidden rounded-2xl border border-[#D4AF37]/20 bg-[#1A0F3D]/60"
            >
              <div className="relative h-64 w-full">
                <Image src={product.img} alt={product.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A0F3D] via-transparent to-transparent" />
                <span
                  className={`absolute top-4 left-4 rounded-full border bg-[#0E0726]/80 px-3 py-1 text-[10px] tracking-widest uppercase ${product.badgeColor}`}
                >
                  {product.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display mb-2 text-2xl text-[#F5EEF8]">
                  {product.title}
                </h3>
                {product.price && (
                  <p className="mb-2 font-sans text-sm text-[#D4AF37]">
                    {product.price}
                  </p>
                )}
                <p className="font-serif-italic mb-4 text-[#C49AD4]">
                  {product.text}
                </p>
                <a
                  href="#email"
                  className="border-b border-[#D4AF37]/40 pb-0.5 text-[11px] tracking-widest text-[#D4AF37] uppercase transition-colors hover:border-[#D4AF37]"
                >
                  {product.cta}
                </a>
              </div>
            </motion.div>
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
                    className="whitespace-nowrap rounded-full bg-[#D4AF37] px-6 py-3 font-sans text-[11px] tracking-widest text-[#0E0726] uppercase transition-colors hover:bg-[#F0D060]"
                  >
                    Quiero recibirlos
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
          <span className="font-display text-lg text-[#D4AF37]">✦ Elara Nova</span>
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
