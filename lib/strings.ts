// All site copy lives here so an ES locale can be added later without
// touching components. Headlines are split so one word can carry an
// accent color.

export const strings = {
  nav: {
    work: 'Work',
    blog: 'Blog',
    contact: 'Contact',
  },
  hero: {
    eyebrow: 'AI SYSTEMS STUDIO · MIAMI / PANAMÁ',
    headline: {
      pre: 'AI systems built with Fortune 100 ',
      accent: 'discipline',
      post: '.',
    },
    subline:
      'An independent studio bringing seven years of Fortune 100 governance-platform engineering to businesses that have outgrown spreadsheets.',
    cta: 'Start a conversation',
    meta: ['PRACTICE EST. 2019', 'FORTUNE 100 CLIENTELE', 'ENGLISH / ESPAÑOL'],
  },
  how: {
    eyebrow: 'WHAT WE DO · HOW WE ENGAGE',
    headline: { pre: 'From duct tape to ', accent: 'discipline', post: '.' },
    items: [
      {
        label: 'ADVISORY',
        title: 'Know what’s worth automating.',
        body: 'A structured working session with founders and operators. We map where time and money leak, and leave you with a prioritized roadmap — whether or not you build with us.',
      },
      {
        label: 'SYSTEMS',
        title: 'Purpose-built platforms.',
        body: 'Invoicing, inventory, client portals, internal dashboards — engineered around how your operation actually runs, delivered production-ready. Not a prototype, not a template.',
      },
      {
        label: 'AI OPERATIONS',
        title: 'Models, put to work.',
        body: 'Document processing, customer response drafting, reporting that writes itself. Applied where it pays for itself, skipped where it doesn’t.',
      },
    ],
    terms: [
      {
        k: 'DIRECT TO PRINCIPAL',
        v: 'The person who scopes your system is the person who builds it.',
      },
      {
        k: 'FIXED SCOPE, IN WRITING',
        v: 'Deliverables, timeline, and cost agreed before work begins.',
      },
      {
        k: 'YOUR DATA STAYS YOURS',
        v: 'NDA by default. Never used to train models.',
      },
      {
        k: 'BUILT TO HAND OVER',
        v: 'Documentation, clean ownership, no lock-in.',
      },
    ],
  },
  work: {
    eyebrow: 'SELECTED WORK',
    headline: { pre: 'See the ', accent: 'work', post: '.' },
    items: [
      {
        mock: 'grc',
        meta: '2019–PRESENT',
        title: 'Enterprise practice',
        body: 'Seven years designing and delivering governance, risk, and compliance platforms for Fortune 100 financial services companies — systems that govern regulatory obligations, audit trails, and risk workflows at institutional scale. The client work is under NDA. The standard it demands is the one every Lirium engagement is held to.',
        spec: [
          { k: 'SECTOR', v: 'Fortune 100 financial services' },
          { k: 'SCOPE', v: 'Governance, risk & compliance platforms' },
          { k: 'SINCE', v: '2019, ongoing' },
          { k: 'STATUS', v: 'Under NDA' },
        ],
        link: null,
      },
      {
        mock: 'agent',
        meta: '2026',
        title: 'Night Shift',
        body: 'The employee that never clocks out. A fully autonomous operator the studio built and runs on its own infrastructure, working an agile cadence around the clock: serious reasoning owns planning and review, and scoped work is delegated to specialized agents where the economics make sense. Capability where it matters, economics where it doesn’t.',
        spec: [
          { k: 'RUNS ON', v: 'Dedicated in-office hardware' },
          { k: 'OVERSIGHT', v: 'Review before anything ships' },
          { k: 'PATTERN', v: 'Delegation to specialized agents' },
          { k: 'CADENCE', v: 'Agile sprints, 24/7' },
        ],
        link: null,
      },
      {
        mock: 'etiqa',
        meta: '2025',
        title: 'Etiqa Health',
        body: 'A nutrition-intelligence app designed, engineered, and shipped end-to-end by the studio — product spec, AI scoring pipeline, mobile builds, and App Store and Google Play release. Live and in users’ hands today.',
        spec: [
          { k: 'PLATFORM', v: 'iOS + Android' },
          { k: 'ROLE', v: 'Product spec → store release' },
          { k: 'ENGINE', v: 'AI nutrition scoring pipeline' },
          { k: 'STATUS', v: 'Live' },
        ],
        link: { label: 'etiqahealth.com', href: 'https://etiqahealth.com' },
      },
      {
        mock: 'fntz',
        meta: '2024',
        title: 'FNTZ Football',
        body: 'Every team, every league, one hub. Built as an internal tool, FNTZ consolidates live data from fantasy platforms and sports-data feeds — rosters, matchups, injury reports, betting lines — and layers analysis on top: injury-probability modeling, matchup projections, start–sit calls, waiver targets. Advice you can act on before kickoff, from one screen instead of six tabs.',
        spec: [
          { k: 'TYPE', v: 'Internal tool' },
          { k: 'SOURCES', v: 'Fantasy platforms + sports-data APIs' },
          { k: 'MODELS', v: 'Injury probability, matchup projections' },
          { k: 'PATTERN', v: 'Many sources, one decision surface' },
        ],
        link: null,
      },
    ],
  },
  contact: {
    eyebrow: 'CONTACT',
    headline: { pre: 'Start the ', accent: 'conversation', post: '.' },
    email: 'team@lirium.ai',
    blurb: 'One conversation is usually enough to know whether we’re the right fit.',
    location: 'Miami, FL · Ciudad de Panamá',
    entity: 'Challenger Corporation USA, S.A.',
    copyright: '© 2026',
    legal: {
      privacy: 'Privacy',
      terms: 'Terms',
    },
  },
} as const
