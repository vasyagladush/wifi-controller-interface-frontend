import { useState } from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import { DateTime } from "luxon";
import { DatePicker } from "./DatePicker";

export default {
  title: "UI Kit/DatePicker",
  component: DatePicker,
} as ComponentMeta<typeof DatePicker>;

const Template: ComponentStory<typeof DatePicker> = () => {
  const [value, setValue] = useState<DateTime | undefined>();
  return <DatePicker value={value} onChange={setValue} />;
};

export const DatePickerDefault = Template.bind({});
