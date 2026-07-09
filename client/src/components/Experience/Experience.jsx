import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaCode,
} from "react-icons/fa";
import "./Experience.css";

const experiences = [
  {
    id: 1,
    role: "XML Intern",
    company: "Way2Class",
    duration: "Feb 2026 – May 2026",
    description:
      "Designed, created and maintained XML documents for structured data representation. Developed and validated XML Schemas (XSD), performed XML parsing and XSLT transformations, integrated XML APIs and optimized XML workflows for better efficiency and interoperability.",
    technologies: [
      "XML",
      "XSD",
      "XSLT",
      "XML APIs",
      "Data Validation",
    ],
  },

  {
    id: 2,
    role: "Web Development Intern",
    company: "Zidio Development",
    duration: "Jun 2025 – Sept 2025",
    description:
      "Developed responsive web interfaces, integrated REST APIs and enhanced user experience while ensuring cross-browser compatibility and responsive design using modern frontend technologies.",
    technologies: [
      "React.js",
      "JavaScript",
      "REST API",
      "Responsive Design",
      "Git",
    ],
  },

  {
    id: 3,
    role: "Full Stack Development Intern",
    company: "Cognifyz Technologies",
    duration: "Jun 2025 – Jul 2025",
    description:
      "Developed full-stack web applications using React.js, Node.js and MongoDB. Built REST APIs, implemented CRUD operations, integrated JWT authentication and improved application performance with responsive UI using Tailwind CSS.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
    ],
  },

  {
    id: 4,
    role: "Data Analytics Intern",
    company: "Pregrad",
    duration: "Jun 2024 – Sept 2024",
    description:
      "Performed Exploratory Data Analysis (EDA), built machine learning models and visualized insights using Python libraries. Worked on data preprocessing, model evaluation and analytics dashboards.",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-Learn",
      "Matplotlib",
      "EDA",
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <motion.div
          className="experience-heading"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>Professional Journey</span>
          <h2>Experience Timeline</h2>
          <p>
            My internships and hands-on experience in full-stack
            development, AI and software engineering.
          </p>
        </motion.div>

        <div className="timeline">
          {experiences.map((item, index) => (
            <motion.div
              key={item.id}
              className="timeline-item"
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <div className="timeline-dot">
                <FaBriefcase />
              </div>

              <div className="timeline-card">
                <div className="timeline-date">
                  <FaCalendarAlt />
                  <span>{item.duration}</span>
                </div>

                <h3>{item.role}</h3>

                <h4>{item.company}</h4>

                <p>{item.description}</p>

                <div className="timeline-tech">
                  {item.technologies.map((tech) => (
                    <span key={tech}>
                      <FaCode />
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}