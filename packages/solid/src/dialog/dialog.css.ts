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
});
const exit = keyframes({
  to: {
    transform: "translateY(-50px)",
    clipPath: `inset(0 0 75% 0 round ${THEME.shape.corner.extraLarge})`,
  },
});

const opacityEnter = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});
const opacityExit= keyframes({
  from: {
    opacity: 1,
  },
  to: {
    opacity: 0,
  },
});

const container = recipe({
  base: {
    minWidth: 280,
    maxWidth: 560,

    transformOrigin: "top",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",

    backgroundColor: THEME.color.surfaceContainerHighest,

    clipPath: `inset(0 0 0 0 round ${THEME.shape.corner.extraLarge})`,
  },
  variants: {
    entering: {
      true: {
        animationName: `${enter}, ${opacityEnter}`,
        animationDuration: `${THEME.motion.duration.long2}, ${THEME.motion.duration.short1}`,
        animationTimingFunction: `${THEME.motion.easing.emphasizedDecelerate}, ${THEME.motion.easing.linear}`,
        animationFillMode: "both",
      }
    },
    exiting: {
      true: {
        animationName: `${exit}, ${opacityExit}`,
        animationDelay: `0ms, ${THEME.motion.duration.short2}`,
        animationDuration: `${THEME.motion.duration.short3}, ${THEME.motion.duration.short1}`,
        animationTimingFunction: `${THEME.motion.easing.emphasizedAccelerate}, ${THEME.motion.easing.linear}`,
        animationFillMode: "both",
      },
    },
  },
});

const headline = recipe({
  base: {
    position: "relative",

    display: "flex",
    alignItems: "center",

    ...THEME.typescale.headline.small,
    color: THEME.color.onSurface,
  },
});

const content = recipe({
  base: {},
});

const actions = recipe({
  base: {
    position: "relative",

    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 8,

    paddingInline: 24,
    paddingBlock: "16px 24px",
  },
});

export const styles = {
  modal,
  container,
  headline,
  actions,
} as const;
