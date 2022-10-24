import { useSelector } from "react-redux";

function GastosList() {
  const gastos = useSelector((state) => state.gastos);
  console.log(gastos);

  return (
    <div>
      {gastos.map((gasto) => (
        <div key={gasto.id}>
          <h3>{gasto.title}</h3>
          <p>{gasto.description}</p>
        </div>
      ))}
    </div>
  );
}

export default GastosList;
