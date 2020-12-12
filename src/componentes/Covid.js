import React from "react";

const Covid = (props) => {
  return (
    <section className="bg-dark d-flex justify-content-center mb-0">
      <div className="row d-flex text-warning">
        <div className="mr-5 text-center">
          <h2>Argentina</h2>
          <h5>Covid-19</h5>
        </div>
        <div className="d-flex text-center">
          <div className="mx-5 text-warning">
            <h4>Infectados</h4>
            <h5>{props.datos.cases}</h5>
          </div>
          <div className="mx-5 text-success">
            <h4>Recuperados</h4>
            <h5>{props.datos.recovered}</h5>
          </div>
          <div className="mx-5 text-danger">
            <h4>Fallecidos</h4>
            <h5>{props.datos.deaths}</h5>
          </div>
          <div className="mx-5 text-white">
            <h4>Ultima actualización</h4>
            <h5>{props.datos.last_update}</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Covid;
