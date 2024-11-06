"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView, useAnimation } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Restaurant Management System",
    description: "Enterprise-grade restaurant management platform featuring real-time order processing, inventory tracking, and advanced analytics dashboard for data-driven decision making.",
    image: "/images/projects/1.png",
    tag: ["All", "Enterprise"],
    gitUrl: "https://github.com/miccx-24/RESTAURANT",
    previewUrl: "https://restaurant-sairos.vercel.app",
    technologies: ["React + Vite", "Node.js", "MongoDB", "RESTful API"]
  },
  {
    id: 2,
    title: "Mac-Fi Network Solutions",
    description: "Secure WiFi service management platform with integrated authentication system, automated billing, and real-time network monitoring capabilities.",
    image: "/images/projects/2.png",
    tag: ["All", "Enterprise"],
    gitUrl: "https://github.com/miccx-24/mac-fi.git",
    previewUrl: "https://mac-wifi.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "JWT Authentication", "Payment Gateway Integration"]
  },
  {
    id: 3,
    title: "E-commerce Website",
    description: "A fully functional e-commerce website with a shopping cart, checkout process, and product management.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/miccx-24/stokoloko.git",
    previewUrl: "https://stokoloko.vercel.app/",
    technologies: ["React", "Tailwind CSS", "React Router","Vite","Framer Motion"]
  },
  {
    id: 4,
    title: "NextJs Portfolio Website",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/miccx-24/my-personal-portfolio.git",
    previewUrl: "https://my-personal-portfolio-ruddy.vercel.app/",
    technologies: ["React", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 5,
    title: "Transportation Management System",
    description: "A system for managing transportation services, including booking, scheduling, and tracking.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/miccx-24/online-bus-ticket.git",
    previewUrl: "https://mac-sairos-online-bus.vercel.app/",
    technologies: ["React", "Node.js", "MongoDB","Framer Motion","Tailwind CSS","React Router","Vite"]
  },
  {
    id: 6,
    title: "Boarding House Management System",
    description: "A system for managing boarding house services, including booking, scheduling, and tracking.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/miccx-24/boarding_house.git",
    previewUrl: "https://boarding-house-ruddy.vercel.app/",
    technologies: ["React", "Node.js", "MongoDB","Framer Motion","Tailwind CSS","React Router","Vite"]
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handleTagChange = (newTag) => {
    setTag(newTag);
    controls.start("visible"); // Restart animations when tag changes
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.2
      }

    }

  };

  return (
    <section id="projects" className="py-28 px-4 bg-gradient-to-b from-[#121212] via-[#151515] to-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="flex flex-col items-center gap-6 mb-24"
        >
          <div className="relative group">
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent pb-2 group-hover:scale-105 transition-transform duration-300">
              Professional Portfolio
            </h2>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full transform origin-left transition-transform duration-300 group-hover:scale-x-110"></div>
          </div>
          <p className="text-gray-300 text-xl text-center max-w-3xl mt-8 leading-relaxed font-light">
            Showcasing enterprise-level solutions and innovative applications that demonstrate expertise in modern web development, scalable architecture, and user-centric design.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-6 py-8"
        >
          {["All", "Enterprise", "Web", "Mobile"].map((tagName) => (
            <ProjectTag
              key={tagName}
              onClick={handleTagChange}
              name={tagName}
              isSelected={tag === tagName}
            />
          ))}
        </motion.div>

        <motion.ul 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-12"
        >
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`transform transition-all duration-500 ${
                hoveredIndex === index 
                  ? 'scale-[1.03] z-10 shadow-2xl shadow-blue-500/10' 
                  : 'scale-100 z-0'
              }`}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                technologies={project.technologies}
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default ProjectsSection;