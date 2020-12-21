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
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/registrarme" component={FormPaciente} />
        <Route path="/lista-usuarios" component={AdminUsuario} />
        <Route path="/alta-medico" component={AltaMedico} />
        <Route path="/paciente-turnos" component={PacienteTurnos} />
        <Route path="/medico-turnos" component={MedicoTurnos} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
