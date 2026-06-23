'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { TrackedLink } from '@/components/tracked-link'
import { studioServices } from '@/lib/studio-services'

type MethodStep = {
  number: string
  title: string
  text: string
}

type ProofItem = {
  value: string
  label: string
}

type ProductItem = {
  title: string
  meta: string
  text: string
}

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.62,
      delay: index * 0.07,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
}

const proof: readonly ProofItem[] = [
  { value: '6+', label: 'anos creando software' },
  { value: 'Banca', label: 'experiencia en sistemas exigentes' },
  { value: 'CH/LATAM', label: 'vision internacional, ejecucion cercana' },
]

const method: readonly MethodStep[] = [
  {
    number: '01',
    title: 'Diagnostico',
    text: 'Entendemos que vendes, a quien, que ya existe y donde se esta perdiendo tiempo o dinero.',
  },
  {
    number: '02',
    title: 'Mapa del sistema',
    text: 'Definimos paginas, automatizaciones, mensajes, eventos y herramientas antes de diseñar pantallas.',
  },
  {
    number: '03',
    title: 'Construccion',
    text: 'Diseño y desarrollo con detalle, cuidando mobile, velocidad, claridad del CTA y mantenibilidad.',
  },
  {
    number: '04',
    title: 'Lanzamiento',
    text: 'Dejamos la experiencia lista para publicar, medir y conectar con campañas o canales organicos.',
  },
  {
    number: '05',
    title: 'Mejora',
    text: 'Revisamos señales reales: clics, formularios, compras, preguntas frecuentes y puntos de friccion.',
  },
]

const products: readonly ProductItem[] = [
  {
    title: 'Biblioteca Elara',
    meta: 'ebooks y guias',
    text: 'La linea editorial de Elara vive aqui como producto digital: libros, rituales suaves, guias y recursos descargables.',
  },
  {
    title: 'Lead magnets',
    meta: 'captura y confianza',
    text: 'Recursos gratuitos que no solo decoran la web: abren conversaciones, educan y alimentan automatizaciones.',
  },
  {
    title: 'Cursos futuros',
    meta: 'aprendizaje digital',
    text: 'Cuando una idea valide interes, puede crecer a curso, workbook, audio o membresia sin rehacer toda la estructura.',
  },
]

function SectionHeading({
  eyebrow,
  title,
  text,
  align = 'left',
}: {
  eyebrow: string
  title: string
  text: string
  align?: 'left' | 'center'
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeUp}
      className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      <p className="mb-4 text-[0.68rem] font-bold tracking-[0.34em] text-[var(--studio-gold)] uppercase">
        {eyebrow}
      </p>
      <h2 className="font-display text-[2.35rem] leading-[1.02] text-[var(--studio-paper)] md:text-[3.4rem]">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[var(--studio-paper)]/68 md:text-lg">
        {text}
      </p>
    </motion.div>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--studio-ink)] text-[var(--studio-paper)]">
      <section id="inicio" className="relative isolate min-h-[100svh] overflow-hidden px-5 pt-28 pb-12 md:px-8 lg:px-12">
        <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_16%,rgba(200,162,74,0.16),transparent_32%),radial-gradient(circle_at_78%_28%,rgba(91,95,232,0.16),transparent_34%),linear-gradient(135deg,#0B1020_0%,#10131D_52%,#070A12_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[var(--studio-ink)] to-transparent" />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(247,242,234,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(247,242,234,0.7)_1px,transparent_1px)] [background-size:72px_72px]" />
        </div>

        <div className="mx-auto grid min-h-[calc(100svh-10rem)] max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative z-10">
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-6 inline-flex rounded-full border border-[var(--studio-gold)]/35 bg-[var(--studio-paper)]/[0.04] px-4 py-2 text-[0.66rem] font-bold tracking-[0.26em] text-[var(--studio-gold)] uppercase backdrop-blur-xl"
            >
              La Aranoa Studio · Web · Automatizacion · Ads
            </motion.p>

            <h1 className="font-display max-w-5xl text-[3.2rem] leading-[0.96] tracking-[-0.01em] text-[var(--studio-paper)] md:text-[5rem] xl:text-[6.15rem]">
              {['Sistemas digitales', 'que se ven bien', 'y venden mejor.'].map((line, index) => (
                <span key={line} className="block overflow-hidden pb-1">
                  <motion.span
                    initial={{ y: '115%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.78, delay: 0.08 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className={index === 1 ? 'block font-serif italic text-[var(--studio-gold)]' : 'block'}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.62, delay: 0.42 }}
              className="mt-7 max-w-2xl text-lg leading-8 text-[var(--studio-paper)]/72 md:text-xl"
            >
              Soy Evelyn Patino, ingeniera de software. Diseño y construyo sitios, automatizaciones y landing pages para marcas que quieren crecer con orden, datos y una presencia profesional.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.58 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <TrackedLink
                href="/descubrimiento"
                tracking={{ event: 'cta_click', category: 'lead', label: 'home_hero_cotizar' }}
                className="inline-flex min-h-12 items-center justify-center rounded-[10px] bg-[var(--studio-gold)] px-6 py-3 text-[0.78rem] font-black tracking-[0.22em] text-[var(--studio-ink)] uppercase transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[var(--studio-paper)]/70"
              >
                Cotizar mi proyecto
              </TrackedLink>
              <a
                href="#servicios"
                className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-[var(--studio-paper)]/18 bg-[var(--studio-paper)]/[0.04] px-6 py-3 text-[0.78rem] font-bold tracking-[0.22em] text-[var(--studio-paper)] uppercase backdrop-blur-xl transition-colors hover:border-[var(--studio-gold)]/60"
              >
                Ver servicios
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.76 }}
              className="mt-10 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3"
            >
              {proof.map((item) => (
                <div key={item.value} className="border-l border-[var(--studio-gold)]/45 pl-4">
                  <p className="font-display text-2xl text-[var(--studio-paper)]">{item.value}</p>
                  <p className="mt-1 text-xs leading-5 text-[var(--studio-paper)]/55">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.78, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-[34rem]"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[14px] border border-[var(--studio-gold)]/28 bg-[var(--studio-night)] shadow-[0_32px_90px_rgba(0,0,0,0.52)]">
              <Image
                src="/_assets/photos/evelyn_pro_hero.jpg"
                alt="Evelyn Patino, ingeniera de software y creadora de La Aranoa Studio"
                fill
                sizes="(max-width: 1024px) 90vw, 34rem"
                priority
                className="object-cover object-center grayscale-[0.1] contrast-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--studio-ink)] via-transparent to-transparent" />
              <div className="absolute right-4 bottom-4 left-4 rounded-[10px] border border-[var(--studio-paper)]/14 bg-[var(--studio-ink)]/78 p-4 backdrop-blur-xl">
                <p className="text-[0.62rem] font-bold tracking-[0.28em] text-[var(--studio-gold)] uppercase">
                  Criterio tecnico + sensibilidad visual
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--studio-paper)]/72">
                  Pienso como diseñadora, construyo como ingeniera y mido como negocio.
                </p>
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 hidden w-52 rounded-[10px] border border-[var(--studio-paper)]/12 bg-[var(--studio-paper)] p-4 text-[var(--studio-text)] shadow-2xl md:block">
              <p className="text-[0.62rem] font-black tracking-[0.22em] text-[var(--studio-indigo)] uppercase">Sistema base</p>
              <div className="mt-4 space-y-3">
                {['Landing', 'Formulario', 'Automatizacion', 'Medicion'].map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--studio-ink)] text-[10px] text-[var(--studio-paper)]">
                      {index + 1}
                    </span>
                    <span className="text-sm font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="servicios" className="px-5 py-24 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Servicios"
            title="Lo que construimos para que tu negocio deje de depender de piezas sueltas."
            text="La web, los anuncios, el contenido y las automatizaciones no deben vivir separados. Los ordenamos como un sistema comercial completo."
          />

          <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {studioServices.map((service, index) => (
              <motion.div
                key={service.title}
                custom={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
              >
                <Link
                  href={`/servicios/${service.slug}`}
                  className="group flex min-h-[20rem] flex-col rounded-[12px] border border-[var(--studio-paper)]/10 bg-[var(--studio-paper)]/[0.045] p-6 transition-colors hover:border-[var(--studio-gold)]/42 hover:bg-[var(--studio-paper)]/[0.07]"
                >
                  <p className="text-[0.66rem] font-black tracking-[0.28em] text-[var(--studio-gold)] uppercase">
                    {service.eyebrow}
                  </p>
                  <h3 className="mt-6 font-display text-3xl leading-tight text-[var(--studio-paper)]">
                    {service.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-[var(--studio-paper)]/65">
                    {service.summary}
                  </p>
                  <div className="mt-auto border-t border-[var(--studio-paper)]/10 pt-5">
                    <p className="text-xs font-bold leading-6 text-[var(--studio-paper)]/82">
                      {service.deliverable}
                    </p>
                    <p className="mt-4 text-[0.66rem] font-black tracking-[0.24em] text-[var(--studio-gold)] uppercase">
                      Ver servicio →
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="metodo" className="relative bg-[var(--studio-paper)] px-5 py-24 text-[var(--studio-text)] md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
            >
              <p className="mb-4 text-[0.68rem] font-black tracking-[0.34em] text-[var(--studio-indigo)] uppercase">
                Metodo
              </p>
              <h2 className="font-display text-[2.55rem] leading-[1.02] md:text-[3.8rem]">
                Primero orden. Despues diseño. Luego conversion.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[var(--studio-text)]/68">
                Una web bonita ayuda. Una web bonita conectada a un sistema ayuda mucho mas. Por eso el proceso empieza con arquitectura y termina con medicion.
              </p>
            </motion.div>

            <div className="grid gap-3">
              {method.map((step, index) => (
                <motion.article
                  key={step.number}
                  custom={index}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-80px' }}
                  variants={fadeUp}
                  className="grid gap-4 rounded-[10px] border border-[var(--studio-text)]/10 bg-white/58 p-5 shadow-[0_16px_40px_rgba(11,16,32,0.06)] md:grid-cols-[4rem_1fr]"
                >
                  <p className="font-display text-3xl text-[var(--studio-gold)]">{step.number}</p>
                  <div>
                    <h3 className="text-lg font-black">{step.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[var(--studio-text)]/68">{step.text}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="px-5 py-24 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <SectionHeading
            eyebrow="Portfolio"
            title="La prueba no tiene que gritar. Tiene que sostenerse."
            text="Mientras crecen los casos publicos, el sitio aprovecha materiales B2B reales: portfolio, brochure, propuestas y proyectos propios como prueba de criterio."
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="grid gap-4"
          >
            {[
              ['Portfolio completo', 'Sitios, apps, IA, documentacion tecnica y experiencia profesional.', '/portfolio'],
              ['Casos y propuestas', 'Material comercial real para demostrar proceso, alcance y forma de trabajo.', '/casos-exito'],
              ['CV tecnico', 'Stack, experiencia, idiomas y trayectoria profesional de Evelyn.', '/cv'],
            ].map(([title, text, href]) => (
              <Link
                key={title}
                href={href}
                className="group flex items-center justify-between gap-6 rounded-[12px] border border-[var(--studio-paper)]/10 bg-[var(--studio-paper)]/[0.045] p-5 transition-colors hover:border-[var(--studio-gold)]/45 hover:bg-[var(--studio-paper)]/[0.07]"
              >
                <span>
                  <span className="block font-display text-2xl text-[var(--studio-paper)]">{title}</span>
                  <span className="mt-2 block text-sm leading-6 text-[var(--studio-paper)]/58">{text}</span>
                </span>
                <span className="text-2xl text-[var(--studio-gold)] transition-transform group-hover:translate-x-1" aria-hidden>
                  →
                </span>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="productos" className="relative overflow-hidden bg-[var(--studio-night)] px-5 py-24 md:px-8 lg:px-12">
        <div className="pointer-events-none absolute top-0 right-0 h-[32rem] w-[32rem] translate-x-1/3 rounded-full bg-[var(--studio-gold)]/10 blur-[100px]" aria-hidden />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Productos digitales"
            title="Libros, guias y recursos como una linea editorial vendible."
            text="Elara Nova no desaparece: se convierte en biblioteca y producto. Menos ruido mistico en la home, mas claridad sobre que se puede descargar, comprar o aprender."
          />

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {products.map((product, index) => (
              <motion.article
                key={product.title}
                custom={index}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                className="rounded-[12px] border border-[var(--studio-gold)]/20 bg-[var(--studio-ink)]/62 p-6"
              >
                <p className="text-[0.64rem] font-black tracking-[0.25em] text-[var(--studio-gold)] uppercase">{product.meta}</p>
                <h3 className="mt-5 font-display text-3xl">{product.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--studio-paper)]/62">{product.text}</p>
              </motion.article>
            ))}
          </div>

          <Link
            href="/universo"
            className="mt-10 inline-flex min-h-12 items-center justify-center rounded-[10px] border border-[var(--studio-gold)]/45 px-6 py-3 text-[0.76rem] font-black tracking-[0.22em] text-[var(--studio-gold)] uppercase transition-colors hover:bg-[var(--studio-gold)] hover:text-[var(--studio-ink)]"
          >
            Ver biblioteca actual
          </Link>
        </div>
      </section>

      <section id="sobre" className="bg-[var(--studio-paper)] px-5 py-24 text-[var(--studio-text)] md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
            className="relative mx-auto w-full max-w-[28rem]"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[12px] border border-[var(--studio-text)]/12 bg-white shadow-[0_28px_70px_rgba(11,16,32,0.14)]">
              <Image
                src="/_assets/photos/evelyn_pro_perfil.jpg"
                alt="Retrato profesional de Evelyn Patino"
                fill
                sizes="(max-width: 1024px) 90vw, 28rem"
                className="object-cover object-center"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <p className="mb-4 text-[0.68rem] font-black tracking-[0.34em] text-[var(--studio-indigo)] uppercase">
              Sobre Evelyn
            </p>
            <h2 className="font-display text-[2.7rem] leading-[1.02] md:text-[4rem]">
              Ingeniera de software con ojo de diseño y hambre de sistemas utiles.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-8 text-[var(--studio-text)]/70 md:text-lg">
              <p>
                Vengo de seis años en banca, donde los detalles no son decoracion: son estabilidad, confianza y dinero real. Ese criterio lo llevo a cada web, automatizacion y landing.
              </p>
              <p>
                Soy de Medellin, vivo en Suiza y trabajo para marcas hispanas que quieren verse profesionales sin perder humanidad. No hay agencia gigante detras: hay criterio, ejecucion y cuidado.
              </p>
            </div>
            <blockquote className="mt-8 border-l-2 border-[var(--studio-gold)] pl-5 font-serif text-2xl italic leading-9 text-[var(--studio-text)]">
              Pienso como diseñadora, construyo como ingeniera y mido como negocio.
            </blockquote>
          </motion.div>
        </div>
      </section>

      <section id="contacto" className="relative px-5 py-24 md:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl rounded-[14px] border border-[var(--studio-gold)]/25 bg-[var(--studio-paper)]/[0.06] p-7 text-center backdrop-blur-xl md:p-12">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <p className="mb-4 text-[0.68rem] font-black tracking-[0.34em] text-[var(--studio-gold)] uppercase">
              Siguiente paso
            </p>
            <h2 className="font-display text-[2.55rem] leading-[1.02] md:text-[4rem]">
              Cuentame que quieres construir.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--studio-paper)]/68 md:text-lg">
              Si tienes una idea, una web que ya no representa tu negocio o procesos que te estan quitando tiempo, empezamos por ordenar el sistema.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <TrackedLink
                href="/descubrimiento"
                tracking={{ event: 'cta_click', category: 'lead', label: 'home_final_cotizar' }}
                className="inline-flex min-h-12 items-center justify-center rounded-[10px] bg-[var(--studio-gold)] px-6 py-3 text-[0.78rem] font-black tracking-[0.22em] text-[var(--studio-ink)] uppercase transition-transform hover:-translate-y-0.5"
              >
                Cotizar mi proyecto
              </TrackedLink>
              <a
                href="mailto:evelynpatildr@gmail.com?subject=Proyecto%20digital%20con%20La%20Aranoa"
                className="inline-flex min-h-12 items-center justify-center rounded-[10px] border border-[var(--studio-paper)]/18 px-6 py-3 text-[0.78rem] font-bold tracking-[0.22em] text-[var(--studio-paper)] uppercase transition-colors hover:border-[var(--studio-gold)]/60"
              >
                Escribir por email
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-[var(--studio-paper)]/10 px-5 py-10 md:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 text-sm text-[var(--studio-paper)]/55 md:flex-row md:items-center md:justify-between">
          <p>La Aranoa Studio · Evelyn Patino · 2026</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/portfolio" className="hover:text-[var(--studio-gold)]">Portfolio</Link>
            <Link href="/linktree" className="hover:text-[var(--studio-gold)]">Links</Link>
            <Link href="/universo" className="hover:text-[var(--studio-gold)]">Biblioteca Elara</Link>
            <Link href="/legal" className="hover:text-[var(--studio-gold)]">Legal</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
