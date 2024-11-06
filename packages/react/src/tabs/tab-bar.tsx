import { createIdentifiableElement, usePreviousState, type ComposableForwardRefExoticComponent, type ForwardRefExoticComponentProps } from "@star4/react-utils";
import { Children, cloneElement, createContext, forwardRef, memo, useCallback, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState, type HTMLAttributes, type ReactNode } from "react";
import { Tab } from "./tab";
import { Scrollable } from "../scrollable";
import { TabIndicator } from "./tab-indicator";
import { THEME } from "@star4/vanilla-extract";
import clsx from "clsx/lite";

import { styles } from "./tab-bar.css";

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
  getIndicator: (value: TabBar.Value) => ReactNode;
  isSelected: (value: TabBar.Value) => boolean;
  setSelected: (value: TabBar.Value) => void;
  observe: (value: TabBar.Value, element: Tab.Element) => void;
  unobserve: (value: TabBar.Value, element: Tab.Element) => void;
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
    const ref = useRef<HTMLDivElement>(null);
    useImperativeHandle(
      forwardedRef,
      () => ref.current!,
      [],
    );
    const listRef = useRef<HTMLDivElement>(null);
    const indicatorRef = useRef<TabIndicator.Element>(null);

    const tabs = Children.toArray(children)
        .filter(node => {
          const is = Tab.is(node);
          if(!is) {
            console.warn(
              "Invalid JSX Element passed to token resolver:",
              node,
            );
          }
          return is;
        });


    const [refs, setRefs] = useState(new Map<TabBar.Value, Tab.Element>);

    // Scrollable detection
    const [scrollable, setScrollable] = useState(false);
    const resizeObserver = useRef(
      new ResizeObserver((entries) => {
        const wrapper = ref.current;
        const content = ref.current;
        if(!wrapper || !content) return;
        setScrollable(wrapper.scrollWidth > wrapper!.clientWidth);
      }),
    );
    useEffect(() => {
      const element = ref.current;
      if(!element) return;
      const observer = resizeObserver.current;
      observer.observe(element);
      return () => {
        observer.disconnect();
      };
    }, []);

    // Indicator animation

    const currentTab = useMemo(
      () => refs.get(value),
      [refs, value],
    );
    const previousTab = usePreviousState(currentTab);
    useEffect(
      () => {
        const indicator = indicatorRef.current;
        if(!indicator || !previousTab || !currentTab) return;

        const prevRect = previousTab.getBoundingClientRect();
        const nextRect = currentTab.getBoundingClientRect();

        // if(nextValue !== prevValue) {
        if(ref.current != null) {
          const rect = ref.current.getBoundingClientRect();
          if(nextRect.left < rect.left || nextRect.right > rect.right) {
            // lenisRef.instance.scrollTo(
            //   nextTab,
            //   {
            //     duration: 0.3,
            //     // lerp: 1,
            //     force: true,
            //     // easing: x => x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2,
            //   },
            // );
          }
        }

        const relativeRect = globalToLocal(nextRect, prevRect);
        const prevLeft = relativeRect.left;
        const prevRight = nextRect.width - relativeRect.right;

        const easing = resolveProperty(THEME.motion.easing.emphasized, indicator);
        const options: KeyframeAnimationOptions = {
          composite: "accumulate",
          easing,
          duration: 500,
          fill: "none",
        };
        indicator.animate({
          left: [`${prevLeft}px`, "0"],
          right: [`${prevRight}px`, "0"],
        }, options);
      },
      [currentTab],
    );

    // Context
    const indicator = <TabIndicator ref={indicatorRef} />;
    const context = useMemo<InternalTabBarContext>(
      () => ({
        getIndicator: (other) => value === other ? indicator : undefined,
        isSelected: (other) => value === other,
        setSelected: (value) => onValueChange?.(value),
        observe: (value, element) => {
          setRefs(refs => new Map(refs.set(value, element)));
        },
        unobserve: (value, element) => {
          const currentElement = refs.get(value);
          if(currentElement !== element) return;
          setRefs(refs => {
            refs.delete(value);
            return new Map(refs);
          });
        },
      }),
      [value],
    );

    return (
      <Scrollable.Wrapper
        ref={ref}
        className={clsx(
          styles.container({
            // animate: true,
            // scrollable,
          }),
          className,
        )}
        role="tablist"
        adapter="lenis"
        lenis={{
          autoRaf: true,
          orientation: "horizontal",
        }}
        {...rest}>
          <Scrollable.Content ref={listRef} className={styles.list()}>
            <InternalTabBarContext.Provider
              value={context}
              children={tabs} />
          </Scrollable.Content>
      </Scrollable.Wrapper>
    );
  },
);

type ExoticProps<T extends TabBar.Value> = ForwardRefExoticComponentProps<TabBar.Element, TabBar.Props<T>>;

export const TabBar = Object.assign(
  memo(TabBarComponent) as ComposableForwardRefExoticComponent<
    ExoticProps<TabBar.Value>,
    <T extends TabBar.Value>(props: ExoticProps<T>) => ReactNode
  >,
  createIdentifiableElement<TabBar.Props<TabBar.Value>>("IS_TAB_BAR"),
);


const globalToLocal = (parent: DOMRect, child: DOMRect): DOMRect => {
  return new DOMRect(
    child.x - parent.x,
    child.y - parent.y,
    child.width,
    child.height,
  );
}

const getVarName = (variable: string) => {
  const matches = variable.match(/^var\((.*)\)$/);
  return matches?.[1] ?? variable;
}

const resolveProperty = (property: string, element: Element) => {
  return getComputedStyle(element).getPropertyValue(getVarName(property));
}
