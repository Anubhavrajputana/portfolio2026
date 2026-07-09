import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import "./Hero.css";

const roles = [
  "MERN Stack Developer",
  "React.js Developer",
  "Node.js Backend Developer",
  "Full Stack Engineer",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, displayText.length + 1);
        setDisplayText(next);

        if (next === current) {
          setTimeout(() => setDeleting(true), 1200);
        }
      } else {
        const next = current.slice(0, displayText.length - 1);
        setDisplayText(next);

        if (next.length === 0) {
          setDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, deleting ? 45 : 90);

    return () => clearTimeout(timer);
  }, [displayText, deleting, roleIndex]);

  return (
    <section className="hero" id="home">
      <div className="hero-bg-orb orb-1"></div>
      <div className="hero-bg-orb orb-2"></div>

      <div className="hero-container">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-tag">🚀 Welcome to my portfolio</span>

          <h1>
            Hi, I'm <span>Harsh Chauhan</span>
          </h1>

          <h2>
            {displayText}
            <span className="cursor">|</span>
          </h2>

          <p>
            I build fast, scalable and visually stunning web applications using
            React.js, Node.js, Express.js and MongoDB with a strong focus on
            performance and user experience.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">
              Hire Me
            </a>

            <a href="#projects" className="btn-secondary">
              View Projects
            </a>
          </div>

          <div className="hero-socials">
            <a
              href="https://github.com/Anubhavrajputana"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/harsh-chauhan-7b6a9a242/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
        >
          <div className="profile-card">
            <div className="profile-circle">
              HC
            </div>

            <div className="floating-icons">
              <FaReact />
              <FaNodeJs />
              <SiExpress />
              <SiMongodb />
              <FaHtml5 />
              <FaCss3Alt />
              <FaJsSquare />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}