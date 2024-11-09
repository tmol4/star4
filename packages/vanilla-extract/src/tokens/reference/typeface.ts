import type { Remap } from "../../utils";
import type { TypefaceTokens } from "..";

export const TYPEFACE_DEFAULTS: Remap<TypefaceTokens> = {
  plain: "Roboto",
  brand: "Roboto",
  weight: {
    regular: "400",
    medium: "500",
    bold: "700",
  },
};
