import { isValidElement, type JSXElementConstructor, type ReactElement, type ReactNode } from "react";

export const isFactory = <Key extends keyof any, Value, P = any>(key: Key, is: (value: Value) => boolean) => {
  return (node: ReactNode): node is ReactElement<P> => {
    if(!isValidElement(node)) return false;
    const type = node.type;
    return typeof type !== "string" &&
      key in type &&
      is((type as JSXElementConstructor<any> & { [K in Key]: Value })[key]);
  };
}

const IS_FALLBACK: unique symbol = Symbol("IS_FALLBACK");

export type IdentifiableComponent<P = any> = {
  is: (node: ReactNode) => node is ReactElement<P>;
}

export const createIdentifiableElement = <P = any>(
  description?: string | number,
): IdentifiableComponent<P> => {
  const IS = Symbol(description);
  return {
    [IS]: true,
    is: (node: ReactNode): node is ReactElement<P> => {
      if(!isValidElement(node)) return false;
      const type = node.type;
      return typeof type !== "string" &&
        IS in type &&
        type[IS] === true;
    },
  } as IdentifiableComponent<P>;
}
