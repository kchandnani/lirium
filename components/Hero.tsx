import Image from 'next/image';

export default function Hero() {
  return (
    <section className="text-center py-8 sm:py-12 px-4 min-h-[80vh] flex flex-col justify-center">
      {/* Casual greeting - pattybuilds.dev style */}
      <div className="mb-6 sm:mb-8">
        <p className="text-base sm:text-lg text-gray-400 font-medium">What&apos;s up! We&apos;re</p>
      </div>

      {/* Main brand name with dramatic styling */}
      <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight">
          <span className="bg-gradient-to-r from-white via-primary-300 to-primary-500 bg-clip-text text-transparent glow-text animate-gradient">
            Lirium
          </span>
        </h1>
        
        {/* Personality descriptors */}
        <div className="space-y-4">
          <p className="text-xl sm:text-2xl md:text-3xl text-white font-bold">
            We like to build cool things
          </p>
          
          {/* Status badges - mobile optimized */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center max-w-lg mx-auto">
            <span className="px-3 sm:px-4 py-2 bg-primary-500/20 text-primary-300 rounded-full border border-primary-500/30 font-semibold text-sm sm:text-base">
              ⚡ AI Builders
            </span>
            <span className="px-3 sm:px-4 py-2 bg-green-500/20 text-green-300 rounded-full border border-green-500/30 font-semibold text-sm sm:text-base">
              🚀 Scaling Life
            </span>
            <span className="px-3 sm:px-4 py-2 bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30 font-semibold text-sm sm:text-base">
              🎨 Creative Tools
            </span>
          </div>
        </div>
      </div>

      {/* Call to action with personality */}
      <div className="space-y-4 sm:space-y-6">
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
          Live everyday, either building, exploring or a mix of both. Come join us on the adventure.
        </p>
        
        {/* Animated logo with effects - responsive sizing */}
        <div className="flex justify-center">
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full blur-2xl opacity-40 animate-pulse scale-150"></div>
            <Image 
              src="/lirium-logo.png" 
              alt="Lirium company logo" 
              width={120} 
              height={120} 
              className="relative z-10 drop-shadow-2xl sm:w-[150px] sm:h-[150px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
