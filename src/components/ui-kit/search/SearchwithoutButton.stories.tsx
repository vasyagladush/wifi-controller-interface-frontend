import React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import { SearchWithoutButton } from "./SearchWithoutButton";

export default {
  title: "UI Kit/Search bar",
  component: SearchWithoutButton,
} as ComponentMeta<typeof SearchWithoutButton>;

const Template: ComponentStory<typeof SearchWithoutButton> = (args) => (
  <SearchWithoutButton {...args} />
);

const mock = [
  "Text example value 1",
  "Text example value 2",
  "Text example value 3",
];

export const SearchWithoutButtonDefault = Template.bind({});
SearchWithoutButtonDefault.args = {
  onChangeHandler(value) {
    return value;
  },
  placeholder: "Search text...",
  data: mock,
};
