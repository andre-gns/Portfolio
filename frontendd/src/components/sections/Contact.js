import React from "react";
import "../../styles/sections/Contact.css";

const Contact = () => {
  const contactInfo = [
    { icon: "fas fa-envelope", href: "mailto:andre.wgns97@gmail.com" },
    {
      icon: "fab fa-linkedin",
      href: "https://www.linkedin.com/in/andre-araujo-236807227/",
    },
    { icon: "fab fa-github", href: "https://github.com/andre-gns" },
  ];

  return (
    <div className="card contact-card" id="contato">
      <h2>Contato</h2>
      <p>
        Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à
        vontade para entrar em contato!
      </p>
      <ul className="contact-list">
        {contactInfo.map((contact, index) => (
          <li key={index}>
            <a href={contact.href} target="_blank" rel="noopener noreferrer">
              <i className={contact.icon}></i>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
