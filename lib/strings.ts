// All site copy lives here so an ES locale can be added later without
// touching components.

export const strings = {
  nav: {
    work: 'Work',
    studio: 'Studio',
    contact: 'Contact',
  },
  hero: {
    eyebrow: 'AI SYSTEMS STUDIO · MIAMI / PANAMÁ',
    headline: 'AI systems built with Fortune 100 discipline.',
    subline:
      'Lirium is an independent studio. For seven years its founder has designed governance, risk, and compliance platforms for Fortune 100 financial institutions. Lirium brings that engineering standard to companies that have outgrown spreadsheets — invoicing, inventory, client platforms, applied AI.',
    cta: 'Start a conversation →',
    meta: ['PRACTICE EST. 2019', 'FORTUNE 100 CLIENTELE', 'ENGLISH / ESPAÑOL'],
  },
  engagements: {
    eyebrow: '01 — WHAT WE DO',
    items: [
      {
        label: 'ADVISORY',
        title: 'Know what’s worth automating.',
        body: 'A structured working session with founders and operators. We map where time and money leak, quantify what automation is actually worth, and leave you with a prioritized roadmap — whether or not you build with us.',
      },
      {
        label: 'SYSTEMS',
        title: 'Purpose-built platforms.',
        body: 'Invoicing, inventory, client portals, internal dashboards — custom systems engineered around how your operation actually runs, delivered production-ready. Not a prototype, not a template.',
      },
      {
        label: 'AI OPERATIONS',
        title: 'Models, put to work.',
        body: 'Document processing, customer response drafting, reporting that writes itself. Applied where it pays for itself, skipped where it doesn’t — we’ll tell you which is which.',
      },
    ],
  },
  work: {
    eyebrow: '02 — SELECTED WORK',
    items: [
      {
        meta: '2019–PRESENT · GOVERNANCE, RISK & COMPLIANCE',
        title: 'Enterprise practice',
        body: 'Seven years designing and delivering GRC platforms for Fortune 100 financial services companies — systems that govern regulatory obligations, audit trails, and risk workflows at institutional scale. The client work is under NDA. The standard it demands is the one every Lirium engagement is held to.',
        link: null,
      },
      {
        meta: '2025 · CONSUMER HEALTH · LIVE ON iOS + ANDROID',
        title: 'Etiqa Health',
        body: 'A nutrition-intelligence app designed, engineered, and shipped end-to-end by the studio — product spec, AI scoring pipeline, mobile builds, and App Store and Google Play release. Live and in users’ hands today.',
        link: { label: 'etiqahealth.com', href: 'https://etiqahealth.com' },
      },
    ],
  },
  approach: {
    eyebrow: '03 — HOW WE ENGAGE',
    items: [
      {
        title: 'Direct to principal.',
        body: 'The person who scopes your system is the person who builds it. No account layer, no handoffs, no junior team learning on your budget.',
      },
      {
        title: 'Fixed scope, in writing.',
        body: 'Every engagement starts with a scope document — deliverables, timeline, and cost agreed before work begins. Changes are negotiated, not discovered on an invoice.',
      },
      {
        title: 'Your data stays yours.',
        body: 'Client work is under NDA by default. Data lives in your infrastructure or in dedicated environments, and is never used to train models.',
      },
      {
        title: 'Built to hand over.',
        body: 'Systems ship with documentation and clean ownership. You are never locked in to us — which is precisely why clients stay.',
      },
    ],
  },
  studio: {
    eyebrow: '04 — STUDIO',
    body: 'Lirium is run by a working enterprise consultant — the same person who scopes your project builds it. We are based in Miami, with roots and a working presence in Panama, and we operate in English and Spanish. We stay small on purpose: fewer projects, closer attention, systems we are willing to stand behind after launch.',
  },
  contact: {
    eyebrow: '05 — CONTACT',
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
