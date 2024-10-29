import { THEME } from "@star4/vanilla-extract";
import { createTheme } from "@vanilla-extract/css";
import { theme } from "./button.css";

const container = createTheme(
  theme,
  {
    containerColor: THEME.color.surfaceContainerLow,
    labelTextColor: THEME.color.primary,

    hoverStateLayerColor: THEME.color.primary,
    hoverStateLayerOpacity: THEME.state.hoverStateLayerOpacity,
    pressedStateLayerColor: THEME.color.primary,
    pressedStateLayerOpacity: THEME.state.pressedStateLayerOpacity,
  },
);

export const styles = {
  container,
} as const;
