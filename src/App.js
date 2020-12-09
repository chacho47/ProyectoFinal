import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./componentes/Footer";
import Navbar from "./componentes/NavBar";
import Slider from "./componentes/Slider";
import Jumbo from './componentes/Jumbo';
import Presentacion from './componentes/Presentacion';

function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Jumbo />
      <Presentacion />
      <Footer />
    </div>
  );
}

export default App;
