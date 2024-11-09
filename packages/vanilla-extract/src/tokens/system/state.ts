import type { Remap } from "../../utils";
import type { StateTokens } from "..";


export const STATE_DEFAULTS: Remap<StateTokens> = {
  hoverStateLayerOpacity: "0.08",
  focusStateLayerOpacity: "0.12",
  pressedStateLayerOpacity: "0.12",
  draggedStateLayerOpacity: "0.16",
}
