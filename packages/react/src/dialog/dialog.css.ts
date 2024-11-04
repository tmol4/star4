import { THEME } from "@star4/vanilla-extract";
import { keyframes, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

const modal = recipe({
  base: {
    placeItems: "center",
    placeContent: "center",
  },
});


const enter = keyframes({
  from: {
    transform: "translateY(-50px)",
    clipPath: `inset(0 0 100% 0 round ${THEME.shape.corner.extraLarge})`,
  },
  to: {
    clipPath: `inset(0 0 0 0 round ${THEME.shape.corner.extraLarge})`,
  },
});
const exit = keyframes({
  from: {
    clipPath: `inset(0 0 0 0 round ${THEME.shape.corner.extraLarge})`,
  },
  to: {
    transform: "translateY(-50px)",
    clipPath: `inset(0 0 65% 0 round ${THEME.shape.corner.extraLarge})`,
  },
});
const fadeIn = keyframes({
  from: { opacity: 0 },
});
const fadeOut = keyframes({
  to: { opacity: 0 },
});

const scrim = recipe({
  base: {
    backgroundColor: THEME.color.scrim,
    opacity: 0.32,
  },
  variants: {
    entering: {
      true: {
        animationName: fadeIn,
        animationDuration: THEME.motion.duration.long2,
        animationTimingFunction: THEME.motion.easing.linear,
        animationFillMode: "both",
      },
    },
    exiting: {
      true: {
        animationName: fadeOut,
        animationDuration: THEME.motion.duration.short3,
        animationTimingFunction: THEME.motion.easing.linear,
        animationFillMode: "forwards",
      },
    },
  },
});

const container = recipe({
  base: {
    position: "relative",
    minWidth: 280,
    maxWidth: "min(560px, calc(100% - 48px))", // 24px padding on left & right
    width: "fit-content",
    minHeight: 140,
    maxHeight: "min(560px, calc(100% - 48px))", // 24px padding on top & bottom
    height: "fit-content",

    transformOrigin: "top",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",

    borderRadius: THEME.shape.corner.extraLarge,
    backgroundColor: THEME.color.surfaceContainerHighest,

    // clipPath: `inset(0 0 0 0 round ${THEME.shape.corner.extraLarge})`,

    // TODO: doesn't work because of clip-path
    // boxShadow: `
    //   0px 1px 3px 0px ${THEME.color.shadow},
    //   0px 4px 8px 3px ${THEME.color.shadow}
    // `,
  },
  variants: {
    entering: {
      true: {
        animationName: `${enter}, ${fadeIn}`,
        animationDuration: `${THEME.motion.duration.long2}, ${THEME.motion.duration.short1}`,
        animationTimingFunction: `${THEME.motion.easing.emphasizedDecelerate}, ${THEME.motion.easing.linear}`,
        animationFillMode: "forwards",
      },
    },
    exiting: {
      true: {
        animationName: `${exit}, ${fadeOut}`,
        animationDelay: `0ms, ${THEME.motion.duration.short2}`,
        animationDuration: `${THEME.motion.duration.short3}, ${THEME.motion.duration.short1}`,
        animationTimingFunction: `${THEME.motion.easing.emphasizedAccelerate}, ${THEME.motion.easing.linear}`,
        animationFillMode: "forwards",
      },
    },
  }
});



const headline = recipe({
  base: {
    position: "relative",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBlockEnd: 16,

    ...THEME.typescale.headline.small,
    color: THEME.color.onSurface,
  },
  variants: {
    entering: {
      true: {
        animationName: fadeIn,
        animationDelay: THEME.motion.duration.short1,
        animationDuration: THEME.motion.duration.short4,
        animationTimingFunction: THEME.motion.easing.linear,
        animationFillMode: "both",
      },
    },
    exiting: {
      true: {
        animationName: fadeOut,
        animationDuration: THEME.motion.duration.short2,
        animationTimingFunction: THEME.motion.easing.linear,
        animationFillMode: "forwards",
      },
    },
  },
});

const icon = style({
  inlineSize: 24,
  blockSize: 24,
  marginTop: 24,
  fontSize: 24,
  color: THEME.color.secondary,
  fill: "currentcolor",
});

const headlineText = recipe({
  base: {
    all: "unset",
    alignSelf: "stretch",

    display: "flex",
    alignItems: "center",
    gap: 8,
    paddingInline: 24,
    paddingBlockStart: 24,
  },
  variants: {
    hasIcon: {
      true: {
        justifyContent: "center",
      },
    },
  }
});

const content = recipe({
  base: {
    position: "relative",
    height: "min-content",
    flex: 1,

    paddingInline: 24,

    ...THEME.typescale.body.medium,
    color: THEME.color.onSurfaceVariant,


    // flex: 1;
    // height: min-content; // Needed for Safari
    // position: relative;
  },
  variants: {
    entering: {
      true: {
        animationName: fadeIn,
        animationDelay: THEME.motion.duration.short1,
        animationDuration: THEME.motion.duration.short4,
        animationTimingFunction: THEME.motion.easing.linear,
        animationFillMode: "both",
      },
    },
    exiting: {
      true: {
        animationName: fadeOut,
        animationDuration: THEME.motion.duration.short2,
        animationTimingFunction: THEME.motion.easing.linear,
        animationFillMode: "forwards",
      },
    },
  },
});

const actionsEnter = keyframes({
  from: {
    transform: "translateY(-100%)",
  },
});
const actionsExit = keyframes({
  to: {
    transform: "translateY(-65%)",
  },
});

const actions = recipe({
  base: {
    position: "relative",

    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 8,

    paddingInline: 24,
    paddingBlock: 24,
  },
  variants: {
    entering: {
      true: {
        animationName: `${actionsEnter}, ${fadeIn}`,
        animationDelay: `0ms, ${THEME.motion.duration.short3}`,
        animationDuration: `${THEME.motion.duration.long2}, ${THEME.motion.duration.short3}`,
        animationTimingFunction: `${THEME.motion.easing.emphasizedDecelerate}, ${THEME.motion.easing.linear}`,
        animationFillMode: "both",
      },
    },
    exiting: {
      true: {
        animationName: `${actionsExit}, ${fadeOut}`,
        animationDuration: `${THEME.motion.duration.short3}, ${THEME.motion.duration.short2}`,
        animationTimingFunction: `${THEME.motion.easing.emphasizedAccelerate}, ${THEME.motion.easing.linear}`,
        animationFillMode: "forwards",
      },
    },
  },
});


export const styles = {
  modal,
  scrim,
  container,
  headline,
  icon,
  headlineText,
  content,
  actions,
} as const;
