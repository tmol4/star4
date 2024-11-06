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
    transitionDuration: [400, 200],
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
        transitionDuration: isEntering ? "400ms" : isExiting ? "200ms" : undefined,
        opacity: isExiting || !isVisible ? 0 : 1,
        transitionTimingFunction: isEntering ? THEME.motion.easing.emphasizedDecelerate : isExiting ? THEME.motion.easing.emphasizedAccelerate : undefined,
      }}>
        <Mounted key={mountedItem} />
      </div>
    </div>
  );
}
