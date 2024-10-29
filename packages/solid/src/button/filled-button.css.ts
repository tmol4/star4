import { THEME } from "@star4/vanilla-extract";
import { createTheme } from "@vanilla-extract/css";
import { theme } from "./button.css";

const container = createTheme(
  theme,
  {
    containerColor: THEME.color.primary,
    labelTextColor: THEME.color.onPrimary,

    hoverStateLayerColor: THEME.color.onPrimary,
    hoverStateLayerOpacity: THEME.state.hoverStateLayerOpacity,
    pressedStateLayerColor: THEME.color.onPrimary,
    pressedStateLayerOpacity: THEME.state.pressedStateLayerOpacity,
  },
);

export const styles = {
  container,
} as const;
