import { recipe } from "@vanilla-extract/recipes";

export const outline = recipe({
  base: {
    position: "absolute",
    inset: 0,
    borderStyle: "solid",
    boxSizing: "border-box",

    selectors: {
      "&": {

      },
    },
  },
});
