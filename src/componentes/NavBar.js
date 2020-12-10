import React from "react";
import logo1 from "../img/logo1.png";
import "../estilos/navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg mi-nav ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand mx-5" href="#">
          <img src={logo1} className="mx-2" />
          T&S Medicina
        </a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Institucional
              </a>
            </li>
          </ul>
          <a className="nav-link ml-auto" type="submit">
            Portal pacientes
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
