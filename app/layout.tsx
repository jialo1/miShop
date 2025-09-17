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
              // Hide development indicators and scrolling elements
              function hideDevIndicators() {
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
                  const elements = document.querySelectorAll(selector);
                  elements.forEach(el => {
                    el.style.display = 'none';
                    el.style.visibility = 'hidden';
                    el.style.opacity = '0';
                    el.remove();
                  });
                });
                
                // Hide any elements with horizontal scrolling
                const scrollingElements = document.querySelectorAll('*');
                scrollingElements.forEach(el => {
                  const style = window.getComputedStyle(el);
                  if (style.transform.includes('translateX') || 
                      style.animation.includes('scroll') ||
                      style.animation.includes('marquee')) {
                    el.style.display = 'none';
                  }
                });
              }
              
              // Run immediately and on DOM changes
              document.addEventListener('DOMContentLoaded', hideDevIndicators);
              document.addEventListener('load', hideDevIndicators);
              
              // Watch for new elements
              const observer = new MutationObserver(hideDevIndicators);
              observer.observe(document.body, { childList: true, subtree: true });
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
