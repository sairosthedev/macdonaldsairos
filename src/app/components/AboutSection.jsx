"use client"
import React, { useTransition, useState, useEffect } from "react";
import TabButton from "./TabButton";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiNextdotjs, 
  SiCsharp, 
  SiPython, 
  SiHtml5, 
  SiCss3, 
  SiExpress, 
  SiPostgresql, 
  SiMongodb, 
  SiGit, 
  SiDocker, 
  SiLinux,
  SiTypescript
} from "react-icons/si";

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
    { name: "JavaScript", level: 95, icon: SiJavascript },
    { name: "TypeScript", level: 85, icon: SiTypescript },
    { name: "React", level: 90, icon: SiReact },
    { name: "Node.js", level: 90, icon: SiNodedotjs },
    { name: "Next.js", level: 85, icon: SiNextdotjs },
    { name: "C#", level: 70, icon: SiCsharp },
    { name: "Python", level: 80, icon: SiPython },
    { name: "HTML", level: 90, icon: SiHtml5 },
    { name: "CSS", level: 85, icon: SiCss3 },
    { name: "Express", level: 85, icon: SiExpress },
    { name: "PostgreSQL", level: 80, icon: SiPostgresql },
    { name: "MongoDB", level: 75, icon: SiMongodb },
    { name: "Git", level: 80, icon: SiGit },
    { name: "Docker", level: 75, icon: SiDocker },
    { name: "Linux", level: 55, icon: SiLinux },
  ];

  const renderSkillIcon = (skill) => {
    try {
      const IconComponent = skill.icon;
      return IconComponent ? <IconComponent className="text-xl text-white" /> : null;
    } catch (error) {
      return null;
    }
  };

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-gray-300">
          {skills.map((skill, index) => (
            <motion.li 
              key={index} 
              className="flex flex-col gap-2 bg-gray-800/50 p-3 rounded-lg hover:bg-gray-800/70 transition-all"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  {renderSkillIcon(skill)}
                  <span className="text-white text-sm font-medium">{skill.name}</span>
                </div>
                <span className="text-purple-400 text-sm font-semibold">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full bg-gray-700/50 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg"
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
            className="flex flex-col p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all border border-gray-700/50"
            whileHover={{ scale: 1.02, borderColor: 'rgba(147, 51, 234, 0.5)' }}
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">🎓</span>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                  Data Science and Informatics
                </h3>
                <p className="text-purple-400 mt-1 flex items-center gap-2 text-sm">
                  University of Zimbabwe, Harare
                </p>
                <p className="text-xs mt-1 text-gray-400">2022 - 2026</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {['Data Analysis', 'Machine Learning', 'Statistics', 'Programming'].map((skill, index) => (
                    <span key={index} className="px-2 py-0.5 text-xs bg-purple-500/10 text-purple-400 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.li>
        </motion.ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-300"
        >
          <div className="col-span-full mb-3">
            <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-1">
              Professional Certifications
            </h3>
            <p className="text-gray-400 text-sm">Continuous learning and skill development</p>
          </div>
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
            "Great Learning Academy ReactJs Tutorial",
            "Great Learning Academy Introduction to ExpressJS",
            "Great Learning Academy Business Intelligence Tutorial for Beginners",
          ].map((cert, index) => (
            <motion.div
              key={index}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-start gap-2 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-all border border-gray-700/50 group"
            >
              <span className="text-xl group-hover:scale-110 transition-transform">🏆</span>
              <div className="flex-1">
                <h4 className="text-white group-hover:text-purple-400 transition-colors text-sm">{cert}</h4>
                <p className="text-xs text-gray-400 mt-0.5">Verified Achievement</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      ),
    },
  ];

  return (
    <section className='text-white min-h-screen flex items-center py-8' id="about">
      <div className="w-full max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-6">
            About Me
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I am a full stack web developer who loves building interactive and responsive web applications. 
            My expertise includes JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. 
            I am a fast learner, always eager to broaden my knowledge and skills. As a team player, I thrive on collaborating with others to create outstanding applications.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8"
          >
            <Link 
              href="/CV.pdf"
              target="_blank"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold transition-all hover:scale-105 hover:shadow-lg"
            >
              Download CV
            </Link>
          </motion.div>
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { number: "20+", label: "Projects Completed", color: "purple" },
            { number: "3+", label: "Years Experience", color: "blue" },
            { number: "100%", label: "Client Satisfaction", color: "pink" },
            { number: "24/7", label: "Support Available", color: "green" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="text-center p-6 bg-gray-800/30 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 hover:scale-105"
            >
              <div className={`text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600`}>
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {["skills", "education", "certifications"].map((tabId) => (
            <TabButton
              key={tabId}
              selectTab={() => handleTabChange(tabId)}
              active={tab === tabId}
            >
              {tabId.charAt(0).toUpperCase() + tabId.slice(1)}
            </TabButton>
          ))}
        </motion.div>
        
        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={tab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900/30 p-6 rounded-xl backdrop-blur-sm"
          >
            {TAB_DATA.find((t) => t.id === tab).content}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AboutSection;