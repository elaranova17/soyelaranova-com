import Image from 'next/image'
import Link from 'next/link'
import { ImmersiveStory } from '@/components/immersive-story'
import { TrackedLink } from '@/components/tracked-link'
import { serviceScenes } from '@/components/service-scenes'
import { evelynPhotos } from '@/lib/evelyn-photos'

/** Blur placeholder del hero (12×16 JPEG de evelyn-hero-ciruela) — evita el flash aubergine en primera carga */
const HERO_BLUR =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAQAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQb/xAAhEAACAgICAQUAAAAAAAAAAAABAgQRAAMFEhMhMVFx8P/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREA/9oADAMBAAIRAxEAPwALi4cWRAktt6nYtKLeul+x/fGFKQyg5R7OJCc7MhRhWl9Fp2JFXQH36nDIEKKdLrL843I5RgoFCsAxdVkN/9k='

type Service = {
  number: string
  type: string
  title: string
  description: string
  price: string
  asset: string
  format: string
  href: string
}

const services: readonly Service[] = [
  {
    number: '01',
    type: 'Producto estrella',
    title: 'Automatizaciones',
    description:
      'Conecto tus formularios, emails, WhatsApp, hojas y CRM para que cada lead se atienda solo. Recuperas horas cada semana, respondes al instante y dejas de perder ventas por contestar tarde.',
    price: 'Desde 450 €',
    asset: 'servicio-01-automatizaciones.webp',
    format: '1600 × 2000 px',
    href: '/servicios/automatizaciones',
  },
  {
    number: '02',
    type: 'Conversión',
    title: 'Landing pages y sitios web',
    description:
      'Páginas hechas para vender, no para "estar en internet": mensaje claro, rápidas y mobile-first, pensadas para convertir visitas en clientes que te escriben. Ideales para Google Ads y lanzamientos.',
    price: 'Desde 650 €',
    asset: 'servicio-02-webs.webp',
    format: '1600 × 2000 px',
    href: '/servicios/landing-pages',
  },
  {
    number: '03',
    type: 'Crecimiento',
    title: 'Google Ads y medición',
    description:
      'Campañas conectadas a landing y eventos que sí se pueden medir. Sabes qué búsquedas traen clientes y dónde estabas quemando presupuesto.',
    price: 'Setup 450 € · gestión 350 €/mes',
    asset: 'servicio-03-google-ads.webp',
    format: '1800 × 1350 px',
    href: '/servicios/google-ads',
  },
]

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`home-eyebrow ${light ? 'home-eyebrow--light' : ''}`}>
      <span aria-hidden="true" />
      {children}
    </p>
  )
}

function Photo({
  src,
  alt,
  className = '',
  priority = false,
  blurDataURL,
  children,
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
  blurDataURL?: string
  children?: React.ReactNode
}) {
  return (
    <figure className={`asset-photo ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={90}
        sizes="(max-width: 900px) 100vw, 55vw"
        {...(blurDataURL ? { placeholder: 'blur' as const, blurDataURL } : {})}
      />
      {children}
    </figure>
  )
}

export default function HomePage() {
  return (
    <main className="home-shell">
      <section id="inicio" className="home-hero">
        <div className="home-hero__copy">
          <Eyebrow>Elara Nova by Evelyn Patiño · IA y automatización para mujeres</Eyebrow>
          <h1 className="type-lockup type-lockup--glow-soft">
            <span className="type-lockup__impact">Menos a mano</span>
            <em className="type-lockup__script">más para ti</em>
          </h1>
          <p>
            Somos Elara Nova: te enseñamos a usar la IA y la automatización para quitarte de encima
            las tareas que te comen el día. Plantillas listas, tutoriales sin humo y pros y contras
            de verdad — porque la tecnología siempre fue tuya también.
          </p>
          <div className="home-actions">
            <Link href="#recursos" className="home-button home-button--primary">
              Ver las series
            </Link>
            <Link href="#oferta" className="home-button home-button--quiet">
              Trabaja con nosotras
            </Link>
          </div>
        </div>

        <Photo
          src={evelynPhotos.homeHero}
          alt="Evelyn Patiño, ingeniera de software, en su estudio"
          className="home-hero__visual"
          priority
          blurDataURL={HERO_BLUR}
        >
          <figcaption className="home-hero__caption">
            <span>Ingeniera de verdad</span>
            <i aria-hidden="true" />
            <span>Girly de verdad</span>
          </figcaption>
        </Photo>

        <p className="home-hero__note">
          8 años automatizando procesos.
          <br />
          Primero en banca. Ahora, para enseñártelo.
        </p>
      </section>

      <section className="home-thesis" aria-label="Propuesta de Elara Nova">
        <p>
          <span className="home-thesis__impact">Enseñamos</span>
          <em className="home-thesis__script">a automatizar con IA</em>
        </p>
        <p>
          <span className="home-thesis__impact">Creamos</span>
          <em className="home-thesis__script">plantillas listas para usar</em>
        </p>
        <p>
          <span className="home-thesis__impact">Construimos</span>
          <em className="home-thesis__script">sistemas que venden</em>
        </p>
      </section>

      <section id="servicios" className="home-intro">
        <div className="home-intro__lead">
          <Eyebrow>El porqué</Eyebrow>
          <h2 className="type-lockup type-lockup--glow-soft">
            <span className="type-lockup__impact">Siempre pudiste</span>
            <em className="type-lockup__script">ahora tienes cómo</em>
          </h2>
          <p className="home-intro__pitch">
            Miles de mujeres pierden horas cada día en tareas que una máquina puede hacer sola — y
            sienten que la IA les pasa por el lado. Nosotras venimos de ese mundo (8 años
            automatizando, 6 en banca) y te lo traducimos: sin humo, con pros y contras, y con
            plantillas que puedes usar hoy mismo.
          </p>
          <ul className="home-intro__proof">
            <li>Tutoriales cortos que sí se entienden.</li>
            <li>Plantillas listas para copiar, pegar y usar.</li>
            <li>Pros y contras de verdad: qué sirve y qué es puro humo.</li>
          </ul>
        </div>
        <div className="home-intro__body">
          <Eyebrow>¿Te suena?</Eyebrow>
          <div className="home-intro__services" aria-label="Señales de que esto es para ti">
            <div className="home-intro__service">
              <span>Lo haces todo a mano</span>
              <p>
                Responder lo mismo mil veces, copiar datos entre apps, vivir dentro del correo.
                Cada tarea repetida es una hora que no vuelve.
              </p>
            </div>
            <div className="home-intro__service">
              <span>La IA te suena a otro idioma</span>
              <p>
                Todo el mundo habla de ella y nadie te la explica sin humo. No necesitas ser
                ingeniera: necesitas a alguien que ya pasó por ahí y te lo cuente claro.
              </p>
            </div>
            <div className="home-intro__service">
              <span>Sientes que el tren te deja</span>
              <p>
                Los trabajos cambian y nadie te preparó para esto. Spoiler: siempre fuiste capaz —
                solo te faltaban las herramientas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ImmersiveStory />

      <section id="oferta" className="home-products">
        <header className="home-products__header">
          <div>
            <Eyebrow>Servicios · para cuando prefieres delegar</Eyebrow>
            <h2 className="type-lockup type-lockup--glow-soft">
              <span className="type-lockup__impact">Hecho por nosotras</span>
              <em className="type-lockup__script">de la A a la Z</em>
            </h2>
          </div>
          <Link href="/servicios">Ver todos los servicios</Link>
        </header>

        <div className="home-products__rail">
          {services.map((service, index) => {
            const Scene = serviceScenes[index]
            return (
              <article key={service.title} className={`home-product home-product--${index + 1}`}>
                <div className="home-product__media">
                  <Scene />
                </div>
                <div className="home-product__copy">
                  <span>{service.number}</span>
                  <p>{service.type}</p>
                  <h3>{service.title}</h3>
                  <small>{service.description}</small>
                  <Link href={service.href} className="home-product__price">
                    {service.price}
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section id="recursos" className="home-recursos">
        <div className="home-recursos__intro">
          <Eyebrow light>Las series · muy pronto en Instagram y TikTok</Eyebrow>
          <h2 className="type-lockup type-lockup--glow">
            <span className="type-lockup__impact">Aprende gratis</span>
            <em className="type-lockup__script">con nosotras</em>
          </h2>
          <p>
            Tres series con nombre propio, cada una con su promesa. Videos cortos, plantillas para
            descargar y cero drama técnico. Comenta la palabra clave de cada video y te llega el
            recurso directo.
          </p>
        </div>

        <div className="home-recursos__rail">
          <article className="home-recurso">
            <div className="home-recurso__media">
              <Image
                src="/media/recursos/recurso-ebook.webp"
                alt="Ebook y material de lectura CapCut glow chic"
                width={1024}
                height={1536}
                sizes="(max-width: 900px) 100vw, 33vw"
                className="home-recurso__img"
              />
            </div>
            <p>01 · Serie de automatización</p>
            <h3>Menos a mano</h3>
            <small>
              Tutoriales y plantillas de automatización con IA: tu correo, tus cuentas, tu Excel —
              paso a paso y listos para copiar.
            </small>
            <span className="home-recurso__link">Muy pronto ✦</span>
          </article>

          <article className="home-recurso">
            <div className="home-recurso__media">
              <Image
                src="/media/recursos/recurso-pantallas.webp"
                alt="Tablet con pantalla lista para sistema"
                width={1024}
                height={1536}
                sizes="(max-width: 900px) 100vw, 33vw"
                className="home-recurso__img"
              />
            </div>
            <p>02 · Serie de conocimiento</p>
            <h3>Lo que siempre pudiste hacer</h3>
            <small>
              Tips de IA para tu día a día, herramientas que valen la pena y las que no — con pros
              y contras de verdad.
            </small>
            <span className="home-recurso__link">Muy pronto ✦</span>
          </article>

          <article className="home-recurso">
            <div className="home-recurso__media">
              <Image
                src="/media/recursos/recurso-valor.webp"
                alt="Checklists y plantillas sobre escritorio"
                width={1024}
                height={1536}
                sizes="(max-width: 900px) 100vw, 33vw"
                className="home-recurso__img"
              />
            </div>
            <p>03 · Serie de historias</p>
            <h3>Pastoreando</h3>
            <small>
              Storytimes, viajes y la vida real detrás de la marca — construyendo todo esto en
              público, con lo que sale bien y lo que sale pastor.
            </small>
            <span className="home-recurso__link">Muy pronto ✦</span>
          </article>
        </div>
      </section>

      <section id="preanalisis" className="home-impact">
        <Eyebrow>Pre-análisis didáctico · gratis</Eyebrow>
        <h2 className="type-lockup type-lockup--center type-lockup--glow-soft">
          <span className="type-lockup__impact">Tu negocio</span>
          <em className="type-lockup__script">todavía a mano?</em>
        </h2>
        <p>
          Completa el pre-análisis y lo reviso yo, personalmente. Llego a nuestra charla con un
          diagnóstico previo de tu negocio — ese rato no se va descubriéndolo, se va resolviendo.
          Si quieres profundizar, la sesión estratégica dura 20 min y cuesta 25 CHF.
        </p>
        <TrackedLink
          href="/descubrimiento"
          tracking={{ event: 'cta_click', category: 'lead', label: 'home_impact_preanalisis' }}
          className="home-button home-button--gold"
        >
          Hacer mi pre-análisis
        </TrackedLink>
      </section>

      <section id="trabaja" className="home-work">
        <div className="home-work__stage">
          <span className="home-work__glow" aria-hidden="true" />
          <span className="home-work__frame" aria-hidden="true" />
          <Photo
            src={evelynPhotos.homeAbout}
            alt="Evelyn Patiño sonriendo"
            className="home-work__visual"
          />
          <p className="home-work__name">Evelyn Patiño</p>
        </div>
        <div className="home-work__copy">
          <Eyebrow>Sobre mí</Eyebrow>
          <h2 className="type-lockup type-lockup--glow-soft">
            <span className="type-lockup__impact">Ingeniera</span>
            <em className="type-lockup__script">con ojo estético</em>
          </h2>
          <p>
            Soy Evelyn, y Elara Nova soy yo — no una agencia con un equipo anónimo detrás. Llevo 8
            años automatizando procesos: lo que hoy el mundo hace con IA, yo lo venía haciendo a
            mano. Seis de esos años en banca,
            donde un detalle mal hecho cuesta dinero real. Lo que más me gusta es sentarme contigo,
            entender tu negocio y quitarte el trabajo repetitivo de encima.
          </p>
          <div className="home-work__proof">
            <span>8 años automatizando · 6 en banca</span>
            <span>Medellín · Europa</span>
            <span className="home-work__proof-pulse">Automatización + desarrollo + Ads</span>
          </div>
          <div className="home-work__me">
            <p>¿Quieres ver cómo trabajo yo?</p>
            <div className="home-work__links">
              <a href="/portfolio" className="home-work__link home-work__link--solid">
                Portfolio
              </a>
              <a href="/cv" className="home-work__link home-work__link--ghost">
                CV
              </a>
            </div>
          </div>
          <TrackedLink
            href="/descubrimiento"
            tracking={{ event: 'cta_click', category: 'lead', label: 'home_work_preanalisis' }}
            className="home-button home-button--primary"
          >
            Hacer mi pre-análisis
          </TrackedLink>
        </div>
      </section>

      <section id="contacto" className="home-close">
        <p>Tu negocio puede funcionar sin que estés en cada detalle. Mira lo que siempre fuiste capaz de hacer.</p>
        <h2 className="type-lockup type-lockup--center type-lockup--glow">
          <span className="type-lockup__impact">Construyamos</span>
          <em className="type-lockup__script">el sistema</em>
        </h2>
        <div className="home-actions">
          <TrackedLink
            href="/descubrimiento"
            tracking={{ event: 'cta_click', category: 'lead', label: 'home_footer_preanalisis' }}
            className="home-button home-button--gold"
          >
            Hacer mi pre-análisis
          </TrackedLink>
          <a href="mailto:elaranova.17@gmail.com" className="home-button home-button--light">
            Escribir por email
          </a>
        </div>
      </section>
    </main>
  )
}
