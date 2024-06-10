import React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import { ChevronButton } from "./ChevronButton";
import { Direction } from "./Button.interface";

export default {
  title: "UI Kit/Buttons/Chevron",
  component: ChevronButton,

  argTypes: {
    direction: { control: "radio", options: Direction },
  },
} as ComponentMeta<typeof ChevronButton>;

const Template: ComponentStory<typeof ChevronButton> = (args) => (
  <ChevronButton {...args} />
);

export const ChevronBtn = Template.bind({});
ChevronBtn.args = {
  direction: Direction.LEFT,
  disabled: false,
};

export const DisabledChevronBtn = Template.bind({});
DisabledChevronBtn.args = {
  direction: Direction.LEFT,
  disabled: true,
};
