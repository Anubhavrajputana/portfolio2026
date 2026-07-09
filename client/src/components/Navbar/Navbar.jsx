import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__container">
        <Link to="/" className="navbar__logo">
          Harsh<span>Dev</span>
        </Link>

        <nav className={`navbar__links ${open ? "active" : ""}`}>
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a
            href="https://github.com/Anubhavrajputana"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/harsh-chauhan-7b6a9a242/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a href="Harsh_Chauhan_Resume___2026.pdf" className="resume-btn">
            <FaFileDownload />
            Resume
          </a>

          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>
    </header>
  );
}