import { MetadataRoute } from 'next'
import { BASE_URL } from '../config/urls'
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/_next/static/', '/favicon.ico'],
      }
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
