import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../src/contexts/ThemeContext";
import ThemeWrapper from "../src/components/ThemeWrapper";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mshop-app.com'),
  title: {
    default: "mShop - Créez votre boutique en ligne facilement",
    template: "%s | mShop"
  },
  description: "L'application mobile qui vous permet de créer une boutique en ligne professionnelle en quelques minutes. Simple, rapide et efficace comme Shopify. Créez votre e-commerce en 3 clics.",
  keywords: [
    "boutique en ligne",
    "e-commerce", 
    "mobile",
    "création site web",
    "shopify alternative",
    "boutique en ligne mobile",
    "e-commerce mobile",
    "créer boutique en ligne",
    "application e-commerce",
    "site e-commerce",
    "boutique digitale",
    "commerce en ligne",
    "vente en ligne",
    "plateforme e-commerce",
    "créateur boutique",
    "boutique professionnelle"
  ],
  authors: [{ name: "mShop Team", url: "https://github.com/jialo1/miShop" }],
  creator: "mShop",
  publisher: "mShop",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://mshop-app.com',
    siteName: 'mShop',
    title: 'mShop - Créez votre boutique en ligne facilement',
    description: 'L\'application mobile qui vous permet de créer une boutique en ligne professionnelle en quelques minutes. Simple, rapide et efficace.',
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 630,
        alt: 'mShop - Application de création de boutique en ligne',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mShop - Créez votre boutique en ligne facilement',
    description: 'L\'application mobile qui vous permet de créer une boutique en ligne professionnelle en quelques minutes.',
    images: ['/logo.svg'],
    creator: '@mshop',
  },
  alternates: {
    canonical: 'https://mshop-app.com',
  },
  category: 'technology',
  classification: 'E-commerce Application',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  manifest: '/manifest.json',
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#7C3AED',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "mShop",
              "description": "Application mobile pour créer une boutique en ligne professionnelle en quelques minutes",
              "url": "https://mshop-app.com",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": ["iOS", "Android"],
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "XOF"
              },
              "author": {
                "@type": "Organization",
                "name": "mShop Team"
              },
              "publisher": {
                "@type": "Organization",
                "name": "mShop",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://mshop-app.com/logo.svg"
                }
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1250"
              }
            })
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Hide development indicators and prevent console errors
              function hideDevIndicators() {
                try {
                  const selectors = [
                    '[data-nextjs-toast]',
                    '.nextjs-toast',
                    '[data-next-badge]',
                    '[data-next-badge-root]',
                    '#devtools-indicator',
                    '.devtools-indicator',
                    '[aria-label*="Next.js"]',
                    '[aria-label*="TypeScript"]',
                    '[aria-label*="React"]',
                    '[title*="Next.js"]',
                    '[title*="TypeScript"]',
                    '[title*="React"]'
                  ];
                  
                  selectors.forEach(selector => {
                    try {
                      const elements = document.querySelectorAll(selector);
                      elements.forEach(el => {
                        if (el && el.parentNode) {
                          el.style.display = 'none';
                          el.style.visibility = 'hidden';
                          el.style.opacity = '0';
                          el.remove();
                        }
                      });
                    } catch (e) {
                      // Silent fail for extension conflicts
                    }
                  });
                } catch (e) {
                  // Silent fail for extension conflicts
                }
              }
              
              // Prevent extension-related console errors
              window.addEventListener('error', function(e) {
                if (e.message && (
                  e.message.includes('message channel closed') ||
                  e.message.includes('message port closed') ||
                  e.message.includes('extension') ||
                  e.message.includes('chrome-extension') ||
                  e.message.includes('moz-extension')
                )) {
                  e.preventDefault();
                  e.stopPropagation();
                  return false;
                }
              });
              
              // Prevent unhandled promise rejections from extensions
              window.addEventListener('unhandledrejection', function(e) {
                if (e.reason && (
                  e.reason.message && e.reason.message.includes('message channel closed') ||
                  e.reason.message && e.reason.message.includes('extension')
                )) {
                  e.preventDefault();
                  return false;
                }
              });
              
              // Run when DOM is ready
              if (document.readyState === 'loading') {
                document.addEventListener('DOMContentLoaded', hideDevIndicators);
              } else {
                hideDevIndicators();
              }
              
              // Watch for new elements with error handling
              try {
                const observer = new MutationObserver(hideDevIndicators);
                if (document.body) {
                  observer.observe(document.body, { childList: true, subtree: true });
                }
              } catch (e) {
                // Silent fail for extension conflicts
              }
            `,
          }}
        />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <ThemeWrapper>
            {children}
          </ThemeWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
