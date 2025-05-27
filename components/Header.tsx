import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Header() {
  const router = useRouter();
  const isContactPage = router.pathname === '/contact';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800/50 bg-dark-950/95 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        
        {/* Logo - responsive sizing */}
        <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
          <div className="relative hover:scale-105 transition-transform duration-200">
            <div className="absolute inset-0 bg-black/20 rounded-lg sm:rounded-2xl blur-lg translate-x-1 translate-y-1"></div>
            <Image 
              src="/lirium-logo.png" 
              alt="Lirium logo" 
              width={68} 
              height={68} 
              className="relative z-10 rounded-lg sm:rounded-2xl shadow-2xl sm:w-26 sm:h-26 md:w-29 md:h-29 lg:w-32 lg:h-32"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
            Home
          </Link>
          {!isContactPage && (
            <>
              <a href="/#about" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                About
              </a>
              <a href="/#projects" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                Projects
              </a>
            </>
          )}
          {!isContactPage && (
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              Contact
            </Link>
          )}
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-300 hover:text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-950/98 backdrop-blur-md border-b border-gray-800/50">
          <nav className="px-4 py-4 space-y-3">
            <Link 
              href="/" 
              className="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            {!isContactPage && (
              <>
                <a 
                  href="/#about" 
                  className="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a 
                  href="/#projects" 
                  className="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </a>
              </>
            )}
            {!isContactPage && (
              <Link 
                href="/contact" 
                className="block text-gray-300 hover:text-white transition-colors text-base font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
} 