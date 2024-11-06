import { createIdentifiableElement, type ForwardRefExoticComponentProps } from "@star4/react-utils";
import Lenis, { type LenisOptions } from "lenis";
import { Children, cloneElement, createContext, forwardRef, memo, useCallback, useContext, useEffect, useImperativeHandle, useMemo, useRef, useState, type ForwardedRef, type HTMLAttributes, type ReactElement, type ReactNode } from "react";
import clsx from "clsx/lite";

import { styles } from "./scrollable.css";

export namespace Scrollable {
  export type VanillaProps = {
    adapter?: never;
    lenis?: never;
  }
  export type LenisProps = {
    adapter: "lenis";
    lenis?: Omit<
      LenisOptions,
      "wrapper" | "content"
    >;
  }

  export interface Element {
    wrapper: HTMLElement;
    content: HTMLElement;
  }
}

export namespace Scrollable {
  export namespace Wrapper {
    export type Props =
      & Omit<
        HTMLAttributes<HTMLDivElement>,
        "children"
      >
      & (Scrollable.VanillaProps | Scrollable.LenisProps)
      & {
        children: ReactNode;
      };
    export interface Element extends HTMLElement {}
  }
}

const ScrollableWrapperComponent = forwardRef<Scrollable.Wrapper.Element, Scrollable.Wrapper.Props>(
  function ScrollableWrapper(
    { className, adapter, lenis: options = {}, children, ...rest },
    forwardedRef
  ) {
    const wrapperRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(
      forwardedRef,
      () => wrapperRef.current!,
      [],
    );

    const contentRef = useRef<Scrollable.Content.Element>();


    const element = Children.only(children) as ReactElement<
      ForwardRefExoticComponentProps<
        Scrollable.Content.Element,
        Scrollable.Content.Props
      >
    >;
    if(!ScrollableContent.is(element)) {
      throw new Error(
        "[star4]: <Scrollable.Wrapper> must have exactly 1 child of type <Scrollable.Wrapper>"
      );
    }
    // const [lenis, setLenis] = useState<Lenis>();

    useEffect(
      () => {
        if(!adapter) return;

        const wrapper = wrapperRef.current;
        const content = contentRef.current;
        if(!wrapper || !content) return;
        const lenis = new Lenis({
          ...options,
          wrapper,
          content,
          autoRaf: true,
        });
        // setLenis(lenis);

        return () => {
          lenis.destroy();
          // setLenis(undefined);
        };
      },
      [adapter, JSON.stringify(options)],
    );

    const context = useMemo<InternalScrollableContext>(
      () => ({
        setContent: (element) => contentRef.current = element,
        removeContent: (element) => {
          if(element === contentRef.current) {
            contentRef.current = undefined;
          }
        }
      }),
      [],
    );

    return (
      <div ref={wrapperRef} className={clsx(styles.wrapper, className)} {...rest}>
        <InternalScrollableContext.Provider
          value={context}
          children={element} />
      </div>
    );
  },
);
export namespace Scrollable {
  export namespace Content {
    export type Props =
      & Omit<
        HTMLAttributes<HTMLDivElement>,
        "children"
      >
      & {
        children?: ReactNode;
      };
    export interface Element extends HTMLElement {}
  }
}

const ScrollableContentComponent = forwardRef<Scrollable.Content.Element, Scrollable.Content.Props>(
  function ScrollableContent(
    { className, children, ...rest },
    forwardedRef
  ) {
    const ref = useRef<HTMLDivElement>(null);
    useImperativeHandle(
      forwardedRef,
      () => ref.current!,
      [],
    );

    const { setContent, removeContent } = useInternalScrollableContext();
    useEffect(
      () => {
        const element = ref.current;
        if(!element) return;
        setContent(element);
        return () => {
          removeContent(element);
        };
      },
      [],
    );

    return (
      <div
        ref={ref}
        className={clsx(styles.wrapper, className)}
        {...rest}
        children={children} />
    );
  },
);

const ScrollableWrapper = Object.assign(
  memo(ScrollableWrapperComponent),
  createIdentifiableElement("IS_SCROLLABLE_WRAPPER"),
);
const ScrollableContent = Object.assign(
  memo(ScrollableContentComponent),
  createIdentifiableElement("IS_SCROLLABLE_CONTENT"),
);


export const Scrollable = {
  Wrapper: ScrollableWrapper,
  Content: ScrollableContent,
}



type InternalScrollableContext = {
  setContent: (element: Scrollable.Content.Element) => void;
  removeContent: (element: Scrollable.Content.Element) => void;
}
const InternalScrollableContext = createContext<InternalScrollableContext | undefined>(undefined);
const useInternalScrollableContext = () => {
  const context = useContext(InternalScrollableContext);
  if(!context) {
    throw new Error(
      "[star4]: Scrollable context not found. Make sure to wrap <Scrollable.Content> component in <Scrollable.Wrapper>."
    );
  }
  return context;
}

type ScrollableContext = {

}

const ScrollableContext = createContext<ScrollableContext | undefined>(undefined);
export const useScrollableContext = () => useContext(ScrollableContext);
