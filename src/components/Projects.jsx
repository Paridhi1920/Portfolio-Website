import React from "react";
import Slider from "react-slick";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Nextract - AI PDF Summarizer",
    description:
      "Summarizes uploaded files using NLP models. Includes theme toggle, download, and Firebase Auth.",
    tech: ["React", "Flask", "HuggingFace", "Tailwind", "Firebase"],
    link: "https://nextract-frontend.vercel.app",
  },
  {
    title: "Fake News Detection",
    description:
      "Detect and classify fake news using ML models and TF-IDF vectorization.",
    tech: ["Python", "Scikit-Learn", "NLP", "Streamlit", "Pandas"],
    link: "https://github.com/Paridhi1920/Fake-News-Detection",
  },
  {
    title: "WhatsApp Chat Analyzer",
    description:
      "Analyze WhatsApp chats for frequency, sentiment, and active hours.",
    tech: ["Python", "Pandas", "Matplotlib", "Streamlit"],
    link: "https://paridhi-whatsapp-chat-analyzer-app.streamlit.app",
  },
  {
    title: "E-Commerce Website",
    description:
      "QuickPick - Responsive platform with cart, auth, and dynamic product listings.",
    tech: ["ReactJS", "Tailwind CSS", "Router-dom"],
    link: "https://github.com/Paridhi1920/E-Commerce-Website",
  },
];

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <section id="projects" className="py-20 px-4 bg-gray-100 dark:bg-primary transition">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10 text-primary dark:text-white">Projects</h2>

        <Slider {...settings}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition duration-300 mx-2"
            >
              <h3 className="text-2xl font-semibold text-accent mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{project.description}</p>
              <div className="flex flex-wrap gap-2 my-4 justify-center">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-accent/20 text-accent px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-accent hover:underline"
              >
                View Project <FaExternalLinkAlt />
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
