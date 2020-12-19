import React from "react";
import acreditacion from "../img/acreditacion.png";
import uno from "../img/uno.png";
import amanus from "../img/amanus.png";
import lafarmacia from "../img/lafarmacia.png";
import vallesalud from "../img/vallesalud.png";
import emec from "../img/emec.png";
import clinicasarmiento from "../img/clinicasarmiento.png";
import "../estilos/footer.css";

const Footer = () => {
  return (
    <footer className="">
      <section className="py-3 prefooter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-1 col-md-4 col-sm-6 mx-4 py-1">
              <img className="w-100 efectoimg" src={amanus} alt="" />
            </div>
            <div className="col-lg-1 col-md-4 col-sm-6 mx-4 py-1">
              <img className="w-100 efectoimg" src={uno} alt="" />
            </div>
            <div className="col-lg-1 col-md-4 col-sm-6 mx-4 py-1">
              <img className="w-100 efectoimg" src={lafarmacia} alt="" />
            </div>
            <div className="col-lg-1 col-md-4 col-sm-6 mx-4 py12">
              <img className="w-100 efectoimg" src={vallesalud} alt="" />
            </div>
            <div className="col-lg-1 col-md-4 col-sm-6 mx-4 py-1">
              <img className="w-100 efectoimg" src={emec} alt="" />
            </div>
            <div className="col-lg-1 col-md-4 col-sm-6 mx-4 py-1">
              <img className="w-100 efectoimg" src={clinicasarmiento} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="coral text-dark position-absolute bottom-0 w-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h3 className="mb-3">T&S Medicina</h3>
              <ul className="list-unstyled">
                <li>Inicio</li>
                <li>Nuestra empresa</li>
                <li>Novedades</li>
                <li>Contactos</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h3 className="mb-3">Servicios</h3>
              <ul className="list-unstyled">
                <li>Pacientes</li>
                <li>Nuestros profesionales</li>
                <li>Residencias Medicas</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h3 className="mb-3">Informacion Util</h3>
              <ul className="list-unstyled">
                <li>Turnos</li>
                <li>Preguntas frecuentes</li>
                <li>Horarios de atencion</li>
                <li>Trabaja con nosotros</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
              <h3 className="mb-3"></h3>
              <img
                className="w-50"
                src={acreditacion}
                alt="logo de la clinica"
              />
            </div>
          </div>
        </div>
        <div className="Container justify-content text-center aaa text-light ">
          <p>
            © Todos los derechos reservados - Salas Ignacio & Tortosa Nicolas -
            Comision 2 i
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
