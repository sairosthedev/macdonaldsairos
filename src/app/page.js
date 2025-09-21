import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import SoundProvider from "./components/SoundProvider";
import PerformanceMonitor from "./components/PerformanceMonitor";
import Chatbot from "./components/Chatbot";

export default function Home() {
  return(
    <main className="flex min-h-screen flex-col bg-black">
      <PerformanceMonitor />
      <Navbar/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <SoundProvider>
          <AboutSection />
        </SoundProvider>
        <ProjectsSection />
      </div>
      <Footer/>
      <Chatbot />
    </main>
  )
}