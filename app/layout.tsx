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
  title: "mShop - Créez votre boutique en ligne facilement",
  description: "L'application mobile qui vous permet de créer une boutique en ligne professionnelle en quelques minutes. Simple, rapide et efficace comme Shopify.",
  keywords: ["boutique en ligne", "e-commerce", "mobile", "création site web", "shopify alternative"],
  authors: [{ name: "mShop Team" }],
  creator: "mShop",
  publisher: "mShop",
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
  themeColor: '#7C3AED',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
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
                if (e.message && e.message.includes('message channel closed')) {
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
