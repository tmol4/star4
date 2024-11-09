import { createTokens } from "@star4/tokens";
import { createGlobalThemeContract, createThemeContract } from "@vanilla-extract/css";

const EMPTY_TOKENS = createTokens({
  join: () => ""
});
const UNPREFIXED_TOKENS = createTokens({ prefixes: ["star4"] });
export const THEME = createGlobalThemeContract(UNPREFIXED_TOKENS);
