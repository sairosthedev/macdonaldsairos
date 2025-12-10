"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Projects",
    value: "20",
    postfix: "+",
    description: "Delivered Solutions"
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100",
    description: "Happy Users"
  },
  {
    metric: "Certificates",
    value: "17",
    description: "Professional Certifications"
  },
  {
    metric: "Years",
    value: "3",
    description: "Years of Experience"
  },
];

const AchievementsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className={`
        glass-card rounded-2xl
        py-8 px-8 sm:px-16 
        flex flex-col sm:flex-row items-center justify-between
        transform transition-all duration-500 ease-in-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}>
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0 group"
            >
              <h2 className="text-white text-4xl font-bold font-heading flex flex-row items-center
                           transform transition-all duration-300 group-hover:scale-110 group-hover:text-primary-400">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold font-heading group-hover:text-primary-400 transition-colors"
                  configs={[
                    { mass: 1, tension: 220, friction: 40 },
                    { mass: 1, tension: 180, friction: 40 },
                    { mass: 1, tension: 280, friction: 40 },
                  ]}
                />
                {achievement.postfix}
              </h2>
              <p className="text-slate-400 text-base mt-2 text-center font-medium
                          transition-colors duration-300 group-hover:text-white">
                {achievement.metric}
              </p>
              <p className="text-primary-300 text-xs mt-1 opacity-0 group-hover:opacity-100
                          transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                {achievement.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;