import { MaterialSymbol, usePresence, TabBar, Tab } from "@star4/react";
import { useState, type FC } from "react";
import { THEME } from "~/theme";
import { DialogsView, ListsView, MenusView, RadioView, TabsView } from "./views";

// const MENU_ITEMS = [
//   "Apple",
//   "Apricot",
//   "Avocado",
//   "Banana",
//   "Cucumber",
//   "Grapes",
//   "Olive",
//   "Orange"
// ];


// type ExampleProps = {
//   headline: ReactNode;
//   supportingText?: ReactNode;
//   children?: ReactNode;
// }
// function Example({ headline, supportingText, children }: ExampleProps) {
//   return <View headline={headline} supportingText={supportingText} children={children} />
// }

// function DialogExample() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <Example headline="Dialogs" supportingText="Dialogs provide important prompts in a user flow.">
//       <Button
//         variant="outlined"
//         onClick={() => setIsOpen(true)}
//         disabled={isOpen}
//         icon={<MaterialSymbol name="delete" />}
//         label="Delete" />
//       <Dialog
//         open={isOpen}
//         onCancel={() => setIsOpen(false)}
//         icon={<MaterialSymbol name="delete" />}
//         headline="Permanently delete?"
//         content="Deleting the selected photos will also remove them from all synced devices."
//         actions={
//           <>
//             <Button
//               variant="text"
//               onClick={() => setIsOpen(false)}
//               label="Cancel" />
//             <Button
//               variant="text"
//               onClick={() => setIsOpen(false)}
//               label="Delete" />
//           </>
//         } />
//     </Example>
//   );
// }
// function MenuExample() {
//   const [items, setItems] = useState(3);

//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   return (
//     <Example headline="Menus" supportingText="Menus display a list of choices on a temporary surface.">
//       <div style={{ display: "grid", gridTemplateColumns: "minmax(112px, 280px) 1fr 1fr", gridTemplateRows: "auto 1fr", gridAutoFlow: "column", gap: 16, minHeight: 360  }}>
//         <Button
//           variant={isMenuOpen ? "filledTonal" : "filled"}
//           icon={<MaterialSymbol name={isMenuOpen ? "close" : "menu"} />}
//           label={isMenuOpen ? "Close" : "Open"}
//           onClick={() => setIsMenuOpen(prev => !prev)}
//           style={{ gridColumn: 1 }}/>
//         <Menu open={isMenuOpen}>
//           {
//             MENU_ITEMS
//               .filter((_, index) => index + 1 <= items)
//               .map((value, index) => <Menu.Item key={index} headline={value} />)
//           }
//         </Menu>
//         <Button
//           variant="filledTonal"
//           icon={<MaterialSymbol name="remove" />}
//           label="Remove"
//           onClick={() => setItems(prev => prev > 1 ? prev - 1 : 1)}
//           disabled={items <= 1}
//           style={{ gridColumn: 2 }} />
//         <Button
//           variant="filledTonal"
//           icon={<MaterialSymbol name="add" />}
//           label="Add"
//           onClick={() => setItems(prev => prev < MENU_ITEMS.length ? prev + 1 : MENU_ITEMS.length)}
//           disabled={items >= MENU_ITEMS.length}
//           style={{ gridColumn: 3 }} />
//       </div>
//     </Example>
//   );
// }

// function RadioExample() {
//   return (
//     <Example headline="Radio button" supportingText="Radio buttons let people select one option from a set of options.">

//     </Example>
//   )
// }

// function TabsExample() {
//   const [value, setValue] = useState(0);

//   const [count, setCount] = useState(3);
//   const [value2, setValue2] = useState(0);

//   const tabs: ReactNode[] = [];
//   for(let i = 0; i < count; i++) {
//     tabs.push(<Tab key={i} value={i} label={`Tab ${i + 1}`} />)
//   }

//   return (
//     <Example headline="Tabs" supportingText="Tabs organize groups of related content that are at the same level of hierarchy.">
//       <TabBar value={value} onValueChange={setValue}>
//         <Tab
//           value={0}
//           icon={<MaterialSymbol name="explore" />}
//           label="Explore" />
//         <Tab
//           value={1}
//           icon={<MaterialSymbol name="flight" />}
//           label="Flights" />
//         <Tab
//           value={2}
//           icon={<MaterialSymbol name="luggage" />}
//           label="Trips" />
//         <Tab
//           value={3}
//           icon={<MaterialSymbol name="explore_nearby" />}
//           label="Nearby" />
//         <Tab
//           value={4}
//           icon={<MaterialSymbol name="map" />}
//           label="Map" />
//       </TabBar>
//       <Button variant="filledTonal" icon={<MaterialSymbol name="add" />} label="Add tab" onClick={() => setCount(prev => prev + 1)} />
//       <Button variant="filledTonal" icon={<MaterialSymbol name="remove" />} label="Remove tab" onClick={() => setCount(prev => prev > 1 ? prev - 1 : 1)} />
//       <TabBar value={value2} onValueChange={setValue2}>
//         {tabs}
//       </TabBar>

//     </Example>
//   );
// }

// const enum Examples {
//   Menu,
//   Dialog,
//   Radio,
//   Checkbox,
//   Tabs,
// }
// const ExamplesMap = {
//   [Examples.Dialog]: DialogExample,
//   [Examples.Menu]: MenuExample,
//   [Examples.Radio]: RadioExample,
//   [Examples.Checkbox]: RadioExample,
//   [Examples.Tabs]: TabsExample,
// }


const enum Views {
  Dialogs,
  Menus,
  Radio,
  Checkbox,
  Tabs,
  Lists,
}
const VIEWS_MAP = {
  [Views.Dialogs]: DialogsView,
  [Views.Menus]: MenusView,
  [Views.Checkbox]: TabsView,
  [Views.Tabs]: TabsView,
  [Views.Radio]: RadioView,
  [Views.Lists]: ListsView,
} satisfies Record<Views, FC>;

export const App: FC = () => {
  const [example, setExample] = useState(Views.Dialogs);

  const { mountedItem, isEntering, isExiting, isVisible } = usePresence({
    source: example,
    transitionDuration: 250,
    initialEnter: true,
  });
  const Mounted = VIEWS_MAP[mountedItem];

  return (
    <div className="demo" style={{ padding: 16, display: "flex", flexDirection: "column", gap: 16 }}>
      <TabBar value={example} onValueChange={setExample}>
        <Tab
          value={Views.Dialogs}
          icon={<MaterialSymbol name="dialogs" />}
          label="Dialogs" />
        <Tab
          value={Views.Menus}
          icon={<MaterialSymbol name="menu" />}
          label="Menus" />
        <Tab
          value={Views.Radio}
          icon={<MaterialSymbol name="radio_button_checked" />}
          label="Radio" />
        <Tab
          value={Views.Checkbox}
          icon={<MaterialSymbol name="check_box" />}
          label="Checkbox" />
        <Tab
          value={Views.Tabs}
          icon={<MaterialSymbol name="tab" />}
          label="Tabs" />
        <Tab
          value={Views.Lists}
          icon={<MaterialSymbol name="list" />}
          label="Lists" />
      </TabBar>
      <div style={{
        transformOrigin: "top center",
        filter: isExiting || !isVisible ? `blur(6px)` : undefined,
        transform: isExiting || !isVisible ? `scale(0.96)` : undefined,
        transitionProperty: "transform, opacity, filter",
        transitionDuration: "250ms",
        opacity: isExiting || !isVisible ? 0 : 1,
        transitionTimingFunction: isEntering ? THEME.motion.easing.emphasizedDecelerate : isExiting ? THEME.motion.easing.emphasizedAccelerate : undefined,
      }}>
        <Mounted key={mountedItem} />
      </div>
    </div>
  );
}
