import React, { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./componentes/Footer";
import Navbar from "./componentes/NavBar";
import Slider from "./componentes/Slider";
import Jumbo from "./componentes/Jumbo";
import Presentacion from "./componentes/Presentacion";
import Cards from "./componentes/Cards";
import Covid from "./componentes/Covid";
import FormPaciente from "./componentes/FormPaciente";

function App() {
  // States
  const [datos, setDatos] = useState({});

  useEffect (() => {
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
    <div>
      <Navbar />
      <Covid datos={datos} />
      <Slider />
      <br />
      <Presentacion />
      <Jumbo />
      <Cards />
      <Footer />
      <FormPaciente />
    </div>
  );
}

export default App;
