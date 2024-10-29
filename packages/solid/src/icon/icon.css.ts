import { THEME } from "@star4/vanilla-extract";
import { createThemeContract, style } from "@vanilla-extract/css";

const container = style({
  color: "currentcolor",

  fontSize: THEME.component.icon.size,

});

export const styles = {
  container,
} as const;
