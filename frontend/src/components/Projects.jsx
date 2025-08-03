import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "ResTrack - Resume Analyzer",
    description:
      "ResTrack is an AI-powered resume analysis platform tailored for both job seekers and recruiters. It analyzes uploaded resumes to generate ATS scores, extract key skills, match relevant job roles, and dynamically generate customized cover letters using NLP techniques. Built with a modular Flask backend and an interactive React frontend, ResTrack uses Firebase for authentication.",
    tech: ["React", "Flask", "NLP", "Firebase", "HuggingFace"],
    image: "/images/resume.png",
    link: "https://github.com/Paridhi1920/Resume-Analyzer",
  },
  {
    title: "Nextract - AI PDF Summarizer",
    description:
      "Nextract is a document summarization web app that allows users to upload PDF, DOCX, or PPTX files and receive concise summaries using advanced NLP models. It offers three summary lengths, supports theme toggling, and allows users to download summaries in multiple formats. The project uses HuggingFace’s inference API and Firebase for user authentication.",
    tech: ["React", "Flask", "HuggingFace", "Tailwind", "Firebase"],
    image: "/images/nextract.png",
    link: "https://nextract-frontend.vercel.app",
  },
  {
    title: "Fake News Detection",
    description:
      "This web-based application uses ML models to classify fake news articles based on textual content. It employs TF-IDF for feature extraction and classifiers like Logistic Regression and Naive Bayes to detect misinformation. Built with Streamlit and Scikit-learn for rapid and intuitive analysis.",
    tech: ["Python", "Scikit-Learn", "NLP", "Streamlit", "Pandas"],
    image: "/images/fake-news.png",
    link: "https://github.com/Paridhi1920/Fake-News-Detection",
  },
  {
    title: "WhatsApp Chat Analyzer",
    description:
      "This tool helps users visualize their WhatsApp chat history with metrics like top senders, most used words, emoji usage, and trends. It processes `.txt` files and presents clean insights via Streamlit, using Matplotlib, Pandas, and Seaborn.",
    tech: ["Python", "Pandas", "Matplotlib", "Streamlit"],
    image: "/images/chat-analyzer.png",
    link: "https://whatsapp-chat-analyzer-jthbtwtznyx2fpnov4fsla.streamlit.app/",
  },
  {
    title: "E-Commerce Website",
    description:
      "QuickPick is a responsive React-based e-commerce app featuring dynamic product pages, cart logic, and user authentication. Designed with reusable components and Tailwind CSS for smooth UI/UX.",
    tech: ["ReactJS", "Tailwind CSS", "Router-dom"],
    image: "/images/ecommerce.png",
    link: "https://github.com/Paridhi1920/E-Commerce-Website",
  },
  {
    title: "Portfolio Website",
    description:
      "A fully responsive and interactive personal portfolio website built using React and Tailwind CSS. It features smooth animations with Framer Motion, dark/light theme toggle, a contact form, and clean layout to showcase my skills, projects, and professional journey. The site is designed to reflect modern aesthetics and accessibility, with performance-focused architecture using Vite.",
    tech: ["ReactJS", "Tailwind CSS", "Framer Motion", "Vite", "JavaScript"],
    image: "/images/image.png",
    link: "https://portfolio-website-mu-two-55.vercel.app/",
  }

];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 bg-gray-100 dark:bg-primary transition"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12 text-primary dark:text-white">
          Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-[#1f2937] rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-accent/30 group"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-accent mb-2 group-hover:underline">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-accent/20 text-accent px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  View Project <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
