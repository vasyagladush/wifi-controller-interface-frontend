import React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import { DetailsButton } from "./DetailsButton";

export default {
  title: "UI Kit/Buttons/Details",
  component: DetailsButton,
} as ComponentMeta<typeof DetailsButton>;

const Template: ComponentStory<typeof DetailsButton> = (args) => (
  <DetailsButton {...args} />
);

export const DetailsBtn = Template.bind({});

export const DisabledDetailsBtn = Template.bind({});
DisabledDetailsBtn.args = {
  disabled: true,
};
