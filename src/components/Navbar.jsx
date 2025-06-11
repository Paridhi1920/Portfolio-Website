import React from 'react';
import { motion } from 'framer-motion';

const Navbar = ({ theme, setTheme }) => {
 
  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white dark:bg-primary shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-xl font-bold text-primary  dark:text-white ">
          Paridhi Jain
        </h1>

        <div className="flex items-center space-x-4">
          <a href="#home" className="hover:text-accent text-gray-700 dark:text-gray-200">
            Home
          </a>
          <a href="#about" className="hover:text-accent text-gray-700 dark:text-gray-200">
            About
          </a>
          <a href="#projects" className="hover:text-accent text-gray-700 dark:text-gray-200">
            Projects
          </a>
          <a href="#skills" className="hover:text-accent text-gray-700 dark:text-gray-200">
            Skills
          </a>
          <a href="#contact" className="hover:text-accent text-gray-700 dark:text-gray-200">
            Contact
          </a>

          {/* <button
            onClick={toggleTheme}
            className="text-xl text-gray-700 dark:text-gray-200 hover:text-accent transition"
          >
            {theme === 'dark' ? <FaSun /> : <FaMoon />}
          </button> */}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
