import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaWhatsapp, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-8 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.jpg"
              alt="logo"
              className="rounded-full object-cover"
              width={40}
              height={40}
              priority
            />
            <span className="text-lg font-semibold">
              Miccs
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <Link 
              href="https://www.linkedin.com/in/macdonald-sairos-8b1686186/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#0A66C2] transition-colors"
            >
              <FaLinkedin size={24} />
            </Link>
            <Link 
              href="https://wa.me/+263786033933"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#25D366] transition-colors"
            >
              <FaWhatsapp size={24} />
            </Link>
            <Link 
              href="https://github.com/miccx-24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={24} />
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Miccs Web Development</p>
            <p className="text-xs mt-1">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;