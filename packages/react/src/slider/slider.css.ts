import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const container = style({
  width: "100%",
  position: "relative",
  height: 44,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const input = recipe({
  base: {
    WebkitTapHighlightColor: "transparent",
    opacity: 0,
    appearance: "none",
    boxSizing: "border-box",

    position: "absolute",
    width: "100%",
    height: "100%",
    margin: 0,
    pointerEvents: "auto",
  },
  variants: {
    pressed: {
      false: {
        cursor: "grab",
      },
      true: {
        cursor: "grabbing",
      },
    },
  },
});

export const styles = {
  container,
  input,
} as const;
