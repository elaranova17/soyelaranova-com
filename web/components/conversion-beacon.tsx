'use client'

import { useEffect } from 'react'

type WindowWithTracking = Window & {
  dataLayer?: Array<Record<string, unknown>>
  gtag?: (command: 'event', eventName: string, params?: Record<string, unknown>) => void
}

/** Dispara un evento GA4/dataLayer una vez al montar (páginas /gracias). */
export function ConversionBeacon({
  event,
  label,
  value,
  currency = 'CHF',
}: {
  event: string
  label: string
  value?: number
  currency?: string
}) {
  useEffect(() => {
    const win = window as WindowWithTracking
    const payload: Record<string, unknown> = {
      event_category: 'conversion',
      event_label: label,
    }
    if (typeof value === 'number') {
      payload.value = value
      payload.currency = currency
    }
    win.dataLayer?.push({ event, ...payload })
    win.gtag?.('event', event, payload)
  }, [currency, event, label, value])

  return null
}
