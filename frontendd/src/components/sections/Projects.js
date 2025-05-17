import React from "react";
import "../../styles/sections/Projects.css";

const Projects = () => {
  const projects = [
    { name: "Portfolio Pessoal", url: "/" },
    { name: "E-commerce", url: "/" },
    { name: "Dashboard", url: "/" },
  ];

  const handleClick = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
  };

  return (
    <div className="card projects-card">
      <h2>Projetos</h2>
      <ul className="projects-list">
        {projects.map((project, index) => (
          <li key={index}>
            <h3>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.name}
              </a>
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
