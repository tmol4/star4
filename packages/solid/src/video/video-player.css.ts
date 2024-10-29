import { THEME } from "@star4/vanilla-extract";
import { style } from "@vanilla-extract/css";

const container = style({
  position: "relative",
  borderRadius: THEME.shape.corner.medium,
  overflow: "hidden",

  width: "fit-content",
  height: "fit-content",
});

export const styles = {
  container,
} as const;
