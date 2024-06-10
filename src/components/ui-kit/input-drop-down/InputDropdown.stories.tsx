import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import { InputDropdown } from "./InputDropdown";
import { InputItem } from "./InputDropdown.interface";

export default {
  title: "UI Kit/Input Dropdown",
  component: InputDropdown,
} as ComponentMeta<typeof InputDropdown>;

const mock: InputItem[] = [
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

export const InputDropdownDefault: ComponentStory<typeof InputDropdown> = (
  args
) => {
  const [value, setValue] = useState<InputItem>({ label: "", value: "" });
  return (
    <InputDropdown
      {...args}
      items={mock}
      label="Some label"
      onChange={setValue}
      value={value}
    />
  );
};

export const InputDropdownFullWidth: ComponentStory<typeof InputDropdown> = (
  args
) => {
  const [value, setValue] = useState<InputItem>({ label: "", value: "" });
  return (
    <InputDropdown
      {...args}
      items={mock}
      label="Some label"
      onChange={setValue}
      value={value}
      fullWidth
    />
  );
};
