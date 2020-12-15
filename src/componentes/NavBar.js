import logo1 from "../img/logo1.png";
import "../estilos/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg mi-nav ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo1} className="mx-2" />
          T&S Medicina
        </a>
        <form>
          <Link
            to={"/registrarme"}
            className="btn btn-sm btn-secondary mx-1 efectoimg"
            type="button"
          >
            Registrarse
          </Link>
          <button
            className="btn btn-primary mx-1 text-light efectoimg"
            type="button"
          >
            Inciar Sesion
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
