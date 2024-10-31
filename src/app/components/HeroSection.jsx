"use client";
import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import RainEffect from "./RainEffect";

const HeroSection = () => {
    return (
        <section className="relative min-h-screen lg:py-16">
            <RainEffect />
            <div className="grid grid-cols-1 sm:grid-cols-12 relative z-10 max-w-7xl mx-auto px-4 gap-8 items-center">
                <div className="col-span-7 place-self-center text-center sm:text-left justify-self-start">
                    <h1 className="text-white mb-4 text-4xl sm:text-4xl lg:text-6xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-700">Hello, I'm {""}</span>
                        <TypeAnimation
                            sequence={[
                                ' MacSairos',
                                1000,
                                'a Data Scientist',
                                1000,
                                'a Web Developer',
                                1000,
                                'a UI/UX Designer',
                                1000,
                                'a Graphics Designer',
                                1000,
                                'a Front-End Developer',
                                1000,
                                'a Back-End Developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={10}
                            className="bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text"
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-8 lg:text-xl max-w-2xl leading-relaxed">
                        I am a versatile and skilled professional with a strong background in software development, data science, and informatics. With a passion for leveraging technology to solve complex problems, I have developed a diverse skill set that spans across web development, data analysis, and information management. My goal is to create innovative solutions that drive efficiency and enhance user experiences.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-gradient-to-r from-blue-800 via-green-300 to-orange-700 hover:opacity-90 text-white font-semibold transition-all duration-300 transform hover:scale-105">
                            Consider Me
                        </button>
                        <a 
                            href="/CV.pdf" 
                            download="CV.pdf"
                            className="group relative px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-blue-800 via-green-300 to-orange-700 hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                        >
                            <span className="flex items-center justify-center gap-2 bg-black hover:bg-slate-900 rounded-full px-5 py-2 text-white">
                                Download Curriculum Vitae
                                <svg 
                                    className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
                
                <div className="col-span-5 place-self-center mt-8 lg:mt-0">
                    <div className="relative w-[200px] h-[200px] lg:w-[400px] lg:h-[400px]">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-green-300 to-orange-700 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        <Image
                            src="/images/hero.jpg"
                            alt="hero"
                            className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover border-4 border-white/10 shadow-2xl"
                            width={300}
                            height={300}
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;