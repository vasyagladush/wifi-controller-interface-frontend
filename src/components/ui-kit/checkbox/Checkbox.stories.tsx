import { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Checkbox } from "./Checkbox";

export default {
  title: "UI Kit/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      onChange={() => {
        setChecked(!checked);
      }}
    />
  );
};

export const CheckboxDefault = Template.bind({});
