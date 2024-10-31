"use client";
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import NavLink from './NavLink'
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    {
        title: "About",
        path: "#about",
    },
    {
        title: "Projects",
        path: "#projects",
    },
    {
        title: "Contact",
        path: "#contact",
    }
]

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed mx-auto top-0 left-0 right-0 z-20 transition-all duration-300 ease-in-out
            ${scrolled ? 'bg-black bg-opacity-95 border-b border-[#33353F]' : 'bg-transparent'}`}>
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-6 py-3">
                <Link href={'/'} className='text-2xl md:text-5xl text-white font-semibold transition-transform hover:scale-105'>
                    <Image
                        src="/images/logo.jpg"
                        alt="Logo"
                        width={45}
                        height={45}
                        className="rounded-full shadow-lg"
                    />
                </Link>
                <div className="mobile-menu block md:hidden">
                    <button
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        className="flex items-center px-3 py-2 rounded-lg bg-opacity-20 bg-gray-800 backdrop-blur-sm
                            border border-slate-600 text-slate-200 hover:text-white hover:border-white
                            transition-all duration-200 ease-in-out hover:bg-opacity-30"
                    >
                        {!navbarOpen ? (
                            <Bars3Icon className="h-5 w-5" />
                        ) : (
                            <XMarkIcon className="h-5 w-5" />
                        )}
                    </button>
                </div>
                <div className='menu hidden md:block md:w-auto' id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-10 mt-0">
                        {
                            navLinks.map((link, index) => (
                                <li key={index} className="relative group">
                                    <NavLink href={link.path} title={link.title} />
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {navbarOpen && (
                <div className="transition-all duration-300 ease-in-out">
                    <MenuOverlay links={navLinks} />
                </div>
            )}
        </nav>
    )
}

export default Navbar