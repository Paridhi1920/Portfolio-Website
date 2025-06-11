import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPython, FaHtml5, FaCss3Alt, FaReact, FaJs, FaDatabase, FaChartBar,
} from 'react-icons/fa';
import {
  SiCplusplus, SiFlask, SiFirebase, SiPandas, SiNumpy, SiScikitlearn, SiTailwindcss, SiTensorflow,
} from 'react-icons/si';


const skills = [
  { name: 'Python', icon: <FaPython /> },
  { name: 'C++', icon: <SiCplusplus /> },
  { name: 'SQL', icon: <FaDatabase /> },
  { name: 'Flask', icon: <SiFlask /> },
  { name: 'Firebase', icon: <SiFirebase /> },
 { name: 'Power BI', icon: <FaChartBar /> },
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Pandas', icon: <SiPandas /> },
  { name: 'NumPy', icon: <SiNumpy /> },
  { name: 'Scikit-learn', icon: <SiScikitlearn /> },
  { name: 'Machine Learning', icon: <SiTensorflow /> },
  { name: 'Deep Learning', icon: <SiTensorflow /> },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
      ease: 'easeOut'
    }
  })
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-4 md:px-10 bg-white dark:bg-primary transition"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-primary dark:text-white">
          My Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-4 py-6 rounded-lg shadow hover:shadow-lg transition duration-300 font-semibold hover:text-accent hover:scale-105"
            >
              <div className="text-3xl mb-2">{skill.icon}</div>
              <div>{skill.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
