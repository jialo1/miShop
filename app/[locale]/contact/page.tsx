'use client';

import { useTranslations } from 'next-intl';
import Header from '../../../src/components/Header';
import Footer from '../../../src/components/Footer';

export default function Contact() {
  const t = useTranslations();

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <Header />
      
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              {t('contact.title')}
            </h1>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              {t('contact.subtitle')}
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 sm:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  {t('contact.getInTouch')}
                </h2>
                <p className="mb-6" style={{ color: 'var(--text-secondary)' }}>
                  {t('contact.description')}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#563491] to-[#7C3AED] rounded-lg flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium" style={{ color: 'var(--text-primary)' }}>
                        {t('contact.email')}
                      </p>
                      <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                        contact@mishop-app.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                  {t('contact.sendMessage')}
                </h2>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder={t('contact.form.name')}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-white placeholder-gray-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder={t('contact.form.email')}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-white placeholder-gray-300"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder={t('contact.form.message')}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7C3AED] text-white placeholder-gray-300 resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#563491] to-[#7C3AED] text-white py-3 rounded-lg font-medium hover:from-[#4C1D95] hover:to-[#6D28D9] transition-all duration-300"
                  >
                    {t('contact.form.send')}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}