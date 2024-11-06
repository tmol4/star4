import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { THEME } from "~/theme";

const MEDIA_COMPACT = "only screen and (max-width: 599px)";

const layout = style({
  display: "grid",
  gridTemplateRows: "auto 1fr",
  gridTemplateColumns: "1fr 1fr",
  gap: 16,

  gridAutoFlow: "column",

  maxWidth: "100dvw",

  "@media": {
    [MEDIA_COMPACT]: {
      gridTemplateRows: "auto auto 1fr",
      gridTemplateColumns: "1fr",
    },
  },
});

const card = style({
  backgroundColor: THEME.color.surfaceVariant,
  borderRadius: 28,
  gridRow: 1,
});
const textCard = style([
  card,
  {
    gridColumn: 1,
    padding: 56,

    "@media": {
      [MEDIA_COMPACT]: {
        gridRow: 2,
        gridColumn: 1,
        paddingInline: 24,
        paddingBlock: 16,
      },
    },
  },
]);
const imageCard = style([
  card,
  {
    gridColumn: 2,
    // minHeight: 64,
    color: THEME.color.onSurfaceVariant,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,

    paddingInline: 24,
    paddingBlock: 16,

    "@media": {
      [MEDIA_COMPACT]: {
        gridRow: 1,
        gridColumn: 1,
      },
    },
  },
]);

const headline = style({
  marginBlockEnd: 8,
  ...THEME.typescale.display.large,
  color: THEME.color.onSurface,

  "@media": {
    [MEDIA_COMPACT]: {
      marginBlockEnd: 4,
      ...THEME.typescale.headline.large,
    },
  },
});
const supportingText = style({
  ...THEME.typescale.title.large,
  color: THEME.color.onSurfaceVariant,
  textWrap: "pretty",

  "@media": {
    [MEDIA_COMPACT]: {
      ...THEME.typescale.body.large,
    },
  },
});

const container = style({
  gridRow: 2,
  gridColumn: "span 2",
  minWidth: 0,
  minHeight: 0,

  "@media": {
    [MEDIA_COMPACT]: {
      gridRow: 3,
      gridColumn: 1,
    },
  },
});

export const styles = {
  layout,
  textCard,
  imageCard,
  headline,
  supportingText,
  container,
};
