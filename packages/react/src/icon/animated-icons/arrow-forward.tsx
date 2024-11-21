import { forwardRef, memo } from "react";
import { useAnimatedIconDataWithDefaults } from "../animated-icon";
import { createIdentifiableElement } from "@star4/react-utils";
import { MaterialSymbol } from "../material-symbol";
import { styles } from "./arrow-forward.css";

export namespace ArrowForward {
  export type Props = {}
  export interface Element extends HTMLElement {}
}

const ArrowForwardComponent = forwardRef<ArrowForward.Element, ArrowForward.Props>(
  function ArrowForward() {
    const { hovered } = useAnimatedIconDataWithDefaults();
    return (
      <div className={styles.container}>
        <div className={styles.icons({ hovered })}>
          <MaterialSymbol name="arrow_forward" />
          <MaterialSymbol name="arrow_forward" />
        </div>
      </div>
    );
  },
);

export const ArrowForward = Object.assign(
  memo(ArrowForwardComponent),
  createIdentifiableElement("IS_ARROW_FORWARD"),
);
