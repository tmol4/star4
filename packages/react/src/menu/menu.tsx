import { Children, createContext, forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState, type ReactNode } from "react";
import { Button, IS_BUTTON } from "../button";
import { createIdentifiableElement, usePresence } from "@star4/react-utils";
import { Ripple } from "../ripple";
import { FocusRing } from "../focus";
import { styles } from "./menu.css";

export namespace Menu {
  export type Props = {
    open?: boolean;
    children: ReactNode;
  }

  export interface Element extends HTMLElement {}
}

type InternalMenuData = {

}

const InternalMenuContext = createContext<InternalMenuData | undefined>(undefined);
const MenuComponent = forwardRef<Menu.Element, Menu.Props>(
  function Menu(
    {
      open = false,
      children
    },
    forwardedRef,
  ) {
    const items = Children.toArray(children)
      .filter((node, index) => {
        const is = MenuItem.is(node);
        if(!is) {
          console.warn(
            "Invalid JSX Element passed to token resolver:",
            node,
          );
        }
        return is;
      });
    const ref = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    const {} = usePresence({
      source: open,
      transitionDuration: [500, 150],
    });

    const [height, setHeight] = useState<number>();

    const resizeObserver = new ResizeObserver(
      (entries) => {
        const entry = entries[0];
        const element = entry.target as HTMLElement;
        const height = element.offsetHeight;
        setHeight(height);
      }
    );

    useEffect(
      () => {
        const element = listRef.current;
        if(!element) return;

        resizeObserver.observe(element);
        return () => {
          resizeObserver.unobserve(element);
        };
      },
      [],
    );

    return (
      <div ref={ref} className={styles.container({})} style={{ height }}>
        <div ref={listRef} className={styles.items()}>
          <InternalMenuContext.Provider value={{}}>
            {items}
          </InternalMenuContext.Provider>
        </div>
      </div>
    )
  },
);


export namespace Menu {
  export namespace Item {
    export type Props = {
      headline: ReactNode;
    }
    export interface Element extends HTMLElement {}
  }
}

const MenuItemComponent = forwardRef<Menu.Item.Element, Menu.Item.Props>(
  function MenuItem(
    { headline },
    forwardedRef,
  ) {
    const context = useContext(InternalMenuContext);
    if(!context) {
      console.warn(
        "[star4]: Menu context not found. Make sure to wrap Menu components in <Menu>. This component will not render."
      );
      return;
    }
    const {} = context;

    const ref = useRef<HTMLButtonElement>(null);
    useImperativeHandle(
      forwardedRef,
      () => ref.current!,
      [],
    );

    return (
      <button ref={ref}>
        <Ripple for={ref} />
        <FocusRing for={ref} />
        <h2>{headline}</h2>
      </button>
    )
  },
);

const MenuItem = Object.assign(
  MenuItemComponent,
  createIdentifiableElement("IS_MENU_ITEM"),
);

export const Menu = Object.assign(
  MenuComponent,
  {
    Item: MenuItem,
    ...createIdentifiableElement("IS_MENU"),
  },
);
