import React from "react";
import "./Navbar.css";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <h1>Portfolio</h1>
        </div>
        <div className="nav-menu">
          <a href="/" className="nav-item">
            Home
          </a>
          <a href="#sobre" className="nav-item">
            Sobre
          </a>
          <a href="#habilidades" className="nav-item">
            Habilidades
          </a>
          <a href="#contato" className="nav-item">
            Contato
          </a>
        </div>
        <div className="navbar-right">
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkTheme ? (
              <i className="fas fa-sun"></i>
            ) : (
              <i className="fas fa-moon"></i>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
