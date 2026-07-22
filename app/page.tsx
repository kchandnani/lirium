import Link from 'next/link'
import { Nav } from '@/components/nav'
import { Reveal } from '@/components/reveal'
import { IrisRule } from '@/components/iris-rule'
import { MOCKS, HeroVisual } from '@/components/mocks'
import { BeforeAfter } from '@/components/before-after'
import { strings } from '@/lib/strings'

function Headline({
  text,
  accent,
  className = '',
}: {
  text: { pre: string; accent: string; post: string }
  accent: 'text-cobalt' | 'text-verdigris' | 'text-amber'
  className?: string
}) {
  return (
    <h2 className={`display text-[40px] md:text-[64px] ${className}`}>
      {text.pre}
      <span className={accent}>{text.accent}</span>
      {text.post}
    </h2>
  )
}

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
        {/* Hero — dark panel, framed by paper */}
        <section className="mx-auto max-w-[1200px] px-4 pt-4 pb-20 md:px-6 md:pt-8">
          <div className="hero-fade relative overflow-hidden rounded-[16px] bg-dark text-paper">
            {/* iris glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0"
            >
              <div className="absolute -top-32 -left-24 size-[440px] rounded-full bg-[#2f3ab2] opacity-30 blur-[110px]" />
              <div className="absolute top-1/3 -right-24 size-[440px] rounded-full bg-[#2c8c7d] opacity-20 blur-[110px]" />
              <div className="absolute -bottom-32 left-1/3 size-[400px] rounded-full bg-[#b8862f] opacity-15 blur-[110px]" />
            </div>

            <div className="relative grid gap-12 p-8 md:grid-cols-12 md:gap-8 md:p-14">
              <div className="flex flex-col justify-center md:col-span-5">
                <div className="inline-block self-start">
                  <span className="display block text-[26px] lowercase leading-none">
                    lirium
                  </span>
                  <div className="mt-2">
                    <IrisRule />
                  </div>
                </div>
                <p className="eyebrow mt-12 text-dark-muted">
                  {strings.hero.eyebrow}
                </p>
                <h1 className="display mt-4 text-[40px] md:text-[54px]">
                  {strings.hero.headline.pre}
                  <span className="text-[#5fb394]">
                    {strings.hero.headline.accent}
                  </span>
                  {strings.hero.headline.post}
                </h1>
                <p className="mt-6 max-w-[44ch] text-[15px] leading-[1.7] text-dark-muted">
                  {strings.hero.subline}
                </p>
                <p className="mt-9">
                  <a
                    href={`mailto:${strings.contact.email}`}
                    className="pill pill-light"
                  >
                    {strings.hero.cta} <span aria-hidden="true">↗</span>
                  </a>
                </p>
              </div>
              <div className="hidden md:col-span-7 md:block">
                <HeroVisual />
              </div>
            </div>

            <div className="relative flex flex-col gap-2 border-t border-dark-line px-8 py-5 font-mono text-[10px] tracking-[0.14em] text-dark-muted md:flex-row md:justify-between md:px-14">
              {strings.hero.meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </section>

        {/* What we do + how we engage — band */}
        <section id="how" className="scroll-mt-14 bg-band">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
            <Reveal>
              <p className="eyebrow">{strings.how.eyebrow}</p>
              <Headline
                text={strings.how.headline}
                accent="text-verdigris"
                className="mt-4"
              />
            </Reveal>
            <Reveal>
              <div className="mt-12">
                <BeforeAfter />
              </div>
            </Reveal>
            <Reveal>
              <div className="mt-14 grid gap-x-12 gap-y-12 md:grid-cols-3">
                {strings.how.items.map((item) => (
                  <article
                    key={item.label}
                    className="border-t border-[#cfc9b6] pt-5"
                  >
                    <p className="eyebrow">{item.label}</p>
                    <h3 className="display mt-3 text-[22px] tracking-[-0.02em]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[15px] text-steel">{item.body}</p>
                  </article>
                ))}
              </div>
              <div className="mt-14 grid gap-x-12 md:grid-cols-2">
                {strings.how.terms.map((row) => (
                  <div
                    key={row.k}
                    className="grid grid-cols-[190px_1fr] items-baseline border-t border-[#cfc9b6] py-3 font-mono text-[11px] tracking-[0.06em]"
                  >
                    <span className="text-steel">{row.k}</span>
                    <span className="text-ink/80">{row.v}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Work — dark band */}
        <section id="work" className="scroll-mt-14 bg-dark text-paper">
          <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
            <Reveal>
              <p className="eyebrow text-dark-muted">{strings.work.eyebrow}</p>
              <Headline
                text={strings.work.headline}
                accent="text-verdigris"
                className="mt-4 [&_span]:text-[#5fb394]"
              />
            </Reveal>
            <div className="mt-8">
              {strings.work.items.map((item, i) => {
                const Mock = MOCKS[item.mock]
                return (
                  <Reveal key={item.title}>
                    <article className="border-t border-dark-line py-14 first:border-t-0 md:grid md:grid-cols-12 md:items-center md:gap-12">
                      <div
                        className={`md:col-span-6 ${
                          i % 2 === 1 ? 'md:order-2' : ''
                        }`}
                      >
                        <Mock />
                      </div>
                      <div
                        className={`mt-8 md:col-span-6 md:mt-0 ${
                          i % 2 === 1 ? 'md:order-1' : ''
                        }`}
                      >
                        <p className="eyebrow text-dark-muted">{item.meta}</p>
                        <h3 className="display mt-3 text-[32px] md:text-[40px]">
                          {item.title}
                        </h3>
                        <p className="mt-4 max-w-[58ch] text-[15px] leading-[1.7] text-dark-muted">
                          {item.body}
                        </p>
                        <div className="mt-6">
                          {item.spec.map((row) => (
                            <div
                              key={row.k}
                              className="grid grid-cols-[110px_1fr] border-t border-dark-line py-2 font-mono text-[11px] tracking-[0.06em]"
                            >
                              <span className="text-[#6f6a58]">{row.k}</span>
                              <span className="text-[#c9c2ae]">{row.v}</span>
                            </div>
                          ))}
                        </div>
                        {item.link && (
                          <p className="mt-5">
                            <a
                              href={item.link.href}
                              className="pill pill-light text-[13px]"
                            >
                              {item.link.label} <span aria-hidden="true">↗</span>
                            </a>
                          </p>
                        )}
                      </div>
                    </article>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </section>

      </main>

      {/* Contact / Footer — dark closer */}
      <footer id="contact" className="scroll-mt-14 bg-dark text-paper">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28">
          <p className="eyebrow text-dark-muted">{strings.contact.eyebrow}</p>
          <h2 className="display mt-4 text-[40px] md:text-[64px]">
            {strings.contact.headline.pre}
            <span className="text-[#5fb394]">
              {strings.contact.headline.accent}
            </span>
            {strings.contact.headline.post}
          </h2>
          <div className="mt-10 md:grid md:grid-cols-12 md:items-end md:gap-6">
            <div className="md:col-span-7">
              <a
                href={`mailto:${strings.contact.email}`}
                className="pill pill-light"
              >
                {strings.contact.email} <span aria-hidden="true">↗</span>
              </a>
              <p className="mt-5 max-w-[50ch] text-[15px] text-dark-muted">
                {strings.contact.blurb}
              </p>
            </div>
            <div className="mt-12 space-y-2 font-mono text-[11px] tracking-[0.08em] text-dark-muted uppercase md:col-span-5 md:mt-0 md:text-right">
              <p>{strings.contact.location}</p>
              <p>{strings.contact.entity}</p>
              <p className="pt-3">
                <Link
                  href="/privacy"
                  className="transition-colors duration-150 hover:text-paper"
                >
                  {strings.contact.legal.privacy}
                </Link>
                {' · '}
                <Link
                  href="/terms"
                  className="transition-colors duration-150 hover:text-paper"
                >
                  {strings.contact.legal.terms}
                </Link>
                {' · '}
                {strings.contact.copyright}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
