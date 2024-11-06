"use client";
import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import RainEffect from "./RainEffect";
import { motion } from "framer-motion";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen lg:py-16">
            <RainEffect />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/40 backdrop-blur-[2px] z-0"></div>
            
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl animate-float"></div>
                <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-500/20 rounded-full blur-2xl animate-float-delayed"></div>
                <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-12 relative z-10 max-w-7xl mx-auto px-4 gap-12 items-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
                >                    
                    <h1 className="text-white mb-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 animate-gradient">Hello, I'm {""}</span>
                        <TypeAnimation
                            sequence={[
                                ' Macdonald Sairos',
                                1500,
                                'a Data Scientist',
                                1500,
                                'a Web Developer',
                                1500,
                                'a UI/UX Designer',
                                1500,
                                'a Graphics Designer',
                                1500,
                                'a Full-Stack Developer',
                                1500
                            ]}
                            wrapper="span"
                            speed={50}
                            className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 text-transparent bg-clip-text"
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-10 lg:text-xl max-w-2xl leading-relaxed font-light">
                        Transforming ideas into elegant solutions through code and design. With expertise in software development, data science, and informatics, I create innovative digital experiences that make a difference. Let's build something extraordinary together.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-5 justify-center sm:justify-start">
                        <Link href="#contact" className="group px-7 py-3 w-fit text-white font-semibold rounded-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
                            Hire Me
                            <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                        <Link href="#projects" className="group px-7 py-3 w-fit text-white font-semibold rounded-full border border-white/20 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-white/10 backdrop-blur-sm">
                            View Projects
                            <span className="inline-block ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </div>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="col-span-5 place-self-center mt-8 lg:mt-0"
                >
                    <div className="relative w-[280px] h-[280px] lg:w-[420px] lg:h-[420px]">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-400 to-green-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 rounded-full blur-2xl opacity-10 animate-pulse-slow"></div>
                        
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl transform hover:scale-105 transition-transform duration-500 group">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-green-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Image
                                src="/images/hero.jpg"
                                alt="Macdonald Sairos"
                                className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover hover:rotate-6 transition-all duration-500"
                                width={420}
                                height={420}
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;