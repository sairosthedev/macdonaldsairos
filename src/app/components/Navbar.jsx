"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "Home",
    path: "/#home",
  },
  {
    title: "About",
    path: "/#about",
  },
  {
    title: "Projects",
    path: "/#projects",
  },
  {
    title: "Contact",
    path: "/#contact",
  },
];

const socialLinks = [
  {
    title: "GitHub",
    url: "https://github.com/miccx-24",
    icon: "/github-icon.svg"
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/macdonald-sairos-8b1686186/",
    icon: "/linkedin-icon.svg"
  }
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#111111]/90 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link 
            href="/"
            className="flex items-center space-x-3 group"
          >
            <div className="relative">
              <Image
                src="/images/logo.jpg"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full shadow-lg transition-all duration-300 group-hover:scale-110"
              />
              <motion.div 
                className="absolute -inset-2 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-lg opacity-75 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 90, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </div>
            <span className="hidden sm:block text-lg font-medium text-white/90 group-hover:text-white transition-colors">
              My Portfolio
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.path}
                    className={`text-base font-medium transition-colors duration-300 ${
                      activeSection === link.path.slice(2)
                        ? 'text-blue-500'
                        : 'text-gray-300 hover:text-white'
                    }`}
                    onClick={() => setActiveSection(link.path.slice(2))}
                  >
                    {link.title}
                  </Link>
                  {activeSection === link.path.slice(2) && (
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-500 rounded-full"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </motion.li>
              ))}
            </ul>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src={link.icon}
                    alt={link.title}
                    width={20}
                    height={20}
                    className="filter invert"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setNavbarOpen(!navbarOpen)}
              className="flex items-center p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
            >
              <div className="space-y-2">
                <motion.span
                  animate={navbarOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className="block w-8 h-0.5 bg-white"
                />
                <motion.span
                  animate={navbarOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="block w-8 h-0.5 bg-white"
                />
                <motion.span
                  animate={navbarOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className="block w-8 h-0.5 bg-white"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {navbarOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#111111]/95 backdrop-blur-lg"
          >
            <MenuOverlay links={navLinks} socialLinks={socialLinks} />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;