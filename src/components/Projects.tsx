import React from "react";
import { projects } from "../data/experience";
import LightGallery from "lightgallery/react";
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';


const Projects: React.FC = () => {
  const getThumbnailPath = React.useCallback((imagePath: string): string => {
    const parts = imagePath.split('/');
    const fileName = parts.pop() || '';
    const dir = parts.join('/');
    const dotIndex = fileName.lastIndexOf('.');
    const baseName = dotIndex !== -1 ? fileName.substring(0, dotIndex) : fileName;
    const ext = dotIndex !== -1 ? fileName.substring(dotIndex) : '';
    const dirWithSlash = dir.startsWith('/') ? dir : `/${dir}`;
    return `${dirWithSlash}/thumb/${baseName}_thumb${ext}`;
  }, []);

  return (
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
              {project.images && project.images.length > 0 && (
                <LightGallery
                  speed={500}
                >
                  {project.images.map((img: string, idx: number) => (
                    <a href={img} key={idx} className="project-card__image">
                      <div
                        className="project-card__image-wrapper"
                        key={idx}
                        style={{
                          '--bg-image': `url(${getThumbnailPath(img)})`
                        } as React.CSSProperties}
                      >
                        <img
                          alt={`project-img-${idx}`}
                          src={getThumbnailPath(img)}
                          loading="lazy"
                        />
                      </div>
                    </a>
                  ))}
                </LightGallery>
              )}
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
  )
};

export default Projects;