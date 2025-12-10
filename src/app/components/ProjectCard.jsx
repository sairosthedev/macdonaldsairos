import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, gitUrl, previewUrl, technologies, image }) => {
  return (
    <motion.div
      className="group glass-card rounded-xl overflow-hidden flex flex-col h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />
      </div>

      <div className="p-6 flex flex-col flex-grow relative">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold font-heading text-slate-100 group-hover:text-primary-400 transition-colors duration-300">
            {title}
          </h3>
          <div className="flex gap-3">
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-800/50 hover:bg-primary-500/20 text-slate-400 hover:text-white transition-all duration-300 border border-slate-700 hover:border-primary-500"
            >
              <CodeBracketIcon className="h-5 w-5" />
            </Link>
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-slate-800/50 hover:bg-primary-500/20 text-slate-400 hover:text-white transition-all duration-300 border border-slate-700 hover:border-primary-500"
            >
              <EyeIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-slate-800 text-slate-300 border border-slate-700/50 group-hover:border-primary-500/30 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;