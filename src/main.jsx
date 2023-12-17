import React from "react";
import ReactDOM from "react-dom/client";
import Nav from "./components/nav/nav.jsx";
import Products from "./components/products/products.jsx";
import Modal from "./components/modal/modal.jsx";
import "./main.scss";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
