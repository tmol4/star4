import { THEME } from "@star4/vanilla-extract";
import { createVar, style } from "@vanilla-extract/css"

const container = style({
  position: "absolute",
  inset: 0,
  zIndex: -1,
});

const indicator = style({
  position: "absolute",
  inset: 4,

  borderRadius: THEME.shape.corner.full,
  backgroundColor: THEME.color.onSecondaryContainer,
});

export const styles = {
  container,
  indicator,
} as const;
