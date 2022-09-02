import axios from "axios";
import { useState, useEffect } from "react";
import useRecibidos from "./Context/useRecibidos";
const ModalMasDestinatarios = () => {
  const {
    destinatarios,
    setDestinatarios,
    setModalMasDestinatarios,
    destinatariosId,
    setDestinatariosId
  } = useRecibidos();
  function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
      return ele != value;
    });
  }

  const [departamento, setDepartamento] = useState(0);
  const [empleados, setEmpleados] = useState([]);
  const handleEmpleadosPorDepartamento = async () => {
    const url = `${process.env.REACT_APP_BACKEND}/generales/obtener-emppleados-por-departamento?id=${departamento}`;
    const res = await axios.get(url);
    setEmpleados(res.data.empleados);
  };

  const handleDestinatario = (state, nombre,id) => {
    if (state === true) {
      setDestinatarios([...destinatarios, nombre]);
      setDestinatariosId([...destinatariosId, id]);
      
    } else {
      const resultado = arrayRemove(destinatarios, nombre);
      const resultado2 = arrayRemove(destinatariosId, id);
      setDestinatarios(resultado);
      setDestinatariosId(resultado2);
    }

  };
  useEffect(() => {
    if (departamento !== 0) {
      handleEmpleadosPorDepartamento();
    }
  }, [departamento]);

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
        <button
          className="secondary"
          onClick={() => setModalMasDestinatarios(false)}
        >
          Regresar
        </button>
      </div>
    );
  } else {
    return (
      <div className="container mas-destinatarios">
        <h2>Agregar Destintarios departamento</h2>

        <div className="empleados">
          {empleados.map((empleado) => (
            <div className="checkbox-container" key={empleado.idEmpleado}>
              <input
                type="checkbox"
                id={`dest${empleado.idEmpleado}`}
                onChange={(e) =>
                  handleDestinatario(e.target.checked, empleado.nombre,empleado.idEmpleado)
                }
              />
              <label htmlFor={`dest${empleado.idEmpleado}`}>
                {empleado.nombre}
              </label>
            </div>
          ))}
        </div>

        <button onClick={() => setDepartamento(0)} className="secondary">
          Regresar
        </button>
      </div>
    );
  }
};

export default ModalMasDestinatarios;
