import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaSchool,
  FaAward,
} from "react-icons/fa";
import "./Education.css";

const educationData = [
  {
    id: 1,
    icon: <FaUniversity />,
    degree: "Bachelor of Technology (B.Tech)",
    institute: "Dev Bhoomi Uttarakhand University, Dehradun",
    duration: "2022 – 2026",
    grade: "CGPA: 8.04 / 10",
    description:
      "Completed B.Tech in Computer Science and Engineering with strong knowledge of Full Stack Web Development, Data Structures & Algorithms, DBMS, Operating Systems, Software Engineering and modern web technologies. Built multiple real-world MERN Stack applications and academic projects.",
  },

  {
    id: 2,
    icon: <FaSchool />,
    degree: "Senior Secondary (Class XII)",
    institute: "Kamla Devi Sarvodaya Vidyalaya, Bijnor",
    duration: "2022",
    grade: "62%",
    description:
      "Completed Higher Secondary education with Science stream, developing strong analytical, mathematical and problem-solving skills that laid the foundation for software engineering.",
  },

  {
    id: 3,
    icon: <FaAward />,
    degree: "Secondary (Class X)",
    institute: "Kamla Devi Sarvodaya Vidyalaya, Bijnor",
    duration: "2020",
    grade: "64%",
    description:
      "Completed Secondary education while building a solid academic foundation and developing an early interest in programming, technology and computer science.",
  },
];

export default function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">
        <motion.div
          className="education-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="education-badge">
            Academic Journey
          </span>

          <h2>Education</h2>

          <p>
            My educational background and continuous
            learning journey that supports my career in
            software development.
          </p>
        </motion.div>

        <div className="education-timeline">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              className="education-item"
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -40 : 40,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <div className="education-icon">
                <FaGraduationCap />
              </div>

              <div className="education-card">
                <div className="education-top">
                  <div className="education-logo">
                    {item.icon}
                  </div>

                  <div>
                    <h3>{item.degree}</h3>
                    <h4>{item.institute}</h4>
                  </div>
                </div>

                <div className="education-meta">
                  <span>{item.duration}</span>
                  <span>{item.grade}</span>
                </div>

                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}