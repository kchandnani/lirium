'use client'

import { useState } from 'react'

/* Two states, one switch. Flip it and every number flips with it —
   the story is money and time. */

const STATS = [
  {
    label: 'TIME SPENT ON ADMIN',
    before: { big: '11 hrs / week', note: 'typing invoices, counting stock, chasing payments' },
    after: { big: '40 min / week', note: 'you review and approve — workflows do the work' },
  },
  {
    label: 'MONEY SITTING OVERDUE',
    before: { big: '$8,400', note: 'nobody noticed invoice 0043 was never sent' },
    after: { big: '$0', note: 'invoices send, remind, and reconcile themselves' },
  },
  {
    label: 'HOW WORK GETS DONE',
    before: { big: 'By hand, ×6 tools', note: 'the same order retyped into three different places' },
    after: { big: 'Automated end-to-end', note: 'order → invoice → inventory → books, untouched' },
  },
]

function Pane({ side, active }: { side: 'before' | 'after'; active: boolean }) {
  const isBefore = side === 'before'
  return (
    <div
      aria-hidden={!active}
      className={`absolute inset-0 flex flex-col p-5 transition-all duration-500 ease-out md:p-8 ${
        isBefore ? 'bg-[#f1e9d6]' : 'bg-[#fbf9f2]'
      } ${active ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
    >
      <div className="flex h-[24px] items-center justify-between font-mono text-[10px] tracking-[0.14em]">
        <span className={isBefore ? 'text-[#b3452f]' : 'text-[#2f6b52]'}>
          {isBefore ? 'THE OLD WAY' : 'WITH LIRIUM'}
        </span>
        <span
          className={`rounded-[3px] px-2 py-0.5 ${
            isBefore
              ? 'bg-[#efd9cc] text-[#b3452f]'
              : 'bg-[#e3ecdf] text-[#2f6b52]'
          }`}
        >
          {isBefore ? 'EVERY WEEK' : 'RUNNING ITSELF'}
        </span>
      </div>
      <div className="flex flex-1 flex-col justify-evenly">
        {STATS.map((stat, i) => {
          const v = isBefore ? stat.before : stat.after
          return (
            <div
              key={stat.label}
              className={`border-t py-3 md:py-4 ${
                isBefore ? 'border-[#ddd2b8]' : 'border-[#e8e3d2]'
              } transition-all duration-500 md:grid md:grid-cols-12 md:items-baseline md:gap-4 ${
                active ? 'translate-y-0' : 'translate-y-2'
              }`}
              style={{ transitionDelay: active ? `${i * 70}ms` : '0ms' }}
            >
              <span className="font-mono text-[10px] tracking-[0.14em] text-[#9a937e] md:col-span-4">
                {stat.label}
              </span>
              <span
                className={`display block text-[24px] md:col-span-4 md:text-[32px] ${
                  isBefore ? 'text-[#b3452f]' : 'text-[#2f6b52]'
                }`}
              >
                {v.big}
              </span>
              <span className="text-[12px] text-steel md:col-span-4 md:text-[13px]">
                {v.note}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function BeforeAfter() {
  const [after, setAfter] = useState(false)

  return (
    <div>
      <div
        role="tablist"
        aria-label="Before and after Lirium"
        className="inline-flex rounded-full border border-[#cfc9b6] bg-[#efeadd] p-1 font-mono text-[11px] tracking-[0.1em]"
      >
        <button
          type="button"
          role="tab"
          aria-selected={!after}
          onClick={() => setAfter(false)}
          className={`rounded-full px-4 py-1.5 transition-colors duration-200 ${
            !after ? 'bg-ink text-paper' : 'text-steel hover:text-ink'
          }`}
        >
          THE OLD WAY
        </button>
        <button
          type="button"
          role="tab"
          aria-selected={after}
          onClick={() => setAfter(true)}
          className={`rounded-full px-4 py-1.5 transition-colors duration-200 ${
            after ? 'bg-ink text-paper' : 'text-steel hover:text-ink'
          }`}
        >
          WITH LIRIUM
        </button>
      </div>

      <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-[10px] border border-hairline sm:aspect-[16/9] md:aspect-[2.5/1]">
        <Pane side="before" active={!after} />
        <Pane side="after" active={after} />
      </div>
    </div>
  )
}
