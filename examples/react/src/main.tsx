import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";

import "@fontsource-variable/material-symbols-rounded/full.css";
import "@fontsource-variable/open-sans";
import "@fontsource-variable/raleway";

import "~/styles/theme.css";
import "~/styles/reset.css";


createRoot(
  document.getElementById("root")!,
).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
