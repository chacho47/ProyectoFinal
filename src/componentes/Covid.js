import React from "react";
import mapa from "../img/CardDeck/mapa.jpg";
const Covid = (props) => {
  return (
    <section className="bg-dark mb-0">
      <div className="row ml-5 text-warning">
        <div className="mr-5 text-center">
          <h2>Argentina</h2>
          <h5>Covid-19</h5>
          {/* <img src={mapa} alt="mapa argentino" /> */}
        </div>
        <div className="container d-flex justify-content-center text-center">
          <div className="mx-5 text-warning">
            <h4>Infectados</h4>
            <h5>{props.datos.cases}</h5>
          </div>
          <div className="mx-5 text-success">
            <h4>Recuperados</h4>
            <h5>{props.datos.recovered}</h5>
          </div>
          <div className="mx-5 text-secondary">
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
