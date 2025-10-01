import type { Metadata } from 'next';
import { Quando, Purple_Purse } from 'next/font/google';
import './globals.css';

const quando = Quando({
  variable: '--font-quando',
  subsets: ['latin'],
  weight: '400',
});

const purplePurse = Purple_Purse({
  variable: '--font-purple-purse',
  subsets: ['latin'],
  weight: '400',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cumple15juli.com'),
  title: 'Cumple 15 - Julieta Chierchie',
  description: 'Invitación al cumpleaños de 15 de Julieta Chierchie',
  openGraph: {
    title: 'Cumple 15 - Julieta Chierchie',
    description: 'Invitación al cumpleaños de 15 de Julieta Chierchie',
    images: [
      {
        url: '/tag.png',
        width: 1200,
        height: 630,
        alt: 'Invitación Cumple 15 - Julieta Chierchie',
      },
    ],
    locale: 'es_AR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cumple 15 - Julieta Chierchie',
    description: 'Invitación al cumpleaños de 15 de Julieta Chierchie',
    images: ['/tag.png'],
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
        className={`${quando.variable} ${purplePurse.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
