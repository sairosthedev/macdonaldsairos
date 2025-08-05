#!/usr/bin/env node

/**
 * Icon Generation Script for PWA Support
 * 
 * This script provides instructions for generating the necessary icon files
 * for the web manifest and PWA support.
 * 
 * Run this script to get instructions on how to generate the required icons.
 */

const fs = require('fs');
const path = require('path');

console.log('🎨 PWA Icon Generation Instructions');
console.log('===================================\n');

const requiredIcons = [
  {
    name: 'favicon.ico',
    size: '16x16, 32x32',
    location: 'public/favicon.ico'
  },
  {
    name: 'favicon-16x16.png',
    size: '16x16',
    location: 'public/icons/favicon-16x16.png'
  },
  {
    name: 'favicon-32x32.png',
    size: '32x32',
    location: 'public/icons/favicon-32x32.png'
  },
  {
    name: 'apple-touch-icon.png',
    size: '180x180',
    location: 'public/icons/apple-touch-icon.png'
  },
  {
    name: 'android-chrome-192x192.png',
    size: '192x192',
    location: 'public/icons/android-chrome-192x192.png'
  },
  {
    name: 'android-chrome-512x512.png',
    size: '512x512',
    location: 'public/icons/android-chrome-512x512.png'
  },
  {
    name: 'safari-pinned-tab.svg',
    size: 'SVG format',
    location: 'public/icons/safari-pinned-tab.svg'
  },
  {
    name: 'og-image.png',
    size: '1200x630',
    location: 'public/images/og-image.png'
  }
];

console.log('Required Icons:');
requiredIcons.forEach((icon, index) => {
  console.log(`${index + 1}. ${icon.name} (${icon.size})`);
  console.log(`   Location: ${icon.location}\n`);
});

console.log('\n📋 Generation Steps:');
console.log('1. Create a high-resolution logo (at least 512x512px)');
console.log('2. Use an online tool like favicon.io or realfavicongenerator.net');
console.log('3. Generate all required sizes');
console.log('4. Place files in the correct locations as shown above');
console.log('5. Update the web manifest if needed');

console.log('\n🔧 Online Tools:');
console.log('- https://favicon.io/');
console.log('- https://realfavicongenerator.net/');
console.log('- https://www.favicon-generator.org/');

console.log('\n📁 Directory Structure:');
console.log('public/');
console.log('├── favicon.ico');
console.log('├── icons/');
console.log('│   ├── favicon-16x16.png');
console.log('│   ├── favicon-32x32.png');
console.log('│   ├── apple-touch-icon.png');
console.log('│   ├── android-chrome-192x192.png');
console.log('│   ├── android-chrome-512x512.png');
console.log('│   └── safari-pinned-tab.svg');
console.log('└── images/');
console.log('    └── og-image.png');

console.log('\n✅ After generating icons:');
console.log('1. Test the website on different devices');
console.log('2. Verify PWA installation works');
console.log('3. Check social media sharing previews');
console.log('4. Validate with Lighthouse PWA audit');

// Check if directories exist
const publicDir = path.join(process.cwd(), 'public');
const iconsDir = path.join(publicDir, 'icons');
const imagesDir = path.join(publicDir, 'images');

if (!fs.existsSync(publicDir)) {
  console.log('\n⚠️  Warning: public/ directory does not exist');
}

if (!fs.existsSync(iconsDir)) {
  console.log('\n📁 Creating icons directory...');
  fs.mkdirSync(iconsDir, { recursive: true });
  console.log('✅ Created: public/icons/');
}

if (!fs.existsSync(imagesDir)) {
  console.log('\n📁 Creating images directory...');
  fs.mkdirSync(imagesDir, { recursive: true });
  console.log('✅ Created: public/images/');
}

console.log('\n🎯 Next Steps:');
console.log('1. Generate your logo in high resolution');
console.log('2. Use one of the online tools mentioned above');
console.log('3. Place the generated files in the correct locations');
console.log('4. Test your PWA functionality');
console.log('5. Deploy and verify everything works correctly');

console.log('\n📚 Additional Resources:');
console.log('- PWA Best Practices: https://web.dev/pwa-checklist/');
console.log('- Web App Manifest: https://developer.mozilla.org/en-US/docs/Web/Manifest');
console.log('- Favicon Guidelines: https://developer.mozilla.org/en-US/docs/Glossary/Favicon'); 