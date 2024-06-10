import React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";

import { Button } from "./Button";
import { ButtonVariant } from "./Button.interface";
import { BiExport } from "../../icons";

export default {
  title: "UI Kit/Buttons",
  component: Button,

  argTypes: {
    variant: { control: "radio", options: ButtonVariant },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ContainedButton = Template.bind({});
ContainedButton.args = {
  variant: ButtonVariant.CONTAINED,
  children: "Contained button",
};

export const ContainedButtonWithIcon = Template.bind({});
ContainedButtonWithIcon.args = {
  variant: ButtonVariant.CONTAINED,
  children: "Contained button",
  leftIcon: <BiExport />,
};

export const FullWidthContainedButton = Template.bind({});
FullWidthContainedButton.args = {
  variant: ButtonVariant.CONTAINED,
  children: "Contained button",
  fullWidth: true,
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  variant: ButtonVariant.OUTLINED,
  children: "Outlined button",
};

export const OutlinedButtonWithIcon = Template.bind({});
OutlinedButtonWithIcon.args = {
  variant: ButtonVariant.OUTLINED,
  children: "Outlined button",
  leftIcon: <BiExport />,
};

export const FullWidthOutlinedButton = Template.bind({});
FullWidthOutlinedButton.args = {
  variant: ButtonVariant.OUTLINED,
  children: "Outlined button",
  fullWidth: true,
};

export const LoadingButton = Template.bind({});
LoadingButton.args = {
  loading: true,
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  disabled: true,
  children: "Disabled button",
};
