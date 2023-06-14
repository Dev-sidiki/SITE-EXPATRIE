import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/css/index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

// ce composant permet de voir le contenu de notre application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      {/* le composant qui contient notre application */}
      <App />
    </Router>
  </React.StrictMode>
);
