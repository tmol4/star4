import { createIdentifiableElement, type ComposableForwardRefExoticComponent, type ForwardRefExoticComponentProps } from "@star4/react-utils";
import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import clsx from "clsx/lite";
import { Ripple } from "../ripple";
import { FocusRing } from "../focus";
import { useInternalTabBarContext, type TabBar } from "./tab-bar";
import { styles } from "./tab.css";

export namespace Tab {
  export type Props<T extends Value> =
    & Omit<
      ButtonHTMLAttributes<HTMLButtonElement>,
      "role" | "children"
    >
    & {
      value: T;
      icon?: ReactNode;
      label: ReactNode;
    };
  export type PropsWithRef<T extends Value> = ForwardRefExoticComponentProps<Tab.Element, Tab.Props<T>>;
  export type Value = TabBar.Value;
  export interface Element extends HTMLButtonElement {}
}
const TabComponent = forwardRef<Tab.Element, Tab.Props<Tab.Value>>(
  function Tab(
    {
      className,
      onClick,
      value,
      icon,
      label,
      ...rest
    },
    forwardedRef,
  ) {
    const { isSelected, setSelected } = useInternalTabBarContext();


    const ref = useRef<HTMLButtonElement>(null);
    useImperativeHandle(
      forwardedRef,
      () => ref.current!,
      [],
    );

    const selected = useMemo(() => isSelected(value), [value, isSelected]);


    useEffect(
      () => {

      },
      [],
    );

    return (
      <button
        ref={ref}
        className={clsx(
          styles.container({ selected }),
          className
        )}
        role="tab"
        onClick={(event) => {
          setSelected(value);
          onClick?.(event);
        }}
        {...rest}>
          <Ripple for={ref} className={styles.stateLayer} />
          <FocusRing for={ref} />
          <span className={styles.content({ selected })}>
            {icon}
            {label}
          </span>
      </button>
    )
  },
) as ComposableForwardRefExoticComponent<
  Tab.PropsWithRef<Tab.Value>,
  <T extends Tab.Value>(props: Tab.PropsWithRef<T>) => ReactNode
>;

export const Tab = Object.assign(
  TabComponent,
  createIdentifiableElement<Tab.Props<Tab.Value>>("IS_TAB"),
);
