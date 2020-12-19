import React, { Fragment, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./Slider";
import Jumbo from "./Jumbo";
import Presentacion from "./Presentacion";
import Cards from "./Cards";
import Covid from "./Covid";

const Home = () => {
  // State
  const [datos, setDatos] = useState({});
  useEffect(() => {
    consultarAPI();
  }, []);
  const consultarAPI = async () => {
    const respuesta = await fetch("https://covid19-api.org/api/status");
    const resultado = await respuesta.json();
    const datosArgentina = resultado.find(
      (countryData) => countryData.country === "AR"
    );
    setDatos(datosArgentina);
  };
  return (
    <Fragment>
      <Covid datos={datos} />
      <Slider />
      <Presentacion />
      <Jumbo />
      <Cards />
      <div>
        <h1>PACIENTES</h1>
      </div>
    </Fragment>
  );
};

export default Home;
