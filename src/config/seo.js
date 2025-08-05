// SEO Configuration for Multiple Domains
export const seoConfig = {
  // Primary domain (Vercel)
  primary: {
    domain: 'https://macdonaldsairos.vercel.app',
    priority: 1.0,
    isCanonical: true,
  },
  
  // Alternate domain (Miccs Technologies)
  alternate: {
    domain: 'https://www.miccstechnologies.co.zw',
    priority: 0.9,
    isCanonical: false,
  },
  
  // Common SEO settings
  common: {
    title: {
      default: "Macdonald Sairos - Full Stack Developer Portfolio",
      template: "%s | Macdonald Sairos"
    },
    description: "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View my portfolio of enterprise applications, e-commerce platforms, and innovative web solutions.",
    keywords: [
      "Full Stack Developer",
      "React Developer",
      "Next.js Developer",
      "Node.js Developer",
      "Web Development",
      "JavaScript Developer",
      "TypeScript Developer",
      "MongoDB Developer",
      "Portfolio",
      "Software Engineer",
      "Frontend Developer",
      "Backend Developer",
      "E-commerce Development",
      "Enterprise Applications",
      "Zimbabwe Developer",
      "African Developer"
    ],
    author: "Macdonald Sairos",
    creator: "Macdonald Sairos",
    publisher: "Macdonald Sairos",
    locale: "en_US",
    type: "website",
    siteName: "Macdonald Sairos Portfolio",
    twitterHandle: "@macdonaldsairos",
  },
  
  // Social media profiles
  social: {
    github: "https://github.com/sairosthedev",
    linkedin: "https://linkedin.com/in/macdonald-sairos",
    twitter: "https://twitter.com/macdonaldsairos",
    whatsapp: "+263 786 033 933",
    email: "macdonaldsairos@gmail.com",
  },
  
  // Company information
  company: {
    name: "Miccs Technologies",
    website: "https://www.miccstechnologies.co.zw",
    description: "Professional web development company in Zimbabwe",
  },
  
  // Performance targets
  performance: {
    lcp: 2500, // Largest Contentful Paint (ms)
    fid: 100,  // First Input Delay (ms)
    cls: 0.1,  // Cumulative Layout Shift
    ttfb: 600, // Time to First Byte (ms)
  },
  
  // Cache settings
  cache: {
    static: 86400, // 24 hours
    dynamic: 3600, // 1 hour
    sitemap: 86400, // 24 hours
  }
};

// Helper function to get canonical URL
export const getCanonicalUrl = (path = '') => {
  return `${seoConfig.primary.domain}${path}`;
};

// Helper function to get alternate URLs
export const getAlternateUrls = (path = '') => {
  return {
    primary: `${seoConfig.primary.domain}${path}`,
    alternate: `${seoConfig.alternate.domain}${path}`,
  };
};

// Helper function to generate structured data
export const generateStructuredData = (type = 'person') => {
  const baseData = {
    "@context": "https://schema.org",
    "@type": type,
    "name": "Macdonald Sairos",
    "jobTitle": "Full Stack Developer",
    "description": seoConfig.common.description,
    "url": seoConfig.primary.domain,
    "image": `${seoConfig.primary.domain}/images/profile.jpg`,
    "sameAs": [
      seoConfig.social.github,
      seoConfig.social.linkedin,
      seoConfig.social.twitter
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "Node.js",
      "JavaScript",
      "TypeScript",
      "MongoDB",
      "Web Development",
      "Full Stack Development"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": seoConfig.company.name,
      "url": seoConfig.company.website
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ZW",
      "addressRegion": "Zimbabwe"
    }
  };

  return baseData;
};

export default seoConfig; 