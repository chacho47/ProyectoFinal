import React from "react";

const Covid = (props) => {
  return (
    <section className="bg-dark py-1">
      <div className="container justify-content-center">
        <div className="text-light">Datos Covid Argentina:</div>
        <div class="row">
          <div className="col-log-3 col-md-3 col-sm-12 text-warning">
            <h3>Infectados:</h3>
            <p><strong>{props.datos?.cases}</strong></p>
          </div>
          <div className="col-log-3 col-md-3 col-sm-12 text-success">
            <h3>Recuperados:</h3>
            <p><strong>{props.datos?.recovered}</strong></p>
          </div>
          <div className="col-log-3 col-md-3 col-sm-12 text-danger">
            <h3>Fallecidos:</h3>
            <p><strong>{props.datos?.deaths}</strong></p>
          </div>
          <div className="col-log-3 col-md-3 col-sm-12 text-light">
            <h3>Actualizado:</h3>
            <p><strong>{props.datos?.last_update}</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Covid;