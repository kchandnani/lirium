export default function Hero() {
  return (
    <section className="pt-16 sm:pt-24 lg:pt-32 pb-0 px-4 min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
        {/* Main headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] uppercase">
          <span className="text-white">Artistry, Automation, and</span>
          <br />
          <span className="text-white">AI-First Systems that feel</span>
          <br />
          <span className="text-primary-400 glow-text">Natural.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed">
          Lirium builds intelligent, scalable digital products that enhance creative potential
          and orchestrate complex workflows, making technology intuitive.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors duration-200 text-sm sm:text-base"
          >
            Discover Our Products
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 hover:border-primary-500/50 text-gray-300 hover:text-white font-semibold rounded-lg transition-colors duration-200 text-sm sm:text-base"
          >
            Learn Our Process
          </a>
        </div>
      </div>

      {/* Abstract wave visual — flush bridge into next section */}
      <div className="mt-12 sm:mt-16 w-full max-w-5xl mx-auto">
        <div className="relative h-40 sm:h-56 overflow-hidden rounded-t-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/40 via-primary-600/30 to-emerald-600/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-transparent to-transparent"></div>
          <svg className="absolute bottom-0 w-full h-1/2" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,60 C200,120 400,0 600,60 C800,120 1000,0 1200,60 L1200,120 L0,120 Z" fill="rgba(6,182,212,0.1)" />
            <path d="M0,80 C300,20 500,100 700,40 C900,100 1100,20 1200,80 L1200,120 L0,120 Z" fill="rgba(16,185,129,0.08)" />
          </svg>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary-400/60 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 left-1/2 w-1.5 h-1.5 bg-emerald-400/60 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-2/3 left-3/4 w-2 h-2 bg-primary-300/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
    </section>
  );
}
