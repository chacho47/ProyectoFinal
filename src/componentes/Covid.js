import React from "react";
import mapa from "../img/CardDeck/mapa.jpg";
const Covid = (props) => {
  return (
    <section className="bg-dark text-warning mb-0">
      <div className="row ml-5">
        <div className="mr-5 row">
          <h2>Argentina</h2>
          {/* <img src={mapa} alt="mapa argentino" /> */}
        </div>
        <div className="container d-flex justify-content-center text-center">
          <div className="mx-5">
            <h4>Casos</h4>
            <h5>{props.datos.cases}</h5>
          </div>
          <div className="mx-5">
            <h4>Recuperados</h4>
            <h5>{props.datos.recovered}</h5>
          </div>
          <div className="mx-5">
            <h4>Fallecidos</h4>
            <h5>{props.datos.deaths}</h5>
          </div>
          <div className="mx-5">
            <h4>Ultima actualización</h4>
            <h5>{props.datos.last_update}</h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Covid;
