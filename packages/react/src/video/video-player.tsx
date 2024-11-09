import { createIdentifiableElement } from "@star4/react-utils";
import { forwardRef, memo } from "react";

export namespace VideoPlayer {
  export type Props = {

  }
}

const VideoPlayerComponent = forwardRef(
  function VideoPlayer() {
    return (
      <div></div>
    );
  },
);

export const VideoPlayer = Object.assign(
  memo(VideoPlayerComponent),
  createIdentifiableElement("IS_VIDEO_PLAYER"),
);
