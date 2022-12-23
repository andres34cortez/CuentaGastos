import React from "react";
import { useSelector } from "react-redux";
import GastosItem from "./GastosItem";

function GastosList() {
  const gastos = useSelector((state) => state.gastos.items);
  const loading = useSelector((state) => state.gastos.loading);
  const error = useSelector((state) => state.gastos.error);

  
  return (
    <div>
      <header>
        <h1>GASTOS!</h1>
      </header>
      <div
        className="container-fluid "
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {gastos.map((gasto) => (
          <GastosItem gasto={gasto} key={gasto.id}></GastosItem>
        ))}
      </div>
    </div>
  );
}
export default GastosList;
