import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export type PostMetadata = {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
}

export type Post = PostMetadata & {
  content: string
}

export function getAllPosts(): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug: data.slug as string,
        title: data.title as string,
        description: data.description as string,
        date: data.date as string,
        tags: data.tags as string[],
        content,
      }
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1))

  return posts
}

export function getPost(slug: string): Post | undefined {
  const posts = getAllPosts()
  return posts.find((p) => p.slug === slug)
}

export function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`)
    .toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      timeZone: 'UTC',
    })
    .toUpperCase()
}
