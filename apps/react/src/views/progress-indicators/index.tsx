import { Button, CircularProgress, MaterialSymbol } from "@star4/react";
import { useEffect, useState } from "react";
import { View } from "~/components/view";
import { THEME } from "~/theme";

// https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx1i8fz8-1P-progress-indicator-guidelines-types-determinate-indeterminate%202.mp4?alt=media&token=c408967f-7cd4-49db-8518-e032692dd6b0

export default function ProgressIndicatorsView() {
  return (
    <View
      headline="Progress indicators"
      supportingText="Progress indicators inform users about the status of ongoing processes, such as loading an app or submitting a form.">
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
          <CircularProgress />
          <LoadingVideo />
          <Button variant="filled" icon={<CircularProgress />} label="Loading" />
        </div>
    </View>
  )
}



function LoadingVideo() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  return (
    <div style={{
      position: "relative",

      width: "100%",
      height: "100%",
      maxWidth: "840px",
      marginInline: "auto",

      backgroundColor: THEME.color.surfaceContainerHighest,
      borderRadius: THEME.shape.corner.extraLarge,
      overflow: "hidden",

      display: "grid",
      placeItems: "center",
      placeContent: "center",
      aspectRatio: "2.25 / 1",
    }}>

      {isVisible && (
        <video
          autoPlay
          loop
          preload="auto"
          onCanPlay={() => setIsLoading(false)}
          style={{ objectFit: "cover", display: isLoading ? "none" : "block" }}>
            <source
              type="video/mp4"
              src="https://firebasestorage.googleapis.com/v0/b/design-spec/o/projects%2Fgoogle-material-3%2Fimages%2Flx1i8fz8-1P-progress-indicator-guidelines-types-determinate-indeterminate%202.mp4?alt=media&token=c408967f-7cd4-49db-8518-e032692dd6b0" />
        </video>
      )}
      {isLoading && (
        <Button
          onClick={() => setIsVisible(true)}
          variant="filled"
          icon={isVisible && isLoading ? <CircularProgress /> : <MaterialSymbol name="play_arrow" />}
          label="Play" />
      )}

    </div>
  );
}
