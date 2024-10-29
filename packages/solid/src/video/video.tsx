import { createEventListenerMap } from "@solid-primitives/event-listener";
import { resolveElements } from "@solid-primitives/refs";
import { createEffect, createMemo, For, splitProps, type Component } from "solid-js";

export namespace Video {
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

export const Video: Component<Video.Props> = (props) => {
  const [, local] = splitProps(props, []);

  let videoRef!: HTMLVideoElement;

  createEventListenerMap(
    () => videoRef,
    {
      durationchange: () => {}
    },
  );

  return (
    <div>
      <video
        ref={videoRef}
        controls={false}
        disablepictureinpicture={local.disablePictureInPicture}>
          <For each={local.sources}>{
            (source, index) => (
              <source
                src={source.src}
                type={source.type}
                media={source.media} />
            )
          }</For>
      </video>
    </div>
  );
}
