import { splitProps, type Component } from "solid-js";
import { Button } from "./button";
import { styles } from "./filled-button.css";
import clsx from "clsx/lite";

export const FilledButton: Component<Button.PublicProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <Button
      class={clsx(
        styles.container,
        local.class,
      )}
      {...others} />
  );
}
