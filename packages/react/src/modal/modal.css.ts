import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const native = style({
  isolation: "isolate",

  position: "fixed",
  inset: 0,

  minWidth: "100%",
  minHeight: "100%",
  margin: 0,
  padding: 0,

  background: "transparent",
  outline: "none",
  border: "none",

  overflow: "hidden",

  "::backdrop": {
    display: "none",
  },
});
const portal = style({
  isolation: "isolate",
  overflow: "hidden",

  position: "fixed",
  inset: 0,
  zIndex: 1,
});
const backdrop = recipe({
  base: {
    position: "absolute",
    inset: 0,
    zIndex: -1,
    cursor: "pointer",
  },
});

export const styles = {
  native,
  portal,
  backdrop,
} as const;
