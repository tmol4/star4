import { Avatar, Divider, ListItem, MaterialSymbol } from "@star4/react";
import { View } from "~/components/view";
import { THEME } from "~/theme";

export function ListsView() {
  return (
    <View headline="Lists" supportingText="Lists are continuous, vertical indexes of text and images.">
      <div style={{
        maxWidth: 360,
        border: `1px solid ${THEME.color.outline}`,
        borderRadius: THEME.shape.corner.small,
        paddingBlock: 8,

        display: "flex",
        flexDirection: "column",
      }}>
        <ListItem
          leading={<Avatar>U</Avatar>}
          headline="Manage account"
          supportingText="Username"
          trailing={<MaterialSymbol name="navigate_next" />} />
        <Divider style={{ marginBlock: 8 }} />
        <span
          style={{
            paddingInline: 16,
            marginBlock: 8,
            ...THEME.typescale.title.small,
            color: THEME.color.secondary,
          }}
          children="Manage chats" />
        <ListItem
          leading={<Avatar>B</Avatar>}
          headline="Bob"
          supportingText="Hello! How have you been doing?"
          trailing="1" />
        <ListItem
          leading={<Avatar>A</Avatar>}
          headline="Ann"
          supportingText="Yes, I think so, but you'd better check."
          trailing="3" />

      </div>
    </View>
  );
}
