export default function About() {
  return (
    <section id="about" className="pt-0 pb-12 sm:pb-20 px-4">
      <div className="max-w-5xl mx-auto space-y-16 sm:space-y-24">

        {/* Stats bar — sits directly below the hero wave */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50">
          <div className="bg-dark-900/80 p-6 sm:p-8 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold text-white uppercase tracking-wider">Mobile-First Apps</div>
            </div>
          </div>
          <div className="bg-dark-900/80 p-6 sm:p-8 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold text-white uppercase tracking-wider">AI-Powered</div>
            </div>
          </div>
          <div className="bg-dark-900/80 p-6 sm:p-8 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <div className="text-sm font-semibold text-white uppercase tracking-wider">Free &amp; Accessible</div>
            </div>
          </div>
        </div>

        {/* Mission section */}
        <div className="space-y-10 sm:space-y-12">
          <div className="text-center space-y-6">
            <p className="text-xs sm:text-sm font-semibold text-primary-400 uppercase tracking-widest">About Lirium AI</p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Lirium AI builds <span className="text-white font-semibold">smart, accessible apps</span> that
              use artificial intelligence to solve real problems. We believe powerful tools should be
              simple, free of clutter, and available to everyone.
            </p>
          </div>

          {/* Three pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-12">
            <div className="text-center space-y-3">
              <h3 className="text-base font-bold text-white">Simplicity</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Clean interfaces. No bloat. Tools that just work.</p>
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-base font-bold text-white">Intelligence</h3>
              <p className="text-sm text-gray-400 leading-relaxed">AI that adds real value — not gimmicks.</p>
            </div>
            <div className="text-center space-y-3">
              <h3 className="text-base font-bold text-white">Accessibility</h3>
              <p className="text-sm text-gray-400 leading-relaxed">Free, ad-free tools available to everyone.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
