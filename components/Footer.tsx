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
              <a
                href="https://www.linkedin.com/company/lirium"
                aria-label="LinkedIn"
                className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-primary-500/20 transition-colors text-gray-400 hover:text-primary-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M22.225 0H1.771C.792 0 0 .771 0 1.723v20.554C0 23.23.792 24 1.771 24h20.451C23.206 24 24 23.23 24 22.277V1.723C24 .771 23.206 0 22.225 0zM7.068 20.452H3.539V9h3.529v11.452zM5.303 7.433a2.048 2.048 0 1 1 0-4.096 2.048 2.048 0 0 1 0 4.096zM20.452 20.452h-3.529v-5.569c0-1.328-.027-3.038-1.852-3.038-1.853 0-2.136 1.446-2.136 2.939v5.668h-3.529V9h3.386v1.561h.049c.472-.9 1.635-1.852 3.367-1.852 3.599 0 4.255 2.371 4.255 5.456v6.287z" />
                </svg>
              </a>
              <a
                href="https://github.com/lirium"
                aria-label="GitHub"
                className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-primary-500/20 transition-colors text-gray-400 hover:text-primary-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.758-1.333-1.758-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.776.418-1.305.762-1.605-2.665-.304-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.604-.015 2.896-.015 3.286 0 .319.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="mailto:hello@lirium.com"
                aria-label="Email"
                className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center hover:bg-primary-500/20 transition-colors text-gray-400 hover:text-primary-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path d="M2 4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H2zm0 2h20v.01L12 13 2 6.01V6zm0 3.24v8.76h20V9.24l-8.35 5.56c-.39.26-.88.26-1.27 0L2 9.24z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-primary-500 text-white font-semibold rounded-md hover:bg-primary-600 transition-colors"
          >
            Contact Us
          </Link>
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