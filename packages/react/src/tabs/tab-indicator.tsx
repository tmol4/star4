import { splitProps, type Component, type JSX, type Ref } from "solid-js";
import clsx from "clsx/lite";
import { styles } from "./tab-indicator.css";
import { forwardRef, type ForwardedRef, type HTMLAttributes } from "react";

export namespace TabIndicator {
  export type Props =
    & Omit<
      HTMLAttributes<HTMLElement>,
      "children"
    >;

  export interface Element extends HTMLElement {}
}

export const TabIndicator = forwardRef<TabIndicator.Element, TabIndicator.Props>(
  function TabIndicator({ className, ...rest }, forwardedRef) {
    return (
      <div
        ref={forwardedRef as ForwardedRef<HTMLDivElement>}
        className={clsx(
          styles.container,
          className,
        )}
        {...rest}>
          <div className={styles.indicator} />
      </div>
    );
  }
);

// export const TabIndicator: Component<TabIndicator.Props> = (props) => {
//   const [local, others] = splitProps(
//     props,
//     ["ref", "class"]
//   )
//   return (
//     <div
//       ref={local.ref as HTMLDivElement}
//       class={clsx(
//         styles.container,
//         local.class,
//       )}
//       {...others}>
//         <div class={styles.indicator} />
//     </div>
//   );
// }
