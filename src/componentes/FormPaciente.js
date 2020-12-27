import React, { Fragment, useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormPaciente = () => {
  const [state, setState] = useState({
    data: {
      dni: "",
      numero: "",
      email: "",
      contrasena: "",
      repitaContrasena: "",
    },
  });

  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if(!form.checkValidity()) return;
    postRegister();
    setState({
      data: {
        dni: "",
        numero: "",
        email: "",
        contrasena: "",
        repitaContrasena: "",
      },
    });
  };

  const postRegister = async () => {
    const response = await fetch("http://localhost:4000/pacientes", {
      method: "POST",
      body: JSON.stringify(state.data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await response.json();
  };

  const handleOnChange = (e) => {
    let name = e.target.name;
    let newData = state.data;
    newData[name] = e.target.value;
    setState({ data: newData });
  };

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
            <Form className="mx-5" ref={formRef}>
              <Form.Label className="text-muted">Tipo de Documento*</Form.Label>
              <Form.Control
                value={state.data.dni}
                onChange={handleOnChange}
                className="text-muted"
                as="select"
                name="dni"
                required
              >
                <option hidden selected>
                  Seleccione tipo...
                </option>
                <option>DNI</option>
                <option>LE</option>
                <option>LC</option>
                <option>CI</option>
                <option>Pasaporte</option>
              </Form.Control>
              <Form.Group>
                <Form.Label className="text-muted">
                  Numero de Documento
                </Form.Label>
                <Form.Control
                  value={state.data.numero}
                  onChange={handleOnChange}
                  type="text"
                  placeholder="37497753"
                  name="numero"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="text-muted">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email@ejemplo.com"
                  controlId="formBasicEmail"
                  value={state.data.email}
                  onChange={handleOnChange}
                  name="email"
                  required
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Contraseña"
                  controlId="formBasicPassword"
                  value={state.data.contrasena}
                  onChange={handleOnChange}
                  name="contrasena"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Repita Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Repita Contraseña"
                  name="repitaContrasena"
                  value={state.data.repitaContrasena}
                  onChange={handleOnChange}
                  required
                />
              </Form.Group>
              <Button
                onClick={handleSubmit}
                className="btn-info"
                variant="primary"
                type="submit"
              >
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
