"use client"
import React, { useTransition, useState } from "react";
import Image from 'next/image';
import TabButton from "./TabButton";

const AboutSection = ({ playSound }) => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
      if (playSound) playSound();
    });
  };

  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="grid grid-cols-2 gap-4 text-gray-300">
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Node.js
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Express
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            MySQL
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            Nextjs
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            JavaScript
          </li>
          <li className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            React
          </li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="space-y-4 text-gray-300">
          <li className="flex flex-col">
            <span className="text-white font-semibold">Data Science and Informatics</span>
            <span className="text-purple-500">University of Zimbabwe, Harare</span>
            <span className="text-sm">2022 - 2026</span>
          </li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
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
            <li key={index} className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-800 transition-all">
              <span className="text-purple-500">🏆</span>
              {cert}
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <section className='text-white' id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <Image 
            src="/images/hero.png" 
            width={500} 
            height={500}
            className="relative rounded-full object-cover hover:scale-105 transition duration-300 ease-in-out"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-4">About Me</h2>  
          <p className="text-base lg:text-lg text-gray-300 leading-7">
            I am a full stack web developer who loves building interactive and responsive web applications. My expertise includes JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a fast learner, always eager to broaden my knowledge and skills. As a team player, I thrive on collaborating with others to create outstanding applications.
          </p>
          <div className="flex flex-row justify-start mt-8 gap-2">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;