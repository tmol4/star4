import { createIdentifiableElement } from "@star4/react-utils";
import { forwardRef, memo, type ForwardedRef, type HTMLAttributes } from "react";
import { styles, vars } from "./slider-track.css";

import clsx from "clsx/lite";
import { assignInlineVars } from "@vanilla-extract/dynamic";
import { useInternalSliderContext } from "./slider";

export namespace SliderTrack {
  export type Props =
    & Omit<
      HTMLAttributes<HTMLElement>,
      "children"
    >
    & {
      fraction: number;
      active?: boolean;
      segment?: "start" | "end";
    };
  export interface Element extends HTMLElement {}
}

const SliderTrackComponent = forwardRef<SliderTrack.Element, SliderTrack.Props>(
  function SliderTrack(
    {
      className,
      style,
      fraction,
      active = false,
      segment,
      ...rest
    },
    forwardedRef,
  ) {
    const { pressed } = useInternalSliderContext();
    return (
      <div
        ref={forwardedRef as ForwardedRef<HTMLDivElement>}
        className={clsx(
          styles.wrapper,
          className,
        )}
        style={{
          ...assignInlineVars({
            [vars.fraction]: `${fraction}`,
          }),
          ...style,
        }}
        {...rest}>
          <div
            className={
              styles.container({
                pressed,
                segment,
                stop: segment === "end",
                active,
              })
            } />
      </div>
    );
  }
);

export const SliderTrack = Object.assign(
  memo(SliderTrackComponent),
  createIdentifiableElement("IS_SLIDER_TRACK"),
);
