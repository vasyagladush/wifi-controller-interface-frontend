import React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import { CloseButton } from "./CloseButton";

export default {
  title: "UI Kit/Button",
  component: CloseButton,
} as ComponentMeta<typeof CloseButton>;

const Template: ComponentStory<typeof CloseButton> = (args) => (
  <CloseButton {...args} />
);

export const CloseBtn = Template.bind({});
