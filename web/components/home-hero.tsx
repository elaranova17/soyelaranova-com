import Image from 'next/image'
import Link from 'next/link'
import { evelynPhotos } from '@/lib/evelyn-photos'

const HERO_BLUR =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAQAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQb/xAAhEAACAgICAQUAAAAAAAAAAAABAgQRAAMFEhMhMVFx8P/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREA/9oADAMBAAIRAxEAPwALi4cWRAktt6nYtKLeul+x/fGFKQyg5R7OJCc7MhRhWl9Fp2JFXQH36nDIEKKdLrL843I5RgoFCsAxdVkN/9k='

const ABOUT_BLUR =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAQAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k='

/** Hero scrapboard multicapa · assets propios en /brand/scrap */
export function HomeHero() {
  return (
    <section id="inicio" className="scrap-hero scrap-hero--layers home-hero--c3" aria-label="Inicio">
      <div className="scrap-hero__copy">
        <p className="scrap-tag">Automatización + IA + sistemas</p>
        <h1 className="scrap-hero__title">
          <span className="scrap-hero__impact">Automatiza</span>
          <span className="scrap-hero__script-wrap">
            <em className="scrap-hero__script">como quieras.</em>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="scrap-hero__underline"
              src="/brand/scrap/underline.svg"
              alt=""
              width={280}
              height={28}
            />
          </span>
        </h1>
        <p className="scrap-hero__lead">
          Diseño sistemas, automatizo procesos y construyo agentes para que recuperes lo más
          valioso que tienes: tiempo.
        </p>
        <div className="scrap-hero__actions">
          <Link href="#oferta" className="home-button home-button--primary">
            Ver cómo funciona →
          </Link>
          <Link href="/servicios" className="scrap-link-quiet">
            Explorar servicios +
          </Link>
        </div>
      </div>

      <div className="scrap-hero__stage" aria-hidden="true">
        <div className="scrap-collage scrap-collage--dense">
          {/* Foto principal · escritorio */}
          <figure className="scrap-shot">
            <span className="scrap-tape scrap-tape--shot-a" />
            <span className="scrap-tape scrap-tape--shot-b" />
            <Image
              src={evelynPhotos.homeAbout}
              alt=""
              fill
              priority
              quality={90}
              placeholder="blur"
              blurDataURL={ABOUT_BLUR}
              sizes="(max-width: 900px) 92vw, 520px"
              className="scrap-shot__img"
            />
          </figure>

          {/* Polaroid secundaria · retrato */}
          <figure className="scrap-polaroid scrap-polaroid--mini">
            <span className="scrap-tape scrap-tape--mini" />
            <div className="scrap-polaroid__frame">
              <Image
                src={evelynPhotos.homeHero}
                alt=""
                fill
                quality={85}
                placeholder="blur"
                blurDataURL={HERO_BLUR}
                sizes="160px"
                className="scrap-polaroid__img"
              />
            </div>
            <figcaption className="scrap-polaroid__cap">Evelyn · ingeniera</figcaption>
          </figure>

          {/* Nota manuscripta */}
          <aside className="scrap-note-strip">
            <p>ideas → plan → automate → freedom ♡</p>
          </aside>

          {/* Sticky quote */}
          <aside className="scrap-sticky scrap-sticky--quote">
            <p className="scrap-sticky__note">
              No necesitas trabajar más.
              <br />
              Necesitas diseñar mejor.
            </p>
          </aside>

          {/* Ventana agente */}
          <aside className="scrap-window scrap-window--agent">
            <header className="scrap-window__bar">
              <span className="scrap-window__dots" />
              <span className="scrap-window__title">agent_03.py</span>
            </header>
            <div className="scrap-window__body">
              <div className="scrap-window__meter scrap-window__meter--70" />
              <ul>
                <li>libertad</li>
                <li>enfoque</li>
                <li>vida propia</li>
              </ul>
            </div>
          </aside>

          {/* Terminal */}
          <aside className="scrap-window scrap-window--term">
            <header className="scrap-window__bar scrap-window__bar--dark">
              <span className="scrap-window__dots" />
              <span className="scrap-window__title">terminal</span>
            </header>
            <pre className="scrap-term">
              {`$ automate --life
$ conectando ideas…
$ menos a mano ✓`}
            </pre>
          </aside>

          {/* Workflow */}
          <aside className="scrap-window scrap-window--workflow scrap-window--workflow-dense">
            <header className="scrap-window__bar">
              <span className="scrap-window__dots" />
              <span className="scrap-window__title">workflow.exe</span>
            </header>
            <ol className="scrap-window__list">
              <li>idea</li>
              <li>plan</li>
              <li>automatizar</li>
              <li className="is-done">libertad · 100%</li>
            </ol>
            <div className="scrap-window__bar-fill" />
          </aside>

          {/* Props propios */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="scrap-prop scrap-prop--cup" src="/brand/scrap/taza.svg" alt="" width={88} height={88} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="scrap-prop scrap-prop--vaso" src="/brand/scrap/vaso.svg" alt="" width={56} height={80} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="scrap-prop scrap-prop--clip" src="/brand/scrap/clip.svg" alt="" width={28} height={38} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="scrap-prop scrap-prop--spark-a" src="/brand/scrap/destello.svg" alt="" width={36} height={36} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="scrap-prop scrap-prop--spark-b" src="/brand/scrap/destello.svg" alt="" width={24} height={24} />
        </div>
      </div>

      <aside className="scrap-tools-strip" aria-label="Herramientas">
        <span className="scrap-tools-strip__label">Trabajo con</span>
        <ul>
          <li>Make</li>
          <li>Zapier</li>
          <li>n8n</li>
          <li>OpenAI</li>
        </ul>
      </aside>
    </section>
  )
}
