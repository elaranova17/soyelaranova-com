'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

type ScrollRevealOptions = {
  index?: number
  staggerMs?: number
  threshold?: number
  translateY?: number
  translateX?: number
}

const HIDDEN_TRANSITION = 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'

/** Entrada al viewport — paridad con elara-nova-animations.js */
export function useScrollReveal<T extends HTMLElement = HTMLElement>({
  index = 0,
  staggerMs = 150,
  threshold = 0.2,
  translateY = 30,
  translateX = 0,
}: ScrollRevealOptions = {}) {
  const [visible, setVisible] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const timeoutRef = useRef<number | undefined>(undefined)

  const disconnect = useCallback(() => {
    observerRef.current?.disconnect()
    observerRef.current = null
    if (timeoutRef.current !== undefined) {
      window.clearTimeout(timeoutRef.current)
      timeoutRef.current = undefined
    }
  }, [])

  useEffect(() => () => disconnect(), [disconnect])

  const setRef = useCallback(
    (node: T | null) => {
      disconnect()
      if (!node) return

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduced) {
        queueMicrotask(() => setVisible(true))
        return
      }

      const io = new IntersectionObserver(
        ([entry]) => {
          if (!entry?.isIntersecting) return
          timeoutRef.current = window.setTimeout(() => setVisible(true), index * staggerMs)
          io.disconnect()
          observerRef.current = null
        },
        { threshold, rootMargin: '0px 0px -8% 0px' },
      )

      observerRef.current = io
      io.observe(node)
    },
    [disconnect, index, staggerMs, threshold],
  )

  const style = visible
    ? {
        opacity: 1,
        transform: 'translate(0, 0)',
        transition: HIDDEN_TRANSITION,
      }
    : {
        opacity: 0,
        transform: `translate(${translateX}px, ${translateY}px)`,
        transition: HIDDEN_TRANSITION,
      }

  return { setRef, visible, style }
}
