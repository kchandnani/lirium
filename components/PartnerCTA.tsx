import Link from 'next/link';

export default function PartnerCTA() {
  return (
    <section className="py-16 sm:py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="bg-dark-800/50 border border-gray-700/50 rounded-2xl p-8 sm:p-12 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase">
            Have a Question or Idea?
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            Whether you have feedback on our apps or want to collaborate — we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-primary-500 text-primary-400 hover:bg-primary-500/10 font-semibold rounded-lg transition-colors duration-200 text-sm sm:text-base"
            >
              Contact Us
            </Link>
            <a
              href="mailto:companylirium@gmail.com"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-gray-600 hover:border-primary-500/50 text-gray-300 hover:text-white font-semibold rounded-lg transition-colors duration-200 text-sm sm:text-base"
            >
              companylirium@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
