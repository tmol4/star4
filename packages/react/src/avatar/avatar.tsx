import { forwardRef, memo, useImperativeHandle, useMemo, useRef, type HTMLAttributes, type ReactNode } from "react";
import { Ripple } from "../ripple";
import { FocusRing } from "../focus";
import clsx from "clsx";
import { styles } from "./avatar.css";
import { createIdentifiableElement } from "@star4/react-utils";

export namespace Avatar {
  export type Props =
    & Omit<
      HTMLAttributes<HTMLElement>,
      "children"
    >
    & {
      type?: "button";
      /**
       * Avatar content. Can be an image, icon or a letter
       */
      children?: ReactNode;
    };

  export interface Element extends HTMLElement {}
}

const AvatarComponent = forwardRef<Avatar.Element, Avatar.Props>(
  function Avatar(
    {
      type,
      className,
      children,
      ...rest
    },
    forwardedRef,
  ) {
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

/**
 * Avatars can be used to display images, icons or initials
 *
 * @remarks
 * Although being a Material Design 3 component, avatar doesn't have its own specification.
 *
 * @see {@link https://m3.material.io/components/lists/specs|Lists - Material Design 3}
 * @see {@link https://api.flutter.dev/flutter/material/CircleAvatar-class.html|CircleAvatar - Flutter}
 *
 * @experimental
 *
 * @example
 * An avatar with an initial letter
 * ```tsx
 * // "B" for "Bob"
 * <Avatar>B</Avatar>
 * ```
 *
 * @example
 * An avatar with an image
 * ```tsx
 * <Avatar><img src="..." alt="Username" /></Avatar>
 * ```
 *
 * @example
 * An avatar with an icon
 * ```tsx
 * <Avatar>
 *   <MaterialSymbol name="account_circle" />
 * </Avatar>
 * ```
 */
export const Avatar = Object.assign(
  memo(AvatarComponent),
  createIdentifiableElement("IS_AVATAR"),
);
