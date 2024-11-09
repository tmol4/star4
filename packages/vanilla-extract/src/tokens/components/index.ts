import { ICON_DEFAULTS } from "./icon";
import { MATERIAL_SYMBOL_DEFAULTS } from "./material-symbols";
import { RIPPLE_DEFAULTS } from "./ripple";
import { RADIO_DEFAULTS } from "./radio";


export const COMPONENT_DEFAULTS = {
  ripple: RIPPLE_DEFAULTS,
  icon: ICON_DEFAULTS,
  materialSymbol: MATERIAL_SYMBOL_DEFAULTS,
  radio: RADIO_DEFAULTS,
} as const;
