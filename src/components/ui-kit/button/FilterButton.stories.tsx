import React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import { FilterButton } from "./FilterButton";

export default {
  title: "UI Kit/Buttons/Filter",
  component: FilterButton,
} as ComponentMeta<typeof FilterButton>;

const Template: ComponentStory<typeof FilterButton> = (args) => (
  <FilterButton {...args} />
);

export const FilterBtn = Template.bind({});

export const DisabledFilterBtn = Template.bind({});
DisabledFilterBtn.args = {
  disabled: true,
};
