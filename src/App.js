import "./Sass/index.css"
import { HashRouter, Route, Routes } from "react-router-dom";

import Index from "./Paginas/ControlOficios/Index";
import * as PanelOficiosRecibidos from "./Oficios_Recibidos/ControlOficios/Index" 
import OficiosRecibidos from "./Paginas/OficiosRecibidos/OficiosRecibidos";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/ControlOficios" element={<Index />}>
          <Route index element={<OficiosRecibidos/>}/>
        </Route>
        <Route path="/Control-Oficios/Oficios-Recibidos" element={<PanelOficiosRecibidos/>}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
