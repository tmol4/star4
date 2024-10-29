import { splitProps, type Component } from "solid-js";
import { Button } from "./button";
import { styles } from "./outlined-button.css";
import clsx from "clsx/lite";

export const OutlinedButton: Component<Button.PublicProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <Button
      class={clsx(
        styles.container,
        local.class,
      )}
      overlay={
        <div class={styles.outline()} />
      }
      {...others} />
  );
}
