import useRecibidos from "./Context/useRecibidos";

const ModalAgregarNuevo = () => {
  const { setAgregarNuevo, setModalDestinatarios, setFormData, formData } =
    useRecibidos();


  const handleData = (e) => {
    e.preventDefault();
    if (e.target.name !== "archivo") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }else{
      setFormData({
        ...formData,
        [e.target.name]: e.target.files,
      });
    }
  };
  return (
    <div className="container modal-agregar-nuevo">
      <h2>Agregar Nuevo Oficio</h2>
      <div className="input-container">
        <p>Número de Oficio:</p>
        <input
          onChange={(e) => handleData(e)}
          name="numeroOficio"
          type="text"
        />
        <p>Asunto:</p>
        <input onChange={(e) => handleData(e)} name="asunto" type="text" />
        <p>Remitente</p>
        <input onChange={(e) => handleData(e)} name="remitente" type="text" />
        <p>Dependencia</p>
        <input onChange={(e) => handleData(e)} name="dependencia" type="text" />
        <p>Archivo</p>
        <input onChange={(e) => handleData(e)} name="archivo" type="file" />
      </div>
    </div>
  );
};

export default ModalAgregarNuevo;
