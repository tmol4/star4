import type { PropsWithoutRef, ReactNode, RefAttributes, WeakValidationMap } from "react";

export type ForwardRefExoticComponentProps<T, P = {}> = PropsWithoutRef<P> & RefAttributes<T>;

export type ComposableForwardRefExoticComponent<
  P = {},
  C extends (props: P) => ReactNode = (props: P) => ReactNode,
> =
  & ComposableNamedExoticComponent<P, C>
  & {
    /**
     * @deprecated Use {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#default_value|default values for destructuring assignments instead}.
     */
    defaultProps?: Partial<P> | undefined;
    propTypes?: WeakValidationMap<P> | undefined;
  };

export type ComposableNamedExoticComponent<P = {}, C extends (props: P) => ReactNode = (props: P) => ReactNode> =
  & ComposableExoticComponent<P, C>
  & {
    /**
     * Used in debugging messages. You might want to set it
     * explicitly if you want to display a different name for
     * debugging purposes.
     *
     * @see {@link https://legacy.reactjs.org/docs/react-component.html#displayname Legacy React Docs}
     */
    displayName?: string | undefined;
  };

export type ComposableExoticComponent<P = {}, C extends (props: P) => ReactNode = (props: P) => ReactNode> =
  & C
  & {
    readonly $$typeof: symbol;
  }
