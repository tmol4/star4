import { createIdentifiableElement, type ComposableForwardRefExoticComponent, type ForwardRefExoticComponentProps } from "@star4/react-utils";
import { Children, cloneElement, createContext, forwardRef, useCallback, useContext, useEffect, useMemo, useRef, useState, type HTMLAttributes, type ReactNode } from "react";
import { Tab } from "./tab";
import { styles } from "./tab-bar.css";

import clsx from "clsx/lite";
import { TabIndicator } from "./tab-indicator";

export namespace TabBar {
  export type Props<T extends Value> =
    & Omit<
      HTMLAttributes<HTMLElement>,
      "role" | "children"
    >
    & {
      value: T;
      onValueChange?: (value: T) => void;
      children: ReactNode;
    };

  export type Value = string | number | symbol;

  export interface Element extends HTMLElement {}
}

type InternalTabBarContext = {
  index: number;
  isSelected: (value: TabBar.Value) => boolean;
  setSelected: (value: TabBar.Value) => void;
}

const InternalTabBarContext = createContext<InternalTabBarContext | undefined>(undefined);
export const useInternalTabBarContext = () => {
  const context = useContext(InternalTabBarContext);
  if(!context) {
    throw new Error(
      "[star4]: TabBar context not found. Make sure to wrap Tab components in <TabBar>."
    );
  }
  return context;
}

const TabBarComponent = forwardRef<TabBar.Element, TabBar.Props<TabBar.Value>>(
  function TabBar(
    {
      className,
      value,
      onValueChange,
      children,
      ...rest
    },
    forwardedRef,
  ) {
    const indicatorRef = useRef<TabIndicator.Element>(null);
    // const refs = useRef<Tab.Element[]>([]);
    // const [refs, setRefs] = useState<(Tab.Element | undefined)[]>([]);
    // const [refs, setRefs] = useState(new Map<number, Tab.Element>());
    // const [refs, setRefs] = useState(new Map<Tab.Element>());
    // const onTabChange = useCallback(
    //   (newElement: Tab.Element | null, index: number) => {
    //     setRefs(refs => {
    //       if(newElement == null) refs.delete(index);
    //       else refs.set(index, newElement);
    //       return new Map(refs);
    //     });
    //   },
    //   []
    // );
    const tabs = useMemo(
      () => Children.toArray(children)
        .filter(node => {
          const is = Tab.is(node);
          if(!is) {
            console.warn(
              "Invalid JSX Element passed to token resolver:",
              node,
            );
          }
          return is;
        })
        .map((tab, index) => cloneElement<Tab.PropsWithRef<Tab.Value>>(
          tab,
          {
            // ref: (newElement) => {
            //   //* Map version
            //   // onTabChange(newElement, index);

            //   //* useRef version
            //   // const elements = refs.current;
            //   // if(!elements) return;
            //   // if(newElement == null) { // Delete ref if it is gone
            //   //   delete elements[index];
            //   // } else { // Update ref
            //   //   elements[index] = newElement;
            //   // }

            //   //* useState version
            //   // setRefs(
            //   //   elements => elements
            //   //     .map((element, i) => {
            //   //       if(i === index) {
            //   //         return newElement == null ? undefined : newElement;
            //   //       } else return element;
            //   //     })
            //   // );
            // },
          },
        ))
        .map(
          (children, index) => (
            <InternalTabBarContext.Provider
              key={index}
              value={{
                index,
                isSelected: (other) => value === other,
                setSelected: (value) => onValueChange?.(value),
              }}
              children={children} />
          )
        ),
      [children]
    );

    // const selectedIndex = useMemo(
    //   () => {
    //     return refs.entries().find(
    //       ([index, element]) => element.value = ""
    //     )
    //   }
    // );

    const [rects, setRects] = useState<DOMRect[]>([]);
    const resizeObserver = new ResizeObserver(
      (entries) => {
        const rects = entries.map(entry => entry.target.getBoundingClientRect());
        setRects(rects);
      },
    );

    useEffect(
      () => {
        // const selected = refs.get();
        // if(!selected) return;
        // resizeObserver.observe()
      },
      [],
    );

    const context = useMemo<InternalTabBarContext>(
      () => ({
        index: 0,
        isSelected: (other) => value === other,
        setSelected: (value) => onValueChange?.(value),
      }),
      [value],
    );

    return (
      <div
        className={clsx(
          styles.container({}),
          className,
        )}
        role="tablist"
        {...rest}>
          <TabIndicator ref={indicatorRef} />
          <InternalTabBarContext.Provider value={context}>
            {tabs}
          </InternalTabBarContext.Provider>
      </div>
    );
  },
) as ComposableForwardRefExoticComponent<
  ExoticProps<TabBar.Value>,
  <T extends TabBar.Value>(props: ExoticProps<T>) => ReactNode
>;

type ExoticProps<T extends TabBar.Value> = ForwardRefExoticComponentProps<TabBar.Element, TabBar.Props<T>>;

export const TabBar = Object.assign(
  TabBarComponent,
  createIdentifiableElement<TabBar.Props<TabBar.Value>>("IS_TAB_BAR"),
);
