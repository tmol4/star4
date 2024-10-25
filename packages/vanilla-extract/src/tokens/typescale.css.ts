import { createThemeContract } from "@vanilla-extract/css";
import type { ValueToken, ResolveTokens, CSSVarFunction } from "../utils";
import { TYPEFACE_TOKENS } from "./typeface.css";



export type TypescaleScale =
  | "display"
  | "headline"
  | "title"
  | "body"
  | "label";
export type TypescaleSize =
  | "large"
  | "medium"
  | "small";
export type TypescaleFont = {
  fontFamily: ValueToken;
  fontSize: ValueToken;
  fontWeight: ValueToken;
  lineHeight: ValueToken;
  letterSpacing: ValueToken;
}
export type TypescaleTokens = Record<
  TypescaleScale,
  Record<
    TypescaleSize,
    TypescaleFont
  >
>;

export const TYPESCALE_DEFAULTS: ResolveTokens<TypescaleTokens, string> = {
  display: {
    large: {
      fontFamily: TYPEFACE_TOKENS.brand,
      fontSize: "57px",
      fontWeight: TYPEFACE_TOKENS.weight.regular,
      lineHeight: "64px",
      letterSpacing: "-0.25px",
    },
    medium: {
      fontFamily: TYPEFACE_TOKENS.brand,
      fontSize: "45px",
      fontWeight: TYPEFACE_TOKENS.weight.regular,
      lineHeight: "52px",
      letterSpacing: "0px",
    },
    small: {
      fontFamily: TYPEFACE_TOKENS.brand,
      fontSize: "36px",
      fontWeight: TYPEFACE_TOKENS.weight.regular,
      lineHeight: "44px",
      letterSpacing: "0px",
    },
  },
  headline: {
    large: {
      fontFamily: TYPEFACE_TOKENS.brand,
      fontSize: "32px",
      fontWeight: TYPEFACE_TOKENS.weight.regular,
      lineHeight: "40px",
      letterSpacing: "0px",
    },
    medium: {
      fontFamily: TYPEFACE_TOKENS.brand,
      fontSize: "28px",
      fontWeight: TYPEFACE_TOKENS.weight.regular,
      lineHeight: "36px",
      letterSpacing: "0px",
    },
    small: {
      fontFamily: TYPEFACE_TOKENS.brand,
      fontSize: "24px",
      fontWeight: TYPEFACE_TOKENS.weight.regular,
      lineHeight: "32px",
      letterSpacing: "0px",
    },
  },
  title: {
    large: {
      fontFamily: TYPEFACE_TOKENS.brand,
      fontSize: "22px",
      fontWeight: TYPEFACE_TOKENS.weight.regular,
      lineHeight: "28px",
      letterSpacing: "0px",
    },
    medium: {
      fontFamily: TYPEFACE_TOKENS.plain,
      fontSize: "16px",
      fontWeight: TYPEFACE_TOKENS.weight.medium,
      lineHeight: "24px",
      letterSpacing: "0.15px",
    },
    small: {
      fontFamily: TYPEFACE_TOKENS.plain,
      fontSize: "14px",
      fontWeight: TYPEFACE_TOKENS.weight.medium,
      lineHeight: "20px",
      letterSpacing: "0.1px",
    },
  },
  body: {
    large: {
      fontFamily: TYPEFACE_TOKENS.plain,
      fontSize: "16px",
      fontWeight: TYPEFACE_TOKENS.weight.regular,
      lineHeight: "24px",
      letterSpacing: "0.5px",
    },
    medium: {
      fontFamily: TYPEFACE_TOKENS.plain,
      fontSize: "14px",
      fontWeight: TYPEFACE_TOKENS.weight.regular,
      lineHeight: "20px",
      letterSpacing: "0.25px",
    },
    small: {
      fontFamily: TYPEFACE_TOKENS.plain,
      fontSize: "12px",
      fontWeight: TYPEFACE_TOKENS.weight.regular,
      lineHeight: "16px",
      letterSpacing: "0.4px",
    },
  },
  label: {
    large: {
      fontFamily: TYPEFACE_TOKENS.plain,
      fontSize: "14px",
      fontWeight: TYPEFACE_TOKENS.weight.medium,
      lineHeight: "20px",
      letterSpacing: "0.1px",
    },
    medium: {
      fontFamily: TYPEFACE_TOKENS.plain,
      fontSize: "12px",
      fontWeight: TYPEFACE_TOKENS.weight.medium,
      lineHeight: "16px",
      letterSpacing: "0.5px",
    },
    small: {
      fontFamily: TYPEFACE_TOKENS.plain,
      fontSize: "11px",
      fontWeight: TYPEFACE_TOKENS.weight.medium,
      lineHeight: "16px",
      letterSpacing: "0.5px",
    },
  },
};
const _SIZE = {
  fontFamily: "",
  lineHeight: "",
  fontSize: "",
  letterSpacing: "",
  fontWeight: "",
};
const _SCALE = {
  large: _SIZE,
  medium: _SIZE,
  small: _SIZE
}

export const TYPESCALE_TOKENS: ResolveTokens<TypescaleTokens, CSSVarFunction> = createThemeContract({
  display: _SCALE,
  headline: _SCALE,
  title: _SCALE,
  body: _SCALE,
  label: _SCALE
});
