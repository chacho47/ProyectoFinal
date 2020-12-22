import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const PacienteTurnos = () => {
  //states
  const [nombrePaciente, setNombrePaciente] = useState("");
  const [emailPaciente, setEmailPaciente] = useState("");
  const [especialidad, setEspecialidad] = useState("");
  const [nombreMedico, setNombreMedico] = useState("");
  const [consulta, setConsulta] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e)=> {
      e.preventDefault();
      
      //validation
      if (
          nombrePaciente.trim() === "" ||
          emailPaciente.trim() === "" ||
          especialidad.trim() === "" ||
          nombreMedico.trim()=== ""){
              setError(true)
              return;
          }
          setError(false);
  }

  return (
    <section className="container mx-auto">
      <div className="row">
        <div className="col-lg-4 py-3 border my-3 shadow">
          <Form onSubmit={handleSubmit}>
            <h1>Datos del Paciente</h1>
            {error ? <Alert variant="danger">Todos los campos son obligatorios</Alert>: null }
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre y apellido:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Escriba su nombre y apellido aqui"
                value={nombrePaciente}
                onChange={(e) => setNombrePaciente(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Correo electronico:</Form.Label>
              <Form.Control 
              type="email" 
              placeholder="nombre@ejemplo.com" 
              value={emailPaciente}
              onChange = {(e)=> setEmailPaciente(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Elija especialidad:</Form.Label>
              <Form.Control 
                as="select"
                value={especialidad}
                onChange = {(e)=> setEspecialidad(e.target.value)}>
                <option hidden selected>
                  Elija una especialidad
                </option>
                <option>Clinica</option>
                <option>Cardiologia</option>
                <option>Oftalmologia</option>
                <option>Dermatologia</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Elija Medico:</Form.Label>
              <Form.Control 
              as="select"
              value={nombreMedico}
                onChange = {(e)=> setNombreMedico(e.target.value)}>
                    <option hidden selected>
                  Elija un medico
                </option>
                <option>Dr. Lopez Rosetti</option>
                <option>Dr. Favaloro</option>
                <option>Dr. Hibbert</option>
                <option>Dr. Rivera</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>
                Escriba su motivo de su consulta brevemente:
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Por ejemplo: Falta de aire por esfuerzos leves."
                value={consulta}
             onChange = {(e)=> setConsulta(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary"
             type="submit"
             >
              Solicitar Turno
            </Button>
          </Form>
        </div>

        <div className="col-lg-4 py-3">
          <h1>Sus Turnos:</h1>
        </div>
      </div>
    </section>
  );
};

export default PacienteTurnos;
