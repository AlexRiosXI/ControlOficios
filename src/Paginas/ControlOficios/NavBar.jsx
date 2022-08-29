import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
const NavBar = ({data}) => {
   
  return (
    <div className="nav-bar">
      <div className="notificaciones">
        <div className="p">3</div>
        <FontAwesomeIcon className="icon" icon={faBell} />
      </div>
      <div className="profile-container">
        <Link to="/Home">
          <div className="img-container"></div>
        </Link>
        <h2>{data.nombre}</h2>
        <p>{data.puesto}</p>
      </div>

      <div className="menu">
        <div className="container">
          <Link to="/Viaticos">
            <div className="option-container">
              <button>Resumen</button>
            </div>
          </Link>
          <Link to="/Viaticos/OficioComision">
            <div className="option-container">
              <button>Oficio Comisión</button>
            </div>
          </Link>
          <Link to="/Viaticos/ComprobacionGasto">
            <div className="option-container">
              <button>Comprobación de Gastos</button>
            </div>
          </Link>
          <Link to="/Viaticos/InformeActividades">
            <div className="option-container">
              <button>Informe de Actividades</button>
            </div>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default NavBar;
