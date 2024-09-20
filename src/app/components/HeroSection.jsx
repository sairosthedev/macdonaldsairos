"use client";
import React from "react";
import Image from "next/image";
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 sm:grid-cols-12">
                <div className="col-span-7 place-self-center text-center sm:text-left">
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
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#788086] text-base sm:text-lg mb-6 lg:text-xl">
                        I am a versatile and skilled professional with a strong background in software development, data science, and informatics. With a passion for leveraging technology to solve complex problems, I have developed a diverse skill set that spans across web development, data analysis, and information management. My goal is to create innovative solutions that drive efficiency and enhance user experiences.
                    </p>
                    <div>
                        <button className="px-6 py-3 sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-800 via-green-300 to-orange-700 hover:bg-slate-300 text-blue-800">
                            Consider Me
                        </button>
                        <a 
                            href="/CV.pdf" 
                            download="CV.pdf"
                            className="inline-block px-1 py-1 sm:w-fit rounded-full bg-gradient-to-br from-blue-800 via-green-300 to-orange-700 hover:bg-slate-900 text-blue-800 border border-white mt-4"
                        >
                            <span className="block bg-black hover:bg-slate-800 rounded-full px-5 py-2">
                                Download Curriculum Vitae
                            </span>
                        </a>
                    </div>
                </div>
                
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative">
                        <Image
                            src="/images/hero.jpg"
                            alt="hero"
                            className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;