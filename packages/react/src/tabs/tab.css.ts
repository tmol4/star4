import { THEME } from "@star4/vanilla-extract";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const container = recipe({
  base: {
    WebkitTapHighlightColor: "transparent",

    border: "none",
    outline: "none",
    background: "none",

    position: "relative",

    minWidth: "fit-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingInline: 24,

    borderRadius: THEME.shape.corner.full,
  },
  variants: {
    selected: {
      false: {
        cursor: "pointer",
      },
      true: {
        pointerEvents: "none",
      },
    }
  }
});

const content = recipe({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    ...THEME.typescale.title.small,

    textWrap: "nowrap",

    transitionProperty: "color, font-variation-settings",
    transitionDuration: THEME.motion.duration.long2,
    transitionTimingFunction: THEME.motion.easing.emphasized,

    vars: {
      [THEME.component.icon.size]: "18px",
      [THEME.component.materialSymbol.opticalSize]: "18",

      [THEME.component.circularProgress.containerSize]: "18px",
      [THEME.component.circularProgress.activeIndicatorColor]: "currentcolor",
      [THEME.component.circularProgress.activeIndicatorThickness]: "2px",
      [THEME.component.circularProgress.activeIndicatorShape]: "1px",
      [THEME.component.circularProgress.trackColor]: "transparent",
      [THEME.component.circularProgress.trackThickness]: "0px",
      [THEME.component.circularProgress.trackShape]: "0px",

    },
  },
  variants: {
    selected: {
      false: {
        color: THEME.color.onSecondaryContainer,
        vars: {
          [THEME.component.materialSymbol.fill]: "0",
        },
      },
      true: {
        color: THEME.color.secondaryContainer,

        vars: {
          [THEME.component.materialSymbol.fill]: "1",
        },
      },
    }
  },
});

const stateLayer = style({
  inset: 4,
  vars: {
    [THEME.component.ripple.hoverColor]: THEME.color.onSecondaryContainer,
    [THEME.component.ripple.pressedColor]: THEME.color.onSecondaryContainer,
  },
});
export const styles = {
  container,
  content,
  stateLayer,
} as const;
