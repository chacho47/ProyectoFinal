import React from "react";

const Presentacion = () => {
  return (
    <arcticle>
      <div className="container">
        <div className="row text-center shadow p-3 mb-5 bg-white rounded">
          <div className="col-sm-12 col-md-4">
            <p className="lead">Infraestructura</p>
            <hr/>
            <p>
              3 torres de atención a pacientes, 7 pisos de internación, 3 sedes
              de consulta médica. Seguimos creciendo al ritmo de la región, para
              prestar un servicio distinguido
            </p>
          </div>
          <div className="col-sm-12 col-md-4">
            <p className="lead">Innovacion</p>
            <hr/>
            <p>
              Incorporamos permanentemente tecnología de punta para garantizar
              prestaciones de la más alta calidad, a la altura de los mejores
              establecimientos del país.
            </p>
          </div>
          <div className="col-sm-12 col-md-4">
            <p className="lead">Capacitación</p>
            <hr/>
            <p>
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
