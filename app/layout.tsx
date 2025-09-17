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
