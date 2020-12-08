import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./componentes/Footer";
import Navbar from "./componentes/NavBar";
import Slider from "./componentes/Slider";

function App() {
  return (
    <div>
      <Navbar />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;
