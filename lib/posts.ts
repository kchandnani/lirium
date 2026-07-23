// Blog content. Posts are typed blocks (no MDX dependency) so they
// render inside the design system and stay trivial to add to.
// Inline links use [text](url) syntax inside paragraph text.

export type Block =
  | { t: 'h2'; text: string }
  | { t: 'p'; text: string }
  | { t: 'quote'; text: string }
  | { t: 'ul'; items: string[] }

export type Post = {
  slug: string
  title: string
  description: string
  date: string // ISO
  tags: string[]
  blocks: Block[]
}

export const posts: Post[] = [
  {
    slug: 'the-spreadsheet-tax',
    title: 'The spreadsheet tax: what manual admin really costs',
    description:
      'Eleven hours a week and thousands sitting in overdue invoices — the quiet cost of running a business on spreadsheets and WhatsApp, and what automation actually changes.',
    date: '2026-07-14',
    tags: ['AUTOMATION', 'SMALL BUSINESS'],
    blocks: [
      {
        t: 'p',
        text: 'Nobody budgets for the spreadsheet. It arrived free with the computer, it does what you tell it, and fifteen years later the entire operation runs through it — plus a WhatsApp group, plus a folder of files named FINAL_final(3).xlsx. The cost never shows up on a P&L, which is exactly why it survives.',
      },
      { t: 'h2', text: 'Where the hours go' },
      {
        t: 'ul',
        items: [
          'Typing the same order into three places: the quote, the invoice, the inventory sheet.',
          'Chasing payments by memory — and finding out in month three that an invoice was never sent.',
          'Answering "which file is the real one?" because three versions of the truth are circulating.',
          'Rebuilding a report every month that a system could write in seconds.',
        ],
      },
      {
        t: 'p',
        text: 'When we run advisory sessions with founders, the number that comes back is remarkably consistent: eight to twelve hours a week of pure administration for a typical small operation, concentrated on whoever can least afford to lose it — usually the owner.',
      },
      { t: 'h2', text: 'What automation actually changes' },
      {
        t: 'p',
        text: 'The point is not prettier software. It is that entire chains of work stop needing hands: an order becomes an invoice, the invoice sends itself, reminds itself, reconciles itself against the bank, and adjusts inventory on the way through. You review and approve. The workflow does the work.',
      },
      {
        t: 'quote',
        text: 'The test for automating anything: does it pay for itself? If it doesn’t, we tell you to skip it.',
      },
      { t: 'h2', text: 'What not to automate' },
      {
        t: 'p',
        text: 'Plenty. Anything you do twice a year. Anything where judgment is the product. Any process that is still changing shape every month — automate a moving target and you buy software that fights you. A good roadmap sequences what pays back first; that is the entire purpose of our [advisory sessions](/#how).',
      },
      {
        t: 'p',
        text: 'If you want the honest number for your own operation, one conversation is usually enough to find it: [team@lirium.ai](mailto:team@lirium.ai).',
      },
    ],
  },
  {
    slug: 'night-shift-autonomous-agent',
    title: 'Night Shift: the employee that never clocks out',
    description:
      'We run a fully autonomous AI operator inside our own studio — work gets planned, done, and reviewed overnight. Here’s what that means for a business, without the buzzwords.',
    date: '2026-06-30',
    tags: ['AUTONOMOUS AGENTS', 'AI OPERATIONS'],
    blocks: [
      {
        t: 'p',
        text: 'Every morning we walk into the office and review work that got done while we slept. We call the system Night Shift: a fully autonomous AI operator, running on our own infrastructure, that works through a real backlog around the clock — no human in the loop for routine work.',
      },
      { t: 'h2', text: 'The idea, without the diagram' },
      {
        t: 'p',
        text: 'The principle is simple: not every task deserves the same brain. Night Shift puts serious reasoning where judgment matters and inexpensive automation where it doesn’t, with a review step before anything ships. How exactly that’s wired together is our trade — but the effect is easy to state: the quality holds and the cost stays boring.',
      },
      {
        t: 'quote',
        text: 'Capability where it matters, economics where it doesn’t.',
      },
      { t: 'h2', text: 'Why we bother' },
      {
        t: 'p',
        text: 'Because it is the honest way to sell AI operations. Plenty of firms will pitch you agents they have never had to live with. Ours runs our own operation every night, on our own hardware, holding to the same rule we give clients about data: [it stays yours](/#how). We feel the failure modes first, on ourselves.',
      },
      {
        t: 'p',
        text: 'The same approach — accountable oversight, automation doing the repetitive work, review before anything counts — is what we deploy when a client wants [AI operations](/#how) inside their business. If part of your week could run itself overnight: [team@lirium.ai](mailto:team@lirium.ai).',
      },
    ],
  },
  {
    slug: 'etiqa-health-ai-grocery-scanner',
    title: 'Etiqa Health: teaching a phone to read grocery labels',
    description:
      'The story behind our AI nutrition scanner — why food labels needed a translator, and why a systems studio ships consumer apps at all.',
    date: '2026-05-12',
    tags: ['ETIQA HEALTH', 'CONSUMER AI'],
    blocks: [
      {
        t: 'p',
        text: 'Food labels are written to satisfy regulators, not to inform people in a grocery aisle holding two cereal boxes. The information is technically all there — in six-point type, per-100g columns, and ingredient names that need a chemistry degree. [Etiqa Health](https://etiqahealth.com) exists to translate.',
      },
      { t: 'h2', text: 'What it does' },
      {
        t: 'p',
        text: 'Point your camera at a product and Etiqa returns an EtiScore with the reasoning in plain language: what drags the score down, what earns it back, and how the product compares against the alternative next to it on the shelf. It [launched on the iOS App Store](https://www.etiqahealth.com/blog/ios-launch.html) with a catalog of 55,000+ products from Panamanian supermarkets — local brands, not just imports — and is live today on iOS and Android.',
      },
      { t: 'h2', text: 'Built bilingual, on purpose' },
      {
        t: 'p',
        text: 'Most labels on Panamanian shelves are in Spanish, so an English-only scanner would miss the point. The [Etiqa 1.1 release](https://www.etiqahealth.com/blog/etiqa-1-1.html) brought full nutrition panels and ingredient insights in Spanish — the same English-and-Spanish posture the studio itself operates under. The product changelog lives on the [Etiqa blog](https://etiqahealth.com), where every release gets written up.',
      },
      { t: 'h2', text: 'Why the score is explainable' },
      {
        t: 'p',
        text: 'A bare number teaches nobody anything. Etiqa always shows its reasoning in plain language — what drags a score down, what earns it back — because the goal is that after a few weeks of scanning, you need the app less, not more. The scores are informational, not medical advice, and we keep that line clear on purpose.',
      },
      { t: 'h2', text: 'Why a systems studio ships consumer apps' },
      {
        t: 'p',
        text: 'Because shipping is the proof. Taking Etiqa from product spec to App Store release exercised every skill we sell to [client engagements](/#work) — and a studio that ships its own products end-to-end doesn’t have to ask you to take rigor on faith.',
      },
    ],
  },
]

export function getPost(slug: string) {
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
