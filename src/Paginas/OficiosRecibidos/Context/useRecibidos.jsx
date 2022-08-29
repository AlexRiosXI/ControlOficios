import { useContext } from "react";
import RecibidosContext from "./RecibidosContext";
const useRecibidos = () => {
  return useContext(RecibidosContext);
};

export default useRecibidos;

