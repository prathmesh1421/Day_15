import React from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { useAuth } from "./AuthContext";

function App() {
  const { user } = useAuth();

  return (
    <div>
      {user ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;
