import Link from "next/link";
import { motion } from "framer-motion";

const NavLink = ({ href, title, icon, isActive, isHovered }) => {
  return (
    <Link
      href={href}
      className={`relative flex items-center px-4 py-2 text-sm font-medium rounded-full
        transition-all duration-200 ease-in-out
        ${isActive 
          ? 'text-white bg-white/10' 
          : 'text-[#ADB7BE] hover:text-white'
        }
        ${isHovered ? 'bg-white/5' : ''}
      `}
    >
      <span className="relative z-10 flex items-center space-x-2">
        <span className="text-base">{icon}</span>
        <span>{title}</span>
      </span>
      
      {isHovered && (
        <motion.span
          className="absolute inset-0 rounded-full bg-white/5"
          layoutId="hoverBackground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
      
      {isActive && (
        <motion.span
          className="absolute right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-white"
          layoutId="activeIndicator"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
};

export default NavLink;