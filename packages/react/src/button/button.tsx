import { forwardRef, isValidElement, useImperativeHandle, useRef, type ButtonHTMLAttributes, type ReactElement, type ReactNode } from "react";
import { FocusRing } from "../focus";
import { Ripple } from "../ripple";
import clsx from "clsx";
import { styles } from "./button.css";
import { createIdentifiableElement } from "@star4/react-utils";

export const IS_BUTTON = Symbol("button");

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

const Component = forwardRef<Button.Element, Button.Props>(
  function Button(
    {
      className,
      disabled,
      variant,
      icon,
      label,
      ...rest
    },
    forwardedRef,
  ) {
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
            disabled,
          }),
          className,
        )}
        disabled={disabled}
        {...rest}>
          <Ripple for={ref} disabled={disabled} />
          <FocusRing for={ref} />
          {variant === "outlined" && (
            <div className={
              styles.outline({ disabled })
            } />
          )}
          {icon}
          <span>{label}</span>
      </button>
    )
  },
);

export const Button = Object.assign(
  Component,
  createIdentifiableElement("IS_BUTTON"),
);
