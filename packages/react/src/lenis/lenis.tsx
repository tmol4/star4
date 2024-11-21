import { createIdentifiableElement, createStore, useStore, type ForwardRefExoticComponentProps } from "@star4/react-utils";
import { Children, createContext, forwardRef, memo, useContext, useEffect, useMemo, useState, type HTMLAttributes, type ReactElement, type ReactNode } from "react"

import { default as Instance, type LenisOptions } from "lenis";
import { LenisContent } from "./content";
import { LenisWrapper } from "./wrapper";
import { LenisStore } from "./context";
import { RootLenis } from "./root";


export namespace Lenis {
  export type Options = {
    eventsTarget?: LenisOptions["eventsTarget"];
    smoothWheel?: LenisOptions["smoothWheel"];
    syncTouch?: LenisOptions["syncTouch"];
    syncTouchLerp?: LenisOptions["syncTouchLerp"];
    touchInertiaMultiplier?: LenisOptions["touchInertiaMultiplier"];
    duration?: LenisOptions["duration"];
    easing?: LenisOptions["easing"];
    lerp?: LenisOptions["lerp"];
    infinite?: LenisOptions["infinite"];
    orientation?: LenisOptions["orientation"];
    gestureOrientation?: LenisOptions["gestureOrientation"];
    touchMultiplier?: LenisOptions["touchMultiplier"];
    wheelMultiplier?: LenisOptions["wheelMultiplier"];
    autoResize?: LenisOptions["autoResize"];
    prevent?: LenisOptions["prevent"];
    virtualScroll?: LenisOptions["virtualScroll"];
    overscroll?: LenisOptions["overscroll"];
    // autoRaf?: LenisOptions["autoRaf"];
  }

  export type Props = RootLenis.Props;

  export type Context = {
    root: boolean;
    lenis: Instance;
  }

  export namespace Wrapper {
    export type Props = LenisWrapper.Props;
    export type Element = LenisWrapper.Element
  }
  export namespace Content {
    export type Props = LenisContent.Props;
    export type Element = LenisContent.Element
  }
}

export const Lenis = Object.assign(
  RootLenis,
  {
    Wrapper: LenisWrapper,
    Content: LenisContent,
  },
);
