import React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import { Actions } from "./Actions";

export default {
  title: "UI Kit/Actions",
  component: Actions,
} as ComponentMeta<typeof Actions>;

const Template: ComponentStory<typeof Actions> = () => (
  <div style={{ display: "flex", justifyContent: "flex-end", width: "200px" }}>
    <Actions
      externalUniqueId={"1"}
      externalOpenState={"1" === "1"}
      externalOpenAction={(id) => null}
      actions={[
        {
          label: "Item 1",
          onClick: () => {},
        },
        {
          label: "Item 2",
          onClick: () => {},
        },
        {
          label: "Item 3",
          onClick: () => {},
        },
        {
          color: "#EF6355",
          label: "Item 4",
          onClick: () => {},
        },
      ]}
    />
  </div>
);

export const ActionsDefault = Template.bind({});
