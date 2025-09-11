import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0c10]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0b0c10] via-[#1a1b23] to-[#2d1b69] py-16 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          {/* Floating orbs */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-[#7C3AED]/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-[#563491]/30 rounded-full blur-lg animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-r from-[#7C3AED]/10 to-[#563491]/20 rounded-full blur-2xl animate-pulse delay-2000"></div>
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(124, 58, 237, 0.3) 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Content */}
            <div className="text-left">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-full mb-6">
                <div className="w-2 h-2 bg-[#7C3AED] rounded-full mr-2 animate-pulse"></div>
                <span className="text-[#7C3AED] text-sm font-medium">🚀 Nouveau : Version 2.0 disponible</span>
              </div>

              {/* Main heading */}
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Créez votre boutique en ligne
                <span className="block bg-gradient-to-r from-[#c084fc] via-white to-white bg-clip-text text-transparent">
                  en quelques minutes
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-gray-300 mb-6 max-w-2xl leading-relaxed">
                L&apos;application mobile qui révolutionne le e-commerce. Créez, gérez et développez votre boutique en ligne directement depuis votre smartphone, sans compétences techniques.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#7C3AED]/20 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">10 min</div>
                    <div className="text-sm text-gray-400">Configuration</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#7C3AED]/20 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">50k+</div>
                    <div className="text-sm text-gray-400">Utilisateurs</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#7C3AED]/20 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">99%</div>
                    <div className="text-sm text-gray-400">Satisfaction</div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#download"
                  className="group bg-gradient-to-r from-[#563491] to-[#7C3AED] text-white px-6 py-3 rounded-lg font-semibold text-base hover:from-[#4C1D95] hover:to-[#6D28D9] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#7C3AED]/25 hover:-translate-y-1 flex items-center justify-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  Télécharger l&apos;application
                  <svg className="w-3 h-3 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
          </a>
          <a
                  href="#how-it-works"
                  className="group border-2 border-[#7C3AED]/30 text-gray-200 px-6 py-3 rounded-lg font-semibold text-base hover:border-[#7C3AED] hover:text-white hover:bg-[#7C3AED]/5 transition-all duration-300 flex items-center justify-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6-8h8a2 2 0 012 2v8a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2z" />
                  </svg>
                  Voir comment ça marche
                </a>
              </div>
            </div>

            {/* Right side - Hero SVG */}
            <div className="relative">
              {/* SVG Container */}
              <div className="relative mx-auto w-96 h-[28rem] bg-gradient-to-br from-[#1a1b23] to-[#2a2b33] rounded-2xl p-8 shadow-2xl border border-[#7C3AED]/20 overflow-hidden flex items-center justify-center">
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
      <section id="features" className="py-20 bg-[#0b0c10] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#7C3AED] rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#563491] rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-[#7C3AED] to-[#563491] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-full mb-6">
              <span className="text-[#7C3AED] text-sm font-medium">✨ Fonctionnalités</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Tout ce dont vous avez besoin pour réussir
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Des outils puissants et intuitifs pour créer une boutique en ligne professionnelle
            </p>
          </div>

          {/* Mosaic Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 - Large card */}
            <div className="lg:col-span-2 lg:row-span-2 relative group">
              <div className="h-full bg-gradient-to-br from-[#1a1b23] to-[#2a2b33] rounded-2xl p-8 border border-[#7C3AED]/20 hover:border-[#7C3AED]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-[#7C3AED]/10">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-[#7C3AED] to-[#563491] rounded-xl flex items-center justify-center shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <span className="text-[#7C3AED] font-bold text-sm mr-2">STAR</span>
                      <div className="w-8 h-0.5 bg-[#7C3AED]"></div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Configuration rapide</h3>
                    <p className="text-gray-300 text-lg leading-relaxed mb-4">
                      Créez votre boutique en moins de 10 minutes avec notre assistant intelligent. 
                      Interface intuitive et guidage pas à pas.
                    </p>
                    <div className="flex items-center text-[#7C3AED] text-sm font-medium">
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
              <div className="h-full bg-[#1a1b23] rounded-xl p-6 border border-[#7C3AED]/20 hover:border-[#7C3AED]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#7C3AED]/10">
                <div className="w-12 h-12 bg-[#7C3AED]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#7C3AED]/30 transition-colors">
                  <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Designs professionnels</h3>
                <p className="text-gray-300 text-sm">
                  Centaines de modèles optimisés pour la conversion
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="relative group">
              <div className="h-full bg-[#1a1b23] rounded-xl p-6 border border-[#7C3AED]/20 hover:border-[#7C3AED]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#7C3AED]/10">
                <div className="w-12 h-12 bg-[#7C3AED]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#7C3AED]/30 transition-colors">
                  <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Analytics intégrés</h3>
                <p className="text-gray-300 text-sm">
                  Suivez vos ventes en temps réel
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="relative group">
              <div className="h-full bg-[#1a1b23] rounded-xl p-6 border border-[#7C3AED]/20 hover:border-[#7C3AED]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#7C3AED]/10">
                <div className="w-12 h-12 bg-[#7C3AED]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#7C3AED]/30 transition-colors">
                  <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Paiements sécurisés</h3>
                <p className="text-gray-300 text-sm">
                  Solutions de paiement fiables
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="relative group">
              <div className="h-full bg-[#1a1b23] rounded-xl p-6 border border-[#7C3AED]/20 hover:border-[#7C3AED]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#7C3AED]/10">
                <div className="w-12 h-12 bg-[#7C3AED]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#7C3AED]/30 transition-colors">
                  <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Support client</h3>
                <p className="text-gray-300 text-sm">
                  Équipe dédiée à votre réussite
                </p>
              </div>
            </div>

            {/* Feature 6 */}
            <div className="relative group">
              <div className="h-full bg-[#1a1b23] rounded-xl p-6 border border-[#7C3AED]/20 hover:border-[#7C3AED]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#7C3AED]/10">
                <div className="w-12 h-12 bg-[#7C3AED]/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#7C3AED]/30 transition-colors">
                  <svg className="w-6 h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Performance optimisée</h3>
                <p className="text-gray-300 text-sm">
                  Chargement ultra-rapide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section id="how-it-works" className="py-20 bg-[#0b0c10]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comment ça marche ?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Votre boutique en ligne en 3 étapes, aussi simple qu&apos;un clic
            </p>
          </div>

          {/* Timeline verticale */}
          <div className="relative">
            {/* Ligne de connexion */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#7C3AED] via-[#563491] to-[#7C3AED]"></div>
            
            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex items-center">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-[#7C3AED] to-[#563491] rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-6 md:ml-12 md:w-1/2">
                  <div className="bg-[#1a1b23] rounded-lg p-4 border border-[#7C3AED]/20 hover:border-[#7C3AED]/40 transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <span className="text-[#7C3AED] font-bold text-xs mr-2">ÉTAPE 01</span>
                      <div className="w-6 h-0.5 bg-[#7C3AED]"></div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Téléchargez l&apos;app</h3>
                    <p className="text-gray-300 text-sm">
                      Installez mShop depuis l&apos;App Store ou Google Play
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-center md:flex-row-reverse">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-[#7C3AED] to-[#563491] rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-6 md:ml-0 md:mr-12 md:w-1/2">
                  <div className="bg-[#1a1b23] rounded-lg p-4 border border-[#7C3AED]/20 hover:border-[#7C3AED]/40 transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <span className="text-[#7C3AED] font-bold text-xs mr-2">ÉTAPE 02</span>
                      <div className="w-6 h-0.5 bg-[#7C3AED]"></div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Configurez votre boutique</h3>
                    <p className="text-gray-300 text-sm">
                      Choisissez votre design et ajoutez vos produits
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-center">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-r from-[#7C3AED] to-[#563491] rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="ml-6 md:ml-12 md:w-1/2">
                  <div className="bg-[#1a1b23] rounded-lg p-4 border border-[#7C3AED]/20 hover:border-[#7C3AED]/40 transition-all duration-300">
                    <div className="flex items-center mb-2">
                      <span className="text-[#7C3AED] font-bold text-xs mr-2">ÉTAPE 03</span>
                      <div className="w-6 h-0.5 bg-[#7C3AED]"></div>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">Lancez-vous !</h3>
                    <p className="text-gray-300 text-sm">
                      Votre boutique est prête ! Commencez à vendre
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-[#0b0c10] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-64 h-64 bg-[#7C3AED]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#563491]/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-[#7C3AED]/3 to-[#563491]/3 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header with badge */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-full mb-4">
              <span className="text-[#7C3AED] text-sm font-medium">💰 Tarifs</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
              Tarifs simples et transparents
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Choisissez le plan qui correspond à vos besoins. Pas de frais cachés, pas de surprises.
            </p>
          </div>

          {/* Pricing cards with creative layout */}
          <div className="relative">
            {/* Starter Plan - Left side */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-end">
              <div className="lg:col-span-1">
                <div className="relative group">
                  <div className="bg-gradient-to-br from-[#1a1b23] to-[#2a2b33] rounded-2xl p-8 text-center flex flex-col h-full border border-[#7C3AED]/10 hover:border-[#7C3AED]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#7C3AED]/10">
                    {/* Plan icon */}
                    <div className="w-16 h-16 bg-[#7C3AED]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#7C3AED]/30 transition-colors">
                      <svg className="w-8 h-8 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
                    <p className="text-gray-400 text-sm mb-4">Parfait pour débuter</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">0</span>
                      <span className="text-xl text-gray-400 ml-2">FCFA</span>
                      <div className="text-gray-400 text-sm mt-1">/mois</div>
                    </div>
                    
                    <ul className="space-y-3 mb-6 text-left flex-grow">
                      <li className="flex items-center">
                        <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-300">Jusqu&apos;à 10 produits</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-300">Design de base</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-300">Support par email</span>
                      </li>
                    </ul>
                    
                    <button className="w-full bg-gray-200 text-gray-900 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300 hover:shadow-lg">
                      Commencer gratuitement
                    </button>
                  </div>
                </div>
              </div>

              {/* Pro Plan - Center (Featured) */}
              <div className="lg:col-span-1 relative">
                {/* Popular badge */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-[#7C3AED] to-[#563491] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    ⭐ Populaire
                  </div>
                </div>
                
                <div className="relative group">
                  <div className="bg-gradient-to-br from-[#563491] to-[#7C3AED] rounded-2xl p-8 text-center flex flex-col h-full border-2 border-[#7C3AED] shadow-2xl shadow-[#7C3AED]/20 hover:shadow-[#7C3AED]/30 transition-all duration-300 transform hover:-translate-y-2">
                    {/* Plan icon */}
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/30 transition-colors">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
                    <p className="text-white/80 text-sm mb-4">Pour les pros ambitieux</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">19 000</span>
                      <span className="text-xl text-white/80 ml-2">FCFA</span>
                      <div className="text-white/80 text-sm mt-1">/mois</div>
                    </div>
                    
                    <ul className="space-y-3 mb-6 text-left flex-grow">
                      <li className="flex items-center">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white">Produits illimités</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white">Designs premium</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white">Analytics avancés</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-white">Support prioritaire</span>
                      </li>
                    </ul>
                    
                    <button className="w-full bg-white text-[#563491] py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:shadow-lg">
                      Essayer Pro
                    </button>
                  </div>
                </div>
              </div>

              {/* Enterprise Plan - Right side */}
              <div className="lg:col-span-1">
                <div className="relative group">
                  <div className="bg-gradient-to-br from-[#1a1b23] to-[#2a2b33] rounded-2xl p-8 text-center flex flex-col h-full border border-[#7C3AED]/10 hover:border-[#7C3AED]/30 transition-all duration-300 hover:shadow-xl hover:shadow-[#7C3AED]/10">
                    {/* Plan icon */}
                    <div className="w-16 h-16 bg-[#7C3AED]/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#7C3AED]/30 transition-colors">
                      <svg className="w-8 h-8 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                    <p className="text-gray-400 text-sm mb-4">Pour les grandes entreprises</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-white">65 000</span>
                      <span className="text-xl text-gray-400 ml-2">FCFA</span>
                      <div className="text-gray-400 text-sm mt-1">/mois</div>
                    </div>
                    
                    <ul className="space-y-3 mb-6 text-left flex-grow">
                      <li className="flex items-center">
                        <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-300">Tout de Pro</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-300">API personnalisée</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-300">Gestionnaire dédié</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-6 h-6 bg-[#7C3AED]/20 rounded-full flex items-center justify-center mr-3">
                          <svg className="w-3 h-3 text-[#7C3AED]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-300">Support 24/7</span>
                      </li>
                    </ul>
                    
                    <button className="w-full bg-gray-200 text-gray-900 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300 hover:shadow-lg">
                      Contacter les ventes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom note */}
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              💳 Tous les plans incluent une garantie de remboursement de 30 jours
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-16 bg-gradient-to-r from-[#563491] to-black relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-white/8 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative">
          {/* Friendly badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-4">
            <span className="text-white text-sm font-medium">🎉 C&apos;est parti !</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Prêt à créer votre boutique ?
          </h2>
          <p className="text-lg text-white/80 mb-6 max-w-xl">
            Rejoignez des milliers d&apos;entrepreneurs qui ont déjà choisi mShop pour développer leur business en ligne ✨
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-6 mb-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-2">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white/90 text-sm">Gratuit à commencer</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-2">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white/90 text-sm">Sans engagement</span>
            </div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-2">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white/90 text-sm">Support inclus</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#"
              className="group bg-white text-[#563491] px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center"
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
              className="group bg-white text-[#563491] px-4 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center"
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
      </section>

      <Footer />
    </div>
  );
}
