"use client"
import React, { useTransition, useState } from "react";
import TabButton from "./TabButton";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  SiJavascript, SiReact, SiNodedotjs, SiNextdotjs, SiCsharp, SiPython,
  SiHtml5, SiCss3, SiExpress, SiPostgresql, SiMongodb, SiGit, SiDocker,
  SiLinux, SiTypescript
} from "react-icons/si";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const skills = [
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "React", icon: SiReact },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "MongoDB", icon: SiMongodb },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Docker", icon: SiDocker },
    { name: "Git", icon: SiGit },
  ];

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.li
              key={index}
              className="flex items-center gap-3 bg-slate-800/30 p-4 rounded-xl border border-slate-700/50 hover:border-primary-500/30 transition-all"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <skill.icon className="text-2xl text-slate-300" />
              <span className="text-slate-200 font-medium">{skill.name}</span>
            </motion.li>
          ))}
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="space-y-4">
          <li className="flex flex-col p-6 rounded-xl bg-slate-800/30 border border-slate-700/50">
            <h3 className="text-xl font-bold text-white mb-2">BSc Data Science and Informatics</h3>
            <p className="text-primary-400 font-medium mb-1">University of Zimbabwe</p>
            <p className="text-slate-400 text-sm">2022 - 2026</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Data Analysis', 'Machine Learning', 'Statistics'].map((tag, i) => (
                <span key={i} className="px-3 py-1 bg-slate-900 rounded-full text-xs text-slate-300 border border-slate-700">{tag}</span>
              ))}
            </div>
          </li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="grid md:grid-cols-2 gap-4">
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
            <li key={index} className="p-4 rounded-xl bg-slate-800/30 border border-slate-700/50 flex items-center gap-3 hover:bg-slate-800/50 transition-colors">
              <div className="w-2 h-2 rounded-full bg-secondary-500 flex-shrink-0"></div>
              <span className="text-slate-200 text-sm">{cert}</span>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <section className="text-white py-12" id="about">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold font-heading text-white">
            About Me
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            I am a dedicated Full Stack Developer with a passion for building robust,
            scalable web applications. My journey involves deep dives into modern architectures
            and creating intuitive user experiences. I thrive in collaborative environments
            and am constantly pushing the boundaries of what's possible on the web.
          </p>

          <div className="flex gap-4 pt-4">
            <Link
              href="/Macdonald Sairos-Resume.pdf"
              target="_blank"
              className="px-6 py-3 rounded-full bg-primary-600 hover:bg-primary-500 text-white font-semibold transition-all shadow-lg shadow-primary-500/20"
            >
              Download Resume
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="p-4 bg-slate-800/20 rounded-lg border border-slate-700/50">
              <div className="text-3xl font-bold text-primary-400 mb-1">20+</div>
              <div className="text-sm text-slate-400">Projects Delivered</div>
            </div>
            <div className="p-4 bg-slate-800/20 rounded-lg border border-slate-700/50">
              <div className="text-3xl font-bold text-secondary-400 mb-1">3+</div>
              <div className="text-sm text-slate-400">Years Experience</div>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-0">
          <div className="flex flex-wrap gap-4 mb-8 border-b border-slate-800/50 pb-2">
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
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
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