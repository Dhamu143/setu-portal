import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Define any private routes you might add later
    },
    // Replace with your actual production domain once deployed
    sitemap: 'https://setu-ten-rust.vercel.app/sitemap.xml',
  }
}
