import { IconButton, MaterialSymbol } from "@star4/react";
import { useState } from "react";
import { View } from "~/components/view";

export function IconButtonsView() {
  const [selected, setSelected] = useState(false);
  return (
    <View headline="Icon Buttons" supportingText="Icon buttons help people take supplementary actions with a single tap.">
      <IconButton variant="filled" icon={<MaterialSymbol name="menu" />} />
      <IconButton variant="filledTonal" icon={<MaterialSymbol name="menu" />} />
      <IconButton variant="outlined" icon={<MaterialSymbol name="menu" />} />
      <IconButton variant="regular" icon={<MaterialSymbol name="menu" />} />

      <IconButton
        variant="filled"
        selected={selected}
        onClick={() => setSelected(prev => !prev)}
        icon={<MaterialSymbol name={selected ? "expand_less" : "expand_more"} />} />
      <IconButton
        variant="filledTonal"
        selected={selected}
        onClick={() => setSelected(prev => !prev)}
        icon={<MaterialSymbol name={selected ? "close" : "menu"} />} />
      <IconButton
        variant="outlined"
        selected={selected}
        onClick={() => setSelected(prev => !prev)}
        icon={<MaterialSymbol name={selected ? "play_arrow" : "pause"} />} />
      <IconButton
        variant="regular"
        selected={selected}
        onClick={() => setSelected(prev => !prev)}
        icon={<MaterialSymbol name={selected ? "visibility_off" : "visibility"} />} />
    </View>
  )
}
