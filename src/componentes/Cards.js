import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import "../estilos/cards.css";
import mano from "../img/CardDeck/mano.jpg";
import traumatologia from "../img/CardDeck/traumatologia.jpg";
import valle from "../img/CardDeck/valle.jpg";
const Cards = () => {
  return (
    <div className="container text-center mb-5">
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={mano} />
          <Card.Body>
            <Card.Title>Cirugía de Mano</Card.Title>
            <Card.Text>Reconstructiva y de miembro superior</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={traumatologia} />
          <Card.Body>
            <Card.Title>Muestras</Card.Title>
            <Card.Text>
              Incorporamos novedosa técnica de extracción de muestras al vacío
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src={valle} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Cards;
