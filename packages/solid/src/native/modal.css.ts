import { style } from "@vanilla-extract/css";

const native = style({
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

});
const portal = style({

});

export const styles = {
  native,
  portal,
} as const;
