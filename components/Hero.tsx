import Image from 'next/image';

export default function Hero() {
  return (
    <section className="text-center py-8 sm:py-12 px-4 min-h-[80vh] flex flex-col justify-center">
      <div className="mb-6 sm:mb-8">
        <p className="text-base sm:text-lg text-gray-400 font-medium">
          Lirium builds scalable digital solutions
        </p>
      </div>

      <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-12">
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight">
          <span className="bg-gradient-to-r from-white to-primary-500 bg-clip-text text-transparent">
            Lirium
          </span>
        </h1>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <div className="flex justify-center">
          <a
            href="/contact"
            className="inline-block px-6 py-3 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600"
          >
            Contact Sales
          </a>
        </div>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
          Live everyday, either building, exploring or a mix of both. Come join us on the adventure.
        </p>

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
