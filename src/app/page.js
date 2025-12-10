import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import ScrollToTop from "./components/ScrollToTop";
import Chatbot from "./components/Chatbot";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative">
      <Navbar />

      <HeroSection />

      <div className="container mx-auto px-6 py-12 space-y-24">
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>

      <Footer />
      <ScrollToTop />
      <Chatbot />
    </main>
  )
}