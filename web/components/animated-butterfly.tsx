'use client'

/**
 * Mariposa que vuela en figure-8 con las alas alternando cada 180ms.
 *
 * Implementation: a GSAP timeline drives translate+rotate on the wrapper
 * across four bezier waypoints that trace a soft figure-8 inside a 600x400
 * box. A separate setInterval toggles between ButterflyOpen / ButterflyFlap
 * so the wings read as flapping. Variants accept a hueClass to recolor
 * each butterfly separately (gold, soft gold, lavender, etc).
 */
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ButterflyOpen, ButterflyFlap } from './butterflies'

type Props = {
  /** Total flight loop duration in seconds. */
  duration?: number
  /** Delay before flight starts (lets multiple butterflies stagger). */
  delay?: number
  /** Wing-flap interval in ms. */
  flapMs?: number
  /** Tailwind text-* class for stroke color. */
  hueClass?: string
  /** Pixel size of the butterfly. */
  size?: number
  /** Bounding box the flight is contained in. Match parent for clean layout. */
  box?: { w: number; h: number }
}

export function AnimatedButterfly({
  duration = 6,
  delay = 0,
  flapMs = 180,
  hueClass = 'text-[var(--color-gold-bright)]',
  size = 60,
  box = { w: 600, h: 400 },
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [flapping, setFlapping] = useState(false)

  // Wing-flap toggle — pure React state, no DOM thrash.
  useEffect(() => {
    const id = window.setInterval(() => setFlapping((v) => !v), flapMs)
    return () => window.clearInterval(id)
  }, [flapMs])

  // Figure-8 flight via GSAP timeline.
  useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    const { w, h } = box
    const tl = gsap.timeline({ repeat: -1, delay })
    const seg = duration / 4

    gsap.set(el, { x: 0, y: h * 0.85, rotation: 0 })

    tl.to(el, { x: w * 0.33, y: h * 0.15, rotation: 25,  duration: seg, ease: 'sine.inOut' })
      .to(el, { x: w * 0.66, y: h * 0.55, rotation: -15, duration: seg, ease: 'sine.inOut' })
      .to(el, { x: w,        y: h * 0.10, rotation: 20,  duration: seg, ease: 'sine.inOut' })
      .to(el, { x: 0,        y: h * 0.85, rotation: 0,   duration: seg, ease: 'sine.inOut' })

    return () => {
      tl.kill()
    }
  }, [duration, delay, box])

  return (
    <div
      ref={wrapRef}
      className={`pointer-events-none absolute left-0 top-0 ${hueClass}`}
      style={{ width: size, height: size * 0.75, willChange: 'transform' }}
    >
      {flapping ? (
        <ButterflyFlap className="h-full w-full" />
      ) : (
        <ButterflyOpen className="h-full w-full" />
      )}
    </div>
  )
}
