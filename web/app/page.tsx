import Image from 'next/image'
import Link from 'next/link'
import { TrackedLink } from '@/components/tracked-link'

type Product = {
  title: string
  label: string
  description: string
  cta: string
  href: string
  image: string
}

type Course = {
  title: string
  description: string
  image: string
}

type Service = {
  title: string
  description: string
}

const products: readonly Product[] = [
  {
    title: '7 Dias de Elara',
    label: 'Entrada gratuita',
    description: 'Un lead magnet suave para iniciar el regreso a ti con rituales simples, escritura y presencia.',
    cta: 'Descargar',
    href: '/lead-magnet/7-cartas.pdf',
    image: '/images/elara-journal.png',
  },
  {
    title: 'Ciclo Nova del Regreso',
    label: 'E-book principal',
    description: 'El primer libro pago de Elara: cuatro estaciones para volver a sostenerte sin ruido ni formulas vacias.',
    cta: 'Ver universo',
    href: '/universo',
    image: '/images/ciclos-lunares-rituales.png',
  },
  {
    title: 'Workbook y audios',
    label: 'En preparacion',
    description: 'Material imprimible y acompanamiento en audio para convertir el libro en practica semanal.',
    cta: 'Recibir novedades',
    href: '#contacto',
    image: '/images/elara-aprendiendo.png',
  },
]

const courses: readonly Course[] = [
  {
    title: 'Cursos de autoconocimiento',
    description: 'Experiencias digitales cortas, visuales y accionables para acompanarte sin volverse otra tarea pesada.',
    image: '/images/elara-cursos.png',
  },
  {
    title: 'Rituales y herramientas',
    description: 'Plantillas, audios, ejercicios y objetos digitales pensados como biblioteca viva de Elara.',
    image: '/images/herramienta-oraculo.png',
  },
]

const services: readonly Service[] = [
  {
    title: 'Sitios web profesionales',
    description: 'Casas digitales para marcas que necesitan verse solidas, explicar su oferta y vender confianza.',
  },
  {
    title: 'Automatizaciones',
    description: 'Formularios, emails, hojas, notificaciones y flujos para dejar de sostenerlo todo manualmente.',
  },
  {
    title: 'Google Ads y redes',
    description: 'Campanas y contenidos conectados a paginas, medicion y una promesa clara.',
  },
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.68rem] font-black tracking-[0.26em] text-[var(--editorial-gold)] uppercase">
      {children}
    </p>
  )
}

function SectionHeader({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string
  title: string
  text: string
}) {
  return (
    <div className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 font-display text-[2.35rem] leading-[1.02] text-[var(--editorial-ink)] md:text-[4.25rem]">
        {title}
      </h2>
      <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--editorial-cacao)] md:text-lg">
        {text}
      </p>
    </div>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--editorial-smoke)] text-[var(--editorial-ink)]">
      <section id="inicio" className="relative isolate px-5 pt-28 pb-16 md:px-8 lg:px-12">
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,var(--editorial-smoke)_0%,var(--editorial-ivory)_46%,#D8D0C8_100%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_24%_14%,rgba(74,45,87,0.22),transparent_32%),radial-gradient(circle_at_74%_18%,rgba(107,81,71,0.2),transparent_30%)]" />

        <div className="mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl items-center gap-12 lg:grid-cols-[0.98fr_1.02fr]">
          <div>
            <Eyebrow>Elara Nova</Eyebrow>
            <h1 className="mt-5 max-w-4xl font-display text-[3.45rem] leading-[0.92] text-[var(--editorial-ink)] md:text-[5.7rem] xl:text-[6.8rem]">
              Mira todo lo que siempre fuiste capaz de ser.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--editorial-cacao)] md:text-xl">
              Una casa digital para volver a ti: e-books, cursos, oraculo y herramientas creadas con belleza, estrategia y una obsesion suave por los detalles.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#productos"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--editorial-plum)] px-6 py-3 text-[0.78rem] font-black tracking-[0.2em] text-[var(--editorial-ivory)] uppercase transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[var(--editorial-gold)]"
              >
                Entrar al universo
              </Link>
              <Link
                href="#trabaja"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--editorial-plum)]/25 bg-[var(--editorial-ivory)] px-6 py-3 text-[0.78rem] font-black tracking-[0.2em] text-[var(--editorial-plum)] uppercase transition-colors hover:border-[var(--editorial-plum)]"
              >
                Trabaja conmigo
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[35rem]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] border border-[var(--editorial-gold)]/35 bg-[var(--editorial-aubergine)] shadow-[0_34px_90px_rgba(43,23,53,0.28)]">
              <Image
                src="/elara/avatar/elara.jpg"
                alt="Elara Nova en una composicion editorial"
                fill
                priority
                sizes="(max-width: 1024px) 92vw, 35rem"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(43,23,53,0.08)_0%,rgba(43,23,53,0.78)_100%)]" />
              <div className="absolute right-5 bottom-5 left-5 rounded-[14px] border border-[var(--editorial-ivory)]/18 bg-[var(--editorial-aubergine)]/82 p-5 text-[var(--editorial-ivory)] backdrop-blur-xl">
                <p className="text-[0.62rem] font-bold tracking-[0.24em] text-[var(--editorial-gold)] uppercase">
                  Casa editorial viva
                </p>
                <p className="mt-2 font-serif text-xl italic leading-7">
                  Productos, rituales y sistemas digitales bajo una misma sensibilidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="productos" className="px-5 py-24 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Productos digitales"
            title="E-books y recursos que no son relleno: son la biblioteca de Elara."
            text="La linea editorial vuelve al centro. Cada producto debe sentirse coleccionable, util y conectado al camino de la marca."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.title}
                className="group overflow-hidden rounded-[18px] border border-[var(--editorial-stone)] bg-[var(--editorial-ivory)] shadow-[0_24px_70px_rgba(24,19,26,0.08)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--editorial-aubergine)]">
                  <Image
                    src={product.image}
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 92vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_35%,rgba(43,23,53,0.62)_100%)]" />
                </div>
                <div className="p-6">
                  <p className="text-[0.62rem] font-black tracking-[0.22em] text-[var(--editorial-gold)] uppercase">
                    {product.label}
                  </p>
                  <h3 className="mt-3 font-display text-3xl leading-none text-[var(--editorial-plum)]">
                    {product.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--editorial-cacao)]">
                    {product.description}
                  </p>
                  <Link
                    href={product.href}
                    className="mt-6 inline-flex min-h-11 items-center rounded-full border border-[var(--editorial-plum)]/25 px-4 text-[0.68rem] font-black tracking-[0.18em] text-[var(--editorial-plum)] uppercase transition-colors hover:bg-[var(--editorial-plum)] hover:text-[var(--editorial-ivory)]"
                  >
                    {product.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cursos" className="bg-[var(--editorial-ivory)] px-5 py-24 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeader
            eyebrow="Cursos y experiencias"
            title="Aprender tambien puede sentirse como entrar a una habitacion bonita."
            text="Esta seccion queda preparada para cursos, workshops, audios y experiencias. No se esconde: se ordena como una linea futura de productos."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {courses.map((course) => (
              <article key={course.title} className="overflow-hidden rounded-[18px] border border-[var(--editorial-stone)] bg-[var(--editorial-smoke)]">
                <div className="relative aspect-[5/4]">
                  <Image src={course.image} alt="" fill sizes="(max-width: 1024px) 92vw, 28vw" className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-3xl text-[var(--editorial-plum)]">{course.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--editorial-cacao)]">{course.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="oraculo" className="relative overflow-hidden bg-[var(--editorial-aubergine)] px-5 py-24 text-[var(--editorial-ivory)] md:px-8 lg:px-12">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_20%_20%,var(--editorial-lavender),transparent_28%),radial-gradient(circle_at_80%_30%,var(--editorial-gold),transparent_24%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] border border-[var(--editorial-gold)]/35">
            <Image src="/images/oraculo-maestra.png" alt="" fill sizes="(max-width: 1024px) 92vw, 44vw" className="object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(43,23,53,0.72),rgba(43,23,53,0.12))]" />
          </div>
          <div>
            <Eyebrow>Oraculo</Eyebrow>
            <h2 className="mt-4 font-display text-[2.7rem] leading-[1] md:text-[4.6rem]">
              Una senal pequena para volver a escucharte.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--editorial-lavender)]">
              El oraculo sigue siendo un gesto de marca, pero ahora acompana a los productos y a la comunidad en vez de ocuparlo todo.
            </p>
            <Link
              href="/oraculo"
              className="mt-8 inline-flex min-h-12 items-center rounded-full bg-[var(--editorial-gold)] px-6 text-[0.78rem] font-black tracking-[0.2em] text-[var(--editorial-aubergine)] uppercase"
            >
              Abrir oraculo
            </Link>
          </div>
        </div>
      </section>

      <section id="trabaja" className="px-5 py-24 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeader
              eyebrow="Trabaja conmigo"
              title="La parte profesional no reemplaza a Elara. La sostiene."
              text="Construyo sistemas digitales para marcas que necesitan verse mejor, vender con mas claridad y dejar de hacer todo manual."
            />
            <TrackedLink
              href="/descubrimiento"
              tracking={{ event: 'cta_click', category: 'lead', label: 'home_trabaja_diagnostico' }}
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--editorial-cacao)] px-6 text-[0.78rem] font-black tracking-[0.2em] text-[var(--editorial-ivory)] uppercase"
            >
              Solicitar diagnostico
            </TrackedLink>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="rounded-[18px] border border-[var(--editorial-stone)] bg-[var(--editorial-ivory)] p-6">
                <h3 className="font-display text-2xl leading-none text-[var(--editorial-plum)]">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[var(--editorial-cacao)]">{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-[var(--editorial-ivory)] px-5 py-24 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[18px] border border-[var(--editorial-stone)]">
            <Image src="/_assets/photos/evelyn_pro_hero.jpg" alt="Evelyn Patino" fill sizes="(max-width: 1024px) 92vw, 34vw" className="object-cover" />
          </div>
          <div>
            <Eyebrow>Evelyn + Elara</Eyebrow>
            <h2 className="mt-4 font-display text-[2.6rem] leading-[1] text-[var(--editorial-ink)] md:text-[4.8rem]">
              Belleza, tecnica y negocio en una misma mesa.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--editorial-cacao)]">
              Elara es la casa creativa. Evelyn es la ingeniera que la construye y tambien acompana a otras marcas a ordenar su presencia digital con criterio visual, automatizacion y medicion.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/sobre-elara" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--editorial-plum)]/25 px-6 text-[0.78rem] font-black tracking-[0.2em] text-[var(--editorial-plum)] uppercase">
                Sobre Elara
              </Link>
              <Link href="/trabaja-conmigo" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--editorial-cacao)]/25 px-6 text-[0.78rem] font-black tracking-[0.2em] text-[var(--editorial-cacao)] uppercase">
                Servicios
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="px-5 py-24 md:px-8 lg:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>Proxima apertura</Eyebrow>
          <h2 className="mt-4 font-display text-[2.8rem] leading-[1] md:text-[5rem]">
            Primero ordenamos la casa. Luego volvemos a abrir.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--editorial-cacao)]">
            El sitio seguira en construccion hasta que esta estructura editorial este lista. Para proyectos, escribe o solicita diagnostico.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackedLink
              href="/descubrimiento"
              tracking={{ event: 'cta_click', category: 'lead', label: 'home_footer_diagnostico' }}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--editorial-plum)] px-6 text-[0.78rem] font-black tracking-[0.2em] text-[var(--editorial-ivory)] uppercase"
            >
              Solicitar diagnostico
            </TrackedLink>
            <a href="mailto:elaranova.17@gmail.com" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--editorial-stone)] px-6 text-[0.78rem] font-black tracking-[0.2em] text-[var(--editorial-cacao)] uppercase">
              Escribir por email
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
