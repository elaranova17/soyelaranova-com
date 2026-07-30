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
        <div className="y2k-squiggles" aria-hidden="true">
          <svg viewBox="0 0 500 400" style={{ width: '520px', left: '-150px', top: '120px', opacity: 0.75 }}>
            <path
              d="M20 300 C20 180 120 180 120 300 C120 380 40 380 40 300 C40 200 160 160 220 240 C270 305 350 290 360 210 C372 120 260 110 250 200"
              fill="none"
              stroke="#F4A7CB"
              strokeWidth="34"
              strokeLinecap="round"
            />
          </svg>
          <svg viewBox="0 0 500 400" style={{ width: '520px', right: '-160px', bottom: '-120px', opacity: 0.85 }}>
            <path
              d="M60 100 C60 220 170 220 170 100 C170 20 90 20 90 100 C90 210 230 250 300 170 C355 108 450 130 440 220"
              fill="none"
              stroke="#E3CBF2"
              strokeWidth="30"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="home-hero__copy">
          <Eyebrow>Elara Nova by Evelyn Patiño · IA y automatización</Eyebrow>
          <h1 className="type-lockup type-lockup--glow-soft">
            <span className="type-lockup__impact">Menos a mano</span>
            <em className="type-lockup__script">más para ti</em>
          </h1>
          <p>
            Soy Evelyn, ingeniera de software. Te enseño a usar la IA y la automatización para que
            las tareas repetitivas no te coman el día: plantillas listas para usar, tutoriales
            cortos que sí se entienden, y pros y contras de verdad.
          </p>
          <div className="home-actions">
            <Link href="#recursos" className="home-button home-button--primary">
              Ver las series
            </Link>
            <Link href="#oferta" className="home-button home-button--quiet">
              Trabaja conmigo
            </Link>
          </div>
        </div>

        <div className="home-hero__visual hero-composicion">
          <div className="hero-silueta" aria-label="Foto de Evelyn — próximamente">
            <span className="hero-silueta__tag">pose 01 · foto en camino ✦</span>
            <span className="y2k-label" style={{ top: '-14px', right: '22px', transform: 'rotate(5deg)' }}>
              automatización
            </span>
            <span className="y2k-label" style={{ bottom: '18px', left: '-14px', transform: 'rotate(-6deg)' }}>
              plantillas n8n
            </span>
            <svg viewBox="0 0 400 460" role="img" aria-hidden="true">
              <path
                fill="#2B1735"
                stroke="#FFFFFF"
                strokeWidth="10"
                strokeLinejoin="round"
                d="M200 30 C130 30 92 90 96 158 C99 208 88 258 74 300 C64 330 52 352 38 368 C86 368 126 350 150 318 L250 318 C274 350 314 368 362 368 C348 352 336 330 326 300 C312 258 301 208 304 158 C308 90 270 30 200 30 Z"
              />
              <path
                fill="#2B1735"
                stroke="#FFFFFF"
                strokeWidth="10"
                strokeLinejoin="round"
                d="M164 296 L164 336 C120 352 96 392 92 460 L308 460 C304 392 280 352 236 336 L236 296 Z"
              />
              <path
                d="M96 150 C92 110 118 62 152 48"
                fill="none"
                stroke="#E85D9F"
                strokeWidth="9"
                strokeLinecap="round"
                opacity="0.85"
              />
              <path
                d="M304 150 C308 112 288 70 258 52"
                fill="none"
                stroke="#9A66D9"
                strokeWidth="9"
                strokeLinecap="round"
                opacity="0.75"
              />
            </svg>
            <img
              src="/brand/stickers/flor-hibisco-rosa.png"
              alt=""
              className="y2k-sticker"
              style={{ width: '86px', top: '20px', right: '18px', transform: 'rotate(12deg)' }}
            />
            <img
              src="/brand/stickers/destello.png"
              alt=""
              className="y2k-sticker"
              style={{ width: '60px', bottom: '124px', right: '36px', transform: 'rotate(-8deg)' }}
            />
          </div>
          <svg className="y2k-sello" viewBox="0 0 120 120" style={{ top: '-34px', left: '-30px' }} aria-hidden="true">
            <circle cx="60" cy="60" r="57" fill="#E85D9F" stroke="#4A2D57" strokeWidth="4" />
            <circle cx="60" cy="60" r="40" fill="none" stroke="#F6EFE3" strokeWidth="2" strokeDasharray="2 6" />
            <defs>
              <path id="selloCirc" d="M 60,60 m -47,0 a 47,47 0 1,1 94,0 a 47,47 0 1,1 -94,0" />
            </defs>
            <text fill="#F6EFE3" fontSize="12.5" fontWeight="700" letterSpacing="2.5" style={{ textTransform: 'uppercase' }}>
              <textPath href="#selloCirc">elara nova ✦ menos a mano ✦ ia sin humo ✦</textPath>
            </text>
            <path d="M 60 48 C 54 42 46 44 46 51 C 46 57 52 62 60 68 C 68 62 74 57 74 51 C 74 44 66 42 60 48 Z" fill="#F6EFE3" />
          </svg>
          <div className="y2k-chat" role="img" aria-label="Chat de ejemplo del embudo">
            <div className="y2k-chat__bar">
              elara nova ✦ en línea
              <i aria-hidden="true">
                <b />
                <b />
              </i>
            </div>
            <div className="y2k-chat__body">
              <p className="y2k-chat__msg y2k-chat__msg--tu">
                <span>tú</span>
                quiero automatizar mi excel 🥲
              </p>
              <p className="y2k-chat__msg y2k-chat__msg--elara">
                <span>elara</span>
                comenta “EXCEL” y te mando la plantilla 💗
              </p>
            </div>
          </div>
        </div>

        <p className="home-hero__note">
          8 años automatizando procesos.
          <br />
          Primero en banca. Ahora, para enseñártelo.
        </p>
      </section>

      <div className="y2k-checker" aria-hidden="true" />

      <div className="y2k-marquee" aria-hidden="true">
        <div className="y2k-marquee__track">
          {[0, 1].map((rep) =>
            ['menos a mano', '✦', 'lo que siempre pudiste hacer', '✦', 'pastoreando', '✦', 'plantillas listas para usar', '✦', 'ia sin humo', '✦'].map(
              (t, i) => <span key={`${rep}-${i}`}>{t}</span>
            )
          )}
        </div>
      </div>

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

      <section id="servicios" className="home-intro" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="y2k-squiggles" aria-hidden="true">
          <svg viewBox="0 0 500 400" style={{ width: '480px', right: '-150px', top: '-70px', opacity: 0.55 }}>
            <path
              d="M60 100 C60 220 170 220 170 100 C170 20 90 20 90 100 C90 210 230 250 300 170 C355 108 450 130 440 220"
              fill="none"
              stroke="#F4A7CB"
              strokeWidth="30"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="home-intro__lead">
          <Eyebrow>El porqué</Eyebrow>
          <h2 className="type-lockup type-lockup--glow-soft">
            <span className="type-lockup__impact">Siempre pudiste</span>
            <em className="type-lockup__script">ahora tienes cómo</em>
          </h2>
          <p className="home-intro__pitch">
            La mayoría pierde horas cada día en tareas que una máquina puede hacer sola. Yo vengo
            de ese mundo — 8 años automatizando, 6 de ellos en banca — y te lo cuento claro: qué
            sirve, qué no, y cómo empezar hoy con una plantilla lista.
          </p>
          <ul className="home-intro__proof">
            <li>Tutoriales cortos que sí se entienden.</li>
            <li>Plantillas listas para copiar, pegar y usar.</li>
            <li>Pros y contras de verdad: qué sirve y qué es puro humo.</li>
          </ul>
        </div>
        <div className="home-intro__body" style={{ position: 'relative' }}>
          <img
            src="/brand/stickers/celular-tapita.png"
            alt=""
            className="y2k-sticker"
            style={{ width: '88px', top: '-52px', right: '2%', transform: 'rotate(12deg)' }}
          />
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
                Todo el mundo habla de ella y pocos la explican claro. No necesitas ser ingeniera:
                necesitas ejemplos reales, de tu trabajo de todos los días.
              </p>
            </div>
            <div className="home-intro__service">
              <span>Todo cambia muy rápido</span>
              <p>
                Los trabajos se están moviendo y a la mayoría nadie le enseñó a usar estas
                herramientas. Se aprende paso a paso, con alguien que las usa todos los días.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ImmersiveStory />

      <section id="oferta" className="home-products" style={{ position: 'relative' }}>
        <img
          src="/brand/stickers/corazon-leopardo.png"
          alt=""
          className="y2k-sticker"
          style={{ width: '104px', top: '-34px', right: '5%', transform: 'rotate(9deg)' }}
        />
        <header className="home-products__header">
          <div>
            <Eyebrow>Servicios · para cuando prefieres delegar</Eyebrow>
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

      <section id="recursos" className="home-recursos" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="y2k-squiggles" aria-hidden="true">
          <svg viewBox="0 0 500 400" style={{ width: '540px', left: '-170px', top: '-90px', opacity: 0.28 }}>
            <path
              d="M20 300 C20 180 120 180 120 300 C120 380 40 380 40 300 C40 200 160 160 220 240 C270 305 350 290 360 210"
              fill="none"
              stroke="#E85D9F"
              strokeWidth="34"
              strokeLinecap="round"
            />
          </svg>
          <svg viewBox="0 0 500 400" style={{ width: '460px', right: '-140px', bottom: '-100px', opacity: 0.22 }}>
            <path
              d="M60 100 C60 220 170 220 170 100 C170 20 90 20 90 100 C90 210 230 250 300 170 C355 108 450 130 440 220"
              fill="none"
              stroke="#9A66D9"
              strokeWidth="30"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <img
          src="/brand/stickers/labios.png"
          alt=""
          className="y2k-sticker"
          style={{ width: '96px', top: '30px', right: '5%', transform: 'rotate(-9deg)' }}
        />
        <div className="home-recursos__intro">
          <Eyebrow light>Las series · muy pronto en Instagram y TikTok</Eyebrow>
          <h2 className="type-lockup type-lockup--glow">
            <span className="type-lockup__impact">Aprende gratis</span>
            <em className="type-lockup__script">conmigo</em>
          </h2>
          <p>
            Tres series con nombre propio, cada una con su promesa. Videos cortos, plantillas para
            descargar y cero drama técnico. Comenta la palabra clave de cada video y te llega el
            recurso directo.
          </p>
        </div>

        <div className="home-recursos__rail">
          <article className="home-recurso">
            <div
              className="home-recurso__media"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--editorial-rosa-bebe)' }}
            >
              <img src="/brand/stickers/cursor-pixel.png" alt="" style={{ width: '58%', height: 'auto' }} />
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
            <div
              className="home-recurso__media"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--editorial-champan)' }}
            >
              <img src="/brand/stickers/estrella-kawaii.png" alt="" style={{ width: '58%', height: 'auto' }} />
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
            <div
              className="home-recurso__media"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--editorial-lino)' }}
            >
              <img src="/brand/stickers/chihuahua.png" alt="" style={{ width: '58%', height: 'auto' }} />
            </div>
            <p>03 · Serie de historias</p>
            <h3>Pastoreando</h3>
            <small>
              Storytimes, viajes y la vida real detrás de la marca — construyendo todo esto en
              público, con lo que sale bien y lo que no.
            </small>
            <span className="home-recurso__link">Muy pronto ✦</span>
          </article>
        </div>
      </section>

      <div className="y2k-checker" aria-hidden="true" />

      <section id="preanalisis" className="home-impact" style={{ position: 'relative' }}>
        <img
          src="/brand/stickers/mono.png"
          alt=""
          className="y2k-sticker"
          style={{ width: '96px', top: '26px', left: '6%', transform: 'rotate(-10deg)' }}
        />
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
