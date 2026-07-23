import type { Metadata } from 'next'
import Link from 'next/link'
import { Nav } from '@/components/nav'
import { formatDate, posts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'Blog — Lirium',
  description:
    'Notes from an AI systems studio: automation for real businesses, autonomous agents, and the products we ship.',
  alternates: { canonical: '/blog' },
}

export default function Blog() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[1200px] px-6 pt-16 pb-24 md:pt-24">
        <p className="eyebrow">BLOG</p>
        <h1 className="display mt-4 text-[40px] md:text-[64px]">
          Notes from the <span className="text-cobalt">studio</span>.
        </h1>
        <p className="mt-6 max-w-[58ch] text-[16px] text-steel">
          What we learn building systems for clients and shipping our own —
          written down so you don’t have to learn it the expensive way.
        </p>

        <div className="mt-14">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group border-t border-hairline py-10 md:grid md:grid-cols-12 md:gap-6"
            >
              <div className="font-mono text-[11px] tracking-[0.1em] text-steel md:col-span-3">
                <p>{formatDate(post.date)}</p>
                <p className="mt-1">{post.tags.join(' · ')}</p>
              </div>
              <div className="mt-3 md:col-span-9 md:mt-0">
                <h2 className="display text-[26px] tracking-[-0.02em] md:text-[30px]">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition-colors duration-150 group-hover:text-cobalt"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 max-w-[65ch] text-[15px] text-steel">
                  {post.description}
                </p>
                <p className="mt-4">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-mono text-[11px] tracking-[0.1em] text-cobalt uppercase"
                  >
                    Read →
                  </Link>
                </p>
              </div>
            </article>
          ))}
        </div>
      </main>
    </>
  )
}
