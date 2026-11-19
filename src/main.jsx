import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  {/* 
  O App deve estar encapsulado ao Browser Router para
    funcionar o roteamento de páginas.
  */}
    <App />
  </BrowserRouter>
);