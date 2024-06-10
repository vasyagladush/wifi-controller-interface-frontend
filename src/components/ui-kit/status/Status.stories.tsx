import React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import { Status } from "./Status";

export default {
  title: "UI Kit/Status",
  component: Status,
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = (args) => <Status {...args} />;

export const StatusDefault = Template.bind({});
StatusDefault.args = {
  status: "pending",
};
