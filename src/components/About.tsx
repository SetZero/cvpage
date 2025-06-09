import React from "react";
import { stats } from "../data/experience";

const About: React.FC = () => (
    <section id="about" className="about">
        <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about__content">
                <div className="about__text">
                    <p>
                        I work as a Real-Time Architecture Engineer at ITK Engineering GmbH, where I build reliable,
                        high-performance software for embedded systems and time-critical applications. I work mainly
                        with C++, Rust, Java, Python, and TypeScript, depending on what the project calls for.
                    </p>
                    <p>
                        With a background in computer science and experience in both research and industry, I focus
                        on designing software architectures that are not only efficient but also scalable and ready
                        for the real world. I'm especially interested in pushing the limits of what real-time systems
                        can do.
                    </p>
                    <p>
                        Outside of work, I enjoy tinkering with new technologies, contributing to open-source projects,
                        and staying up to speed on the latest in software engineering and embedded development.
                    </p>
                </div>
                <div className="about__stats">
                    {stats.map((stat) => (
                        <div className="stat-card" key={stat.label}>
                            <span className="stat-card__number">{stat.number}</span>
                            <span className="stat-card__label">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
);

export default About;