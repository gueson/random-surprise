import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  weight: ['400', '600', '800'],
  fallback: ['system-ui', 'sans-serif'],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.random-surprise.online/';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Random Surprise - Click to Discover Random Websites',
    template: '%s | Random Surprise',
  },
  description: 'Click the Useless button and discover a random website! The perfect button for the bored, you never know where you\'ll end up. So go ahead and give it a try.',
  keywords: [
    'random website',
    'the useless web',
    'website discovery',
    'random web',
    'useless websites',
    'bored button',
  ],
  authors: [{ name: 'Random Surprise Team', url: BASE_URL }],
  creator: 'Random Surprise',
  publisher: 'Random Surprise',
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
  alternates: {
    canonical: BASE_URL,
    languages: {
      'en-US': BASE_URL,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    siteName: 'Random Surprise',
    title: 'Random Surprise - Click to Discover Random Websites',
    description: 'Click the button and discover a random website!',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Random Surprise - Discover Random Websites',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Random Surprise - Click to Discover Random Websites',
    description: 'Click the button and discover a random website!',
    site: '@randomsurprise',
    creator: '@randomsurprise',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Random Surprise',
      description: 'Click the button and discover a random website!',
      publisher: {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        name: 'Random Surprise',
        url: BASE_URL,
      },
    },
    {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/#webpage`,
      url: BASE_URL,
      name: 'Random Surprise - Discover Random Websites',
      description: 'Click the button and discover a random website!',
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${BASE_URL}/#website`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          defer
          src="https://unpkg.com/web-vitals@3/dist/web-vitals.iife.js"
        />
        {/* Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1TJ5TYZ3H0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1TJ5TYZ3H0');
          `}
        </Script>
      </head>
      <body className={`${inter.className} min-h-screen gradient-bg flex flex-col`}>
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}