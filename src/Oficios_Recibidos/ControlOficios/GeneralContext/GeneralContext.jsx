import { createContext } from "react";
import { useState } from "react";
const GeneralContext = createContext();

const GeneralProvider = ({ children }) => {
  return (
    <GeneralContext.Provider value={{}}>{children}</GeneralContext.Provider>
  );
};

export { GeneralProvider };

export default GeneralContext;
