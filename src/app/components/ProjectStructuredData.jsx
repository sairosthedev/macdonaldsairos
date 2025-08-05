"use client";
import { useEffect } from 'react';

const ProjectStructuredData = ({ projects }) => {
  useEffect(() => {
    // Create structured data for projects
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": "Portfolio Projects",
      "description": "A collection of web development projects showcasing full-stack development skills",
      "numberOfItems": projects.length,
      "itemListElement": projects.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "CreativeWork",
          "name": project.title,
          "description": project.description,
          "url": project.previewUrl,
          "author": {
            "@type": "Person",
            "name": "Macdonald Sairos"
          },
          "creator": {
            "@type": "Person",
            "name": "Macdonald Sairos"
          },
          "dateCreated": new Date().toISOString(),
          "genre": project.tag.filter(tag => tag !== "All"),
          "keywords": project.technologies.join(", "),
          "image": project.image,
          "sameAs": project.gitUrl ? [project.gitUrl] : [],
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "url": project.previewUrl
          }
        }
      }))
    };

    // Add the structured data to the page
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [projects]);

  return null; // This component doesn't render anything
};

export default ProjectStructuredData; 