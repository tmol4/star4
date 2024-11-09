import { Button, IconButton, MaterialSymbol, Tab, TabBar } from "@star4/react";
import { useState, type ReactNode } from "react";
import { View } from "~/components/view";

export function TabsView() {
  const [value, setValue] = useState(0);

  const [count, setCount] = useState(3);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);

  const tabs: ReactNode[] = [];
  for(let i = 0; i < count; i++) {
    tabs.push(<Tab key={i} value={i} label={`Tab ${i + 1}`} />)
  }

  return (
    <View headline="Tabs" supportingText="Tabs organize groups of related content that are at the same level of hierarchy.">
      <h2>Tabs with icons</h2>
      <TabBar value={value} onValueChange={setValue}>
        <Tab
          value={0}
          icon={<MaterialSymbol name="explore" />}
          label="Explore" />
        <Tab
          value={1}
          icon={<MaterialSymbol name="flight" />}
          label="Flights" />
        <Tab
          value={2}
          icon={<MaterialSymbol name="luggage" />}
          label="Trips" />
        <Tab
          value={3}
          icon={<MaterialSymbol name="explore_nearby" />}
          label="Nearby" />
        <Tab
          value={4}
          icon={<MaterialSymbol name="map" />}
          label="Map" />
      </TabBar>

      <h2>Dynamic tabs</h2>
      <p style={{ marginBottom: 8 }}>This example showcases dynamically adding and removing tabs from a tab bar.</p>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <TabBar value={value2} onValueChange={setValue2} style={{ width: "100%", /* or flexGrow: 1 */ }}>
          {tabs}
        </TabBar>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <IconButton
            variant="outlined"
            disabled={count <= 2}
            selected={false}
            onClick={() => {
              setCount(prev => {
                if(prev + 1 >= value2) setValue2(0);
                return Math.max(prev - 1, 2);
              });
            }}
            icon={<MaterialSymbol name="remove" />} />
          <IconButton
            variant="filled"
            onClick={() => setCount(prev => prev + 1)}
            icon={<MaterialSymbol name="add" />} />
        </div>
      </div>
      <h2>Controllable tabs</h2>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
        <IconButton
          variant="filledTonal"
          disabled={value3 <= 0}
          onClick={() => setValue3(prev => Math.max(prev - 1, 0))}
          icon={<MaterialSymbol name="chevron_left" />} />
        <TabBar value={value3} onValueChange={setValue3} style={{ flexGrow: 1 }}>
          <Tab value={0} label="Dogs" />
          <Tab value={1} label="Cats" />
          <Tab value={2} label="Parrots" />
        </TabBar>
        <IconButton
          variant="filledTonal"
          disabled={value3 >= VALUE3_MAX}
          onClick={() => setValue3(prev => Math.min(prev + 1, VALUE3_MAX))}
          icon={<MaterialSymbol name="chevron_right" />} />
      </div>
    </View>
  );
}

const VALUE3_MAX = 2;
