import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import estetoscopio from "../img/estetoscopio.png";

const Jumbo = () => {
  return (
    <section className="py-3 asd">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center py-5">
            <img src={estetoscopio} alt="estetoscopio" />
          </div>
          <div className="col-md-8">
            <Jumbotron>
              <h1><lead>Conoce a nuestros profesionales</lead></h1>
              <hr/>
              <p className='mb-3'>
              Brindamos servicios médicos de la más alta calidad gracias a una nutrida cartilla de profesionales médicos con amplia trayectoria.
              </p>
              <p>
                <Button className="btn-warning" variant="primary">
                  Ver profesionales...
                </Button>
              </p>
            </Jumbotron>
          </div>
        </div>
        <hr/>
      </div>
    </section>
  );
};

export default Jumbo;
