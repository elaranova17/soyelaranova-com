import Image from 'next/image'
import Link from 'next/link'
import { TrackedLink } from '@/components/tracked-link'

type Step = {
  number: string
  title: string
  text: string
}

type Offer = {
  title: string
  eyebrow: string
  cta: string
  href: string
}

type Proof = {
  quote: string
  label: string
}

const steps: readonly Step[] = [
  {
    number: '01',
    title: 'Descubrir',
    text: 'Auditoria de tu idea, oferta o modelo de negocio.',
  },
  {
    number: '02',
    title: 'Crear',
    text: 'Sitio web, producto digital o pagina de venta con estructura.',
  },
  {
    number: '03',
    title: 'Automatizar',
    text: 'Procesos, formularios, emails y medicion conectados.',
  },
  {
    number: '04',
    title: 'Monetizar',
    text: 'Cursos, libros, servicios digitales y campanas con direccion.',
  },
]

const offers: readonly Offer[] = [
  {
    title: 'Sitios web empresariales',
    eyebrow: 'Presencia',
    cta: 'Ver servicio',
    href: '/trabaja-conmigo',
  },
  {
    title: 'Paginas de venta',
    eyebrow: 'Conversion',
    cta: 'Ver servicio',
    href: '/trabaja-conmigo',
  },
  {
    title: 'Automatizacion de procesos',
    eyebrow: 'Sistema',
    cta: 'Consultar',
    href: '/descubrimiento',
  },
  {
    title: 'Google Ads + analitica',
    eyebrow: 'Traccion',
    cta: 'Ver servicio',
    href: '/trabaja-conmigo',
  },
  {
    title: 'Crecimiento en redes sociales',
    eyebrow: 'Contenido',
    cta: 'Paquetes',
    href: '/descubrimiento',
  },
  {
    title: 'Cursos y libros digitales',
    eyebrow: 'Elara',
    cta: 'Ver catalogo',
    href: '/universo',
  },
]

const proof: readonly Proof[] = [
  {
    quote: 'Ahora mi oferta se entiende sin tener que explicarlo todo por mensaje.',
    label: 'Claridad',
  },
  {
    quote: 'Pase de improvisar contenido a tener una ruta para captar y responder.',
    label: 'Sistema',
  },
  {
    quote: 'La marca se siente mas mia, pero tambien mas lista para vender.',
    label: 'Presencia',
  },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={[
        'text-[0.68rem] font-black tracking-[0.28em] uppercase',
        light ? 'text-[var(--editorial-gold)]' : 'text-[var(--editorial-cacao)]',
      ].join(' ')}
    >
      {children}
    </p>
  )
}

function EditorialFrame({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={[
        'relative overflow-hidden rounded-[30px] border border-[var(--editorial-gold)]/65 bg-[var(--editorial-ivory)] shadow-[0_30px_90px_rgba(43,23,53,0.16)]',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  )
}

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[var(--editorial-smoke)] text-[var(--editorial-ink)]">
      <section id="inicio" className="relative isolate px-5 pt-28 pb-20 md:px-8 lg:px-12">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(135deg,#F4EEE5_0%,#E7E1DC_44%,#D8D0C8_100%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[46rem] bg-[radial-gradient(circle_at_12%_18%,rgba(74,45,87,0.18),transparent_28%),radial-gradient(circle_at_88%_22%,rgba(184,154,88,0.28),transparent_24%),radial-gradient(circle_at_50%_72%,rgba(107,81,71,0.16),transparent_32%)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-45 [background-image:radial-gradient(circle,rgba(184,154,88,0.42)_0_2px,transparent_3px)] [background-size:86px_86px]" />

        <div className="mx-auto grid min-h-[calc(100svh-8rem)] max-w-7xl items-center gap-8 lg:grid-cols-[0.84fr_1.02fr_0.84fr]">
          <EditorialFrame className="order-2 aspect-[4/5] lg:order-1">
            <Image
              src="/_assets/photos/evelyn_pro_hero.jpg"
              alt="Evelyn Patino"
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 28vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,243,234,0.08),rgba(43,23,53,0.58))]" />
            <div className="absolute right-5 bottom-5 left-5 rounded-[18px] border border-[var(--editorial-ivory)]/20 bg-[var(--editorial-aubergine)]/78 p-5 text-[var(--editorial-ivory)] backdrop-blur-xl">
              <p className="text-[0.62rem] font-black tracking-[0.24em] text-[var(--editorial-gold)] uppercase">
                Evelyn
              </p>
              <p className="mt-2 font-serif text-xl italic leading-7">
                Ingenieria, criterio visual y estrategia para construir con calma.
              </p>
            </div>
          </EditorialFrame>

          <div className="order-1 text-center lg:order-2">
            <Eyebrow>Elara Nova</Eyebrow>
            <h1 className="mx-auto mt-5 max-w-4xl font-display text-[3.2rem] leading-[0.9] md:text-[5.4rem] xl:text-[6.2rem]">
              Mira todo lo que siempre fuiste capaz de ser.
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[var(--editorial-cacao)] md:text-lg">
              E-books, cursos, oraculo y sistemas digitales para convertir una idea bonita en una casa que vende, acompana y trabaja contigo.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="#productos"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--editorial-plum)] px-6 py-3 text-[0.78rem] font-black tracking-[0.2em] text-[var(--editorial-ivory)] uppercase shadow-[0_18px_42px_rgba(74,45,87,0.24)] transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[var(--editorial-gold)]"
              >
                Entrar al universo
              </Link>
              <Link
                href="#trabaja"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--editorial-cacao)]/28 bg-[var(--editorial-ivory)]/80 px-6 py-3 text-[0.78rem] font-black tracking-[0.2em] text-[var(--editorial-cacao)] uppercase backdrop-blur transition-colors hover:border-[var(--editorial-plum)] hover:text-[var(--editorial-plum)]"
              >
                Trabaja conmigo
              </Link>
            </div>
          </div>

          <EditorialFrame className="order-3 aspect-[4/5] bg-[var(--editorial-aubergine)]">
            <Image
              src="/elara/avatar/elara.jpg"
              alt="Elara Nova"
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 28vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,243,234,0.02),rgba(43,23,53,0.7))]" />
            <div className="absolute right-5 bottom-5 left-5 rounded-[18px] border border-[var(--editorial-ivory)]/20 bg-[var(--editorial-aubergine)]/78 p-5 text-[var(--editorial-ivory)] backdrop-blur-xl">
              <p className="text-[0.62rem] font-black tracking-[0.24em] text-[var(--editorial-gold)] uppercase">
                Elara
              </p>
              <p className="mt-2 font-serif text-xl italic leading-7">
                La voz, el universo y la sensibilidad que vuelven memorable la marca.
              </p>
            </div>
          </EditorialFrame>
        </div>
      </section>

      <section aria-label="De la idea al ingreso" className="px-5 pb-24 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Eyebrow>De la idea al ingreso</Eyebrow>
            <h2 className="mt-4 font-display text-[2.4rem] leading-[1] md:text-[4.5rem]">
              Un camino de cuatro pasos.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-[var(--editorial-cacao)]">
              El mismo ritual aplicado a tu negocio: descubrir, crear, automatizar y monetizar.
            </p>
          </div>

          <div className="relative mt-14 grid gap-5 lg:grid-cols-4">
            <div className="pointer-events-none absolute left-[8%] right-[8%] top-[4.25rem] hidden h-px bg-[linear-gradient(90deg,transparent,var(--editorial-gold),var(--editorial-cacao),var(--editorial-gold),transparent)] lg:block" />
            {steps.map((step) => (
              <article key={step.number} className="relative text-center">
                <div className="mx-auto flex h-28 w-48 items-center justify-center rounded-[50%] border border-[var(--editorial-gold)]/70 bg-[var(--editorial-ivory)]/68 shadow-[0_20px_60px_rgba(43,23,53,0.08)] backdrop-blur">
                  <span className="font-display text-3xl text-[var(--editorial-gold)]">{step.number}</span>
                </div>
                <h3 className="mt-7 font-display text-3xl leading-none text-[var(--editorial-plum)]">{step.title}</h3>
                <p className="mx-auto mt-4 max-w-48 text-sm leading-6 text-[var(--editorial-cacao)]">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="productos" className="relative overflow-hidden bg-[var(--editorial-aubergine)] px-5 py-24 text-[var(--editorial-ivory)] md:px-8 lg:px-12">
        <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_15%_20%,rgba(185,161,200,0.38),transparent_26%),radial-gradient(circle_at_82%_75%,rgba(184,154,88,0.36),transparent_28%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <Eyebrow light>Lo que construyo para ti</Eyebrow>
              <h2 className="mt-4 font-display text-[2.8rem] leading-[0.95] md:text-[5rem]">
                Todo tu universo digital, en una misma mesa.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[var(--editorial-lavender)]">
              Servicios, e-books, cursos y recursos no viven separados. Se disenan como un sistema para atraer, sostener y convertir.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {offers.map((offer, index) => (
              <Link
                key={offer.title}
                href={offer.href}
                className={[
                  'group relative min-h-52 overflow-hidden rounded-[22px] border border-[var(--editorial-ivory)]/12 bg-[var(--editorial-ivory)]/[0.08] p-6 backdrop-blur-xl transition-transform hover:-translate-y-1',
                  index === 0 || index === 5 ? 'xl:min-h-64' : '',
                ].join(' ')}
              >
                <div className="absolute -right-8 -top-10 h-32 w-44 rounded-[50%] bg-[var(--editorial-gold)]/14 transition-transform group-hover:scale-110" />
                <p className="relative text-[0.62rem] font-black tracking-[0.24em] text-[var(--editorial-gold)] uppercase">
                  {offer.eyebrow}
                </p>
                <h3 className="relative mt-7 max-w-xs font-display text-[2.15rem] leading-[0.95]">
                  {offer.title}
                </h3>
                <p className="relative mt-8 text-[0.68rem] font-black tracking-[0.2em] text-[var(--editorial-gold)] uppercase">
                  {offer.cta} →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="cursos" className="bg-[var(--editorial-ivory)] px-5 py-24 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <Eyebrow>Cursos y productos</Eyebrow>
            <h2 className="mt-4 font-display text-[2.6rem] leading-[1] md:text-[4.9rem]">
              E-books, cursos y oraculo para que Elara tambien venda.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--editorial-cacao)]">
              La linea editorial tiene que sentirse coleccionable: una biblioteca bonita, util y lista para crecer a cursos, audios y experiencias.
            </p>
            <Link
              href="/universo"
              className="mt-8 inline-flex min-h-12 items-center rounded-full bg-[var(--editorial-plum)] px-6 text-[0.78rem] font-black tracking-[0.2em] text-[var(--editorial-ivory)] uppercase"
            >
              Ver catalogo
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <EditorialFrame className="aspect-[4/5]">
              <Image src="/images/ciclos-lunares-rituales.png" alt="" fill sizes="(max-width: 1024px) 92vw, 32vw" className="object-cover" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(43,23,53,0.72))]" />
              <p className="absolute bottom-6 left-6 right-6 font-display text-3xl leading-none text-[var(--editorial-ivory)]">
                Ciclo Nova del Regreso
              </p>
            </EditorialFrame>
            <div className="grid gap-5">
              <EditorialFrame className="aspect-[4/3]">
                <Image src="/images/elara-journal.png" alt="" fill sizes="(max-width: 1024px) 92vw, 28vw" className="object-cover" />
              </EditorialFrame>
              <EditorialFrame className="aspect-[4/3]">
                <Image src="/images/oraculo-maestra.png" alt="" fill sizes="(max-width: 1024px) 92vw, 28vw" className="object-cover" />
              </EditorialFrame>
            </div>
          </div>
        </div>
      </section>

      <section id="trabaja" className="px-5 py-24 md:px-8 lg:px-12">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <EditorialFrame className="aspect-[16/10]">
            <Image
              src="/_assets/photos/evelyn_pro_perfil.jpg"
              alt="Evelyn Patino"
              fill
              sizes="(max-width: 1024px) 92vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(43,23,53,0.66),transparent_58%)]" />
          </EditorialFrame>
          <div>
            <Eyebrow>Soy Evelyn. Y tambien soy Elara.</Eyebrow>
            <h2 className="mt-4 font-display text-[2.8rem] leading-[0.95] md:text-[5.2rem]">
              La intuicion que imagina. La ingenieria que lo vuelve sistema.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--editorial-cacao)]">
              Empece creando contenido espiritual. Hoy ayudo a emprendedoras a construir negocios digitales que funcionan sin perder la sensibilidad que los hizo nacer.
            </p>
            <TrackedLink
              href="/descubrimiento"
              tracking={{ event: 'cta_click', category: 'lead', label: 'home_trabaja_diagnostico' }}
              className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--editorial-cacao)] px-6 text-[0.78rem] font-black tracking-[0.2em] text-[var(--editorial-ivory)] uppercase"
            >
              Trabaja conmigo →
            </TrackedLink>
          </div>
        </div>
      </section>

      <section id="oraculo" className="bg-[var(--editorial-ivory)] px-5 py-24 md:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <Eyebrow>Confianza</Eyebrow>
            <h2 className="mt-4 font-display text-[2.5rem] leading-[1] md:text-[4.4rem]">
              Lo que debe sentir quien entra.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {proof.map((item) => (
              <article key={item.label} className="rounded-[22px] border border-[var(--editorial-stone)] bg-[var(--editorial-smoke)] p-7 text-center shadow-[0_20px_60px_rgba(43,23,53,0.06)]">
                <p className="font-serif text-2xl italic leading-8 text-[var(--editorial-plum)]">"{item.quote}"</p>
                <p className="mt-6 text-[0.68rem] font-black tracking-[0.22em] text-[var(--editorial-gold)] uppercase">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contacto" className="px-5 py-24 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[42px] border border-[var(--editorial-gold)]/30 bg-[var(--editorial-aubergine)] px-6 py-16 text-center text-[var(--editorial-ivory)] shadow-[0_34px_90px_rgba(43,23,53,0.24)] md:px-12">
          <Eyebrow light>Consulta gratuita</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-4xl font-display text-[2.7rem] leading-[0.96] md:text-[5rem]">
            Lista para que tu universo digital empiece a trabajar por ti?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--editorial-lavender)]">
            Entramos por la belleza, pero salimos con una ruta: que construir, que automatizar y que vender primero.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <TrackedLink
              href="/descubrimiento"
              tracking={{ event: 'cta_click', category: 'lead', label: 'home_footer_diagnostico' }}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--editorial-gold)] px-7 text-[0.78rem] font-black tracking-[0.2em] text-[var(--editorial-aubergine)] uppercase"
            >
              Agenda tu diagnostico →
            </TrackedLink>
            <a
              href="mailto:elaranova.17@gmail.com"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--editorial-ivory)]/20 px-7 text-[0.78rem] font-black tracking-[0.2em] text-[var(--editorial-ivory)] uppercase"
            >
              Escribir por email
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
