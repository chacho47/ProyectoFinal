import React from "react";
import logo1 from "../img/logo1.png";
import "../estilos/navbar.css";

const Navbar = () => {
  return (
<<<<<<< HEAD
    <nav className="navbar navbar-expand-lg mi-nav ">
=======
    <nav className="navbar navbar-expand-lg mi-nav">

>>>>>>> chacho
      <div className="container-fluid">

        <a className="navbar-brand" href="#">
          <img src={logo1} className="mx-2" />
          T&S Medicina
        </a>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <form>
        <button className="btn btn-sm btn-secondary mx-1 efectoimg" type="button">
          Registrarse
        </button>
        <button className="btn btn-primary mx-1 text-light efectoimg" type="button">
          Inciar Sesion
        </button>
        </form>
        
      </div>
    </nav>
  );
};

export default Navbar;
