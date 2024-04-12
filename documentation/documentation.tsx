import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
import { MemoryRouter } from "react-router-dom";

const root = document.getElementsByClassName("container")[0];
const rootDiv = ReactDOM.createRoot(root);
rootDiv.render(
  <React.StrictMode>
    <MemoryRouter>
      <App />
    </MemoryRouter>
  </React.StrictMode>
);
