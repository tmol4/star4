import type { Remap } from "../../utils";
import { THEME, type ComponentTokens } from "..";


export const CIRCULAR_PROGRESS_DEFAULTS = {
  containerSize: "48px",

  activeIndicatorColor: THEME.color.primary,
  activeIndicatorThickness: "4px",
  activeIndicatorShape: "2px",

  trackColor: THEME.color.secondaryContainer,
  trackThickness: "4px",
  trackShape: "2px",
} satisfies Remap<ComponentTokens["circularProgress"]>;
