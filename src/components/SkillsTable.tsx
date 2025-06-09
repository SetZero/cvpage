import type { SkillCategory } from "../data/types";

interface SkillsTableProps {
    category: SkillCategory;
}

const SkillsTable: React.FC<SkillsTableProps> = ({ category }) => {
    return (
        <section className="skills-table">
            <h2 className="category-title">{category.title}</h2>
            <div className="skills-list">
                {[...category.skills]
                    .sort((a, b) => (b.years ?? 0) - (a.years ?? 0))
                    .map((skill, index) => (
                        <div key={index} className="skill-item">
                            <div className="skill-info">
                                <span className="skill-name">{skill.name}</span>
                                {skill.knowledge && (
                                    <span className="skill-knowledge">{skill.knowledge}</span>
                                )}
                            </div>
                            {skill.years !== undefined && (
                                <div className="progress-bar-wrapper">
                                    <div className="skill-progress">
                                        <div className="progress-bar-container">
                                            <div
                                                className="progress-bar"
                                                style={{
                                                    width: `${(skill.years / Math.max(...category.skills.map(s => s.years ?? 0))) * 100
                                                        }%`
                                                }}
                                                data-years={skill.years}
                                            />
                                        </div>
                                    </div>
                                    <span className="skill-bubble">{skill.years} years of experience</span>
                                </div>
                            )}
                        </div>
                    ))}
            </div>
        </section>
    );
};

export default SkillsTable;