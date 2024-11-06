import { forwardRef, memo, type ReactNode } from "react";
import { styles } from "./view.css";
import { Divider, MaterialSymbol } from "@star4/react";

export namespace View {
  export type Props = {
    headline: ReactNode;
    supportingText?: ReactNode;
    children?: ReactNode;
  }
}

function View(
  {
    headline,
    supportingText,
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
        <MaterialSymbol name="block" />
        <span>No image</span>
      </div>
      <div className={styles.container}>
        <Divider style={{ marginBlockEnd: 16 }} />
        {children}
      </div>
    </div>
  );
}

const ViewMemo = memo(View);

export {  ViewMemo as View };
