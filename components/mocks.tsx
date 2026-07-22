/* Product renders for the hero and work section. Styled as real
   desktop software — light chrome, macOS window furniture, sidebars,
   stat cards — so they read as screenshots of shipped systems. */

function Window({
  title,
  right,
  children,
}: {
  title: string
  right?: string
  children: React.ReactNode
}) {
  return (
    <div className="overflow-hidden rounded-[12px] border border-black/10 bg-[#fbfaf6] text-ink shadow-[0_30px_80px_rgb(0_0_0_/_0.45)]">
      <div className="flex items-center gap-2 border-b border-[#ece7da] bg-white px-4 py-2.5">
        <span className="size-[9px] rounded-full bg-[#ec6a5e]" />
        <span className="size-[9px] rounded-full bg-[#f4bf4f]" />
        <span className="size-[9px] rounded-full bg-[#61c554]" />
        <span className="ml-3 text-[11px] font-medium text-[#6d675a]">
          {title}
        </span>
        {right && (
          <span className="ml-auto rounded-full bg-[#eef1e6] px-2 py-0.5 text-[9px] font-medium tracking-[0.08em] text-[#4c7a45]">
            {right}
          </span>
        )}
      </div>
      {children}
    </div>
  )
}

function StatCard({
  label,
  value,
  tone,
}: {
  label: string
  value: string
  tone?: 'ok' | 'warn'
}) {
  return (
    <div className="rounded-[8px] border border-[#ece7da] bg-white px-3 py-2">
      <p className="text-[8.5px] font-medium tracking-[0.1em] text-[#9a937e] uppercase">
        {label}
      </p>
      <p
        className={`mt-0.5 font-mono text-[15px] ${
          tone === 'warn'
            ? 'text-[#b3452f]'
            : tone === 'ok'
              ? 'text-[#2f6b52]'
              : 'text-ink'
        }`}
      >
        {value}
      </p>
    </div>
  )
}

function Pill({ tone, children }: { tone: 'ok' | 'warn'; children: string }) {
  return (
    <span
      className={`rounded-full px-2 py-0.5 text-[9px] font-medium ${
        tone === 'ok'
          ? 'bg-[#e6efe2] text-[#2f6b52]'
          : 'bg-[#f6ecd4] text-[#8a6a1f]'
      }`}
    >
      {children}
    </span>
  )
}

export function GrcMock() {
  const rows = [
    ['AML-114', 'Transaction monitoring', 'Passed', 'ok'],
    ['REG-207', 'Reg W attestation', 'Passed', 'ok'],
    ['SOX-031', 'Access recertification', 'In review', 'warn'],
    ['KYC-482', 'Beneficial ownership', 'Passed', 'ok'],
  ] as const
  return (
    <Window title="Controls — Q3 Attestation" right="AUDIT READY">
      <div className="flex">
        <div className="hidden w-[110px] shrink-0 border-r border-[#ece7da] bg-[#f5f2ea] p-2.5 sm:block">
          {['Overview', 'Controls', 'Findings', 'Audit trail', 'Reports'].map(
            (item) => (
              <p
                key={item}
                className={`mb-0.5 rounded-[5px] px-2 py-1 text-[10px] ${
                  item === 'Controls'
                    ? 'bg-white font-medium text-ink shadow-[0_1px_2px_rgb(0_0_0_/_0.06)]'
                    : 'text-[#8a8371]'
                }`}
              >
                {item}
              </p>
            )
          )}
        </div>
        <div className="min-w-0 flex-1 p-3">
          <div className="grid grid-cols-3 gap-2">
            <StatCard label="Controls" value="1,204" />
            <StatCard label="Open findings" value="3" tone="warn" />
            <StatCard label="Coverage" value="100%" tone="ok" />
          </div>
          <div className="mt-2 overflow-hidden rounded-[8px] border border-[#ece7da] bg-white">
            {rows.map(([id, name, status, tone]) => (
              <div
                key={id}
                className="flex items-center justify-between border-t border-[#f2eee3] px-3 py-1.5 text-[11px] first:border-t-0"
              >
                <div className="flex min-w-0 items-center gap-2.5">
                  <span className="font-mono text-[10px] text-[#9a937e]">
                    {id}
                  </span>
                  <span className="truncate">{name}</span>
                </div>
                <Pill tone={tone}>{status}</Pill>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Window>
  )
}

export function AgentMock() {
  const feed = [
    ['#2f3ab2', 'Sprint backlog groomed — 6 tasks queued', 'Primary · 02:14', 'Done', 'ok'],
    ['#257c6f', 'Invoice export built, tests passing', 'Claude Code · 02:16', 'Running', 'warn'],
    ['#a97b24', 'Overnight inbox triaged, 3 flagged', 'Subagent A · 02:16', 'Done', 'ok'],
    ['#a97b24', 'Stripe payouts reconciled vs ledger', 'Subagent B · 02:31', 'Done', 'ok'],
  ] as const
  return (
    <Window title="Night Shift — Operations" right="UNATTENDED · 41 DAYS">
      <div className="flex">
        <div className="min-w-0 flex-1 p-3">
          {feed.map(([dot, task, meta, status, tone]) => (
            <div
              key={task}
              className="flex items-center gap-2.5 border-t border-[#f2eee3] py-2 first:border-t-0"
            >
              <span
                className="size-[7px] shrink-0 rounded-full"
                style={{ background: dot }}
              />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11px]">{task}</p>
                <p className="text-[9px] text-[#9a937e]">{meta}</p>
              </div>
              <Pill tone={tone}>{status}</Pill>
            </div>
          ))}
        </div>
        <div className="hidden w-[128px] shrink-0 border-l border-[#ece7da] bg-[#f5f2ea] p-2.5 sm:block">
          <p className="text-[8.5px] font-medium tracking-[0.1em] text-[#9a937e] uppercase">
            Crew
          </p>
          {[
            ['#2f3ab2', 'Primary', 'plans & reviews'],
            ['#257c6f', 'Claude Code', 'engineering'],
            ['#a97b24', 'Subagents ×2', 'scoped ops'],
          ].map(([dot, name, role]) => (
            <div key={name} className="mt-2 flex items-start gap-1.5">
              <span
                className="mt-1 size-[6px] shrink-0 rounded-full"
                style={{ background: dot }}
              />
              <div>
                <p className="text-[10px] font-medium">{name}</p>
                <p className="text-[8.5px] text-[#9a937e]">{role}</p>
              </div>
            </div>
          ))}
          <p className="mt-3 border-t border-[#e3ddcd] pt-2 text-[8.5px] tracking-[0.08em] text-[#9a937e] uppercase">
            Human input
          </p>
          <p className="font-mono text-[13px] text-[#2f6b52]">None</p>
        </div>
      </div>
    </Window>
  )
}

export function FntzMock() {
  const players = [
    ['J. Jefferson', 'WR · MIN', '21.4', 8],
    ['B. Robinson', 'RB · ATL', '17.8', 12],
    ['M. Pittman', 'WR · IND', '11.2', 41],
    ['T. Kelce', 'TE · KC', '14.6', 18],
  ] as const
  return (
    <Window title="FNTZ — Week 8" right="4 LEAGUES SYNCED">
      <div className="p-3">
        <div className="grid grid-cols-3 gap-2">
          <StatCard label="Proj record" value="9–3" tone="ok" />
          <StatCard label="Injury alerts" value="2" tone="warn" />
          <StatCard label="Waiver rank" value="#1" />
        </div>
        <div className="mt-2 overflow-hidden rounded-[8px] border border-[#ece7da] bg-white">
          <div className="flex justify-between border-b border-[#f2eee3] px-3 py-1.5 text-[8.5px] tracking-[0.1em] text-[#9a937e] uppercase">
            <span>Start / sit board</span>
            <span>Proj · Injury risk</span>
          </div>
          {players.map(([name, meta, proj, risk]) => (
            <div
              key={name}
              className="flex items-center justify-between border-t border-[#f2eee3] px-3 py-1.5 text-[11px] first:border-t-0"
            >
              <div className="flex min-w-0 items-center gap-2">
                <span className="truncate font-medium">{name}</span>
                <span className="text-[9px] text-[#9a937e]">{meta}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-[10px]">{proj}</span>
                <div className="h-[3px] w-14 overflow-hidden rounded-full bg-[#eee9db]">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${risk}%`,
                      background: risk > 30 ? '#c0574f' : '#2f6b52',
                    }}
                  />
                </div>
                <span
                  className={`w-7 text-right font-mono text-[10px] ${
                    risk > 30 ? 'text-[#b3452f]' : 'text-[#2f6b52]'
                  }`}
                >
                  {risk}%
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 rounded-[8px] border-l-2 border-amber bg-[#fdf6e6] px-3 py-2 text-[10.5px] text-[#6d5a2a]">
          <span className="font-medium">Advice:</span> Start Kelce over Pittman
          — hamstring risk 41%, projection swing +3.4
        </div>
      </div>
    </Window>
  )
}

export function EtiqaMock() {
  return (
    <div className="flex items-center justify-center rounded-[12px] border border-black/10 bg-band py-10 shadow-[0_30px_80px_rgb(0_0_0_/_0.45)]">
      <div className="w-[200px] rounded-[32px] border border-[#d5cfbd] bg-white p-2.5 shadow-[0_16px_40px_rgb(0_0_0_/_0.25)]">
        <div className="flex aspect-[9/17] items-center justify-center overflow-hidden rounded-[24px] bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/etiqa-logo.png" alt="Etiqa Health" className="w-[84%]" />
        </div>
      </div>
    </div>
  )
}

/* Hero collage: the studio's artifacts layered like a composed still —
   tilted, overlapping, lit by the panel's glow. */
export function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative h-full min-h-[440px]">
      <div className="absolute top-0 right-0 w-[78%] rotate-[1.5deg]">
        <AgentMock />
      </div>
      <div className="absolute bottom-0 left-0 z-10 w-[82%] -rotate-[2deg]">
        <GrcMock />
      </div>
      <div className="absolute right-3 bottom-2 z-20 w-[100px] rotate-[5deg]">
        <div className="rounded-[18px] border border-[#d5cfbd] bg-white p-1.5 shadow-[0_20px_50px_rgb(0_0_0_/_0.5)]">
          <div className="flex aspect-[9/17] items-center justify-center overflow-hidden rounded-[13px] bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/etiqa-logo.png" alt="" className="w-[86%]" />
          </div>
        </div>
      </div>
    </div>
  )
}

export const MOCKS = {
  grc: GrcMock,
  agent: AgentMock,
  etiqa: EtiqaMock,
  fntz: FntzMock,
} as const

export type MockKind = keyof typeof MOCKS
