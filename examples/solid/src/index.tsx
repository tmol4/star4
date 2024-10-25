/* @refresh reload */
import { render } from "solid-js/web";
import { App } from "./app";

import "~/styles/theme.css";
import "~/styles/reset.css";


render(
  () => <App />,
  document.getElementById("root")!,
);
