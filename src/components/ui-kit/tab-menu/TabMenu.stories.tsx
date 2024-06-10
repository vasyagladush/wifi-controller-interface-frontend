import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import styled from "styled-components";
import { TabMenu } from "./TabMenu";

export default {
  title: "UI Kit/TabMenu",
  component: TabMenu,
} as ComponentMeta<typeof TabMenu>;

const Template: ComponentStory<typeof TabMenu> = () => {
  const Component = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    height: 100px;
    width: 100%;
    border: 1px dashed gray;
  `;
  const menus = [
    {
      name: "Menu Item 1",
      component: <Component>Component 1</Component>,
    },
    {
      name: "Menu Item 2",
      component: <Component>Component 2</Component>,
    },
    {
      name: "Menu Item 3",
      component: <Component>Component 3</Component>,
    },
  ];

  return <TabMenu startWithIndex={0} menus={menus} />;
};

export const TabMenuDefault = Template.bind({});
