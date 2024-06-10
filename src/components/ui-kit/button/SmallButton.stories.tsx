import React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import {
  SmallButtonContentType,
  SmallButtonVariant,
} from "./SmallButton.interface";
import SmallButton from "./SmallButton";

export default {
  title: "UI Kit/Button",
  component: SmallButton,
} as ComponentMeta<typeof SmallButton>;

const Template: ComponentStory<typeof SmallButton> = (args) => (
  <SmallButton {...args} />
);

export const SmallButtonDefault = Template.bind({});

export const SmallButtonPlusContained = Template.bind({});
SmallButtonPlusContained.args = {
  contentType: SmallButtonContentType.PLUS,
  variant: SmallButtonVariant.CONTAINED,
};

export const SmallButtonMinusContained = Template.bind({});
SmallButtonMinusContained.args = {
  contentType: SmallButtonContentType.MINUS,
  variant: SmallButtonVariant.CONTAINED,
};

export const SmallButtonPlusOutlined = Template.bind({});
SmallButtonPlusOutlined.args = {
  contentType: SmallButtonContentType.PLUS,
  variant: SmallButtonVariant.OUTLINED,
};

export const SmallButtonMinusOutlined = Template.bind({});
SmallButtonMinusOutlined.args = {
  contentType: SmallButtonContentType.MINUS,
  variant: SmallButtonVariant.OUTLINED,
};
