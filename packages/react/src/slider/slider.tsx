import { createIdentifiableElement } from "@star4/react-utils";
import { createContext, forwardRef, memo, useContext, useEffect, useMemo, useRef, useState, type ForwardedRef, type ReactNode } from "react";
import { SliderHandle } from "./slider-handle";
import { SliderTrack } from "./slider-track";
import { styles } from "./slider.css";
import { useFocusVisible } from "../utils";

export namespace Slider {
  export type Props = {
    /**
     * @defaultValue `0`
     */
    min?: number;
    /**
     * @defaultValue `1`
     */
    max?: number;
    /**
     * A number between {@link Props.min|Slider.min} and {@link Props.max|Slider.max} indicating the current slider value
    */
   value: number;
  }
  export interface Element extends HTMLElement {}
}

const SliderComponent = forwardRef<Slider.Element, Slider.Props>(
  function Slider(
    {
      min = 0,
      max = 1,
      // value,
    },
    forwardedRef,
  ) {
    const inputRef = useRef<HTMLInputElement>(null);

    const [value, setValue] = useState(0.5);
    const parts = useMemo<number[]>(
      () => {
        const normalized = (value - min) / (max - min);
        return [
          normalized,
          value,
          1 - normalized,
        ];
      },
      [min, max, value],
    );

    const [pressed, setPressed] = useState(false);
    const focused = useFocusVisible(inputRef);

    return (
      <div ref={forwardedRef as ForwardedRef<HTMLDivElement>} className={styles.container}>
        <input
          ref={inputRef}
          className={styles.input({ pressed })}
          type="range"
          min={min}
          max={max}
          value={value}
          step={"any"}
          onPointerDown={() => setPressed(true)}
          onPointerUp={() => setPressed(false)}
          onPointerCancel={() => setPressed(false)}
          onFocus={event => {
            if(event.currentTarget.matches(":focus-visible")) setPressed(true);
          }}
          onBlur={() => setPressed(false)}
          onChange={event => setValue(event.currentTarget.valueAsNumber)}
          onInput={event => setValue(event.currentTarget.valueAsNumber)} />
        <InternalSliderContext.Provider value={{ pressed, focused }}>
          {parts.map(
            (part, index) => index % 2 === 0
            ? (
              <SliderTrack key={index} fraction={part} active={index === 0} segment={index === 0 ? "start" : "end"} />
            )
            : (
              <SliderHandle key={index} />
            )
          )}
        </InternalSliderContext.Provider>
      </div>
    )
  },
);
export const Slider = Object.assign(
  memo(SliderComponent),
  createIdentifiableElement("IS_SLIDER"),
);

type InternalSliderContext = {
  pressed: boolean;
  focused: boolean;
}
const InternalSliderContext = createContext<InternalSliderContext | undefined>(undefined);
export const useInternalSliderContext = () => useContext(InternalSliderContext)!;
