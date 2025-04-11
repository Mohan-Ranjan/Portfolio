import React from "react";

const projects = [
  { name: "Project 1", description: "A React-based web app", link: "#" },
  { name: "Project 2", description: "An eCommerce website", link: "#" },
];

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
      ))}
    </section>
  );
};

export default Projects;
