import { createThemeContract } from "@vanilla-extract/css";
import type { ValueToken, ResolveTokens, CSSVarFunction } from "../../utils";


// These are special values, because their representation might change
//
// For example:
// BORDER_RADIUS_NONE could have any value suffix: px, rem, em, %, etc.
// or have no suffix at all
//
// BORDER_RADIUS_FULL could be 9999px, 999rem, 999vw, etc.
const BORDER_RADIUS_NONE = "0";
const BORDER_RADIUS_FULL = "9999px";



export type ShapeCornerType =
  | "none"
  | "extraSmall"
  | "small"
  | "medium"
  | "large"
  | "extraLarge"
  | "full";
export type ShapeTokens = {
  corner: Record<ShapeCornerType, ValueToken>;
}

export const SHAPE_DEFAULTS: ResolveTokens<ShapeTokens, string> = {
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
export const SHAPE_TOKENS = createThemeContract<
  ResolveTokens<ShapeTokens, string>
>({
  corner: {
    none: "",
    extraSmall: "",
    small: "",
    medium: "",
    large: "",
    extraLarge: "",
    full: "",
  },
});
