import useRecibidos from "./Context/useRecibidos";
import axios from "axios";
const ModalDestinatariosSeleccionados = () => {
  const { destinatarios,setAgregarNuevo,formData } = useRecibidos();
  const submitData = async () => {
    const form = new FormData()
    form.append("numeroOficio",formData.numeroOficio)
    form.append("asunto",formData.asunto)
    form.append("remitente",formData.remitente)
    form.append("dependencia",formData.dependencia)
    form.append("archivo",formData.archivo)
    form.append("destinatarios",destinatarios)
    console.log(form)
    const url = `${process.env.REACT_APP_BACKEND}/oficios/crud/crear-oficio`
    const res = await axios.post(url,form)
    console.log(res)
    
  }
  return (
    <div className="container ">
      <h2 style={{marginBottom:20}}>Destinatarios:</h2>
      <div className="destinatarios-seleccionados">
        {destinatarios.map((destinatario) => (
          <p>{destinatario}</p>
        ))}
      </div>
      <div className="button-container">
        <button onClick={() => setAgregarNuevo(false)} className="secondary">
          Cancelar
        </button>
        <button onClick={submitData}>Agregar</button>
      </div>
    </div>
  );
};

export default ModalDestinatariosSeleccionados;
