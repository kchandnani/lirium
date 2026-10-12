import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/mdx-posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()
  
  return [
    {
      url: 'https://lirium.ai',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://lirium.ai/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `https://lirium.ai/blog/${post.slug}`,
      lastModified: new Date(`${post.date}T00:00:00Z`),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
    })),
    {
      url: 'https://lirium.ai/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://lirium.ai/terms',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
}
