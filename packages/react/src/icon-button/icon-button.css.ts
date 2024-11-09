import { THEME } from "@star4/vanilla-extract";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const container = recipe({
  base: {
    WebkitTapHighlightColor: "transparent",
    background: "none",
    outline: "none",
    border: "none",

    position: "relative",
    minWidth: 40,
    minHeight: 40,
    width: 40,
    height: 40,

    display: "flex",
    placeItems: "center",
    placeContent: "center",

    borderRadius: THEME.shape.corner.full,

    userSelect: "none",
    textDecoration: "none",
  },
  variants: {
    variant: {
      filled: {
        "::before": {
          content: "",
          position: "absolute",
          inset: 0,
          zIndex: -1,
          backgroundColor: THEME.color.primary,
          borderRadius: "inherit",
        },
        color: THEME.color.onPrimary,
        vars: {
          [THEME.component.ripple.hoverColor]: THEME.color.onPrimary,
          [THEME.component.ripple.pressedColor]: THEME.color.onPrimary,
        },
      },
      filledTonal: {
        "::before": {
          content: "",
          position: "absolute",
          inset: 0,
          zIndex: -1,
          backgroundColor: THEME.color.secondaryContainer,
          borderRadius: "inherit",
        },
        color: THEME.color.onSecondaryContainer,
        vars: {
          [THEME.component.ripple.hoverColor]: THEME.color.onSecondaryContainer,
          [THEME.component.ripple.pressedColor]: THEME.color.onSecondaryContainer,
        },
      },
      outlined: {
        "::before": {
          content: "",
          position: "absolute",
          boxSizing: "border-box",
          inset: 0,
          zIndex: -1,
          borderRadius: "inherit",

          borderStyle: "solid",
          borderWidth: 1,
          borderColor: THEME.color.outline,

          pointerEvents: "none",
        },
        color: THEME.color.onSurfaceVariant,
        vars: {
          [THEME.component.ripple.hoverColor]: THEME.color.onSurfaceVariant,
          [THEME.component.ripple.pressedColor]: THEME.color.onSurfaceVariant,
        },
      },
      regular: {
        color: THEME.color.onSurfaceVariant,
        vars: {
          [THEME.component.ripple.hoverColor]: THEME.color.onSurfaceVariant,
          [THEME.component.ripple.pressedColor]: THEME.color.onSurfaceVariant,
        },
      },
    },
    selected: {
      false: {},
      true: {},
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
    // Selected & unselected specializations
    {
      variants: {
        variant: "filled",
        selected: false,
      },
      style: {
        "::before": {
          backgroundColor: THEME.color.surfaceContainerHighest,
        },
        color: THEME.color.primary,
        vars: {
          [THEME.component.ripple.hoverColor]: THEME.color.primary,
          [THEME.component.ripple.pressedColor]: THEME.color.primary,
        },
      },
    },
    {
      variants: {
        variant: "filledTonal",
        selected: false,
      },
      style: {
        "::before": {
          backgroundColor: THEME.color.surfaceContainerHighest,
        },
        color: THEME.color.onSurfaceVariant,
        vars: {
          [THEME.component.ripple.hoverColor]: THEME.color.onSurfaceVariant,
          [THEME.component.ripple.pressedColor]: THEME.color.onSurfaceVariant,
        },
      },
    },
    {
      variants: {
        variant: "outlined",
        selected: true,
      },
      style: {
        "::before": {
          backgroundColor: THEME.color.inverseSurface,
          borderWidth: 0,
        },
        color: THEME.color.inverseOnSurface,
        vars: {
          [THEME.component.ripple.hoverColor]: THEME.color.inverseOnSurface,
          [THEME.component.ripple.pressedColor]: THEME.color.inverseOnSurface,
        },
      },
    },
    {
      variants: {
        variant: "regular",
        selected: true,
      },
      style: {
        color: THEME.color.primary,
        vars: {
          [THEME.component.ripple.hoverColor]: THEME.color.primary,
          [THEME.component.ripple.pressedColor]: THEME.color.primary,
        },
      },
    },
    // Disabled
    {
      variants: {
        variant: "filled",
        disabled: true,
      },
      style: {
        "::before": {
          backgroundColor: THEME.color.onSurface,
          opacity: 0.12,
        },
        color: `color-mix(in srgb, transparent, ${THEME.color.onSurface} 38%)`,
      },
    },
    {
      variants: {
        variant: "filledTonal",
        disabled: true,
      },
      style: {
        "::before": {
          backgroundColor: THEME.color.onSurface,
          opacity: 0.12,
        },
        color: `color-mix(in srgb, transparent, ${THEME.color.onSurface} 38%)`,
      },
    },
    {
      variants: {
        variant: "outlined",
        disabled: true,
      },
      style: {
        "::before": {
          borderColor: THEME.color.onSurface,
          opacity: 0.12,
        },
        color: `color-mix(in srgb, transparent, ${THEME.color.onSurface} 38%)`,
      },
    },
    {
      variants: {
        variant: "outlined",
        selected: true,
        disabled: true,
      },
      style: {
        "::before": {
          backgroundColor: THEME.color.onSurface,
          opacity: 0.12,
        },
        color: `color-mix(in srgb, transparent, ${THEME.color.onSurface} 38%)`,
      },
    },
    {
      variants: {
        variant: "regular",
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

const touchTarget = style({
  position: "absolute",
  width: "max(48px, 100%)",
  height: "max(48px, 100%)",
});

export const styles = {
  container,
  touchTarget,
} as const;
