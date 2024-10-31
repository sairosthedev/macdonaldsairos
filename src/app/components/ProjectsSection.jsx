"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView, useAnimation } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Restaurant Management System",
    description: "A comprehensive platform for restaurant operations, featuring real-time ordering, inventory management, and analytics dashboard.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/miccx-24/web-tec.git",
    previewUrl: "/",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Artistry Portfolio",
    description: "A minimalist photography portfolio showcasing creative work with dynamic galleries and smooth transitions.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["Next.js", "Tailwind", "Framer Motion"]
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 4,
    title: "NextJs Portfolio Website",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
    technologies: ["React", "Node.js", "MongoDB"]
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
        staggerChildren: 0.2
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
        duration: 0.8
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center gap-4 mb-16"
        >
          <div className="relative">
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent pb-2">
              Featured Projects
            </h2>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-full"></div>
          </div>
          <p className="text-gray-400 text-xl text-center max-w-2xl mt-6">
            Explore my latest work and creative endeavors that showcase my expertise in web development and design.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center items-center gap-3 py-6"
        >
          {["All", "Web", "Mobile"].map((tagName) => (
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`transform transition-all duration-300 ${
                hoveredIndex === index ? 'scale-105 z-10' : 'scale-100 z-0'
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