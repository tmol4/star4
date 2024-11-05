import { Children, forwardRef, useEffect, useImperativeHandle, useMemo, useRef, type HTMLAttributes, type ReactNode, type RefObject } from "react";
import { Ripple } from "../ripple";
import { FocusRing } from "../focus";
import { styles } from "./list-item.css";
import clsx from "clsx/lite";

export namespace ListItem {
  export type Type =
    | "text"
    | "button"
    | "link";

  export type Props =
    & Omit<
      HTMLAttributes<HTMLElement>,
      "children"
    >
    & {
      /**
       * @deprecated Legacy state, not advised for use
       * @defaultValue false
       */
      selected?: boolean;

      /**
       * Explicitly force the item to be multiline, which increases its minimum height
       *
       * @remarks
       * If explicitly set to `false`, the item will not be able to become multi-line
       *
       * @see {@link https://m3.material.io/components/lists/specs|Lists - Material Design 3}
       */
      multiline?: boolean;
      leading?: ReactNode;
      /**
       * @deprecated Legacy slot, not advised for use
       */
      overline?: ReactNode;
      headline: ReactNode;
      supportingText?: ReactNode;
      trailing?: ReactNode;
    };
  export interface Element extends HTMLElement {}
}

// const enum Lines {
//   ONE_LINE = 1,
//   TWO_LINE = 2,
//   THREE_LINE = 3,
// }

export const ListItem = forwardRef<ListItem.Element, ListItem.Props>(
  function ListItem(
    {
      selected = false,
      multiline,
      leading,
      overline,
      headline,
      supportingText,
      trailing,
      className,
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

    const Tag: "div" | "button" | "a" = "button";

    const lines = useMemo<1 | 2 | 3>(
      () => {
        const hasOverline = !!overline;
        const hasSupportingText = !!supportingText;

        const inferredThreeLine = hasOverline && hasSupportingText;
        const inferredOneLine = !hasOverline && !hasSupportingText;
        const inferredTwoLine = !inferredThreeLine && !inferredOneLine;

        if(multiline !== undefined) {
          return multiline ? 3 : inferredTwoLine ? 2 : 1;
        }
        if(inferredThreeLine) return 3;
        if(inferredOneLine) return 1;

        if(!supportingText) return 2;
        const count = Children.count(supportingText);
        return count <= 1 ? 2 : 3;
      },
      [multiline, overline, headline, supportingText],
    );

    return (
      <Tag
        ref={ref as any}
        className={clsx(styles.container({ lines }), className)}
        role="listitem"
        {...rest}>
          <Ripple for={ref} />
          <FocusRing for={ref} className={styles.focusRing} />
          <div className={styles.leading}>
            {leading}
          </div>
          <div className={styles.text}>
            {overline && (
              <span className={styles.overline}>
                {overline}
              </span>
            )}
            {headline && (
              <span className={styles.headline}>
                {headline}
              </span>
            )}
            {supportingText && (
              <span className={styles.supportingText()}>
                {supportingText}
              </span>
            )}
          </div>
          <div className={styles.trailing}>
            {trailing}
          </div>
      </Tag>
    );
  },
);
