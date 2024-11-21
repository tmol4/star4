import { Children, forwardRef, memo, useEffect, useImperativeHandle, useMemo, useRef, useState, type HTMLAttributes, type ReactNode } from "react";
import type { Lenis } from "./lenis";
import { createIdentifiableElement } from "@star4/react-utils";
import { LenisContent } from "./content";
import { default as LenisInstance } from "lenis";
import { LenisContext, LenisInternalContext } from "./context";
import { styles } from "./wrapper.css";

import clsx from "clsx/lite";

export namespace LenisWrapper {
  export type Props =
    & Omit<
      HTMLAttributes<HTMLElement>,
      "children"
    >
    & Lenis.Options
    & {
      children: ReactNode;
    };

  export interface Element extends HTMLElement {}
}

const LenisWrapperComponent = forwardRef<LenisWrapper.Element, LenisWrapper.Props>(
  function LenisWrapper(
    {
      eventsTarget,
      smoothWheel,
      syncTouch,
      syncTouchLerp,
      touchInertiaMultiplier,
      duration,
      easing,
      lerp,
      infinite,
      orientation,
      gestureOrientation,
      touchMultiplier,
      wheelMultiplier,
      autoResize,
      prevent,
      virtualScroll,
      overscroll,
      // autoRaf,
      className,
      children,
      ...rest
    },
    forwardedRef,
  ) {
    const options = useMemo(
      () => ({
        eventsTarget,
        smoothWheel,
        syncTouch,
        syncTouchLerp,
        touchInertiaMultiplier,
        duration,
        easing,
        lerp,
        infinite,
        orientation,
        gestureOrientation,
        touchMultiplier,
        wheelMultiplier,
        autoResize,
        prevent,
        virtualScroll,
        overscroll,
        // autoRaf,
      }),
      [
        eventsTarget,
        smoothWheel,
        syncTouch,
        syncTouchLerp,
        touchInertiaMultiplier,
        duration,
        easing,
        lerp,
        infinite,
        orientation,
        gestureOrientation,
        touchMultiplier,
        wheelMultiplier,
        autoResize,
        prevent,
        virtualScroll,
        overscroll,
        // autoRaf,
      ],
    );


    const content = Children.only(children);
    if(!LenisContent.is(content)) {
      throw new Error(
        "[star4]: <Lenis.Wrapper> must have exactly 1 child of type <Lenis.Content>"
      );
    }


    const wrapperRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(
      forwardedRef,
      () => wrapperRef.current!,
      [],
    );

    const contentRef = useRef<LenisContent.Element>();

    const [lenis, setLenis] = useState<LenisInstance | undefined>();



    useEffect(
      () => {
        const wrapper = wrapperRef.current;
        const content = contentRef.current;
        if(!wrapper || !content) return;

        const lenis = new LenisInstance({
          ...options,
          wrapper,
          content,
          autoRaf: true,
        });

        setLenis(lenis);

        return () => {
          lenis.destroy();
          setLenis(undefined);
        };
      },
      [options],
    );

    const internalContext: LenisInternalContext = {
      setContent: (element) => contentRef.current = element,
      removeContent: (element) => {
        if(element === contentRef.current) {
          contentRef.current = undefined;
        }
      },
    };
    const context: Lenis.Context = {
      root: false,
      lenis: lenis!,
    };

    console.log(clsx(styles.container, className));

    return (
      <div ref={wrapperRef} className={clsx(styles.container, className)} {...rest}>
        <LenisContext.Provider value={context}>
          <LenisInternalContext.Provider value={internalContext}>
              {content}
          </LenisInternalContext.Provider>
        </LenisContext.Provider>
      </div>
    );
  },
);





export const LenisWrapper = Object.assign(
  memo(LenisWrapperComponent),
  createIdentifiableElement<Lenis.Wrapper.Props>("IS_LENIS_WRAPPER"),
);
