import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaWhatsapp, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-8">
          {/* Logo and Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-4 group">
              <div className="relative overflow-hidden rounded-full">
                <Image
                  src="/images/logo.jpg"
                  alt="logo"
                  className="rounded-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                  width={48}
                  height={48}
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 text-transparent bg-clip-text group-hover:from-secondary-500 group-hover:to-primary-500 transition-all duration-500">
                Miccs
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs text-center md:text-left">
              Crafting innovative web solutions with passion and precision
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <FaMapMarkerAlt className="text-primary-500" />
              <span>Harare, Zimbabwe</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-white font-semibold mb-2">Quick Links</h3>
            <nav className="flex flex-col items-center md:items-start gap-2">
              <Link href="#about" className="text-gray-400 hover:text-primary-500 transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-gray-400 hover:text-primary-500 transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-gray-400 hover:text-primary-500 transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact & Social */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-white font-semibold mb-2">Connect With Me</h3>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <FaEnvelope className="text-primary-500" />
              <a href="mailto:macdonaldsairos24@gmail.com" className="hover:text-primary-500 transition-colors">
                macdonaldsairos24@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-6">
              <Link 
                href="https://www.linkedin.com/in/macdonald-sairos-8b1686186/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0A66C2] hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={28} />
              </Link>
              <Link 
                href="https://wa.me/+263786033933"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#25D366] hover:scale-110 transition-all duration-300"
                aria-label="WhatsApp Contact"
              >
                <FaWhatsapp size={28} />
              </Link>
              <Link 
                href="https://github.com/miccx-24"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
                aria-label="GitHub Profile"
              >
                <FaGithub size={28} />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-8"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 font-medium">
            © {new Date().getFullYear()} Miccs Web Development
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Designed & Built with <span className="text-red-500">❤️</span> by Macdonald Sairos
          </p>
          <p className="text-xs text-gray-600 mt-1">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;