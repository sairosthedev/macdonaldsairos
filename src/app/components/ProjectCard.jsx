import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl, technologies }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="transform transition-all duration-500 hover:scale-105 group/card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden shadow-xl 
          before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-0 before:transition-opacity before:duration-500
          group-hover/card:before:opacity-10"
        style={{ 
          background: `url(${imgUrl})`, 
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
        
        {/* Icons Overlay */}
        <div className="overlay flex items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 opacity-0 group-hover/card:opacity-100 group-hover/card:bg-opacity-80 transition-all duration-500 z-20">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-4 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link 
              transform transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link 
              transform transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>

      <div className="text-white rounded-b-xl bg-[#181818] p-6 shadow-xl relative z-10
        transform transition-all duration-500 group-hover/card:shadow-purple-500/10">
        <h5 className="text-xl font-semibold mb-2 transition-all duration-300
          hover:text-purple-500 hover:translate-x-1">
          {title}
        </h5>
        <p className="text-[#ADB7BE] text-sm leading-relaxed transition-all duration-300
          group-hover/card:text-gray-300">
          {description}
        </p>
        {technologies && (
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className={`px-3 py-1 text-sm rounded-full transition-all duration-300
                  border border-purple-500/20
                  ${isHovered 
                    ? 'bg-purple-500/20 text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.2)]' 
                    : 'bg-purple-500/10 text-purple-500'
                  }
                  hover:bg-purple-500/30 hover:scale-105 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]`}
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;