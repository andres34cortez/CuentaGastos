import { useState } from "react";
import { useDispatch } from "react-redux";
import { addGasto } from "../features/Gastos/Gastos";
import { v4 as uuid } from "uuid";

function GastosForm() {
  const [gasto, setgasto] = useState({
    title: "",
    description: "",
  });
  const distpatch = useDispatch();

  const handleChange = (e) => {
    setgasto({
      ...gasto,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    distpatch(
      addGasto({
        ...gasto, //copio la descripcion
        id: uuid(), // le agrego un id con la libreria
      })
    );
  };
  return (
    <form class="row g-3" onSubmit={handleSubmit}>
      <div class="mb-3">
        <input
          class="col-md-4"
          name="title"
          type="text"
          placeholder="Gasto"
          onChange={handleChange}
        />
      </div>
      <div class="mb-3">
        <textarea
          class="col-4"
          name="description"
          placeholder="Descripcion"
          onChange={handleChange}
        ></textarea>
      </div>
      <div class="col-12">
        <button class=" col-4 btn btn-primary">Guardar</button>
      </div>
    </form>
  );
}

export default GastosForm;
