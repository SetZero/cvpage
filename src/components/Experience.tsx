import React from "react";
import { experience } from "../data/experience";

const Experience: React.FC = () => (
  <section id="experience" className="experience">
    <h2 className="section-title">Professional Experience</h2>
    <div className="timeline">
      {experience.map((item, idx) => (
        <div className="timeline-item" key={idx}>
          <div className="timeline-marker" />
          <div className="timeline-content">
            <div className="timeline-period">{item.period}</div>
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-company">{item.company}</p>
            <p className="timeline-description">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;