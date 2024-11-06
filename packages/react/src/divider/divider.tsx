import { forwardRef, memo, type ForwardedRef, type HTMLAttributes } from "react";
import clsx from "clsx/lite";

import { styles } from "./divider.css";
import { createIdentifiableElement } from "@star4/react-utils";

export namespace Divider {
  export type Props =
    & Omit<
      HTMLAttributes<HTMLElement>,
      "children"
    >
    & {};

  export interface Element extends HTMLElement {}
}

const DividerComponent = forwardRef<Divider.Element, Divider.Props>(
  function Divider(
    {
      className,
      ...rest
    },
    forwardedRef,
  ) {
    return (
      <div
        ref={forwardedRef as ForwardedRef<HTMLDivElement>}
        className={clsx(styles.container, className)}
        {...rest} />
    )
  },
);

export const Divider = Object.assign(
  memo(DividerComponent),
  createIdentifiableElement("IS_DIVIDER"),
);
