import React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import { CopyButton } from "./CopyButton";

export default {
  title: "UI Kit/Buttons/Copy",
  component: CopyButton,
} as ComponentMeta<typeof CopyButton>;

const Template: ComponentStory<typeof CopyButton> = (args) => (
  <CopyButton {...args} />
);

export const CopyBtn = Template.bind({});

export const DisabledCopyBtn = Template.bind({});
DisabledCopyBtn.args = {
  disabled: true,
};
