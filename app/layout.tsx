import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Almarai } from 'next/font/google';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { siteMetadata } from '@/data/siteMetadata';

import './globals.css';
import 'react-tabs/style/react-tabs.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Script from 'next/script';

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['300', '400', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    images: ['/image-home.png', '/logo2.png'],
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.siteName,
    locale: siteMetadata.locale,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/image-home.png', '/logo2.png'],
    title: siteMetadata.title,
    description: siteMetadata.description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className={`${almarai.className} bg-background`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <Script src="/hello.js" data-nscript="lazyOnload" />
      </body>
    </html>
  );
}
