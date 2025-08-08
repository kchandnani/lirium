import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-dark-950 relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 via-dark-950 to-dark-900/10"></div>
      <div className="absolute top-1/3 left-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-primary-500/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 sm:w-72 h-48 sm:h-72 bg-primary-300/5 rounded-full blur-2xl"></div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 pt-16 sm:pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
} 