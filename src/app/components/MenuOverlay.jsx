import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const MenuOverlay = ({ links }) => {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        staggerChildren: 0.1
      }
    },
    exit: { opacity: 0, scale: 0.95 }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl flex items-center justify-center"
    >
      <div className="flex flex-col items-center space-y-6">
        {links.map((link, index) => (
          <motion.div key={index} variants={itemVariants}>
            <Link
              href={link.path}
              className="text-2xl font-bold text-slate-300 hover:text-white transition-colors tracking-tight font-heading"
            >
              {link.title}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MenuOverlay;