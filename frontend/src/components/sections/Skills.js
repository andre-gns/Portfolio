import React from "react";
import "../../styles/sections/Skills.css";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "CSS3", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "React", icon: "fab fa-react" },
    { name: "Node.js", icon: "fab fa-node-js" },
    { name: "SQL", icon: "fas fa-database" },
    { name: "Git", icon: "fab fa-git-alt" },
  ];

  return (
    <div className="card skills-card" id="habilidades">
      <h2>Habilidades</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>
            <i className={skill.icon}></i>
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
