import { splitProps, type Component, type JSX, type Ref } from "solid-js";
import clsx from "clsx/lite";
import { styles } from "./tab-indicator.css";
import { forwardRef, memo, type ForwardedRef, type HTMLAttributes } from "react";
import { createIdentifiableElement } from "@star4/react-utils";

export namespace TabIndicator {
  export type Props =
    & Omit<
      HTMLAttributes<HTMLElement>,
      "children"
    >;

  export interface Element extends HTMLElement {}
}

const TabIndicatorComponent = forwardRef<TabIndicator.Element, TabIndicator.Props>(
  function TabIndicator({ className, ...rest }, forwardedRef) {
    return (
      <div
        ref={forwardedRef as ForwardedRef<HTMLDivElement>}
        className={clsx(
          styles.container,
          className,
        )}
        {...rest}>
          <div className={styles.indicator} />
      </div>
    );
  }
);
export const TabIndicator = Object.assign(
  memo(TabIndicatorComponent),
  createIdentifiableElement("IS_TAB_INDICATOR"),
);
