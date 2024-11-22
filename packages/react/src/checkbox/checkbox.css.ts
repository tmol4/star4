import { THEME } from "@star4/vanilla-extract";
import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const wrapper = recipe({
  base: {
    WebkitTapHighlightColor: "transparent",
    verticalAlign: "top",
    cursor: "pointer",

    position: "relative",
    width: 18,
    height: 18,

    display: "inline-flex",

    borderRadius: 2,
  },
  variants: {
    disabled: {
      true: {
        cursor: "default",
      },
    },
  },
});

const container = recipe({
  base: {
    position: "relative",
    width: "100%",
    height: "100%",

    display: "flex",
    placeContent: "center",
    placeItems: "center",

    borderRadius: "inherit",
  }
});

const input = recipe({
  base: {
    appearance: "none",
    margin: 0,
    opacity: 0,
    outline: "none",
    cursor: "inherit",


    position: "absolute",
    width: 48,
    height: 48,
    zIndex: 1,
  },
});

const outline = recipe({
  base: {
    boxSizing: "border-box",
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    borderStyle: "solid",
    borderWidth: 2,
    borderColor: THEME.color.onSurfaceVariant,
  },
});

const unselectedTransition = style({
  opacity: 0,
  transform: "scale(0.6)",

  transitionDuration: "150ms, 50ms",
  transitionTimingFunction: `${THEME.motion.easing.emphasizedAccelerate}, ${THEME.motion.easing.linear}`,
});
const selectedTransition = style({
  opacity: 1,
  transform: "scale(1)",

  transitionDuration: "350ms, 50ms",
  transitionTimingFunction: `${THEME.motion.easing.emphasizedDecelerate}, ${THEME.motion.easing.linear}`,
});

const background = recipe({
  base: {
    position: "absolute",
    inset: 0,
    borderRadius: "inherit",
    backgroundColor: THEME.color.primary,

    transitionProperty: "transform, opacity",
  },
  variants: {
    selected: {
      false: [unselectedTransition],
      true: [selectedTransition],
    },
  },
  defaultVariants: {
    selected: false,
  },
});

const focusRing = recipe({
  base: {
    inset: "unset",
    width: 44,
    height: 44,
  },
});
const stateLayer = recipe({
  base: {
    inset: "unset",
    width: 40,
    height: 40,
    borderRadius: THEME.shape.corner.full,
  },
  variants: {
    selected: {
      false: {
        vars: {
          [THEME.component.ripple.hoverColor]: THEME.color.onSurface,
          [THEME.component.ripple.pressedColor]: THEME.color.primary,
        },
      },
      true: {
        vars: {
          [THEME.component.ripple.hoverColor]: THEME.color.primary,
          [THEME.component.ripple.pressedColor]: THEME.color.onSurface,
        },
      },
    },
  },
  defaultVariants: {
    selected: false,
  },
});

const icon = recipe({
  base: {
    position: "absolute",
    inset: 0,
    width: 18,
    height: 18,

    fill: THEME.color.onPrimary,

    transitionProperty: "transform, opacity",
  },
  variants: {
    selected: {
      false: [unselectedTransition],
      true: [selectedTransition],
    },
  },
  defaultVariants: {
    selected: false,
  }
});

const prevUnselectedToChecked = keyframes({
  from: {
    width: 0,
  },
});

const mark = recipe({
  base: {

  },
  variants: {
    type: {
      short: {
        width: 2,
        height: 2,
        transitionProperty: "transform, height",
      },
      long: {
        width: 10,
        height: 2,
        transitionProperty: "transform, width",
      },
    },
    selected: {
      false: {
        animationDuration: "150ms",
        animationTimingFunction: THEME.motion.easing.emphasizedAccelerate,

        transitionDuration: "150ms",
        transitionTimingFunction: THEME.motion.easing.emphasizedAccelerate,
      },
      true: {
        animationDuration: "350ms",
        animationTimingFunction: THEME.motion.easing.emphasizedDecelerate,

        transitionDuration: "350ms",
        transitionTimingFunction: THEME.motion.easing.emphasizedDecelerate,
      },
    },
    checked: {
      false: {},
      true: {},
    },
    prevChecked: {
      false: {},
      true: {},
    },
    prevSelected: {
      false: {
        transitionProperty: "none",
      },
      true: {},
    },
    intermediate: {
      false: {},
      true: {},
    },
    prevIntermediate: {
      false: {},
      true: {},
    }
  },
  compoundVariants: [
    {
      variants: {
        checked: true,
      },
      style: {
        transform: "scaleY(-1) translate(7px, -14px) rotate(45deg)",
      },
    },
    {
      variants: {
        prevChecked: true,
        selected: false,
      },
      style: {
        transform: "scaleY(-1) translate(7px, -14px) rotate(45deg)",
      },
    },
    {
      variants: {
        type: "short",
        checked: true,
      },
      style: {
        height: Math.sqrt(32),
      },
    },
    {
      variants: {
        type: "short",
        prevChecked: true,
        selected: false,
      },
      style: {
        height: Math.sqrt(32),
      },
    },
    {
      variants: {
        type: "long",
        checked: true,
      },
      style: {
        width: Math.sqrt(128),
      },
    },
    {
      variants: {
        type: "long",
        prevChecked: true,
        selected: false,
      },
      style: {
        width: Math.sqrt(128),
      },
    },
    {
      variants: {
        type: "long",
        prevSelected: false,
        checked: true,
      },
      style: {
        animationName: prevUnselectedToChecked,
      },
    },
  ],
  defaultVariants: {
  },
})

export const styles = {
  wrapper,
  container,
  input,
  outline,
  background,
  focusRing,
  stateLayer,
  icon,
  mark,
} as const;
