import React from "react";
import { motion } from "framer-motion";

// Define the props interface
interface TabButtonProps {
  active: boolean; // Indicates if the tab is active
  selectTab: () => void; // Function to select the tab
  children: React.ReactNode; // Children can be any React node
}

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button
      onClick={selectTab}
      aria-pressed={active} // Accessibility improvement
      className="focus:outline-none focus:ring-2 focus:ring-[#60fdfb]" // Add focus styles
    >
      <span className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </span>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-[#60fdfb] mt-2 mr-3"
      />
    </button>
  );
};

export default TabButton;
