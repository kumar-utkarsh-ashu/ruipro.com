import type { Metadata } from 'next';
import './globals.css';
import UniversalHeader from '@/components/UniversalHeader';
import UniversalFooter from '@/components/UniversalFooter';

export const metadata: Metadata = {
  metadataBase: new URL('https://ruipro.com'),
  title: 'RUIPRO - Pure Fiber Optic HDMI & DisplayPort Cables | Official Showcase',
  description: 'Official RUIPRO brand and product showcase. Discover 8K 48Gbps active optical cables, detachable conduit-friendly systems, and armored HDMI 2.1 connectivity for home theaters, gaming, and commercial AV.',
  keywords: 'RUIPRO, HDMI fiber cable, 8K optical HDMI, 48Gbps HDMI, detachable HDMI cable, DisplayPort optical, SUNIIN TECHNOLOGY',
  openGraph: {
    title: 'RUIPRO - Optical AV Connectivity Solutions',
    description: 'High-performance active optical cables and detachable systems for home theaters, gaming, and commercial AV.',
    url: 'https://ruipro.com',
    siteName: 'RUIPRO',
    images: [
      {
        url: '/images/banners/05_banner-home-theater-pure-light_2000x821.png',
        width: 1200,
        height: 630,
        alt: 'RUIPRO Fiber Optic Cables',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/images/logo/Favicon/1.png.png" />
      </head>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 antialiased font-sans">
        <UniversalHeader />
        <main className="flex-grow">
          {children}
        </main>
        <UniversalFooter />
      </body>
    </html>
  );
}
