"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SocialIcon = ({ icon }) => {
  return React.cloneElement(icon, {
    className: "w-6 h-6"
  });
};

const PixelCorner = ({ position }) => (
  <div className={`absolute w-2 h-2 bg-purple-500 ${position} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
);

const Particle = ({ delay }) => {
  return (
    <motion.div
      className="absolute w-1 h-1 bg-purple-500/50 rounded-full"
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1.5, 0],
        y: [-20, -40],
        x: Math.random() * 40 - 20
      }}
      transition={{
        duration: 2,
        delay: delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 2
      }}
    />
  );
};

const ParticleContainer = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <Particle key={i} delay={i * 0.2} />
      ))}
    </div>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showParticles, setShowParticles] = useState(false);

  const playHoverSound = () => {
    const audio = new Audio('/hover.mp3');
    audio.volume = 0.2;
    audio.play().catch(() => {});
  };

  const playClickSound = () => {
    const audio = new Audio('/click.mp3');
    audio.volume = 0.3;
    audio.play().catch(() => {});
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/sairosthedev",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/+263786033933",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/macdonald-sairos-8b1686186/",
      icon: (
        <svg fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-[#111111] border-t border-purple-500/20 relative">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4 relative group"
            onHoverStart={() => setShowParticles(true)}
            onHoverEnd={() => setShowParticles(false)}
          >
            {showParticles && <ParticleContainer />}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center relative group">
                <PixelCorner position="top-0 left-0" />
                <PixelCorner position="top-0 right-0" />
                <PixelCorner position="bottom-0 left-0" />
                <PixelCorner position="bottom-0 right-0" />
                <span className="font-press-start text-white text-lg">MS</span>
              </div>
              <motion.h3 
                className="font-orbitron text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Macdonald Sairos
              </motion.h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting digital experiences with code and creativity. Full Stack Developer passionate about building innovative solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="font-orbitron text-lg text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a 
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 group"
                    onMouseEnter={playHoverSound}
                    onClick={playClickSound}
                  >
                    <motion.span 
                      className="w-1.5 h-1.5 rounded-full bg-purple-500"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    <span className="relative">
                      {link.name}
                      <motion.span
                        className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-purple-400"
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.2 }}
                      />
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="font-orbitron text-lg text-white">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-[#1a1a1a] text-gray-400 hover:text-purple-400 hover:bg-[#2a2a2a] transition-all duration-300 relative group"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onMouseEnter={playHoverSound}
                  onClick={playClickSound}
                >
                  <PixelCorner position="top-0 left-0" />
                  <PixelCorner position="top-0 right-0" />
                  <PixelCorner position="bottom-0 left-0" />
                  <PixelCorner position="bottom-0 right-0" />
                  <SocialIcon icon={link.icon} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 pt-8 border-t border-purple-500/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p 
              className="text-gray-400 text-sm group"
              whileHover={{ color: "#A855F7" }}
            >
              © {currentYear} Macdonald Sairos. All rights reserved.
              <motion.span
                className="block h-0.5 bg-purple-500 w-0 group-hover:w-full transition-all duration-300"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </motion.p>
            <motion.div 
              className="flex items-center space-x-2 text-gray-400 text-sm relative group"
              whileHover={{ color: "#A855F7" }}
              onHoverStart={() => setShowParticles(true)}
              onHoverEnd={() => setShowParticles(false)}
            >
              {showParticles && <ParticleContainer />}
              <span className="font-press-start">Made with</span>
              <motion.span
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="relative"
              >
                💜
                <motion.div
                  className="absolute -inset-2 bg-purple-500/20 rounded-full blur-sm"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0.2, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </motion.span>
              <span className="font-press-start">by MS</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;