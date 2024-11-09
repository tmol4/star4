import { MaterialSymbol, usePresence, TabBar, Tab } from "@star4/react";
import { useState, type FC } from "react";
import { THEME } from "~/theme";
import { DialogsView, ListsView, MenusView, RadioView, TabsView } from "./views";

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
    transitionDuration: [500, 200],
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
        filter: isExiting || !isVisible ? `blur(4px)` : undefined,
        transform: isExiting || !isVisible ? `scale(0.98)` : undefined,
        transitionProperty: "transform, opacity, filter",
        transitionDuration: isEntering ? "500ms" : isExiting ? "200ms" : undefined,
        opacity: isExiting || !isVisible ? 0 : 1,
        transitionTimingFunction: isEntering ? THEME.motion.easing.emphasizedDecelerate : isExiting ? THEME.motion.easing.emphasizedAccelerate : undefined,
      }}>
        <Mounted key={mountedItem} />
      </div>
    </div>
  );
}
