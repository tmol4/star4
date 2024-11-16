import type { CSSVarFunction } from "./utils";

export {
  THEME,
} from "./tokens";

export * from "./theme";

const isVar = (variable: string): variable is CSSVarFunction => {
  return variable.startsWith("var(") && variable.endsWith(")");
}

export const getVarName = (variable: string): string => {
  if(isVar(variable)) {
    return variable.slice(4, -1);
  }
  return variable;
}
