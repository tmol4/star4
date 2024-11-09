import { Button, MaterialSymbol } from "@star4/react";
import { useState } from "react";
import { View } from "~/components/view";

export function ButtonsView() {
  return (
    <View headline="Buttons" supportingText="Buttons help people initiate actions, from sending an email, to sharing a document, to liking a post.">
      <Button variant="elevated" label="Elevated" />
      <Button variant="filled" label="Filled" />
      <Button variant="filledTonal" label="Filled tonal" />
      <Button variant="outlined" label="Outlined" />
      <Button variant="text" label="Text" />
    </View>
  )
}
