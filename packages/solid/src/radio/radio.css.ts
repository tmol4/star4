import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { THEME } from "@star4/vanilla-extract";

const container = recipe({
  base: {
    position: "relative",
    width: THEME.component.radio.stateLayerSize,
    height: THEME.component.radio.stateLayerSize,

    display: "grid",
    placeItems: "center",
    placeContent: "center",

    borderRadius: THEME.shape.corner.full,

    cursor: "pointer",
    outline: "none",
    WebkitTapHighlightColor: "transparent",

    "::before": {
      content: "",
      position: "absolute",
      width: 48,
      height: 48,
    },
  },
  variants: {
    checked: {
      false: {
        vars: {
          [THEME.component.ripple.hoverColor]: THEME.component.radio.unselectedHoverStateLayerColor,
          [THEME.component.ripple.hoverOpacity]: THEME.component.radio.unselectedHoverStateLayerOpacity,
          [THEME.component.ripple.pressedColor]: THEME.component.radio.unselectedPressedStateLayerColor,
          [THEME.component.ripple.pressedOpacity]: THEME.component.radio.unselectedPressedStateLayerOpacity,
        }
      },
      true: {
        vars: {
          [THEME.component.ripple.hoverColor]: THEME.component.radio.selectedHoverStateLayerColor,
          [THEME.component.ripple.hoverOpacity]: THEME.component.radio.selectedHoverStateLayerOpacity,
          [THEME.component.ripple.pressedColor]: THEME.component.radio.selectedPressedStateLayerColor,
          [THEME.component.ripple.pressedOpacity]: THEME.component.radio.selectedPressedStateLayerOpacity,
        }
      },
    }
  },
  defaultVariants: {
    checked: false,
  },
});

const appear = keyframes({
  from: {
    transform: "scale(0)",
  },
  to: {
    transform: "scale(1)",
  },
});

const icon = recipe({
  base: {
    position: "relative",
    width: THEME.component.radio.iconSize,
    height: THEME.component.radio.iconSize,
    borderRadius: "inherit",

    "::before": {
      content: "",
      position: "absolute",
      inset: 0,

      borderStyle: "solid",
      borderWidth: 2,
      borderRadius: "inherit",

      transitionProperty: "border-color",
      transitionDuration: THEME.motion.duration.short1,
      transitionTimingFunction: "linear",
    },
    "::after": {
      content: "",
      position: "absolute",
      inset: 5,
      backgroundColor: THEME.component.radio.selectedIconColor,
      borderRadius: "inherit",

      transitionProperty: "opacity",
      transitionDuration: THEME.motion.duration.short1,
      transitionTimingFunction: "linear",
    },
  },
  variants: {
    checked: {
      false: {
        "::before": {
          borderColor: THEME.component.radio.unselectedIconColor,
        },
        "::after": {
          opacity: 0,
        },

        selectors: {
          [`${container.classNames.base}:focus-visible > &::before`]: {
            borderColor: THEME.component.radio.unselectedFocusIconColor,
          },
          [`${container.classNames.base}:hover > &::before`]: {
            borderColor: THEME.component.radio.unselectedHoverIconColor,
          },
          [`${container.classNames.base}:active > &::before`]: {
            borderColor: THEME.component.radio.unselectedPressedIconColor,
          },
        },
      },
      true: {
        "::before": {
          borderColor: THEME.component.radio.selectedIconColor,
        },
        "::after": {
          opacity: 1,
        },

        selectors: {
          [`${container.classNames.base}:focus-visible > &::before`]: {
            borderColor: THEME.component.radio.selectedFocusIconColor,
          },
          [`${container.classNames.base}:hover > &::before`]: {
            borderColor: THEME.component.radio.selectedHoverIconColor,
          },
          [`${container.classNames.base}:active > &::before`]: {
            borderColor: THEME.component.radio.selectedPressedIconColor,
          },
        },
      },
    },
    animate: {
      false: {},
      true: {},
    },
    disabled: {
      false: {},
      true: {},
    }
  },
  compoundVariants: [
    {
      variants: {
        checked: true,
        animate: true,
        disabled: false,
      },
      style: {
        "::after": {
          animation: `${appear} ${THEME.motion.duration.medium2} ${THEME.motion.easing.emphasizedDecelerate}`,
        },
      },
    }
  ],
  defaultVariants: {
    checked: false,
    disabled: false,
  },
});

export const styles = {
  container,
  icon,
} as const;
