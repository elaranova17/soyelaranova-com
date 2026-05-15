/**
 * Mariposas — ornate art-nouveau line-art butterflies for the Fairy World hero.
 * Stroke color follows `currentColor`, so wrap with a Tailwind text-* class to tint.
 *
 * Two poses are exported so animations can alternate frames for a wing-flap loop.
 */
import type { SVGProps } from 'react'

type ButterflyProps = SVGProps<SVGSVGElement>

export function ButterflyOpen(props: ButterflyProps) {
  return (
    <svg
      viewBox="0 0 80 60"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M40,52c0,0-1.7-6-1.7-10.3c0-3,1.7-7.7,1.7-7.7s1.7,4.7,1.7,7.7C41.7,46,40,52,40,52z" />
      <circle cx={40} cy={31} r={1} fill="currentColor" stroke="none" />
      <circle cx={40} cy={27} r={1} fill="currentColor" stroke="none" />
      <circle cx={40} cy={23} r={1} fill="currentColor" stroke="none" />
      <path d="M38.3,34C28,34,10,38,5,25c-2.4-6.3,1.3-15,10-15c8,0,18,5,23.3,11" />
      <path d="M41.7,34C52,34,70,38,75,25c2.4-6.3-1.3-15-10-15c-8,0-18,5-23.3,11" />
      <path d="M38.3,41.7C28,42,8,55,3,45c-2.8-5.6,4-13,12-13c5,0,15,3,23.3,7" />
      <path d="M41.7,41.7C52,42,72,55,77,45c2.8-5.6-4-13-12-13c-5,0-15,3-23.3,7" />
      <path d="M22,18c0,0,5,3,5,8c0,4-4,6-7,4s-4-6,0-7s8,1,8,6s-3,7-7,7c-5,0-9-4-9-9c0-6,6-11,12-11C30,12,36,16,36,22" />
      <path d="M58,18c0,0-5,3-5,8c0,4,4,6,7,4s4-6,0-7s-8,1-8,6s3,7,7,7c5,0,9-4,9-9c0-6-6-11-12-11C50,12,44,16,44,22" />
      <path d="M38.3,21.5c-2-3-3.3-8.5-1.3-12.5c2-4,7-5,7-5s-1,2-2,5s0,7,2,9" strokeWidth={1} />
      <path d="M41.7,21.5c2-3,3.3-8.5,1.3-12.5c-2-4-7-5-7-5s1,2,2,5s0,7,-2,9" strokeWidth={1} />
    </svg>
  )
}

export function ButterflyFlap(props: ButterflyProps) {
  return (
    <svg
      viewBox="0 0 70 55"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path d="M35,47c0,0-1.7-6-1.7-10.3c0-3,1.7-7.7,1.7-7.7s1.7,4.7,1.7,7.7C36.7,41,35,47,35,47z" />
      <circle cx={35} cy={26} r={1} fill="currentColor" stroke="none" />
      <circle cx={35} cy={22} r={1} fill="currentColor" stroke="none" />
      <circle cx={35} cy={18} r={1} fill="currentColor" stroke="none" />
      <path d="M33.3,29C25,23,12,18,5,22c-3.4,2-2.7,9.3,2,15.6c4.6,6.2,16.4,12.4,26.3,10.4" />
      <path d="M36.7,29C45,23,58,18,65,22c3.4,2,2.7,9.3-2,15.6C58.4,43.8,46.6,50,36.7,48" />
      <path d="M22,23c0,0,4.2,0.8,5.8,5.6c1.2,3.8-1.7,7.1-4.9,6.2s-5.6-4.9-2.5-7.6s7.9-1.3,9.5,3.3s-1,8-4.9,9.4c-4.8,1.7-10.4,0-12-4.8C11.5,30,15,24.4,20.4,22.2C25.8,20,31.5,21.5,33.3,27.5" />
      <path d="M48,23c0,0-4.2,0.8-5.8,5.6c-1.2,3.8,1.7,7.1,4.9,6.2s5.6-4.9,2.5-7.6s-7.9-1.3-9.5,3.3s1,8,4.9,9.4c4.8,1.7,10.4,0,12-4.8C60.5,30,57,24.4,51.6,22.2C46.2,20,40.5,21.5,38.7,27.5" />
      <path d="M33.3,16.5c-2-3-3.3-8.5-1.3-12.5c2-4,7-5,7-5s-1,2-2,5s0,7,2,9" strokeWidth={1} />
      <path d="M36.7,16.5c2-3,3.3-8.5,1.3-12.5c-2-4-7-5-7-5s1,2,2,5s0,7,-2,9" strokeWidth={1} />
    </svg>
  )
}
