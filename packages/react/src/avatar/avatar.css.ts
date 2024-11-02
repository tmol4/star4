import { THEME } from "@star4/vanilla-extract";
import { style } from "@vanilla-extract/css";

const container = style({
  WebkitTapHighlightColor: "transparent",
  border: "none",
  outline: "none",
  cursor: "pointer",

  position: "relative",
  width: 40,
  height: 40,

  display: "grid",
  placeItems: "center",
  placeContent: "center",

  borderRadius: THEME.shape.corner.full,
  backgroundColor: THEME.color.primaryContainer,

  ...THEME.typescale.title.medium,
  color: THEME.color.onPrimaryContainer,

  vars: {
    [THEME.component.ripple.hoverColor]: THEME.color.onPrimaryContainer,
    [THEME.component.ripple.pressedColor]: THEME.color.onPrimaryContainer,
  }
});

export const styles = {
  container,
} as const;
