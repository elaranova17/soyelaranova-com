'use client'

import Link from 'next/link'
import type { ComponentProps, MouseEvent, ReactNode } from 'react'

type TrackingPayload = {
  event: string
  category?: string
  label?: string
  service?: string
}

type WindowWithTracking = Window & {
  dataLayer?: Array<Record<string, unknown>>
  gtag?: (command: 'event', eventName: string, params?: Record<string, unknown>) => void
  plausible?: (eventName: string, options?: { props?: Record<string, unknown> }) => void
}

type TrackedLinkProps = Omit<ComponentProps<typeof Link>, 'href' | 'onClick'> & {
  href: string
  children: ReactNode
  tracking: TrackingPayload
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
}

export function TrackedLink({ href, tracking, onClick, children, ...props }: TrackedLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    const win = window as WindowWithTracking
    const payload = {
      event: tracking.event,
      event_category: tracking.category,
      event_label: tracking.label,
      service: tracking.service,
      href,
    }

    win.dataLayer?.push(payload)
    win.gtag?.('event', tracking.event, payload)
    win.plausible?.(tracking.event, {
      props: {
        category: tracking.category,
        label: tracking.label,
        service: tracking.service,
        href,
      },
    })

    onClick?.(event)
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
