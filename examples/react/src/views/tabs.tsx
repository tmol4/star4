import { Button, MaterialSymbol, Tab, TabBar } from "@star4/react";
import { useState, type ReactNode } from "react";
import { View } from "~/components/view";

export function TabsView() {
  const [value, setValue] = useState(0);

  const [count, setCount] = useState(3);
  const [value2, setValue2] = useState(0);

  const tabs: ReactNode[] = [];
  for(let i = 0; i < count; i++) {
    tabs.push(<Tab key={i} value={i} label={`Tab ${i + 1}`} />)
  }

  return (
    <View headline="Tabs" supportingText="Tabs organize groups of related content that are at the same level of hierarchy.">
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
      <Button variant="filledTonal" icon={<MaterialSymbol name="add" />} label="Add tab" onClick={() => setCount(prev => prev + 1)} />
      <Button variant="filledTonal" icon={<MaterialSymbol name="remove" />} label="Remove tab" onClick={() => setCount(prev => prev > 1 ? prev - 1 : 1)} />
      <TabBar value={value2} onValueChange={setValue2}>
        {tabs}
      </TabBar>

    </View>
  );
}
