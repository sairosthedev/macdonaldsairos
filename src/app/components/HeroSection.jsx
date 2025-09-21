"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-20 min-h-screen flex items-center">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-lg sm:text-xl font-medium">
              👋 Hello, I'm
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-russo mb-6 text-4xl sm:text-5xl lg:text-7xl lg:leading-tight font-extrabold"
          >
            <span className="text-white">
              Macdonald
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Mobile Developer", 
                2000,
                "UI/UX Designer",
                2000,
                "Problem Solver",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-orbitron text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600"
            />
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-[#ADB7BE] text-base sm:text-lg mb-8 lg:text-xl leading-relaxed max-w-2xl"
          >
            Crafting digital experiences that blend innovation with functionality. 
            Specializing in modern web applications, mobile solutions, and user-centered design.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-6 mb-8 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-gray-400">Available for projects</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400 font-semibold">20+</span>
              <span className="text-gray-400">Projects completed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400 font-semibold">3+</span>
              <span className="text-gray-400">Years experience</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#contact"
              className="group relative px-8 py-4 w-full sm:w-fit rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="relative z-10">Get In Touch</span>
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </Link>
            <Link
              href="#projects"
              className="group px-8 py-4 w-full sm:w-fit rounded-full border-2 border-purple-500/30 hover:border-purple-500 text-white font-semibold transition-all duration-300 hover:scale-105 hover:bg-purple-500/10"
            >
              <span className="flex items-center justify-center gap-2">
                View My Work
                <motion.svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Animated Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="col-span-5 place-self-center mt-8 lg:mt-0"
        >
          <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]">
            {/* Outer Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-purple-500/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Middle Ring */}
            <motion.div
              className="absolute inset-8 rounded-full border-4 border-pink-500/20"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Inner Ring */}
            <motion.div
              className="absolute inset-16 rounded-full border-4 border-blue-500/20"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            {/* Central Element */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-40 h-40 lg:w-48 lg:h-48 relative"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 clip-hex transform hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-4xl lg:text-5xl font-press-start text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    MS
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 shadow-lg"
                initial={{ scale: 0, x: "50%", y: "50%" }}
                animate={{
                  scale: [0, 1, 0],
                  x: ["50%", `${Math.random() * 100}%`],
                  y: ["50%", `${Math.random() * 100}%`],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut",
                }}
              />
            ))}

            {/* Tech Stack Icons */}
            {['⚛️', '🚀', '💻', '🎨', '📱', '☁️'].map((icon, i) => (
              <motion.div
                key={i}
                className="absolute text-2xl"
                style={{
                  left: `${50 + 35 * Math.cos(i * Math.PI / 3)}%`,
                  top: `${50 + 35 * Math.sin(i * Math.PI / 3)}%`,
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, delay: i * 0.5 },
                }}
              >
                {icon}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;