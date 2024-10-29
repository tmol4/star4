import { createThemeContract } from "@vanilla-extract/css";
import type { ResolveContract, ResolveTokens, ValueToken } from "../../utils";

export type IconTokens = {
  size: ValueToken;
}

export const ICON_TOKENS = createThemeContract<
  ResolveTokens<IconTokens, string>
>({
  size: "",
});

export const ICON_DEFAULTS: ResolveTokens<IconTokens, string> = {
  size: "24px",
}
