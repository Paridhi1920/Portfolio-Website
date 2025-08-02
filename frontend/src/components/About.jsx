import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaLaptopCode, FaDatabase } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-10 bg-gray-100 dark:bg-primary transition"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-primary dark:text-white mb-4"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex justify-center gap-4 mb-10 text-accent text-xl font-semibold"
        >
          <span className="flex items-center gap-2">
            <FaBrain /> AI/ML
          </span>
          <span className="flex items-center gap-2">
            <FaDatabase /> Data Science
          </span>
          <span className="flex items-center gap-2">
            <FaLaptopCode /> Web Dev
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-700 dark:text-gray-300 leading-8"
        >
          Hey, I'm <span className="text-accent font-semibold">Paridhi Jain</span> —
          a passionate tech explorer who loves building seamless digital experiences. From diving deep into
          <span className="text-accent font-semibold"> Machine Learning</span> and
          <span className="text-accent font-semibold"> Data Science</span> to crafting elegant interfaces with
          <span className="text-accent font-semibold"> React</span> and analyzing data with
          <span className="text-accent font-semibold"> Python</span> and
          <span className="text-accent font-semibold"> SQL</span>, I thrive on solving real-world problems with creativity and logic.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-8"
        >
          I’m passionate about creating intuitive UI and intelligent logic. Whether it's developing smart systems or crafting interactive experiences, I’m always on the lookout for projects that make an impact. Outside tech, you’ll find me exploring trends or sketching ideas for my next build.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
