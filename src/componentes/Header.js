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
  const [state, setState] = useState({
    user: "",
    password: ""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isLogged = true;
  const loginOnClick = (e)=> {
    e.preventDefault();
    let user = state;

  }

  const handleOnChange = (e) => {
    let name = e.target.name;

  }

  if (true || true || console.log("asdad")) {
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
        <Link
          to="/registrarme"
          className="btn bg-secondary text-light ml-3"
          variant="secondary"
        >
          Registrarme
        </Link>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Iniciar sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control 
                name = "user"
                value = {state.user}
                onChange={handleOnChange}
                type="email" 
                placeholder="Enter email" 
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control 
                name="password"
                value = {state.password}
                onChange={handleOnChange}
                type="password" 
                placeholder="Password" />
              </Form.Group>

              <div className="d-flex row justify-content-center">
                <Button className="ml-3 mr-auto" variant="info" type="submit">
                  Ingresar
                </Button>
                <p className="mt-2">No tienes cuenta? </p>
                <Link
                  className="mr-3 mt-2 ml-1"
                  to="/registrarme"
                  variant="secondary"
                >
                  Registrate
                </Link>
              </div>
            </Form>
          </Modal.Body>
        </Modal>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
