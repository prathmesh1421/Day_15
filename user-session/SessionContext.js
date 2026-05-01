import React, { createContext, useContext, useEffect, useState } from "react";

// Create Context
const SessionContext = createContext();

// Custom Hook
export const useSession = () => useContext(SessionContext);

// Provider
export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Load session from localStorage on app start
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login → store session
  const login = (username) => {
    const userData = { name: username };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Logout → clear session
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <SessionContext.Provider value={{ user, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
};
