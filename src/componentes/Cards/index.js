import React from "react";
import "./style.css";
import mano from "../../img/CardDeck/mano.jpg";
import traumatologia from "../../img/CardDeck/traumatologia.jpg";
import valle from "../../img/CardDeck/valle.jpg";
import Card from "./Card.js";

const Cards = () => {
 
  const arregloCards = [
    {
      id: 1,
      texto: "Cirugía de Mano, reconstructiva y de miembro superior",
      img: mano,
    },
    {
      id: 2,
      texto: "Residencias Médicas 2020",
      img: valle,
    },
    {
      id: 3,
      texto: "Incorporamos novedosa técnica de extracción de muestras al vacío",
      img: traumatologia,
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="novedades">
          <p>
            <b>Novedades</b>
          </p>
        </div>
        <a href="#" className="vernovedades">
          Ver novedades »
        </a>
        <div className="container">
          <div className="row justify-content-center mb-5">
            {arregloCards.map(Card)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
