// Core
import React from "react";
import ReactDOM from "react-dom";

// Components
import App from "./App";

// Styles
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Add this line to import Bootstrap CSS

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
