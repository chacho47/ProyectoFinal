import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import "./App.css";
import FormPaciente from "./componentes/FormPaciente";
import Home from "./componentes/Home";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/registrarme" component={FormPaciente} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
