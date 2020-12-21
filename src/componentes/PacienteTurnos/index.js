import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const PacienteTurnos = () => {
  return (
    <section className="container mx-auto">
      <div className="row">
        <div className="col-lg-4 py-3 border my-3 shadow">
          <Form>
            <h1>Datos del Paciente</h1>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre y apellido:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Escriba su nombre y apellido aqui"
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Correo electronico:</Form.Label>
              <Form.Control type="email" placeholder="nombre@ejemplo.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Elija especialidad:</Form.Label>
              <Form.Control as="select">
                <option>Clinica</option>
                <option>Cardiologia</option>
                <option>Oftalmologia</option>
                <option>Dermatologia</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Elija Medico:</Form.Label>
              <Form.Control as="select">
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
              />
            </Form.Group>
            <Button variant="primary" type="submit">
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
