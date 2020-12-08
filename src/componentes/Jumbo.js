import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";

const Jumbo = () => {
  return (
    <section>
      <div className="container">
        <Jumbotron>
          <h1>Mas de 4 decadas cuidando la salud de los tucumanos</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information, mauricio macri la puta que te pario. Hola soy torombolo y soy un ninio bueno y me gustan los erizos.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
      </div>
    </section>
  );
};

export default Jumbo;
