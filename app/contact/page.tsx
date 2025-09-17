'use client';

import { useState } from 'react';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulation d'envoi (remplacez par votre logique d'envoi)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden" style={{ background: 'var(--gradient-primary)' }}>
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#7C3AED]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#563491]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center px-3 py-2 sm:px-4 bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded-full mb-4 sm:mb-6">
            <span className="text-[#7C3AED] text-xs sm:text-sm font-medium">📞 Contact</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--text-primary)' }}>
            Contactez-nous
          </h1>
          
          <p className="text-lg sm:text-xl max-w-2xl mx-auto px-4" style={{ color: 'var(--text-secondary)' }}>
            Une question ? Un projet ? Notre équipe est là pour vous accompagner dans votre aventure e-commerce.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 lg:py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--text-primary)' }}>Informations de contact</h2>
                <p className="mb-6 sm:mb-8 text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>
                  N&apos;hésitez pas à nous contacter pour toute question concernant mShop. 
                  Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-[#563491]/10 to-[#7C3AED]/10 rounded-xl border border-[#7C3AED]/20">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7C3AED]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>Email</h3>
                    <p className="text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>contact@mshop.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-[#563491]/10 to-[#7C3AED]/10 rounded-xl border border-[#7C3AED]/20">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7C3AED]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>Téléphone</h3>
                    <p className="text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>+33 1 23 45 67 89</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-[#563491]/10 to-[#7C3AED]/10 rounded-xl border border-[#7C3AED]/20">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#7C3AED]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-[#7C3AED]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>Adresse</h3>
                    <p className="text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>123 Rue de l&apos;Innovation<br />75001 Paris, France</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-6 sm:pt-8">
                <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{ color: 'var(--text-primary)' }}>Suivez-nous</h3>
                <div className="flex space-x-3 sm:space-x-4">
                  <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-[#7C3AED]/20 rounded-lg flex items-center justify-center hover:bg-[#7C3AED]/30 transition-colors">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#7C3AED]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-[#7C3AED]/20 rounded-lg flex items-center justify-center hover:bg-[#7C3AED]/30 transition-colors">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#7C3AED]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 bg-[#7C3AED]/20 rounded-lg flex items-center justify-center hover:bg-[#7C3AED]/30 transition-colors">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#7C3AED]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-2xl p-4 sm:p-6 lg:p-8 border border-[#7C3AED]/20 shadow-2xl" style={{ backgroundColor: 'var(--bg-secondary)' }}>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: 'var(--text-primary)' }}>Envoyez-nous un message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-6 sm:py-8">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Message envoyé !</h3>
                  <p className="text-sm sm:text-base" style={{ color: 'var(--text-secondary)' }}>Merci pour votre message. Nous vous répondrons dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all duration-300"
                        style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                        placeholder="Votre nom"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all duration-300"
                        style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs sm:text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                      Sujet *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all duration-300"
                      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium mb-2" style={{ color: 'var(--text-secondary)' }}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED] focus:border-transparent transition-all duration-300 resize-none"
                      style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
                      placeholder="Décrivez votre projet ou votre question..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#563491] to-[#7C3AED] text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-base hover:from-[#4C1D95] hover:to-[#6D28D9] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#7C3AED]/25 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
