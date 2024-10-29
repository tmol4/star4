import { THEME } from "@star4/vanilla-extract";
import { createTheme } from "@vanilla-extract/css";
import { theme } from "./button.css";
import { recipe } from "@vanilla-extract/recipes";

const container = createTheme(
  theme,
  {
    containerColor: "transparent",
    labelTextColor: THEME.color.primary,

    hoverStateLayerColor: THEME.color.primary,
    hoverStateLayerOpacity: THEME.state.hoverStateLayerOpacity,
    pressedStateLayerColor: THEME.color.primary,
    pressedStateLayerOpacity: THEME.state.pressedStateLayerOpacity,
  },
);

const outline = recipe({
  base: {
    position: "absolute",
    boxSizing: "border-box",
    inset: 0,

    borderStyle: "solid",
    borderColor: THEME.color.outline,
    borderWidth: 1,
    borderRadius: "inherit",
  }
});

export const styles = {
  container,
  outline,
} as const;
