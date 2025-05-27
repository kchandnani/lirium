import Head from 'next/head';
import { useForm, ValidationError } from '@formspree/react';
import Layout from '../components/Layout';

export default function Contact() {
  const [state, handleSubmit] = useForm("mwpoglng");

  return (
    <>
      <Head>
        <title>Contact Us - Lirium</title>
        <meta name="description" content="Get in touch with the Lirium team. We'd love to hear from you about our AI-powered tools and creative solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Layout>
        <main className="space-y-0">
          {/* Contact Hero Section */}
          <section className="text-center py-20 px-4">
            <div className="space-y-8 mb-12">
              <h1 className="text-6xl md:text-7xl font-black text-white">
                Get In Touch
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                Ready to scale your creative workflow? Have questions about our AI tools? 
                We'd love to hear from you.
              </p>
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="py-12 px-4">
            <div className="max-w-2xl mx-auto">
              <div className="bg-dark-800/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50 card-glow">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold text-white text-center">
                    Contact Form
                  </h2>
                  
                  {/* Success Message */}
                  {state.succeeded && (
                    <div className="bg-green-500/20 border border-green-500/30 rounded-2xl p-6 text-center">
                      <div className="text-4xl mb-2">✅</div>
                      <p className="text-green-300 font-semibold">Message sent successfully!</p>
                      <p className="text-green-400 text-sm mt-2">We'll get back to you within 24 hours.</p>
                    </div>
                  )}
                  
                  {/* Contact Form */}
                  {!state.succeeded && (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Name Field */}
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 bg-dark-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-colors"
                            placeholder="Your name"
                          />
                          <ValidationError 
                            prefix="Name" 
                            field="name"
                            errors={state.errors}
                            className="text-red-400 text-sm mt-1"
                          />
                        </div>

                        {/* Email Field */}
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 bg-dark-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-colors"
                            placeholder="your@email.com"
                          />
                          <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                            className="text-red-400 text-sm mt-1"
                          />
                        </div>
                      </div>

                      {/* Subject Field */}
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                          Subject
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          className="w-full px-4 py-3 bg-dark-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-colors"
                          placeholder="What's this about?"
                        />
                        <ValidationError 
                          prefix="Subject" 
                          field="subject"
                          errors={state.errors}
                          className="text-red-400 text-sm mt-1"
                        />
                      </div>

                      {/* Message Field */}
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          required
                          className="w-full px-4 py-3 bg-dark-700/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-colors resize-vertical"
                          placeholder="Tell us about your project or question..."
                        />
                        <ValidationError 
                          prefix="Message" 
                          field="message"
                          errors={state.errors}
                          className="text-red-400 text-sm mt-1"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={state.submitting}
                        className="w-full px-8 py-4 bg-primary-500 hover:bg-primary-600 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                      >
                        {state.submitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <span>🚀</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                  
                  {/* Alternative contact info */}
                  <div className="pt-8 border-t border-gray-700/50">
                    <h3 className="text-lg font-semibold text-white mb-4 text-center">
                      Other Ways to Reach Us
                    </h3>
                    <div className="space-y-3 text-gray-300">
                      <div className="flex items-center justify-center space-x-2">
                        <span>📧</span>
                        <span>companylirium@gmail.com</span>
                      </div>
                      <div className="flex items-center justify-center space-x-2">
                        <span>💬</span>
                        <span>We typically respond within 24 hours</span>
                      </div>
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