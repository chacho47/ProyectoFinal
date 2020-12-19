import { BrowserRouter, Route, Switch } from "react-router-dom";
import FormPaciente from "./componentes/FormPaciente";
import Home from "./componentes/Home";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/registrarme" component={FormPaciente} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
