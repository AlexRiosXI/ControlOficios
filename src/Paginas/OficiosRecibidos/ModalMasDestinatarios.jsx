import { useState } from "react";
import useRecibidos from "./Context/useRecibidos";
const ModalMasDestinatarios = () => {
  const { setModalMasDestinatarios } = useRecibidos();
  const [departamento, setDepartamento] = useState(0);
  if (departamento === 0) {
    return (
      <div className="container mas-destinatarios">
        <h2>Agregar Destintarios</h2>
        <button onClick={() => setDepartamento(2)}>
          Departamento Jurídico
        </button>
        <button onClick={() => setDepartamento(1)}>
          Departamento Administrativo
        </button>
        <button onClick={() => setDepartamento(4)}>
          Departamento de Promoción
        </button>
        <button onClick={() => setDepartamento(3)}>
          Departamento de Análisis de Riesgo
        </button>
        <button onClick={() => setDepartamento(5)}>Dirección General</button>
        <button className="secondary" onClick={() => setModalMasDestinatarios(false)}>Regresar</button>
      </div>
    );
  } else {
    return (
      <div className="container mas-destinatarios">
        <h2>Agregar Destintarios departamento {departamento}</h2>

        <button onClick={() => setDepartamento(0)} className="secondary">
          Regresar
        </button>
      </div>
    );
  }
};

export default ModalMasDestinatarios;
