import { useState } from "react";
import { Button, Dialog, MaterialSymbol } from "@star4/react";
import { View } from "~/components/view";

export function DialogsView() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View headline="Dialogs" supportingText="Dialogs provide important prompts in a user flow.">
      <Button
        variant="outlined"
        onClick={() => setIsOpen(true)}
        disabled={isOpen}
        icon={<MaterialSymbol name="delete" />}
        label="Delete" />
      <Dialog
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        icon={<MaterialSymbol name="delete" />}
        headline="Permanently delete?"
        content="Deleting the selected photos will also remove them from all synced devices."
        actions={
          <>
            <Button
              variant="text"
              onClick={() => setIsOpen(false)}
              label="Cancel" />
            <Button
              variant="text"
              onClick={() => setIsOpen(false)}
              label="Delete" />
          </>
        } />
    </View>
  );
}
