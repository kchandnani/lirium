import Head from 'next/head';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import PartnerCTA from '../components/PartnerCTA';

const SITE_URL = 'https://lirium.ai';

export default function Home() {
  return (
    <>
      <Head>
        <title>Lirium | AI-First Digital Products for Creative Workflows</title>
        <meta name="description" content="Lirium builds intelligent, scalable digital products that enhance creative potential and orchestrate complex workflows. Artistry, automation, and AI-first systems that feel natural." />

        {/* Canonical */}
        <link rel="canonical" href={SITE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content="Lirium | AI-First Digital Products" />
        <meta property="og:description" content="Artistry, automation, and AI-first systems that feel natural. Lirium builds intelligent, scalable digital products that enhance creative potential." />
        <meta property="og:site_name" content="Lirium" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Lirium - Artistry, automation, and AI-first systems that feel natural." />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lirium | AI-First Digital Products" />
        <meta name="twitter:description" content="Artistry, automation, and AI-first systems that feel natural. Lirium builds intelligent, scalable digital products." />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': `${SITE_URL}/#organization`,
                  name: 'Lirium',
                  url: SITE_URL,
                  logo: `${SITE_URL}/lirium-logo.png`,
                  description: 'Lirium builds AI-first digital products that enhance creative and everyday workflows.',
                  foundingDate: '2024',
                  sameAs: [],
                },
                {
                  '@type': 'WebSite',
                  '@id': `${SITE_URL}/#website`,
                  url: SITE_URL,
                  name: 'Lirium',
                  publisher: { '@id': `${SITE_URL}/#organization` },
                },
                {
                  '@type': 'WebPage',
                  '@id': `${SITE_URL}/#webpage`,
                  url: SITE_URL,
                  name: 'Lirium | AI-First Digital Products for Creative Workflows',
                  isPartOf: { '@id': `${SITE_URL}/#website` },
                  about: { '@id': `${SITE_URL}/#organization` },
                  description: 'Lirium builds intelligent, scalable digital products that enhance creative potential and orchestrate complex workflows.',
                },
              ],
            }),
          }}
        />
      </Head>

      <Layout>
        <main className="space-y-0">
          <Hero />
          <About />
          <Projects />
          <PartnerCTA />
        </main>
      </Layout>
    </>
  );
}
