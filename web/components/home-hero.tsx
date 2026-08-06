'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Plus } from 'lucide-react'
const A = '/brand/scrap/pixel'

function Spark({ className, size }: { className: string; size: number }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      className={`scrap-spark ${className}`}
      src={`${A}/star-quote.svg`}
      alt=""
      width={size}
      height={size}
    />
  )
}

/** HeroScrapbookCollage — capas % independientes */
function HeroScrapbookCollage() {
  return (
    <div className="hx-collage scrap-collage" aria-hidden="true">
      {/* lavender brush */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="scrap-brush"
        src="/textures/lavender-brush.png"
        alt=""
        width={400}
        height={180}
      />

      {/* travel polaroid */}
      <figure className="scrap-travel">
        <span className="scrap-travel__tape" />
        <div className="scrap-travel__photo">
          <Image
            src="/images/airplane-wing-sunset.png"
            alt=""
            fill
            sizes="220px"
            className="scrap-travel__img"
          />
        </div>
      </figure>

      {/* ideas notebook */}
      <aside className="scrap-ideas">
        {`ideas
→ plan
→ automate
→ freedom  ♡`}
      </aside>

      {/* boarding pass */}
      <aside className="scrap-boarding">
        <p className="scrap-boarding__route">ZRH &nbsp;→&nbsp; MAD</p>
        <p>14 MAY 25</p>
        <p>SEAT 06A</p>
        <p>BUSINESS</p>
        <span className="scrap-boarding__barcode" />
      </aside>

      {/* main portrait (transparent) */}
      <figure className="scrap-portrait">
        <Image
          src="/images/evelyn-transparent-hero.png"
          alt=""
          width={900}
          height={1235}
          priority
          quality={90}
          className="scrap-portrait__img"
          sizes="(max-width: 900px) 90vw, 40vw"
        />
      </figure>

      {/* lavender post-it */}
      <aside className="scrap-postit">
        <span className="scrap-postit__tape" />
        {`No necesitas
trabajar más.
Necesitas
diseñar mejor.  ♡`}
      </aside>

      {/* laptop */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="scrap-laptop"
        src="/images/macbook-front.svg"
        alt=""
        width={900}
        height={560}
      />

      {/* terminal */}
      <div className="scrap-win scrap-win--term">
        <header className="scrap-win__head">
          <span className="scrap-win__dots" aria-hidden>
            <i />
            <i />
            <i />
          </span>
          <span>terminal</span>
        </header>
        <pre className="scrap-win__body">{`$ automate --life
$ conectando ideas...
$ creando sistema...
$ más tiempo desbloqueado.
$ listo.
$ _`}</pre>
      </div>

      {/* agent_03.py */}
      <div className="scrap-win scrap-win--agent">
        <header className="scrap-win__head">
          <span className="scrap-win__dots" aria-hidden>
            <i />
            <i />
            <i />
          </span>
          <span>agent_03.py</span>
        </header>
        <div className="scrap-win__body">
          <p>status: running</p>
          <p>objetivo:</p>
          <p>+ libertad</p>
          <p>+ enfoque</p>
          <p>+ vida propia</p>
          <div className="scrap-progress">
            <span className="scrap-progress__track">
              <span className="scrap-progress__fill" style={{ width: '70%' }} />
            </span>
            <em>70%</em>
          </div>
        </div>
      </div>

      {/* workflow.exe */}
      <div className="scrap-win scrap-win--workflow">
        <header className="scrap-win__head">
          <span className="scrap-win__dots" aria-hidden>
            <i />
            <i />
            <i />
          </span>
          <span>workflow.exe</span>
        </header>
        <div className="scrap-win__body">
          <p>01. idea</p>
          <p>02. plan</p>
          <p>03. automatizar</p>
          <p>04. delegar</p>
          <p>05. escalar</p>
          <div className="scrap-progress">
            <span className="scrap-progress__track scrap-progress__track--wf">
              <span className="scrap-progress__fill scrap-progress__fill--wf" style={{ width: '100%' }} />
            </span>
            <em>100%</em>
          </div>
        </div>
      </div>

      {/* pink drink — delante del portátil, detrás de workflow */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="scrap-drink"
        src="/images/pink-iced-drink-transparent.svg"
        alt=""
        width={200}
        height={320}
      />

      {/* binder clip */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="scrap-clip"
        src="/images/pink-binder-clip.svg"
        alt=""
        width={74}
        height={80}
      />

      <Spark className="scrap-spark--a" size={20} />
      <Spark className="scrap-spark--b" size={16} />
      <Spark className="scrap-spark--c" size={25} />
      <Spark className="scrap-spark--d" size={16} />
      <Spark className="scrap-spark--e" size={20} />
      <Spark className="scrap-spark--f" size={16} />
    </div>
  )
}

/**
 * EditorialAutomationHero — collage scrapboard 43/57
 * Foto: Evelyn real cutout (nunca el modelo del mock)
 */
export function HomeHero() {
  return (
    <div className="hx editorial-hero">
      <section id="inicio" className="hx-main" aria-label="Inicio">
        {/* ── HeroEditorialCopy (~43%) ── */}
        <div className="hx-copy hero-editorial-copy">
          <p className="hx-tag">Automatización &nbsp;+&nbsp; IA &nbsp;+&nbsp; sistemas</p>
          <h1 className="hx-title">
            <span className="hx-impact">Automatiza</span>
            <span className="hx-script-wrap">
              <em className="hx-script">como quieras.</em>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="hx-underline"
                src={`${A}/underline-hand.svg`}
                alt=""
                width={438}
                height={22}
              />
            </span>
          </h1>
          <p className="hx-lead">{`Diseño sistemas, automatizo procesos
y construyo agentes para que recuperes
lo más valioso que tienes: tiempo.`}</p>
          <div className="hx-actions">
            <Link href="#oferta" className="hx-btn">
              <span>Ver cómo funciona</span>
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden />
            </Link>
            <Link href="/#oferta" className="hx-link">
              <span className="hx-link__label">Explorar labs</span>
              <span className="hx-link__plus" aria-hidden="true">
                <Plus size={14} strokeWidth={1.75} />
              </span>
            </Link>
          </div>
          <p className="hx-aside">
            {`"Sistemas pensados
para mujeres que lideran,
crecen y viajan."`}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="hx-aside__star" src={`${A}/star-quote.svg`} alt="" width={18} height={18} />
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="hx-cup"
            src={`${A}/coffee-cup-top-view.svg`}
            alt=""
            width={220}
            height={220}
          />
        </div>

        <HeroScrapbookCollage />

        {/* ── CertificationTape ── */}
        <aside className="cert-tape" aria-label="Certificaciones">
          <p className="cert-tape__intro">Certificada en</p>
          <ul className="cert-tape__brands">
            <li>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${A}/logo-make.svg`} alt="Make" width={56} height={16} />
            </li>
            <li>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${A}/logo-zapier.svg`} alt="Zapier" width={68} height={16} />
            </li>
            <li>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${A}/logo-n8n.svg`} alt="n8n" width={42} height={16} />
            </li>
            <li>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${A}/logo-openai.svg`} alt="OpenAI" width={78} height={16} />
            </li>
          </ul>
        </aside>
      </section>

      {/* ── EditorialMetricsStrip ── */}
      <section className="metrics-strip" aria-label="Resultados">
        <div className="metrics-strip__cell">
          <strong>+120</strong>
          <span>{`SISTEMAS
DISEÑADOS`}</span>
        </div>
        <div className="metrics-strip__cell">
          <strong>+8K</strong>
          <span>{`HORAS
AHORRADAS`}</span>
        </div>
        <div className="metrics-strip__cell">
          <strong>+27</strong>
          <span>{`INDUSTRIAS
IMPACTADAS`}</span>
        </div>
        <div className="metrics-strip__cell metrics-strip__cell--wide">
          <strong>97%</strong>
          <span>{`CLIENTAS SATISFECHAS
Y REPITEN`}</span>
        </div>
        <div className="metrics-strip__seal-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="metrics-strip__seal"
            src={`${A}/seal-metrics.svg`}
            alt=""
            width={102}
            height={102}
          />
        </div>
        <blockquote className="metrics-strip__quote">
          <p>{`"Elara entendió mi negocio y creó
un sistema que me ahorra 15 horas
a la semana."`}</p>
          <footer>Cliente, Suiza</footer>
        </blockquote>
        <figure className="metrics-strip__polaroid">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="metrics-strip__clip"
            src="/images/pink-binder-clip.svg"
            alt=""
            width={28}
            height={30}
          />
          <div className="metrics-strip__polaroid-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/coastal-europe-polaroid.png"
              alt=""
              width={190}
              height={124}
              className="metrics-strip__polaroid-img"
            />
          </div>
        </figure>
      </section>
    </div>
  )
}

export { HomeHero as EditorialAutomationHero }
export { HomeHero as HeroEditorialCopy }
export { HeroScrapbookCollage }
export { HomeHero as CertificationTape }
export { HomeHero as EditorialMetricsStrip }
