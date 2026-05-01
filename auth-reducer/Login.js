import React, { useState, useContext } from "react";
import { AuthContext } from "./App";

function Login() {
  const [name, setName] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = () => {
    if (name.trim()) {
      dispatch({
        type: "LOGIN",
        payload: name,
      });
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
