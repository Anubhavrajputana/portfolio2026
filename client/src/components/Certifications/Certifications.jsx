import { motion } from "framer-motion";
import {
  FaAward,
  FaExternalLinkAlt,
  FaCertificate,
} from "react-icons/fa";
import "./Certifications.css";

const certifications = [
  {
    id: 1,
    title: "Web Development Certification",
    issuer: "Internshala",
    date: "2025",
    description:
      "Completed a comprehensive Web Development certification covering HTML5, CSS3, Bootstrap, JavaScript, React.js and modern frontend development practices.",
    link: "#", // Add certificate link later
  },

  {
    id: 2,
    title: "Data Analytics Certification",
    issuer: "Pregrad",
    date: "2024",
    description:
      "Successfully completed Data Analytics training with hands-on experience in Exploratory Data Analysis (EDA), Python, Pandas, Machine Learning fundamentals and data visualization.",
    link: "#",
  },

  {
    id: 3,
    title: "NPTEL - Air Pollution and Control",
    issuer: "NPTEL (IIT)",
    date: "2025",
    description:
      "Successfully completed the NPTEL course 'Air Pollution and Control' with a score of 78%, demonstrating strong analytical and environmental engineering knowledge.",
    link: "#",
  },

  {
    id: 4,
    title: "National & University Level Hackathons",
    issuer: "Hackathon Participation",
    date: "2025",
    description:
      "Participated in University and National Level Hackathons, collaborating with teams to develop innovative software solutions under real-world problem statements.",
    link: "#",
  },
];

export default function Certifications() {
  return (
    <section
      className="certifications-section"
      id="certifications"
    >
      <div className="certifications-container">
        <motion.div
          className="certifications-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="cert-badge">
            Achievements
          </span>

          <h2>Certifications</h2>

          <p>
            Courses, certifications and achievements that
            demonstrate my continuous learning journey.
          </p>
        </motion.div>

        <div className="certifications-grid">
          {certifications.map((item, index) => (
            <motion.div
              key={item.id}
              className="cert-card"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
            >
              <div className="cert-icon">
                <FaCertificate />
              </div>

              <h3>{item.title}</h3>

              <div className="cert-meta">
                <span>
                  <FaAward />
                  {item.issuer}
                </span>

                <span>{item.date}</span>
              </div>

              <p>{item.description}</p>

              {/* {item.link && item.link !== "#" ? (
  <a
    href={item.link}
    target="_blank"
    rel="noreferrer"
    className="cert-button"
  >
    View Certificate
    <FaExternalLinkAlt />
  </a>
) : (
  <button
    className="cert-button disabled-btn"
    disabled
  >
    Certificate Coming Soon
  </button>
)} */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}