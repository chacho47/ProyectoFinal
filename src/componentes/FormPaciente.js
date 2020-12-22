import React, { Fragment } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormPaciente = () => {
  return (
    <Fragment>
      <section>
        <div className="dflex justify-content-center row">
          <div className="mx-5">
            <h1>Registrarme</h1>
            <p>
              Tenga en cuenta que para poder registrarse en el portal debe ser
              <br></br>
              paciente de nuestra institución y debemos tener correctamente
              cargada
              <br></br>
              su cuenta de correo en el sistema. Para ser registrado como
              paciente o<br></br>
              cualquier consulta comuníquese al teléfono 297-4061001.
            </p>
          </div>
          <div>
            <Form className="mx-5">
              <Form.Label className="text-muted">Tipo de Documento*</Form.Label>
              <Form.Control as="select">
                <option>DNI</option>
                <option>LE</option>
                <option>LC</option>
                <option>CI</option>
                <option>Pasaporte</option>
              </Form.Control>
              <Form.Group controlId="formBasicEmail">
                <Form.Label className="text-muted">Email</Form.Label>
                <Form.Control type="email" placeholder="Email@ejemplo.com" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Contraseña" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Repita Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Repita Contraseña" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button className="btn-info" variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default FormPaciente;
