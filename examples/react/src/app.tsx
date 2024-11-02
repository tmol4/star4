import { Dialog, FocusRing, Ripple, Button, Radio } from "@star4/react";
import { forwardRef, useRef, useState, type FC } from "react";

export const App: FC = () => {
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState(0);

  return (
    <div>
      <Button
        variant="filled"
        onClick={() => setOpen(true)} disabled={open}
        label="Open" />
      <Dialog
        open={open}
        onCancel={() => setOpen(false)}
        icon={"Delete"}
        headline="Permanently delete?"
        content="Deleting the selected photos will also remove them from all synced devices."
        actions={
          <>
            <Button
              variant="text"
              onClick={() => setOpen(false)}
              label="Delete" />
            <Button
              variant="filledTonal"
              onClick={() => setOpen(false)}
              label="Cancel" />
          </>
        } />
      <Radio groupValue={value} value={0} onChange={setValue as any} />
      <Radio groupValue={value} value={1} onChange={setValue as any} />
      <Radio groupValue={value} value={2} onChange={setValue as any} />
      <Radio groupValue={value} value={3} onChange={setValue as any} />
      <Radio groupValue={value} value={4} onChange={setValue as any} />
    </div>
  );
}
