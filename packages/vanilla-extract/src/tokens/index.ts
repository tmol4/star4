import type { CSSVarFunction, ResolveTokens } from "../utils";
import { COLOR_TOKENS, type ColorTokens } from "./system/color.css";
import { COMPONENT_TOKENS, type ComponentTokens } from "./components";
import { MOTION_TOKENS, type MotionTokens } from "./system/motion.css";
import { SHAPE_TOKENS, type ShapeTokens } from "./system/shape.css";
import { STATE_DEFAULTS, STATE_TOKENS, type StateTokens } from "./system/state.css";
import { TYPEFACE_TOKENS, type TypefaceTokens } from "./reference/typeface.css";
import { TYPESCALE_TOKENS, type TypescaleTokens } from "./system/typescale.css";

export * from "./system/color.css";
export * from "./system/shape.css";

export type ThemeTokens = {
  component: ComponentTokens;
  color: ColorTokens;
  shape: ShapeTokens;
  motion: MotionTokens;
  typeface: TypefaceTokens;
  typescale: TypescaleTokens;
  state: StateTokens;
}

export const THEME = {
  component: COMPONENT_TOKENS,
  color: COLOR_TOKENS,
  shape: SHAPE_TOKENS,
  motion: MOTION_TOKENS,
  typeface: TYPEFACE_TOKENS,
  typescale: TYPESCALE_TOKENS,
  state: STATE_TOKENS,
} as const;
