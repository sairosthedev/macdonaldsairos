"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView, useAnimation } from "framer-motion";
import ProjectStructuredData from "./ProjectStructuredData";

import { projectsData } from "../data/projects";

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
    controls.start("visible");
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-900/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      <ProjectStructuredData projects={projectsData} />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center text-center gap-4 mb-16"
        >
          <div className="inline-block px-3 py-1 rounded-full bg-secondary-500/10 border border-secondary-500/20 text-secondary-400 text-xs font-semibold uppercase tracking-wider">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mt-4 leading-relaxed">
            A selection of my recent work in software development,
            showcasing enterprise solutions and innovative web applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {["All", "Enterprise", "Web", "AI", "Analytics", "Finance", "Healthcare", "Lifestyle"].map((tagName) => (
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`transform transition-all duration-300 ${hoveredIndex === index
                ? 'scale-[1.02] z-10'
                : 'scale-100 z-0'
                }`}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                technologies={project.technologies}
                image={project.image}
              />
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default ProjectsSection;