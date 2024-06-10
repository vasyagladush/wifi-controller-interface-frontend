import { useState } from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import { SwitchButton } from "./SwitchButton";

export default {
  title: "UI Kit/Button",
  component: SwitchButton,
} as ComponentMeta<typeof SwitchButton>;

const Template: ComponentStory<typeof SwitchButton> = () => {
  const [checked, setChecked] = useState(false);
  return (
    <SwitchButton
      checked={checked}
      onChange={(val) => {
        setChecked(val);
      }}
    />
  );
};

export const SwitchBtn = Template.bind({});
