import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://macdonaldsairos.vercel.app';
  const alternateUrl = 'https://www.miccstechnologies.co.zw';
  
  // Get current date
  const currentDate = new Date().toISOString();
  
  // Define your projects data (you can import this from your projects data file)
  const projects = [
    {
      title: "Candy Bucket E-commerce",
      url: "https://candybucket.vercel.app/",
      lastModified: currentDate,
    },
    {
      title: "Mac-Fi Network Management",
      url: "https://mac-wifi.vercel.app/",
      lastModified: currentDate,
    },
    {
      title: "Online Bus Ticketing",
      url: "https://mac-sairos-online-bus.vercel.app/",
      lastModified: currentDate,
    },
    {
      title: "Pamusha Student Boarding House System",
      url: "https://student-accommodation-five.vercel.app",
      lastModified: currentDate,
    },
    {
      title: "Restaurant Management",
      url: "https://restaurant-sairos.vercel.app",
      lastModified: currentDate,
    },
    {
      title: "Miccs Technologies",
      url: "https://miccs-technologies.vercel.app/",
      lastModified: currentDate,
    },
    {
      title: "Truck Logistics System",
      url: "https://www.truckstophub.com",
      lastModified: currentDate,
    },
    {
      title: "Alamait Property Management System",
      url: "https://alamait.vercel.app/",
      lastModified: currentDate,
    },
    {
      title: "Mbare Mkambo Market Management System",
      url: "http://20.116.222.250/",
      lastModified: currentDate,
    },
    {
      title: "Starlink Portal",
      url: "https://starlink.auragrp.com/",
      lastModified: currentDate,
    },
    {
      title: "Drought Monitoring System",
      url: "https://v0-nasa-api-drought-app.vercel.app/",
      lastModified: currentDate,
    },
    {
      title: "AI-Powered Task Manager",
      url: "https://ai-task-manager.vercel.app/",
      lastModified: currentDate,
    },
    {
      title: "Real-Time Chat Application",
      url: "https://realtime-chat-app.vercel.app/",
      lastModified: currentDate,
    },
    {
      title: "E-Learning Platform",
      url: "https://elearning-platform.vercel.app/",
      lastModified: currentDate,
    },
    {
      title: "Weather Dashboard",
      url: "https://weather-dashboard-sairos.vercel.app/",
      lastModified: currentDate,
    },
    {
      title: "Inventory Management System",
      url: "https://inventory-management.vercel.app/",
      lastModified: currentDate,
    },
    {
      title: "Social Media Analytics Dashboard",
      url: "https://social-analytics-dashboard.vercel.app/",
      lastModified: currentDate,
    },
    {
      title: "Event Management Platform",
      url: "https://event-management-platform.vercel.app/",
      lastModified: currentDate,
    },
    {
      title: "Personal Finance Tracker",
      url: "https://personal-finance-tracker.vercel.app/",
      lastModified: currentDate,
    },
    {
      title: "Healthcare Appointment System",
      url: "https://healthcare-appointments.vercel.app/",
      lastModified: currentDate,
    },
    {
      title: "Recipe Management App",
      url: "https://recipe-management-app.vercel.app/",
      lastModified: currentDate,
    },
  ];

  // Generate XML sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Primary Domain -->
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/#about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/#projects</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${baseUrl}/#contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  
  <!-- Alternate Domain -->
  <url>
    <loc>${alternateUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>${alternateUrl}/#about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${alternateUrl}/#projects</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${alternateUrl}/#contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  
  <!-- Project URLs -->
  ${projects.map(project => `
  <url>
    <loc>${project.url}</loc>
    <lastmod>${project.lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
} 