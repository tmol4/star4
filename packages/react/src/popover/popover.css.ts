import { recipe } from "@vanilla-extract/recipes";

const native = recipe({
  base: {

  },
  variants: {
    open: {
      false: {
        display: "none",
      },
      true: {
        display: "none",
      },
    }
  },
  defaultVariants: {
    open: false,
  },
});
const portal = recipe({
  base: {

  },
  variants: {
    open: {
      false: {
        display: "none",
      },
      true: {
        display: "none",
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
