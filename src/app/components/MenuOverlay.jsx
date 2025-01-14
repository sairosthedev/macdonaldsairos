import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const MenuOverlay = ({ links, socialLinks }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    show: { x: 0, opacity: 1 }
  };

  return (
    <motion.div
      className="p-6"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <div className="space-y-4 mb-8">
        {links.map((link, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="border-b border-gray-800 last:border-none"
          >
            <Link
              href={link.path}
              className="block py-3 text-gray-300 hover:text-blue-500 transition-colors duration-300 text-base font-medium"
            >
              {link.title}
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Social Links */}
      <motion.div
        variants={itemVariants}
        className="flex justify-center space-x-6 pt-4 border-t border-gray-800"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-white/10 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src={link.icon}
              alt={link.title}
              width={24}
              height={24}
              className="filter invert"
            />
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MenuOverlay;