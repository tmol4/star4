import { forwardRef, type ForwardedRef, type HTMLAttributes, type Ref, type RefObject } from "react";
import clsx from "clsx/lite";
import { useFocusVisible } from "../utils";

import { styles } from "./focus-ring.css";


export namespace FocusRing {
  export type Props =
    & Omit<
      // JSX.HTMLAttributes<HTMLElement>,
      // | keyof JSX.CustomEventHandlersLowerCase<HTMLElement>
      // | keyof JSX.CustomEventHandlersCamelCase<HTMLElement>
      // | "ref" | "children"
      HTMLAttributes<HTMLElement>,
      "children"
    >
    & {
      for: RefObject<HTMLElement>;
      show?: boolean;
    };

  export interface Element extends HTMLElement {
    // focusVisible: Accessor<boolean>;
  }
}

export const FocusRing = forwardRef<FocusRing.Element, FocusRing.Props>(
  (
    {
      for: target,
      className,
      ...rest
    },
    forwardedRef,
  ) => {
    const visible = useFocusVisible(target);

    return (
      <div
        ref={forwardedRef as ForwardedRef<HTMLDivElement>}
        className={clsx(
          styles.focusRing({ visible }),
          className,
        )}
        {...rest} />
    )
  },
);
