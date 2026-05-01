import React, { useState } from "react";
import { useSession } from "./SessionContext";

function Login() {
  const [name, setName] = useState("");
  const { login } = useSession();

  const handleLogin = () => {
    if (name.trim()) {
      login(name);
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
