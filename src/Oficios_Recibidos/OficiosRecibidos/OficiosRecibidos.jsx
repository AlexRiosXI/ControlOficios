import { RecibidosProvider } from "./Context/RecibidosContext";
import useRecibidos from "./Context/useRecibidos";
import Destinatarios from "./Destinatarios";
import { saveAs } from "file-saver";
import { useEffect, useState } from "react";
import axios from "axios";
import ModalSubirRespuesta from "./ModalSubirRespuesta";

const OficiosRecibidos = () => {
  const {
    agregarNuevo,
    setAgregarNuevo,
    oficios,
    setOficios,
    setStatusModalSubirRespuesta,
    statusModalSubirRespuesta,
    setRespuestaId,
  } = useRecibidos();

  const obtenerOficios = async () => {
    const url = `${process.env.REACT_APP_BACKEND}/control-oficios/obtener-lista-oficios-recibidos`;
    const res = await axios.get(url);
    setOficios(res.data.oficios);
  };

  const handleSubirRespuesta = (id, dependencia) => {
    setStatusModalSubirRespuesta(true);

    setRespuestaId({ id, dependencia });
  };

  useEffect(() => {
    obtenerOficios();
  }, []);

  const descargarOficio = async (ruta, numero, dependencia) => {
    const url = `${process.env.REACT_APP_BACKEND}/descargar`;
    const form = new FormData();
    form.append("ruta", ruta);
    const nombreArchivo = `${numero.replace("/", "-")}_${dependencia}`;
    const res = await axios.post(url, form, { responseType: "blob" });
    saveAs(res.data, `${nombreArchivo}.pdf`);
  };

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
              <th style={{ width: "18%" }}>Asunto</th>
              <th style={{ width: "18%" }}>Remitente</th>
              <th style={{ width: "18%" }}>Dependencia</th>
              <th style={{ width: "4%" }}>Acciones</th>
              <th style={{ width: "4%" }}>Oficio</th>
              <th style={{ width: "12%" }}>Respuesta</th>
            </tr>
          </thead>
          <tbody>
            {oficios.map((oficio) => (
              <tr key={oficio.id}>
                <td>{oficio.numOficio}</td>
                <td>{oficio.fecha}</td>
                <td>{oficio.asunto}</td>
                <td>{oficio.remitente}</td>
                <td>{oficio.dependencia}</td>
                <td>
                  <button
                    style={{ backgroundColor: "#1B2A41" }}
                    onClick={obtenerOficios}
                  >
                    Ver más
                  </button>
                </td>
                <td>
                  <button
                    onClick={() =>
                      descargarOficio(
                        oficio.ruta,
                        oficio.numOficio,
                        oficio.remitente
                      )
                    }
                    style={{ backgroundColor: "#0b818b" }}
                  >
                    Ver Oficio
                  </button>
                </td>
                <td style={{ display: "flex", justifyContent: "space-evenly" }}>
                  {oficio.respuesta === "" ? (
                    <button
                      onClick={() => handleSubirRespuesta(oficio.id,oficio.dependencia)}
                      style={{ backgroundColor: "#CEA2AC", width: "100%" }}
                    >
                      Subir
                    </button>
                  ) : (
                    <button
                      style={{ backgroundColor: "#A675A1", width: "100%" }}
                      onClick={() =>
                        descargarOficio(
                          oficio.respuesta,
                          oficio.numOficio,
                          oficio.remitente
                        )
                      }
                    >
                      Descargar
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {agregarNuevo ? <Destinatarios /> : null}
      {statusModalSubirRespuesta ? <ModalSubirRespuesta /> : null}
    </div>
  );
};

export default OficiosRecibidos;
