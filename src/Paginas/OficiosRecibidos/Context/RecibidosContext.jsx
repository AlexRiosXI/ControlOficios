import { createContext } from "react";
import { useState } from "react";
const RecibidosContext = createContext();

const RecibidosProvider = ({ children }) => {
  const [formData, setFormData] = useState({archivo:false,asunto:false,dependencia:false,numeroOficio:false,remitente:false});
  const [agregarNuevo, setAgregarNuevo] = useState(false);
  const [destinatarios, setDestinatarios] = useState([]);
  const [modalMasDestinatarios, setModalMasDestinatarios] = useState(false);
  const [modalDestinatarios, setModalDestinatarios] = useState(false);
  return (
    <RecibidosContext.Provider
      value={{
        agregarNuevo,
        setAgregarNuevo,
        destinatarios,
        setDestinatarios,
        modalDestinatarios,
        setModalDestinatarios,
        modalMasDestinatarios,
        setModalMasDestinatarios,
        formData,
        setFormData,
      }}
    >
      {children}
    </RecibidosContext.Provider>
  );
};

export { RecibidosProvider };

export default RecibidosContext;
