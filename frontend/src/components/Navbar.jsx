import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  const navLinks = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Projects", to: "projects" },
    { label: "Skills", to: "skills" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -50 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white dark:bg-primary shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary dark:text-white">Paridhi Jain</h1>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              className="cursor-pointer text-gray-700 dark:text-gray-200 hover:text-accent transition font-medium"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="text-xl text-gray-700 dark:text-gray-200 hover:text-accent transition"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleTheme} className="text-xl mr-4 text-gray-700 dark:text-gray-200">
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </button>
          <button onClick={toggleMenu} className="text-2xl text-gray-700 dark:text-gray-200">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-4 bg-white dark:bg-primary">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth={true}
              duration={500}
              onClick={toggleMenu}
              className="cursor-pointer text-gray-700 dark:text-gray-200 hover:text-accent transition font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
