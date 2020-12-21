import React, { useEffect, useState } from "react";
import { Table, FormCheck } from "react-bootstrap";

const AdminUsuario = () => {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/pacientes")
      .then((res) => res.json())
      .then((res) => {
        setUsuarios(res.filter((user) => user.nombre));
      });
  }, []);

  const handleChange = event => {
    console.log(event.target.checked)
    const {id, checked}= event.target;
    fetch(`http://localhost:4000/pacientes/${id}`,{
      method: 'PUT',
      body: `estado: ${checked}`
    })
  }

  return (
    <div>
      <h1>Admin Usuario</h1>
      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Nonbre</th>
              <th>Medico</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(({ nombre, _id, medico, estado }, index) => (
              <tr key={_id}>
                <td>{index}</td>
                <td>{nombre}</td>
                <td>{medico}</td>
                <td>
                  <FormCheck checked={estado} id={_id} type="switch" onChange={handleChange}/>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default AdminUsuario;
