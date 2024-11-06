"use client"
import React, { useTransition, useState } from "react";
import Image from 'next/image';
import TabButton from "./TabButton";
import { motion, AnimatePresence } from "framer-motion";

const AboutSection = ({ playSound }) => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
      if (playSound) playSound();
    });
  };

  const skills = [
    { name: "Node.js", level: 90, icon: "🚀" },
    { name: "Express", level: 85, icon: "⚡" },
    { name: "MySQL", level: 80, icon: "🗄️" },
    { name: "Nextjs", level: 85, icon: "⚛️" },
    { name: "JavaScript", level: 95, icon: "💻" },
    { name: "React", level: 90, icon: "📱" },
  ];

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="grid grid-cols-1 gap-6 text-gray-300">
          {skills.map((skill, index) => (
            <motion.li 
              key={index} 
              className="flex flex-col gap-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{skill.icon}</span>
                  <span className="text-white">{skill.name}</span>
                </div>
                <span className="text-purple-500 font-semibold">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                />
              </div>
            </motion.li>
          ))}
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <motion.ul 
          className="space-y-4 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.li 
            className="flex flex-col p-4 rounded-lg border border-gray-800 hover:bg-gray-800/50 transition-all"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-white font-semibold text-lg">Data Science and Informatics</span>
            <span className="text-purple-500 flex items-center gap-2">
              <span>🎓</span> University of Zimbabwe, Harare
            </span>
            <span className="text-sm mt-2">2022 - 2026</span>
          </motion.li>
        </motion.ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <motion.ul 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300"
        >
          {[
            "Cisco Network Academy Python Essentials 1",
            "Cisco Network Academy JavaScript Essentials 1",
            "Cisco Network Academy Introduction To Data Science",
            "Cisco Network Academy Cyber Threat Management",
            "Cisco Network Academy Data Analytics Essentials",
            "Cisco Network Academy Introduction To Cyber Security",
            "Cisco Network Academy Introduction To Internet Of Things",
            "Cisco Network Academy Ethical Hacking",
            "Great Learning Academy Introduction to Analytics",
            "Great Learning Academy Python for Data Science",
            "Great Learning Academy Introduction to Artificial Intelligence",
            "Great Learning Academy Introduction to Exploratory Data Analysis with Excel",
            "Great Learning Academy Machine Learning with Python",
            "Great Learning Academy Data Visualization with PowerBi",
          ].map((cert, index) => (
            <motion.li
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-800/50 hover:scale-105 transition-all border border-gray-800"
            >
              <span className="text-purple-500">🏆</span>
              {cert}
            </motion.li>
          ))}
        </motion.ul>
      ),
    },
  ];

  return (
    <section className='text-white' id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image 
              src="/images/hero.png" 
              width={500} 
              height={500}
              className="relative rounded-full object-cover"
              alt="Profile picture"
            />
          </motion.div>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-4">About Me</h2>  
          <p className="text-base lg:text-lg text-gray-300 leading-7">
            I am a full stack web developer who loves building interactive and responsive web applications. My expertise includes JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a fast learner, always eager to broaden my knowledge and skills. As a team player, I thrive on collaborating with others to create outstanding applications.
          </p>
          
          <button 
            onClick={() => window.open('/CV.pdf')}
            className="w-fit px-6 py-3 mt-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold transition-all hover:scale-105"
          >
            Download CV
          </button>

          <div className="flex flex-row justify-start mt-8 gap-2">
            {["skills", "education", "certifications"].map((tabId) => (
              <TabButton
                key={tabId}
                selectTab={() => handleTabChange(tabId)}
                active={tab === tabId}
              >
                {tabId.charAt(0).toUpperCase() + tabId.slice(1)}
              </TabButton>
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={tab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-8"
            >
              {TAB_DATA.find((t) => t.id === tab).content}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;