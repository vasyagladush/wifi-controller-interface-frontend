import React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";

import { EditButton } from "./EditButton";

export default {
  title: "UI Kit/Buttons/Edit",
  component: EditButton,
} as ComponentMeta<typeof EditButton>;

const Template: ComponentStory<typeof EditButton> = (args) => (
  <EditButton {...args} />
);

export const EditBtn = Template.bind({});

export const DisabledEditBtn = Template.bind({});
DisabledEditBtn.args = {
  disabled: true,
};
