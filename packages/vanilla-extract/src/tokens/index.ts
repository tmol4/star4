import type { CSSVarFunction, ResolveTokens } from "../utils";
import { COLOR_TOKENS, type ColorTokens } from "./color.css";
import { MOTION_TOKENS, type MotionTokens } from "./motion.css";
import { SHAPE_TOKENS, type ShapeTokens } from "./shape.css";
import { TYPEFACE_TOKENS, type TypefaceTokens } from "./typeface.css";
import { TYPESCALE_TOKENS, type TypescaleTokens } from "./typescale.css";

export * from "./color.css";
export * from "./shape.css";

export type ThemeTokens = {
  color: ColorTokens;
  shape: ShapeTokens;
  motion: MotionTokens;
  typeface: TypefaceTokens;
  typescale: TypescaleTokens,
}

export const THEME: ResolveTokens<ThemeTokens, CSSVarFunction> = {
  color: COLOR_TOKENS,
  shape: SHAPE_TOKENS,
  motion: MOTION_TOKENS,
  typeface: TYPEFACE_TOKENS,
  typescale: TYPESCALE_TOKENS,
};
