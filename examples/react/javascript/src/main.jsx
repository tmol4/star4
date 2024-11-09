import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app.jsx";

import "./styles/theme.css.js";
import "./styles/reset.css";

createRoot(
  document.getElementById("root")
).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
