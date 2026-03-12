import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const SITE_URL = 'https://lirium.ai';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms of Service | Lirium AI</title>
        <meta name="description" content="Lirium AI Terms of Service — the terms and conditions governing your use of our apps and services." />
        <link rel="canonical" href={`${SITE_URL}/terms`} />
      </Head>

      <Layout>
        <main className="py-16 sm:py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4 mb-12">
              <h1 className="text-3xl sm:text-5xl font-black text-white uppercase">Terms of Service</h1>
              <p className="text-gray-500 text-sm">Last updated: March 12, 2026</p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using any application or service provided by Lirium AI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;),
                  including Etiqa Health, Polario, and the website at lirium.ai, you agree to be bound by these
                  Terms of Service. If you do not agree, please do not use our services.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">2. Description of Services</h2>
                <p>Lirium AI provides AI-powered applications including:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li><span className="text-gray-300 font-medium">Etiqa Health</span> — A nutrition scanning app that provides health scores for grocery store products</li>
                  <li><span className="text-gray-300 font-medium">Polario</span> — A free AI-powered watermark removal tool with no ads</li>
                </ul>
                <p>
                  We reserve the right to modify, suspend, or discontinue any service at any time without prior notice.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">3. User Responsibilities</h2>
                <p>When using our services, you agree to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>Use our apps only for lawful purposes</li>
                  <li>Not attempt to reverse-engineer, decompile, or tamper with our applications</li>
                  <li>Not use our tools to infringe on the intellectual property rights of others</li>
                  <li>Not attempt to disrupt or overload our systems</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">4. Intellectual Property</h2>
                <p>
                  All content, features, and functionality of our apps and website — including but not limited to
                  text, graphics, logos, and software — are owned by Lirium AI and protected by applicable
                  intellectual property laws. You may not reproduce, distribute, or create derivative works
                  without our express written permission.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">5. Disclaimer of Warranties</h2>
                <p>
                  Our services are provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind,
                  either express or implied. We do not guarantee that our apps will be uninterrupted,
                  error-free, or free of harmful components.
                </p>
                <p>
                  <span className="text-gray-300 font-medium">Etiqa Health:</span> Health scores and nutritional
                  information are provided for informational purposes only and should not be considered medical advice.
                  Always consult a healthcare professional for dietary decisions.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">6. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, Lirium AI shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages arising from your use of our services,
                  even if we have been advised of the possibility of such damages.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">7. Changes to Terms</h2>
                <p>
                  We may revise these Terms of Service at any time by updating this page. Your continued use
                  of our services after changes are posted constitutes acceptance of the revised terms.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">8. Contact Us</h2>
                <p>
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <ul className="list-none space-y-1 text-gray-400">
                  <li><span className="text-gray-300 font-medium">Email:</span>{' '}
                    <a href="mailto:companylirium@gmail.com" className="text-primary-400 hover:text-primary-300 transition-colors">
                      companylirium@gmail.com
                    </a>
                  </li>
                  <li><span className="text-gray-300 font-medium">Website:</span>{' '}
                    <a href="https://lirium.ai" className="text-primary-400 hover:text-primary-300 transition-colors">
                      lirium.ai
                    </a>
                  </li>
                </ul>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700/50">
              <Link href="/" className="text-primary-400 hover:text-primary-300 transition-colors text-sm font-medium">
                &larr; Back to Home
              </Link>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
