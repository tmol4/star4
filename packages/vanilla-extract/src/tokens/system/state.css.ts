import { createThemeContract } from "@vanilla-extract/css"
import type { CSSVarFunction, ResolveTokens, ValueToken } from "../../utils";

export type StateTokens = {
  hoverStateLayerOpacity: ValueToken;
  focusStateLayerOpacity: ValueToken;
  pressedStateLayerOpacity: ValueToken;
  draggedStateLayerOpacity: ValueToken;
}

export const STATE_DEFAULTS: ResolveTokens<StateTokens, string> = {
  hoverStateLayerOpacity: "0.08",
  focusStateLayerOpacity: "0.12",
  pressedStateLayerOpacity: "0.12",
  draggedStateLayerOpacity: "0.16",
}

export const STATE_TOKENS = createThemeContract<
  ResolveTokens<StateTokens, string>
>({
  hoverStateLayerOpacity: "",
  focusStateLayerOpacity: "",
  pressedStateLayerOpacity: "",
  draggedStateLayerOpacity: "",
});
