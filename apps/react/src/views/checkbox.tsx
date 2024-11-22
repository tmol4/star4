import { Checkbox } from "@star4/react";
import { useState } from "react";
import { View } from "~/components/view";

export function CheckboxView() {
  const [checked, setChecked] = useState(false);
  return (
    <View
      headline="Checkbox"
      supportingText="Checkboxes allow users to select one or more items from a set. Checkboxes can turn an option on or off.">
        <Checkbox checked={checked} onChange={setChecked} />
    </View>
  );
}
