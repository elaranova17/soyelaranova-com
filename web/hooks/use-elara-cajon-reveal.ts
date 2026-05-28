'use client'

import { useEffect, useRef, useState } from 'react'

/** Reveal escalonado al entrar en viewport (misma lógica que elara-nova-animations.js) */
export function useElaraCajonReveal(index: number) {
  const ref = useRef<HTMLAnchorElement>(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      queueMicrotask(() => setRevealed(true))
      return
    }

    let timeoutId: number | undefined

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return
        timeoutId = window.setTimeout(() => setRevealed(true), index * 80)
        io.disconnect()
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )

    io.observe(el)
    return () => {
      io.disconnect()
      if (timeoutId !== undefined) window.clearTimeout(timeoutId)
    }
  }, [index])

  return { ref, revealed }
}
