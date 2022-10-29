import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="container-navigation">
      <div className="content">
        <NavLink to="/">
          <div className="nav">
            <li>Accueil</li>
            <img src="./assets/img/home.png" alt="home" className="img-nav" />
          </div>
        </NavLink>
      </div>
      <div className="content">
        <NavLink to="/about">
          <div className="nav">
            <li>À propos</li>
            <img
              src="./assets/img/apropos.png"
              alt="A propos"
              className="img-nav"
            />
          </div>
        </NavLink>
      </div>
      <div className="content">
        <NavLink to="/projets">
          <div className="nav">
            <li>Projets</li>
            <img
              src="./assets/img/projets.png"
              alt="projets"
              className="img-nav"
            />
          </div>
        </NavLink>
      </div>
      <div className="content">
        <NavLink to="/contact">
          <div className="nav">
            <li>Contact</li>
            <img
              src="./assets/img/contact.png"
              alt="contact"
              className="img-nav"
            />
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
