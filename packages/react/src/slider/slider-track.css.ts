import { THEME } from "@star4/vanilla-extract";
import { createVar, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const vars = {
  fraction: createVar("fraction"),
} as const;


const wrapper = style({
  userSelect: "none",
  pointerEvents: "none",

  position: "relative",

  minWidth: 0,
  flexGrow: vars.fraction,
  height: 16,
});
const container = recipe({
  base: {
    position: "absolute",
    overflow: "hidden",

    insetBlock: 0,
    borderRadius: THEME.shape.corner.extraSmall,

    insetInline: 6,

    transition: `inset-inline 100ms ${THEME.motion.easing.standard}`,
  },
  variants: {
    active: {
      false: {
        backgroundColor: THEME.color.secondaryContainer,
        "::before": {
          backgroundColor: THEME.color.primary,
        },
      },
      true: {
        backgroundColor: THEME.color.primary,
        "::before": {
          backgroundColor: THEME.color.secondaryContainer,
        },
      },
    },
    segment: {
      start: {
        insetInline: "0 6px",
        borderStartStartRadius: THEME.shape.corner.small,
        borderEndStartRadius: THEME.shape.corner.small,
      },
      end: {
        insetInline: "6px 0",
        borderStartEndRadius: THEME.shape.corner.small,
        borderEndEndRadius: THEME.shape.corner.small,
      },
    },
    pressed: {
      true: {},
    },
    stop: {
      true: {
        "::before": {
          content: "",
          position: "absolute",
          top: "50%",
          translate: "0 -50%",
          width: 4,
          height: 4,
          borderRadius: THEME.shape.corner.full,
        },
      },
    },
  },
  defaultVariants: {
    pressed: false,
    active: false,
    stop: false,
  },
  compoundVariants: [
    {
      variants: {
        segment: "start",
        pressed: true,
      },
      style: {
        insetInlineEnd: 5,
      },
    },
    {
      variants: {
        segment: "end",
        pressed: true,
      },
      style: {
        insetInlineStart: 5,
      },
    },
    {
      variants: {
        segment: "start",
        stop: true,
      },
      style: {
        "::before": {
          insetInlineStart: 4, // TODO: 6dp seems to look nicer, but the official specification says 4dp
        },
      },
    },
    {
      variants: {
        segment: "end",
        stop: true,
      },
      style: {
        "::before": {
          insetInlineEnd: 4, // TODO: 6dp seems to look nicer, but the official specification says 4dp
        },
      },
    },
  ],
});

export const styles = {
  wrapper,
  container,
} as const;
