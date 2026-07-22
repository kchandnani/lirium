'use client'

import { useEffect, useState } from 'react'
import { strings } from '@/lib/strings'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-10 bg-paper/95 backdrop-blur-sm border-b transition-colors duration-150 ${
        scrolled ? 'border-hairline' : 'border-transparent'
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-[1120px] items-baseline justify-between px-6 py-4"
      >
        <a href="/#top" className="display text-[19px] lowercase">
          lirium
        </a>
        <div className="flex gap-7">
          <a
            href="/#work"
            className="text-[14px] text-steel transition-colors duration-150 hover:text-ink"
          >
            {strings.nav.work}
          </a>
          <a
            href="/#contact"
            className="text-[14px] text-steel transition-colors duration-150 hover:text-ink"
          >
            {strings.nav.contact}
          </a>
        </div>
      </nav>
    </header>
  )
}
