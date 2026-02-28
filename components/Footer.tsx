import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-700/60 bg-dark-900/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 sm:gap-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Lirium</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              Building cool, intelligent things.
              Our dedication to artistry, automation, and AI-first systems makes technology feel natural.
            </p>
            <p className="text-gray-600 text-xs">
              &copy; {new Date().getFullYear()} Lirium. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h4>
            <div className="space-y-2">
              <Link href="/" className="block text-gray-400 hover:text-primary-400 transition-colors text-sm">
                Home
              </Link>
              <a href="/#projects" className="block text-gray-400 hover:text-primary-400 transition-colors text-sm">
                Projects
              </a>
              <a href="/#about" className="block text-gray-400 hover:text-primary-400 transition-colors text-sm">
                About
              </a>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-primary-400 transition-colors text-sm">
                Privacy
              </a>
              <a href="#" className="block text-gray-400 hover:text-primary-400 transition-colors text-sm">
                Terms
              </a>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Connect</h4>
            <div className="flex gap-2">
              {['G', 'Y', 'in', 'X'].map((icon) => (
                <a
                  key={icon}
                  href="#"
                  className="w-8 h-8 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-500/50 transition-colors text-xs font-bold"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Newsletter</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-0 px-3 py-2 bg-dark-800 border border-gray-700 rounded-l-lg text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary-500/50"
              />
              <button className="px-3 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-r-lg transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
