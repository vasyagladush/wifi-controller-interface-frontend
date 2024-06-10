import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import { PhonenumberDropdown } from "./PhonenumberDropdown";
import { PhoneInputValues } from "./InputDropdown.interface";

export default {
  title: "UI Kit/Input Dropdown",
  component: PhonenumberDropdown,
} as ComponentMeta<typeof PhonenumberDropdown>;

const Template: ComponentStory<typeof PhonenumberDropdown> = (args) => (
  <PhonenumberDropdown {...args} />
);

const phone: string = "+376 12345678910";

export const PhonenumberDropdownDefault = Template.bind({});
PhonenumberDropdownDefault.args = {
  value: {
    code: phone?.slice(0, phone?.indexOf(" ")),
    number: phone,
    countryCode: "UK",
  },
  onChange(value?: PhoneInputValues) {
    return value;
  },
};
