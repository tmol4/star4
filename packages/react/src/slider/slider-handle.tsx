import { createIdentifiableElement } from "@star4/react-utils";
import { forwardRef, memo, useImperativeHandle, useRef, type ForwardedRef, type ReactNode } from "react";
import { FocusRing } from "../focus";
import { focusRing, styles } from "./slider-handle.css";
import { useInternalSliderContext } from "./slider";

export namespace SliderHandle {
  export type Props = {
    label?: ReactNode;
  }
  export interface Element extends HTMLElement {}
}

const SliderHandleComponent = forwardRef<SliderHandle.Element, SliderHandle.Props>(
  function SliderHandle(
    {
      label,
    },
    forwardedRef,
  ) {
    const { pressed, focused } = useInternalSliderContext();

    const ref = useRef<HTMLDivElement>(null);

    return (
      <div
        ref={ref}
        className={styles.container}>
          <FocusRing for={ref} show={focused} className={focusRing} />
          <div className={
            styles.indicator({
              pressed
            })
          } />

          {label && (
            <div
              className={
                styles.labelContainer({
                  // visible: props.labelVisible
                })
              }>
                <span
                  className={
                    styles.labelText({
                      // visible: props.labelVisible
                    })
                  }
                  children={label} />
            </div>
          )}
      </div>
    );
  },
);

export const SliderHandle = Object.assign(
  memo(SliderHandleComponent),
  createIdentifiableElement("IS_SLIDER_HANDLE"),
);
