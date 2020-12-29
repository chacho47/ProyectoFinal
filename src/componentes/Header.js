import React, { useEffect, useState } from "react";
import logo1 from "../img/logo1.png";
import "../estilos/navbar.css";
import { NavLink, Link } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {withRouter} from 'react-router-dom';

const Header = ({usuario, history}) => {
  const [state, setState] = useState({
    data: {
      username: "",
      password: "",
    },
  });


  const [paciente, setPaciente] = useState({});
  const [show, setShow] = useState(false);
  const [isLogged, setIsLogged] = useState(!!usuario.username);
  const [isMedic, setIsMedic] = useState(false);


  useEffect(()=>{
    setIsLogged(!!usuario.username);
  },[usuario]);

  const handleClose = () => {setShow(false);
    }
  const handleShow = () => setShow(true);

  // Eventos
  const loginOnClick = (e) => {
    e.preventDefault();
    postLogin();
  };

  const handleOnChange = (e) => {
    let name = e.target.name;
    let user = state.data;
    user[name] = e.target.value;
    setState({ data: user });
  };

  const postLogin =  () => {
    if (isMedic){ postLoginMedico()
    }else{postLoginPaciente()} ;
   }

 const postLoginPaciente = async ()=>{
  const response = await fetch("http://localhost:4000/pacientes/login", {
    method: "POST",
    body: JSON.stringify(state.data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const res = await response.json();
  try {
    localStorage.setItem('token', res.token);
    if (res.token) {
      setState({
        data: {
          username: "",
          password: "",
        },
      });
      setIsLogged(true);
      handleClose();
    }
  } catch (error) {
    console.log(error);
}
 }

 const postLoginMedico = async ()=>{
  const response = await fetch("http://localhost:4000/medicos/login", {
    method: "POST",
    body: JSON.stringify(state.data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const res = await response.json();
  try {
    localStorage.setItem('tokenMedico', res.token);
    if (res.token) {
      setState({
        data: {
          username: "",
          password: "",
        },
      });
      setIsLogged(true);
      handleClose();
    }
  } catch (error) {
    console.log(error);
}
 }

  const putLogout = async () => {
    if(isMedic){putLoguoutMedico()}else{putLogoutPaciente()}
  };

  const putLoguoutMedico = async ()=>{
    const response = await fetch("http://localhost:4000/medicos/login", {
      method: "PUT",
      body: JSON.stringify(paciente),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    setPaciente({});
    setIsLogged(false);
    setIsMedic(false)
    localStorage.removeItem('tokenMedico');
    history.push('/')

  }


  const putLogoutPaciente = async () => {
    const response = await fetch("http://localhost:4000/pacientes/login", {
      method: "PUT",
      body: JSON.stringify(paciente),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
    setPaciente({});
    setIsLogged(false);
    localStorage.removeItem('token');
    history.push('/')
  };

const handleMedic = ()=>{
setIsMedic(true)
handleShow();
}

const handlePaciente = ()=>{
  setIsMedic(false)
  handleShow();
  }

  return (
    <Navbar bg="info" expand="lg">
      <img src={logo1} alt="logo" />
      <NavLink className="ml-3 text-light p-2"activeClassName="active"
            to="/"><h3>T&S Medicina</h3></NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          
          { isLogged? !isMedic?(
            <NavLink
              className="text-light p-2 bd-highlight"
              activeClassName="active"
              to="/paciente-turnos"
            >
              Turnos
            </NavLink>
          ):(<NavLink
            className="text-light p-2 bd-highlight"
            activeClassName="active"
            to="/medico-turnos"
          >
            Mire sus Turnos
          </NavLink>):(<div></div>)}
        </Nav>
        
        {!isLogged ? (
          <div>
            <Button className='mr-3' variant="warning" onClick={handleMedic}>
              Soy medico
            </Button>
            <Button variant="primary" onClick={handlePaciente}>
              Inicie sesión
            </Button>
            <Link
              to="/registrarme"
              className="btn bg-secondary text-light ml-3"
              variant="secondary"
            >
              Registrarme
            </Link>
          </div>
        ) : (
          <Button variant="primary" onClick={putLogout}>
            Cerrar sesión
          </Button>
        )}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Iniciar sesión</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name="username"
                  onChange={handleOnChange}
                  value={state.data.username}
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name="password"
                  value={state.data.password}
                  onChange={handleOnChange}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <div className="d-flex row justify-content-center">
                <Button
                  onClick={loginOnClick}
                  className="ml-3 mr-auto"
                  variant="info"
                  type="submit"
                >
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

export default withRouter (Header);
