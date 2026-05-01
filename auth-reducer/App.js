import React, { createContext, useReducer } from "react";
import { authReducer, initialState } from "./authReducer";
import Login from "./Login";
import Dashboard from "./Dashboard";

// Create Context
export const AuthContext = createContext();

function App() {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <div>
        {state.user ? <Dashboard /> : <Login />}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
