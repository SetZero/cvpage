import React from "react";
import { contactLinks } from "../data/experience";

const Contact: React.FC = () => (
  <section id="contact" className="contact">
    <div className="container">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact__content">
        <div className="contact__text">
          <p>
            For inquiries, please use the links below.
          </p>
        </div>
        <div className="contact__links">
          {contactLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="contact-link"
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
            >
              <span className="contact-link__icon">{link.icon}</span>
              <span className="contact-link__text">{link.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Contact;