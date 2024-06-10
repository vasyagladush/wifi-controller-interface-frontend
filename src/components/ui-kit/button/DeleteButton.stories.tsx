import React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";

import { DeleteButton } from "./DeleteButton";

export default {
  title: "UI Kit/Buttons/Delete",
  component: DeleteButton,
} as ComponentMeta<typeof DeleteButton>;

const Template: ComponentStory<typeof DeleteButton> = (args) => (
  <DeleteButton {...args} />
);

export const DeleteButtonWithChildren = Template.bind({});
DeleteButtonWithChildren.args = {
  children: "Delete button",
};
export const DisabledDeleteButtonWithChildren = Template.bind({});
DisabledDeleteButtonWithChildren.args = {
  children: "Delete button",
  disabled: true,
};

export const DeleteButtonWithoutChildren = Template.bind({});

export const DisabledDeleteButtonWithoutChildren = Template.bind({});
DisabledDeleteButtonWithoutChildren.args = {
  disabled: true,
};
