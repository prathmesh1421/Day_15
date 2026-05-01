import React, { useContext } from "react";
import { AuthContext } from "./App";

function Dashboard() {
  const { state, dispatch } = useContext(AuthContext);

  return (
    <div className="container">
      <h2 className="welcome">Welcome {state.user}</h2>
      <button
        className="logout-btn"
        onClick={() => dispatch({ type: "LOGOUT" })}
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
