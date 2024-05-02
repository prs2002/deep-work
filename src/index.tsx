import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";
import "./tooltip.scss";
import { MemoryRouter } from "react-router-dom";

const root =
  document.getElementsByClassName("container")[0] ||
  document.getElementsByClassName("container_2")[0];
const rootDiv = ReactDOM.createRoot(root);
rootDiv.render(
  <React.StrictMode>
    <MemoryRouter>
      <App />
    </MemoryRouter>
  </React.StrictMode>
);
