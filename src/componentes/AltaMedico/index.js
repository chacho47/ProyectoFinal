import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AltaMedico = () => {
  // State Nombre
  const [nombreMedico, setNombreMedico] = useState("");
  const handleNombre = (e) => {
    setNombreMedico(e.target.value);
  };
  //   State especialidad
  const [especialidad, setEspecialidad] = useState("");
  const handleEspecialidad = (e) => {
    setEspecialidad(e.target.value);
    console.log(especialidad);
  };

  const [email, setEmail] = useState("");
  const [contaseña, setContaseña] = useState("");

  return (
    <>
      <Form className="container justify-content-center">
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control
          type="text"
          value={nombreMedico}
          onChange={handleNombre}
          placeholder="Escriba el nombre aqui"
        />
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Especialidad</Form.Label>
          <Form.Control
            as="select"
            value={especialidad}
            onChange={handleEspecialidad}
          >
            <option>Clinica</option>
            <option>Cardiologia</option>
            <option>Oftalmologia</option>
            <option>Dermatologia</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email@ejemplo.com" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Agregar Medico
        </Button>
      </Form>
    </>
  );
};

export default AltaMedico;
