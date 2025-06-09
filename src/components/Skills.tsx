import React from "react";
import { skillCategories } from "../data/experience";
import './SkillsTable.css';
import SkillsTable from "./SkillsTable";

const Skills: React.FC = () => (
  <section id="skills" className="skills">
    <div className="container">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {skillCategories.map((category) => (
          <div className="skill-category" key={category.title}>
            <h3 className="skill-category__title">{category.title}</h3>
            <div className="skill-tags">
              <SkillsTable category={category} />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;