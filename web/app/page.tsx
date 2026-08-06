import Image from 'next/image'
import Link from 'next/link'
import { ImmersiveStory } from '@/components/immersive-story'
import { HomeHero } from '@/components/home-hero'
import { TrackedLink } from '@/components/tracked-link'
import { serviceScenes } from '@/components/service-scenes'
import { evelynPhotos } from '@/lib/evelyn-photos'

type Service = {
  number: string
  type: string
  title: string
  description: string
  price: string
  href: string
}

const services: readonly Service[] = [
  {
    number: '01',
    type: 'Producto estrella',
    title: 'Automatizaciones',
    description:
      'Conecto formularios, emails, WhatsApp, hojas y CRM para que cada lead se atienda solo.',
    price: 'Desde 450 €',
    href: '/servicios/automatizaciones',
  },
  {
    number: '02',
    type: 'Conversión',
    title: 'Landing pages y sitios web',
    description:
      'Páginas hechas para vender: mensaje claro, rápidas y mobile-first, listas para Ads.',
    price: 'Desde 650 €',
    href: '/servicios/landing-pages',
  },
  {
    number: '03',
    type: 'Crecimiento',
    title: 'Google Ads y medición',
    description:
      'Campañas conectadas a landing y eventos medibles. Sabes qué trae clientes de verdad.',
    price: 'Setup 450 € · gestión 350 €/mes',
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

export default function HomePage() {
  return (
    <main className="home-shell">
      <HomeHero />

      <section className="home-thesis" aria-label="Propuesta de Elara Nova">
        <p>
          <span className="home-thesis__impact">Enseño</span>
          <em className="home-thesis__script">a automatizar con IA</em>
        </p>
        <p>
          <span className="home-thesis__impact">Creo</span>
          <em className="home-thesis__script">plantillas listas para usar</em>
        </p>
        <p>
          <span className="home-thesis__impact">Construyo</span>
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
            La mayoría pierde horas en tareas que una máquina puede hacer sola. Yo vengo de ese
            mundo — 8 años automatizando, 6 en banca — y te lo cuento claro: qué sirve, qué no, y
            cómo empezar hoy.
          </p>
          <ul className="home-intro__proof">
            <li>Tutoriales cortos que sí se entienden.</li>
            <li>Plantillas listas para copiar y usar.</li>
            <li>Pros y contras de verdad: sin humo.</li>
          </ul>
        </div>
        <div className="home-intro__body">
          <Eyebrow>¿Te suena?</Eyebrow>
          <div className="home-intro__services" aria-label="Señales de que esto es para ti">
            <div className="home-intro__service">
              <span>Lo haces todo a mano</span>
              <p>
                Responder lo mismo mil veces, copiar datos entre apps, vivir dentro del correo.
              </p>
            </div>
            <div className="home-intro__service">
              <span>La IA te suena a otro idioma</span>
              <p>
                No necesitas ser ingeniera: necesitas ejemplos reales de tu trabajo de todos los
                días.
              </p>
            </div>
            <div className="home-intro__service">
              <span>Todo cambia muy rápido</span>
              <p>
                Se aprende paso a paso, con alguien que usa estas herramientas todos los días.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ImmersiveStory />

      <section id="oferta" className="home-products">
        <header className="home-products__header">
          <div>
            <Eyebrow>Servicios · cuando prefieres delegar</Eyebrow>
            <h2 className="type-lockup type-lockup--glow-soft">
              <span className="type-lockup__impact">Lo hago por ti</span>
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
          <Eyebrow light>Las series · muy pronto</Eyebrow>
          <h2 className="type-lockup type-lockup--glow">
            <span className="type-lockup__impact">Aprende gratis</span>
            <em className="type-lockup__script">conmigo</em>
          </h2>
          <p>
            Tres series con nombre propio. Videos cortos, plantillas para descargar y cero drama
            técnico.
          </p>
        </div>

        <div className="home-recursos__rail">
          <article className="home-recurso">
            <span className="serie-num">01</span>
            <p>Serie de automatización</p>
            <h3>Menos a mano</h3>
            <span className="serie-episodios">episodio 01 muy pronto</span>
            <small>Tutoriales y plantillas de automatización con IA, paso a paso.</small>
            <span className="home-recurso__link">Muy pronto</span>
          </article>
          <article className="home-recurso">
            <span className="serie-num">02</span>
            <p>Serie de conocimiento</p>
            <h3>Lo que siempre pudiste hacer</h3>
            <span className="serie-episodios">episodio 01 muy pronto</span>
            <small>Tips de IA, herramientas que valen y las que no.</small>
            <span className="home-recurso__link">Muy pronto</span>
          </article>
          <article className="home-recurso">
            <span className="serie-num">03</span>
            <p>Serie de historias</p>
            <h3>Pastoreando</h3>
            <span className="serie-episodios">episodio 01 muy pronto</span>
            <small>La vida real detrás de la marca, construyendo en público.</small>
            <span className="home-recurso__link">Muy pronto</span>
          </article>
        </div>

        <div className="waitlist">
          <h3>Entra a la lista</h3>
          <p>Te aviso cuando publique cada episodio y cuando salgan las plantillas.</p>
          <form className="waitlist__form" action="/descubrimiento">
            <input type="email" name="email" placeholder="tu correo" aria-label="Tu correo" required />
            <button type="submit">Quiero entrar</button>
          </form>
        </div>
      </section>

      <section id="preanalisis" className="home-impact">
        <Eyebrow>Plantillas gratis</Eyebrow>
        <h2 className="type-lockup type-lockup--center type-lockup--glow-soft">
          <span className="type-lockup__impact">Plantillas listas</span>
          <em className="type-lockup__script">para copiar y usar</em>
        </h2>
        <p>
          Flujos armados, agentes configurados y prompts probados. Deja tu correo y te llegan
          cuando estén listas.
        </p>
        <div className="tools-rail">
          <div className="tool-chip">
            <strong>Automatizaciones</strong>
            <small>n8n · Make · Zapier</small>
          </div>
          <div className="tool-chip">
            <strong>Agentes con IA</strong>
            <small>GPTs listos</small>
          </div>
          <div className="tool-chip">
            <strong>Notion</strong>
            <small>Sistemas y tableros</small>
          </div>
          <div className="tool-chip">
            <strong>Prompts</strong>
            <small>Listos para copiar</small>
          </div>
        </div>
        <div className="waitlist">
          <h3>Descarga gratis</h3>
          <p>Te aviso apenas estén listas.</p>
          <form className="waitlist__form" action="/descubrimiento">
            <input type="email" name="email" placeholder="tu correo" aria-label="Tu correo" required />
            <button type="submit">Descargar</button>
          </form>
        </div>
      </section>

      <section id="trabaja" className="home-work">
        <div className="home-work__stage">
          <span className="home-work__glow" aria-hidden="true" />
          <span className="home-work__frame" aria-hidden="true" />
          <figure className="asset-photo home-work__visual">
            <Image
              src={evelynPhotos.homeAbout}
              alt="Evelyn Patiño sonriendo"
              fill
              quality={90}
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </figure>
          <p className="home-work__name">Evelyn Patiño</p>
        </div>
        <div className="home-work__copy">
          <Eyebrow>Sobre mí</Eyebrow>
          <h2 className="type-lockup type-lockup--glow-soft">
            <span className="type-lockup__impact">Ingeniera</span>
            <em className="type-lockup__script">con ojo estético</em>
          </h2>
          <p>
            Soy Evelyn, y Elara Nova soy yo. Llevo 8 años automatizando procesos — seis de ellos en
            banca, donde un detalle mal hecho cuesta dinero real. Me siento contigo, entiendo tu
            negocio y te quito el trabajo repetitivo de encima.
          </p>
          <div className="home-work__proof">
            <span>8 años automatizando · 6 en banca</span>
            <span>Medellín · Europa</span>
            <span className="home-work__proof-pulse">Automatización + desarrollo + Ads</span>
          </div>
          <div className="home-work__me">
            <p>¿Quieres ver cómo trabajo?</p>
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
        <p>Tu negocio puede funcionar sin que estés en cada detalle.</p>
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
