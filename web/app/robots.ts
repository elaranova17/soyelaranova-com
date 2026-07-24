import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/lp/', '/preview/', '/api/', '/gracias'],
      },
    ],
    sitemap: 'https://soyelaranova.com/sitemap.xml',
  }
}
