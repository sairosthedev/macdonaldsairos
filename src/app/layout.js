import { Outfit, Inter } from 'next/font/google';
import "./globals.css";
import { seoConfig, generateStructuredData } from '../config/seo';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: seoConfig.common.title,
  description: seoConfig.common.description,
  keywords: seoConfig.common.keywords,
  authors: [{ name: seoConfig.common.author }],
  creator: seoConfig.common.creator,
  publisher: seoConfig.common.publisher,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(seoConfig.primary.domain),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    type: seoConfig.common.type,
    locale: seoConfig.common.locale,
    url: seoConfig.primary.domain,
    title: seoConfig.common.title.default,
    description: seoConfig.common.description,
    siteName: seoConfig.common.siteName,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: seoConfig.common.title.default,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seoConfig.common.title.default,
    description: seoConfig.common.description,
    images: ['/images/og-image.png'],
    creator: seoConfig.common.twitterHandle,
  },
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />

        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData('person'))
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
