import React from "react";
import "./MainContent.css";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Formulario from "./Formulario";

const MainContent = () => {
  return (
    <main className="main-content">
      <div className="container">
        <div className="cards-container">
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Formulario />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
