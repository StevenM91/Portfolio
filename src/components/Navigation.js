import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="container-navigation">
      <div className="content">
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
      </div>
      <div className="content">
        <NavLink to="/about">
          <li>À propos</li>
        </NavLink>
      </div>
      <div className="content">
        <NavLink to="/projets">
          <li>Projets</li>
        </NavLink>
      </div>
      <div className="content">
        <NavLink to="/contact">
          <li>Contact</li>
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
