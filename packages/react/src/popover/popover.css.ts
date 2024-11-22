import { recipe } from "@vanilla-extract/recipes";

const native = recipe({
  base: {
    outline: "none",
    border: "none",
    background: "none",
    boxSizing: "border-box",
    margin: 0,
    padding: 0,


    width: "100vw",
    height: "100vh",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  variants: {
    open: {
      false: {
        display: "none",
      },
      true: {
      },
    }
  },
  defaultVariants: {
    open: false,
  },
});
const portal = recipe({
  base: {
    position: "fixed",
    inset: 0,
  },
  variants: {
    open: {
      false: {
        display: "none",
      },
      true: {
      },
    }
  },
  defaultVariants: {
    open: false,
  },
});

export const styles = {
  native,
  portal,
} as const;
