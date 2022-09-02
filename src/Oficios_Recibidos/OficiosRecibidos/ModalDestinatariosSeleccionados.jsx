import useRecibidos from "./Context/useRecibidos";
import axios from "axios";
import Swal from "sweetalert2";
const ModalDestinatariosSeleccionados = () => {
  const {
    archivo,
    destinatariosId,
    destinatarios,
    setAgregarNuevo,
    formData,
    setDestinatarios,
    setDestinatariosId,
    setOficios,
  } = useRecibidos();
  const submitData = async () => {
    const form = new FormData();
    form.append("numeroOficio", formData.numeroOficio);
    form.append("asunto", formData.asunto);
    form.append("remitente", formData.remitente);
    form.append("fechaInicio", formData.fechaInicio);
    form.append("fechaTerminacion", formData.fechaTerminacion);
    form.append("dependencia", formData.dependencia);
    form.append("archivo", archivo[0]);
    form.append("destinatarios", destinatariosId);
    form.append("creador", localStorage.getItem("userId"));
    const url = `${process.env.REACT_APP_BACKEND}/oficios/crud/crear-oficio`;
    const res = await axios.post(url, form);
    if (res.status === 200) {
      cancelarCarga();
      Swal.fire("Oficio Creado", "El oficio fue cargado con éxito", "success");
      obtenerOficios()
    } else {
      cancelarCarga();
      Swal.fire(
        "Error",
        "Hubo un problema al cargar el oficio, intente de nuevo, si el error persiste contacte a soporte",
        "error"
      );
    }
  };
  const obtenerOficios = async () => {
    const url = `${process.env.REACT_APP_BACKEND}/control-oficios/obtener-lista-oficios-recibidos`;
    const res = await axios.get(url);
    setOficios(res.data.oficios);
  };

  const validarFormulario = () => {
    if (!formData.numeroOficio) {
      Swal.fire("Que pedo we");
    } else if (!formData.asunto) {
      Swal.fire("Campos Vacíos", "Ingresa el asunto del oficio", "warning");
    } else if (!formData.remitente) {
      Swal.fire("Campos Vacíos", "Ingresa el remitente del oficio", "warning");
    } else if (!formData.dependencia) {
      Swal.fire(
        "Campos Vacíos",
        "Ingresa la dependencia que emitío del oficio",
        "warning"
      );
    } else if (!archivo) {
      Swal.fire("Campos Vacíos", "Suba el PDF del oficio", "warning");
    } else if (destinatarios.length === 0) {
      Swal.fire("Campos Vacíos", "Ingresa uno o más destinatarios", "warning");
    } else {
      submitData();
    }
  };
  const cancelarCarga = () => {
    setAgregarNuevo(false);
    setDestinatarios([]);
    setDestinatariosId([]);
  };
  return (
    <div className="container ">
      <h2 style={{ marginBottom: 20 }}>Destinatarios:</h2>
      <div className="destinatarios-seleccionados">
        {destinatarios.map((destinatario) => (
          <p>{destinatario}</p>
        ))}
      </div>
      <div className="button-container">
        <button onClick={cancelarCarga} className="secondary">
          Cancelar
        </button>
        <button onClick={validarFormulario}>Agregar</button>
      </div>
    </div>
  );
};

export default ModalDestinatariosSeleccionados;
