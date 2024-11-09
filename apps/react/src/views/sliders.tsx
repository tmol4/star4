import { Slider } from "@star4/react";
import { View } from "~/components/view";

const SUPPORTING_TEXT = `
Sliders allow users to view and select a value (or range) along a track. They're ideal for adjusting settings such as volume and brightness, or for applying image filters.

Sliders can use icons or labels to represent a numeric or relative scale.
`

export function SlidersView() {
  return (
    <View
      headline="Sliders"
      supportingText="Sliders allow users to view and select a value (or range) along a track. They're ideal for adjusting settings such as volume and brightness, or for applying image filters.Sliders can use icons or labels to represent a numeric or relative scale."
    >
      <Slider value={0.5} />
    </View>
  );
}
