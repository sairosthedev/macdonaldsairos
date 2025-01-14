import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, gitUrl, previewUrl, technologies, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="group bg-[#1a1a1a] rounded-xl overflow-hidden flex flex-col border border-gray-800 hover:border-purple-500/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <motion.h3 
            className="text-xl font-bold text-white/90 group-hover:text-purple-500 transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            {title}
          </motion.h3>
          <div className="flex gap-3">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href={gitUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-gray-700 hover:border-purple-500 flex items-center justify-center
                  group/link transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
              >
                <CodeBracketIcon className="h-5 w-5 text-gray-400 group-hover/link:text-purple-500 transition-colors duration-300" />
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href={previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-gray-700 hover:border-purple-500 flex items-center justify-center
                  group/link transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
              >
                <EyeIcon className="h-5 w-5 text-gray-400 group-hover/link:text-purple-500 transition-colors duration-300" />
              </Link>
            </motion.div>
          </div>
        </div>

        <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-800">
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className={`px-3 py-1 text-xs rounded-full transition-all duration-300
                ${isHovered 
                  ? 'bg-purple-500/10 text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.15)]' 
                  : 'bg-gray-800 text-gray-400'
                }
                hover:bg-purple-500/20 hover:scale-105`}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;