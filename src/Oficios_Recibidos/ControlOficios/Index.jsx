import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { GeneralProvider } from "./GeneralContext/GeneralContext";
import { RecibidosProvider } from "../OficiosRecibidos/Context/RecibidosContext";
const Index = () => {
  const [data, setData] = useState({ nombre: "", puesto: "" });
  const handleData = async () => {
    const user = localStorage.getItem("userId");
    const url = `${process.env.REACT_APP_BASIC_INFO}/home/obtener-info-usuario?id=${user}`;
    const res = await axios.get(url);
    setData({ nombre: res.data.nombre, puesto: res.data.puesto });
  };
  useEffect(() => {
    handleData();
  }, []);

  return (
    <GeneralProvider>
      <RecibidosProvider>
        <>
          <div className="home">
            <NavBar data={data} />
            <Outlet />
          </div>
        </>
      </RecibidosProvider>
    </GeneralProvider>
  );
};

export default Index;
