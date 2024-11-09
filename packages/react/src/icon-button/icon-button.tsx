import { forwardRef, Fragment, memo, useImperativeHandle, useRef, type ButtonHTMLAttributes, type HTMLAttributes, type ReactNode, type RefObject } from "react";
import { FocusRing } from "../focus";
import { Ripple } from "../ripple";
import { createIdentifiableElement } from "@star4/react-utils";
import clsx from "clsx/lite";
import { styles } from "./icon-button.css";

export namespace IconButton {
  export type SharedProps = {
    variant?: "regular" | "filled" | "filledTonal" | "outlined";
    icon: ReactNode;
  }
  export type StaticProps = {
    selected?: never;
    selectedIcon?: never;
  }
  export type ToggleProps = {
    selected: boolean;
    /**
     * @defaultValue {@link ToggleProps.icon|IconButton.icon}
     */
    selectedIcon?: ReactNode;
  }

  export type Props =
    & Omit<
      ButtonHTMLAttributes<HTMLButtonElement>,
      "children"
    >
    & SharedProps
    & (StaticProps | ToggleProps);

  export interface Element extends HTMLButtonElement {}
}

const IconButtonComponent = forwardRef<IconButton.Element, IconButton.Props>(
  function IconButton(
    {
      className,
      variant = "regular",
      selected,
      disabled = false,
      icon,
      selectedIcon = icon,
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
            selected: selected !== undefined ? selected : undefined,
            disabled,
          }),
          className,
        )}
        disabled={disabled}
        {...rest}>
          <Ripple for={ref} disabled={disabled} />
          <FocusRing for={ref} />
          {selected ? icon : selectedIcon}
          <div className={styles.touchTarget} />
      </button>
    );
  },
);

export const IconButton = Object.assign(
  memo(IconButtonComponent),
  createIdentifiableElement("IS_ICON_BUTTON"),
);
