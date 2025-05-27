export default function About() {
  return (
    <section id="about" className="py-12 px-4">
      <div className="relative">
        {/* Background card with dark theme */}
        <div className="bg-dark-800/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-700/50 card-glow">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Stats section - pattybuilds.dev style */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center space-y-2">
                <div className="text-3xl font-black text-primary-400">1+</div>
                <div className="text-gray-300 text-sm font-medium">Active Projects</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-black text-green-400">AI-First</div>
                <div className="text-gray-300 text-sm font-medium">Approach</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-black text-blue-400">∞</div>
                <div className="text-gray-300 text-sm font-medium">Possibilities</div>
              </div>
            </div>

            {/* Main content with personality */}
            <div className="text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Our Mission
              </h2>
              
              <div className="space-y-6 max-w-3xl mx-auto">
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-medium">
                  Lirium builds <span className="text-primary-400 font-bold">AI-first digital products</span> that enhance creative and everyday workflows.
                </p>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  We focus on <span className="text-white font-semibold">simplicity</span>, <span className="text-white font-semibold">automation</span>, and <span className="text-white font-semibold">scale</span> — creating tools that grow with you and amplify your potential.
                </p>

                {/* Call to action */}
                <div className="pt-6">
                  <div className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-500/20 text-primary-300 rounded-full border border-primary-500/30 font-semibold">
                    <span>🚀</span>
                    <span>Building the Future, One Tool at a Time</span>
                  </div>
                </div>
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
