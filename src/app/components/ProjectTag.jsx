import React from "react";
import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        px-6 py-3 text-xl cursor-pointer
        rounded-full border-2 transition-all duration-300
        ${
          isSelected 
            ? "text-white border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 shadow-lg shadow-purple-500/25"
            : "text-[#ADB7BE] border-[#ADB7BE] hover:border-purple-500 hover:text-purple-500"
        }
      `}
      onClick={() => onClick(name)}
    >
      <span className="relative z-10">
        {name}
      </span>
    </motion.button>
  );
};

export default ProjectTag;