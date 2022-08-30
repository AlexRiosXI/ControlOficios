import useRecibidos from "./Context/useRecibidos";
import ModalDestinatarios from "./ModalDestinatarios";
import ModalDestinatariosSeleccionados from "./ModalDestinatariosSeleccionados";
import ModalMasDestinatarios from "./ModalMasDestinatarios";
import ModalAgregarNuevo from "./ModalAgregarNuevo";

const Destinatarios = () => {
  const { modalMasDestinatarios, agregarNuevo } = useRecibidos();
  return (
    <div className="modal" style={{ justifyContent: "space-evenly" }}>
      {agregarNuevo ? <ModalAgregarNuevo /> : null}
      {modalMasDestinatarios ? (
        <ModalMasDestinatarios />
      ) : (
        <ModalDestinatarios />
      )}

      <ModalDestinatariosSeleccionados />
    </div>
  );
};

export default Destinatarios;
