import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addGasto } from "./Gastos";
import { v4 as uuid } from "uuid";

function GastosForm() {
  const [gasto, setgasto] = useState({
    price: "",
    description: "",
  });
  const distpatch = useDispatch();
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    setDescription(e.target.value);
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
    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          className="col-md-4"
          name="price"
          type="number"
          placeholder="Precio"
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <select
          name="description"
          onChange={handleChange}
          aria-label="Default select example"
          value={description}
        >
          <option>-SELECT-</option>
          <option value="comida">Comida 🥗</option>
          <option value="bebida"> Bebidas 🥂</option>
          <option value="otro">Otro ( ͡~ ͜ʖ ͡°)</option>
        </select>
      </div>
      <div className="col-12">
        <button className=" col-4 btn btn-primary">Guardar</button>
      </div>
    </form>
  );
}

export default GastosForm;
