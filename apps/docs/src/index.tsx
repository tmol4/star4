/* @refresh reload */
import { render } from "solid-js/web";
import { App } from "./app";

import "@fontsource-variable/material-symbols-rounded/full.css";
import "@fontsource-variable/open-sans";
import "@fontsource-variable/raleway";

import "~/styles/theme.css";
import "~/styles/reset.css";

render(
  () => <App />,
  document.getElementById("root")!,
);
