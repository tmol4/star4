import { forwardRef, useImperativeHandle, useRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { FocusRing } from "../focus";
import { Ripple } from "../ripple";
import clsx from "clsx";
import { styles } from "./button.css";

export namespace Button {
  export type Variant = "elevated" | "filled" | "filledTonal" | "outlined" | "text";
  export type Props =
    & Omit<
      ButtonHTMLAttributes<HTMLButtonElement>,
      "children"
    >
    & {
      variant: Variant;
      icon?: ReactNode;
      label: ReactNode;
    };
  export interface Element extends HTMLButtonElement {}
}

export const Button = forwardRef<Button.Element, Button.Props>(
  (
    {
      className,
      disabled,
      variant,
      icon,
      label,
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
        className={clsx(
          styles.container({
            variant,
          }),
          className,
        )}
        disabled={disabled}
        {...rest}>
          <Ripple for={ref} disabled={disabled} />
          <FocusRing for={ref} />
          {variant === "outlined" && (
            <div className={
              styles.outline({})
            } />
          )}
          {icon && (
            <div>
              {icon}
            </div>
          )}
          <span>{label}</span>
      </button>
    )
  },
);
