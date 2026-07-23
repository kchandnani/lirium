import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Nav } from '@/components/nav'
import { formatDate, getPost, posts, type Block } from '@/lib/posts'

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const post = getPost((await params).slug)
  if (!post) return {}
  return {
    title: `${post.title} — Lirium`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://lirium.ai/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      siteName: 'Lirium',
      images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Lirium' }],
    },
  }
}

/* Renders [text](url) links inside paragraph text. */
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g)
  return (
    <>
      {parts.map((part, i) => {
        const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (!m) return <span key={i}>{part}</span>
        const external = m[2].startsWith('http')
        return (
          <a
            key={i}
            href={m[2]}
            {...(external ? { rel: 'noopener' } : {})}
            className="text-cobalt underline decoration-1 underline-offset-4"
          >
            {m[1]}
          </a>
        )
      })}
    </>
  )
}

function BlockView({ block }: { block: Block }) {
  switch (block.t) {
    case 'h2':
      return (
        <h2 className="display mt-12 text-[24px] tracking-[-0.02em]">
          {block.text}
        </h2>
      )
    case 'p':
      return (
        <p className="mt-5 text-[16px] leading-[1.75] text-[#4a463c]">
          <Inline text={block.text} />
        </p>
      )
    case 'quote':
      return (
        <blockquote className="mt-8 border-l-2 border-cobalt pl-5">
          <p className="display text-[20px] leading-[1.4] tracking-[-0.01em]">
            {block.text}
          </p>
        </blockquote>
      )
    case 'ul':
      return (
        <ul className="mt-5 list-disc space-y-2 pl-5 text-[16px] leading-[1.7] text-[#4a463c]">
          {block.items.map((item) => (
            <li key={item}>
              <Inline text={item} />
            </li>
          ))}
        </ul>
      )
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const post = getPost((await params).slug)
  if (!post) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `https://lirium.ai/blog/${post.slug}`,
    author: { '@type': 'Organization', name: 'Lirium', url: 'https://lirium.ai' },
    publisher: { '@type': 'Organization', name: 'Lirium', url: 'https://lirium.ai' },
  }

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[760px] px-6 pt-16 pb-24 md:pt-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <p className="font-mono text-[11px] tracking-[0.1em] text-steel">
          {formatDate(post.date)} · {post.tags.join(' · ')}
        </p>
        <h1 className="display mt-4 text-[32px] md:text-[44px]">
          {post.title}
        </h1>
        <p className="mt-5 text-[18px] leading-[1.6] text-steel">
          {post.description}
        </p>
        <hr className="mt-8 border-hairline" />
        <article>
          {post.blocks.map((block, i) => (
            <BlockView key={i} block={block} />
          ))}
        </article>
        <div className="mt-14 border-t border-hairline pt-8 md:flex md:items-center md:justify-between">
          <Link
            href="/blog"
            className="font-mono text-[11px] tracking-[0.1em] text-cobalt uppercase"
          >
            ← All posts
          </Link>
          <p className="mt-4 font-mono text-[11px] tracking-[0.1em] text-steel uppercase md:mt-0">
            Building something like this?{' '}
            <a href="mailto:team@lirium.ai" className="text-cobalt">
              team@lirium.ai
            </a>
          </p>
        </div>
      </main>
    </>
  )
}
