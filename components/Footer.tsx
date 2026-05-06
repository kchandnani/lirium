import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-700/60 bg-dark-900/80 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Lirium AI</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              AI built to scale life. Practical AI products for everyday workflows and creative work.
            </p>
            <p className="text-gray-600 text-xs">
              &copy; {new Date().getFullYear()} Lirium AI. All rights reserved.
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
                Our Apps
              </a>
              <Link href="/contact" className="block text-gray-400 hover:text-primary-400 transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h4>
            <div className="space-y-2">
              <Link href="/privacy" className="block text-gray-400 hover:text-primary-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-gray-400 hover:text-primary-400 transition-colors text-sm">
                Terms of Service
              </Link>
            </div>
          </div>

          {/* Get in touch */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Get In Touch</h4>
            <div className="space-y-2">
              <a
                href="mailto:team@lirium.ai"
                className="block text-gray-400 hover:text-primary-400 transition-colors text-sm break-all"
              >
                team@lirium.ai
              </a>
              <p className="text-gray-500 text-xs leading-relaxed">
                General, press, and investor inquiries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
