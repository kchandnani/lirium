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
        <title>Lirium AI | Smart, AI-Powered Apps for Everyday Life</title>
        <meta name="description" content="Lirium AI builds intelligent apps that simplify everyday tasks — from smarter grocery shopping with Etiqa Health to AI-powered image editing with Polario." />

        {/* Canonical */}
        <link rel="canonical" href={SITE_URL} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:title" content="Lirium AI | Smart, AI-Powered Apps" />
        <meta property="og:description" content="Lirium AI builds intelligent apps that simplify everyday tasks — from smarter grocery shopping to effortless creative tools." />
        <meta property="og:site_name" content="Lirium AI" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Lirium AI - Smart, AI-Powered Apps for Everyday Life" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Lirium AI | Smart, AI-Powered Apps" />
        <meta name="twitter:description" content="Lirium AI builds intelligent apps that simplify everyday tasks — from smarter grocery shopping to effortless creative tools." />
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
                  name: 'Lirium AI',
                  url: SITE_URL,
                  logo: `${SITE_URL}/lirium-logo.png`,
                  description: 'Lirium AI builds intelligent apps that simplify everyday tasks.',
                  foundingDate: '2024',
                  contactPoint: {
                    '@type': 'ContactPoint',
                    email: 'team@lirium.ai',
                    contactType: 'customer service',
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': `${SITE_URL}/#website`,
                  url: SITE_URL,
                  name: 'Lirium AI',
                  publisher: { '@id': `${SITE_URL}/#organization` },
                },
                {
                  '@type': 'WebPage',
                  '@id': `${SITE_URL}/#webpage`,
                  url: SITE_URL,
                  name: 'Lirium AI | Smart, AI-Powered Apps for Everyday Life',
                  isPartOf: { '@id': `${SITE_URL}/#website` },
                  about: { '@id': `${SITE_URL}/#organization` },
                  description: 'Lirium AI builds intelligent apps that simplify everyday tasks.',
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
