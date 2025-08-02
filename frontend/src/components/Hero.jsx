import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import heroImage from '../assets/hero.jfif';

const Hero = () => {
  const handleResumeDownload = async () => {
    try {
      const response = await fetch('https://portfolio-s9hg.onrender.com/download-resume');
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'ParidhiJain_Resume.pdf';
        a.click();
        window.URL.revokeObjectURL(url);
      } else {
        console.error('Resume download failed');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 md:px-20 bg-gradient-to-br from-[#0F172A] to-[#1E293B] text-white transition"
    >
      <div className="text-center md:text-left md:w-1/2 space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Hey, I'm <span className="text-sky-400">Paridhi Jain</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-gray-300 max-w-xl"
        >
          A passionate <span className="text-sky-400">Data Scientist</span> & ML Enthusiast, building elegant solutions with clean design and intelligent models.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center md:justify-start space-x-6 text-2xl"
        >
          <a href="https://github.com/Paridhi1920" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/paridhi-jain309" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400">
            <FaLinkedin />
          </a>
          <a href="mailto:paridhij30@gmail.com" className="hover:text-sky-400">
            <FaEnvelope />
          </a>
        </motion.div>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <motion.a
            href="#projects"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-sky-500 hover:bg-sky-400 text-white px-6 py-3 rounded-full font-semibold transition shadow-lg"
          >
            See My Work ↓
          </motion.a>
          <motion.button
            onClick={handleResumeDownload}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="bg-transparent border-2 border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white px-6 py-3 rounded-full font-semibold transition shadow-lg"
          >
            Download Resume
          </motion.button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-10 md:mt-0 md:w-1/2 flex justify-center"
      >
        <img
          src={heroImage}
          alt="Hero Illustration"
          className="w-full max-w-sm md:max-w-md drop-shadow-xl"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
