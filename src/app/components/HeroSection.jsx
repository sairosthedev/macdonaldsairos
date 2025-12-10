"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Aurora Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="aurora-blob blob-1"></div>
        <div className="aurora-blob blob-2"></div>
        <div className="aurora-blob blob-3"></div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
              <span className="text-secondary-400 font-medium text-sm">Validating Ideas & Building Products</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold font-heading mb-6 tracking-tight">
              <span className="text-white">Building the </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-500">
                Digital Future
              </span>
            </h1>

            <div className="text-xl lg:text-2xl text-slate-400 mb-8 h-[60px]">
              <span className="mr-2">I am a</span>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "UI/UX Systems Architect",
                  2000,
                  "Mobile Solutions Expert",
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-white font-semibold"
              />
            </div>

            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              I transform complex requirements into scalable, high-performance digital solutions.
              Specializing in modern web architectures and intuitive user experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#contact"
                className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-slate-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
              >
                Hire Me
              </Link>
              <Link
                href="#projects"
                className="px-8 py-4 rounded-full bg-slate-900/50 text-white border border-slate-700 hover:bg-slate-800 transition-all backdrop-blur-md"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>

          {/* Abstract Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex-1 relative w-full max-w-[500px] aspect-square"
          >
            {/* Glassmorph Card Visual */}
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-full blur-[100px] animate-pulse"></div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] glass-card rounded-2xl border border-slate-700/50 p-8 transform rotate-6 hover:rotate-0 transition-all duration-700">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-4 w-3/4 bg-slate-700/50 rounded animate-pulse"></div>
                  <div className="h-4 w-1/2 bg-slate-700/50 rounded animate-pulse"></div>
                  <div className="h-32 w-full bg-slate-800/50 rounded mt-8 border border-slate-700/30"></div>
                </div>
              </div>

              <div className="absolute -bottom-10 -right-10 w-[60%] h-[60%] glass-card rounded-2xl border border-slate-700/50 p-6 transform -rotate-3 hover:rotate-0 transition-all duration-700 -z-10">
                <div className="flex justify-between items-center mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary-500/20"></div>
                  <div className="w-20 h-2 bg-slate-700/50 rounded"></div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-20 bg-slate-800/50 rounded-lg"></div>
                  <div className="h-20 bg-slate-800/50 rounded-lg"></div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;