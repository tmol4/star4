import { createEventListenerMap } from "@solid-primitives/event-listener";
import { resolveElements } from "@solid-primitives/refs";
import { createEffect, createMemo, For, splitProps, type Component } from "solid-js";
import { Video } from "./video";
import { VideoControls } from "./video-controls";
import { styles } from "./video-player.css";

export namespace VideoPlayer {
  export type Props = {
    sources: [Source, ...Source[]];
    disablePictureInPicture?: boolean;
  }
  export type Source = {
    src: string;
    type?: string;
    media?: string;
  }
}

export const VideoPlayer: Component<VideoPlayer.Props> = (props) => {
  const [, local] = splitProps(props, []);

  // const sources = createMemo(() => {
  //   return (
  //     <For
  //   )
  // });

  let videoRef!: HTMLVideoElement;

  createEventListenerMap(
    () => videoRef,
    {
      durationchange: () => {}
    },
  );

  return (
    <div class={styles.container}>
      <Video
        sources={local.sources}
        disablePictureInPicture={local.disablePictureInPicture} />
      <VideoControls />
    </div>
  );
}
