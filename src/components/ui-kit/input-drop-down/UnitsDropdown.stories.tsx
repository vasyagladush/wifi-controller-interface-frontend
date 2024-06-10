import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UnitItem } from "./InputDropdown.interface";
import { UnitsDropdown } from "./UnitsDropdown";

export default {
  title: "UI Kit/Input Dropdown",
  component: UnitsDropdown,
} as ComponentMeta<typeof UnitsDropdown>;

const Template: ComponentStory<typeof UnitsDropdown> = (args) => (
  <UnitsDropdown {...args} />
);

export const UnitsDropdownDefault = Template.bind({});
UnitsDropdownDefault.args = {
  label: "Some label",
  items: ["cm", "ml", "m"],
  onChange(value: UnitItem) {
    return value;
  },
};
