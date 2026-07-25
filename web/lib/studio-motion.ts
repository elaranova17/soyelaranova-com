/**
 * Motion canónico CapCut · mismo easing/timing en TODAS las secciones B2B.
 * No inventar curvas por página.
 */
export const studioEase = [0.22, 1, 0.36, 1] as const

export const studioMotion = {
  duration: 0.72,
  delayStep: 0.08,
  y: 28,
  ease: studioEase,
} as const

export const studioRise = {
  hidden: { opacity: 0, y: studioMotion.y },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: studioMotion.duration,
      ease: studioMotion.ease,
    },
  },
} as const

export const studioStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: studioMotion.delayStep,
      delayChildren: 0.06,
    },
  },
} as const
