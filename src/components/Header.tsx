'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('fr');
  const pathname = usePathname();

  // Fonction pour déterminer si un lien est actif
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  // Fonction pour obtenir les classes CSS d'un lien
  const getLinkClasses = (href: string, baseClasses: string) => {
    const activeClasses = isActive(href) 
      ? 'text-white bg-gradient-to-r from-[#563491]/20 to-[#7C3AED]/20' 
      : 'text-gray-300 hover:text-white hover:bg-[#7C3AED]/10';
    return `${baseClasses} ${activeClasses}`;
  };

  return (
    <header className="backdrop-blur-md shadow-lg border-b border-[#7C3AED]/20 sticky top-0 z-50 animate-slide-in-bottom bg-[#0b0c10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <img 
                src="/logo.svg" 
                alt="miShop Logo" 
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 group-hover:scale-110 transition-all duration-300 drop-shadow-[0_0_40px_rgba(124,58,237,0.8)] group-hover:drop-shadow-[0_0_60px_rgba(124,58,237,1)] brightness-110 group-hover:brightness-125"
              />
            </Link>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-1 animate-slide-in-right">
            <Link href="#features" className={getLinkClasses('#features', 'group px-4 py-2 text-sm font-medium transition-all duration-300 relative rounded-lg')}>
              <span className="relative z-10">Fonctionnalités</span>
              <div className={`absolute inset-0 bg-gradient-to-r from-[#563491]/20 to-[#7C3AED]/20 rounded-lg transition-opacity duration-300 ${isActive('#features') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#563491] to-[#7C3AED] transition-all duration-300 ${isActive('#features') ? 'w-8' : 'w-0 group-hover:w-8'}`}></div>
            </Link>
            <Link href="#how-it-works" className={getLinkClasses('#how-it-works', 'group px-4 py-2 text-sm font-medium transition-all duration-300 relative rounded-lg')}>
              <span className="relative z-10">Comment ça marche</span>
              <div className={`absolute inset-0 bg-gradient-to-r from-[#563491]/20 to-[#7C3AED]/20 rounded-lg transition-opacity duration-300 ${isActive('#how-it-works') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#563491] to-[#7C3AED] transition-all duration-300 ${isActive('#how-it-works') ? 'w-8' : 'w-0 group-hover:w-8'}`}></div>
            </Link>
            <Link href="#pricing" className={getLinkClasses('#pricing', 'group px-4 py-2 text-sm font-medium transition-all duration-300 relative rounded-lg')}>
              <span className="relative z-10">Tarifs</span>
              <div className={`absolute inset-0 bg-gradient-to-r from-[#563491]/20 to-[#7C3AED]/20 rounded-lg transition-opacity duration-300 ${isActive('#pricing') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#563491] to-[#7C3AED] transition-all duration-300 ${isActive('#pricing') ? 'w-8' : 'w-0 group-hover:w-8'}`}></div>
            </Link>
            <Link href="/contact" className={getLinkClasses('/contact', 'group px-4 py-2 text-sm font-medium transition-all duration-300 relative rounded-lg')}>
              <span className="relative z-10">Contact</span>
              <div className={`absolute inset-0 bg-gradient-to-r from-[#563491]/20 to-[#7C3AED]/20 rounded-lg transition-opacity duration-300 ${isActive('/contact') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}></div>
              <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#563491] to-[#7C3AED] transition-all duration-300 ${isActive('/contact') ? 'w-8' : 'w-0 group-hover:w-8'}`}></div>
            </Link>
          </nav>

          {/* Theme Toggle and Language Switcher */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <div className="flex items-center bg-gradient-to-r from-[#1a1b23] to-[#2a2b33] border border-[#7C3AED]/30 rounded-xl p-1 shadow-lg">
              <button 
                onClick={() => setLanguage('fr')}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  language === 'fr' 
                    ? 'text-white bg-gradient-to-r from-[#563491] to-[#7C3AED] shadow-lg' 
                    : 'text-gray-300 hover:text-white hover:bg-[#7C3AED]/10'
                }`}
              >
                🇫🇷 FR
              </button>
              <button 
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  language === 'en' 
                    ? 'text-white bg-gradient-to-r from-[#563491] to-[#7C3AED] shadow-lg' 
                    : 'text-gray-300 hover:text-white hover:bg-[#7C3AED]/10'
                }`}
              >
                🇺🇸 EN
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white p-2 rounded-lg hover:bg-[#7C3AED]/10 transition-all duration-300"
            >
              <svg className="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-b from-[#0b0c10] to-[#1a1b23] border-t border-[#7C3AED]/20 rounded-b-xl shadow-lg">
                        <Link
                          href="#features"
                          className={getLinkClasses('#features', 'group block px-4 py-3 text-base font-medium transition-all duration-300 relative rounded-lg')}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="flex items-center">
                            <svg className={`w-5 h-5 mr-3 text-[#7C3AED] transition-opacity duration-300 ${isActive('#features') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Fonctionnalités
                          </span>
                        </Link>
                        <Link
                          href="#how-it-works"
                          className={getLinkClasses('#how-it-works', 'group block px-4 py-3 text-base font-medium transition-all duration-300 relative rounded-lg')}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="flex items-center">
                            <svg className={`w-5 h-5 mr-3 text-[#7C3AED] transition-opacity duration-300 ${isActive('#how-it-works') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            Comment ça marche
                          </span>
                        </Link>
                        <Link
                          href="#pricing"
                          className={getLinkClasses('#pricing', 'group block px-4 py-3 text-base font-medium transition-all duration-300 relative rounded-lg')}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="flex items-center">
                            <svg className={`w-5 h-5 mr-3 text-[#7C3AED] transition-opacity duration-300 ${isActive('#pricing') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                            Tarifs
                          </span>
                        </Link>
                        <Link
                          href="/contact"
                          className={getLinkClasses('/contact', 'group block px-4 py-3 text-base font-medium transition-all duration-300 relative rounded-lg')}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="flex items-center">
                            <svg className={`w-5 h-5 mr-3 text-[#7C3AED] transition-opacity duration-300 ${isActive('/contact') ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Contact
                          </span>
                        </Link>
            <div className="px-4 py-3 mt-4 border-t border-[#7C3AED]/20">
              {/* <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-400">Thème</span>
                <ThemeToggle />
              </div> */}
              <div className="flex items-center bg-gradient-to-r from-[#1a1b23] to-[#2a2b33] border border-[#7C3AED]/30 rounded-xl p-1 shadow-lg">
                <button 
                  onClick={() => setLanguage('fr')}
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    language === 'fr' 
                      ? 'text-white bg-gradient-to-r from-[#563491] to-[#7C3AED] shadow-lg' 
                      : 'text-gray-300 hover:text-white hover:bg-[#7C3AED]/10'
                  }`}
                >
                  🇫🇷 FR
                </button>
                <button 
                  onClick={() => setLanguage('en')}
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    language === 'en' 
                      ? 'text-white bg-gradient-to-r from-[#563491] to-[#7C3AED] shadow-lg' 
                      : 'text-gray-300 hover:text-white hover:bg-[#7C3AED]/10'
                  }`}
                >
                  🇺🇸 EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
