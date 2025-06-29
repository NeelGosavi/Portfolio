import React from "react";
import "./About.css";

const languages = [
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Flask",
    logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/flask-logo-icon.png", // Light-themed Flask logo
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
];

const About = () => {
  return (
    <div className="about-page">
      <h1>About Me</h1>
      <p>Hi! I'm Neel Gosavi, a Computer Engineering student passionate about software development, web technologies, and problem-solving.</p>

      <h2>Languages & Technologies I Know</h2>
      <div className="languages-grid">
        {languages.map((lang, index) => (
          <div className="language-card" key={index}>
            <img src={lang.logo} alt={lang.name} />
            <p>{lang.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
