import Image from 'next/image'
import Link from 'next/link'
import { TrackedLink } from '@/components/tracked-link'

type Step = {
  number: string
  title: string
  text: string
  image: string
}

type Offer = {
  title: string
  eyebrow: string
  text: string
  image: string
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
    image: '/images/herramienta-proposito.png',
  },
  {
    number: '02',
    title: 'Crear',
    text: 'Sitio web, producto digital o pagina de venta con estructura.',
    image: '/images/circulo-estudio.png',
  },
  {
    number: '03',
    title: 'Automatizar',
    text: 'Procesos, formularios, emails y medicion conectados.',
    image: '/images/herramienta-oraculo.png',
  },
  {
    number: '04',
    title: 'Monetizar',
    text: 'Cursos, libros, servicios digitales y campanas con direccion.',
    image: '/images/elara-cursos.png',
  },
]

const offers: readonly Offer[] = [
  {
    title: 'Sitios web empresariales',
    eyebrow: 'Presencia',
    text: 'Arquitectura, direccion visual y narrativa para que una empresa se vea lista para cobrar mejor.',
    image: '/images/circulo-estudio.png',
    cta: 'Ver servicio',
    href: '/trabaja-conmigo',
  },
  {
    title: 'Paginas de venta',
    eyebrow: 'Conversion',
    text: 'Landing pages con promesa clara, prueba, objeciones y recorrido de compra sin ruido.',
    image: '/images/elara-journal.png',
    cta: 'Ver servicio',
    href: '/trabaja-conmigo',
  },
  {
    title: 'Automatizacion de procesos',
    eyebrow: 'Sistema',
    text: 'Formularios, emails, hojas y alertas para dejar de sostener todo a mano.',
    image: '/images/herramienta-calendario-lunar.png',
    cta: 'Consultar',
    href: '/descubrimiento',
  },
  {
    title: 'Google Ads + analitica',
    eyebrow: 'Traccion',
    text: 'Campanas conectadas a paginas, medicion y una oferta que tenga sentido antes de invertir.',
    image: '/images/herramienta-proposito.png',
    cta: 'Ver servicio',
    href: '/trabaja-conmigo',
  },
  {
    title: 'Crecimiento en redes sociales',
    eyebrow: 'Contenido',
    text: 'Ideas, piezas y secuencias que preparan a la audiencia antes de vender.',
    image: '/images/elara-pintando.png',
    cta: 'Paquetes',
    href: '/descubrimiento',
  },
  {
    title: 'Cursos y libros digitales',
    eyebrow: 'Elara',
    text: 'La biblioteca de la marca: ebooks, cursos, oraculo y recursos coleccionables.',
    image: '/images/elara-cursos.png',
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
      <section id="inicio" className="relative isolate px-5 pt-28 pb-16 md:px-8 lg:px-12">
        <Image
          src="/images/hero-portal-lago.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="absolute inset-0 -z-30 object-cover opacity-30"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(248,243,234,0.92)_0%,rgba(231,225,220,0.9)_58%,var(--editorial-smoke)_100%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-36 bg-[linear-gradient(180deg,var(--editorial-aubergine),rgba(43,23,53,0))]" />
        <div className="pointer-events-none absolute left-1/2 top-36 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-[50%] border border-[var(--editorial-gold)]/20" />

        <div className="mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl items-center gap-10 lg:grid-cols-[0.94fr_1.06fr]">
          <div className="relative z-10 max-w-3xl pt-8 lg:pt-0">
            <div className="mb-8 flex items-center gap-4">
              <Image
                src="/images/sello-elara-nova.png"
                alt=""
                width={62}
                height={62}
                className="h-14 w-14 object-contain opacity-90"
              />
              <div>
                <Eyebrow>Elara Nova</Eyebrow>
                <p className="mt-2 text-sm leading-6 text-[var(--editorial-cacao)]">
                  Casa digital de productos, servicios y sistemas.
                </p>
              </div>
            </div>
            <h1 className="max-w-4xl font-display text-[3.45rem] leading-[0.88] md:text-[6.2rem] xl:text-[7rem]">
              Tu negocio online, hecho realidad.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-[var(--editorial-cacao)] md:text-lg">
              Construyo el lugar donde tu marca se ve profesional, tus ideas se convierten en productos y tus procesos dejan de depender de estar todo el dia encima.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <TrackedLink
                href="/descubrimiento"
                tracking={{ event: 'cta_click', category: 'lead', label: 'home_hero_diagnostico' }}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--editorial-plum)] px-6 py-3 text-[0.78rem] font-black tracking-[0.2em] text-[var(--editorial-ivory)] uppercase shadow-[0_18px_42px_rgba(74,45,87,0.24)] transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[var(--editorial-gold)]"
              >
                Solicitar diagnostico
              </TrackedLink>
              <Link
                href="#productos"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--editorial-cacao)]/28 bg-[var(--editorial-ivory)]/78 px-6 py-3 text-[0.78rem] font-black tracking-[0.2em] text-[var(--editorial-cacao)] uppercase backdrop-blur transition-colors hover:border-[var(--editorial-plum)] hover:text-[var(--editorial-plum)]"
              >
                Ver universo
              </Link>
            </div>

            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {['Web + venta', 'Automatizacion', 'Productos digitales'].map((item) => (
                <div
                  key={item}
                  className="border-t border-[var(--editorial-gold)]/45 pt-3 text-[0.68rem] font-black tracking-[0.18em] text-[var(--editorial-cacao)] uppercase"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[35rem] lg:min-h-[44rem]">
            <div className="absolute left-[2%] top-[8%] z-10 hidden rounded-full border border-[var(--editorial-gold)]/45 bg-[var(--editorial-ivory)]/70 px-5 py-3 text-[0.62rem] font-black tracking-[0.22em] text-[var(--editorial-cacao)] uppercase shadow-[0_16px_50px_rgba(43,23,53,0.12)] backdrop-blur md:block">
              Estrategia con alma
            </div>

            <EditorialFrame className="absolute left-0 top-8 h-[28rem] w-[62%] rotate-[-2deg] rounded-[34px]">
            <Image
              src="/_assets/photos/evelyn_pro_hero.jpg"
              alt="Evelyn Patino"
              fill
              priority
              sizes="(max-width: 1024px) 60vw, 34vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,243,234,0.04),rgba(43,23,53,0.52))]" />
            <div className="absolute right-5 bottom-5 left-5 rounded-[20px] border border-[var(--editorial-ivory)]/20 bg-[var(--editorial-aubergine)]/78 p-5 text-[var(--editorial-ivory)] backdrop-blur-xl">
              <p className="text-[0.62rem] font-black tracking-[0.24em] text-[var(--editorial-gold)] uppercase">
                Evelyn
              </p>
              <p className="mt-2 font-serif text-2xl italic leading-7">
                Estrategia, diseno y automatizacion.
              </p>
            </div>
          </EditorialFrame>

            <EditorialFrame className="absolute right-0 top-24 h-[24rem] w-[48%] rotate-[2deg] rounded-[34px] bg-[var(--editorial-aubergine)]">
            <Image
              src="/elara/avatar/elara.jpg"
              alt="Elara Nova"
              fill
              priority
              sizes="(max-width: 1024px) 48vw, 25vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,243,234,0.02),rgba(43,23,53,0.7))]" />
            <div className="absolute right-4 bottom-4 left-4 rounded-[18px] border border-[var(--editorial-ivory)]/20 bg-[var(--editorial-aubergine)]/80 p-4 text-[var(--editorial-ivory)] backdrop-blur-xl">
              <p className="text-[0.62rem] font-black tracking-[0.24em] text-[var(--editorial-gold)] uppercase">
                Elara
              </p>
              <p className="mt-2 font-serif text-xl italic leading-7">
                Voz, mundo y memoria de marca.
              </p>
            </div>
          </EditorialFrame>

            <div className="absolute bottom-8 left-[24%] right-[8%] rounded-[28px] border border-[var(--editorial-gold)]/35 bg-[var(--editorial-ivory)]/84 p-5 shadow-[0_28px_80px_rgba(43,23,53,0.18)] backdrop-blur">
              <div className="flex items-center gap-4">
                <Image
                  src="/brand/firma-elara-morada.png"
                  alt="Elara Nova"
                  width={156}
                  height={70}
                  className="h-12 w-auto object-contain"
                />
                <p className="text-sm leading-6 text-[var(--editorial-cacao)]">
                  La parte profesional no reemplaza a Elara. La sostiene.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="De la idea al ingreso" className="px-5 pb-24 pt-8 md:px-8 lg:px-12">
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
            <div className="pointer-events-none absolute left-[8%] right-[8%] top-20 hidden h-px bg-[linear-gradient(90deg,transparent,var(--editorial-gold),var(--editorial-cacao),var(--editorial-gold),transparent)] lg:block" />
            {steps.map((step) => (
              <article key={step.number} className="relative rounded-[28px] border border-[var(--editorial-stone)]/70 bg-[var(--editorial-ivory)]/72 p-5 text-center shadow-[0_20px_60px_rgba(43,23,53,0.07)] backdrop-blur">
                <div className="mx-auto flex h-32 w-32 items-center justify-center overflow-hidden rounded-full border border-[var(--editorial-gold)]/70 bg-[var(--editorial-aubergine)]">
                  <Image
                    src={step.image}
                    alt=""
                    width={148}
                    height={148}
                    className="h-full w-full object-cover opacity-95"
                  />
                </div>
                <span className="mt-5 inline-flex rounded-full bg-[var(--editorial-aubergine)] px-4 py-2 font-display text-xl text-[var(--editorial-gold)]">
                  {step.number}
                </span>
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

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-6">
            {offers.map((offer, index) => (
              <Link
                key={offer.title}
                href={offer.href}
                className={[
                  'group relative min-h-72 overflow-hidden rounded-[26px] border border-[var(--editorial-ivory)]/12 bg-[var(--editorial-ivory)]/[0.08] p-6 backdrop-blur-xl transition-transform hover:-translate-y-1',
                  index === 0 || index === 5 ? 'xl:col-span-3' : 'xl:col-span-2',
                ].join(' ')}
              >
                <Image
                  src={offer.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 92vw, 33vw"
                  className="object-cover opacity-30 transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(43,23,53,0.24),rgba(43,23,53,0.92))]" />
                <div className="absolute -right-8 -top-10 h-32 w-44 rounded-[50%] bg-[var(--editorial-gold)]/16 transition-transform group-hover:scale-110" />
                <p className="relative text-[0.62rem] font-black tracking-[0.24em] text-[var(--editorial-gold)] uppercase">
                  {offer.eyebrow}
                </p>
                <h3 className="relative mt-7 max-w-xs font-display text-[2.15rem] leading-[0.95]">
                  {offer.title}
                </h3>
                <p className="relative mt-5 max-w-sm text-sm leading-6 text-[var(--editorial-lavender)]">
                  {offer.text}
                </p>
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

          <div className="relative grid gap-5 md:grid-cols-2">
            <Image
              src="/elara/stickers/mariposa.png"
              alt=""
              width={92}
              height={92}
              className="pointer-events-none absolute -right-8 -top-10 z-10 h-20 w-20 rotate-12 object-contain opacity-90"
            />
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
          <div className="relative">
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
            <div className="absolute -bottom-8 right-8 hidden w-44 rounded-[26px] border border-[var(--editorial-gold)]/55 bg-[var(--editorial-ivory)] p-3 shadow-[0_22px_70px_rgba(43,23,53,0.18)] md:block">
              <Image
                src="/images/elara-meditando.png"
                alt=""
                width={260}
                height={260}
                className="aspect-square w-full rounded-[18px] object-cover"
              />
            </div>
          </div>
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
                <p className="font-serif text-2xl italic leading-8 text-[var(--editorial-plum)]">
                  &ldquo;{item.quote}&rdquo;
                </p>
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
