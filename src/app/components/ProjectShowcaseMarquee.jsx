"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projectsData } from "../data/projects";

const ProjectShowcaseMarquee = () => {
    // Select top projects to showcase
    const featuredProjects = projectsData.slice(0, 8);
    const duplicatedProjects = [...featuredProjects, ...featuredProjects];

    return (
        <section className="w-full py-8 border-y border-slate-800/50 bg-slate-950/30 backdrop-blur-sm overflow-hidden">
            <div className="container mx-auto px-4 mb-4 text-center">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
                    Recent Deliveries
                </p>
            </div>

            <div className="flex relative overflow-hidden">
                <div className="absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

                <motion.div
                    className="flex gap-8 items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 30,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {duplicatedProjects.map((project, index) => (
                        <Link
                            key={`${project.id}-${index}`}
                            href={project.previewUrl}
                            target="_blank"
                            className="group relative flex-shrink-0 w-64 h-36 rounded-xl overflow-hidden border border-slate-800/50 hover:border-primary-500/50 transition-colors"
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent flex items-end p-4">
                                <span className="text-sm font-medium text-white truncate w-full">{project.title}</span>
                            </div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectShowcaseMarquee;
