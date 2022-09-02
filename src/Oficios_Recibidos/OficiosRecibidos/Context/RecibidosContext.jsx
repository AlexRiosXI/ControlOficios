import { createContext } from "react";
import { useState } from "react";
const RecibidosContext = createContext();

const RecibidosProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    archivo: false,
    asunto: false,
    fechaInicio: false,
    fechaTerminacion: false,
    dependencia: false,
    numeroOficio: false,
    remitente: false,
  });
  const [agregarNuevo, setAgregarNuevo] = useState(false);
  const [destinatarios, setDestinatarios] = useState([]);
  const [oficios, setOficios] = useState([]);
  const [destinatariosId, setDestinatariosId] = useState([]);
  const [destinatariosSnippet, setDestinatariosSnippet] = useState([]);
  const [modalMasDestinatarios, setModalMasDestinatarios] = useState(false);
  const [modalDestinatarios, setModalDestinatarios] = useState(false);
  const [archivo, setArchivo] = useState(false);
  const [statusModalSubirRespuesta, setStatusModalSubirRespuesta] =
    useState(false);

  const [respuestaId, setRespuestaId] = useState();
  return (
    <RecibidosContext.Provider
      value={{
        agregarNuevo,
        setAgregarNuevo,
        destinatarios,
        setDestinatarios,
        modalDestinatarios,
        oficios,
        setOficios,
        setModalDestinatarios,
        modalMasDestinatarios,
        setModalMasDestinatarios,
        formData,
        setFormData,
        destinatariosSnippet,
        setDestinatariosSnippet,
        destinatariosId,
        setDestinatariosId,
        archivo,
        setArchivo,
        statusModalSubirRespuesta,
        setStatusModalSubirRespuesta,
        respuestaId,
        setRespuestaId,
      }}
    >
      {children}
    </RecibidosContext.Provider>
  );
};

export { RecibidosProvider };

export default RecibidosContext;
