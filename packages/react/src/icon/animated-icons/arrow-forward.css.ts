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
const icons = recipe({
  base: {
    position: "absolute",
    left: "-100%",
    right: 0,
    top: 0,
    bottom: 0,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    color: "inherit",

    transitionProperty: "transform",
    transitionDuration: THEME.motion.duration.medium4,
    transitionTimingFunction: THEME.motion.easing.emphasized,
  },
  variants: {
    hovered: {
      false: {},
      true: {
        transform: "translateX(50%)",
      },
    }
  }
})

export const styles = {
  container,
  icons,
};
