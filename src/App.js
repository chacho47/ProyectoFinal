import { useState, useEffect } from "react";
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
  const [turno, setTurno] = useState([]);
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    //llamar a la api
    obtenerUsuario();
  }, []);

  const obtenerUsuario = async () => {
    const token = localStorage.getItem("token");
    const tokenMedico = localStorage.getItem("tokenMedico");
    if (token) {
      let res = await fetch("http://localhost:4000/pacientes/login", {
        headers: {
          token
        }
      });
      res = await res.json();
      setUsuario(res);
      console.log(res)
        consultarAPI(res.username);
      
    } else if (tokenMedico) {
      let res = await fetch("http://localhost:4000/medicos/login", {
        headers: {
          token
        }
      });
      res = await res.json();
      setUsuario(res);
      console.log(res)
    }
    
    
  }

  const consultarAPI = async (username) => {
    try {
      //operacion GET
      const respuesta = await fetch("http://localhost:4000/turnos?email="+ username);
      
      const resultado = await respuesta.json();
      
      
      setTurno(resultado);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <BrowserRouter>
      <Header usuario={usuario} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/registrarme" component={FormPaciente} />
        <Route path="/lista-usuarios" component={AdminUsuario} />
        <Route path="/altaMedico" component={AltaMedico} />
        <Route
          path="/paciente-turnos"
          component={() => <PacienteTurnos turno={turno} paciente={usuario} />}
        />
        <Route
          path="/medico-turnos"
          component={() => <MedicoTurnos turno={turno} />}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
