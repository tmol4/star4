import { THEME } from "@star4/vanilla-extract";
import { recipe } from "@vanilla-extract/recipes";

export const container = recipe({
  base: {
    WebkitTapHighlightColor: "transparent",
    border: "none",
    outline: "none",
    background: "transparent",

    cursor: "pointer",

    position: "relative",

    height: 56,
    borderRadius: THEME.shape.corner.full,
    backgroundColor: THEME.color.primaryContainer,


    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingInline: 24,
    overflow: "hidden",

    "::before": {
      content: "",
      position: "absolute",
      inset: 0,
      borderRadius: "inherit",
      transform: "translateX(-100%)",

      backgroundColor: THEME.color.primary,

      transitionProperty: "transform",
      transitionDuration: THEME.motion.duration.medium4,
      transitionTimingFunction: THEME.motion.easing.emphasized,
    },
    // "::after": {
    //   content: "",
    //   position: "absolute",
    //   inset: 0,

    //   borderRadius: "inherit",
    //   borderWidth: 1,
    //   borderStyle: "solid",
    //   borderColor: THEME.color.outline,

    //   pointerEvents: "none",
    // },
    selectors: {
      "&:hover::before": {
        transform: "translateX(0)",
      },
      // "&:hover::after": {
      //   borderColor: THEME.color.primary,
      // }
    },
    vars: {
      [THEME.component.ripple.hoverColor]: THEME.color.onPrimaryContainer,
      [THEME.component.ripple.pressedColor]: THEME.color.onPrimaryContainer,
    },
    ":hover": {
      vars: {
        [THEME.component.ripple.hoverColor]: THEME.color.onPrimary,
        [THEME.component.ripple.pressedColor]: THEME.color.onPrimary,
      },
    },
  },
});

export const outline = recipe({
  base: {
    position: "absolute",
    inset: 0,

    borderRadius: "inherit",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: THEME.color.outline,

    pointerEvents: "none",
  }
});

export const content = recipe({
  base: {
    zIndex: 1,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,

    ...THEME.typescale.label.large,
    color: THEME.color.onPrimaryContainer,

    transitionProperty: "color",
    transitionDuration: THEME.motion.duration.medium4,
    transitionTimingFunction: THEME.motion.easing.emphasized,

    selectors: {
      [`${container.classNames.base}:hover > &`]: {
        color: THEME.color.onPrimary,
      },
    },
  }
});


export const styles = {
  container,
  outline,
  content,
} as const;

const iconContainer = recipe({
  base: {
    position: "relative",
    width: THEME.component.icon.size,
    height: THEME.component.icon.size,
    color: "inherit",
    overflow: "hidden",
  },
});

const icon = recipe({
  base: {
    position: "absolute",
    inset: 0,

    display: "grid",
    placeContent: "center",
    placeItems: "center",

    color: "inherit",

    transitionProperty: "transform",
    transitionDuration: THEME.motion.duration.medium4,
    transitionTimingFunction: THEME.motion.easing.emphasized,
  },
  variants: {
    variant: {
      outgoing: {
        transformOrigin: "top right",
        // transform: "scale(1)",
        selectors: {
          [`${container.classNames.base}:hover &`]: {
            transform: "translate(100%, -100%)",
          },
        }
      },
      incoming: {
        transformOrigin: "bottom left",
        transform: "scale(0)",
        selectors: {
          [`${container.classNames.base}:hover &`]: {
            transform: "scale(1)",
          },
        },
      },
    },
  },
});

export const iconStyles = {
  container: iconContainer,
  icon,
};
