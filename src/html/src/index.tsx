import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./global.css";

const root = document.createElement("div");
root.className = "container";
document.body.prepend(root);
const rootDiv = ReactDOM.createRoot(root);
rootDiv.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
