// Domain Configuration for Multiple Hosting Locations
export const domainConfig = {
  // Primary domain (Vercel)
  primary: {
    domain: 'https://macdonaldsairos.vercel.app',
    name: 'Macdonald Sairos Portfolio',
    priority: 1.0,
    isCanonical: true,
    region: 'Global',
    provider: 'Vercel',
  },
  
  // Alternate domain (Miccs Technologies)
  alternate: {
    domain: 'https://www.miccstechnologies.co.zw',
    name: 'Miccs Technologies - Macdonald Sairos',
    priority: 0.9,
    isCanonical: false,
    region: 'Zimbabwe',
    provider: 'Local Hosting',
  },
  
  // Development domain
  development: {
    domain: 'http://localhost:3000',
    name: 'Development',
    priority: 0.0,
    isCanonical: false,
    region: 'Local',
    provider: 'Development',
  }
};

// Helper function to get current domain
export const getCurrentDomain = () => {
  if (typeof window !== 'undefined') {
    return window.location.origin;
  }
  return domainConfig.primary.domain;
};

// Helper function to check if current domain is canonical
export const isCanonicalDomain = () => {
  const currentDomain = getCurrentDomain();
  return currentDomain === domainConfig.primary.domain;
};

// Helper function to get canonical URL for a path
export const getCanonicalUrl = (path = '') => {
  return `${domainConfig.primary.domain}${path}`;
};

// Helper function to get alternate URLs for a path
export const getAlternateUrls = (path = '') => {
  return {
    primary: `${domainConfig.primary.domain}${path}`,
    alternate: `${domainConfig.alternate.domain}${path}`,
  };
};

// Helper function to get domain-specific metadata
export const getDomainMetadata = (domain) => {
  switch (domain) {
    case domainConfig.primary.domain:
      return {
        title: "Macdonald Sairos - Full Stack Developer Portfolio",
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
          "Enterprise Applications"
        ]
      };
    case domainConfig.alternate.domain:
      return {
        title: "Macdonald Sairos - Full Stack Developer | Miccs Technologies",
        description: "Professional Full Stack Developer at Miccs Technologies. Specializing in React, Next.js, Node.js, and modern web technologies. Based in Zimbabwe, serving global clients.",
        keywords: [
          "Full Stack Developer Zimbabwe",
          "React Developer Zimbabwe",
          "Next.js Developer Zimbabwe", 
          "Node.js Developer Zimbabwe",
          "Web Development Zimbabwe",
          "JavaScript Developer Zimbabwe",
          "TypeScript Developer Zimbabwe",
          "MongoDB Developer Zimbabwe",
          "Software Engineer Zimbabwe",
          "Frontend Developer Zimbabwe",
          "Backend Developer Zimbabwe",
          "E-commerce Development Zimbabwe",
          "Enterprise Applications Zimbabwe",
          "Miccs Technologies",
          "Zimbabwe Developer",
          "African Developer"
        ]
      };
    default:
      return {
        title: "Macdonald Sairos - Full Stack Developer Portfolio",
        description: "Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.",
        keywords: [
          "Full Stack Developer",
          "React Developer",
          "Next.js Developer",
          "Node.js Developer",
          "Web Development"
        ]
      };
  }
};

// Helper function to generate hreflang tags
export const generateHreflangTags = (path = '') => {
  return [
    {
      rel: 'canonical',
      href: getCanonicalUrl(path)
    },
    {
      rel: 'alternate',
      hrefLang: 'en',
      href: `${domainConfig.primary.domain}${path}`
    },
    {
      rel: 'alternate', 
      hrefLang: 'en-ZW',
      href: `${domainConfig.alternate.domain}${path}`
    }
  ];
};

export default domainConfig; 