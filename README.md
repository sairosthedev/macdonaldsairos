# Macdonald Sairos - Portfolio

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Developer.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark theme
- **Responsive**: Fully responsive across all devices
- **Animations**: Smooth animations using Framer Motion
- **Interactive Elements**: Hover effects, sound effects, and interactive components
- **Contact Form**: Functional contact form with email integration
- **SEO Optimized**: Meta tags, structured data, and performance optimized
- **Fast Loading**: Optimized images and code splitting
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Heroicons, React Icons
- **Email**: Resend API
- **Deployment**: Vercel
- **Fonts**: Custom gaming fonts (Russo One, Orbitron, Press Start 2P)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Run the development server**
```bash
npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🔧 Configuration

### Email Setup (Resend)

1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add it to your `.env.local` file
4. Update the sender email in `src/app/api/send/route.js`

### Customization

- **Colors**: Update the color scheme in `tailwind.config.js`
- **Content**: Modify the content in component files
- **Projects**: Update project data in `src/app/components/ProjectsSection.jsx`
- **Skills**: Modify skills in `src/app/components/AboutSection.jsx`

## 📁 Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── send/
│   │       └── route.js          # Email API endpoint
│   ├── components/
│   │   ├── AboutSection.jsx      # About section with skills
│   │   ├── AchievementsSection.jsx # Statistics and achievements
│   │   ├── ContactSection.jsx    # Contact form and info
│   │   ├── Footer.jsx           # Footer component
│   │   ├── HeroSection.jsx      # Hero section with animations
│   │   ├── Navbar.jsx           # Navigation bar
│   │   ├── ProjectsSection.jsx  # Projects showcase
│   │   ├── TestimonialsSection.jsx # Client testimonials
│   │   └── ...                  # Other components
│   ├── globals.css              # Global styles
│   ├── layout.js                # Root layout
│   └── page.js                  # Home page
├── config/
│   ├── domains.js               # Domain configuration
│   └── seo.js                   # SEO settings
```

## 🎨 Customization Guide

### Adding New Projects

1. Open `src/app/components/ProjectsSection.jsx`
2. Add a new project to the `projectsData` array:

```javascript
{
  id: 21,
  title: "Your Project Name",
  description: "Project description here...",
  image: "/images/projects/your-project.png",
  tag: ["All", "Web", "YourCategory"],
  gitUrl: "https://github.com/yourusername/project",
  previewUrl: "https://your-project.vercel.app",
  technologies: ["React", "Node.js", "MongoDB"]
}
```

### Modifying Skills

1. Open `src/app/components/AboutSection.jsx`
2. Update the `skills` array:

```javascript
const skills = [
  { name: "Your Skill", level: 90, icon: "🚀" },
  // Add more skills...
];
```

### Changing Colors

1. Open `tailwind.config.js`
2. Update the color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-color-here',
        // Add more shades...
      }
    }
  }
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📊 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for all metrics
- **Image Optimization**: Next.js Image component with WebP format
- **Code Splitting**: Automatic code splitting for optimal loading
- **Caching**: Optimized caching strategies

## 🔍 SEO Features

- Meta tags for all pages
- Open Graph tags for social sharing
- Twitter Card support
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt configuration
- Canonical URLs

## 🎯 Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance
- Focus management

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm, md, lg, xl, 2xl
- Touch-friendly interactions
- Optimized for all screen sizes

## 🎨 Animation Features

- Page transitions
- Scroll-triggered animations
- Hover effects
- Loading states
- Micro-interactions
- Particle effects

## 📞 Contact

- **Email**: macdonaldsairos@gmail.com
- **Phone**: +263 786 033 933
- **LinkedIn**: [Macdonald Sairos](https://linkedin.com/in/macdonald-sairos)
- **GitHub**: [miccx-24](https://github.com/miccx-24)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Heroicons](https://heroicons.com/) for beautiful icons
- [Resend](https://resend.com/) for email functionality

---

Made with ❤️ by Macdonald Sairos
