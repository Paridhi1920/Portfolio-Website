import React from "react";
import { motion } from "framer-motion";

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
          className="text-4xl font-bold text-center text-primary dark:text-white mb-10"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-gray-700 dark:text-gray-300 leading-8"
        >
          Hello! I'm <span className="text-accent font-semibold">Paridhi Jain</span>, a tech enthusiast who thrives at the intersection of design, logic, and creativity.
          I enjoy building sleek and functional web apps using modern tools like <span className="font-semibold text-accent">React, Tailwind, and Flask</span>, while also diving into the world of data with <span className="font-semibold text-accent">Python, Machine Learning, and Power BI</span>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-8"
        >
          I’m passionate about solving real-world problems through intuitive UI and smart logic.
          Whether it’s analyzing data or crafting interactive web experiences, I aim to create solutions that are both impactful and user-friendly.
          When I'm not coding, you’ll find me exploring new tech trends or sketching ideas for my next build.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
