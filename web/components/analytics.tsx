import Script from 'next/script'

/** GA4 opcional: set NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXX en Vercel. */
export function Analytics() {
  const measurementId = (process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? '').trim()
  if (!measurementId || !/^G-[A-Z0-9]+$/i.test(measurementId)) return null

  return (
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
  )
}
