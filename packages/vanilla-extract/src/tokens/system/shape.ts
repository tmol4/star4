import type { Remap } from "../../utils";
import type { ShapeTokens } from "..";


// These are special values, because their representation might change
//
// For example:
// BORDER_RADIUS_NONE could have any value suffix: px, rem, em, %, etc.
// or have no suffix at all
//
// BORDER_RADIUS_FULL could be 9999px, 999rem, 999vw, etc.
const BORDER_RADIUS_NONE = "0";
const BORDER_RADIUS_FULL = "9999px";

export const SHAPE_DEFAULTS: Remap<ShapeTokens> = {
  corner: {
    none: BORDER_RADIUS_NONE,
    extraSmall: "4px",
    small: "8px",
    medium: "12px",
    large: "16px",
    extraLarge: "28px",
    full: BORDER_RADIUS_FULL,
  },
};
