import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
import { MemoryRouter } from "react-router-dom";

const root = document.createElement("div");
root.className = "container_2";
document.body.appendChild(root);
const rootDiv = ReactDOM.createRoot(root);
rootDiv.render(
  <React.StrictMode>
    <MemoryRouter>
      <App />
    </MemoryRouter>
  </React.StrictMode>
);
