import React, { useState } from "react";
import logo1 from "../img/logo1.png";
import "../estilos/navbar.css";
import { Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <nav className="navbar navbar-expand-lg mi-nav container-fluid">
      <a className="navbar-brand" href="#">
        <img src={logo1} className="mx-2" />
        T&S Medicina
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <Link to={"/"} className="mi-nav navbar-brand nav-link">
        Inicio
      </Link>
      <Link className="mi-nav navbar-brand nav-link">Institucional</Link>
      <Link className="mi-nav navbar-brand nav-link">Trabaja con Nosotros</Link>
      <Link className="mi-nav navbar-brand nav-link">Turnos web</Link>

      <div className="container d-flex justify-content-end">
        <Button variant="primary" onClick={handleShow}>
          Iniciar sesión
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Inicie sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form className="container justify-content-center">
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email@ejemplo.com" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Recuerdame" />
              </Form.Group>
              <Button
                className="btn btn-sm mx-1 efectoimg"
                variant="info"
                type="submit"
              >
                Iniciar sesión
              </Button>
              <Link
                to={"/registrarme"}
                className="btn btn-sm btn-secondary mx-1 efectoimg"
                type="button"
              >
                Registrarse
              </Link>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </nav>
  );
};

export default Navbar;