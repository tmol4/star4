import { THEME } from "@star4/vanilla-extract";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const container = style({
  userSelect: "none",
  pointerEvents: "none",

  position: "relative",
  width: 4,
  height: 44,

  display: "flex",
  placeItems: "center",
  placeContent: "center",

  transitionProperty: "width, margin-inline",
  transitionDuration: THEME.motion.duration.short2,
  transitionTimingFunction: THEME.motion.easing.standard,
});

const indicator = recipe({
  base: {
    zIndex: 2,
    position: "absolute",
    inset: 0,
    backgroundColor: THEME.color.primary,
    borderRadius: THEME.shape.corner.full,

    transitionProperty: "inset-inline",
    transitionDuration: THEME.motion.duration.short2,
    transitionTimingFunction: THEME.motion.easing.standard,
  },
  variants: {
    pressed: {
      true: {
        insetInline: 1,
      },
    },
  },
});

const labelContainer = recipe({
  base: {
    position: "absolute",
    left: "50%",
    translate: "-50%",

    bottom: "calc(100% + 4px)",

    display: "flex",
    placeItems: "center",
    placeContent: "center",

    transformOrigin: "top center",
    overflow: "hidden",
    paddingBlock: 12,
    paddingInline: 16,
    zIndex: 1,

    borderRadius: THEME.shape.corner.full,
    backgroundColor: THEME.color.inverseSurface,

    transitionProperty: "scale, bottom",
    transitionDuration: "200ms",
  },
  variants: {
    visible: {
      false: {
        scale: 0,
        bottom: 0,

        transitionTimingFunction: THEME.motion.easing.standardAccelerate,
      },
      true: {
        transitionTimingFunction: THEME.motion.easing.standardDecelerate,
      }
    }
  },
  defaultVariants: {
    visible: false,
  },
});

const labelText = recipe({
  base: {
    width: "max-content",
    ...THEME.typescale.label.medium,
    color: THEME.color.inverseOnSurface,

    transitionProperty: "translate",
    transitionDuration: "200ms",
  },
  variants: {
    visible: {
      false: {
        translate: "0 -66.6666%",
        transitionTimingFunction: THEME.motion.easing.standardAccelerate,
      },
      true: {
        transitionTimingFunction: THEME.motion.easing.standardDecelerate,
      },
    }
  },
  defaultVariants: {
    visible: false,
  },
});

export const focusRing = style({
  borderRadius: THEME.shape.corner.extraSmall,
  insetInline: -5,
});

export const styles = {
  container,
  indicator,
  focusRing,
  labelContainer,
  labelText,
} as const;
