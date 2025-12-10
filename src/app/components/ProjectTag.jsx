import React from "react";
import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        px-5 py-2 text-sm font-medium rounded-full transition-all duration-300
        ${isSelected
          ? "bg-primary-600 text-white shadow-lg shadow-primary-500/25 ring-2 ring-primary-500 ring-offset-2 ring-offset-slate-950"
          : "bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700"
        }
      `}
      onClick={() => onClick(name)}
    >
      {name}
    </motion.button>
  );
};

export default ProjectTag;