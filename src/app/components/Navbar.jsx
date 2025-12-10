"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  { title: "Home", path: "/#home" },
  { title: "About", path: "/#about" },
  { title: "Projects", path: "/#projects" },
  { title: "Contact", path: "/#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-primary/10 py-4' : 'bg-transparent py-6'
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400"
          >
            MS.
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-300 relative group"
                  >
                    {link.title}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="h-6 w-px bg-slate-800"></div>

            <Link
              href="/#contact"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-primary-600 rounded-full hover:bg-primary-500 transition-all duration-300 shadow-lg shadow-primary-500/20"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-white relative z-50"
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5 align-end">
              <motion.span
                animate={navbarOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-current"
              />
              <motion.span
                animate={navbarOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-4 h-0.5 bg-current ml-auto"
              />
              <motion.span
                animate={navbarOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-6 h-0.5 bg-current"
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {navbarOpen && (
          <MenuOverlay links={navLinks} closeNavbar={() => setNavbarOpen(false)} />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;