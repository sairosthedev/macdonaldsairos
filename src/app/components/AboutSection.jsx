"use client"
import React, { useTransition, useState, useEffect } from "react";
import TabButton from "./TabButton";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const MatrixRain = () => {
  const characters = ['0', '1', '>', '<', '/', '*', '&', '$', '#', '@'];
  return (
    <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-green-500 text-xs font-mono"
          initial={{ y: -100, x: `${i * 10}%` }}
          animate={{ y: "100vh" }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.2
          }}
        >
          {characters[i]}
        </motion.div>
      ))}
    </div>
  );
};

const TypeWriter = ({ text, className }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return <span className={className}>{displayText}</span>;
};

const CodeBlock = () => {
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const codeLines = [
    "class Programmer {",
    "  constructor() {",
    "    this.name = 'Macdonald';",
    "    this.role = 'Full Stack';",
    "    this.level = 'Pro Gamer';",
    "  }",
    "  code() {",
    "    return '💻 Coding...';",
    "  }",
    "  debug() {",
    "    return '🔍 Debugging...';",
    "  }",
    "  deploy() {",
    "    return '🚀 Deploying...';",
    "  }",
    "  game() {",
    "    return '🎮 Gaming...';",
    "  }",
    "}"
  ];

  useEffect(() => {
    if (activeLine < codeLines.length) {
      const timeout = setTimeout(() => {
        setActiveLine(prev => prev + 1);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [activeLine]);

  return (
    <div className="w-full h-full bg-[#1E1E1E] rounded-lg p-4 font-mono text-sm overflow-hidden relative">
      <MatrixRain />
      {codeLines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ 
            opacity: index <= activeLine ? 1 : 0,
            x: index <= activeLine ? 0 : -20
          }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2 relative"
        >
          <span className="text-gray-500 min-w-[2ch]">{(index + 1).toString().padStart(2, '0')}</span>
          <motion.div
            className="flex-1"
            whileHover={{ scale: 1.01, x: 5 }}
          >
            <span className={`text-purple-400 ${index === activeLine && showCursor ? 'border-r-2 border-white' : ''}`}>
              {index <= activeLine ? line : ''}
            </span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

const AboutSection = ({ playSound }) => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const [activeEmoji, setActiveEmoji] = useState(null);
  const [showBonus, setShowBonus] = useState(false);

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
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <motion.div
            className="relative bg-[#1E1E1E] rounded-lg p-4 overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex flex-col space-y-4">
              {/* Animated Terminal Header */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-red-500"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-yellow-500"
                    whileHover={{ scale: 1.2 }}
                  />
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-green-500"
                    whileHover={{ scale: 1.2 }}
                  />
                  <TypeWriter 
                    text="programmer.js" 
                    className="text-gray-400 text-sm ml-2"
                  />
                </div>
                <motion.button
                  onClick={() => setShowBonus(!showBonus)}
                  className="text-gray-400 hover:text-purple-400 text-sm"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {showBonus ? '🎮 Game Mode' : '👨‍💻 Code Mode'}
                </motion.button>
              </div>
              
              {/* Code Animation */}
              <CodeBlock />

              {/* Animated Icons */}
              <div className="flex justify-center space-x-4">
                {['💻', '🚀', '⚡', '🔍', '🎮', '🏆'].map((emoji, index) => (
                  <motion.span
                    key={index}
                    initial={{ y: 0 }}
                    animate={{ 
                      y: [-5, 5, -5],
                      scale: activeEmoji === emoji ? 1.2 : 1,
                      rotate: activeEmoji === emoji ? [0, -10, 10, 0] : 0
                    }}
                    transition={{
                      y: { duration: 2, repeat: Infinity },
                      scale: { duration: 0.2 },
                      rotate: { duration: 0.2 }
                    }}
                    onHoverStart={() => setActiveEmoji(emoji)}
                    onHoverEnd={() => setActiveEmoji(null)}
                    className="text-2xl cursor-pointer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {emoji}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-4">About Me</h2>  
          <p className="text-base lg:text-lg text-gray-300 leading-7">
            I am a full stack web developer who loves building interactive and responsive web applications. My expertise includes JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a fast learner, always eager to broaden my knowledge and skills. As a team player, I thrive on collaborating with others to create outstanding applications.
          </p>
          
          <Link 
            href="/CV.pdf"
            target="_blank"
            className="w-fit px-6 py-3 mt-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold transition-all hover:scale-105"
          >
            Download CV
          </Link>

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