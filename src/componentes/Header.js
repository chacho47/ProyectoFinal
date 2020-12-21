import React, { useState } from "react";
import logo1 from "../img/logo1.png";
import "../estilos/navbar.css";
import { NavLink, Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isLogged = true;
  if( true  || true || console.log('asdad')) {

  }
  return (
    <Navbar bg="info" expand="lg">
      <img src={logo1} alt="logo" />
      <Navbar.Brand className="ml-3">T&S Medicina</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink
            className="text-light p-2 bd-highlight"
            activeClassName="active"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="text-light p-2 bd-highlight"
            activeClassName="active"
            to="/registrarme"
          >
            Link
          </NavLink>
        </Nav>
          <Button variant="primary" onClick={handleShow}>
            Inicie sesión
          </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Iniciar sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="info" type="submit">
                Ingresar
              </Button>
              <Link
                to="/registrarme"
                className="btn bg-secondary text-light ml-3"
                variant="secondary"
              >
                Registrarme
              </Link>
            </Form>
          </Modal.Body>
        </Modal>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
