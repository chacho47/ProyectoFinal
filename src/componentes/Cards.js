import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../estilos/cards.css";
import mano from "../img/CardDeck/mano.jpg";
import traumatologia from "../img/CardDeck/traumatologia.jpg";
import valle from "../img/CardDeck/valle.jpg";

const Cards = () => {
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
            <div className="col-lg-4 col-md-6 text-center py-2">
              <Card className="shadow" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={mano} />
                <Card.Body>
                  <Card.Text>
                    Cirugía de Mano, reconstructiva y de miembro superior
                  </Card.Text>
                  <Button variant="warning">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 text-center py-2">
              <Card className="shadow" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={valle} />
                <Card.Body>
                  <Card.Text>Residencias Médicas 2020</Card.Text>
                  <Button variant="warning">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4 col-md-6 text-center py-2">
              <Card className="shadow" style={{ width: "18rem" }}>
                <Card.Img variant="top" src={traumatologia} />
                <Card.Body>
                  <Card.Text>
                    Incorporamos novedosa técnica de extracción de muestras al
                    vacío
                  </Card.Text>
                  <Button variant="warning">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
