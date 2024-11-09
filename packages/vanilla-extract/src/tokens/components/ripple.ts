import { THEME, type ComponentTokens } from "..";
import type { Remap } from "../../utils";



export const RIPPLE_DEFAULTS: Remap<ComponentTokens["ripple"]> = {
  hoverColor: THEME.color.onSurface,
  hoverOpacity: THEME.state.hoverStateLayerOpacity,
  pressedColor: THEME.color.onSurface,
  pressedOpacity: THEME.state.pressedStateLayerOpacity,
};
