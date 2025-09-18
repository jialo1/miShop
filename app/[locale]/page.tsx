import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-8 sm:py-12 md:py-16 overflow-hidden" style={{ background: 'var(--gradient-primary)' }}>
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {/* Floating orbs */}
          <div className="absolute top-20 left-20 w-32 h-32 rounded-full blur-xl animate-pulse bg-[#7C3AED]/20"></div>
          <div className="absolute top-40 right-32 w-24 h-24 rounded-full blur-lg animate-pulse delay-1000 bg-[#563491]/30"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 rounded-full blur-2xl animate-pulse delay-2000 bg-gradient-to-r from-[#7C3AED]/10 to-[#563491]/20"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(124, 58, 237, 0.3) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Left side - Content */}
            <div className="text-left">

              {/* Main heading */}
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 leading-tight">
                <span className="block bg-gradient-to-r from-[#7C3AED] via-[#563491] to-black dark:to-white bg-clip-text text-transparent">
                  Votre boutique en ligne en 3 clics
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm mb-4 sm:mb-6 max-w-2xl leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Créez votre site web personnel en quelques clics, intégrant tous les moyens de paiement locaux. Personnalisez-le à votre image, ajoutez vos produits, puis partagez facilement le lien sur vos réseaux sociaux. Simple, rapide et conçu pour vous mettre en valeur !
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <a
                    href="#download"
                    className="group bg-gradient-to-r from-[#563491] to-[#7C3AED] text-white px-3 sm:px-4 py-2 rounded-md font-medium text-xs sm:text-sm hover:from-[#4C1D95] hover:to-[#6D28D9] transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-[#7C3AED]/25 hover:-translate-y-0.5 flex items-center justify-center w-fit sm:w-auto"
                  >
                    Télécharger l'application
                  </a>
                  <a
                    href="#how-it-works"
                    className="group bg-white/10 backdrop-blur-sm border border-white/20 text-white px-3 sm:px-4 py-2 rounded-md font-medium text-xs sm:text-sm hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center justify-center w-fit sm:w-auto"
                  >
                    Voir comment ça marche
                  </a>
              </div>
            </div>

            {/* Right side - App showcase */}
            <div className="relative">
              <div className="relative z-10">
                <img 
                  src="/hero.svg" 
                  alt="miShop Hero"
                  className="w-full h-auto max-w-lg mx-auto drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}