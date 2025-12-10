import React from "react";
import { motion } from "framer-motion";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-slate-400";

  return (
    <button onClick={selectTab} className="relative px-4 py-2">
      <p className={`font-semibold hover:text-white transition-colors ${buttonClasses}`}>
        {children}
      </p>
      {active && (
        <motion.div
          layoutId="activeTab"
          className="absolute bottom-0 left-0 right-0 h-1 bg-primary-500 rounded-t-full"
        />
      )}
    </button>
  );
};

export default TabButton;