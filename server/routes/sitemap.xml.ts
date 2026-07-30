export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const siteUrl = config.public.siteUrl.replace(/\/$/, '')
  const urls = ['/fr', '/en']

  setHeader(event, 'content-type', 'application/xml; charset=UTF-8')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(path => `  <url><loc>${siteUrl}${path}</loc></url>`).join('\n')}
</urlset>`
})
