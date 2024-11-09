import { forwardRef, memo, type ReactNode } from "react";
import { styles } from "./view.css";
import { Divider, MaterialSymbol } from "@star4/react";
import { ViewSection } from "./view-section";

export namespace View {
  export type Props = {
    headline: ReactNode;
    supportingText?: ReactNode;
    image?: ReactNode;
    children?: ReactNode;
  }

  export namespace Section {
    export type Props = ViewSection.Props;
  }
}

function ViewComponent(
  {
    headline,
    supportingText,
    image,
    children,
  }: View.Props,
) {
  return (
    <div className={styles.layout}>
      <div className={styles.textCard}>
        <h1
          className={styles.headline}
          children={headline} />
        <span
          className={styles.supportingText}
          children={supportingText} />
      </div>
      <div className={styles.imageCard}>
        {/* <MaterialSymbol name="block" />
        <span>No image</span> */}
        <div
          style={{
            display: "block",
            width: "100%",
            objectFit: "cover",
          }}
          children={image}>
        </div>
      </div>
      <div className={styles.container}>
        <Divider style={{ marginBlockEnd: 16 }} />
        {children}
      </div>
    </div>
  );
}

export const View = Object.assign(
  memo(ViewComponent),
  {
    Section: ViewSection,
  },
);
