import { style } from "@vanilla-extract/css";

const container = style({
  paddingInline: 16,
  paddingBlock: 8,
});

export const styles = {
  container,
} as const;
