import React from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import { SearchTags } from "./SearchTags";

export default {
  title: "UI Kit/Search bar",
  component: SearchTags,
} as ComponentMeta<typeof SearchTags>;

const Template: ComponentStory<typeof SearchTags> = (args) => (
  <SearchTags {...args} />
);

export const SearchTagsDefault = Template.bind({});
SearchTagsDefault.args = {
  onChangeHandler(value) {
    return value;
  },
  placeholder: "Cosmetics, SALE, etc",
};
