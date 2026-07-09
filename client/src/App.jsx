import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import Certifications from "./components/Certifications/Certifications";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import AIChatbot from "./chatbot/AIChatbot";

// Future Pages
// import Resume from "./pages/Resume";
// import ProjectsPage from "./pages/ProjectsPage";
// import ContactPage from "./pages/ContactPage";

// Utilities
// import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function Home() {
  return (
    <>
      <Navbar />

      <main className="home-page">
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Education />

        <Certifications />

        <Contact />

        <Footer />
      </main>

      {/* Floating AI Assistant */}
      <AIChatbot />
    </>
  );
}

function NotFound() {
  return (
    <section className="not-found-page">
      <div className="not-found-content">
        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          Oops! The page you're looking for doesn't exist
          or has been moved.
        </p>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      {/* <ScrollToTop /> */}

      <Routes>
        <Route path="/" element={<Home />} />

        {/* Future Pages */}

        {/* <Route path="/resume" element={<Resume />} /> */}

        {/* <Route path="/projects" element={<ProjectsPage />} /> */}

        {/* <Route path="/contact" element={<ContactPage />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}