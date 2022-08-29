import useRecibidos from "./Context/useRecibidos";

const ModalAgregarNuevo = () => {
    const {setAgregarNuevo} = useRecibidos()
  return (
    <div className="modal">
      <div className="container">
        <h2>Agregar Nuevo Oficio</h2>
        <div className="input-container">
            <p>Número de Oficio:</p>
            <input type="text" />
            <p>Asunto:</p>
            <input type="text" />
            <p>Dirigido a:</p>
            <input type="text" />
            <p>Remitente</p>
            <input type="text" />
            <p>Dependencia</p>
            <input type="text" />
        </div>
        <div className="button-container" style={{gap:"10px",display:"flex"}}>
            <button onClick={() => setAgregarNuevo(false)} className="secondary">Cancelar</button>
            <button>Agregar</button>
            
        </div>
      </div>
    </div>
  );
};

export default ModalAgregarNuevo;
