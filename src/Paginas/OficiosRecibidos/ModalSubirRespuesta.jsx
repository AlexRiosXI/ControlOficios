import useRecibidos from "./Context/useRecibidos";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

const ModalSubirRespuesta = () => {
  const [respuesta, setRespuesta] = useState(false);
  const subirRespuesta = async () => {
    if (respuesta) {
      const url = `${process.env.REACT_APP_BACKEND}/oficios-recibidos/subir-respuesta`;
      const form = new FormData();
      form.append("archivo", respuesta[0]);
      form.append("id", respuestaId.id);
      form.append("dependencia", respuestaId.dependencia);
      const res = await axios.post(url, form);
      console.log(res);
    }else{
        Swal.fire("Error","Seleccione un archivo primero","warning")
    }
  };
  const { setStatusModalSubirRespuesta,respuestaId } = useRecibidos();
  return (
    <div className="modal">
      <div className="container">
        <h3 style={{ marginBottom: 10 }}>Subir Respuesta:</h3>
        <input type="file" onChange={e => setRespuesta(e.target.files)} />

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: 20,
          }}
          className="button-container"
        >
          <button
            className="secondary"
            onClick={() => setStatusModalSubirRespuesta(false)}
          >
            Cancelar
          </button>
          <button onClick={subirRespuesta}>Subir</button>
        </div>
      </div>
    </div>
  );
};

export default ModalSubirRespuesta;
