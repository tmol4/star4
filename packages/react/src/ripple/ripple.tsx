import { forwardRef, useEffect, useImperativeHandle, useRef, useState, type HTMLAttributes, type RefObject } from "react";
import { styles } from "./ripple.css";
import clsx from "clsx/lite";
import { useMediaQuery } from "../utils";

const wait = (timeout: number) => new Promise<void>(resolve => setTimeout(resolve, timeout));

const PRESS_GROW_MS = 450;
const MINIMUM_PRESS_MS = 225;
const INITIAL_ORIGIN_SCALE = 0.2;
const PADDING = 10;
const SOFT_EDGE_MINIMUM_SIZE = 75;
const SOFT_EDGE_CONTAINER_RATIO = 0.35;
const PRESS_PSEUDO = "::after";
const ANIMATION_FILL = "forwards";
const TOUCH_DELAY_MS = 150;

const enum State {
  INACTIVE,
  TOUCH_DELAY,
  HOLDING,
  WAITING_FOR_CLICK,
}

export namespace Ripple {
  export type Props =
    & Omit<
      HTMLAttributes<HTMLElement>,
      "children"
    >
    & {
      for: RefObject<HTMLElement>;
      disabled?: boolean;
    };
}

export const Ripple = forwardRef<HTMLElement, Ripple.Props>(
  (
    {
      for: target,
      className,
      disabled = false,
      ...rest
    },
    forwardedRef,
  ) => {
    const ref = useRef<HTMLDivElement>(null);
    const surfaceRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(
      forwardedRef,
      () => ref.current!,
      [],
    );

    const forcedColors = useMediaQuery("(forced-colors: active)");

    let state: State = State.INACTIVE;

    let growAnimation: Animation | undefined;

    const [hovered, setHovered] = useState(false);
    const [pressed, setPressed] = useState(false);

    let checkBoundsAfterContextMenu = false;

    let initialSize = 0;
    let rippleScale = "";
    let rippleSize = "";

    let rippleStartEvent: PointerEvent | undefined;

    const isTouch = ({ pointerType }: PointerEvent) => pointerType === "touch";

    const shouldReactToEvent = (event: PointerEvent) => {
      if (disabled || !event.isPrimary) return false;

      if (
        rippleStartEvent &&
        rippleStartEvent.pointerId !== event.pointerId
      ) return false;

      if (event.type === "pointerenter" || event.type === "pointerleave") {
        return !isTouch(event);
      }

      const isPrimaryButton = event.buttons === 1;
      return isTouch(event) || isPrimaryButton;
    }

    const getNormalizedPointerEventCoords = (event: PointerEvent): {
      x: number;
      y: number;
    } => {
      const {scrollX, scrollY} = window;
      const {left, top} = ref.current!.getBoundingClientRect();
      const documentX = scrollX + left;
      const documentY = scrollY + top;
      const {pageX, pageY} = event;
      return {x: pageX - documentX, y: pageY - documentY};
    }

    const getTranslationCoordinates = (event?: Event) => {
      const {height, width} = ref.current!.getBoundingClientRect();
      // end in the center
      const endPoint = {
        x: (width - initialSize) / 2,
        y: (height - initialSize) / 2,
      };

      let startPoint;
      if (event instanceof PointerEvent) {
        startPoint = getNormalizedPointerEventCoords(event);
      } else {
        startPoint = {
          x: width / 2,
          y: height / 2,
        };
      }

      // center around start point
      startPoint = {
        x: startPoint.x - initialSize / 2,
        y: startPoint.y - initialSize / 2,
      };

      return {startPoint, endPoint};
    }

    const determineRippleSize = () => {
      const { width, height } = ref.current!.getBoundingClientRect();
      const maxDim = Math.max(width, height);
      const softEdgeSize = Math.max(
        SOFT_EDGE_CONTAINER_RATIO * maxDim,
        SOFT_EDGE_MINIMUM_SIZE,
      );

      initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE);
      const hypotenuse = Math.sqrt(width ** 2 + height ** 2);
      const maxRadius = hypotenuse + PADDING;

      rippleScale = `${(maxRadius + softEdgeSize) / initialSize}`;
      rippleSize = `${initialSize}px`;
    }
    const onContextmenu = () => {
      if (disabled) return;

      checkBoundsAfterContextMenu = true;
      endPressAnimation();
    }

    const startPressAnimation = (event?: Event) => {
      setPressed(true);
      growAnimation?.cancel();
      determineRippleSize();
      const {startPoint, endPoint} =
        getTranslationCoordinates(event);
      const translateStart = `${startPoint.x}px, ${startPoint.y}px`;
      const translateEnd = `${endPoint.x}px, ${endPoint.y}px`;

      const position = [0, 0];
      const dimension = [rippleSize, rippleSize];

      growAnimation = surfaceRef.current!.animate(
        {
          top: position,
          left: position,
          height: dimension,
          width: dimension,
          transform: [
            `translate(${translateStart}) scale(1)`,
            `translate(${translateEnd}) scale(${rippleScale})`,
          ],
        },
        {
          pseudoElement: PRESS_PSEUDO,
          duration: PRESS_GROW_MS,
          easing: "cubic-bezier(0.2, 0, 0, 1)",
          fill: ANIMATION_FILL,
        },
      );
    }

    const endPressAnimation = async () => {
      rippleStartEvent = undefined;
      state = State.INACTIVE;
      const animation = growAnimation;
      let pressAnimationPlayState = Infinity;
      if (typeof animation?.currentTime === "number") {
        pressAnimationPlayState = animation.currentTime;
      } else if (animation?.currentTime) {
        pressAnimationPlayState = animation.currentTime.to("ms").value;
      }

      if (pressAnimationPlayState >= MINIMUM_PRESS_MS) {
        setPressed(false);
        return;
      }

      await wait(MINIMUM_PRESS_MS - pressAnimationPlayState);

      if (growAnimation !== animation) {
        // A new press animation was started. The old animation was canceled and
        // should not finish the pressed state.
        return;
      }

      setPressed(false);
    }

    const inBounds = ({x, y}: PointerEvent) => {
      const {top, left, bottom, right} = ref.current!.getBoundingClientRect();
      return x >= left && x <= right && y >= top && y <= bottom;
    }


    const onClick = () => {
      if(disabled) return;

      if (state === State.WAITING_FOR_CLICK) {
        endPressAnimation();
      } else if (state === State.INACTIVE) {
        startPressAnimation();
        endPressAnimation();
      }
    }

    const onPointerDown = async (event: PointerEvent) => {
      if (!shouldReactToEvent(event)) return;

      rippleStartEvent = event;
      if (!isTouch(event)) {
        state = State.WAITING_FOR_CLICK;
        startPressAnimation(event);
        return;
      }

      // after a longpress contextmenu event, an extra `pointerdown` can be
      // dispatched to the pressed element. Check that the down is within
      // bounds of the element in this case.
      if (checkBoundsAfterContextMenu && !inBounds(event)) return;

      checkBoundsAfterContextMenu = false;

      // Wait for a hold after touch delay
      state = State.TOUCH_DELAY;
      await wait(TOUCH_DELAY_MS);

      if (state !== State.TOUCH_DELAY) return;

      state = State.HOLDING;
      startPressAnimation(event);
    }

    const onPointerUp = (event: PointerEvent) => {
      if (!shouldReactToEvent(event)) return;

      if (state === State.HOLDING) {
        state = State.WAITING_FOR_CLICK;
      } else if (state === State.TOUCH_DELAY) {
        state = State.WAITING_FOR_CLICK;
        startPressAnimation(rippleStartEvent);
      }
    }

    const onPointerEnter = (event: PointerEvent) => {
      if (!shouldReactToEvent(event)) return;

      setHovered(true);
    }
    const onPointerLeave = (event: PointerEvent) => {
      if (!shouldReactToEvent(event)) return;

      setHovered(false);

      // release a held mouse or pen press that moves outside the element
      if (state !== State.INACTIVE) {
        endPressAnimation();
      }
    }

    const onPointerCancel = (event: PointerEvent) => {
      if (!shouldReactToEvent(event)) return;
      endPressAnimation();
    }

    useEffect(
      () => {
        if(!target.current || forcedColors) return;

        const element = target.current;

        element.addEventListener("click", onClick);
        element.addEventListener("pointerdown", onPointerDown);
        element.addEventListener("pointerup", onPointerUp);
        element.addEventListener("pointerenter", onPointerEnter);
        element.addEventListener("pointerleave", onPointerLeave);
        element.addEventListener("pointercancel", onPointerCancel);
        element.addEventListener("contextmenu", onContextmenu);

        return () => {
          element.removeEventListener("click", onClick);
          element.removeEventListener("pointerdown", onPointerDown);
          element.removeEventListener("pointerup", onPointerUp);
          element.removeEventListener("pointerenter", onPointerEnter);
          element.removeEventListener("pointerleave", onPointerLeave);
          element.removeEventListener("pointercancel", onPointerCancel);
          element.removeEventListener("contextmenu", onContextmenu);
        };
      },
      [target, forcedColors],
    );

    return (
      <div
        ref={ref}
        className={clsx(styles.host, className)}
        {...rest}>
        <div
          ref={surfaceRef}
          className={
            styles.surface({ hovered, pressed })
          } />
      </div>
    );
  }
);

