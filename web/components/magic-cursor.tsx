'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function MagicCursor() {
  const [visible, setVisible] = useState(false)
  const [clicking, setClicking] = useState(false)
  const [onInteractive, setOnInteractive] = useState(false)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)

  const cursorX = useSpring(mx, { stiffness: 900, damping: 32 })
  const cursorY = useSpring(my, { stiffness: 900, damping: 32 })
  const trailX  = useSpring(mx, { stiffness: 180, damping: 38 })
  const trailY  = useSpring(my, { stiffness: 180, damping: 38 })

  useEffect(() => {
    // ocultar cursor nativo solo en desktop
    if (window.matchMedia('(pointer: coarse)').matches) return

    document.documentElement.style.cursor = 'none'

    const onMove = (e: MouseEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)
      setVisible(true)
      const el = e.target as Element
      setOnInteractive(
        el.closest('a, button, [role=button], input, textarea, label') !== null
      )
    }
    const onLeave  = () => setVisible(false)
    const onEnter  = () => setVisible(true)
    const onDown   = () => setClicking(true)
    const onUp     = () => setClicking(false)

    document.addEventListener('mousemove',  onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)
    document.addEventListener('mousedown',  onDown)
    document.addEventListener('mouseup',    onUp)
    return () => {
      document.documentElement.style.cursor = ''
      document.removeEventListener('mousemove',  onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.removeEventListener('mousedown',  onDown)
      document.removeEventListener('mouseup',    onUp)
    }
  }, [mx, my])

  return (
    <>
      {/* Halo de trail — sigue lento */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9997] rounded-full"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
          width:  onInteractive ? 48 : 32,
          height: onInteractive ? 48 : 32,
          opacity: visible ? 1 : 0,
          background: 'radial-gradient(circle, rgba(212,175,55,0.18) 0%, transparent 70%)',
          border: '1px solid rgba(212,175,55,0.25)',
          transition: 'width 0.3s ease, height 0.3s ease, opacity 0.3s ease',
        }}
      />

      {/* Punto principal — sigue rápido */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-[#D4AF37]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          width:  clicking ? 5 : onInteractive ? 10 : 7,
          height: clicking ? 5 : onInteractive ? 10 : 7,
          opacity: visible ? 1 : 0,
          boxShadow: '0 0 8px rgba(212,175,55,0.9), 0 0 20px rgba(212,175,55,0.4)',
          transition: 'width 0.15s ease, height 0.15s ease, opacity 0.3s ease',
        }}
      />

      {/* Sparkle central cuando hace click */}
      {clicking && (
        <motion.div
          aria-hidden
          className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full"
          style={{
            x: cursorX,
            y: cursorY,
            translateX: '-50%',
            translateY: '-50%',
            width: 24,
            height: 24,
            background: 'radial-gradient(circle, rgba(212,175,55,0.5) 0%, transparent 60%)',
          }}
          initial={{ scale: 0.5, opacity: 0.8 }}
          animate={{ scale: 2.5, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      )}
    </>
  )
}
