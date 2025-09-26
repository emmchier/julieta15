import type { Metadata } from 'next';
import { Quando, Purple_Purse } from 'next/font/google';
import './globals.css';

const quando = Quando({
  variable: '--font-quando',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

const purplePurse = Purple_Purse({
  variable: '--font-purple-purse',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Cumple 15 - Julieta Chierchie',
  description: 'Invitación al cumpleaños de 15 de Julieta Chierchie',
  openGraph: {
    title: 'Cumple 15 - Julieta Chierchie',
    description: 'Invitación al cumpleaños de 15 de Julieta Chierchie',
    url: 'https://invitacion15juli.com',
    siteName: 'Cumple 15 - Julieta Chierchie',
    images: [
      {
        url: '/tag.png',
        width: 1200,
        height: 630,
        alt: 'Invitación a cumple de 15 de Julieta Chierchie',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${quando.variable} ${purplePurse.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
