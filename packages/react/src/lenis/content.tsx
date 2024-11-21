import { createIdentifiableElement, type ForwardRefExoticComponentProps } from "@star4/react-utils";
import { forwardRef, memo, useEffect, useImperativeHandle, useRef, type HTMLAttributes, type ReactNode } from "react";
import { useLenisInternalContext } from "./context";
import clsx from "clsx/lite";

export namespace LenisContent {
  export type Props =
    & Omit<
      HTMLAttributes<HTMLElement>,
      "children"
    >
    & {
      children?: ReactNode;
    }
  export interface Element extends HTMLElement {}
}

const LenisContentComponent = forwardRef<LenisContent.Element, LenisContent.Props>(
  function LenisContent(
    { className, children, ...rest },
    forwardedRef,
  ) {
    const ref = useRef<HTMLDivElement>(null);
    useImperativeHandle(
      forwardedRef,
      () => ref.current!,
      [],
    );

    const { setContent, removeContent } = useLenisInternalContext();

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
      <div ref={ref} className={clsx(className)} {...rest}>
        {children}
      </div>
    )
  },
);

export const LenisContent = Object.assign(
  memo(LenisContentComponent),
  createIdentifiableElement<
    ForwardRefExoticComponentProps<
      LenisContent.Element,
      LenisContent.Props
    >
  >("IS_LENIS_CONTENT"),
);
