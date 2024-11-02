import { fallbackVar, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { THEME } from "@star4/vanilla-extract";

const shared = style({
  WebkitTapHighlightColor: "transparent",
  borderRadius: "inherit",
  inset: 0,
  position: "absolute",
  overflow: "hidden",
});

const host = style([
  shared,
  {
    display: "flex",
    margin: "auto",
    pointerEvents: "none",

    "@media": {
      "(forced-colors: active)": {
        display: "none",
      },
    },
  },
]);

const surface = recipe({
  base: [
    shared,
    {
      "::before": {
        content: "",
        opacity: 0,
        position: "absolute",
        inset: 0,

        backgroundColor: fallbackVar(THEME.component.ripple.hoverColor, THEME.color.onSurface),
        transition: "opacity 15ms linear, background-color 15ms linear",
      },
      "::after": {
        content: "",
        opacity: 0,
        position: "absolute",

        background: `radial-gradient(
              closest-side,
              ${fallbackVar(THEME.component.ripple.pressedColor, THEME.color.onSurface)} max(calc(100% - 70px), 65%),
              transparent 100%
            )`,
        transformOrigin: "center center",
        transition: "opacity 375ms linear",
      },
    },
  ],
  variants: {
    hovered: {
      true: {
        "::before": {
          backgroundColor: fallbackVar(THEME.component.ripple.hoverColor, THEME.color.onSurface),
          opacity: fallbackVar(THEME.component.ripple.hoverOpacity, THEME.state.hoverStateLayerOpacity),
        },
      },
    },
    pressed: {
      true: {
        "::after": {
          opacity: fallbackVar(THEME.component.ripple.pressedOpacity, THEME.state.pressedStateLayerOpacity),
          transitionDuration: "105ms",
        },
      },
    }
  },
});

export const styles = {
  host,
  surface,
} as const;
