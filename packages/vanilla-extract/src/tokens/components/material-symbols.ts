import type { Remap } from "../../utils";
import type { ComponentTokens } from "..";


export const MATERIAL_SYMBOL_DEFAULTS = {
  // font: "Material Symbols Rounded",
  fill: "0",
  grade: "0",
  opticalSize: "24",
  weight: "400",
} satisfies Partial<Remap<ComponentTokens["materialSymbol"]>>;
