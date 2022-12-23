import React, { useState } from "react";

import "./LogIn.css";
import Title from "./Title";
import Input from "./Input/Input";
import Label from "./Label";

const LogIn = ({ attribute, handleChange, param }) => {
  const [user, setuser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setpasswordError] = useState(false);

  function handleChange(name, value) {
    if (name === "usuario") {
      setuser(value);
    } else {
      if (value.length < 6) {
        setpasswordError(true);
        console.log(passwordError)
      } else {
        setpasswordError(false);
        setPassword(value);
        console.log(passwordError)
      }
    }
  }
  function handleSubmit() {
    let account = { user, password };
    if (account) {
      console.log(account);
    }
  }
  return (
    <div className="login-container">
      <Title></Title>
      <Label text="Usuario"></Label>
      <Input
        atribute={{
          id: "usuario",
          name: "usuario",
          placeholder: "Ingrese su Usuario",
          type: "text",
        }}
        handleChange={handleChange}
      />
      <Label text="Contraseña"></Label>
      <Input
        atribute={{
          id: "Contraseña",
          name: "Contraseña",
          placeholder: "Ingrese su Contraseña",
          type: "password",
        }}
        handleChange={handleChange}
        param={passwordError}
      />
      <button onClick={handleSubmit}>INGRESAR</button>
    </div>
  );
};

export default LogIn;
