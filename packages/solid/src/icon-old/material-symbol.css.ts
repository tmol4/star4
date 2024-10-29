import { createThemeContract, fallbackVar, style } from "@vanilla-extract/css";
import { theme as iconTheme } from "./icon.css";

export const theme = createThemeContract({
  fontFamily: "",
  weight: "",
  opticalSize: "",
});

export const icon = style({
  WebkitFontSmoothing: "antialiased",
  fontFeatureSettings: `"liga"`,

  fontFamily: fallbackVar(theme.fontFamily, `"Material Symbols Rounded Variable"`),
  fontSize: fallbackVar(iconTheme.size, "24px"),
  fontWeight: fallbackVar(theme.weight, "normal"),

  fontOpticalSizing: "auto",

  fontStyle: "normal",
  display: "inline-block",
  lineHeight: 1,
  textTransform: "none",
  letterSpacing: "normal",
  wordWrap: "normal",
  whiteSpace: "nowrap",
  direction: "ltr",
});
