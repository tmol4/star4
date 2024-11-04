import { Dialog, FocusRing, Ripple, Button, Radio, MaterialSymbol, ListItem, Avatar } from "@star4/react";
import { forwardRef, useRef, useState, type FC } from "react";
import { THEME } from "~/theme";

export const App: FC = () => {
  const [open, setOpen] = useState(false);

  const [value, setValue] = useState(0);

  return (
    <div style={{ padding: 24 }}>
      <Button
        variant="filled"
        onClick={() => setOpen(true)}
        disabled={open}
        label="Open" />
      <Dialog
        open={open}
        onCancel={() => setOpen(false)}
        icon={<MaterialSymbol name="delete" />}
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
      <Radio groupValue={value} value={0} onChange={setValue} />
      <Radio groupValue={value} value={1} onChange={setValue} />
      <Radio groupValue={value} value={2} onChange={setValue} />
      <Radio groupValue={value} value={3} onChange={setValue} />
      <Radio groupValue={value} value={4} onChange={setValue} />

      <Radio disabled groupValue={value} value={0} />
      <Radio disabled groupValue={value} value={1} />
      <Radio disabled groupValue={value} value={2} />
      <Radio disabled groupValue={value} value={3} />
      <Radio disabled groupValue={value} value={4} />

      <div style={{ maxWidth: 360, borderRadius: 8, outline: `1px solid ${THEME.color.outline}`, width: "100%", paddingBlock: 8 }}>
        <ListItem
          headline="Headline"
          supportingText="Supporting text" />
        <ListItem
          leading={<Avatar><MaterialSymbol name="account_circle" /></Avatar>}
          headline="Manage account"
          supportingText="your_name"
          trailing={<MaterialSymbol name="navigate_next" />} />
      </div>
    </div>
  );
}
