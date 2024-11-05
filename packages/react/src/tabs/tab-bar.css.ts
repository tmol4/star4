import { THEME } from "@star4/vanilla-extract";
import { recipe } from "@vanilla-extract/recipes";

const container = recipe({
  base: {
    position: "relative",
    height: 48,

    display: "grid",
    gridAutoFlow: "column",
    gridAutoColumns: "1fr",

    backgroundColor: THEME.color.secondaryContainer,
    borderRadius: THEME.shape.corner.full,
    isolation: "isolate",

    userSelect: "none",
  }
});

export const styles = {
  container,
} as const;
