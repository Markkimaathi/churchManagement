import React, { useState } from "react";
import './MainLogin.css';
import { Login } from "./Login";
import { Register } from "./Register";

function MainLogin({ setUserRole }) {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  return (
    <div className="MainLogin">
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm} setUserRole={setUserRole} /> : <Register onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default MainLogin;
