import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
} from "react-icons/fa";
import "./Projects.css";

const projects = [
  {
    id: 1,
    title: "TechPaath Solutions",
    category: "MERN",
    image: "techpaath-solutions.png",
    description:
      "A modern EdTech platform with courses, internships, blogs, authentication and admin features.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    // github: "https://github.com/yourusername/techpaath",
    live: "https://techpaath-frontend-main.vercel.app/",
  },
  {
    id: 2,
    title: "Meerut Mavericks",
    category: "React",
    image: "meerut-mavericks.png",
    description:
      "Cricket registration platform with responsive UI and premium user experience.",
    tech: ["React", "CSS", "Node.js"],
    // github: "https://github.com/yourusername/project2",
    live: "https://www.meerutmavericks.net",
  },
  {
    id: 3,
    title: "AI Virtual Assistant",
    category: "AI",
    image: "VA.png",
    description:
      "Voice-enabled AI assistant with speech recognition and intelligent responses.",
    tech: ["Python", "Flask", "API"],
    // github: "https://github.com/yourusername/project3",
    // live: "https://your-demo-link.com",
  },
  {
    id: 4,
    title: "CollegeERP Website",
    category: "Full Stack",
    image: "collegeERP.png",
    description:
      "Premium animated portfolio with React, Node.js and MongoDB integration.",
    tech: ["React", "Node", "MongoDB"],
    // github: "https://github.com/yourusername/project4",
    // live: "https://your-demo-link.com",
  },
];

const filters = [
  "All",
  "MERN",
  "React",
  "Full Stack",
  "AI",
];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((item) => item.category === active);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>My Work</span>

          <h2>Featured Projects</h2>

          <p>
            A collection of projects showcasing my experience
            in MERN Stack development, UI engineering and
            modern web technologies.
          </p>
        </motion.div>

        <div className="project-filters">
          {filters.map((filter) => (
            <button
              key={filter}
              className={
                active === filter ? "active-filter" : ""
              }
              onClick={() => setActive(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <div className="project-image">
                <img
                  src={project.image}
                  alt={project.title}
                />

                <div className="project-overlay">
                  <FaCode />
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-buttons">
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noreferrer"
    >
      <FaGithub />
      GitHub
    </a>
  )}

  {project.live && (
    <a
      href={project.live}
      target="_blank"
      rel="noreferrer"
    >
      <FaExternalLinkAlt />
      Live Demo
    </a>
  )}
</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}