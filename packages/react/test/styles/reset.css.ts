import { globalStyle } from "@vanilla-extract/css";
import { THEME } from "../theme";

// globalStyle(
//   "*, *::before, *::after",
//   {
//     boxSizing: "border-box",
//     margin: 0,
//     padding: 0,
//   },
// );

globalStyle(
  "html",
  {
    WebkitTextSizeAdjust: "none",
    MozTextSizeAdjust: "none",
    textSizeAdjust: "none",
  },
);


globalStyle(
  "body",
  {
    colorScheme: "light dark",
    minHeight: ["100vh", "100dvh"],

    backgroundColor: THEME.color.surface,

    WebkitFontSmoothing: "antialiased",
    ...THEME.typescale.body.large,
    color: THEME.color.onSurface,
  },
);
