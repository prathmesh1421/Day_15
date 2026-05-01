import React from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import { useSession } from "./SessionContext";

function App() {
  const { user } = useSession();

  return (
    <div>
      {user ? <Dashboard /> : <Login />}
    </div>
  );
}

export default App;
