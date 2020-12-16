import React, { Fragment, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer";
import Navbar from "./NavBar";
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
    console.log(respuesta);
    console.log(resultado[9]);
    setDatos(resultado[9]);
  };
  return (
    <Fragment>
      <Navbar />
      <Covid datos={datos} />
      <Slider />
      <Presentacion />
      <Jumbo />
      <Cards />
      <Footer />
      <div>
        <h1>PACIENTES</h1>
    </div>
    </Fragment>
  );
};

export default Home;
