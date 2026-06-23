'use client'

/**
 * LenisProvider — scroll suave + anclas # con offset de nav fijo.
 * El menú lateral pausa Lenis con eventos lenis:stop / lenis:start (sin overflow:hidden en body).
 */
import Lenis from 'lenis'
import { useEffect } from 'react'

const NAV_OFFSET = -88

function scrollTargetFromHash(hash: string): HTMLElement | null {
  const el = document.querySelector(hash)
  return el instanceof HTMLElement ? el : null
}

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

    document.documentElement.classList.add('lenis')

    let rafId = 0
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    const onStop = () => lenis.stop()
    const onStart = () => lenis.start()

    window.addEventListener('lenis:stop', onStop)
    window.addEventListener('lenis:start', onStart)

    const onAnchorClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      )
      if (!anchor) return
      const hash = anchor.getAttribute('href')
      if (!hash || hash === '#') return
      const target = scrollTargetFromHash(hash)
      if (!target) return
      event.preventDefault()
      window.dispatchEvent(new Event('lenis:start'))
      lenis.scrollTo(target, { offset: NAV_OFFSET, duration: 1.05 })
    }

    document.addEventListener('click', onAnchorClick)

    const scrollToHash = () => {
      const hash = window.location.hash
      if (!hash) return
      const target = scrollTargetFromHash(hash)
      if (target) {
        lenis.scrollTo(target, { offset: NAV_OFFSET, duration: 1.05, immediate: false })
      }
    }

    scrollToHash()
    window.addEventListener('hashchange', scrollToHash)

    const onResize = () => lenis.resize()
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('lenis:stop', onStop)
      window.removeEventListener('lenis:start', onStart)
      document.removeEventListener('click', onAnchorClick)
      window.removeEventListener('hashchange', scrollToHash)
      window.removeEventListener('resize', onResize)
      document.documentElement.classList.remove('lenis')
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
