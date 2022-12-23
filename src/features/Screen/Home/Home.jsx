import React from "react";
import GastosList from "../../../features/Gastos/GastosList";
import GastosForm from "../../../features/Gastos/GastosForm";
export default function Home() {
  return (
    <div>
      <GastosForm></GastosForm>
      <hr />
      <GastosList></GastosList>
    </div>
  );
}
