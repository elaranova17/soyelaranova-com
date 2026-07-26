import Image from 'next/image'
import Link from 'next/link'
import { ImmersiveStory } from '@/components/immersive-story'
import { TrackedLink } from '@/components/tracked-link'
import { serviceScenes } from '@/components/service-scenes'
import { evelynPhotos } from '@/lib/evelyn-photos'

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
  children,
}: {
  src: string
  alt: string
  className?: string
  priority?: boolean
  children?: React.ReactNode
}) {
  return (
    <figure className={`asset-photo ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 900px) 100vw, 55vw"
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
          <Eyebrow>Elara Nova · estudio de automatización y desarrollo web</Eyebrow>
          <h1 className="type-lockup type-lockup--glow-soft">
            <span className="type-lockup__impact">Automatizo</span>
            <em className="type-lockup__script">tu negocio</em>
          </h1>
          <p>
            Y construyo las webs que venden. Soy Evelyn, ingeniera de software: me siento contigo,
            entiendo qué te come el día y lo automatizo. Menos a mano, más tiempo para lo que importa.
          </p>
          <div className="home-actions">
            <Link href="#servicios" className="home-button home-button--primary">
              Ver servicios
            </Link>
            <TrackedLink
              href="/descubrimiento"
              tracking={{ event: 'cta_click', category: 'lead', label: 'home_hero_preanalisis' }}
              className="home-button home-button--quiet"
            >
              Hacer mi pre-análisis
            </TrackedLink>
          </div>
        </div>

        <Photo
          src={evelynPhotos.homeHero}
          alt="Evelyn Patiño, ingeniera de software, en su estudio"
          className="home-hero__visual"
          priority
        >
          <figcaption className="home-hero__caption">
            <span>Ingeniería real</span>
            <i aria-hidden="true" />
            <span>Ojo estético</span>
          </figcaption>
        </Photo>

        <p className="home-hero__note">
          8 años automatizando procesos.
          <br />
          Primero en banca. Ahora, para tu negocio.
        </p>
      </section>

      <section className="home-thesis" aria-label="Propuesta de Elara Nova">
        <p>
          <span className="home-thesis__impact">Automatizo</span>
          <em className="home-thesis__script">tus procesos</em>
        </p>
        <p>
          <span className="home-thesis__impact">Construyo</span>
          <em className="home-thesis__script">webs que venden</em>
        </p>
        <p>
          <span className="home-thesis__impact">Mido</span>
          <em className="home-thesis__script">lo que convierte</em>
        </p>
      </section>

      <section id="servicios" className="home-intro">
        <div className="home-intro__lead">
          <Eyebrow>Lo que hago por tu negocio</Eyebrow>
          <h2 className="type-lockup type-lockup--glow-soft">
            <span className="type-lockup__impact">Menos manual</span>
            <em className="type-lockup__script">más clientes</em>
          </h2>
          <p className="home-intro__pitch">
            La mayoría de los negocios pierden horas cada semana en tareas que una máquina puede
            hacer sola: pasar leads a mano, responder lo mismo mil veces, copiar datos entre apps.
            Yo encuentro esas fugas y las cierro con sistemas que trabajan por ti — para que dediques
            tu tiempo a lo que de verdad hace crecer tu negocio.
          </p>
          <ul className="home-intro__proof">
            <li>Cada lead con seguimiento automático, sin mover un dedo.</li>
            <li>Webs que convierten visitas en clientes, no folletos bonitos.</li>
            <li>Todo medible: sabes qué funciona y qué no.</li>
          </ul>
        </div>
        <div className="home-intro__body">
          <div className="home-intro__services" aria-label="Servicios principales">
            <div className="home-intro__service">
              <span>Automatizaciones</span>
              <p>
                Conecto tus herramientas para que el trabajo repetitivo se haga solo. Recuperas
                horas cada semana y ningún lead se pierde por el camino.
              </p>
            </div>
            <div className="home-intro__service">
              <span>Landing pages y sitios web</span>
              <p>
                Páginas hechas para vender: mensaje claro, mobile-first y pensadas para que la
                persona correcta dé el siguiente paso.
              </p>
            </div>
            <div className="home-intro__service">
              <span>Google Ads y medición</span>
              <p>
                Campañas conectadas a tu web y a eventos reales. Sabes qué anuncio trae clientes y
                dónde estabas gastando de más.
              </p>
            </div>
            <div className="home-intro__service">
              <span>Productos digitales</span>
              <p>
                Ebooks y guías para automatizar tu negocio paso a paso, con lo que de verdad
                funciona — sin teoría de relleno.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ImmersiveStory />

      <section id="oferta" className="home-products">
        <header className="home-products__header">
          <div>
            <Eyebrow>Servicios · desde 450 €</Eyebrow>
            <h2 className="type-lockup type-lockup--glow-soft">
              <span className="type-lockup__impact">Empieza</span>
              <em className="type-lockup__script">por aquí</em>
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
          <Eyebrow light>Material de valor</Eyebrow>
          <h2 className="type-lockup type-lockup--glow">
            <span className="type-lockup__impact">Recursos</span>
            <em className="type-lockup__script">para tu negocio</em>
          </h2>
          <p>
            Sin casos de clientes en vitrina. Aquí encuentras material útil: guías descargables,
            capturas de sistemas reales y piezas listas para que veas cómo se ve el trabajo —
            y te lleves algo concreto hoy.
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
            <p>01 · Ebook</p>
            <h3>Guías y lecturas cortas</h3>
            <small>
              Material descargable para ordenar procesos, mensajes y siguientes pasos — sin humo.
            </small>
            <Link href="/universo" className="home-recurso__link">
              Ver ebooks
            </Link>
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
            <p>02 · Pantallas</p>
            <h3>Cómo se ve el sistema</h3>
            <small>
              Capturas de flujos, dashboards y pantallas: la forma del producto, no el nombre del
              cliente.
            </small>
            <Link href="/#servicios" className="home-recurso__link">
              Ver pantallas
            </Link>
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
            <p>03 · Valor</p>
            <h3>Checklists y plantillas</h3>
            <small>
              Piezas prácticas para diagnosticar fugas, priorizar automatizaciones y preparar tu web.
            </small>
            <Link href="/descubrimiento" className="home-recurso__link">
              Pedir material
            </Link>
          </article>
        </div>
      </section>

      <section id="preanalisis" className="home-impact">
        <div className="home-impact__glow" aria-hidden="true" />
        <Eyebrow light>Pre-análisis didáctico · gratis</Eyebrow>
        <h2 className="type-lockup type-lockup--center type-lockup--glow">
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
            Soy Evelyn — no un equipo detrás de una marca. Llevo 8 años automatizando procesos: lo
            que hoy el mundo hace con IA, yo lo venía haciendo a mano. Seis de esos años en banca,
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
