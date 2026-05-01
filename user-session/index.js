import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SessionProvider } from "./SessionContext";
import "./App.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <SessionProvider>
    <App />
  </SessionProvider>
);
