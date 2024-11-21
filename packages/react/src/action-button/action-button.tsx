import { forwardRef, memo, useRef, useState, type ReactNode } from "react";
import { Ripple } from "../ripple";
import { createIdentifiableElement } from "@star4/react-utils";
import { iconStyles, styles } from "./action-button.css";
import { AnimatedIconDataProvider, MaterialSymbol } from "../icon";

export namespace ActionButton {
  export type Props = {
    icon?: ReactNode;
    label?: ReactNode;
  }
  export interface Element extends HTMLElement {}
}

const ActionButtonComponent = forwardRef<ActionButton.Element, ActionButton.Props>(
  function ActionButton(
    {
      icon,
      label,
    },
    forwardedRef
  ) {
    const ref = useRef<HTMLButtonElement>(null);
    const [hovered, setHovered] = useState(false);

    return (
      <button
        ref={ref}
        className={styles.container()}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}>
          <Ripple for={ref} />
          <div className={styles.content()}>
            {label}
            <AnimatedIconDataProvider
              hovered={hovered}
              children={icon} />
          </div>
      </button>
    );
  },
);


export namespace ActionButton {
  export namespace Icon {
    export type Props = {
      icon: ReactNode;
    }
    export interface Element extends HTMLElement {}
  }
}

const ActionButtonIconComponent = forwardRef<ActionButton.Icon.Element, ActionButton.Icon.Props>(
  function ActionButtonIcon({ icon }, forwardedRef) {
    return (
      <div className={iconStyles.container()}>
        <div className={iconStyles.icon({ variant: "outgoing" })}>{icon}</div>
        <div className={iconStyles.icon({ variant: "incoming" })}>{icon}</div>
      </div>
    );
  },
);

const ActionButtonIcon = Object.assign(
  memo(ActionButtonIconComponent),
  createIdentifiableElement("IS_ACTION_BUTTON_ICON"),
);

export const ActionButton = Object.assign(
  memo(ActionButtonComponent),
  {
    ...createIdentifiableElement("IS_ACTION_BUTTON"),
    Icon: ActionButtonIcon,
  },
);
