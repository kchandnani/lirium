import Link from 'next/link'
import { Nav } from '@/components/nav'
import { Reveal } from '@/components/reveal'
import { IrisRule } from '@/components/iris-rule'
import { strings } from '@/lib/strings'

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-20 focus:bg-paper focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <div id="top" />
      <Nav />

      <main id="main">
        {/* Hero */}
        <section className="mx-auto max-w-[1120px] px-6 pt-20 pb-24 md:pt-32">
          <div className="hero-fade">
            <div className="inline-block">
              <span className="display block text-[28px] font-semibold lowercase leading-none">
                lirium
              </span>
              <div className="mt-2">
                <IrisRule />
              </div>
            </div>
            <p className="mono-label mt-12 text-steel">
              {strings.hero.eyebrow}
            </p>
            <h1 className="display mt-6 max-w-[18ch] text-[36px] md:text-[64px]">
              {strings.hero.headline}
            </h1>
            <p className="mt-8 max-w-[65ch] text-[20px] leading-[1.6] text-steel">
              {strings.hero.subline}
            </p>
            <p className="mt-10">
              <a
                href={`mailto:${strings.contact.email}`}
                className="text-cobalt underline underline-offset-4 decoration-1"
              >
                {strings.hero.cta}
              </a>
            </p>
            <div className="mono-label mt-16 flex flex-col gap-3 border-t border-hairline pt-6 text-steel md:flex-row md:justify-between">
              {strings.hero.meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        <hr className="mx-auto max-w-[1120px] border-hairline" />

        {/* Engagements */}
        <section className="mx-auto max-w-[1120px] px-6 py-20 md:py-32">
          <Reveal>
            <p className="mono-label text-steel">
              {strings.engagements.eyebrow}
            </p>
            <div className="mt-10 grid gap-px overflow-hidden rounded-2 border border-hairline bg-hairline md:grid-cols-3">
              {strings.engagements.items.map((item) => (
                <article
                  key={item.label}
                  className="bg-paper p-8 shadow-[0_1px_2px_rgb(0_0_0_/_0.04)] transition-colors duration-150"
                >
                  <p className="mono-label text-steel">{item.label}</p>
                  <h2 className="display mt-4 text-[20px]">{item.title}</h2>
                  <p className="mt-3 max-w-[65ch] text-steel">{item.body}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <hr className="mx-auto max-w-[1120px] border-hairline" />

        {/* Work */}
        <section
          id="work"
          className="mx-auto max-w-[1120px] scroll-mt-20 px-6 py-20 md:py-32"
        >
          <Reveal>
            <p className="mono-label text-steel">{strings.work.eyebrow}</p>
            <div className="mt-4">
              {strings.work.items.map((item) => (
                <article
                  key={item.title}
                  className="border-b border-hairline py-10 last:border-b-0 md:grid md:grid-cols-12 md:gap-6"
                >
                  <p className="mono-label text-steel md:col-span-4">
                    {item.meta}
                  </p>
                  <div className="md:col-span-8">
                    <h2 className="display mt-3 text-[28px] md:mt-0">
                      {item.title}
                    </h2>
                    <p className="mt-3 max-w-[65ch] text-steel">{item.body}</p>
                    {item.link && (
                      <p className="mt-3">
                        <a
                          href={item.link.href}
                          className="text-cobalt underline underline-offset-4 decoration-1"
                        >
                          {item.link.label}
                        </a>
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <hr className="mx-auto max-w-[1120px] border-hairline" />

        {/* Approach */}
        <section
          id="approach"
          className="mx-auto max-w-[1120px] scroll-mt-20 px-6 py-20 md:py-32"
        >
          <Reveal>
            <p className="mono-label text-steel">{strings.approach.eyebrow}</p>
            <div className="mt-10 grid gap-x-12 gap-y-12 md:grid-cols-2">
              {strings.approach.items.map((item) => (
                <div key={item.title} className="border-t border-hairline pt-6">
                  <h2 className="display text-[20px]">{item.title}</h2>
                  <p className="mt-3 max-w-[55ch] text-steel">{item.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <hr className="mx-auto max-w-[1120px] border-hairline" />

        {/* Studio */}
        <section
          id="studio"
          className="mx-auto max-w-[1120px] scroll-mt-20 px-6 py-20 md:py-32"
        >
          <Reveal>
            <p className="mono-label text-steel">{strings.studio.eyebrow}</p>
            <p className="mt-8 max-w-[65ch] text-[20px] leading-[1.6]">
              {strings.studio.body}
            </p>
          </Reveal>
        </section>
      </main>

      <hr className="mx-auto max-w-[1120px] border-hairline" />

      {/* Contact / Footer */}
      <footer
        id="contact"
        className="mx-auto max-w-[1120px] scroll-mt-20 px-6 py-20 md:py-32"
      >
        <p className="mono-label text-steel">{strings.contact.eyebrow}</p>
        <div className="mt-10 md:grid md:grid-cols-12 md:gap-6">
          <div className="md:col-span-7">
            <p className="display text-[28px] md:text-[36px]">
              <a
                href={`mailto:${strings.contact.email}`}
                className="transition-colors duration-150 hover:text-cobalt"
              >
                {strings.contact.email}
              </a>
            </p>
            <p className="mt-4 max-w-[50ch] text-steel">
              {strings.contact.blurb}
            </p>
          </div>
          <div className="mono-label mt-12 space-y-2 text-[13px] text-steel md:col-span-5 md:mt-0 md:text-right">
            <p>{strings.contact.location}</p>
            <p>{strings.contact.entity}</p>
            <p className="pt-4">
              <Link
                href="/privacy"
                className="transition-colors duration-150 hover:text-ink"
              >
                {strings.contact.legal.privacy}
              </Link>
              {' · '}
              <Link
                href="/terms"
                className="transition-colors duration-150 hover:text-ink"
              >
                {strings.contact.legal.terms}
              </Link>
              {' · '}
              {strings.contact.copyright}
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
