import React from "react";
import { projects } from "../data/experience";

const Projects: React.FC = () => (
  <section id="projects" className="projects">
    <div className="container">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-card__header">
              <h3 className="project-card__title">{project.title}</h3>
              {project.tech.map((tech, index) => (
                <div className="project-card__tech" key={index}>{tech}</div>
              ))}
            </div>
            <p className="project-card__description">{project.description}</p>
            <a
              href={project.github}
              className="btn btn--sm btn--outline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;