"use client";
import React from "react";
import Link from "next/link";
import { FaGithub, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, url: "https://github.com/sairosthedev" },
    { icon: FaWhatsapp, url: "https://wa.me/+263786033933" },
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/macdonald-sairos-8b1686186/" },
  ];

  return (
    <footer className="w-full border-t border-slate-800 bg-slate-950/50 backdrop-blur-xl mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-heading text-white mb-2">Macdonald Sairos</h3>
            <p className="text-slate-400 text-sm">
              Empowering businesses with scalable digital solutions.
            </p>
          </div>

          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
              >
                <link.icon className="w-6 h-6" />
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {currentYear} Macdonald Sairos. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center gap-1">
            Built with <span className="text-red-500">♥</span> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;