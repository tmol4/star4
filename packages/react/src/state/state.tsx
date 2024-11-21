// import { createIdentifiableElement } from "@star4/react-utils";
// import { createContext, useContext } from "react";

// export type InteractionContext = {
//   states: Set<Interaction.State>;
// }

// const InteractionContext = createContext<InteractionContext | undefined>(undefined);

// export const useInteraction = () => {
//   return useContext(InteractionContext);
// }

// export namespace Interaction {
//   export type Props = {
//     hovered?: boolean;
//     pressed?: boolean;
//   }

//   export const enum State {
//     Hovered = "hovered",
//     Pressed = "pressed",

//   }
// }

// const InteractionComponent = function State() {
//   return (
//     <InteractionContext.Provider value={{}}>

//     </InteractionContext.Provider>
//   )
// }

// export const Interaction = Object.assign(
//   InteractionComponent,
//   createIdentifiableElement("IS_INTERACTION_STATE"),
// );
