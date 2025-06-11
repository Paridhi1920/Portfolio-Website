import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white dark:bg-primary transition"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-extrabold text-primary dark:text-white"
      >
        Hey, I'm <span className="text-accent">Paridhi Jain</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl"
      >
        I'm a passionate Data Scientist & ML Enthusiast crafting cool apps and elegant designs.
      </motion.p>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="flex space-x-6 mt-8 text-2xl"
      >
        <a
          href="https://github.com/Paridhi1920"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-sky-500 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/paridhi-jain309"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-sky-500 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="mailto:paridhij30@gmail.com"
          className="text-accent hover:text-sky-500 transition"
        >
          <FaEnvelope />
        </a>
      </motion.div>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-col md:flex-row gap-4">
        <motion.a
          href="#projects"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="inline-block bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-500 transition"
        >
          See My Work ↓
        </motion.a>
        <motion.a
          href="/ParidhiJain_Resume.pdf"
          download
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="inline-block bg-accent text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-500 transition"
        >
          Download Resume
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
