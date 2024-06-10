import React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import { Search } from "./Search";

export default {
  title: "UI Kit/Search bar",
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

const mock = [
  "Text example value 1",
  "Text example value 2",
  "Text example value 3",
];

export const SearchDefault = Template.bind({});
SearchDefault.args = {
  data: mock,
  onChangeHandler(value) {
    return value;
  },
  placeholder: "Search text...",
};
