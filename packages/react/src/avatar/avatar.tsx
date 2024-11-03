import { forwardRef, useImperativeHandle, useMemo, useRef, type HTMLAttributes, type ReactNode } from "react";
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
      type?: "button";
      children?: ReactNode;
    };

  export interface Element extends HTMLElement {}
}

export const Avatar = forwardRef<Avatar.Element, Avatar.Props>(
  (
    {
      type,
      className,
      children,
      ...rest
    },
    forwardedRef,
  ) => {
    const ref = useRef<HTMLElement>(null);
    useImperativeHandle(
      forwardedRef,
      () => ref.current!,
      [],
    );

    const interactive = useMemo(
      () => type === "button",
      [type],
    );

    const Tag = useMemo(
      () => type === "button" ? "button" : "div",
      [type],
    );

    return (
      <Tag
        ref={ref as any}
        className={clsx(styles.container, className)}
        {...rest}>
          {interactive && (
            <>
              <Ripple for={ref} />
              <FocusRing for={ref} />
            </>
          )}
          {children}
      </Tag>
    );
  },
);
