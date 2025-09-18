'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Fonction pour déterminer si un lien est actif
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/fr" className="flex items-center space-x-2 group">
            <img 
              src="/logo.svg" 
              alt="miShop Logo" 
              className="h-8 w-8 group-hover:scale-110 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="#features" 
              className="text-white/80 hover:text-white transition-colors duration-300"
            >
              Fonctionnalités
            </Link>
            <Link 
              href="#how-it-works" 
              className="text-white/80 hover:text-white transition-colors duration-300"
            >
              Comment ça marche
            </Link>
            <Link 
              href="#pricing" 
              className="text-white/80 hover:text-white transition-colors duration-300"
            >
              Tarifs
            </Link>
            <Link 
              href="/fr/contact" 
              className="text-white/80 hover:text-white transition-colors duration-300"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white/80 hover:text-white transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="#features" 
                className="text-white/80 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Fonctionnalités
              </Link>
              <Link 
                href="#how-it-works" 
                className="text-white/80 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Comment ça marche
              </Link>
              <Link 
                href="#pricing" 
                className="text-white/80 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Tarifs
              </Link>
              <Link 
                href="/fr/contact" 
                className="text-white/80 hover:text-white transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-white/10">
                <ThemeToggle />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}