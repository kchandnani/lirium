export default function About() {
  return (
    <section id="about" className="pt-0 pb-12 sm:pb-20 px-4">
      <div className="max-w-5xl mx-auto space-y-16 sm:space-y-24">

        {/* Stats bar — sits directly below the hero wave */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50">
          <div className="bg-dark-900/80 p-6 sm:p-8 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold text-white uppercase tracking-wider">Major Projects</div>
            </div>
          </div>
          <div className="bg-dark-900/80 p-6 sm:p-8 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold text-white uppercase tracking-wider">AI-First Methodology</div>
            </div>
          </div>
          <div className="bg-dark-900/80 p-6 sm:p-8 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold text-white uppercase tracking-wider">Boundless Possibilities</div>
            </div>
          </div>
        </div>

        {/* Mission section */}
        <div className="space-y-10 sm:space-y-12">
          <div className="text-center space-y-6">
            <p className="text-xs sm:text-sm font-semibold text-primary-400 uppercase tracking-widest">Our Shared Mission</p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Lirium builds <span className="text-white font-semibold">AI-first digital products</span> that enhance
              creative and everyday workflows. We focus on
              simplicity, automation, and networked scale.
            </p>
          </div>

          {/* Three pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center space-y-3">
              <h3 className="text-base font-bold text-white">Simplicity:</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Removing complexity</p>
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-base font-bold text-white">Automation:</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Orchestrating workflows</p>
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-base font-bold text-white">Scale:</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Growing with your ambitions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
