import React from "react";
import { FaHospitalAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaHeartbeat } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";

const Presentacion = () => {
  return (
    <arcticle>
      <div className="container">
        <div className="row text-center shadow p-3 mb-5 bg-white rounded">
          <div className="col-sm-12 col-md-4">
            <IconContext.Provider
              value={{ style: { fontSize: "40px", color: "rgb(0, 123, 255)" } }}
            >
              <div>
                <FaHospitalAlt />
              </div>
            </IconContext.Provider>
            <p className="lead">Infraestructura</p>
            <hr />
            <p className='text-muted'>
              3 torres de atención a pacientes, 7 pisos de internación, 3 sedes
              de consulta médica. Seguimos creciendo al ritmo de la región, para
              prestar un servicio distinguido
            </p>
          </div>
          <div className="col-sm-12 col-md-4">
          <IconContext.Provider
              value={{ style: { fontSize: "40px", color: "rgb(0, 123, 255)" } }}
            >
              <div>
                <FaHeartbeat />
              </div>
            </IconContext.Provider>
            <p className="lead">Innovacion</p>
            <hr />
            <p className='text-muted'>
              Incorporamos permanentemente tecnología de punta para garantizar
              prestaciones de la más alta calidad, a la altura de los mejores
              establecimientos del país.
            </p>
          </div>
          <div className="col-sm-12 col-md-4">
          <IconContext.Provider
              value={{ style: { fontSize: "40px", color: "rgb(0, 123, 255)" } }}
            >
              <div>
                <FaBookReader />
              </div>
            </IconContext.Provider>
            <p className="lead">Capacitación</p>
            <hr />
            <p className='text-muted'>
              Nuestro recurso humano recibe capacitación permanente para brindar
              un servicio diferencial, en todos los estadios de atención.
            </p>
          </div>
        </div>
      </div>
    </arcticle>
  );
};

export default Presentacion;
