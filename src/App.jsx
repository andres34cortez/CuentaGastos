import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./features/Screen/Home/Home";
import LogIn from "./features/Screen/LogIn/LogIn";
import Navbar from "./features/Gastos/components/NavBar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div style={{marginTop:40}}>
          <h1>Cuenta Gastos</h1>
          <Routes>
            <Route path="/login" element={<LogIn />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
