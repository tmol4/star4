import { THEME } from "@star4/vanilla-extract";
import { recipe } from "@vanilla-extract/recipes";

const container = recipe({
  base: {
    position: "relative",
    minWidth: 112,
    width: "fit-content",
    maxWidth: 280,

    backgroundColor: THEME.color.surfaceContainer,
    borderRadius: THEME.shape.corner.medium,
  },
  variants: {
    entering: {
      true: {

      },
    },
    exiting: {
      true: {
        height: 0,
      },
    },
  },
});

const items = recipe({
  base: {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",

    borderRadius: "inherit",
    overflow: "hidden",
  }
});

export const styles = {
  container,
  items,
} as const;
