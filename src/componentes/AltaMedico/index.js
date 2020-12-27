import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const AltaMedico = () => {
  // States
  const [nombreMedico, setNombreMedico] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [emailMedico, setEmailMedico] = useState("");
  const [contaseña, setContaseña] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validacion
    if (
      nombreMedico.trim() === "" ||
      especialidad.trim() === "" ||
      emailMedico.trim() === "" ||
      contaseña.trim() === ""
    ) {
      setError(true);
      return;
    }
    setError(false);
  };

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        className="container justify-content-center"
      >
        <h1>Alta de Medicos</h1>
        {error ? (
          <Alert className="text-center" variant="danger">
            Todos los campos son obligatorios
          </Alert>
        ) : null}
        <Form.Label>Nombre Completo</Form.Label>
        <Form.Control
          type="text"
          value={nombreMedico}
          onChange={(e) => setNombreMedico(e.target.value)}
          placeholder="Escriba el nombre aqui"
        />
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Especialidad</Form.Label>
          <Form.Control
            as="select"
            value={especialidad}
            onChange={(e) => setEspecialidad(e.target.value)}
          >
            <option hidden selected>
              Elija una especialidad...
            </option>
            <option value="Clinica">Clinica</option>
            <option value="Cardiologia">Cardiologia</option>
            <option value="Oftalmologia">Oftalmologia</option>
            <option value="Dermatologia">Dermatologia</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email@ejemplo.com"
            value={emailMedico}
            onChange={(e) => setEmailMedico(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            value={contaseña}
            onChange={(e) => setContaseña(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Agregar Medico
        </Button>
      </Form>
    </>
  );
};

export default AltaMedico;
