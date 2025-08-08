export default function About() {
  return (
    <section id="about" className="py-8 sm:py-12 px-4">
      <div className="relative">
        {/* Background card with dark theme */}
        <div className="bg-dark-800/50 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-12 border border-gray-700/50 card-glow">
          <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
            
            {/* Stats section - mobile optimized */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="text-center space-y-2">
                <div className="text-2xl sm:text-3xl font-black text-primary-400">200+</div>
                <div className="text-gray-300 text-sm font-medium">Customers Served</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl sm:text-3xl font-black text-green-400">99.9%</div>
                <div className="text-gray-300 text-sm font-medium">Platform Uptime</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-2xl sm:text-3xl font-black text-blue-400">3</div>
                <div className="text-gray-300 text-sm font-medium">Core Products</div>
              </div>
            </div>

            {/* Main content with personality */}
            <div className="text-center space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                Our Mission
              </h2>
              
              <div className="space-y-4 sm:space-y-6 max-w-3xl mx-auto">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-200 leading-relaxed font-medium">
                  Lirium delivers <span className="text-primary-400 font-bold">AI-powered platforms</span> for workflow automation, analytics, and digital creation.
                </p>

                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
                  Our products emphasize <span className="text-white font-semibold">simplicity</span>, <span className="text-white font-semibold">automation</span>, and <span className="text-white font-semibold">scalability</span>, enabling teams to launch quickly and grow confidently.
                </p>

                <ul className="text-left list-disc list-inside text-gray-300 space-y-2 pt-4 sm:pt-6">
                  <li><span className="text-white font-semibold">AI-driven automation</span> removes repetitive work</li>
                  <li><span className="text-white font-semibold">Seamless integrations</span> fit existing workflows</li>
                  <li><span className="text-white font-semibold">Enterprise-grade reliability</span> backs every release</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-500/20 rounded-full blur-sm"></div>
        <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-purple-500/20 rounded-full blur-sm"></div>
      </div>
    </section>
  );
}
