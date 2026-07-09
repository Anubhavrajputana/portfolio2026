import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaJava,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiGit,
  SiGithub,
} from "react-icons/si";

import "./Skills.css";

const skills = [
  {
    name: "React.js",
    icon: <FaReact />,
    level: 95,
    color: "#61DBFB",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    level: 92,
    color: "#68A063",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    level: 90,
    color: "#FFFFFF",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    level: 90,
    color: "#13AA52",
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare />,
    level: 94,
    color: "#F7DF1E",
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    level: 98,
    color: "#E34F26",
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    level: 96,
    color: "#1572B6",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    level: 90,
    color: "#38BDF8",
  },
  {
    name: "Java",
    icon: <FaJava />,
    level: 85,
    color: "#F89820",
  },
  {
    name: "Git",
    icon: <SiGit />,
    level: 88,
    color: "#F1502F",
  },
  {
    name: "GitHub",
    icon: <SiGithub />,
    level: 90,
    color: "#FFFFFF",
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="skills-heading"
        >
          <span>Technical Skills</span>
          <h2>Technologies I Work With</h2>
          <p>
            I build scalable, responsive and high-performance web applications
            using modern technologies and best development practices.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={skill.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
            >
              <div
                className="skill-icon"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>

              <div className="progress-wrapper">
                <div
                  className="progress-fill"
                  style={{
                    width: `${skill.level}%`,
                  }}
                />
              </div>

              <span className="skill-percent">
                {skill.level}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}