'use client'

/**
 * LenisProvider — scroll suave + anclas # con offset de nav fijo.
 */
import Lenis from 'lenis'
import { useEffect } from 'react'

const NAV_OFFSET = -88

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (prefersReducedMotion) return

    const lenis = new Lenis({
      duration: 0.95,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.15,
      touchMultiplier: 1.1,
    })

    let rafId = 0
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    const onAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      )
      if (!anchor) return
      const hash = anchor.getAttribute('href')
      if (!hash || hash === '#') return
      const target = document.querySelector(hash)
      if (!target) return
      event.preventDefault()
      lenis.scrollTo(target, { offset: NAV_OFFSET, duration: 1.05 })
    }

    document.addEventListener('click', onAnchorClick)

    const scrollToHash = () => {
      const hash = window.location.hash
      if (!hash) return
      const target = document.querySelector(hash)
      if (target) {
        lenis.scrollTo(target, { offset: NAV_OFFSET, duration: 1.05, immediate: false })
      }
    }

    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)

    return () => {
      cancelAnimationFrame(rafId)
      document.removeEventListener('click', onAnchorClick)
      window.removeEventListener('hashchange', scrollToHash)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
