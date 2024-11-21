import { ActionButton, ArrowForward, MaterialSymbol, NorthEast } from "@star4/react";
import { View } from "~/components/view";

export default function ActionButtonsView() {
  return (
    <View
      headline="Action Buttons"
      supportingText="Progress indicators inform users about the status of ongoing processes, such as loading an app or submitting a form.">
        <ActionButton icon={<NorthEast />} label="Learn more" />
        <ActionButton icon={<ArrowForward />} label="Learn more" />
    </View>
  )
}
