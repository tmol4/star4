import { createThemeContract } from "@vanilla-extract/css";
import type { DeepInvert, DeepRequired, ResolveContract, ResolveTokens, ValueToken } from "../../utils";

export type MaterialSymbolTokens = {
  font: ValueToken;
  weight: ValueToken;
  opticalSize: ValueToken;
  grade: ValueToken;
  fill: ValueToken;
}

export const MATERIAL_SYMBOL_TOKENS = createThemeContract<
  ResolveContract<MaterialSymbolTokens>
>({
  font: "",
  weight: "",
  opticalSize: "",
  grade: "",
  fill: "",
});



export const MATERIAL_SYMBOL_DEFAULTS = {
  // font: "Material Symbols Rounded",
  fill: "0",
  grade: "0",
  opticalSize: "24",
  weight: "400",
} satisfies Partial<ResolveTokens<MaterialSymbolTokens, string>>;
