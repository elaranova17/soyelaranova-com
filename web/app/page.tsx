import Link from 'next/link'
import { ImmersiveStory } from '@/components/immersive-story'
import { TrackedLink } from '@/components/tracked-link'

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

type Client = {
  href: string
  name: string
  category: string
  description: string
  badge: string
}

const clients: readonly Client[] = [
  {
    href: 'https://ofeliavallejo.com',
    name: 'Ofelia Vallejo',
    category: 'Leather House · Medellin',
    description:
      'Tienda virtual y ecosistema de marca para una casa de marroquineria. Identidad editorial, navegacion clara y experiencia premium lista para vender.',
    badge: 'Cliente activo',
  },
  {
    href: 'https://southamericanmetalaliance.com',
    name: 'SAMA',
    category: 'South American Metal Alliance',
    description:
      'Sitio y flujo digital alineados con la voz de la marca. Estructura pensada para convertir y una base tecnica lista para crecer.',
    badge: 'Cliente feliz',
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

function PosterTile({
  kicker,
  title,
  className = '',
  children,
}: {
  kicker: string
  title: string
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div className={`asset-slot ${className}`}>
      <span className="asset-slot__mark" aria-hidden="true">
        e<i>✦</i>
      </span>
      <div className="asset-slot__label">
        <small>{kicker}</small>
        <span>{title}</span>
      </div>
      {children}
    </div>
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
              tracking={{ event: 'cta_click', category: 'lead', label: 'home_hero_diagnostico' }}
              className="home-button home-button--quiet"
            >
              Contarme tu proyecto
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
          {services.map((service, index) => (
            <article key={service.title} className={`home-product home-product--${index + 1}`}>
              <PosterTile
                kicker={service.type}
                title={service.title}
                className="home-product__media"
              />
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
          ))}
        </div>
      </section>

      <section id="caso" className="home-oracle">
        <div className="home-oracle__copy">
          <Eyebrow light>Caso real</Eyebrow>
          <h2>val-débarras: un sistema que trae clientes cada dia.</h2>
          <p>
            Construi el sitio completo de una empresa suiza de vaciado de viviendas: landing pages
            por canton, formularios que capturan cada solicitud y campañas de Google Ads. No una
            pagina bonita — un sistema que genera pedidos reales.
          </p>
          <TrackedLink
            href="/descubrimiento"
            tracking={{ event: 'cta_click', category: 'lead', label: 'home_caso_diagnostico' }}
            className="home-button home-button--gold"
          >
            Quiero un sistema asi
          </TrackedLink>
        </div>
        <PosterTile
          kicker="Suiza · débarras"
          title="val-débarras"
          className="home-oracle__visual"
        />
      </section>

      <section id="clientes" className="home-clients">
        <header className="home-clients__header">
          <Eyebrow>Negocios que ya confian</Eyebrow>
          <h2>No es teoria. Ya construyo para clientes reales.</h2>
        </header>
        <div className="home-clients__grid">
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.href}
              target="_blank"
              rel="noopener noreferrer"
              className="home-client"
            >
              <span className="home-client__badge">{client.badge}</span>
              <h3>{client.name}</h3>
              <p className="home-client__category">{client.category}</p>
              <p className="home-client__desc">{client.description}</p>
              <span className="home-client__link">Ver sitio en vivo →</span>
            </a>
          ))}
        </div>
      </section>

      <section id="trabaja" className="home-work">
        <Photo
          src="/_assets/photos/evelyn_pro_perfil.jpg"
          alt="Evelyn Patino trabajando en su estudio, perfil"
          className="home-work__visual"
        />
        <div className="home-work__copy">
          <Eyebrow>Quien construye</Eyebrow>
          <h2>Pienso como diseñadora. Construyo como ingeniera.</h2>
          <p>
            Soy Evelyn. Vengo de seis años construyendo tecnologia para banca — donde un detalle mal
            hecho cuesta dinero real — y ahora ayudo a negocios pequeños a vender mejor y dejar de
            sostener cada proceso a mano.
          </p>
          <div className="home-work__proof">
            <span>6 años en tecnologia y banca</span>
            <span>Medellin · Suiza</span>
            <span>Automatizacion + desarrollo + Ads</span>
          </div>
          <TrackedLink
            href="/descubrimiento"
            tracking={{ event: 'cta_click', category: 'lead', label: 'home_work_diagnostico' }}
            className="home-button home-button--primary"
          >
            Contarme tu proyecto
          </TrackedLink>
        </div>
      </section>

      <section id="contacto" className="home-close">
        <p>Tu negocio puede funcionar sin que estes en cada detalle.</p>
        <h2>Construyamos el sistema que lo sostiene.</h2>
        <div className="home-actions">
          <TrackedLink
            href="/descubrimiento"
            tracking={{ event: 'cta_click', category: 'lead', label: 'home_footer_diagnostico' }}
            className="home-button home-button--gold"
          >
            Solicitar diagnostico gratis
          </TrackedLink>
          <a href="mailto:elaranova.17@gmail.com" className="home-button home-button--light">
            Escribir por email
          </a>
        </div>
      </section>
    </main>
  )
}
