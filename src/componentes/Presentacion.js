import React from "react";
import { FaHospitalAlt, FaHeartbeat, FaBookReader } from "react-icons/fa";
import { IconContext } from "react-icons";

const Presentacion = () => {
  return (
    <arcticle>
      <div className="container">
        <div className="row text-center shadow p-3 my-5 bg-white rounded">
          <div className="col-sm-12 col-md-4">
            <IconContext.Provider
              value={{ style: { fontSize: "40px", color: "#00a8b3" } }}
            >
              <div>
                <FaHospitalAlt />
              </div>
            </IconContext.Provider>
            <p className="lead">Infraestructura</p>
            <hr />
            <p className="text-muted">
              3 torres de atención a pacientes, 7 pisos de internación, 3 sedes
              de consulta médica. Seguimos creciendo al ritmo de la región, para
              prestar un servicio distinguido
            </p>
          </div>
          <div className="col-sm-12 col-md-4">
            <IconContext.Provider
              value={{ style: { fontSize: "40px", color: "#00a8b3" } }}
            >
              <div>
                <FaHeartbeat />
              </div>
            </IconContext.Provider>
            <p className="lead">Innovacion</p>
            <hr />
            <p className="text-muted">
              Incorporamos permanentemente tecnología de punta para garantizar
              prestaciones de la más alta calidad, a la altura de los mejores
              establecimientos del país.
            </p>
          </div>
          <div className="col-sm-12 col-md-4">
            <IconContext.Provider
              value={{ style: { fontSize: "40px", color: "#00a8b3" } }}
            >
              <div>
                <FaBookReader />
              </div>
            </IconContext.Provider>
            <p className="lead">Capacitación</p>
            <hr />
            <p className="text-muted">
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
