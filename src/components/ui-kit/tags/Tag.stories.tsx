import React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import { Tag } from "./Tag";

export default {
  title: "UI Kit/Tags",
  component: Tag,
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = () => (
  <Tag text="Text" onClick={() => {}} />
);

export const TagDefault = Template.bind({});
