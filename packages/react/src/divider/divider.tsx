import { forwardRef, type ForwardedRef, type HTMLAttributes } from "react";
import clsx from "clsx/lite";

import { styles } from "./divider.css";

export namespace Divider {
  export type Props =
    & Omit<
      HTMLAttributes<HTMLElement>,
      "children"
    >
    & {};

  export interface Element extends HTMLElement {}
}

export const Divider = forwardRef<Divider.Element, Divider.Props>(
  (
    {
      className,
      ...rest
    },
    forwardedRef,
  ) => {
    return (
      <div
        ref={forwardedRef as ForwardedRef<HTMLDivElement>}
        className={clsx(styles.container, className)}
        {...rest} />
    )
  },
);
