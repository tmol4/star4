import { fallbackVar } from "@vanilla-extract/css";
import type { DeepPartial, ResolveTokens } from "../../utils";
import { ICON_DEFAULTS, ICON_TOKENS, type IconTokens } from "./icon.css";
import { MATERIAL_SYMBOL_DEFAULTS, MATERIAL_SYMBOL_TOKENS, type MaterialSymbolTokens } from "./material-symbols.css";
import { RIPPLE_DEFAULTS, RIPPLE_TOKENS, type RippleTokens } from "./ripple.css";
import { RADIO_DEFAULTS, RADIO_TOKENS, type RadioTokens } from "./radio.css";

export type ComponentTokens = {
  ripple: RippleTokens;
  icon: IconTokens;
  materialSymbol: MaterialSymbolTokens;
  radio: RadioTokens;
}

export const COMPONENT_DEFAULTS = {
  ripple: RIPPLE_DEFAULTS,
  icon: ICON_DEFAULTS,
  materialSymbol: MATERIAL_SYMBOL_DEFAULTS,
  radio: RADIO_DEFAULTS,
} as const;

export const COMPONENT_TOKENS = {
  ripple: RIPPLE_TOKENS,
  icon: ICON_TOKENS,
  materialSymbol: MATERIAL_SYMBOL_TOKENS,
  radio: RADIO_TOKENS,
} as const;
