import React, { useState } from "react";
import { deleteGasto, editGasto } from "./Gastos";
import { useDispatch } from "react-redux";

export default function GastosItem({ gasto }) {
  const distpach = useDispatch();
  const handleDelete = (id) => {
    distpach(deleteGasto(id));
  };
  const handleChange = (e) => {
    const price =e.target.value;
    setPrice(price);
    distpach(editGasto({ id: gasto.id, price: price }));
  };
  const [price, setPrice] = useState(gasto.price);

  return (
    <div className="card " style={{ width: "18rem" }}>
      <div className="card-body">
        <input
          type="number"
          value={price}
          onChange={(e) => handleChange(e)}
        ></input>
        <p className="card-text">{gasto.description}</p>
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(gasto.id)}
        >
          🗑
        </button>
      </div>
    </div>
  );
}
