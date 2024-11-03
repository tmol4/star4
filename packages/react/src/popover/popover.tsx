import { forwardRef, useCallback, useEffect, useImperativeHandle, useRef, type HTMLAttributes, type ReactNode } from "react";
import { styles } from "./popover.css";
import { createPortal } from "react-dom";
import clsx from "clsx/lite";

export namespace Popover {
  export type Props =
    & Omit<
      HTMLAttributes<HTMLElement>,
      "popover" | "children"
    >
    & {
      open?: boolean;
      children: ReactNode;
    };
  export interface Element extends HTMLElement {}
}

const NativePopover = forwardRef<Popover.Element, Popover.Props>(
  (
    {
      className,
      open = false,
      children,
      ...rest
    },
    forwardedRef,
  ) => {
    const ref = useRef<HTMLDivElement>(null);
    useImperativeHandle(
      forwardedRef,
      () => ref.current!,
      [],
    );

    useEffect(
      () => {
        if(!ref.current) return;
        if(open) {
          ref.current.showPopover();
        } else {
          ref.current.hidePopover();
        }
      },
      [open],
    );

    return (
      <div
        ref={ref}
        className={clsx(styles.native({ open }), className)}
        popover="manual"
        {...rest}
        children={children} />
    );
  },
);

const PortalPopover = forwardRef<Popover.Element, Popover.Props>(
  (
    {
      open = false,
      className,
      children,
      ...rest
    },
    forwardedRef
  ) => {
    const ref = useRef<HTMLDivElement>(null);
    useImperativeHandle(
      forwardedRef,
      () => ref.current!,
      [],
    );

    return createPortal(
      open && (
        <div
          ref={ref}
          className={clsx(styles.portal({ open }), className)}
          {...rest}
          children={children} />
      ),
      document.body,
    );
  },
);


const SUPPORTS_NATIVE =
  "popover" in HTMLElement.prototype &&
  "showPopover" in HTMLElement.prototype &&
  typeof HTMLElement.prototype.showPopover === "function";

export const Popover = SUPPORTS_NATIVE ? NativePopover : PortalPopover;
