import fs from 'fs'
import path from 'path'

const baseUrl = 'https://nikhiltiwari.dev'

const pages = [
  { url: '/', priority: 1.0, changefreq: 'daily' },
  { url: '/#about', priority: 0.9, changefreq: 'weekly' },
  { url: '/#skills', priority: 0.9, changefreq: 'weekly' },
  { url: '/#experience', priority: 0.8, changefreq: 'monthly' },
  { url: '/#projects', priority: 0.9, changefreq: 'weekly' },
  { url: '/#achievements', priority: 0.8, changefreq: 'monthly' },
  { url: '/#contact', priority: 0.7, changefreq: 'monthly' },
]

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
  `).join('')}
</urlset>`

  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap)
  console.log('Sitemap generated successfully!')
}

generateSitemap()