import { THEME } from "@star4/vanilla-extract";
import { style } from "@vanilla-extract/css";

const container = style({
  width: "100%",
  height: 1,
  display: "flex",
  color: THEME.color.outlineVariant,

  "::before": {
    content: "",
    width: "100%",
    height: "100%",
    backgroundColor: "currentcolor",
  },
  "@media": {
    "(forced-colors: active)": {
      "::before": {
        backgroundColor: "CanvasText",
      },
    },
  },

});

export const styles = {
  container,
} as const;
