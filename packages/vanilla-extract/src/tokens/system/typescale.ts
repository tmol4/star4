import type { Remap } from "../../utils";
import { THEME, type TypescaleTokens } from "..";


export const TYPESCALE_DEFAULTS: Remap<TypescaleTokens> = {
  display: {
    large: {
      fontFamily: THEME.typeface.brand,
      fontSize: "57px",
      fontWeight: THEME.typeface.weight.regular,
      lineHeight: "64px",
      letterSpacing: "-0.25px",
    },
    medium: {
      fontFamily: THEME.typeface.brand,
      fontSize: "45px",
      fontWeight: THEME.typeface.weight.regular,
      lineHeight: "52px",
      letterSpacing: "0px",
    },
    small: {
      fontFamily: THEME.typeface.brand,
      fontSize: "36px",
      fontWeight: THEME.typeface.weight.regular,
      lineHeight: "44px",
      letterSpacing: "0px",
    },
  },
  headline: {
    large: {
      fontFamily: THEME.typeface.brand,
      fontSize: "32px",
      fontWeight: THEME.typeface.weight.regular,
      lineHeight: "40px",
      letterSpacing: "0px",
    },
    medium: {
      fontFamily: THEME.typeface.brand,
      fontSize: "28px",
      fontWeight: THEME.typeface.weight.regular,
      lineHeight: "36px",
      letterSpacing: "0px",
    },
    small: {
      fontFamily: THEME.typeface.brand,
      fontSize: "24px",
      fontWeight: THEME.typeface.weight.regular,
      lineHeight: "32px",
      letterSpacing: "0px",
    },
  },
  title: {
    large: {
      fontFamily: THEME.typeface.brand,
      fontSize: "22px",
      fontWeight: THEME.typeface.weight.regular,
      lineHeight: "28px",
      letterSpacing: "0px",
    },
    medium: {
      fontFamily: THEME.typeface.plain,
      fontSize: "16px",
      fontWeight: THEME.typeface.weight.medium,
      lineHeight: "24px",
      letterSpacing: "0.15px",
    },
    small: {
      fontFamily: THEME.typeface.plain,
      fontSize: "14px",
      fontWeight: THEME.typeface.weight.medium,
      lineHeight: "20px",
      letterSpacing: "0.1px",
    },
  },
  body: {
    large: {
      fontFamily: THEME.typeface.plain,
      fontSize: "16px",
      fontWeight: THEME.typeface.weight.regular,
      lineHeight: "24px",
      letterSpacing: "0.5px",
    },
    medium: {
      fontFamily: THEME.typeface.plain,
      fontSize: "14px",
      fontWeight: THEME.typeface.weight.regular,
      lineHeight: "20px",
      letterSpacing: "0.25px",
    },
    small: {
      fontFamily: THEME.typeface.plain,
      fontSize: "12px",
      fontWeight: THEME.typeface.weight.regular,
      lineHeight: "16px",
      letterSpacing: "0.4px",
    },
  },
  label: {
    large: {
      fontFamily: THEME.typeface.plain,
      fontSize: "14px",
      fontWeight: THEME.typeface.weight.medium,
      lineHeight: "20px",
      letterSpacing: "0.1px",
    },
    medium: {
      fontFamily: THEME.typeface.plain,
      fontSize: "12px",
      fontWeight: THEME.typeface.weight.medium,
      lineHeight: "16px",
      letterSpacing: "0.5px",
    },
    small: {
      fontFamily: THEME.typeface.plain,
      fontSize: "11px",
      fontWeight: THEME.typeface.weight.medium,
      lineHeight: "16px",
      letterSpacing: "0.5px",
    },
  },
};
