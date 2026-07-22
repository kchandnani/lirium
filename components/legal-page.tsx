import Link from 'next/link'
import { Nav } from '@/components/nav'

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string
  updated: string
  children: React.ReactNode
}) {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-[760px] px-6 pt-16 pb-24 md:pt-24">
        <p className="eyebrow">LEGAL</p>
        <h1 className="display mt-4 text-[32px] md:text-[44px]">{title}</h1>
        <p className="mono-label mt-4 text-steel">Last updated: {updated}</p>
        <div className="legal-body mt-12">{children}</div>
        <p className="mt-16 border-t border-hairline pt-8">
          <Link href="/" className="mono-label text-cobalt">
            ← lirium.ai
          </Link>
        </p>
      </main>
    </>
  )
}
