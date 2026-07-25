import Script from 'next/script'
import { Analytics as VercelAnalytics } from '@vercel/analytics/next'

/** GA4 opcional + Vercel Web Analytics. Set NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXX en Vercel. */
export function Analytics() {
  const measurementId = (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '').trim()
  const gaEnabled = Boolean(measurementId && /^G-[A-Z0-9]+$/i.test(measurementId))

  return (
    <>
      {gaEnabled ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${measurementId}', { anonymize_ip: true });
`}
          </Script>
        </>
      ) : null}
      <VercelAnalytics />
    </>
  )
}
