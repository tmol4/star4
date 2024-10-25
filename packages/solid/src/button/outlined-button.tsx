import { splitProps, type Component } from "solid-js";
import { Button } from "./button";
import { outline } from "./outline.css";

export const OutlinedButton: Component<Button.PublicProps> = (props) => {
  const [, local] = splitProps(props, []);
  return (
    <Button
      {...local}
      overlay={
        <div class={outline()} />
      } />
  );
}
