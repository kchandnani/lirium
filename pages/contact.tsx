import Head from 'next/head';
import { useForm, ValidationError } from '@formspree/react';
import Layout from '../components/Layout';

const SITE_URL = 'https://lirium.ai';

export default function Contact() {
  const [state, handleSubmit] = useForm("mwpoglng");

  return (
    <>
      <Head>
        <title>Contact Us | Lirium</title>
        <meta name="description" content="Get in touch with Lirium to discuss your next AI-powered project. We build intelligent, scalable solutions for creative and everyday workflows." />

        <link rel="canonical" href={`${SITE_URL}/contact`} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/contact`} />
        <meta property="og:title" content="Contact Us | Lirium" />
        <meta property="og:description" content="Get in touch with Lirium to discuss your next AI-powered project." />
        <meta property="og:site_name" content="Lirium" />
        <meta property="og:image" content={`${SITE_URL}/og-image.png`} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Lirium" />
        <meta name="twitter:description" content="Get in touch with Lirium to discuss your next AI-powered project." />
        <meta name="twitter:image" content={`${SITE_URL}/og-image.png`} />
      </Head>

      <Layout>
        <main className="space-y-0">
          <section className="text-center py-12 sm:py-20 px-4">
            <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-white uppercase">
                Get In Touch
              </h1>

              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Ready to scale your creative workflow? Have questions about our AI tools?
                We&apos;d love to hear from you.
              </p>
            </div>
          </section>

          <section className="py-8 sm:py-12 px-4">
            <div className="max-w-2xl mx-auto">
              <div className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-6 sm:p-12 border border-gray-700/50 card-glow">
                <div className="space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
                    Contact Form
                  </h2>

                  {state.succeeded && (
                    <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-xl p-4 sm:p-6 text-center">
                      <p className="text-emerald-300 font-semibold">Message sent successfully!</p>
                      <p className="text-emerald-400 text-sm mt-2">We&apos;ll get back to you within 24 hours.</p>
                    </div>
                  )}

                  {!state.succeeded && (
                    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-3 sm:px-4 py-3 bg-dark-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-colors text-base"
                            placeholder="Your name"
                          />
                          <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-400 text-sm mt-1" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-3 sm:px-4 py-3 bg-dark-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-colors text-base"
                            placeholder="your@email.com"
                          />
                          <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-sm mt-1" />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="w-full px-3 sm:px-4 py-3 bg-dark-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-colors text-base"
                          placeholder="What's this about?"
                        />
                        <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-400 text-sm mt-1" />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          className="w-full px-3 sm:px-4 py-3 bg-dark-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-colors resize-vertical text-base"
                          placeholder="Tell us about your project or question..."
                        />
                        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-sm mt-1" />
                      </div>

                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 text-base"
                      >
                        {state.submitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <span>Send Message</span>
                        )}
                      </button>
                    </form>
                  )}

                  <div className="pt-6 sm:pt-8 border-t border-gray-700/50">
                    <h3 className="text-lg font-semibold text-white mb-4 text-center">
                      Other Ways to Reach Us
                    </h3>
                    <div className="space-y-3 text-gray-400 text-sm sm:text-base text-center">
                      <p className="break-all">companylirium@gmail.com</p>
                      <p className="text-gray-500 text-sm">We typically respond within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
}
