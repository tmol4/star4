import { createThemeContract } from "@vanilla-extract/css";
import type { ValueToken, ResolveTokens, CSSVarFunction } from "../utils";



export type TypefaceWeight =
  | "regular"
  | "medium"
  | "bold";
export type TypefaceTokens = {
  plain: ValueToken;
  brand: ValueToken;
  weight: Record<TypefaceWeight, ValueToken>;
}

export const TYPEFACE_DEFAULTS: ResolveTokens<TypefaceTokens, string> = {
  plain: "Roboto",
  brand: "Roboto",
  weight: {
    regular: "400",
    medium: "500",
    bold: "700",
  },
};
export const TYPEFACE_TOKENS: ResolveTokens<TypefaceTokens, CSSVarFunction> = createThemeContract({
  plain: "",
  brand: "",
  weight: {
    regular: "",
    medium: "",
    bold: "",
  },
});
