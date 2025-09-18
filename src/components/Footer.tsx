import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0b0c10] text-white border-t border-[#7C3AED]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo et description */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <div className="flex items-center mb-3 sm:mb-4">
              <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                <img 
                  src="/logo.svg" 
                  alt="miShop Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <p className="text-gray-300 mb-3 sm:mb-4 max-w-md text-sm sm:text-base">
              L&apos;application mobile qui révolutionne la création de boutiques en ligne. 
              Créez votre boutique professionnelle en quelques minutes, directement depuis votre smartphone.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {/* Facebook */}
              <a href="#" className="text-gray-400 hover:text-[#1877F2] transition-colors">
                <span className="sr-only">Facebook</span>
                <img 
                  src="/Facebook.svg" 
                  alt="Facebook" 
                  className="h-5 w-5 sm:h-6 sm:w-6"
                />
              </a>
              
              {/* Instagram */}
              <a href="#" className="text-gray-400 hover:text-[#E4405F] transition-colors">
                <span className="sr-only">Instagram</span>
                <img 
                  src="/Instagram.svg" 
                  alt="Instagram" 
                  className="h-5 w-5 sm:h-6 sm:w-6"
                />
              </a>
              
              {/* X (Twitter) */}
              <a href="#" className="text-gray-400 hover:text-[#000000] transition-colors">
                <span className="sr-only">X</span>
                <img 
                  src="/linkedin.svg" 
                  alt="X (Twitter)" 
                  className="h-5 w-5 sm:h-6 sm:w-6"
                />
              </a>
              
              {/* YouTube */}
              <a href="#" className="text-gray-400 hover:text-[#FF0000] transition-colors">
                <span className="sr-only">YouTube</span>
                <img 
                  src="/youtube.svg" 
                  alt="YouTube" 
                  className="h-5 w-5 sm:h-6 sm:w-6"
                />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Liens rapides</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href="#features" className="text-gray-400 hover:text-white transition-colors">
                  Fonctionnalités
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">
                  Comment ça marche
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-gray-400 hover:text-white transition-colors">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link href="#download" className="text-gray-400 hover:text-white transition-colors">
                  Télécharger
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Support</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#privacy" className="text-gray-400 hover:text-white transition-colors">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link href="#terms" className="text-gray-400 hover:text-white transition-colors">
                  Conditions d&apos;utilisation
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2024 miShop. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}