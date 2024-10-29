import { createThemeContract } from "@vanilla-extract/css";
import type { DeepInvert, DeepRequired, ResolveContract, ResolveTokens, ValueToken } from "../../utils";
import { COLOR_TOKENS } from "../system/color.css";
import { STATE_TOKENS } from "../system/state.css";

export type RippleTokens = {
  hoverColor: ValueToken;
  pressedColor: ValueToken;
  hoverOpacity: ValueToken;
  pressedOpacity: ValueToken;
};

export const RIPPLE_TOKENS = createThemeContract<
  ResolveContract<RippleTokens>
>({
  hoverColor: "",
  hoverOpacity: "",
  pressedColor: "",
  pressedOpacity: "",
});



export const RIPPLE_DEFAULTS: ResolveTokens<RippleTokens, string> = {
  hoverColor: COLOR_TOKENS.onSurface,
  hoverOpacity: STATE_TOKENS.hoverStateLayerOpacity,
  pressedColor: COLOR_TOKENS.onSurface,
  pressedOpacity: STATE_TOKENS.pressedStateLayerOpacity,
};
