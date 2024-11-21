import { forwardRef, memo } from "react";
import { useAnimatedIconDataWithDefaults } from "../animated-icon";
import { MaterialSymbol } from "../material-symbol";
import { styles } from "./north-east.css";
import { createIdentifiableElement } from "@star4/react-utils";

export namespace NorthEast {
  export type Props = {

  }
  export interface Element extends HTMLElement {}
}

const NorthEastComponent = forwardRef<NorthEast.Element, NorthEast.Props>(
  function NorthEast() {
    const { hovered } = useAnimatedIconDataWithDefaults();
    return (
      <div className={styles.container}>
        <div className={styles.icon({ variant: "outgoing", hovered })}>
          <MaterialSymbol name="north_east" />
        </div>
        <div className={styles.icon({ variant: "incoming", hovered })}>
          <MaterialSymbol name="north_east" />
        </div>
      </div>
    )
  },
);

export const NorthEast = Object.assign(
  memo(NorthEastComponent),
  createIdentifiableElement("IS_NORTH_EAST"),
);
