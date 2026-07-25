import Link from 'next/link'
import { ImmersiveStory } from '@/components/immersive-story'
import { TrackedLink } from '@/components/tracked-link'
import { serviceScenes } from '@/components/service-scenes'

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
      'Conecto formularios, emails, WhatsApp, hojas y CRM para que cada lead tenga seguimiento automatico. Menos trabajo manual, cero oportunidades perdidas.',
    price: 'Desde 450 €',
    asset: 'servicio-01-automatizaciones.webp',
    format: '1600 × 2000 px',
    href: '/servicios/automatizaciones',
  },
  {
    number: '02',
    type: 'Conversion',
    title: 'Landing pages y sitios web',
    description:
      'Paginas hechas para vender: mensaje claro, mobile-first y pensadas para que la persona correcta dé el siguiente paso. Ideales para Google Ads y lanzamientos.',
    price: 'Desde 650 €',
    asset: 'servicio-02-webs.webp',
    format: '1600 × 2000 px',
    href: '/servicios/landing-pages',
  },
  {
    number: '03',
    type: 'Crecimiento',
    title: 'Google Ads y medicion',
    description:
      'Campañas conectadas a landing y eventos que sí se pueden medir. Sabes qué búsquedas traen clientes y dónde estabas quemando presupuesto.',
    price: 'Setup 450 € · gestion 350 €/mes',
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
  children,
}: {
  src: string
  alt: string
  className?: string
  children?: React.ReactNode
}) {
  return (
    <figure className={`asset-photo ${className}`}>
      <img src={src} alt={alt} loading="lazy" />
      {children}
    </figure>
  )
}

export default function HomePage() {
  return (
    <main className="home-shell">
      <section id="inicio" className="home-hero">
        <div className="home-hero__copy">
          <Eyebrow>Elara Nova · estudio de automatizacion y desarrollo web</Eyebrow>
          <h1>
            Automatizo tu negocio
            <em>y construyo las webs que venden.</em>
          </h1>
          <p>
            Soy Evelyn, ingeniera de software. Conecto tus procesos, elimino el trabajo manual y
            creo paginas hechas para convertir — para que vendas mas y trabajes menos.
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
          src="/_assets/photos/evelyn_pro_hero.jpg"
          alt="Evelyn Patino, ingeniera de software, trabajando en su estudio"
          className="home-hero__visual"
        >
          <figcaption className="home-hero__caption">
            <span>Ingenieria real</span>
            <i aria-hidden="true" />
            <span>Ojo de diseñadora</span>
          </figcaption>
        </Photo>

        <p className="home-hero__note">
          6 años construyendo tecnologia para banca.
          <br />
          Ahora, para tu negocio.
        </p>
      </section>

      <section className="home-thesis" aria-label="Propuesta de Elara Nova">
        <p>Automatizo tus procesos.</p>
        <p>Construyo tu web que vende.</p>
        <p>Mido lo que trae clientes.</p>
      </section>

      <section id="servicios" className="home-intro">
        <div>
          <Eyebrow>Lo que hago por tu negocio</Eyebrow>
          <h2>Menos trabajo manual. Mas clientes que llegan solos.</h2>
        </div>
        <div className="home-intro__body">
          <p>
            Diseño y programo los sistemas que sostienen un negocio: automatizaciones que responden
            por ti, paginas que convierten y campañas que puedes medir. Sin humo, con ingenieria.
          </p>
          <div className="home-intro__services" aria-label="Servicios principales">
            <span>Automatizaciones</span>
            <span>Landing pages y sitios web</span>
            <span>Google Ads y medicion</span>
            <span>Productos digitales</span>
          </div>
        </div>
      </section>

      <ImmersiveStory />

      <section id="oferta" className="home-products">
        <header className="home-products__header">
          <div>
            <Eyebrow>Servicios · desde 450 €</Eyebrow>
            <h2>Elige por donde empezar.</h2>
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
          <h2>Ebooks, pantallas y recursos para tu negocio.</h2>
          <p>
            Sin casos de clientes en vitrina. Acá encontrás material útil: guías descargables,
            capturas de sistemas reales y piezas listas para que veas cómo se ve el trabajo —
            y te lleves algo concreto hoy.
          </p>
        </div>

        <div className="home-recursos__rail">
          <article className="home-recurso">
            <div className="home-recurso__media">
              <img src="/media/recursos/recurso-ebook.webp" alt="" loading="lazy" />
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
              <img src="/media/recursos/recurso-pantallas.webp" alt="" loading="lazy" />
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
              <img src="/media/recursos/recurso-valor.webp" alt="" loading="lazy" />
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

      <section id="diagnostico" className="home-impact">
        <div className="home-impact__glow" aria-hidden="true" />
        <Eyebrow light>Pre-análisis didáctico · gratis</Eyebrow>
        <h2>
          ¿Tu negocio todavia depende de que <em>vos</em> hagas todo a mano?
        </h2>
        <p>
          Completá el pre-análisis: yo preparo una lectura de tu negocio/web. Si querés profundizar,
          la sesión estratégica dura 20 min y cuesta 25 CHF.
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
            src="/_assets/photos/evelyn_me_portrait.webp"
            alt="Evelyn Patino sonriendo, retrato profesional"
            className="home-work__visual"
          />
          <p className="home-work__name">Evelyn Patiño</p>
        </div>
        <div className="home-work__copy">
          <Eyebrow>Sobre mí</Eyebrow>
          <h2>Pienso como diseñadora. Construyo como ingeniera.</h2>
          <p>
            Soy Evelyn — no un equipo detrás de una marca. Seis años construyendo tecnologia para
            banca, donde un detalle mal hecho cuesta dinero real. Ahora ayudo a negocios pequeños a
            vender mejor y dejar de sostener cada proceso a mano.
          </p>
          <div className="home-work__proof">
            <span>6 años en tecnologia y banca</span>
            <span>Medellin · Suiza</span>
            <span className="home-work__proof-pulse">Automatizacion + desarrollo + Ads</span>
          </div>
          <div className="home-work__me">
            <p>¿Querés ver cómo trabajo yo?</p>
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
        <p>Tu negocio puede funcionar sin que estes en cada detalle.</p>
        <h2>Construyamos el sistema que lo sostiene.</h2>
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
