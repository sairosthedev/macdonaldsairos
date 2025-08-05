"use client";
import Head from 'next/head';

const SEOHead = ({ 
  title, 
  description, 
  keywords = [], 
  image = '/images/og-image.png',
  url = 'https://macdonaldsairos.vercel.app',
  type = 'website',
  structuredData = null 
}) => {
  const fullTitle = title ? `${title} | Macdonald Sairos` : 'Macdonald Sairos - Full Stack Developer Portfolio';
  const fullDescription = description || 'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View my portfolio of enterprise applications, e-commerce platforms, and innovative web solutions.';
  
  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={fullDescription} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={fullDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Macdonald Sairos Portfolio" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={fullDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@macdonaldsairos" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      )}
    </Head>
  );
};

export default SEOHead; 