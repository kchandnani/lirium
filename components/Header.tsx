import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const isContactPage = router.pathname === '/contact';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800/50 bg-dark-950/95 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo only - clickable to go home */}
        <Link href="/" className="flex items-center">
          <div className="relative hover:scale-105 transition-transform duration-200">
            {/* Subtle shadow instead of glow for the square logo */}
            <div className="absolute inset-0 bg-black/20 rounded-2xl blur-lg translate-x-1 translate-y-1"></div>
            <Image 
              src="/lirium-logo.png" 
              alt="Lirium logo" 
              width={195} 
              height={195} 
              className="relative z-10 rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </Link>

        {/* Navigation - conditional based on page */}
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
        <button className="md:hidden text-gray-300 hover:text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
} 