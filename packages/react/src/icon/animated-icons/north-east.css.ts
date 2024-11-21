import { THEME } from "@star4/vanilla-extract";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const container = style({
  position: "relative",
  width: THEME.component.icon.size,
  height: THEME.component.icon.size,
  color: "inherit",
  overflow: "hidden",
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
      },
      incoming: {
        transformOrigin: "bottom left",
      },
    },
    hovered: {
      false: {},
      true: {},
    }
  },
  compoundVariants: [
    {
      variants: {
        variant: "outgoing",
        hovered: true,
      },
      style: {
        transform: "translate(100%, -100%)",
      },
    },
    {
      variants: {
        variant: "incoming",
        hovered: false,
      },
      style: {
        transform: "scale(0)",
      },
    },
  ],
  defaultVariants: {
    hovered: false,
  },
});

export const styles = {
  container,
  icon,
}
