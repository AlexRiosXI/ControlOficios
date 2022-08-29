import "./Sass/index.css"
import { HashRouter, Route, Routes } from "react-router-dom";

import Index from "./Paginas/ControlOficios/Index";
import OficiosRecibidos from "./Paginas/OficiosRecibidos/OficiosRecibidos";
function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/ControlOficios" element={<Index />}>
          <Route index element={<OficiosRecibidos/>}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
