import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800/50 bg-dark-900/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Lirium</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Building innovative AI solutions and sharing knowledge
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
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
              <Link href="/contact" className="block text-gray-400 hover:text-primary-400 transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Connect section */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Connect</h4>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-primary-500/20 transition-colors cursor-pointer">
                <span className="text-gray-400 hover:text-primary-400 text-sm">🔗</span>
              </div>
              <div className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-primary-500/20 transition-colors cursor-pointer">
                <span className="text-gray-400 hover:text-primary-400 text-sm">📧</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800/50 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Lirium. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 