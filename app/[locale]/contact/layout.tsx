import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact - miShop',
  description: 'Contactez l\'équipe miShop pour toute question sur notre application de création de boutique en ligne. Support client et assistance technique.',
  keywords: ['contact miShop', 'support client', 'aide technique', 'assistance e-commerce'],
  openGraph: {
    title: 'Contact - miShop',
    description: 'Contactez l\'équipe miShop pour toute question sur notre application de création de boutique en ligne.',
    url: 'https://mshop-app.com/contact',
  },
};

export default async function ContactLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  return children;
}
