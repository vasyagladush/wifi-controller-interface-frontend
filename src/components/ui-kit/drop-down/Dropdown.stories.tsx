import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import { Item } from "./Dropdown.interface";
import { BiExport } from "../../icons";

export default {
  title: "UI Kit/Dropdown",
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => (
  <Dropdown {...args} />
);

const mock: Item[] = [
  {
    label: "Item 1",
    value: "item1",
  },
  {
    label: "Item 2",
    value: "item2",
  },
  {
    label: "Item 3",
    value: "item3",
  },
];

export const DropdownDefault = Template.bind({});
DropdownDefault.args = {
  items: mock,
  onChange(value: Item) {
    return value;
  },
};

export const DropdownWithIcon = Template.bind({});
DropdownWithIcon.args = {
  items: mock,
  onChange(value: Item) {
    return value;
  },
  leftIcon: <BiExport />,
};

export const DisabledDropdown = Template.bind({});
DisabledDropdown.args = {
  items: mock,
  onChange(value: Item) {
    return value;
  },
  disabled: true,
};
