import "./App.css";
import GastosList from "./components/GastosList";
import GastosForm from "./components/GastosForm";

function App() {
  return (
    <div className="App">
      <h1>Cuenta Gastos</h1>

      <GastosForm></GastosForm>
      <hr />
      <GastosList></GastosList>
    </div>
  );
}

export default App;
