import axios from "axios";
import { useState, useEffect } from "react";
import useRecibidos from "./Context/useRecibidos";
import ModalDestinatariosSeleccionados from "./ModalDestinatariosSeleccionados";
const ModalDestinatarios = () => {
  function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
      return ele != value;
    });
  }

  const {
    destinatarios,
    setDestinatarios,
    setModalMasDestinatarios,
    setAgregarNuevo,
    setModalDestinatarios,
  } = useRecibidos();

  const handleModalDestinatarios = () => {
    setAgregarNuevo(true);
    setModalDestinatarios(false);
  };
  const [frecuentes, setFrecuentes] = useState([]);
  const obtenerDestinatariosFrecuentes = async () => {
    const url = `${process.env.REACT_APP_BACKEND}/generales/obtener-jefes`;
    const res = await axios.get(url);
    setFrecuentes(res.data.jefes);
  };
  const handleDestinatario = (state, id) => {
    if (state === true) {
      setDestinatarios([...destinatarios, id]);
    } else {
      const resultado = arrayRemove(destinatarios, id);
      setDestinatarios(resultado);
    }
  };

  useEffect(() => {
    obtenerDestinatariosFrecuentes();
  }, []);

  return (
    <div className="container modal-agregar-destinatarios">
      <h2 style={{ marginBottom: 20 }}>Agregar Destinatarios</h2>
      {frecuentes.map((frecuente) => (
        <div className="checkbox-container" key={frecuente.idEmpleado}>
          <input
            type="checkbox"
            id={`dest${frecuente.idEmpleado}`}
            onChange={(e) =>
              handleDestinatario(e.target.checked, frecuente.nombre)
            }
          />
          <label htmlFor={`dest${frecuente.idEmpleado}`}>
            {frecuente.nombre}
          </label>
        </div>
      ))}

      <button style={{width:"100%", marginTop:20}} onClick={() => setModalMasDestinatarios(true)}>Ver Más</button>
    </div>
  );
};

export default ModalDestinatarios;
