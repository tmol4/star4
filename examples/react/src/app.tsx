import { Dialog, FocusRing, Ripple, Button, Radio, MaterialSymbol, ListItem, Avatar, RadioListItem, Menu, usePresence, TabBar, Tab } from "@star4/react";
import { forwardRef, useRef, useState, type FC, type ReactNode } from "react";
import { THEME } from "~/theme";

const Example1 = () => <div>Hello world!</div>;

const MENU_ITEMS = [
  "Apple",
  "Apricot",
  "Avocado",
  "Banana",
  "Cucumber",
  "Grapes",
  "Olive",
  "Orange"
];


type ExampleProps = {
  headline: ReactNode;
  supportingText?: ReactNode;
  children?: ReactNode;
}
function Example({ headline, supportingText, children }: ExampleProps) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "auto 1fr",
      gap: 16,
    }}>
      <div style={{
        backgroundColor: THEME.color.surfaceVariant,
        borderRadius: 28,
        padding: 56,
        gridRow: 1,
        gridColumn: 1,
      }}>
        <h1
          style={{
            marginBlockEnd: 8,
            ...THEME.typescale.display.large,
            color: THEME.color.onSurface,
          }}
          children={headline} />
        <span
          style={{
            ...THEME.typescale.title.large,
            color: THEME.color.onSurfaceVariant,
          }}
          children={supportingText} />
      </div>
      <div style={{
        backgroundColor: THEME.color.surfaceVariant,
        borderRadius: 28,
        padding: 56,
        gridRow: 1,
        gridColumn: 2,
        overflow: "hidden",
      }} />
      <div
        style={{
          // backgroundColor: THEME.color.surfaceVariant,
          borderRadius: 28,
          padding: 24,
          border: `1px solid ${THEME.color.outlineVariant}`,
          gridRow: 2,
          gridColumn: "span 2",
        }}
        children={children} />
    </div>
  )
}

function DialogExample() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Example headline="Dialogs" supportingText="Dialogs provide important prompts in a user flow.">
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
    </Example>
  );
}
function MenuExample() {
  const [items, setItems] = useState(3);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <Example headline="Menus" supportingText="Menus display a list of choices on a temporary surface.">
      <div style={{ display: "grid", gridTemplateColumns: "minmax(112px, 280px) 1fr 1fr", gridTemplateRows: "auto 1fr", gridAutoFlow: "column", gap: 16, minHeight: 360  }}>
        <Button
          variant={isMenuOpen ? "filledTonal" : "filled"}
          icon={<MaterialSymbol name={isMenuOpen ? "close" : "menu"} />}
          label={isMenuOpen ? "Close" : "Open"}
          onClick={() => setIsMenuOpen(prev => !prev)}
          style={{ gridColumn: 1 }}/>
        <Menu open={isMenuOpen}>
          {
            MENU_ITEMS
              .filter((_, index) => index + 1 <= items)
              .map((value, index) => <Menu.Item key={index} headline={value} />)
          }
        </Menu>
        <Button
          variant="filledTonal"
          icon={<MaterialSymbol name="remove" />}
          label="Remove"
          onClick={() => setItems(prev => prev > 1 ? prev - 1 : 1)}
          disabled={items <= 1}
          style={{ gridColumn: 2 }} />
        <Button
          variant="filledTonal"
          icon={<MaterialSymbol name="add" />}
          label="Add"
          onClick={() => setItems(prev => prev < MENU_ITEMS.length ? prev + 1 : MENU_ITEMS.length)}
          disabled={items >= MENU_ITEMS.length}
          style={{ gridColumn: 3 }} />
      </div>
    </Example>
  );
}

function RadioExample() {
  return (
    <Example headline="Radio button" supportingText="Radio buttons let people select one option from a set of options.">

    </Example>
  )
}

function TabsExample() {
  const [value, setValue] = useState(0);

  const [count, setCount] = useState(3);
  const [value2, setValue2] = useState(0);

  const tabs: ReactNode[] = [];
  for(let i = 0; i < count; i++) {
    tabs.push(<Tab key={i} value={i} label={`Tab ${i + 1}`} />)
  }

  return (
    <Example headline="Tabs" >
      {/* <TabBar value={value} onValueChange={setValue}>
        <Tab
          value={0}
          icon={<MaterialSymbol name="explore" />}
          label="Explore" />
        <Tab
          value={1}
          icon={<MaterialSymbol name="flight" />}
          label="Travel" />
        <Tab
          value={2}
          icon={<MaterialSymbol name="history" />}
          label="Drums" />
        <Tab
          value={3}
          icon={<MaterialSymbol name="history" />}
          label="Bass" />
        <Tab
          value={4}
          icon={<MaterialSymbol name="history" />}
          label="Saxophone" />
      </TabBar> */}
      <Button variant="filledTonal" icon={<MaterialSymbol name="add" />} label="Add tab" onClick={() => setCount(prev => prev + 1)} />
      <Button variant="filledTonal" icon={<MaterialSymbol name="remove" />} label="Remove tab" onClick={() => setCount(prev => prev > 1 ? prev - 1 : 1)} />
      <TabBar value={value2} onValueChange={setValue2}>
        {tabs}
      </TabBar>

    </Example>
  );
}

const enum Examples {
  Menu,
  Dialog,
  Radio,
  Checkbox,
  Tabs,
}
const ExamplesMap = {
  [Examples.Dialog]: DialogExample,
  [Examples.Menu]: MenuExample,
  [Examples.Radio]: RadioExample,
  [Examples.Checkbox]: RadioExample,
  [Examples.Tabs]: TabsExample,
}

export const App: FC = () => {
  const [example, setExample] = useState(Examples.Dialog);

  const { mountedItem, isEntering, isExiting, isVisible } = usePresence({
    source: example,
    transitionDuration: 250,
    initialEnter: true,
  });
  const Active = ExamplesMap[example];
  const Mounted = ExamplesMap[mountedItem];

  return (
    <div className="demo" style={{ padding: 16, display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        paddingInline: 24,
        paddingBlock: 8,
      }}>
        <span style={{
          ...THEME.typescale.body.large,
          color: THEME.color.onSurfaceVariant,
        }}>Choose an example:</span>
        <Button
          variant={example === Examples.Dialog ? "filled" : "filledTonal"}
          onClick={() => setExample(Examples.Dialog)}
          icon={<MaterialSymbol name={example === Examples.Dialog ? "check" : "dialogs"} />}
          label="Dialogs" />
        <Button
          variant={example === Examples.Menu ? "filled" : "filledTonal"}
          onClick={() => setExample(Examples.Menu)}
          icon={<MaterialSymbol name={example === Examples.Menu ? "check" : "menu"} />}
          label="Menus" />
        <Button
          variant={example === Examples.Radio ? "filled" : "filledTonal"}
          onClick={() => setExample(Examples.Radio)}
          icon={<MaterialSymbol name={example === Examples.Radio ? "check" : "radio_button_checked"} />}
          label="Radio button" />
        <Button
          variant={example === Examples.Checkbox ? "filled" : "filledTonal"}
          onClick={() => setExample(Examples.Checkbox)}
          icon={<MaterialSymbol name={example === Examples.Checkbox ? "check" : "check_box"} />}
          label="Checkbox" />
        <Button
          variant={example === Examples.Tabs ? "filled" : "filledTonal"}
          onClick={() => setExample(Examples.Tabs)}
          icon={<MaterialSymbol name={example === Examples.Tabs ? "check" : "tab"} />}
          label="Tabs" />
      </div>
      <div style={{
        transformOrigin: "top center",
        filter: isExiting || !isVisible ? `blur(6px)` : undefined,
        transform: isExiting || !isVisible ? `scale(0.96)` : undefined,
        transitionProperty: "transform, opacity, filter",
        transitionDuration: "250ms",
        opacity: isExiting || !isVisible ? 0 : 1,
        transitionTimingFunction: isEntering ? THEME.motion.easing.emphasized : isExiting ? THEME.motion.easing.emphasizedAccelerate : undefined,
      }}>
        <Mounted key={mountedItem} />
      </div>

{/*
      <Button
        variant="filled"
        icon={<MaterialSymbol name="settings" />}
        label="Settings" />
      <h2>Dialog</h2>
      <Button
        variant="filledTonal"
        onClick={() => setOpen(true)}
        disabled={open}
        icon={<MaterialSymbol name="delete" />}
        label="Delete" />
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
              label="Cancel" />
            <Button
              variant="text"
              onClick={() => setOpen(false)}
              label="Delete" />
          </>
        } /> */}
      {/* <h2>Radio button</h2>
      <h3>Automatic</h3>
      <Radio groupValue={value} value={0} onValueChange={setValue} />
      <Radio groupValue={value} value={1} onValueChange={setValue} />
      <Radio groupValue={value} value={2} onValueChange={setValue} />
      <Radio groupValue={value} value={3} onValueChange={setValue} />
      <Radio groupValue={value} value={4} onValueChange={setValue} />

      <Radio disabled groupValue={value} value={0} />
      <Radio disabled groupValue={value} value={1} />
      <Radio disabled groupValue={value} value={2} />
      <Radio disabled groupValue={value} value={3} />
      <Radio disabled groupValue={value} value={4} />

      <h2>Lists</h2>

      <div role="list" style={{ maxWidth: 360, borderRadius: 8, outline: `1px solid ${THEME.color.outline}`, width: "100%", paddingBlock: 8 }}>
        <ListItem
          headline="Headline"
          supportingText="Supporting text" />
        <ListItem
          leading={<Avatar><MaterialSymbol name="account_circle" /></Avatar>}
          headline="Manage account"
          supportingText="your_name"
          trailing={<MaterialSymbol name="navigate_next" />} />
        <RadioListItem
          groupValue={value}
          value={0}
          onValueChange={setValue}
          headline="Apple" />
        <RadioListItem
          groupValue={value}
          value={1}
          onValueChange={setValue}
          headline="Apricot" />
        <RadioListItem
          groupValue={value}
          value={2}
          onValueChange={setValue}
          headline="Avocado" />
      </div> */}
    </div>
  );
}
