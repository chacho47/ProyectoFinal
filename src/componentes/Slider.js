import React from "react";
import carrusel1 from "../img/carrusel1.jpg";
import carrusel2 from "../img/carrusel2.jpg";
import carrusel3 from "../img/carrusel3.jpg";

const Slider = () => {
  return (
    <section>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
          ></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={carrusel1}
              className="d-block w-100"
              alt="imagen"
              
            />
          </div>
          <div className="carousel-item">
            <img
              src={carrusel2}
              className="d-block w-100"
              alt="imagen"
              
            />
            
          </div>
          <div className="carousel-item">
            <img
              src={carrusel3}
              className="d-block w-100"
              alt="imagen"
              
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden"></span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden"></span>
        </a>
      </div>
    </section>
  );
};

export default Slider;
