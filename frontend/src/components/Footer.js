import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Contato</h3>
            <p>Email: andre.wgns97@gmail.com</p>
            <p>Telefone: (11) 98757-7060</p>
          </div>

          <div className="footer-column">
            <h3>Redes Sociais</h3>
            <div className="social-links">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i> GitHub
              </a>
              <a
                href="https://linkedin.com/in/andre-araujo-236807227/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>

          {/* <div className="footer-column">
            <h3>Links Úteis</h3>
            <ul>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#habilidades">Habilidades</a>
              </li>
              <li>
                <a href="#projetos">Projetos</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
