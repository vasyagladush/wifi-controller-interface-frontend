import { useState } from "react";
import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import { Counter } from "./Counter";

export default {
  title: "UI Kit/Counter",
  component: Counter,
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = () => {
  const [count, setCount] = useState(0);
  return (
    <Counter
      count={count}
      setCount={(val) => {
        setCount(val);
      }}
    />
  );
};

export const CounterDefault = Template.bind({});
