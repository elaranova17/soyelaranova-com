'use client'

import { useCallback, type MouseEvent } from 'react'

/** Ripple en .tool-card — paridad con elara-nova-animations.js */
export function useToolCardRipple() {
  return useCallback((event: MouseEvent<HTMLElement>) => {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = event.clientX - rect.left - size / 2
    const y = event.clientY - rect.top - size / 2

    const ripple = document.createElement('span')
    ripple.setAttribute('aria-hidden', 'true')
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      left: ${x}px;
      top: ${y}px;
      background: radial-gradient(circle, rgba(201,169,110,0.3) 0%, transparent 70%);
      border-radius: 50%;
      transform: scale(0);
      animation: rippleEffect 0.6s ease-out;
      pointer-events: none;
    `
    card.appendChild(ripple)
    window.setTimeout(() => ripple.remove(), 600)
  }, [])
}
