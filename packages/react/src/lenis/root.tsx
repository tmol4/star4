import { createIdentifiableElement, createStore, useStore, type ForwardRefExoticComponentProps } from "@star4/react-utils";
import { Children, createContext, forwardRef, memo, useContext, useEffect, useMemo, useState, type HTMLAttributes, type ReactElement, type ReactNode } from "react"
import { default as Instance, type LenisOptions } from "lenis";
import { LenisContent } from "./content";
import { LenisWrapper } from "./wrapper";
import { LenisStore } from "./context";
import type { Lenis } from "./lenis";


export namespace RootLenis {
  export type Props =
    & Lenis.Options
    & {
      children?: ReactNode;
    };
}


const RootLenisComponent = function RootLenis(
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
    children,
  }: RootLenis.Props,
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

  const [lenis, setLenis] = useState<Instance | undefined>();

  useEffect(
    () => {
      const lenis = new Instance({
        ...options,
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

  useEffect(() => {
    if (lenis) {
      LenisStore.set({ root: true, lenis });
      return () => LenisStore.set(undefined);
    }
  },
  [lenis]);

  return children;
}


export const RootLenis = Object.assign(
  memo(RootLenisComponent),
  createIdentifiableElement<RootLenis.Props>("IS_ROOT_LENIS"),
);
