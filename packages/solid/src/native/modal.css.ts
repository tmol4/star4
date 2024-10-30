import { style } from "@vanilla-extract/css";

const native = style({});
const portal = style({});

export const styles = {
  native,
  portal,
} as const;
