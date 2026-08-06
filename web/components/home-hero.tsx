import Image from 'next/image'
import Link from 'next/link'
import { evelynPhotos } from '@/lib/evelyn-photos'

const HERO_BLUR =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAQAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQb/xAAhEAACAgICAQUAAAAAAAAAAAABAgQRAAMFEhMhMVFx8P/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREA/9oADAMBAAIRAxEAPwALi4cWRAktt6nYtKLeul+x/fGFKQyg5R7OJCc7MhRhWl9Fp2JFXQH36nDIEKKdLrL843I5RgoFCsAxdVkN/9k='

const ABOUT_BLUR =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAQAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='

const A = '/brand/scrap/pixel'

/**
 * EditorialAutomationHero — collage scrapboard 43/57
 * Capas: texturas → viaje → notebook → retrato → desk → terminales → stickers → foreground
 * Foto: Evelyn real (nunca el modelo del mock)
 */
export function HomeHero() {
  return (
    <div className="hx editorial-hero">
      <section id="inicio" className="hx-main" aria-label="Inicio">
        {/* ── left copy (~43%) ── */}
        <div className="hx-copy">
          <p className="hx-tag">Automatización + IA + sistemas</p>
          <h1 className="hx-title">
            <span className="hx-impact">Automatiza</span>
            <span className="hx-script-wrap">
              <em className="hx-script">como quieras.</em>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="hx-underline" src="/brand/scrap/underline.svg" alt="" width={280} height={28} />
            </span>
          </h1>
          <p className="hx-lead">
            Diseño sistemas, automatizo procesos y construyo agentes para que recuperes lo más
            valioso que tienes: tiempo.
          </p>
          <div className="hx-actions">
            <Link href="#oferta" className="hx-btn">
              Ver cómo funciona →
            </Link>
            <Link href="/servicios" className="hx-link">
              Explorar servicios <span aria-hidden="true">+</span>
            </Link>
          </div>
          <p className="hx-aside">
            Sistemas pensados para mujeres que lideran, creen y viajan.
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hx-cup" src="/brand/scrap/taza.svg" alt="" width={88} height={88} />
        </div>

        {/* ── right collage (~57%) — capas independientes, sin rectángulo contenedor ── */}
        <div className="hx-collage" aria-hidden="true">
          {/* 1 · background paper textures */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hx-layer hx-layer--graph" src={`${A}/graph.svg`} alt="" width={200} height={160} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hx-layer hx-layer--torn" src={`${A}/torn.svg`} alt="" width={320} height={120} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hx-layer hx-layer--brush" src={`${A}/brush.svg`} alt="" width={280} height={80} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hx-layer hx-layer--spark-a" src={`${A}/spark.svg`} alt="" width={28} height={28} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hx-layer hx-layer--spark-b" src={`${A}/spark.svg`} alt="" width={20} height={20} />

          {/* 2 · travel photograph */}
          <figure className="hx-polaroid">
            <span className="hx-tape hx-tape--a" />
            <span className="hx-tape hx-tape--b" />
            <div className="hx-polaroid__frame">
              <Image
                src={evelynPhotos.homeHero}
                alt=""
                fill
                quality={85}
                placeholder="blur"
                blurDataURL={HERO_BLUR}
                sizes="180px"
                className="hx-polaroid__img"
              />
            </div>
          </figure>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hx-layer hx-layer--boarding" src={`${A}/boarding.svg`} alt="" width={160} height={70} />

          {/* 3 · notebook paper */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hx-layer hx-layer--note" src={`${A}/note.svg`} alt="" width={210} height={80} />

          {/* 4 · portrait (centro visual; invade el eje; laptop al borde inferior) */}
          <figure className="hx-person">
            <Image
              src={evelynPhotos.homeAbout}
              alt=""
              fill
              priority
              quality={90}
              placeholder="blur"
              blurDataURL={ABOUT_BLUR}
              sizes="(max-width: 900px) 95vw, 62vw"
              className="hx-person__img"
            />
          </figure>

          {/* 5 · desk objects */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hx-layer hx-layer--drink" src={`${A}/drink.svg`} alt="" width={70} height={100} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hx-layer hx-layer--clip" src="/brand/scrap/clip.svg" alt="" width={28} height={38} />

          {/* 6 · terminal windows */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hx-layer hx-layer--term" src={`${A}/terminal.svg`} alt="" width={220} height={132} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hx-layer hx-layer--agent" src={`${A}/agent.svg`} alt="" width={200} height={148} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hx-layer hx-layer--workflow" src={`${A}/workflow.svg`} alt="" width={220} height={168} />

          {/* 7 · stickers and tape */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hx-layer hx-layer--sticky" src={`${A}/sticky.svg`} alt="" width={168} height={158} />

          {/* 8 · foreground details */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hx-layer hx-layer--spark-c" src={`${A}/spark.svg`} alt="" width={16} height={16} />
        </div>
      </section>

      {/* ── certification-strip ── */}
      <aside className="hx-cert" aria-label="Herramientas">
        <span className="hx-tape hx-tape--cert" />
        <p className="hx-cert__label">Certificada en</p>
        <ul className="hx-cert__list">
          <li>Make</li>
          <li>Zapier</li>
          <li>n8n</li>
          <li>OpenAI</li>
        </ul>
      </aside>

      {/* ── metrics-strip ── */}
      <section className="hx-metrics" aria-label="Resultados">
        <div className="hx-metrics__grid">
          <div>
            <strong>+120</strong>
            <span>sistemas diseñados</span>
          </div>
          <div>
            <strong>+8K</strong>
            <span>horas ahorradas</span>
          </div>
          <div>
            <strong>+27</strong>
            <span>industrias impactadas</span>
          </div>
          <div>
            <strong>97%</strong>
            <span>clientas satisfechas y repiten</span>
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="hx-metrics__seal" src={`${A}/seal.svg`} alt="" width={120} height={120} />
        <blockquote className="hx-metrics__quote">
          <p>
            “Elara entendió mi negocio y creó un sistema que me ahorra 15 horas a la semana.”
          </p>
          <footer>Cliente, Suiza</footer>
        </blockquote>
        <figure className="hx-metrics__mini">
          <Image
            src={evelynPhotos.atmosphere}
            alt=""
            fill
            sizes="96px"
            className="hx-metrics__mini-img"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="hx-metrics__clip" src="/brand/scrap/clip.svg" alt="" width={22} height={30} />
        </figure>
      </section>
    </div>
  )
}

export { HomeHero as EditorialAutomationHero }
