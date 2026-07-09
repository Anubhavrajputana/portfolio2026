import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaUserGraduate,
} from "react-icons/fa";
import "./About.css";

const features = [
  {
    icon: <FaCode />,
    title: "Clean Code",
    description:
      "I write scalable, maintainable and production-ready code following best practices.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Full Stack Development",
    description:
      "Building responsive frontends and powerful backend APIs using the MERN stack.",
  },
  {
    icon: <FaRocket />,
    title: "Performance Focused",
    description:
      "Optimized applications with smooth UI, fast loading and great user experience.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Continuous Learner",
    description:
      "Always learning new technologies and improving problem-solving skills.",
  },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="about-badge">About Me</span>

          <h2>
            Passionate <span>MERN Stack Developer</span>
          </h2>

          <p>
            Hi, I'm <strong>Harsh Chauhan</strong>. I enjoy creating modern,
            responsive and user-friendly web applications using React.js,
            Node.js, Express.js and MongoDB.
          </p>

          <p>
            My focus is on building clean interfaces, reusable components and
            scalable backend systems that provide an excellent user experience.
          </p>

          <a href="#contact" className="about-btn">
            Let's Connect
          </a>
        </motion.div>

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="about-grid">
            {features.map((item, index) => (
              <div className="about-card" key={index}>
                <div className="about-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}