import { Ripple,  TabBar, Tab, Popover, Radio, VideoPlayer, MaterialSymbol, Lenis } from "@star4/solid";
import { createSignal, For, type Signal, type VoidComponent } from "solid-js";

const sizes = ["small", "medium", "large"] as const;

export const App: VoidComponent = () => {
  const [open, setOpen] = createSignal(false);
  const [value, setValue] = createSignal(0);
  const [selectedValue, setSelectedValue] = createSignal(0);
  return (
    <Lenis root>
      <div style={{ padding: "16px", height: "300dvh" }}>
        <Popover open={open()}>
          <button onClick={() => setOpen(false)}>Close</button>
          TEST
        </Popover>
        <button onClick={() => setOpen(true)}>Open</button>

        <Radio groupValue={value()} value={0} onChange={setValue} />
        <Radio groupValue={value()} value={1} onChange={setValue} />

        {/* <VideoPlayer sources={[{ src: "https://www.w3schools.com/html/mov_bbb.mp4" }]} /> */}

        <TabBar value={selectedValue()} onChange={setSelectedValue}>
          <Tab value={0} icon={<MaterialSymbol name="videocam" />} label="Videos" />
          <Tab value={1} icon={<MaterialSymbol name="image" />} label="Photos" />
          <Tab value={2} icon={<MaterialSymbol name="music_note" />} label="Audio" />
          <Tab value={3} icon={<MaterialSymbol name="explore" />} label="Explore" />
          <Tab value={4} icon={<MaterialSymbol name="flight" />} label="Flights" />
          <Tab value={5} icon={<MaterialSymbol name="luggage" />} label="Trips" />
          <Tab value={6} icon={<MaterialSymbol name="notifications" />} label="Notifications" />
        </TabBar>

        <MaterialSymbol name="add" />
      </div>
    </Lenis>
  )
}
