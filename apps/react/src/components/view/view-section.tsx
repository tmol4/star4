import { forwardRef, memo } from "react";

export namespace ViewSection {
  export type Props = {

  }
}

const ViewSectionComponent = forwardRef(
  function ViewSection() {
    return (
      <section>

      </section>
    );
  },
);

export const ViewSection = memo(ViewSectionComponent);
