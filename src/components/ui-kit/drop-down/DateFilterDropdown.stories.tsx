import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DateFilterDropdown } from "./DateFilterDropdown";
import { FilterOption } from "./Dropdown.interface";

const items = [
  { label: "Last month", value: "30" },
  { label: "Last 90 days", value: "90" },
  { label: "Last year", value: "365" },
];
export default {
  title: "UI Kit/Dropdown",
  component: DateFilterDropdown,
} as ComponentMeta<typeof DateFilterDropdown>;

const Template: ComponentStory<typeof DateFilterDropdown> = (args) => {
  return <DateFilterDropdown {...args} />;
};

export const DateFilterDropdownDefault = Template.bind({});
DateFilterDropdownDefault.args = {
  items: items,
  onChange(value: FilterOption) {
    return value;
  },
};

export const DisabledDateFilterDropdownDefault = Template.bind({});
DisabledDateFilterDropdownDefault.args = {
  items: items,
  onChange(value: FilterOption) {
    return value;
  },
  disabled: true,
};
