import Image from 'next/image'
import Link from 'next/link'
import { evelynPhotos } from '@/lib/evelyn-photos'

const HERO_BLUR =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAAQAAwDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABQb/xAAhEAACAgICAQUAAAAAAAAAAAABAgQRAAMFEhMhMVFx8P/EABUBAQEAAAAAAAAAAAAAAAAAAAID/8QAFhEBAQEAAAAAAAAAAAAAAAAAAREA/9oADAMBAAIRAxEAPwALi4cWRAktt6nYtKLeul+x/fGFKQyg5R7OJCc7MhRhWl9Fp2JFXQH36nDIEKKdLrL843I5RgoFCsAxdVkN/9k='

/**
 * Hero limpio · assets diseñados en Figma primero
 * Board: "Hero Scrap Assets · C3" en Foundations
 * Ver docs/FIGMA_ASSETS_FIRST.md
 *
 * Composición: Polaroid + sticky Figma + workflow Figma + note Figma
 * Sin cajas CSS placeholder / boarding / scribble.
 */
export function HomeHero() {
  return (
    <section id="inicio" className="scrap-hero scrap-hero--clean home-hero--c3" aria-label="Inicio">
      <div className="scrap-hero__copy">
        <p className="scrap-brand">Elara Nova</p>
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
          Sistemas, webs y Ads que trabajan por ti. Menos a mano, más libertad.
        </p>
        <div className="scrap-hero__actions">
          <Link href="/descubrimiento" className="home-button home-button--primary">
            Hablemos →
          </Link>
          <Link href="/servicios" className="scrap-link-quiet">
            Ver servicios
          </Link>
        </div>
        <p className="scrap-hero__proof">8 años automatizando · 6 en banca</p>
      </div>

      <div className="scrap-hero__stage" aria-hidden="true">
        <div className="scrap-collage scrap-collage--clean">
          {/* Polaroid · foto Evelyn */}
          <figure className="scrap-polaroid scrap-polaroid--hero">
            <span className="scrap-tape scrap-tape--tl" />
            <span className="scrap-tape scrap-tape--tr" />
            <div className="scrap-polaroid__frame">
              <Image
                src={evelynPhotos.homeHero}
                alt=""
                fill
                priority
                quality={90}
                placeholder="blur"
                blurDataURL={HERO_BLUR}
                sizes="(max-width: 900px) 88vw, 420px"
                className="scrap-polaroid__img"
              />
            </div>
            <figcaption className="scrap-polaroid__cap">Evelyn · ingeniera</figcaption>
          </figure>

          {/* Sticky · diseño Figma */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="scrap-asset scrap-asset--sticky"
            src="/brand/scrap/figma/sticky-quote.svg"
            alt=""
            width={168}
            height={158}
          />

          {/* Note · export Figma */}
          <Image
            className="scrap-asset scrap-asset--note"
            src="/brand/scrap/figma/note-ideas.png"
            alt=""
            width={210}
            height={103}
            quality={95}
          />

          {/* workflow.exe · export Figma */}
          <Image
            className="scrap-asset scrap-asset--workflow"
            src="/brand/scrap/figma/workflow.png"
            alt=""
            width={220}
            height={179}
            quality={95}
          />
        </div>
      </div>
    </section>
  )
}
