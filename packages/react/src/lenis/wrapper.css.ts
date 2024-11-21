import { globalStyle, style } from "@vanilla-extract/css"

const container = style({

});

globalStyle(
  `${container}.lenis.lenis-smooth`,
  {
    scrollBehavior: "auto",
  },
);

globalStyle(
  `${container}.lenis.lenis-stopped`,
  {
    overflow: "clip",
  },
);

export const styles = {
  container,
} as const;
