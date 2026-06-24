import Link from 'next/link'
import { ImmersiveStory } from '@/components/immersive-story'
import { TrackedLink } from '@/components/tracked-link'

type Product = {
  number: string
  type: string
  title: string
  description: string
  asset: string
  format: string
}

const products: readonly Product[] = [
  {
    number: '01',
    type: 'Entrada gratuita',
    title: '7 Dias de Elara',
    description: 'Una primera experiencia breve para conocer la voz, el ritual y la utilidad de Elara.',
    asset: 'producto-01-7-dias.webp',
    format: '1600 × 2000 px',
  },
  {
    number: '02',
    type: 'E-book principal',
    title: 'Ciclo Nova del Regreso',
    description: 'La pieza editorial central: lectura, ejercicios y una ruta para volver a ti con intención.',
    asset: 'producto-02-ciclo-nova.webp',
    format: '1600 × 2000 px',
  },
  {
    number: '03',
    type: 'Coleccion',
    title: 'Workbooks, audios y cursos',
    description: 'Una biblioteca que puede crecer sin perder coherencia visual ni convertirse en inventario.',
    asset: 'producto-03-coleccion.webp',
    format: '1800 × 1350 px',
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

function AssetSlot({
  name,
  format,
  className = '',
  children,
}: {
  name: string
  format: string
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div className={`asset-slot ${className}`}>
      <div className="asset-slot__grid" aria-hidden="true" />
      <div className="asset-slot__label">
        <span>{name}</span>
        <small>{format}</small>
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
          <Eyebrow>Elara Nova · por Evelyn Patino</Eyebrow>
          <h1>
            Lo que imaginas
            <em>tambien puede funcionar.</em>
          </h1>
          <p>
            Una casa digital donde las ideas se convierten en productos, experiencias y sistemas
            que trabajan contigo.
          </p>
          <div className="home-actions">
            <Link href="#universo" className="home-button home-button--primary">
              Entrar al universo
            </Link>
            <TrackedLink
              href="/descubrimiento"
              tracking={{ event: 'cta_click', category: 'lead', label: 'home_hero_diagnostico' }}
              className="home-button home-button--quiet"
            >
              Trabaja conmigo
            </TrackedLink>
          </div>
        </div>

        <AssetSlot
          name="hero-evelyn-elara.webp"
          format="2400 × 1500 px · foto + personaje"
          className="home-hero__visual"
        >
          <div className="home-hero__caption">
            <span>La creadora</span>
            <i aria-hidden="true" />
            <span>La voz</span>
          </div>
        </AssetSlot>

        <p className="home-hero__note">
          Evelyn construye.
          <br />
          Elara revela.
        </p>
      </section>

      <section className="home-thesis" aria-label="Propuesta de Elara Nova">
        <p>Elara enamora.</p>
        <p>Evelyn ordena.</p>
        <p>El sistema convierte.</p>
      </section>

      <section id="servicios" className="home-intro">
        <div>
          <Eyebrow>De una idea a una casa digital</Eyebrow>
          <h2>No necesitas hacer mas. Necesitas que todo se conecte.</h2>
        </div>
        <div className="home-intro__body">
          <p>
            Diseño la presencia, la ruta de venta y los procesos que sostienen una marca. El
            resultado no es solo una pagina bonita: es un lugar donde tus ideas pueden crecer.
          </p>
          <div className="home-intro__services" aria-label="Servicios principales">
            <span>Sitios y paginas de venta</span>
            <span>Automatizaciones</span>
            <span>Google Ads y contenido</span>
            <span>Productos digitales</span>
          </div>
        </div>
      </section>

      <ImmersiveStory />

      <section id="universo" className="home-products">
        <header className="home-products__header">
          <div>
            <Eyebrow>La biblioteca Elara</Eyebrow>
            <h2>Cosas para leer, practicar y volver a mirar.</h2>
          </div>
          <Link href="/universo">Ver todo el catalogo</Link>
        </header>

        <div className="home-products__rail">
          {products.map((product, index) => (
            <article key={product.title} className={`home-product home-product--${index + 1}`}>
              <AssetSlot
                name={product.asset}
                format={product.format}
                className="home-product__media"
              />
              <div className="home-product__copy">
                <span>{product.number}</span>
                <p>{product.type}</p>
                <h3>{product.title}</h3>
                <small>{product.description}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="oraculo" className="home-oracle">
        <div className="home-oracle__copy">
          <Eyebrow light>Un gesto que solo existe aqui</Eyebrow>
          <h2>No todo se decide pensando.</h2>
          <p>
            Saca una carta. Detente un momento. Deja que Elara te devuelva una pregunta que valga
            la pena llevar contigo.
          </p>
          <Link href="/oraculo" className="home-button home-button--gold">
            Sacar mi carta
          </Link>
        </div>
        <AssetSlot
          name="oraculo-carta-elara.webp"
          format="1800 × 2200 px · personaje + carta"
          className="home-oracle__visual"
        />
      </section>

      <section id="trabaja" className="home-work">
        <AssetSlot
          name="evelyn-estudio-profesional.webp"
          format="2000 × 1600 px · editorial horizontal"
          className="home-work__visual"
        />
        <div className="home-work__copy">
          <Eyebrow>Trabaja conmigo</Eyebrow>
          <h2>Pienso como diseñadora. Construyo como ingeniera.</h2>
          <p>
            Soy Evelyn. Vengo de seis años construyendo tecnologia para banca y ahora ayudo a
            marcas pequeñas a verse claras, vender mejor y dejar de sostener cada proceso a mano.
          </p>
          <div className="home-work__proof">
            <span>6 años en tecnologia y banca</span>
            <span>Medellin · Suiza</span>
            <span>Diseño + desarrollo + automatizacion</span>
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
        <p>Mira todo lo que siempre fuiste capaz de ser.</p>
        <h2>Ahora construyamos el lugar donde eso pueda vivir.</h2>
        <div className="home-actions">
          <TrackedLink
            href="/descubrimiento"
            tracking={{ event: 'cta_click', category: 'lead', label: 'home_footer_diagnostico' }}
            className="home-button home-button--gold"
          >
            Solicitar diagnostico
          </TrackedLink>
          <a href="mailto:elaranova.17@gmail.com" className="home-button home-button--light">
            Escribir por email
          </a>
        </div>
      </section>
    </main>
  )
}
