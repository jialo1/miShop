import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

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
                <span className="block bg-gradient-to-r from-[#7C3AED] via-[#563491] to-black bg-clip-text text-transparent">
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
                    <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Télécharger l&apos;application
                    <svg className="w-2.5 h-2.5 ml-1.5 transform group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
          </a>
          <a
                    href="#how-it-works"
                    className="group border border-[#7C3AED]/30 px-3 sm:px-4 py-2 rounded-md font-medium text-xs sm:text-sm hover:border-[#7C3AED] hover:bg-[#7C3AED]/5 transition-all duration-300 flex items-center justify-center w-fit sm:w-auto"
                    style={{ color: 'var(--text-primary)' }}
                  >
                    <svg className="w-3 h-3 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                    </svg>
                    Voir comment ça marche
                  </a>
              </div>

              {/* QR Code Scanner Section */}
              <div className="mt-4 sm:mt-6 w-fit bg-white/5 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-[#7C3AED]/20">
                <div className="flex items-center space-x-3">
                  {/* QR Code */}
                  <div className="flex-shrink-0">
                    <div className="bg-white p-1 rounded-md shadow-md">
                      <img
                        src="/QRcode.png"
                        alt="QR Code pour télécharger mShop"
                        className="w-10 h-10 sm:w-12 sm:h-12"
                      />
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="flex-shrink-0">
                    <h3 className="text-sm font-medium mb-0.5" style={{ color: 'var(--text-primary)' }}>
                      Scanner pour télécharger
                    </h3>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      Scannez le QR code avec votre smartphone
                    </p>
                  </div>
                  
                </div>
              </div>
            </div>

            {/* Right side - Hero SVG */}
            <div className="relative">
              {/* SVG Container */}
              <div className="relative mx-auto w-96 h-[28rem] bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-[#7C3AED]/20 overflow-hidden flex items-center justify-center">
                <img 
                  src="/hero.svg" 
                  alt="mShop Hero" 
                  className="w-full h-full object-contain animate-pulse hover:animate-none transition-all duration-300 hover:scale-105"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-[#7C3AED]/10 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-[#563491]/10 rounded-full blur-lg animate-bounce"></div>
              <div className="absolute top-1/2 -right-8 w-12 h-12 bg-white/5 rounded-full blur-md animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-12 sm:py-16 md:py-20 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#7C3AED] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#563491] rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-[#7C3AED] to-[#563491] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-full mb-6">
              <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>✨ Fonctionnalités</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Tout ce dont vous avez besoin pour réussir
            </h2>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Des outils puissants et intuitifs pour créer une boutique en ligne professionnelle
            </p>
          </div>

          {/* Mosaic Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Feature 1 - Large card */}
            <div className="lg:col-span-2 lg:row-span-2 relative group">
              <div className="h-full rounded-2xl p-8 border border-[#7C3AED]/20 hover:border-[#7C3AED]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#7C3AED]/10" style={{ background: 'linear-gradient(to bottom right, var(--bg-secondary), var(--bg-tertiary))' }}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-[#7C3AED] to-[#563491] rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>Votre site web en 3 clics</h3>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                      Créez votre site web personnel en quelques clics, intégrant tous les moyens de paiement locaux. Personnalisez-le à votre image, ajoutez vos produits, puis partagez facilement le lien sur vos réseaux sociaux.
                      Simple, rapide et conçu pour vous mettre en valeur !
                    </p>
                    <div className="flex items-center text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                      <span>En savoir plus</span>
                      <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="relative group">
              <div className="h-full rounded-xl p-4 border border-[#7C3AED]/20 hover:border-[#7C3AED]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#7C3AED]/10" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="w-10 h-10 bg-[#7C3AED]/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#7C3AED]/30 transition-colors">
                  <svg className="w-5 h-5 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Commande</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Recevez vos commandes sur l&apos;appli et gérez-les en quelques clics. Gagnez du temps et boostez la crédibilité de votre commerce digital.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="relative group">
              <div className="h-full rounded-xl p-4 border border-[#7C3AED]/20 hover:border-[#7C3AED]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#7C3AED]/10" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="w-10 h-10 bg-[#7C3AED]/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#7C3AED]/30 transition-colors">
                  <svg className="w-5 h-5 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Statistiques</h3>
                  <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    Suivez vos ventes et performances en temps réel. Une vue à 360° pour décider vite et booster votre commerce digital.
                  </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="relative group">
              <div className="h-full rounded-xl p-4 border border-[#7C3AED]/20 hover:border-[#7C3AED]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#7C3AED]/10" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="w-10 h-10 bg-[#7C3AED]/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#7C3AED]/30 transition-colors">
                  <img
                    src="/paiement.svg"
                    alt="Paiements sécurisés"
                    className="w-7 h-7"
                  />
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Paiements sécurisés</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Offrez à vos clients une expérience de paiement fiable et protégée, grâce aux meilleures technologies de sécurité.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="relative group">
              <div className="h-full rounded-xl p-4 border border-[#7C3AED]/20 hover:border-[#7C3AED]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#7C3AED]/10" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="w-10 h-10 bg-[#7C3AED]/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#7C3AED]/30 transition-colors">
                  <svg className="w-5 h-5 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Livraison</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Intégrez la livraison directement sur votre site grâce à une API performante. Simplifiez votre logistique.
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="relative group">
              <div className="h-full rounded-xl p-4 border border-[#7C3AED]/20 hover:border-[#7C3AED]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#7C3AED]/10" style={{ backgroundColor: 'var(--bg-secondary)' }}>
                <div className="w-10 h-10 bg-[#7C3AED]/20 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#7C3AED]/30 transition-colors">
                  <svg className="w-5 h-5 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Campagne SMS</h3>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  Touchez vos clients en un clic avec des campagnes SMS. Boostez vos ventes simplement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how-it-works" className="py-12 sm:py-16 md:py-20" style={{ backgroundColor: 'var(--bg-how-it-works)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--text-primary)' }}>
              Comment ça marche ?
            </h2>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Votre boutique en ligne en 3 étapes, aussi simple qu&apos;un clic
            </p>
          </div>

          {/* 3 Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {/* Step 1 */}
            <div className="text-center group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-xl p-4 sm:p-6 hover:bg-white/5">
              <div className="mb-6">
                <div className="text-2xl font-light mb-4 transition-colors duration-300 group-hover:text-[#7C3AED] text-[#7C3AED]">01</div>
                <div className="w-full h-px mb-6 transition-all duration-300 group-hover:bg-[#7C3AED] group-hover:h-0.5" style={{ backgroundColor: 'var(--text-secondary)' }}></div>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 transition-colors duration-300 group-hover:text-[#7C3AED] text-[#7C3AED]">
                Téléchargement
              </h3>
              <p className="text-base leading-relaxed transition-colors duration-300 group-hover:text-white" style={{ color: 'var(--text-secondary)' }}>
                Téléchargez l&apos;application mShop depuis l&apos;App Store ou Google Play Store. L&apos;installation est rapide et sécurisée, vous permettant de commencer en quelques minutes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-xl p-4 sm:p-6 hover:bg-white/5">
              <div className="mb-6">
                <div className="text-2xl font-light mb-4 transition-colors duration-300 group-hover:text-[#7C3AED] text-[#7C3AED]">02</div>
                <div className="w-full h-px mb-6 transition-all duration-300 group-hover:bg-[#7C3AED] group-hover:h-0.5" style={{ backgroundColor: 'var(--text-secondary)' }}></div>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 transition-colors duration-300 group-hover:text-[#7C3AED] text-[#7C3AED]">
                Configuration
              </h3>
              <p className="text-base leading-relaxed transition-colors duration-300 group-hover:text-white" style={{ color: 'var(--text-secondary)' }}>
                Personnalisez votre boutique avec nos modèles professionnels. Ajoutez vos produits, configurez les paiements et créez votre identité visuelle en quelques clics.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-xl p-4 sm:p-6 hover:bg-white/5">
              <div className="mb-6">
                <div className="text-2xl font-light mb-4 transition-colors duration-300 group-hover:text-[#7C3AED] text-[#7C3AED]">03</div>
                <div className="w-full h-px mb-6 transition-all duration-300 group-hover:bg-[#7C3AED] group-hover:h-0.5" style={{ backgroundColor: 'var(--text-secondary)' }}></div>
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 transition-colors duration-300 group-hover:text-[#7C3AED] text-[#7C3AED]">
                Lancement
              </h3>
              <p className="text-base leading-relaxed transition-colors duration-300 group-hover:text-white" style={{ color: 'var(--text-secondary)' }}>
                Votre boutique est prête ! Partagez le lien sur vos réseaux sociaux et commencez à vendre. Nous vous accompagnons avec des outils de suivi et d&apos;analyse.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="w-full h-px mb-8" style={{ backgroundColor: 'var(--text-secondary)' }}></div>
            <a 
              href="#download" 
              className="inline-flex items-center text-base font-medium hover:opacity-80 transition-opacity" 
              style={{ color: 'var(--text-primary)' }}
            >
              Commencer maintenant
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#7C3AED]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#563491]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#7C3AED]/3 to-[#563491]/3 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header with badge */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-full mb-4">
              <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>💰 Tarifs</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
              Tarifs simples et transparents
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Choisissez le plan qui correspond à vos besoins. Pas de frais cachés, pas de surprises.
            </p>
          </div>

          {/* Pricing cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {/* Plan Basic */}
            <div className="relative group">
              <div className="bg-transparent rounded-2xl p-6 text-center flex flex-col h-full border-2 border-[#7C3AED]/30 hover:border-[#7C3AED]/60 hover:bg-black/5 dark:hover:bg-[#7C3AED]/5 transition-all duration-300 hover:shadow-xl hover:shadow-[#7C3AED]/20 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Plan Basic</h3>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>CFA ..?</div>
                </div>
                
                <ul className="space-y-3 mb-6 text-left flex-grow">
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span style={{ color: 'var(--text-secondary)' }}>5 Boutique maximum</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span style={{ color: 'var(--text-secondary)' }}>20 Produits maximum</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span style={{ color: 'var(--text-secondary)' }}>5 Categories</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span style={{ color: 'var(--text-secondary)' }}>1 Partenaires</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span style={{ color: 'var(--text-secondary)' }}>1 Manager</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span style={{ color: 'var(--text-secondary)' }}>1 Sponsor</span>
                  </li>
                </ul>
                
                <button className="w-full bg-[#7C3AED] text-white py-2 px-3 sm:px-4 rounded-lg font-medium hover:bg-[#6D28D9] transition-all duration-300 hover:shadow-md hover:shadow-[#7C3AED]/25 text-xs sm:text-sm">
                  Choisir Basic
                </button>
              </div>
            </div>

            {/* Plan Optimum */}
            <div className="relative group">
              <div className="bg-transparent rounded-2xl p-6 text-center flex flex-col h-full border-2 border-[#7C3AED] hover:border-[#7C3AED] hover:bg-black/10 dark:hover:bg-[#7C3AED]/10 shadow-xl shadow-[#7C3AED]/10 hover:shadow-[#7C3AED]/25 transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Plan Optimum</h3>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>CFA ..?</div>
                </div>
                
                <ul className="space-y-3 mb-6 text-left flex-grow">
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span style={{ color: 'var(--text-secondary)' }}>10 Boutique maximum</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span style={{ color: 'var(--text-secondary)' }}>50 Produits maximum</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span style={{ color: 'var(--text-secondary)' }}>10 Categories</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span style={{ color: 'var(--text-secondary)' }}>2 Partenaires</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span style={{ color: 'var(--text-secondary)' }}>2 Manager</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span style={{ color: 'var(--text-secondary)' }}>2 Sponsor</span>
                  </li>
                </ul>
                
                <button className="w-full bg-white text-[#7C3AED] py-2 px-3 sm:px-4 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 hover:shadow-md hover:shadow-white/25 border border-[#7C3AED]/20 text-xs sm:text-sm">
                  Choisir Optimum
                </button>
              </div>
            </div>

            {/* Plan Premium */}
            <div className="relative group">
              <div className="bg-transparent rounded-2xl p-6 text-center flex flex-col h-full border-2 border-[#7C3AED]/30 hover:border-[#7C3AED]/60 hover:bg-black/5 dark:hover:bg-[#7C3AED]/5 transition-all duration-300 hover:shadow-xl hover:shadow-[#7C3AED]/20 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>Plan Premium</h3>
                
                <div className="mb-6">
                  <div className="text-4xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>CFA ..?</div>
                </div>
                
                <ul className="space-y-3 mb-6 text-left flex-grow">
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span style={{ color: 'var(--text-secondary)' }}>20 Boutique maximum</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span style={{ color: 'var(--text-secondary)' }}>100 Produits maximum</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span style={{ color: 'var(--text-secondary)' }}>20 Categories</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span style={{ color: 'var(--text-secondary)' }}>5 Partenaires</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span style={{ color: 'var(--text-secondary)' }}>5 Manager</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span style={{ color: 'var(--text-secondary)' }}>5 Sponsor</span>
                  </li>
                </ul>
                
                <button className="w-full bg-transparent text-[#7C3AED] py-2 px-3 sm:px-4 rounded-lg font-medium hover:bg-[#7C3AED]/10 border-2 border-[#7C3AED] hover:shadow-md hover:shadow-[#7C3AED]/25 text-xs sm:text-sm transition-all duration-300">
                  Choisir Premium
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mobile App Showcase Section */}
      <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-[#7C3AED]/5 to-[#563491]/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-[#563491]/5 to-[#7C3AED]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#7C3AED]/3 to-[#563491]/3 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-full mb-4 sm:mb-6">
              <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>📱 Application</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4" style={{ color: 'var(--text-primary)' }}>
              Découvrez mShop en action
            </h2>
            <p className="text-lg sm:text-xl max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              Une interface intuitive et moderne, conçue pour simplifier votre expérience e-commerce
            </p>
          </div>

          {/* 2 Phones Showcase */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {/* Phone 1 - Dashboard */}
          <div className="text-center">
            <div className="relative group">
                  <div className="relative w-48 h-[400px] sm:w-56 sm:h-[480px] mx-auto">
                    {/* Phone shadow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/20 to-[#563491]/20 rounded-[2.5rem] blur-xl transform translate-y-6 scale-105 group-hover:scale-110 transition-all duration-500"></div>
                    
                    {/* Phone body */}
                    <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[2.5rem] p-1.5 shadow-xl transform perspective-1000 group-hover:rotate-y-6 group-hover:rotate-x-2 transition-all duration-700">
                      {/* Phone screen */}
                      <div className="w-full h-full rounded-[2rem] relative overflow-hidden">
                        <img 
                          src="/Phone1.JPG" 
                          alt="Dashboard mShop" 
                          className="w-full h-full object-cover rounded-[2rem]"
                        />
                        {/* Home button */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

          {/* Phone 2 - Products */}
          <div className="text-center">
            <div className="relative group">
                  <div className="relative w-48 h-[400px] sm:w-56 sm:h-[480px] mx-auto">
                    {/* Phone shadow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#563491]/15 to-[#7C3AED]/15 rounded-[2.5rem] blur-xl transform translate-y-6 scale-105 group-hover:scale-110 transition-all duration-500"></div>
                    
                    {/* Phone body */}
                    <div className="relative w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[2.5rem] p-1.5 shadow-xl transform perspective-1000 group-hover:-rotate-y-8 group-hover:rotate-x-2 transition-all duration-700">
                      {/* Phone screen */}
                      <div className="w-full h-full rounded-[2rem] relative overflow-hidden">
                        <img 
                          src="/Phone2.JPEG" 
                          alt="Produits mShop" 
                          className="w-full h-full object-cover rounded-[2rem]"
                        />
                        {/* Home button */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-gray-600 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* CTA Section */}
        <section id="download" className="py-8 sm:py-10 md:py-12 relative overflow-hidden" style={{ background: 'var(--gradient-download)' }}>
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#563491]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#7C3AED]/10 rounded-full blur-2xl"></div>
          
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
              {/* Left side - Text content */}
              <div className="text-left">
                <div className="inline-flex items-center px-3 py-1 rounded-full mb-3" style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>🎉 C&apos;est parti !</span>
                </div>

                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3" style={{ color: 'var(--text-primary)' }}>
                  Prêt à créer votre boutique ?
                </h2>
                <p className="text-sm sm:text-base mb-3 sm:mb-4 max-w-lg" style={{ color: 'var(--text-secondary)' }}>
                  Rejoignez des milliers d&apos;entrepreneurs qui ont déjà choisi mShop pour développer leur business en ligne ✨
                </p>

                {/* Trust indicators - Compact */}
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-2">
                      <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Gratuit à commencer</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-2">
                      <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Sans engagement</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-2">
                      <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>Support inclus</span>
                  </div>
                </div>
              </div>

              {/* Right side - Download buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-end">
                <a
                  href="#"
                  className="group bg-white text-[#563491] px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center w-fit sm:w-auto text-xs sm:text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  iOS
                  <svg className="w-3 h-3 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="group bg-white text-[#563491] px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center w-fit sm:w-auto text-xs sm:text-sm"
                >
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Android
                  <svg className="w-3 h-3 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

      <Footer />
    </div>
  );
}
