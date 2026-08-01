import Image from 'next/image'
import Link from 'next/link'
import { TrackedLink } from '@/components/tracked-link'
import { evelynPhotos } from '@/lib/evelyn-photos'

const STICKERS = {
  flip: '/brand/stickers/celular-tapita.png',
  butterfly: '/brand/stickers/mariposa.png',
  heart: '/brand/stickers/corazon-leopardo.png',
  cursor: '/brand/stickers/cursor-pixel.png',
  flower: '/brand/stickers/flor-hibisco-rosa.png',
  star: '/brand/stickers/estrella-kawaii.png',
  spark: '/brand/stickers/destello.png',
  chihuahua: '/brand/stickers/chihuahua.png',
  lips: '/brand/stickers/labios.png',
} as const

function Sticker({
  src,
  className = '',
  alt = '',
}: {
  src: string
  className?: string
  alt?: string
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- stickers PNG con posicionamiento libre
    <img src={src} alt={alt} className={`yc-sticker ${className}`} aria-hidden={alt ? undefined : true} />
  )
}

function ChatWindow({
  title,
  children,
  className = '',
  status,
}: {
  title: string
  children: React.ReactNode
  className?: string
  status?: string
}) {
  return (
    <div className={`yc-chat ${className}`}>
      <div className="yc-chat__bar">
        <span className="yc-chat__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="yc-chat__title">{title}</span>
      </div>
      <div className="yc-chat__body">{children}</div>
      {status ? <p className="yc-chat__status">{status}</p> : null}
    </div>
  )
}

function Msg({
  from,
  children,
  self = false,
}: {
  from: string
  children: React.ReactNode
  self?: boolean
}) {
  return (
    <p className={`yc-msg ${self ? 'yc-msg--self' : ''}`}>
      <span>{from}</span>
      {children}
    </p>
  )
}

function Note({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <aside className={`yc-note ${className}`}>{children}</aside>
}

function WaitlistForm({
  id,
  title,
  copy,
  button,
  checkbox,
}: {
  id: string
  title: string
  copy: string
  button: string
  checkbox?: string
}) {
  return (
    <form className="yc-waitlist" action="/descubrimiento" method="get" id={id}>
      <h3>{title}</h3>
      <p>{copy}</p>
      <label className="sr-only" htmlFor={`${id}-email`}>
        Tu correo
      </label>
      <div className="yc-waitlist__row">
        <input
          id={`${id}-email`}
          type="email"
          name="email"
          placeholder="tu correo aquí"
          required
          autoComplete="email"
        />
        <button type="submit">{button}</button>
      </div>
      {checkbox ? (
        <label className="yc-waitlist__check">
          <input type="checkbox" name="tips" value="1" />
          <span>{checkbox}</span>
        </label>
      ) : null}
    </form>
  )
}

export default function HomePage() {
  return (
    <main className="yc-home">
      {/* toast carga */}
      <p className="yc-toast" role="status">
        elara_nova inició sesión
      </p>

      {/* ═══ 2 · HERO ═══ */}
      <section id="inicio" className="yc-hero">
        <div className="yc-hero__bg" aria-hidden="true">
          <span className="yc-dots" />
          <svg className="yc-squiggle yc-squiggle--pink" viewBox="0 0 500 400">
            <path
              d="M20 300 C20 180 120 180 120 300 C120 380 40 380 40 300 C40 200 160 160 220 240 C270 305 350 290 360 210 C372 120 260 110 250 200"
              fill="none"
              stroke="var(--editorial-rosa-bebe)"
              strokeWidth="34"
              strokeLinecap="round"
            />
          </svg>
          <svg className="yc-squiggle yc-squiggle--lila" viewBox="0 0 500 400">
            <path
              d="M60 100 C60 220 170 220 170 100 C170 20 90 20 90 100 C90 210 230 250 300 170 C355 108 450 130 440 220"
              fill="none"
              stroke="#E3CBF2"
              strokeWidth="30"
              strokeLinecap="round"
            />
          </svg>
          <span className="yc-corner-fold" />
        </div>

        <div className="yc-hero__grid">
          <div className="yc-hero__copy">
            <h1 className="yc-title">
              <span className="yc-title__line yc-title__line--tilt">menos a mano</span>
              <span className="yc-title__line yc-title__line--wide">más para ti</span>
            </h1>
            <p className="yc-hero__claim">Automatiza, aprende y haz que la IA trabaje por ti.</p>
            <Note className="yc-hero__note">Mirá todo lo que siempre fuiste capaz de ser.</Note>
            <div className="yc-hero__actions">
              <Link href="#series" className="yc-btn yc-btn--primary">
                ver las series <span aria-hidden>→</span>
              </Link>
              <Link href="#servicios" className="yc-btn yc-btn--secondary">
                trabaja conmigo <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div className="yc-hero__visual">
            <div className="yc-cutout" aria-label="Foto de Evelyn — pose en camino">
              <span className="yc-cutout__blob" aria-hidden="true" />
              {/* placeholder silueta hasta foto cutout rosa chicle */}
              <svg className="yc-cutout__figure" viewBox="0 0 400 460" role="img" aria-hidden="true">
                <path
                  fill="var(--editorial-plum)"
                  stroke="#FFFFFF"
                  strokeWidth="12"
                  strokeLinejoin="round"
                  d="M200 30 C130 30 92 90 96 158 C99 208 88 258 74 300 C64 330 52 352 38 368 C86 368 126 350 150 318 L250 318 C274 350 314 368 362 368 C348 352 336 330 326 300 C312 258 301 208 304 158 C308 90 270 30 200 30 Z"
                />
                <path
                  fill="var(--editorial-plum)"
                  stroke="#FFFFFF"
                  strokeWidth="12"
                  strokeLinejoin="round"
                  d="M164 296 L164 336 C120 352 96 392 92 460 L308 460 C304 392 280 352 236 336 L236 296 Z"
                />
                <path
                  d="M96 150 C92 110 118 62 152 48"
                  fill="none"
                  stroke="var(--editorial-gold)"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
                <path
                  d="M304 150 C308 112 288 70 258 52"
                  fill="none"
                  stroke="var(--editorial-lila)"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </svg>
              <span className="yc-badge">IT GIRL ONLINE</span>
            </div>


            <ChatWindow
              className="yc-hero__chat"
              title="mensaje nuevo ♡"
              status="Evelyn está escribiendo…"
            >
              <Msg from="Evelyn">
                ¡Hola! Soy Evelyn 👋
                <br />
                Ingeniera de software.
                <br />
                8 años automatizando,
                <br />
                6 de ellos en banca.
              </Msg>
              <Msg from="Evelyn">
                Ahora te enseño a usar IA
                <br />
                sin humo y sin hacerlo complicado.
              </Msg>
              <div className="yc-chat__toolbar" aria-hidden="true">
                <span>☺</span>
                <span>♥</span>
                <span className="yc-chat__send">Enviar</span>
              </div>
            </ChatWindow>

            <div className="yc-popup" role="status">
              <p>
                <strong>elara_nova</strong> quiere agregarte
              </p>
              <div>
                <span>aceptar ♡</span>
                <span>más tarde</span>
              </div>
            </div>

            <Sticker src={STICKERS.flip} className="yc-hero__sticker yc-hero__sticker--flip" />
            <Sticker src={STICKERS.butterfly} className="yc-hero__sticker yc-hero__sticker--butterfly" />
            <Sticker src={STICKERS.heart} className="yc-hero__sticker yc-hero__sticker--heart" />
            <Sticker src={STICKERS.cursor} className="yc-hero__sticker yc-hero__sticker--cursor" />
            <Sticker src={STICKERS.flower} className="yc-hero__sticker yc-hero__sticker--flower" />
            <Sticker src={STICKERS.star} className="yc-hero__sticker yc-hero__sticker--star" />
          </div>
        </div>
      </section>

      {/* ═══ 3 · MARQUEE ═══ */}
      <div className="yc-marquee" aria-hidden="true">
        <div className="yc-marquee__track">
          {[0, 1].flatMap((rep) =>
            [
              'MENOS A MANO',
              '★',
              'LO QUE SIEMPRE PUDISTE HACER',
              '♡',
              'PASTOREANDO',
              '✿',
              '+',
            ].map((t, i) => (
              <span key={`${rep}-${i}`}>{t}</span>
            )),
          )}
        </div>
      </div>

      {/* ═══ 4 · TESIS ═══ */}
      <section className="yc-thesis" aria-label="Qué hace Elara Nova">
        <article className="yc-pill yc-pill--1">
          <span className="yc-pill__num">01</span>
          <span className="yc-pill__tag">enseño</span>
          <p>enseño a automatizar con IA</p>
          <Sticker src={STICKERS.cursor} className="yc-pill__icon" />
        </article>
        <article className="yc-pill yc-pill--2">
          <span className="yc-pill__num">02</span>
          <span className="yc-pill__tag">creo</span>
          <p>creo plantillas listas para usar</p>
          <Sticker src={STICKERS.star} className="yc-pill__icon" />
        </article>
        <article className="yc-pill yc-pill--3">
          <span className="yc-pill__num">03</span>
          <span className="yc-pill__tag">construyo</span>
          <p>construyo sistemas que venden</p>
          <Sticker src={STICKERS.spark} className="yc-pill__icon" />
        </article>
      </section>

      {/* ═══ 5 · EL PORQUÉ ═══ */}
      <section id="porque" className="yc-why">
        <div className="yc-why__lead">
          <p className="yc-label">04 — el porqué</p>
          <h2 className="yc-title yc-title--section">
            <span className="yc-title__line">
              siempre <em className="yc-title__script">pudiste</em>,
            </span>
            <span className="yc-title__line">ahora tienes cómo</span>
          </h2>
          <Note>
            No necesitas convertirte en experta. Necesitas saber qué usar, cuándo usarlo y qué no
            vale la pena.
          </Note>
        </div>

        <div className="yc-why__cards">
          <article className="yc-card yc-card--torn yc-card--1">
            <span className="yc-card__num">01</span>
            <h3>lo haces todo a mano</h3>
            <p>Repites tareas que podrían resolverse solas y terminas ocupada en lo que menos importa.</p>
            <div className="yc-miniwin" aria-hidden="true">
              copiando… pegando… copiando…
            </div>
            <Sticker src={STICKERS.cursor} className="yc-card__sticker" />
          </article>

          <article className="yc-card yc-card--wave yc-card--2">
            <span className="yc-card__num">02</span>
            <h3>la IA te suena a otro idioma</h3>
            <p>Cada tutorial parece hecho para alguien que ya sabe demasiado.</p>
            <div className="yc-miniwin yc-miniwin--error" aria-hidden="true">
              ¿Qué significa API?
            </div>
            <span className="yc-chip">explícamelo normal</span>
          </article>

          <article className="yc-card yc-card--rect yc-card--3">
            <span className="yc-card__num">03</span>
            <h3>todo cambia muy rápido</h3>
            <p>Nuevas herramientas, nuevos modelos y otra cosa que supuestamente debes aprender hoy.</p>
            <div className="yc-miniwin" aria-hidden="true">
              nueva actualización disponible
            </div>
            <Sticker src={STICKERS.chihuahua} className="yc-card__sticker yc-card__sticker--dog" />
          </article>
        </div>
      </section>

      {/* ═══ 6 · LAS SERIES ═══ */}
      <section id="series" className="yc-series">
        <div className="yc-series__bg" aria-hidden="true" />
        <header className="yc-series__head">
          <p className="yc-label">05 — las series</p>
          <h2 className="yc-title yc-title--section">
            <span className="yc-title__line">tres formas de entrar</span>
            <span className="yc-title__line">al mundo de Elara Nova</span>
          </h2>
          <p className="yc-series__lead">
            Puedes venir por una plantilla, quedarte por una historia o terminar automatizando medio
            negocio.
          </p>
        </header>

        <div className="yc-series__layout">
          <article className="yc-serie yc-serie--main">
            <span className="yc-serie__num">01</span>
            <span className="yc-chip">automatización</span>
            <h3 className="yc-serie__title">menos a mano</h3>
            <ChatWindow className="yc-serie__chat" title="chat · menos a mano">
              <Msg from="Tú" self>
                ¿esto se puede automatizar?
              </Msg>
              <Msg from="Evelyn">probablemente sí 👀</Msg>
              <Msg from="Tú" self>
                ¿y sin volverme loca?
              </Msg>
              <Msg from="Evelyn">esa es la idea.</Msg>
            </ChatWindow>
            <p className="yc-serie__count">126 episodios</p>
            <Link href="#plantillas" className="yc-btn yc-btn--primary yc-btn--sm">
              ver la serie
            </Link>
            <Sticker src={STICKERS.heart} className="yc-serie__sticker" />
          </article>

          <div className="yc-series__side">
            <article className="yc-serie yc-serie--lila">
              <span className="yc-serie__num">02</span>
              <span className="yc-chip">cursos y tips de IA</span>
              <h3 className="yc-serie__title">lo que siempre pudiste hacer</h3>
              <div className="yc-file" aria-hidden="true">
                <span>archivo recibido:</span>
                <strong>plantilla_que_te_ahorra_3_horas.zip</strong>
              </div>
              <p className="yc-serie__count">episodio 01 muy pronto</p>
              <Link href="#plantillas" className="yc-btn yc-btn--lila yc-btn--sm">
                quiero aprender
              </Link>
            </article>

            <article className="yc-serie yc-serie--soft">
              <span className="yc-serie__num">03</span>
              <span className="yc-chip">storytimes y viajes</span>
              <h3 className="yc-serie__title">pastoreando</h3>
              <ChatWindow className="yc-serie__chat yc-serie__chat--mini" title="amiga chat">
                <Msg from="amiga" self>
                  ¿dónde estás ahora?
                </Msg>
                <Msg from="Evelyn">larga historia…</Msg>
                <Msg from="amiga" self>
                  cuenta.
                </Msg>
                <Msg from="Evelyn">episodio nuevo el domingo.</Msg>
              </ChatWindow>
              <Link href="#sobre-mi" className="yc-btn yc-btn--quiet yc-btn--sm">
                ver storytimes
              </Link>
            </article>
          </div>
        </div>

        <ChatWindow className="yc-series__wait" title="lista de espera ♡">
          <WaitlistForm
            id="wait-series"
            title="¿quieres entrar a la lista de espera?"
            copy="Te aviso antes que a nadie cuando publique una serie, una plantilla o un pack nuevo."
            button="quiero entrar ♡"
            checkbox="también quiero recibir pros, contras y recomendaciones reales."
          />
        </ChatWindow>
      </section>

      {/* ═══ 7 · PLANTILLAS ═══ */}
      <section id="plantillas" className="yc-templates">
        <div className="yc-browser" aria-hidden="true">
          <div className="yc-browser__bar">
            <span />
            <span />
            <span />
            <em>mis documentos &gt; descargas &gt; elara nova</em>
          </div>
        </div>

        <header className="yc-templates__head">
          <h2 className="yc-title yc-title--section">
            <span className="yc-title__line">llévate algo útil</span>
            <span className="yc-title__line">antes de irte</span>
          </h2>
          <p>Plantillas, agentes y recursos para empezar a automatizar hoy.</p>
        </header>

        <div className="yc-templates__grid">
          <div className="yc-files">
            {[
              ['⚙️', 'automatizaciones Make', '124 KB', 'gratis'],
              ['🤖', 'agentes de IA', '86 KB', 'gratis'],
              ['📋', 'plantillas Notion', '210 KB', 'gratis'],
              ['💬', 'prompts listos', '42 KB', 'gratis'],
              ['📄', 'scripts', '67 KB', 'gratis'],
              ['📊', 'dashboards', '155 KB', 'premium'],
              ['✅', 'checklist automatización', '31 KB', 'gratis'],
              ['📁', 'mini CRM', '98 KB', 'premium'],
              ['📅', 'calendario de contenido', '54 KB', 'gratis'],
              ['✉️', 'generador de propuestas', '73 KB', 'premium'],
            ].map(([icon, name, size, tag]) => (
              <article key={name as string} className="yc-filecard">
                <span aria-hidden="true">{icon}</span>
                <div>
                  <strong>{name}</strong>
                  <small>
                    {size} · {tag}
                  </small>
                </div>
                <span className={`yc-chip ${tag === 'premium' ? 'yc-chip--lila' : ''}`}>{tag}</span>
              </article>
            ))}
          </div>

          <ChatWindow className="yc-templates__form" title="tu plantilla está casi lista">
            <ol className="yc-steps">
              <li>Escribe tu correo.</li>
              <li>Elige una plantilla.</li>
              <li>Revisa tu bandeja.</li>
            </ol>
            <WaitlistForm
              id="wait-templates"
              title="enviar a mi correo"
              copy="Cero spam raro. Solo herramientas, tutoriales y opiniones honestas."
              button="enviar a mi correo"
            />
            <p className="yc-progress" aria-hidden="true">
              preparando descarga…
              <i />
            </p>
          </ChatWindow>
        </div>
      </section>

      {/* ═══ 8 · EMPIEZA AQUÍ ═══ */}
      <section id="empieza" className="yc-start">
        <ChatWindow className="yc-start__chat" title="grupo: chicas que ya no hacen todo a mano">
          <p className="yc-start__members" aria-hidden="true">
            Evelyn · Tú · La IA · Tu tiempo libre
          </p>
          <Msg from="Evelyn">descarga una plantilla.</Msg>
          <Msg from="Tú" self>
            pruébala con una tarea real.
          </Msg>
          <Msg from="La IA">tarea completada.</Msg>
          <Msg from="Tu tiempo libre">por fin aparezco.</Msg>
          <Link href="#plantillas" className="yc-btn yc-btn--primary yc-btn--sm">
            quiero empezar
          </Link>
        </ChatWindow>
      </section>

      {/* ═══ 9 · SERVICIOS ═══ */}
      <section id="servicios" className="yc-services">
        <ChatWindow className="yc-services__chat" title="chat privado con Evelyn">
          <Msg from="Evelyn">¿Prefieres delegarlo? Cuéntame qué quieres dejar de hacer a mano.</Msg>

          <div className="yc-attach">
            <article>
              <strong>Automatizaciones a medida</strong>
              <p>Conecto tus herramientas y diseño procesos que trabajan sin perseguirlos todos los días.</p>
            </article>
            <article>
              <strong>Webs que venden</strong>
              <p>Sitios claros, rápidos y pensados para convertir visitas en acciones.</p>
            </article>
            <article>
              <strong>Google Ads</strong>
              <p>Campañas con medición real para entender qué funciona y qué está gastando por gastar.</p>
            </article>
          </div>

          <div className="yc-hero__actions">
            <TrackedLink
              href="/descubrimiento"
              tracking={{ event: 'cta_click', category: 'lead', label: 'home_chat_servicios' }}
              className="yc-btn yc-btn--primary yc-btn--sm"
            >
              abrir conversación
            </TrackedLink>
            <Link href="/servicios" className="yc-btn yc-btn--quiet yc-btn--sm">
              ver servicios
            </Link>
          </div>
        </ChatWindow>
      </section>

      {/* ═══ 10 · SOBRE MÍ ═══ */}
      <section id="sobre-mi" className="yc-about">
        <div className="yc-about__media">
          <figure className="yc-camera">
            <Image
              src={evelynPhotos.homeAbout}
              alt="Evelyn Patiño"
              fill
              quality={90}
              sizes="(max-width: 900px) 90vw, 380px"
            />
            <span className="yc-camera__date">2026.08</span>
          </figure>
          <span className="yc-badge yc-badge--float">8 años haciendo esto</span>
          <p className="yc-sign">Evelyn Patiño</p>
          <div className="yc-status">
            <strong>Evelyn está online</strong>
            <span>Probando una nueva herramienta para contarte si realmente vale la pena.</span>
          </div>
        </div>

        <div className="yc-about__copy">
          <h2 className="yc-title yc-title--section">
            <span className="yc-title__line">de automatizar en banca</span>
            <span className="yc-title__line">a enseñarte cómo hacerlo</span>
          </h2>
          <p>
            He trabajado durante años construyendo sistemas que ahorran tiempo, conectan procesos y
            evitan tareas repetitivas. Ahora convierto ese conocimiento en plantillas, tutoriales y
            herramientas que puedes usar sin tener que hablar como ingeniera.
          </p>

          <ol className="yc-timeline">
            <li>
              <strong>2018 — Evelyn inició sesión</strong>
              <span>Empiezo a trabajar como ingeniera.</span>
            </li>
            <li>
              <strong>2020 — archivo guardado</strong>
              <span>Automatizaciones, sistemas y procesos.</span>
            </li>
            <li>
              <strong>2022 — conexión segura</strong>
              <span>Seis años trabajando en banca.</span>
            </li>
            <li>
              <strong>2026 — nuevo estado</strong>
              <span>Ahora enseño lo que aprendí sin convertirlo en una clase imposible.</span>
            </li>
          </ol>

          <div className="yc-hero__actions">
            <a href="/portfolio" className="yc-btn yc-btn--secondary yc-btn--sm">
              Portfolio
            </a>
            <a href="/cv" className="yc-btn yc-btn--quiet yc-btn--sm">
              CV
            </a>
          </div>
        </div>
      </section>

      {/* ═══ 11 · CIERRE ═══ */}
      <section id="cierre" className="yc-close">
        <div className="yc-close__shapes" aria-hidden="true" />
        <h2 className="yc-title yc-title--close">
          <em className="yc-title__script">Mirá todo</em>
          <span className="yc-title__line">lo que siempre</span>
          <span className="yc-title__line">fuiste capaz de ser.</span>
        </h2>

        <ChatWindow className="yc-close__chat" title="antes de irte…">
          <Msg from="Elara Nova">antes de irte…</Msg>
          <Msg from="Elara Nova">¿quieres una plantilla gratis?</Msg>
          <Msg from="Tú" self>
            obvio.
          </Msg>
          <Msg from="Elara Nova">deja tu correo aquí ♡</Msg>
          <WaitlistForm
            id="wait-close"
            title="enviármela"
            copy="Una plantilla útil. Sin drama."
            button="enviármela"
          />
        </ChatWindow>

        <Sticker src={STICKERS.flip} className="yc-close__sticker yc-close__sticker--flip" />
        <Sticker src={STICKERS.heart} className="yc-close__sticker yc-close__sticker--heart" />
        <Sticker src={STICKERS.cursor} className="yc-close__sticker yc-close__sticker--cursor" />
      </section>
    </main>
  )
}
