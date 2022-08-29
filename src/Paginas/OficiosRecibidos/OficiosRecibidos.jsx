import { RecibidosProvider } from "./Context/RecibidosContext";
import useRecibidos from "./Context/useRecibidos";
import ModalAgregarNuevo from "./ModalAgregarNuevo";

const OficiosRecibidos = () => {
  const { agregarNuevo, setAgregarNuevo } = useRecibidos();
  return (
    <div className="dashboard">
      <div className="titulo">
        <h1>Oficios Recibidos</h1>
        <button onClick={() => setAgregarNuevo(true)}>Agregar Nuevo</button>
      </div>
      <div className="container">
        <table style={{ width: "95%" }}>
          <thead>
            <tr>
              <th style={{ width: "7%" }}>Oficio</th>
              <th style={{ width: "6%" }}>Fecha</th>
              <th style={{ width: "20%" }}>Asunto</th>
              <th style={{ width: "20%" }}>Remitente</th>
              <th style={{ width: "20%" }}>Dependencia</th>
              <th style={{ width: "4%" }}>Acciones</th>
              <th style={{ width: "4%" }}>Oficio</th>
              <th style={{ width: "4%" }}>Respuesta</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hola</td>
              <td>Hola</td>
              <td>Hola</td>
              <td>Hola</td>
              <td>Hola</td>
              <td>
                <button style={{ backgroundColor: "#0b818b" }}>Ver más</button>
              </td>
              <td>
                <button style={{ backgroundColor: "#0b818b" }}>
                  Ver Oficio
                </button>
              </td>
              <td>
                <button style={{ backgroundColor: "#0b818b" }}>
                  Ver Respuesta
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {agregarNuevo ? <ModalAgregarNuevo /> : null}
    </div>
  );
};

export default OficiosRecibidos;
