import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPython, FaHtml5, FaCss3Alt, FaReact, FaJs, FaDatabase, FaChartBar, FaChartLine
} from 'react-icons/fa';
import {
  SiCplusplus, SiC, SiFlask, SiFirebase, SiPandas, SiNumpy,
  SiScikitlearn, SiTailwindcss, SiTensorflow, SiMysql
} from 'react-icons/si';
import { GiArtificialHive } from 'react-icons/gi'; // for DSA
import { MdStorage } from 'react-icons/md'; // for DBMS

const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'C', icon: <SiC /> },
      { name: 'C++', icon: <SiCplusplus /> },
    ],
  },
  {
    title: 'Data & ML Tools',
    skills: [
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'NumPy', icon: <SiNumpy /> },
      { name: 'Scikit-learn', icon: <SiScikitlearn /> },
      { name: 'TensorFlow', icon: <SiTensorflow /> },
      { name: 'Seaborn', icon: <FaChartLine /> }, // replaced with FaChartLine
      { name: 'Matplotlib', icon: <FaChartBar /> },
      { name: 'Power BI', icon: <FaChartBar /> },
      { name: 'SQL', icon: <FaDatabase /> },
    ],
  },
  {
    title: 'Web Technologies',
    skills: [
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'React.js', icon: <FaReact /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'Flask', icon: <SiFlask /> },
    ],
  },
  {
    title: 'CS Fundamentals',
    skills: [
      { name: 'DSA', icon: <GiArtificialHive /> },
      { name: 'DBMS', icon: <MdStorage /> },
      { name: 'MySQL', icon: <SiMysql /> },
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
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
        <h2 className="text-4xl font-bold mb-14 text-primary dark:text-white">
          My Skills
        </h2>

        {skillCategories.map((category, catIdx) => (
          <div key={catIdx} className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                  className="flex flex-col items-center justify-center 
                  bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white 
                  px-4 py-6 rounded-lg shadow transition duration-300 
                  font-semibold cursor-pointer 
                  hover:border hover:border-accent 
                  hover:shadow-lg hover:shadow-accent/40 
                  hover:text-accent hover:scale-105"
                >
                  <div className="text-3xl mb-2 transition-colors duration-300">
                    {skill.icon}
                  </div>
                  <div>{skill.name}</div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
