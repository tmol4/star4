import { forwardRef, type ReactNode } from "react";

export namespace ListItem {
  export type Type =
    | "text"
    | "button"
    | "link";

  export type Props =
    & {
      selected?: boolean;
      leading?: ReactNode;
      trailing?: ReactNode;
    };
  export interface Element extends HTMLElement {}
}
export const ListItem = forwardRef<ListItem.Element, ListItem.Props>(
  (
    {
      selected = false,
    },
    forwardedRef,
  ) => {
    return (
      <div>

      </div>
    );
  },
);
