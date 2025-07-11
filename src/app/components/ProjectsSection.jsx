"use client";
import React, { useState, useRef, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView, useAnimation } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Candy Bucket E-commerce",
    description: "A fully functional e-commerce platform with shopping cart, product management, and secure checkout process.",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/miccx-24/stokoloko.git",
    previewUrl: "https://candybucket.vercel.app/",
    technologies: ["React", "Tailwind CSS", "React Router", "Framer Motion"]
  },
  {
    id: 2,
    title: "Mac-Fi Network Management",
    description: "Advanced WiFi service management platform with integrated authentication, automated billing, and network monitoring capabilities.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8",
    tag: ["All", "Enterprise"],
    gitUrl: "https://github.com/miccx-24/mac-fi.git",
    previewUrl: "https://mac-wifi.vercel.app/",
    technologies: ["Next.js", "Tailwind CSS", "JWT Auth", "Payment Gateway"]
  },
  {
    id: 3,
    title: "Online Bus Ticketing",
    description: "Digital bus ticket booking platform with route management, seat selection, and automated booking confirmation.",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/miccx-24/online-bus-ticket.git",
    previewUrl: "https://mac-sairos-online-bus.vercel.app/",
    technologies: ["React", "Node.js", "MongoDB", "Framer Motion"]
  },
  {
    id: 4,
    title: "Pamusha Student Boarding House System",
    description: "Comprehensive boarding house management system with room booking, student management, and billing features.",
    image: "/images/projects/pamusha.png",  
    tag: ["All", "Enterprise", "Web"],
    gitUrl: "https://github.com/sairosthedev/student-accommodation.git",
    previewUrl: "https://student-accommodation-five.vercel.app",
    technologies: ["React", "Vite","Node.js", "MongoDB", "Tailwind CSS","shadcn","Framer Motion","chakra-ui","carousal"]
  },
  {
    id: 5,
    title: "Restaurant Management",
    description: "Full-stack restaurant management system with order processing, inventory tracking, and kitchen management features.",
    image: "/images/projects/1.png",
    tag: ["All", "Enterprise", "Web"],
    gitUrl: "https://github.com/miccx-24/RESTAURANT",
    previewUrl: "https://restaurant-sairos.vercel.app",
    technologies: ["React + Vite", "Node.js", "MongoDB", "RESTful API"]
  },
  {
    id: 6,
    title: "Miccs Technologies",
    description: "Professional web development company website showcasing services, portfolio, and client testimonials. Built with modern web technologies and responsive design.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/miccx-24/web-tec",
    previewUrl: "https://miccs-technologies.vercel.app/",
    technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"]
  },
  {
    id: 7,
    title: "Truck Logistics System",
    description: "next-generation logistics management system with real-time tracking, route optimization, and automated dispatching capabilities.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sairosthedev/logistics.git",
    previewUrl: "https://www.truckstophub.com",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB"]
  },
  {
    id:7,
    title: "Alamait Property Management System",
    description: "Alamait Property Management System is a comprehensive property management system that allows you to manage your properties and tenants.",
    image: "/images/alamait.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sairosthedev/alamait.git",
    previewUrl: "https://alamait.vercel.app/",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB","shadcn","Framer Motion","chakra-ui","carousal"]
  },
  {
    id: 8,
    title: "Mbare Mkambo Market Management System",
    description: "Mbare Mkambo Market Management System is a comprehensive market management system that allows you to manage your market and vendors.",
    image: "/images/mbare.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sairosthedev/mbare.git",
    previewUrl: "http://20.116.222.250/",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB","shadcn","Framer Motion","chakra-ui","carousal"]
  },
  {
    id: 9,
    title:"Starlink Portal",
    description: "Starlink Portal is a comprehensive portal that allows you to manage starlink orders and customers.",
    image: "/images/aura.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sairosthedev/starlink.git",
    previewUrl: "https://starlink.auragrp.com/",
    technologies: ["JavaScript", "React", "Node.js", "MongoDB","shadcn","Framer Motion","chakra-ui","carousal"]
  },
  {
    id: 10,
    title: "Drought Monitoring System",
    description: "A comprehensive drought monitoring application built with Next.js and Neon Database for tracking drought conditions using satellite data, rainfall data, and drought indices.",
    image: "/images/drought.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sairosthedev/drought.git",
    previewUrl: "https://v0-nasa-api-drought-app.vercel.app/",
    technologies: ["Typescript", "React", "Node.js", "MongoDB","shadcn","Framer Motion","chakra-ui","carousal"]
  }
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
    <section id="projects" className="py-20 px-4 bg-[#111111]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start gap-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Recent Projects
          </h2>
          <div className="h-1 w-20 bg-blue-500 rounded-full mt-2"></div>
          <p className="text-gray-400 text-lg max-w-2xl mt-4 leading-relaxed">
            A collection of projects showcasing my expertise in software development, 
            from enterprise solutions to innovative web applications.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {["All", "Enterprise", "Web"].map((tagName) => (
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
              className={`transform transition-all duration-300 ${
                hoveredIndex === index 
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