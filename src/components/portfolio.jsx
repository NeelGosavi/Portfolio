import React from "react";
import { Link } from "react-router-dom";
import { BsSun, BsMoon } from "react-icons/bs";
import "./portfolio.css";
import profileImage from "../assets/images/photo.jpg"; 
import About from "./About";

const Portfolio = ({ darkMode, changeTheme }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={`container ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}>Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#academics" onClick={(e) => { e.preventDefault(); scrollToSection("academics"); }}>Academics</a></li>
         

        </ul>
        
        {/* Theme Toggle Button */}
        <button className="theme-toggle" onClick={changeTheme}>
          {darkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
        </button>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="about">
  <div className="hero-content">
    {/* Profile Image */}
    <div className="hero-image-container">
      <img src={profileImage} alt="Neel Gosavi" className="hero-image" />
    </div>

    {/* Hero Text */}
    <div className="hero-text">
      <h2 className="hero-title">Hi, I'm Neel Gosavi</h2>
      <p className="hero-subtitle">
        I'm a passionate second-year Computer Engineering student at Terna Engineering College, Nerul. I have a keen interest in software development, web technologies, and problem-solving. Over time, I've built projects ranging from inventory management systems to e-commerce platforms, constantly pushing myself to learn and improve.
        <br /><br />
        I enjoy working with Python, Django, Firebase, and React, and I believe in the power of clean, efficient code to create impactful solutions. Beyond coding, I love exploring new technologies, working on personal projects, and staying updated with the latest industry trends.
        <br /><br />
        When I'm not coding, you'll find me experimenting with UI/UX design, solving problem challenges, or exploring AI. I'm eager to collaborate and learn from like-minded individuals. Let's connect and build something amazing together!
      </p>
      <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}>
        <button className="btn">View My Work</button>
      </a>
    </div>
  </div>
</header>



      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2 className="section-title">My Projects</h2>
        <div className="project-grid">
          <Project title="Virtual Banking System" description="A Java-based GUI application." link="virtual-banking-system" />
          <Project title="Inventory System" description="Built using Flask, Python and Firebase." link="inventory-system" />
          <Project title="Library Management System" description="A Java-Based GUI Application." link="library-management-system" />
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="tech-stack">
          <h2 className="section-title">Tech Stack</h2>
          <div className="stack-grid">
            <div className="stack-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" />
              <p>HTML</p>
            </div>
            <div className="stack-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" />
              <p>CSS</p>
            </div>
            <div className="stack-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
              <p>JavaScript</p>
            </div>
            <div className="stack-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
              <p>Python</p>
            </div>
            <div className="stack-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
              <p>Java</p>
            </div>
            <div className="stack-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" />
              <p>SQL</p>
            </div>
            <div className="stack-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" />
              <p>Firebase</p>
            </div>
          </div>
      </section>

      <section id="academics" className="academics">
        <h2 className="section-title">Academics</h2>

        <div className="academics-block">
          <h3>Currently pursuing B.E in Computer Engineering, Now in T.E</h3>
          <p>Terna Engineering College, Nerul</p>
          <p>Total Years 2023 - 2027</p>
          <p>Sem1 CGPA: 9.06</p>
          <p>Sem2 CGPA: 9.80</p>
          <p>1st Year CGPA: 9.43</p>
          <p>Sem3 CGPA: 10</p>
        </div>

        <div className="academics-block">
          <h3>Relevant Coursework</h3>
          <ul>
            <p>Data Structures & Algorithms</p>
            <p>Database Management Systems</p>
            <p>Operating Systems</p>
            <p>Web Development</p>
          </ul>
        </div>

      </section>



      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2 className="section-title">Let's Connect</h2>
        <p>Email: <a href="mailto:neelgosavi07@gmail.com">neelgosavi07@gmail.com</a></p>
        <p>LinkedIn: <a href="www.linkedin.com/in/neel-gosavi-4b1099358" target="_blank">www.linkedin.com/in/neel-gosavi-4b1099358</a></p>
        <p>GitHub: <a href="https://github.com/NeelGosavi" target="_blank">https://github.com/NeelGosavi</a></p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Neel Gosavi. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

// Project Card Component
const Project = ({ title, description, link }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <Link to={`/projects/${link}`} className="btn">View Details</Link>
  </div>
);

export default Portfolio;
