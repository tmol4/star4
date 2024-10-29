import { THEME } from "@star4/vanilla-extract";
import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const container = recipe({
  base: {
    position: "relative",
    height: 48,

    display: "grid",
    gridAutoFlow: "column",
    gridAutoColumns: "1fr",

    borderRadius: THEME.shape.corner.full,
    backgroundColor: THEME.color.secondaryContainer,
    isolation: "isolate",

    // scrollBehavior: "smooth",
    overflowX: "scroll",
    overflowY: "visible",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    "::-webkit-scrollbar": {
      width: 0,
      height: 0,
    },

    userSelect: "none",

    // "::after": {
    //   content: "",
    //   position: "absolute",
    //   inset: 0,
    //   // border: `1px solid ${THEME.color.outlineVariant}`,
    //   borderRadius: "inherit",

    //   pointerEvents: "none",
    // },
  },
  variants: {
    animate: {
      false: {},
      true: {
        transitionProperty: "padding-inline-start",
        transitionDuration: THEME.motion.duration.medium2,
        transitionTimingFunction: THEME.motion.easing.emphasized,
      },
    },
    scrollable: {
      false: {
        paddingInlineStart: 0,
      },
      true: {
        paddingInlineStart: 48,
      },
    },
  },
  defaultVariants: {
    scrollable: false,
  },
});

export const styles = {
  container,
} as const;
