import { createContext, useContext, type Component, type FlowComponent, type JSX } from "solid-js";
import { createSlot } from "../slot";

export namespace Icon {
  export type Props = ProtectedProps & PublicProps;

  export type ProtectedProps = {}
  export type PublicProps = {}
}

export const Icon: Component<Icon.Props> = (props) => {
  return (
    <span></span>
  );
}
