import { createContext } from "react";
import { useState } from "react";
const RecibidosContext = createContext();

const RecibidosProvider = ({ children }) => {
  const [agregarNuevo, setAgregarNuevo] = useState(false);
  return (
    <RecibidosContext.Provider value={{ agregarNuevo, setAgregarNuevo }}>
      {children}
    </RecibidosContext.Provider>
  );
};

export { RecibidosProvider };

export default RecibidosContext;
