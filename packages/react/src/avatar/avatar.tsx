import { forwardRef, useImperativeHandle, useRef, type HTMLAttributes, type ReactNode } from "react";
import { Ripple } from "../ripple";
import { FocusRing } from "../focus";
import clsx from "clsx";
import { styles } from "./avatar.css";

export namespace Avatar {
  export type Props =
    & Omit<
      HTMLAttributes<HTMLElement>,
      "children"
    >
    & {
      children?: ReactNode;
    };

  export interface Element extends HTMLElement {}
}

export const Avatar = forwardRef<Avatar.Element, Avatar.Props>(
  (
    {
      className,
      children,
      ...rest
    },
    forwardedRef,
  ) => {
    const ref = useRef<HTMLButtonElement>(null);
    useImperativeHandle(
      forwardedRef,
      () => ref.current!,
      [],
    );

    return (
      <button
        ref={ref}
        className={clsx(styles.container, className)}
        {...rest}>
          <Ripple for={ref} />
          <FocusRing for={ref} />
          {children}
      </button>
    );
  },
);
