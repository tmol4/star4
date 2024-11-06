import { THEME } from "@star4/vanilla-extract";
import { createVar } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const container = recipe({
  base: {
    position: "relative",
    height: 48,



    borderRadius: THEME.shape.corner.full,
    backgroundColor: THEME.color.secondaryContainer,
    isolation: "isolate",


    scrollbarWidth: "none",
    msOverflowStyle: "none",
    "::-webkit-scrollbar": {
      width: 0,
      height: 0,
    },
    overflowX: "auto",
    overflowY: "hidden",

    userSelect: "none",
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
        paddingInlineStart: 52 - 4, // Account for tab padding
      },
    },
  },
  defaultVariants: {
    scrollable: false,
  },
});

const list = recipe({
  base: {
    height: "100%",

    display: "grid",
    gridAutoFlow: "column",
    gridAutoColumns: "1fr",
  },
  variants: {
    animate: {
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
        paddingInlineStart: 52 - 4, // Account for tab padding
      },
    },
  },
  defaultVariants: {
    scrollable: false,
  },
});

export const styles = {
  container,
  list,
} as const;
