import { getAllPosts } from '@/lib/mdx-posts'

export const dynamic = 'force-static'

function esc(s: string) {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

export function GET() {
  const posts = getAllPosts()
  const items = posts
    .map(
      (p) => `    <item>
      <title>${esc(p.title)}</title>
      <link>https://lirium.ai/blog/${p.slug}</link>
      <guid>https://lirium.ai/blog/${p.slug}</guid>
      <pubDate>${new Date(`${p.date}T12:00:00Z`).toUTCString()}</pubDate>
      <description>${esc(p.description)}</description>
    </item>`
    )
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Lirium — Blog</title>
    <link>https://lirium.ai/blog</link>
    <description>Notes from an AI systems studio: automation for real businesses, autonomous agents, and the products we ship.</description>
    <language>en-us</language>
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' },
  })
}
