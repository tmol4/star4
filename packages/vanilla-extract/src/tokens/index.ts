import { createTokens } from "@star4/tokens";
import { createThemeContract } from "@vanilla-extract/css";
import { THEME } from "./contract.css";

export type ThemeTokens = typeof THEME;
export type ColorTokens = ThemeTokens["color"];
export type ShapeTokens = ThemeTokens["shape"];
export type TypefaceTokens = ThemeTokens["typeface"];
export type TypescaleTokens = ThemeTokens["typescale"];
export type MotionTokens = ThemeTokens["motion"];
export type StateTokens = ThemeTokens["state"];
export type ComponentTokens = ThemeTokens["component"];

export { THEME };
