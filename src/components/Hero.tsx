import React from "react";

const Hero: React.FC = () => (
  <section id="home" className="hero">
    <div className="hero__container">
      <div className="hero__content">
        <div className="hero__text">
          <h1 className="hero__name">Sebastian Dauenhauer</h1>
          <p className="hero__title">Real Time Architecture Engineer</p>
          <p className="hero__location">📍 Dahn, Rheinland-Pfalz, Deutschland</p>
          <p className="hero__description">
            Passionate about real-time systems, embedded software development, and modern programming technologies.
            Delivering high-performance solutions in challenging technical environments.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">Contact Me</a>
            <a href="mailto:contact@dauenhauer.eu" className="btn btn--outline">Get In Touch</a>
          </div>
        </div>
        <div className="hero__visual">
          <div className="hero__avatar" aria-label="Abstract avatar illustration" />
          <div className="hero__decoration hero__decoration--1" aria-hidden="true" />
          <div className="hero__decoration hero__decoration--2" aria-hidden="true" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;