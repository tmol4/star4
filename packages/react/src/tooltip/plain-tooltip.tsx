import {
  forwardRef,
  useEffect,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import { styles } from "./plain-tooltip.css";
import { usePresence } from "@star4/react-utils";
import {
  autoUpdate,
  flip,
  offset,
  shift,
  useDismiss,
  useFloating,
  useFocus,
  useHover,
  useInteractions,
  useRole,
} from "@floating-ui/react";
import { Popover } from "../popover";

export namespace PlainTooltip {
  export type Props =
    & Omit<HTMLAttributes<HTMLElement>, "role" | "children">
    & {
      label: ReactNode;
    };

  /**
   * Imperative handle to the underlying DOM element
   */
  export interface Element extends HTMLElement {}
}

/**
 * A plain tooltip component
 *
 * @experimental
 */
export const PlainTooltip = forwardRef<
  PlainTooltip.Element,
  PlainTooltip.Props
>(
  function PlainTooltip({}, forwardedRef) {
    const [isOpen, setIsOpen] = useState(false);
    const { isMounted, isVisible } = usePresence({
      source: isOpen,
      transitionDuration: 100,
    });

    const { refs, floatingStyles, context } = useFloating({
      open: isMounted,
      onOpenChange: setIsOpen,
      placement: "top",
      middleware: [offset(4), flip(), shift()],
      whileElementsMounted: autoUpdate,
    });

    const hover = useHover(context, {
      delay: {
        open: 500,
        close: 1500,
      },
      move: false,
    });
    const focus = useFocus(context);
    const dismiss = useDismiss(context);
    const role = useRole(context, {
      role: "tooltip",
    });

    const {getReferenceProps, getFloatingProps} = useInteractions([
      hover,
      focus,
      dismiss,
      role,
    ]);

    return (
      <Popover open={isMounted}>
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}>
            <span></span>
        </div>
      </Popover>
    );
  },
);
