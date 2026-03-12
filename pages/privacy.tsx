import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const SITE_URL = 'https://lirium.ai';

export default function Privacy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Lirium AI</title>
        <meta name="description" content="Lirium AI Privacy Policy — how we collect, use, and protect your data across our apps and services." />
        <link rel="canonical" href={`${SITE_URL}/privacy`} />
      </Head>

      <Layout>
        <main className="py-16 sm:py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-4 mb-12">
              <h1 className="text-3xl sm:text-5xl font-black text-white uppercase">Privacy Policy</h1>
              <p className="text-gray-500 text-sm">Last updated: March 12, 2026</p>
            </div>

            <div className="prose prose-invert max-w-none space-y-8 text-gray-300 text-sm sm:text-base leading-relaxed">

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">1. Introduction</h2>
                <p>
                  Lirium AI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates mobile applications including Etiqa Health and Polario,
                  as well as the website at lirium.ai. This Privacy Policy explains how we collect, use, disclose,
                  and safeguard your information when you use our applications and services.
                </p>
                <p>
                  By using our apps or visiting our website, you agree to the terms of this Privacy Policy.
                  If you do not agree, please do not use our services.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">2. Information We Collect</h2>
                <h3 className="text-lg font-semibold text-gray-200">Information You Provide</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>Contact information (name, email) when you reach out via our contact form</li>
                  <li>Any content you voluntarily submit through our apps</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-200">Automatically Collected Information</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>Device information (device type, operating system, unique device identifiers)</li>
                  <li>Usage data (app interactions, features used, crash reports)</li>
                  <li>Analytics data collected through Vercel Analytics for our website</li>
                </ul>

                <h3 className="text-lg font-semibold text-gray-200">Information We Do NOT Collect</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>We do not collect precise location data</li>
                  <li>We do not access your contacts, camera, or microphone without explicit permission</li>
                  <li>We do not sell or share your personal data with advertisers</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>Provide, maintain, and improve our apps and services</li>
                  <li>Respond to your inquiries and support requests</li>
                  <li>Monitor and analyze usage trends to improve user experience</li>
                  <li>Detect and prevent technical issues or abuse</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">4. Data Sharing &amp; Third Parties</h2>
                <p>
                  We do not sell your personal information. We may share limited data with trusted third-party
                  service providers who assist us in operating our apps, such as:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>Analytics providers (e.g., Vercel Analytics) to understand app usage</li>
                  <li>Cloud hosting providers to store and serve our applications</li>
                  <li>Form processing services (e.g., Formspree) to handle contact form submissions</li>
                </ul>
                <p>
                  These service providers are contractually obligated to protect your information and
                  may only use it for the purposes we specify.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">5. Data Retention</h2>
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes
                  outlined in this policy, unless a longer retention period is required by law. Analytics
                  data is retained in aggregate, anonymized form.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">6. Data Security</h2>
                <p>
                  We implement reasonable technical and organizational measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. However,
                  no method of transmission over the Internet or electronic storage is 100% secure.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">7. Children&apos;s Privacy</h2>
                <p>
                  Our services are not directed to children under the age of 13. We do not knowingly collect
                  personal information from children under 13. If we become aware that we have collected
                  personal data from a child under 13, we will take steps to delete that information.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">8. Your Rights</h2>
                <p>Depending on your jurisdiction, you may have the right to:</p>
                <ul className="list-disc list-inside space-y-1 text-gray-400">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction or deletion of your personal data</li>
                  <li>Object to or restrict processing of your personal data</li>
                  <li>Request a portable copy of your personal data</li>
                </ul>
                <p>
                  To exercise any of these rights, please contact us at the email address below.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">9. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any changes
                  by posting the new policy on this page and updating the &quot;Last updated&quot; date.
                  Your continued use of our services after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white">10. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <ul className="list-none space-y-1 text-gray-400">
                  <li><span className="text-gray-300 font-medium">Company:</span> Lirium AI</li>
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
