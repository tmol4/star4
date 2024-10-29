import { createThemeContract } from "@vanilla-extract/css"
import { COLOR_TOKENS } from "../system/color.css";
import { STATE_TOKENS } from "../system/state.css";
import type { ResolveTokens, ValueToken } from "../../utils";

export type RadioTokens = {
  [P in keyof typeof RADIO_TOKENS]: ValueToken;
}

export const RADIO_TOKENS = createThemeContract({
  disabledSelectedIconColor: "",
  disabledSelectedIconOpacity: "",
  disabledUnselectedIconColor: "",
  disabledUnselectedIconOpacity: "",
  iconSize: "",
  selectedFocusIconColor: "",
  selectedFocusStateLayerColor: "",
  selectedFocusStateLayerOpacity: "",
  selectedHoverIconColor: "",
  selectedHoverStateLayerColor: "",
  selectedHoverStateLayerOpacity: "",
  selectedIconColor: "",
  selectedPressedIconColor: "",
  selectedPressedStateLayerColor: "",
  selectedPressedStateLayerOpacity: "",
  stateLayerSize: "",
  unselectedFocusIconColor: "",
  unselectedFocusStateLayerColor: "",
  unselectedFocusStateLayerOpacity: "",
  unselectedHoverIconColor: "",
  unselectedHoverStateLayerColor: "",
  unselectedHoverStateLayerOpacity: "",
  unselectedIconColor: "",
  unselectedPressedIconColor: "",
  unselectedPressedStateLayerColor: "",
  unselectedPressedStateLayerOpacity: "",
});

export const RADIO_DEFAULTS: ResolveTokens<RadioTokens, string> = {
  disabledSelectedIconColor: COLOR_TOKENS.onSurface,
  disabledSelectedIconOpacity: "0.38",
  disabledUnselectedIconColor: COLOR_TOKENS.onSurface,
  disabledUnselectedIconOpacity: "0.38",
  iconSize: "20px",
  selectedFocusIconColor: COLOR_TOKENS.primary,
  selectedFocusStateLayerColor: COLOR_TOKENS.primary,
  selectedFocusStateLayerOpacity: STATE_TOKENS.focusStateLayerOpacity,
  selectedHoverIconColor: COLOR_TOKENS.primary,
  selectedHoverStateLayerColor: COLOR_TOKENS.primary,
  selectedHoverStateLayerOpacity: STATE_TOKENS.hoverStateLayerOpacity,
  selectedIconColor: COLOR_TOKENS.primary,
  selectedPressedIconColor: COLOR_TOKENS.primary,
  selectedPressedStateLayerColor: COLOR_TOKENS.primary,
  selectedPressedStateLayerOpacity: STATE_TOKENS.pressedStateLayerOpacity,
  stateLayerSize: "40px",
  unselectedFocusIconColor: COLOR_TOKENS.onSurface,
  unselectedFocusStateLayerColor: COLOR_TOKENS.onSurface,
  unselectedFocusStateLayerOpacity: STATE_TOKENS.focusStateLayerOpacity,
  unselectedHoverIconColor: COLOR_TOKENS.onSurface,
  unselectedHoverStateLayerColor: COLOR_TOKENS.onSurface,
  unselectedHoverStateLayerOpacity: STATE_TOKENS.hoverStateLayerOpacity,
  unselectedIconColor: COLOR_TOKENS.onSurfaceVariant,
  unselectedPressedIconColor: COLOR_TOKENS.onSurface,
  unselectedPressedStateLayerColor: COLOR_TOKENS.onSurface,
  unselectedPressedStateLayerOpacity: STATE_TOKENS.pressedStateLayerOpacity,
};
