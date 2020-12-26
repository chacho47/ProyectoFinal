import {useState, useEffect} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormPaciente from "./componentes/FormPaciente";
import Home from "./componentes/Home";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import AdminUsuario from "./componentes/AdminUsuario";
import PacienteTurnos from "./componentes/PacienteTurnos";
import MedicoTurnos from "./componentes/MedicoTurnos";
import AltaMedico from "./componentes/AltaMedico";

function App() {

  const [turno, setTurno]=useState([]);
 
  useEffect(()=>{
    //llamar a la api
    consultarAPI();
  },[]);

  const consultarAPI = async () =>{
    try {
      //operacion GET
      const respuesta = await fetch('http://localhost:4000/turnos')
      // console.log(respuesta);
      const resultado = await respuesta.json();
      // console.log(resultado);
      //guardar datos en el state
      setTurno(resultado);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/registrarme" component={FormPaciente} />
        <Route path="/lista-usuarios" component={AdminUsuario}/>
        <Route path="/altaMedico" component={AltaMedico}/>
        <Route path="/paciente-turnos" component={ ()=> <PacienteTurnos turno={turno}/>} />
        <Route path="/medico-turnos" component={ ()=> <MedicoTurnos turno={turno}/>}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
