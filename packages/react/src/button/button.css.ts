import { THEME } from "@star4/vanilla-extract";
import { recipe } from "@vanilla-extract/recipes";

const KEY_SHADOW_COLOR = `color-mix(in srgb, transparent, ${THEME.color.shadow} 30%)`;
const AMBIENT_SHADOW_COLOR = `color-mix(in srgb, transparent, ${THEME.color.shadow} 15%)`;

const BOX_SHADOW_LEVEL_0 = `
  0px 0px 0px 0px ${KEY_SHADOW_COLOR},
  0px 0px 0px 0px ${AMBIENT_SHADOW_COLOR}
`;
const BOX_SHADOW_LEVEL_1 = `
  0px 1px 2px 0px ${KEY_SHADOW_COLOR},
  0px 1px 3px 1px ${AMBIENT_SHADOW_COLOR}
`;
const BOX_SHADOW_LEVEL_2 = `
  0px 1px 2px 0px ${KEY_SHADOW_COLOR},
  0px 2px 6px 2px ${AMBIENT_SHADOW_COLOR}
`;

const container = recipe({
  base: {
    WebkitTapHighlightColor: "transparent",
    background: "transparent",
    border: "none",
    outline: "none",
    userSelect: "none",

    position: "relative",
    minWidth: 64,
    height: 40,

    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingInline: 24,

    borderRadius: THEME.shape.corner.full,

    ...THEME.typescale.label.large,

    transitionProperty: "box-shadow",
    transitionDuration: "280ms",
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

    // Touch target
    "::before": {
      content: "",
      position: "absolute",
      height: 48,
      left: 0,
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
    },
  },
  variants: {
    withIcon: {
      true: {
        paddingInline: "16px 24px",
      },
    },
    variant: {
      elevated: {
        backgroundColor: THEME.color.surfaceContainerLow,
        color: THEME.color.primary,

        boxShadow: BOX_SHADOW_LEVEL_1,

        vars: {
          [THEME.component.ripple.hoverColor]: THEME.color.primary,
          [THEME.component.ripple.pressedColor]: THEME.color.primary,
        },

        ":hover": {
          boxShadow: BOX_SHADOW_LEVEL_2,
        },
        ":active": {
          boxShadow: BOX_SHADOW_LEVEL_1,
        },
      },
      filled: {
        backgroundColor: THEME.color.primary,
        color: THEME.color.onPrimary,


        vars: {
          [THEME.component.ripple.hoverColor]: THEME.color.onPrimary,
          [THEME.component.ripple.pressedColor]: THEME.color.onPrimary,
        },

        boxShadow: BOX_SHADOW_LEVEL_0,

        ":hover": {
          boxShadow: BOX_SHADOW_LEVEL_1,
        },
        ":active": {
          boxShadow: BOX_SHADOW_LEVEL_0,
        },
      },
      filledTonal: {
        backgroundColor: THEME.color.secondaryContainer,
        color: THEME.color.onSecondaryContainer,

        vars: {
          [THEME.component.ripple.hoverColor]: THEME.color.onSecondaryContainer,
          [THEME.component.ripple.pressedColor]: THEME.color.onSecondaryContainer,
        },

        boxShadow: BOX_SHADOW_LEVEL_0,

        ":hover": {
          boxShadow: BOX_SHADOW_LEVEL_1,
        },
        ":active": {
          boxShadow: BOX_SHADOW_LEVEL_0,
        },
      },
      outlined: {
        color: THEME.color.primary,

        vars: {
          [THEME.component.ripple.hoverColor]: THEME.color.primary,
          [THEME.component.ripple.pressedColor]: THEME.color.primary,
        },
      },
      text: {
        color: THEME.color.primary,

        vars: {
          [THEME.component.ripple.hoverColor]: THEME.color.primary,
          [THEME.component.ripple.pressedColor]: THEME.color.primary,
        },
      },
    },
    disabled: {
      false: {
        cursor: "pointer",
      },
      true: {
        pointerEvents: "none",
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        variant: "elevated",
        disabled: true,
      },
      style: {
        backgroundColor: `color-mix(in srgb, transparent, ${THEME.color.onSurface} 12%)`,
        color: `color-mix(in srgb, transparent, ${THEME.color.onSurface} 38%)`,

      },
    },
    {
      variants: {
        variant: "filled",
        disabled: true,
      },
      style: {
        backgroundColor: `color-mix(in srgb, transparent, ${THEME.color.onSurface} 12%)`,
        color: `color-mix(in srgb, transparent, ${THEME.color.onSurface} 38%)`,

      },
    },
    {
      variants: {
        variant: "filledTonal",
        disabled: true,
      },
      style: {
        backgroundColor: `color-mix(in srgb, transparent, ${THEME.color.onSurface} 12%)`,
        color: `color-mix(in srgb, transparent, ${THEME.color.onSurface} 38%)`,

      },
    },
    {
      variants: {
        variant: "outlined",
        disabled: true,
      },
      style: {
        color: `color-mix(in srgb, transparent, ${THEME.color.onSurface} 38%)`,
      },
    },
    {
      variants: {
        variant: "text",
        disabled: true,
      },
      style: {
        color: `color-mix(in srgb, transparent, ${THEME.color.onSurface} 38%)`,
      },
    },
  ],
  defaultVariants: {
    disabled: false,
  },
});

const outline = recipe({
  base: {
    position: "absolute",
    inset: 0,
    border: `1px solid ${THEME.color.outline}`,
    borderRadius: "inherit",
    pointerEvents: "none",
  },
  variants: {
    disabled: {
      true: {
        borderColor: `color-mix(in srgb, transparent, ${THEME.color.onSurface} 12%)`,
      }
    },
  },
});

export const styles = {
  container,
  outline,
} as const;
