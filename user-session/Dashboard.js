import React from "react";
import { useSession } from "./SessionContext";

function Dashboard() {
  const { user, logout } = useSession();

  return (
    <div className="container">
      <h2 className="welcome">Welcome {user?.name}</h2>
      <button className="logout-btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
