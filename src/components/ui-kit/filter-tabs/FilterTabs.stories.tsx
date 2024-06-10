import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import { FilterTabs } from "./FilterTabs";

export default {
  title: "UI Kit/FilterTabs",
  component: FilterTabs,
} as ComponentMeta<typeof FilterTabs>;

const Template: ComponentStory<typeof FilterTabs> = () => {
  const menus = [
    {
      name: "Menu Item 1",
      value: "1",
    },
    {
      name: "Menu Item 2",
      value: "2",
    },
    {
      name: "Menu Item 3",
      value: "3",
    },
  ];

  return (
    <FilterTabs startWithIndex={0} menus={menus} clickHandler={() => {}} />
  );
};

export const CounterDefault = Template.bind({});
