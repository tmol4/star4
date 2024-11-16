import { createIdentifiableElement } from "@star4/react-utils";
import { forwardRef, memo } from "react";
import { styles } from "./circular-progress.css";
import clsx from "clsx";


export namespace CircularProgressIndicator {
  export type Props = {}
  export interface Element extends HTMLElement {}
}

const CircularProgressComponent = forwardRef(
  function CircularProgressIndicator() {
    return (
      <div className={styles.container}>
        <div className={styles.spinner}>
          <div className={styles.half({ side: "left" })}>
            <div className={styles.arc({ variant: "activeIndicator", side: "left" })} />
          </div>
          <div className={styles.half({ side: "right" })}>
            <div className={styles.arc({ variant: "activeIndicator", side: "right" })} />
          </div>
        </div>
      </div>
    )
  },
);

export const CircularProgress = Object.assign(
  memo(CircularProgressComponent),
  createIdentifiableElement("IS_CIRCULAR_PROGRESS"),
);
