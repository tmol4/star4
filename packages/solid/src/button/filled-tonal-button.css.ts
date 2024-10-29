import { THEME } from "@star4/vanilla-extract";
import { createTheme } from "@vanilla-extract/css";
import { theme } from "./button.css";

const container = createTheme(
  theme,
  {
    containerColor: THEME.color.secondaryContainer,
    labelTextColor: THEME.color.onSecondaryContainer,

    hoverStateLayerColor: THEME.color.onSecondaryContainer,
    hoverStateLayerOpacity: THEME.state.hoverStateLayerOpacity,
    pressedStateLayerColor: THEME.color.onSecondaryContainer,
    pressedStateLayerOpacity: THEME.state.pressedStateLayerOpacity,
  },
);

export const styles = {
  container,
} as const;
