"use client";
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    {
        title: "About",
        path: "#about",
        icon: "🎯"
    },
    {
        title: "Projects",
        path: "#projects",
        icon: "💼"
    },
    {
        title: "Contact",
        path: "#contact",
        icon: "📧"
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [isHovered, setIsHovered] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = navLinks.map(link => link.path.slice(1));
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            setActiveSection(currentSection || "");
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed mx-auto top-0 left-0 right-0 z-20 transition-all duration-300 ease-in-out
                ${scrolled 
                    ? 'bg-[rgba(0,0,0,0.85)] backdrop-blur-md border-b border-[#33353F] shadow-lg' 
                    : 'bg-transparent'}`}
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <Link 
                        href={'/'} 
                        className='relative group text-2xl md:text-5xl text-white font-semibold'
                    >
                        <div className="relative flex items-center space-x-3">
                            <div className="relative">
                                <Image
                                    src="/images/logo.jpg"
                                    alt="Logo"
                                    width={45}
                                    height={45}
                                    className="rounded-full shadow-lg transition-all duration-300 group-hover:scale-110"
                                />
                                <motion.div 
                                    className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-lg"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        rotate: [0, 90, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                    }}
                                />
                            </div>
                            <span className="hidden sm:block text-lg font-medium text-white/90 group-hover:text-white transition-colors">
                                My_Portfolio Web
                            </span>
                        </div>
                    </Link>
                    
                    <motion.div 
                        className="mobile-menu block md:hidden"
                        whileTap={{ scale: 0.95 }}
                    >
                        <button
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            className="flex items-center px-3.5 py-2.5 rounded-full bg-white/10 backdrop-blur-sm
                                border border-white/20 text-slate-200 hover:text-white hover:border-white/40
                                transition-all duration-200 ease-in-out hover:bg-white/20
                                hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                            aria-label="Toggle menu"
                        >
                            <motion.div
                                animate={{ rotate: navbarOpen ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {!navbarOpen ? (
                                    <Bars3Icon className="h-5 w-5" />
                                ) : (
                                    <XMarkIcon className="h-5 w-5" />
                                )}
                            </motion.div>
                        </button>
                    </motion.div>

                    <div className='menu hidden md:block md:w-auto' id="navbar">
                        <ul className="flex items-center space-x-8">
                            {navLinks.map((link, index) => (
                                <motion.li 
                                    key={index} 
                                    className="relative group py-2"
                                    onHoverStart={() => setIsHovered(index)}
                                    onHoverEnd={() => setIsHovered(null)}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                >
                                    <NavLink 
                                        href={link.path} 
                                        title={link.title} 
                                        icon={link.icon}
                                        isActive={activeSection === link.path.slice(1)}
                                        isHovered={isHovered === index}
                                    />
                                    <motion.span 
                                        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                                        initial={{ width: "0%" }}
                                        animate={{ width: isHovered === index ? "100%" : "0%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                    {activeSection === link.path.slice(1) && (
                                        <motion.span 
                                            className="absolute -bottom-1 left-0 h-0.5 w-full bg-white"
                                            layoutId="activeSection"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {navbarOpen && (
                    <motion.div 
                        className="md:hidden backdrop-blur-lg bg-black/70"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <MenuOverlay links={navLinks} />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    )
}

export default Navbar