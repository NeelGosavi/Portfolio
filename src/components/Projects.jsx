import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Projects.css";

const techLogos = {
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  flask: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
  firebase: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
};

const projectData = {
  "virtual-banking-system": {
    title: "Virtual Banking System",
    description: "A Java-based GUI application with core banking features.",
    technologies: ["Java", "MySQL"],
    //demoLink: "https://your-virtual-banking-system-demo-url.com", // REPLACE WITH ACTUAL DEMO URL
  },
  "inventory-system": {
    title: "Inventory System",
    description: "A web-based system using Flask and Firebase for managing inventory.",
    technologies: ["Flask", "Firebase", "Python"],
    //demoLink: "https://your-inventory-system-demo-url.com", // REPLACE WITH ACTUAL DEMO URL
  },
  "library-management-system": {
    title: "Library Management System",
    description: "A Java-based application for efficient traffic flow control and rule enforcement.",
    technologies: ["Java", "MySQL"],
    //demoLink: "https://your-traffic-management-system-demo-url.com", // REPLACE WITH ACTUAL DEMO URL
  },

};

const Projects = () => {
  const { projectId } = useParams();
  const project = projectData[projectId];

  if (!project) {
    return (
      <div className="project-details">
        <h2>Project Not Found</h2>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="project-details">
      <div className="project-card">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <h3>Technologies Used:</h3>
        <ul className="tech-list">
          {project.technologies.map((tech, index) => (
            <li key={index}>
              {techLogos[tech.toLowerCase()] && (
                <img
                  src={techLogos[tech.toLowerCase()]}
                  alt={tech}
                  className="tech-icon"
                />
              )}
              <span>{tech}</span>
            </li>
          ))}
        </ul>

        {/* Add the Demo button if demoLink exists */}
        {project.demoLink && (
          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn demo-btn" // Added a new class for styling
          >
            View Demo
          </a>
        )}

        <Link to="/" className="btn">Back to Home</Link>
      </div>
  </div>
 );
};

export default Projects;